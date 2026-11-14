import React from "react";
import { User, Send } from "lucide-react";

export function QuestionPalette({
  candidate,
  currentSection,
  sectionQuestions,
  activeQuestionId,
  questionStatus,
  onJumpToQuestion,
  getPaletteCounts,
  onSubmitSection,
  isLastSection
}) {
  const counts = getPaletteCounts(currentSection.id);

  const getButtonClass = (qId) => {
    const status = questionStatus[qId] || "NOT_VISITED";
    const isActive = qId === activeQuestionId;
    let base = "palette-btn ";

    switch (status) {
      case "ANSWERED": base += "btn-answered"; break;
      case "NOT_ANSWERED": base += "btn-not-answered"; break;
      case "MARKED_REVIEW": base += "btn-marked-review"; break;
      case "ANSWERED_MARKED": base += "btn-answered-marked"; break;
      case "NOT_VISITED":
      default: base += "btn-not-visited"; break;
    }

    if (isActive) base += " active-q";
    return base;
  };

  return (
    <aside className="w-full lg:w-80 bg-white border-l-3 border-black flex flex-col h-full select-none">
      {/* Candidate bar */}
      <div className="p-3 bg-[#FEF08A] border-b-2 border-black flex items-center space-x-2.5">
        <div className="h-9 w-9 bg-white border-2 border-black rounded-full overflow-hidden flex items-center justify-center font-bold">
          <User className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-black text-black">{candidate.name}</div>
          <div className="text-[10px] font-mono font-bold text-black/70">{candidate.rollNumber}</div>
        </div>
      </div>

      {/* Legend */}
      <div className="p-3 bg-white border-b-2 border-black text-xs font-bold">
        <div className="font-black uppercase tracking-wider mb-2 text-black">
          Palette Legend
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center space-x-1.5">
            <span className="h-5 w-5 bg-[#22c55e] border border-black text-black flex items-center justify-center font-black text-[10px]">
              {counts.ANSWERED}
            </span>
            <span>Answered</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="h-5 w-5 bg-[#ef4444] border border-black text-white flex items-center justify-center font-black text-[10px]">
              {counts.NOT_ANSWERED}
            </span>
            <span>Not Answered</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="h-5 w-5 bg-white border border-black text-black flex items-center justify-center font-black text-[10px]">
              {counts.NOT_VISITED}
            </span>
            <span>Not Visited</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="h-5 w-5 bg-[#c084fc] rounded-full border border-black text-black flex items-center justify-center font-black text-[10px]">
              {counts.MARKED_REVIEW}
            </span>
            <span>Review</span>
          </div>

          <div className="col-span-2 flex items-center space-x-1.5 pt-1 border-t border-black/20">
            <span className="relative h-5 w-5 bg-[#c084fc] rounded-full border border-black text-black flex items-center justify-center font-black text-[10px]">
              {counts.ANSWERED_MARKED}
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 bg-[#22c55e] border border-black"></span>
            </span>
            <span className="text-[10.5px]">Answered & Marked (Evaluated)</span>
          </div>
        </div>
      </div>

      {/* Number Matrix */}
      <div className="flex-1 p-3.5 overflow-y-auto custom-scrollbar bg-[#FEF9EF]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase text-black">Questions:</span>
          <span className="text-xs font-black bg-[#FB923C] border border-black px-2 py-0.5 shadow-[1px_1px_0px_#000]">
            {currentSection.shortName}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-2.5 pt-1">
          {sectionQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => onJumpToQuestion(q.id)}
              className={getButtonClass(q.id)}
            >
              {q.number}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="p-3 bg-white border-t-2 border-black">
        <button
          onClick={onSubmitSection}
          className="neo-btn w-full bg-[#FB923C] hover:bg-[#F97316] text-black py-2.5 px-4 font-black text-xs uppercase flex items-center justify-center space-x-2"
        >
          <Send className="h-3.5 w-3.5" />
          <span>{isLastSection ? "Submit Mock Test" : `Submit Section (${currentSection.shortName})`}</span>
        </button>
      </div>
    </aside>
  );
}
