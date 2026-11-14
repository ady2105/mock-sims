import React, { useState } from "react";
import { X, Delete } from "lucide-react";

export function VirtualCalculator({ isOpen, onClose }) {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const [pendingOp, setPendingOp] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [clearOnNextDigit, setClearOnNextDigit] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (digit) => {
    if (display === "0" || clearOnNextDigit) {
      setDisplay(String(digit));
      setClearOnNextDigit(false);
    } else {
      if (display.length < 14) setDisplay(display + digit);
    }
  };

  const handleDecimal = () => {
    if (clearOnNextDigit) {
      setDisplay("0.");
      setClearOnNextDigit(false);
      return;
    }
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const handleClear = () => {
    setDisplay("0");
    setPendingOp(null);
    setPrevValue(null);
    setClearOnNextDigit(false);
  };

  const handleBackspace = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const handleOperator = (op) => {
    const current = parseFloat(display);
    if (prevValue !== null && pendingOp && !clearOnNextDigit) {
      const result = executeOp(prevValue, current, pendingOp);
      setDisplay(String(result));
      setPrevValue(result);
    } else {
      setPrevValue(current);
    }
    setPendingOp(op);
    setClearOnNextDigit(true);
  };

  const executeOp = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Error";
      default: return b;
    }
  };

  const handleEquals = () => {
    if (pendingOp && prevValue !== null) {
      const current = parseFloat(display);
      const result = executeOp(prevValue, current, pendingOp);
      setDisplay(String(result));
      setPrevValue(null);
      setPendingOp(null);
      setClearOnNextDigit(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 neo-card bg-[#FDE047] p-2.5 select-none font-mono">
      <div className="flex items-center justify-between pb-2 border-b-2 border-black text-black">
        <span className="text-xs font-black uppercase tracking-wider">
          CAT Virtual Calculator
        </span>
        <button onClick={onClose} className="neo-btn bg-white p-0.5">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="my-2.5 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
        <div className="text-[10px] text-black/60 text-right h-4">
          {prevValue !== null && `${prevValue} ${pendingOp || ""}`}
          {memory !== 0 && <span className="float-left text-amber-700 font-bold">M</span>}
        </div>
        <div className="text-right text-2xl font-black tracking-tight text-black overflow-x-auto whitespace-nowrap">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 text-xs font-black">
        <button onClick={() => setMemory(0)} className="neo-btn py-1.5 bg-white text-black">MC</button>
        <button onClick={() => { setDisplay(String(memory)); setClearOnNextDigit(true); }} className="neo-btn py-1.5 bg-white text-black">MR</button>
        <button onClick={() => setMemory(parseFloat(display))} className="neo-btn py-1.5 bg-white text-black">MS</button>
        <button onClick={() => setMemory(memory + parseFloat(display))} className="neo-btn py-1.5 bg-white text-black">M+</button>
        <button onClick={() => setMemory(memory - parseFloat(display))} className="neo-btn py-1.5 bg-white text-black">M-</button>

        <button onClick={handleBackspace} className="neo-btn py-1.5 bg-[#FED7AA] text-black"><Delete className="h-3.5 w-3.5 mx-auto" /></button>
        <button onClick={handleClear} className="neo-btn py-1.5 bg-[#FCA5A5] text-black">C</button>
        <button onClick={() => setDisplay(String(-parseFloat(display)))} className="neo-btn py-1.5 bg-white text-black">±</button>
        <button onClick={() => { const v = parseFloat(display); setDisplay(v>=0?String(Math.sqrt(v)):"Error"); setClearOnNextDigit(true); }} className="neo-btn py-1.5 bg-white text-black">√</button>
        <button onClick={() => handleOperator("/")} className="neo-btn py-1.5 bg-[#FB923C] text-black">÷</button>

        <button onClick={() => handleDigit(7)} className="neo-btn py-1.5 bg-white text-black">7</button>
        <button onClick={() => handleDigit(8)} className="neo-btn py-1.5 bg-white text-black">8</button>
        <button onClick={() => handleDigit(9)} className="neo-btn py-1.5 bg-white text-black">9</button>
        <button onClick={() => { const v = parseFloat(display); setDisplay(v!==0?String(1/v):"Error"); setClearOnNextDigit(true); }} className="neo-btn py-1.5 bg-white text-black">1/x</button>
        <button onClick={() => handleOperator("*")} className="neo-btn py-1.5 bg-[#FB923C] text-black">×</button>

        <button onClick={() => handleDigit(4)} className="neo-btn py-1.5 bg-white text-black">4</button>
        <button onClick={() => handleDigit(5)} className="neo-btn py-1.5 bg-white text-black">5</button>
        <button onClick={() => handleDigit(6)} className="neo-btn py-1.5 bg-white text-black">6</button>
        <button onClick={() => handleOperator("%")} className="neo-btn py-1.5 bg-white text-black">%</button>
        <button onClick={() => handleOperator("-")} className="neo-btn py-1.5 bg-[#FB923C] text-black">−</button>

        <button onClick={() => handleDigit(1)} className="neo-btn py-1.5 bg-white text-black">1</button>
        <button onClick={() => handleDigit(2)} className="neo-btn py-1.5 bg-white text-black">2</button>
        <button onClick={() => handleDigit(3)} className="neo-btn py-1.5 bg-white text-black">3</button>
        <button onClick={handleDecimal} className="neo-btn py-1.5 bg-white text-black">.</button>
        <button onClick={() => handleOperator("+")} className="neo-btn py-1.5 bg-[#FB923C] text-black">+</button>

        <button onClick={() => handleDigit(0)} className="neo-btn col-span-2 py-1.5 bg-white text-black">0</button>
        <button onClick={() => handleDigit("00")} className="neo-btn py-1.5 bg-white text-black">00</button>
        <button onClick={handleEquals} className="neo-btn col-span-2 py-1.5 bg-[#86EFAC] text-black font-black text-sm">=</button>
      </div>
    </div>
  );
}
