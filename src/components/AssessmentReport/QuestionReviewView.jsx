import React, { useState } from "react";
import { CheckCircle2, XCircle, MinusCircle, Clock, BookOpen, ChevronDown, ChevronUp, Tag, Sparkles } from "lucide-react";
import { EXAM_METADATA } from "../../data/examData";

export function QuestionReviewView({ questions, userResponses, questionTimes }) {
  const [sectionFilter, setSectionFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [expandedSolutions, setExpandedSolutions] = useState({});

  const toggleSolution = (qId) => {
    setExpandedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const formatSeconds = (total) => {
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}m ${secs}s`;
  };

  const filtered = questions.filter((q) => {
    if (sectionFilter !== "ALL" && q.sectionId !== sectionFilter) return false;
    const response = userResponses[q.id];
    const isAttempted = response !== undefined && response !== null && String(response).trim() !== "";
    const isCorrect = isAttempted && String(response).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();

    if (statusFilter === "CORRECT") return isCorrect;
    if (statusFilter === "INCORRECT") return isAttempted && !isCorrect;
    if (statusFilter === "UNATTEMPTED") return !isAttempted;
    return true;
  });

  return (
    <div className="space-y-6 font-sans">
      {/* Filters Bar */}
      <div className="neo-card bg-white p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-black">
          <span className="text-black/70 uppercase mr-1">Section:</span>
          <button
            onClick={() => setSectionFilter("ALL")}
            className={`neo-btn px-3 py-1 ${sectionFilter === "ALL" ? "bg-[#FB923C]" : "bg-white"}`}
          >
            All Sections
          </button>
          {EXAM_METADATA.sections.map(sec => (
            <button
              key={sec.id}
              onClick={() => setSectionFilter(sec.id)}
              className={`neo-btn px-3 py-1 ${sectionFilter === sec.id ? "bg-[#FDE047]" : "bg-white"}`}
            >
              {sec.shortName}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-xs font-black">
          <span className="text-black/70 uppercase mr-1">Status:</span>
          <button
            onClick={() => setStatusFilter("ALL")}
            className={`neo-btn px-3 py-1 ${statusFilter === "ALL" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("CORRECT")}
            className={`neo-btn px-3 py-1 ${statusFilter === "CORRECT" ? "bg-[#86EFAC] text-black" : "bg-white text-black"}`}
          >
            Correct
          </button>
          <button
            onClick={() => setStatusFilter("INCORRECT")}
            className={`neo-btn px-3 py-1 ${statusFilter === "INCORRECT" ? "bg-[#FCA5A5] text-black" : "bg-white text-black"}`}
          >
            Incorrect
          </button>
          <button
            onClick={() => setStatusFilter("UNATTEMPTED")}
            className={`neo-btn px-3 py-1 ${statusFilter === "UNATTEMPTED" ? "bg-[#FEF08A] text-black" : "bg-white text-black"}`}
          >
            Skipped
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filtered.map((q) => {
          const userResp = userResponses[q.id];
          const timeSpent = questionTimes[q.id] || 0;
          const isAttempted = userResp !== undefined && userResp !== null && String(userResp).trim() !== "";
          const isCorrect = isAttempted && String(userResp).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();
          const isExpanded = expandedSolutions[q.id] !== false; // default open

          return (
            <div key={q.id} className="neo-card bg-white p-5 space-y-4">
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-black">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#FDE047] text-black font-black text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                    Q{q.number} • {q.sectionId}
                  </span>
                  <span className="text-xs font-black px-2 py-0.5 bg-[#FED7AA] border border-black">
                    {q.type}
                  </span>
                  <span className="text-xs font-bold text-black/70">
                    {q.topic} &gt; {q.subTopic}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-black">
                  <span className="bg-white px-2 py-1 border border-black font-mono">
                    ⏱️ {formatSeconds(timeSpent)}
                  </span>
                  <span className="bg-white px-2 py-1 border border-black font-mono text-black/70">
                    Ideal: {formatSeconds(q.idealTimeSeconds)}
                  </span>
                  {isCorrect ? (
                    <span className="bg-[#86EFAC] px-2.5 py-1 border-2 border-black font-black">
                      ✓ +3 Marks
                    </span>
                  ) : isAttempted ? (
                    <span className="bg-[#FCA5A5] px-2.5 py-1 border-2 border-black font-black">
                      ✗ -1 Mark
                    </span>
                  ) : (
                    <span className="bg-[#FEF08A] px-2.5 py-1 border-2 border-black font-black">
                      — 0 Marks
                    </span>
                  )}
                </div>
              </div>

              {/* Source Tag sticker */}
              <div className="inline-block bg-[#FEF08A] px-2.5 py-0.5 border border-black text-[11px] font-black uppercase">
                ★ {q.sourceTag}
              </div>

              {/* Caselet Text if RC or DILR */}
              {q.caseletContent && (
                <div className="p-4 bg-[#FEF9EF] border-2 border-black text-xs sm:text-sm font-serif leading-relaxed max-h-60 overflow-y-auto custom-scrollbar">
                  <div className="font-sans font-black text-xs uppercase mb-1.5 underline">
                    Reference Context / Caselet:
                  </div>
                  <div className="whitespace-pre-line text-black/90">
                    {q.caseletContent}
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div className="text-sm sm:text-base font-bold text-black whitespace-pre-line">
                {q.questionText}
              </div>

              {/* Options */}
              {q.type === "MCQ" && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {q.options.map((opt) => {
                    const isUserPick = String(userResp) === String(opt.id);
                    const isRightPick = String(q.correctAnswer) === String(opt.id);

                    let cardClass = "bg-white border-2 border-black";
                    if (isRightPick) {
                      cardClass = "bg-[#86EFAC] border-2 border-black shadow-[2px_2px_0px_#000] font-black";
                    } else if (isUserPick && !isRightPick) {
                      cardClass = "bg-[#FCA5A5] border-2 border-black shadow-[2px_2px_0px_#000]";
                    }

                    return (
                      <div key={opt.id} className={`p-3 ${cardClass} flex items-start space-x-2`}>
                        <span className="font-mono font-black uppercase px-1.5 py-0.5 bg-white border border-black text-xs">
                          {opt.id}
                        </span>
                        <span className="font-medium text-black">{opt.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TITA Response Details */}
              {q.type === "TITA" && (
                <div className="p-3 bg-[#FEF08A] border-2 border-black text-xs font-black flex items-center space-x-4">
                  <div>
                    Your Input: <span className="font-mono bg-white px-2 py-0.5 border border-black">{userResp || "None"}</span>
                  </div>
                  <div>
                    Correct Value: <span className="font-mono bg-[#86EFAC] px-2 py-0.5 border border-black">{q.correctAnswer}</span>
                  </div>
                </div>
              )}

              {/* Solution Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSolution(q.id)}
                  className="neo-btn bg-[#FDE047] px-3.5 py-1.5 text-xs text-black flex items-center space-x-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{isExpanded ? "Hide Detailed Solution" : "View Step-by-Step Solution"}</span>
                </button>
              </div>

              {/* Solution Body */}
              {isExpanded && (
                <div className="p-4 bg-[#FEF9EF] border-2 border-black space-y-3 text-xs sm:text-sm">
                  <div className="font-black uppercase text-xs text-black border-b border-black pb-1 flex items-center justify-between">
                    <span>Step-by-Step Official Resolution:</span>
                    <span className="font-mono text-emerald-800">Correct Answer: {q.correctAnswer}</span>
                  </div>
                  <div className="whitespace-pre-line font-medium leading-relaxed text-black/90">
                    {q.solution}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
