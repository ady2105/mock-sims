import React from "react";
import { Award, TrendingUp, ShieldCheck, CheckCircle2, XCircle, AlertTriangle, Zap, Building } from "lucide-react";
import { EXAM_METADATA } from "../../data/examData";
import { checkIIMEligibility } from "../../data/percentileModel";

export function ScorecardHero({ summary, candidate }) {
  const {
    totalMarks,
    overallPercentile,
    sectionScores,
    totalAttempted,
    totalCorrect,
    totalWrong,
    accuracyPct
  } = summary;

  const iimCalls = checkIIMEligibility(
    sectionScores.VARC.percentile,
    sectionScores.DILR.percentile,
    sectionScores.QA.percentile,
    overallPercentile
  );

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner Neo-Brutalist */}
      <div className="neo-card-yellow p-6 sm:p-8 text-black">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-block bg-white border-2 border-black shadow-[2px_2px_0px_#000] px-3 py-1 text-xs font-black uppercase tracking-wider">
              ★ Official CAT Tough PYQ Evaluation
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Performance Scorecard
            </h2>
            <p className="text-black/90 font-bold text-xs sm:text-sm">
              Candidate: <span className="bg-white px-2 py-0.5 border border-black">{candidate.name}</span> • Roll: <span className="font-mono bg-white px-2 py-0.5 border border-black">{candidate.rollNumber}</span> • Benchmarked against CAT 2023 Slot 3 curve.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 bg-white p-4 sm:p-5 border-3 border-black shadow-[5px_5px_0px_#000]">
            <div className="text-center pr-4 border-r-2 border-black">
              <span className="text-[10px] uppercase font-black tracking-wider block text-black/70">Raw Score</span>
              <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-black">
                {totalMarks}
              </span>
              <span className="text-[11px] text-black font-black block">/ {EXAM_METADATA.totalMarks} M</span>
            </div>

            <div className="text-center pl-2">
              <span className="text-[10px] uppercase font-black tracking-wider block text-black/70">Estimated Percentile</span>
              <div className="inline-block bg-[#FB923C] text-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] text-2xl sm:text-4xl font-black font-mono">
                {overallPercentile}%ile
              </div>
              <span className="text-[10px] text-black font-bold block mt-1">Calibrated on 3.3L test-takers</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Summary Stat Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="neo-card p-4 bg-white">
          <div className="text-[11px] font-black uppercase tracking-wider text-black/70">Total Attempted</div>
          <div className="text-3xl font-black font-mono mt-1 text-black">
            {totalAttempted} <span className="text-xs font-bold text-black/60">/ {EXAM_METADATA.totalQuestions} Qs</span>
          </div>
          <div className="mt-2 text-[10px] font-bold bg-[#FEF08A] px-2 py-0.5 border border-black inline-block">
            {Math.round((totalAttempted / EXAM_METADATA.totalQuestions) * 100)}% Coverage
          </div>
        </div>

        <div className="neo-card p-4 bg-[#86EFAC]">
          <div className="text-[11px] font-black uppercase tracking-wider text-black">Correct Answers</div>
          <div className="text-3xl font-black font-mono mt-1 text-black">
            {totalCorrect} <span className="text-xs font-bold text-black/70">Qs</span>
          </div>
          <div className="mt-2 text-[10px] font-bold bg-white px-2 py-0.5 border border-black inline-block">
            +{totalCorrect * 3} Marks Earned
          </div>
        </div>

        <div className="neo-card p-4 bg-[#FEF08A]">
          <div className="text-[11px] font-black uppercase tracking-wider text-black">Accuracy Rate</div>
          <div className="text-3xl font-black font-mono mt-1 text-black">
            {accuracyPct}%
          </div>
          <div className="mt-2 text-[10px] font-bold bg-white px-2 py-0.5 border border-black inline-block">
            {accuracyPct >= 80 ? "★ Elite Accuracy" : accuracyPct >= 65 ? "Good Accuracy" : "High Negative Risk"}
          </div>
        </div>

        <div className="neo-card p-4 bg-[#FCA5A5]">
          <div className="text-[11px] font-black uppercase tracking-wider text-black">Wrong / Penalties</div>
          <div className="text-3xl font-black font-mono mt-1 text-black">
            {totalWrong} <span className="text-xs font-bold text-black/70">Qs</span>
          </div>
          <div className="mt-2 text-[10px] font-bold bg-white px-2 py-0.5 border border-black inline-block text-rose-800">
            -{summary.negativeMarks || 0} Marks Incurred
          </div>
        </div>
      </div>

      {/* Section-by-Section Cards */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-[#FB923C] border-2 border-black"></div>
          <h3 className="text-xl font-black uppercase tracking-tight text-black">
            Sectional Deep-Dive (VARC • DILR • QA)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EXAM_METADATA.sections.map((section) => {
            const sec = sectionScores[section.id] || {};
            const bgClass = section.id === "VARC" ? "bg-[#FEF9C3]" : section.id === "DILR" ? "bg-[#FED7AA]" : "bg-[#FEF08A]";
            return (
              <div key={section.id} className={`neo-card p-5 ${bgClass} flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between pb-2 border-b-2 border-black">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-white px-2 py-0.5 border border-black">
                        {section.id}
                      </span>
                      <h4 className="text-lg font-black uppercase text-black mt-1">
                        {section.shortName}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black font-mono text-black">{sec.score}</span>
                      <span className="text-[10px] text-black font-bold block">Marks</span>
                    </div>
                  </div>

                  <div className="my-4 bg-white p-3 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-between">
                    <span className="text-xs font-black uppercase">Estimated %ile:</span>
                    <span className="text-xl font-black font-mono bg-[#FB923C] text-black px-2 py-0.5 border border-black">
                      {sec.percentile}%ile
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white p-2 border border-black">
                      <span className="text-[10px] block font-bold text-black/60">Correct</span>
                      <span className="text-base font-black text-emerald-800">{sec.correct}</span>
                    </div>
                    <div className="bg-white p-2 border border-black">
                      <span className="text-[10px] block font-bold text-black/60">Wrong</span>
                      <span className="text-base font-black text-rose-800">{sec.wrong}</span>
                    </div>
                    <div className="bg-white p-2 border border-black">
                      <span className="text-[10px] block font-bold text-black/60">Skipped</span>
                      <span className="text-base font-black text-black">{sec.unattempted}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-black">
                  <span>Accuracy:</span>
                  <span className="bg-white px-2 py-0.5 border border-black font-mono">{sec.accuracy}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* IIM Call Predictor Neo-Card */}
      <div className="neo-card p-6 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b-2 border-black">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FB923C] text-black p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Building className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-black uppercase text-black">
                Top B-School Interview Call Simulator
              </h3>
              <p className="text-xs font-bold text-black/70">
                Checks sectional cutoffs (usually 75-85%ile) + overall cutoff requirements
              </p>
            </div>
          </div>
          <span className="text-xs font-black bg-[#FDE047] px-3 py-1 border-2 border-black self-start sm:self-auto">
            {iimCalls.length} B-Schools Evaluated
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {iimCalls.map((college, idx) => {
            const isEligible = college.isEligible;
            return (
              <div
                key={idx}
                className={`p-3.5 border-2 border-black shadow-[3px_3px_0px_#000] flex flex-col justify-between ${
                  isEligible ? "bg-[#86EFAC]/40" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <h5 className="font-black text-sm text-black leading-tight">
                      {college.name}
                    </h5>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-white">
                      {college.tier}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-black/70">
                    Required Cutoff: <span className="font-mono text-black font-black">{college.cutoff}%ile</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-black flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase">Status:</span>
                  {isEligible ? (
                    <span className="text-[11px] font-black uppercase bg-[#86EFAC] text-black px-2 py-0.5 border border-black">
                      ✓ Likely Call
                    </span>
                  ) : (
                    <span className="text-[10px] font-black uppercase bg-[#FED7AA] text-black px-2 py-0.5 border border-black">
                      Cutoff Shortfall
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
