import React from "react";
import { X, FileText } from "lucide-react";

export function QuestionPaperModal({
  isOpen,
  onClose,
  currentSection,
  sectionQuestions,
  onSelectQuestion
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 select-none font-sans">
      <div className="neo-card bg-white max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border-3 border-black shadow-[8px_8px_0px_#000]">
        {/* Header */}
        <div className="bg-[#FDE047] border-b-3 border-black text-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="bg-[#FB923C] p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              <FileText className="h-4 w-4 text-black" />
            </span>
            <div>
              <h2 className="text-base font-black uppercase tracking-wide">
                Question Paper • Section: {currentSection.name}
              </h2>
              <div className="text-xs font-bold text-black/70">Total Questions: {sectionQuestions.length}</div>
            </div>
          </div>
          <button onClick={onClose} className="neo-btn bg-white p-1">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Questions list */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 text-xs sm:text-sm divide-y-2 divide-black">
          {sectionQuestions.map((q) => (
            <div key={q.id} className="pt-5 first:pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm uppercase bg-[#FEF08A] px-2 py-0.5 border border-black">
                  Question {q.number} ({q.type})
                </span>
                <span className="text-xs text-black bg-[#FED7AA] px-2 py-0.5 border border-black font-black">
                  {q.sourceTag}
                </span>
              </div>

              {q.caseletContent && (
                <div className="p-3 bg-[#FEF9EF] border-2 border-black font-serif text-xs leading-relaxed max-h-40 overflow-y-auto custom-scrollbar whitespace-pre-line">
                  {q.caseletContent}
                </div>
              )}

              <p className="font-bold text-black whitespace-pre-line">{q.questionText}</p>

              {q.type === "MCQ" && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {q.options.map(opt => (
                    <div key={opt.id} className="p-2 bg-white border border-black font-medium">
                      <strong className="mr-1">{opt.id}.</strong> {opt.text}
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => {
                    onSelectQuestion(q.id);
                    onClose();
                  }}
                  className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-3 py-1 text-xs"
                >
                  Jump to Question {q.number} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FEF9EF] border-t-3 border-black flex justify-end">
          <button onClick={onClose} className="neo-btn bg-white px-4 py-2 text-xs text-black">
            Close Paper View
          </button>
        </div>
      </div>
    </div>
  );
}
