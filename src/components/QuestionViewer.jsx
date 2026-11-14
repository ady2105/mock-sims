import React, { useState, useEffect } from "react";
import { Clock, Tag, ChevronLeft, ChevronRight, CheckSquare, RotateCcw, Bookmark, Sparkles } from "lucide-react";

export function QuestionViewer({
  question,
  userResponse,
  timeSpentSeconds,
  onSaveAndNext,
  onMarkForReviewAndNext,
  onClearResponse,
  onPrevious,
  onNext,
  isFirstQuestion,
  isLastQuestion
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(userResponse || "");

  useEffect(() => {
    setSelectedAnswer(userResponse || "");
  }, [question.id, userResponse]);

  const formatSeconds = (total) => {
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleKeypadClick = (val) => {
    if (val === "BACKSPACE") {
      setSelectedAnswer(prev => String(prev).slice(0, -1));
    } else if (val === "CLEAR") {
      setSelectedAnswer("");
    } else {
      setSelectedAnswer(prev => String(prev) + val);
    }
  };

  const hasCaselet = Boolean(question.caseletContent);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FEF9EF] overflow-hidden">
      {/* Top Question Info Bar */}
      <div className="bg-white border-b-2 border-black px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="bg-[#FDE047] text-black font-black text-sm px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
            Question {question.number}
          </span>
          <span className="text-xs font-black px-2 py-0.5 bg-[#FED7AA] border border-black">
            {question.type}
          </span>
          <span className="text-xs font-black text-black">
            Marks: <span className="text-emerald-700">+3</span>, <span className="text-rose-600">{question.type === "MCQ" ? "-1" : "0"}</span>
          </span>
          <span className="hidden md:inline-flex items-center text-[11px] font-black bg-white px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
            <Sparkles className="h-3 w-3 mr-1 text-[#EA580C]" />
            {question.sourceTag}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-bold">
          <div className="flex items-center space-x-1.5 bg-[#FEF08A] px-2.5 py-1 border border-black shadow-[1px_1px_0px_#000] font-mono">
            <Clock className="h-3.5 w-3.5 text-black" />
            <span>Time: <strong>{formatSeconds(timeSpentSeconds)}</strong></span>
            <span>|</span>
            <span>Ideal: {formatSeconds(question.idealTimeSeconds)}</span>
          </div>

          <div className="hidden sm:flex items-center bg-white px-2 py-1 border border-black shadow-[1px_1px_0px_#000]">
            <Tag className="h-3 w-3 mr-1" />
            <span className="truncate max-w-[150px]">{question.subTopic}</span>
          </div>
        </div>
      </div>

      {/* Main Split Pane */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {hasCaselet && (
          <div className="w-full md:w-1/2 border-r-3 border-black bg-white p-5 overflow-y-auto custom-scrollbar flex flex-col">
            <div className="pb-3 mb-3 border-b-2 border-black flex items-center justify-between">
              <h3 className="font-black text-sm uppercase flex items-center text-black">
                <Bookmark className="h-4 w-4 mr-1.5 text-[#EA580C]" />
                {question.caseletTitle}
              </h3>
              <span className="text-[10px] font-black uppercase bg-[#FDE047] border border-black px-1.5 py-0.5 shadow-[1px_1px_0px_#000]">
                Caselet
              </span>
            </div>
            <div className="text-black text-sm leading-relaxed whitespace-pre-line font-serif pr-2 select-text">
              {question.caseletContent}
            </div>
          </div>
        )}

        <div className={`flex-1 p-5 overflow-y-auto custom-scrollbar flex flex-col justify-between bg-[#FEF9EF] ${hasCaselet ? 'md:w-1/2' : 'w-full'}`}>
          <div>
            <div className="neo-card bg-white p-4 text-base font-bold leading-relaxed mb-6 select-text text-black">
              {question.questionText}
            </div>

            {question.type === "MCQ" ? (
              <div className="space-y-3">
                {question.options.map((opt) => {
                  const isChecked = selectedAnswer === opt.id;
                  return (
                    <label
                      key={opt.id}
                      onClick={() => setSelectedAnswer(opt.id)}
                      className={`flex items-start p-3.5 border-2 border-black cursor-pointer transition select-none ${
                        isChecked
                          ? "bg-[#FEF08A] shadow-[4px_4px_0px_#000] translate-x-1"
                          : "bg-white shadow-[2px_2px_0px_#000] hover:bg-[#FFFDF7]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={opt.id}
                        checked={isChecked}
                        onChange={() => setSelectedAnswer(opt.id)}
                        className="mt-1 h-4 w-4 text-black border-2 border-black"
                      />
                      <div className="ml-3 text-sm text-black flex-1 font-bold">
                        <span className="bg-black text-white px-1.5 py-0.5 mr-2 text-xs">({opt.id})</span>
                        <span>{opt.text}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            ) : (
              <div className="neo-card bg-white max-w-md mx-auto p-4 space-y-4">
                <div className="flex items-center justify-between text-xs font-black uppercase">
                  <span>Type In The Answer (TITA)</span>
                  <span className="bg-[#86EFAC] border border-black px-1.5 py-0.5">0 Penalty</span>
                </div>

                <input
                  type="text"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  placeholder="Enter numeric answer"
                  className="w-full text-center text-3xl font-mono font-black py-2.5 px-3 bg-[#FEF08A] border-3 border-black shadow-[3px_3px_0px_#000] outline-none text-black"
                />

                <div className="grid grid-cols-3 gap-2 font-mono text-sm font-black">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "-"].map((key) => (
                    <button
                      key={key}
                      onClick={() => handleKeypadClick(key)}
                      className="neo-btn py-2 bg-white hover:bg-[#FED7AA] text-black"
                    >
                      {key}
                    </button>
                  ))}
                  <button
                    onClick={() => handleKeypadClick("BACKSPACE")}
                    className="neo-btn py-2 bg-[#FDE047] text-black"
                  >
                    ⌫
                  </button>
                  <button
                    onClick={() => handleKeypadClick("CLEAR")}
                    className="neo-btn col-span-2 py-2 bg-[#FCA5A5] text-black"
                  >
                    Clear Input
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-[#FDE047] border-t-3 border-black px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onMarkForReviewAndNext(selectedAnswer)}
            className="neo-btn bg-[#c084fc] hover:bg-[#a855f7] text-black px-3.5 py-2 text-xs flex items-center space-x-1"
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>Mark for Review & Next</span>
          </button>

          <button
            onClick={() => { setSelectedAnswer(""); onClearResponse(); }}
            disabled={!selectedAnswer}
            className={`neo-btn px-3.5 py-2 text-xs flex items-center space-x-1 ${
              selectedAnswer ? "bg-white text-black" : "bg-slate-200 text-black/40 border-black/40 cursor-not-allowed"
            }`}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Clear Response</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`neo-btn px-3 py-2 text-xs flex items-center space-x-1 ${
              !isFirstQuestion ? "bg-white text-black" : "bg-slate-200 text-black/40 border-black/40 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>

          <button
            onClick={onNext}
            disabled={isLastQuestion}
            className={`neo-btn px-3 py-2 text-xs flex items-center space-x-1 ${
              !isLastQuestion ? "bg-white text-black" : "bg-slate-200 text-black/40 border-black/40 cursor-not-allowed"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => onSaveAndNext(selectedAnswer)}
            className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-5 py-2 text-xs flex items-center space-x-1.5"
          >
            <CheckSquare className="h-4 w-4" />
            <span>Save & Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
