import React, { useState } from "react";
import { Clock, CheckCircle2, XCircle, AlertTriangle, Filter } from "lucide-react";

export function TimeAnalysisView({ questions, userResponses, questionTimes, diagnosticStats }) {
  const [filterMode, setFilterMode] = useState("ALL");

  const formatSeconds = (total) => {
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}m ${secs}s`;
  };

  const processedList = questions.map((q) => {
    const timeSpent = questionTimes[q.id] || 0;
    const response = userResponses[q.id];
    const isAttempted = response !== undefined && response !== null && String(response).trim() !== "";
    const isCorrect = isAttempted && String(response).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();
    const isWrong = isAttempted && !isCorrect;
    const isTimeSink = isWrong && timeSpent >= q.idealTimeSeconds * 1.25;
    const timeDiff = timeSpent - q.idealTimeSeconds;

    return { ...q, timeSpent, isAttempted, isCorrect, isWrong, isTimeSink, timeDiff };
  });

  const filtered = processedList.filter(item => {
    if (filterMode === "CORRECT") return item.isCorrect;
    if (filterMode === "INCORRECT") return item.isWrong;
    if (filterMode === "TIME_SINKS") return item.isTimeSink;
    return true;
  });

  return (
    <div className="space-y-6 font-sans">
      {/* 4 Diagnostic Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="neo-card p-4 bg-[#86EFAC]">
          <div className="text-[11px] font-black uppercase text-black">Avg Time (Correct Qs)</div>
          <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-black">
            {formatSeconds(diagnosticStats.avgTimeCorrect)}
          </div>
          <div className="text-[10px] font-bold text-black/70 mt-1">Benchmark: &lt; 2m 30s</div>
        </div>

        <div className="neo-card p-4 bg-[#FCA5A5]">
          <div className="text-[11px] font-black uppercase text-black">Avg Time (Incorrect Qs)</div>
          <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-black">
            {formatSeconds(diagnosticStats.avgTimeWrong)}
          </div>
          <div className="text-[10px] font-bold text-black/70 mt-1">High burn on wrong answers</div>
        </div>

        <div className="neo-card p-4 bg-[#FED7AA]">
          <div className="text-[11px] font-black uppercase text-black">Time Bleed on Wrong Qs</div>
          <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-black">
            {formatSeconds(diagnosticStats.totalTimeOnWrong)}
          </div>
          <div className="text-[10px] font-bold text-black/70 mt-1">Minutes wasted producing -1s</div>
        </div>

        <div className="neo-card p-4 bg-[#FEF08A]">
          <div className="text-[11px] font-black uppercase text-black">Avg Time (Skipped Qs)</div>
          <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-black">
            {formatSeconds(diagnosticStats.avgTimeUnattempted)}
          </div>
          <div className="text-[10px] font-bold text-black/70 mt-1">Ideal skip speed: &lt; 45s</div>
        </div>
      </div>

      {/* Filter and Table Container */}
      <div className="neo-card bg-white p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-black">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FB923C] p-1.5 border-2 border-black">
              <Clock className="h-4 w-4 text-black" />
            </span>
            <div>
              <h3 className="text-base font-black uppercase text-black">
                Per-Question Time Allocation Log (62 Questions)
              </h3>
              <p className="text-xs font-bold text-black/70">
                Shows exact seconds spent vs calibrated benchmark time per question
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-black">
            <span className="text-black/70 uppercase">Filter:</span>
            <button
              onClick={() => setFilterMode("ALL")}
              className={`neo-btn px-2.5 py-1 ${filterMode === "ALL" ? "bg-[#FB923C]" : "bg-white"}`}
            >
              All ({processedList.length})
            </button>
            <button
              onClick={() => setFilterMode("CORRECT")}
              className={`neo-btn px-2.5 py-1 ${filterMode === "CORRECT" ? "bg-[#86EFAC]" : "bg-white"}`}
            >
              Correct
            </button>
            <button
              onClick={() => setFilterMode("INCORRECT")}
              className={`neo-btn px-2.5 py-1 ${filterMode === "INCORRECT" ? "bg-[#FCA5A5]" : "bg-white"}`}
            >
              Incorrect
            </button>
            <button
              onClick={() => setFilterMode("TIME_SINKS")}
              className={`neo-btn px-2.5 py-1 ${filterMode === "TIME_SINKS" ? "bg-[#FB923C]" : "bg-white"}`}
            >
              Time Sinks ⚠️
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-left border-2 border-black">
            <thead className="bg-[#FDE047] text-black font-black uppercase border-b-2 border-black">
              <tr>
                <th className="py-2.5 px-3 border-r-2 border-black">Q#</th>
                <th className="py-2.5 px-3 border-r-2 border-black">Section</th>
                <th className="py-2.5 px-3 border-r-2 border-black">Topic</th>
                <th className="py-2.5 px-3 border-r-2 border-black">Time Spent</th>
                <th className="py-2.5 px-3 border-r-2 border-black">Benchmark</th>
                <th className="py-2.5 px-3 border-r-2 border-black">Outcome</th>
                <th className="py-2.5 px-3">Diagnosis</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-black">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-[#FEF08A]/30 transition">
                  <td className="py-2 px-3 font-black border-r-2 border-black font-mono">
                    Q{item.number}
                  </td>
                  <td className="py-2 px-3 font-bold border-r-2 border-black">
                    <span className="bg-white px-1.5 py-0.5 border border-black font-black">
                      {item.sectionId}
                    </span>
                  </td>
                  <td className="py-2 px-3 font-bold border-r-2 border-black">
                    {item.subTopic}
                  </td>
                  <td className="py-2 px-3 font-mono font-black border-r-2 border-black">
                    {formatSeconds(item.timeSpent)}
                  </td>
                  <td className="py-2 px-3 font-mono border-r-2 border-black text-black/70">
                    {formatSeconds(item.idealTimeSeconds)}
                  </td>
                  <td className="py-2 px-3 border-r-2 border-black font-black">
                    {item.isCorrect ? (
                      <span className="bg-[#86EFAC] px-2 py-0.5 border border-black text-black inline-block">
                        ✓ Correct (+3)
                      </span>
                    ) : item.isWrong ? (
                      <span className="bg-[#FCA5A5] px-2 py-0.5 border border-black text-black inline-block">
                        ✗ Wrong (-1)
                      </span>
                    ) : (
                      <span className="bg-white px-2 py-0.5 border border-black text-black/60 inline-block">
                        — Skipped (0)
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {item.isTimeSink ? (
                      <span className="bg-[#FB923C] text-black px-2 py-0.5 border border-black font-black uppercase text-[10px]">
                        ⚠️ Time Sink (+{item.timeDiff}s)
                      </span>
                    ) : item.isCorrect && item.timeSpent <= item.idealTimeSeconds ? (
                      <span className="bg-[#86EFAC] text-black px-2 py-0.5 border border-black font-black uppercase text-[10px]">
                        ★ Speed Demon
                      </span>
                    ) : item.isWrong && item.timeSpent <= 45 ? (
                      <span className="bg-[#FED7AA] text-black px-2 py-0.5 border border-black font-black uppercase text-[10px]">
                        ⚡ Rushed Guess
                      </span>
                    ) : (
                      <span className="text-black/60 font-bold text-[10px]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
