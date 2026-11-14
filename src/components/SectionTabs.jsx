import React from "react";
import { Lock, CheckCircle2, Layers } from "lucide-react";
import { EXAM_METADATA } from "../data/examData";

export function SectionTabs({
  currentSectionIndex,
  testMode,
  onSwitchSection,
  getPaletteCounts
}) {
  return (
    <div className="bg-[#FEF08A] border-b-2 border-black px-4 py-1.5 select-none">
      <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar">
          <span className="text-xs font-black uppercase text-black flex items-center mr-1">
            <Layers className="h-3.5 w-3.5 mr-1" /> Sections:
          </span>

          {EXAM_METADATA.sections.map((section, idx) => {
            const isActive = idx === currentSectionIndex;
            const isCompleted = idx < currentSectionIndex;
            const isLocked = testMode === "REAL_EXAM" && idx > currentSectionIndex;
            const counts = getPaletteCounts(section.id);
            const answeredCount = (counts.ANSWERED || 0) + (counts.ANSWERED_MARKED || 0);

            return (
              <button
                key={section.id}
                onClick={() => onSwitchSection(idx)}
                disabled={isLocked}
                className={`neo-btn px-3 py-1 text-xs flex items-center space-x-1.5 ${
                  isActive
                    ? "bg-[#FB923C] text-black shadow-[3px_3px_0px_#000] scale-105"
                    : isCompleted
                    ? "bg-[#86EFAC] text-black"
                    : isLocked
                    ? "bg-slate-200 text-black/40 cursor-not-allowed border-black/40"
                    : "bg-white text-black"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-black" />
                ) : isLocked ? (
                  <Lock className="h-3.5 w-3.5" />
                ) : (
                  <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-black' : 'bg-black/40'}`} />
                )}
                <span>{section.name}</span>
                <span className="bg-black text-white px-1.5 py-0.2 rounded text-[10px] font-mono">
                  {answeredCount}/{section.questionCount}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center text-xs font-black space-x-2">
          <span className="bg-[#86EFAC] border border-black px-1.5 py-0.5 text-[11px]">+3 Correct</span>
          <span className="bg-[#FCA5A5] border border-black px-1.5 py-0.5 text-[11px]">-1 Incorrect</span>
          <span className="bg-white border border-black px-1.5 py-0.5 text-[11px]">0 TITA</span>
        </div>
      </div>
    </div>
  );
}
