import React from "react";
import { Calculator, FileText, HelpCircle, Clock, User, ShieldAlert } from "lucide-react";

export function Header({
  candidate,
  currentSection,
  timeLeftSeconds,
  testMode,
  onOpenCalculator,
  onOpenQuestionPaper,
  onOpenInstructions
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${String(hours).padStart(2, '0')}:${String(remainingMins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isLowTime = timeLeftSeconds <= 300;

  return (
    <header className="bg-[#FDE047] border-b-3 border-black text-black select-none sticky top-0 z-40">
      <div className="max-w-[1920px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#FB923C] text-black font-black text-base px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
            CAT
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-sm font-black uppercase tracking-tight">
                CAT Mock Simulator
              </h1>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-white border border-black shadow-[1px_1px_0px_#000]">
                {testMode === "REAL_EXAM" ? "Strict Mode" : "Practice Mode"}
              </span>
            </div>
            <div className="text-[11px] font-bold text-black/80">
              Section: <strong className="text-black uppercase underline">{currentSection.name}</strong>
            </div>
          </div>
        </div>

        {/* Section Timer */}
        <div className={`flex items-center space-x-2 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] ${isLowTime ? 'bg-[#EF4444] text-white animate-pulse' : 'bg-white text-black'}`}>
          <Clock className="h-4 w-4" />
          <div className="text-center">
            <span className="text-[9px] uppercase font-black tracking-wider block leading-tight">Time Left</span>
            <span className="text-lg font-mono font-black">{formatTime(timeLeftSeconds)}</span>
          </div>
        </div>

        {/* Quick Tools */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenCalculator}
            className="neo-btn bg-white hover:bg-[#FED7AA] text-black px-2.5 py-1 text-xs flex items-center space-x-1"
          >
            <Calculator className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Calculator</span>
          </button>

          <button
            onClick={onOpenQuestionPaper}
            className="neo-btn bg-white hover:bg-[#FED7AA] text-black px-2.5 py-1 text-xs flex items-center space-x-1"
          >
            <FileText className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Paper</span>
          </button>

          <button
            onClick={onOpenInstructions}
            className="neo-btn bg-white hover:bg-[#FED7AA] text-black px-2.5 py-1 text-xs flex items-center space-x-1"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Rules</span>
          </button>

          <div className="hidden lg:flex items-center pl-2 border-l-2 border-black space-x-2">
            <div className="h-8 w-8 bg-white border-2 border-black rounded-full overflow-hidden flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="text-left text-xs leading-none">
              <div className="font-black text-black">{candidate.name}</div>
              <div className="text-[10px] font-mono text-black/70">{candidate.rollNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
