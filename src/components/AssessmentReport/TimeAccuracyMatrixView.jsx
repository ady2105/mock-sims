import React from "react";
import { Zap, CheckCircle2, AlertTriangle, Flame, ShieldAlert } from "lucide-react";

export function TimeAccuracyMatrixView({ quadrants }) {
  const {
    swiftAndAccurate = [],
    slowGrinders = [],
    carelessErrors = [],
    timeSinks = []
  } = quadrants;

  return (
    <div className="space-y-6 font-sans">
      {/* Banner */}
      <div className="neo-card-yellow p-6 text-black space-y-2">
        <div className="flex items-center space-x-2">
          <span className="bg-[#FB923C] p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Zap className="h-4 w-4 text-black" />
          </span>
          <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight">
            The CAT Time-Accuracy Matrix (4-Quadrant Tactical Audit)
          </h3>
        </div>
        <p className="text-xs sm:text-sm font-bold text-black/80 max-w-3xl leading-relaxed">
          Every CAT question awards +3 marks regardless of whether it took 45s or 8 minutes. Sinking 6 minutes into a wrong question doesn't just cost -1 mark—it costs 3 other doable questions!
        </p>
      </div>

      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Quadrant 1: Swift & Accurate */}
        <div className="neo-card p-5 bg-[#86EFAC]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black mb-3">
            <div>
              <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 border border-black">
                Quadrant I • High Yield
              </span>
              <h4 className="font-black text-base uppercase text-black mt-1">
                Speed Demons (Swift & Accurate)
              </h4>
            </div>
            <span className="text-2xl font-black font-mono bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              {swiftAndAccurate.length} Qs
            </span>
          </div>
          <p className="text-xs font-bold text-black/80 mb-3">
            Solved within benchmark time and 100% correct. This is your 99%ile engine.
          </p>
          <div className="space-y-1.5 max-h-52 overflow-y-auto custom-scrollbar">
            {swiftAndAccurate.length === 0 ? (
              <div className="p-3 bg-white border border-black text-xs font-bold text-black/60 text-center">
                No questions met this criteria
              </div>
            ) : (
              swiftAndAccurate.map(({ q, timeSpent }) => (
                <div key={q.id} className="p-2 bg-white border-2 border-black text-xs flex items-center justify-between shadow-[1px_1px_0px_#000]">
                  <span className="font-black">Q{q.number} ({q.sectionId}) - {q.subTopic}</span>
                  <span className="font-mono font-black bg-[#86EFAC] px-2 py-0.5 border border-black">{timeSpent}s</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quadrant 2: Slow Grinders */}
        <div className="neo-card p-5 bg-[#FEF08A]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black mb-3">
            <div>
              <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 border border-black">
                Quadrant II • Time Expensive
              </span>
              <h4 className="font-black text-base uppercase text-black mt-1">
                Slow Grinders (Over-Invested & Correct)
              </h4>
            </div>
            <span className="text-2xl font-black font-mono bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              {slowGrinders.length} Qs
            </span>
          </div>
          <p className="text-xs font-bold text-black/80 mb-3">
            Secured +3 marks, but took substantially longer than ideal. Risk of starving subsequent sitters.
          </p>
          <div className="space-y-1.5 max-h-52 overflow-y-auto custom-scrollbar">
            {slowGrinders.length === 0 ? (
              <div className="p-3 bg-white border border-black text-xs font-bold text-black/60 text-center">
                No questions met this criteria
              </div>
            ) : (
              slowGrinders.map(({ q, timeSpent }) => (
                <div key={q.id} className="p-2 bg-white border-2 border-black text-xs flex items-center justify-between shadow-[1px_1px_0px_#000]">
                  <span className="font-black">Q{q.number} ({q.sectionId}) - {q.subTopic}</span>
                  <span className="font-mono font-black bg-[#FEF08A] px-2 py-0.5 border border-black">{timeSpent}s</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quadrant 3: Careless Errors */}
        <div className="neo-card p-5 bg-[#FED7AA]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black mb-3">
            <div>
              <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 border border-black">
                Quadrant III • Avoidable Bleed
              </span>
              <h4 className="font-black text-base uppercase text-black mt-1">
                Careless Errors (Rushed & Incorrect)
              </h4>
            </div>
            <span className="text-2xl font-black font-mono bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              {carelessErrors.length} Qs
            </span>
          </div>
          <p className="text-xs font-bold text-black/80 mb-3">
            Answered in less than 50% ideal time and marked incorrectly. Avoidable penalty bleed.
          </p>
          <div className="space-y-1.5 max-h-52 overflow-y-auto custom-scrollbar">
            {carelessErrors.length === 0 ? (
              <div className="p-3 bg-white border border-black text-xs font-bold text-black/60 text-center">
                No questions met this criteria
              </div>
            ) : (
              carelessErrors.map(({ q, timeSpent }) => (
                <div key={q.id} className="p-2 bg-white border-2 border-black text-xs flex items-center justify-between shadow-[1px_1px_0px_#000]">
                  <span className="font-black">Q{q.number} ({q.sectionId}) - {q.subTopic}</span>
                  <span className="font-mono font-black bg-[#FED7AA] px-2 py-0.5 border border-black">{timeSpent}s</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quadrant 4: Time Sinks */}
        <div className="neo-card p-5 bg-[#FCA5A5]">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black mb-3">
            <div>
              <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 border border-black text-rose-800">
                Quadrant IV • Lethal Traps
              </span>
              <h4 className="font-black text-base uppercase text-black mt-1">
                Time Sinks (Over-Invested & Wrong)
              </h4>
            </div>
            <span className="text-2xl font-black font-mono bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] text-rose-800">
              {timeSinks.length} Qs
            </span>
          </div>
          <p className="text-xs font-bold text-black/80 mb-3">
            Disastrous combination: burned excessive time AND yielded -1 mark. Must set a strict 3-min bail-out limit.
          </p>
          <div className="space-y-1.5 max-h-52 overflow-y-auto custom-scrollbar">
            {timeSinks.length === 0 ? (
              <div className="p-3 bg-white border border-black text-xs font-bold text-black/60 text-center">
                No lethal time sink traps triggered! Excellent discipline.
              </div>
            ) : (
              timeSinks.map(({ q, timeSpent }) => (
                <div key={q.id} className="p-2 bg-white border-2 border-black text-xs flex items-center justify-between shadow-[1px_1px_0px_#000]">
                  <span className="font-black">Q{q.number} ({q.sectionId}) - {q.subTopic}</span>
                  <span className="font-mono font-black bg-[#FCA5A5] px-2 py-0.5 border border-black text-rose-800">{timeSpent}s</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
