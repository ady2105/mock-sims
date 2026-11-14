import React from "react";
import { X, HelpCircle, ShieldCheck } from "lucide-react";

export function InstructionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 select-none font-sans">
      <div className="neo-card bg-white max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border-3 border-black shadow-[8px_8px_0px_#000]">
        {/* Header */}
        <div className="bg-[#FDE047] border-b-3 border-black text-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="bg-[#FB923C] p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              <HelpCircle className="h-4 w-4 text-black" />
            </span>
            <h2 className="text-base font-black uppercase tracking-wide">
              Official CAT Examination Instructions & Guidelines
            </h2>
          </div>
          <button onClick={onClose} className="neo-btn bg-white p-1">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-xs sm:text-sm text-black space-y-4">
          <div className="p-4 bg-[#FEF08A] border-2 border-black">
            <h3 className="font-black text-black uppercase text-sm mb-1.5 flex items-center">
              <ShieldCheck className="h-4 w-4 mr-1.5 text-black" />
              General Pattern & Sectional Timing
            </h3>
            <ul className="list-disc list-inside space-y-1 font-bold text-black/90">
              <li>Total duration: <strong>120 minutes</strong> (exactly <strong>40 minutes per section</strong>).</li>
              <li>Order of sections: <strong>1. VARC &rarr; 2. DILR &rarr; 3. QA</strong>.</li>
              <li>Candidates cannot toggle across sections in strict mode; each section locks upon 40-minute expiration.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-black uppercase text-sm mb-2">Marking Scheme</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-black">
              <div className="p-3 bg-[#86EFAC] border-2 border-black shadow-[2px_2px_0px_#000]">
                <div>+3 Marks for Correct Answer</div>
                <div className="text-[10px] font-bold mt-1 text-black/70">Applies to both MCQ & TITA</div>
              </div>
              <div className="p-3 bg-[#FCA5A5] border-2 border-black shadow-[2px_2px_0px_#000]">
                <div>-1 Mark for Incorrect MCQ</div>
                <div className="text-[10px] font-bold mt-1 text-black/70">0 penalty for TITA questions</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-black uppercase text-sm mb-2">Question Palette Legend</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold">
              <div className="flex items-center space-x-2 p-2 bg-white border-2 border-black">
                <span className="palette-btn btn-not-visited">1</span>
                <span>Not Visited</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border-2 border-black">
                <span className="palette-btn btn-not-answered">2</span>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border-2 border-black">
                <span className="palette-btn btn-answered">3</span>
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border-2 border-black">
                <span className="palette-btn btn-marked-review">4</span>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border-2 border-black">
                <span className="palette-btn btn-answered-marked">5</span>
                <span>Answered & Marked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FEF9EF] border-t-3 border-black flex justify-end">
          <button
            onClick={onClose}
            className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-5 py-2 text-xs uppercase"
          >
            I Understand Guidelines
          </button>
        </div>
      </div>
    </div>
  );
}
