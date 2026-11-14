import React, { useState } from "react";
import { Play, Award, Clock, BarChart3, ChevronRight, User, Flame, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from "lucide-react";
import { EXAM_METADATA } from "../data/examData";

export function LandingPage({
  candidate,
  setCandidate,
  onStartExam,
  onOpenInstructions
}) {
  const [selectedMode, setSelectedMode] = useState("REAL_EXAM");
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="min-h-screen bg-[#FEF9EF] text-black font-sans selection:bg-[#FACC15] selection:text-black">
      {/* Top Banner */}
      <header className="border-b-3 border-black bg-[#FDE047] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-[#FB923C] text-black font-black text-xl px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] tracking-wider">
              CAT
            </div>
            <div>
              <span className="font-black text-base sm:text-lg tracking-tight block uppercase leading-none">
                CAT Mock Simulator
              </span>
              <span className="text-[11px] font-black uppercase text-black/80 tracking-wider">
                ★ All-Time Toughest PYQs Edition
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenInstructions}
              className="neo-btn bg-white px-3.5 py-1.5 text-xs text-black"
            >
              Paper Guidelines
            </button>
            <button
              onClick={() => onStartExam(selectedMode, candidate)}
              className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-4 py-1.5 text-xs flex items-center space-x-1.5"
            >
              <Play className="h-3.5 w-3.5 fill-black" />
              <span>START EXAM</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#FB923C] border-2 border-black shadow-[3px_3px_0px_#000] px-3.5 py-1 text-xs font-black uppercase tracking-wider">
            🔥 Brutal Difficulty Sets • CAT 2023, 2020 & 2018 Slot Benchmarks
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-black">
            CAT Official Mock Test & <br />
            <span className="bg-[#FDE047] px-3 border-3 border-black shadow-[4px_4px_0px_#000] inline-block mt-2">
              Performance Diagnostics
            </span>
          </h1>

          <p className="text-sm sm:text-base font-semibold text-black/80 max-w-2xl mx-auto pt-2 leading-relaxed">
            Take on the hardest past-year questions ever asked in CAT history. Built with official TCS iON layout,
            virtual onscreen calculator, strict 40-minute sectional lockouts, and deep per-question time analysis.
          </p>
        </div>

        {/* 3 Neo Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="neo-card-yellow p-6">
            <div className="h-10 w-10 bg-white border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black mb-3">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Toughest PYQs</h3>
            <p className="text-xs font-bold text-black/80 leading-relaxed">
              62 legendary questions: CAT 2023 (hardest QA in history), CAT 2018 (ATM Dispenser set), CAT 2020 (Elephant RC & Police Beats), CAT 2017 (Chess Tournament).
            </p>
          </div>

          <div className="neo-card-orange p-6">
            <div className="h-10 w-10 bg-white border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black mb-3">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Official TCS iON UI</h3>
            <p className="text-xs font-bold text-black/80 leading-relaxed">
              5-state question palette, side-by-side RC reading pane, onscreen calculator with memory registers, and sequential 40-min sectional timer.
            </p>
          </div>

          <div className="neo-card p-6 bg-white">
            <div className="h-10 w-10 bg-[#FDE047] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black mb-3">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Time Diagnostic Audit</h3>
            <p className="text-xs font-bold text-black/80 leading-relaxed">
              Seconds-level tracking per question, 4-Quadrant Strategy Matrix (Speed Demons vs Time Sinks), IIM Cutoff Simulator, and preparation roadmap.
            </p>
          </div>
        </div>

        {/* Configuration Box */}
        <div className="neo-card bg-white p-6 sm:p-8 space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b-2 border-black">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight">Select Simulation Mode</h2>
              <p className="text-xs font-bold text-black/70">Choose your test taking environment</p>
            </div>

            <button
              onClick={() => setShowConfig(!showConfig)}
              className="neo-btn bg-[#FEF08A] px-3 py-1.5 text-xs text-black"
            >
              <User className="h-3.5 w-3.5 inline mr-1" />
              {showConfig ? "Hide Candidate Profile" : "Edit Candidate Profile"}
            </button>
          </div>

          {showConfig && (
            <div className="p-4 bg-[#FEF9EF] border-2 border-black shadow-[3px_3px_0px_#000] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
              <div>
                <label className="block text-black mb-1">Candidate Full Name</label>
                <input
                  type="text"
                  value={candidate.name}
                  onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                  className="w-full bg-white border-2 border-black px-3 py-2 text-black font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-black mb-1">Roll Number / Reg ID</label>
                <input
                  type="text"
                  value={candidate.rollNumber}
                  onChange={(e) => setCandidate({ ...candidate, rollNumber: e.target.value })}
                  className="w-full bg-white border-2 border-black px-3 py-2 text-black font-mono font-bold outline-none"
                />
              </div>
            </div>
          )}

          {/* Mode Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => setSelectedMode("REAL_EXAM")}
              className={`p-5 cursor-pointer border-3 border-black transition ${
                selectedMode === "REAL_EXAM"
                  ? "bg-[#FEF08A] shadow-[5px_5px_0px_#000]"
                  : "bg-white shadow-[2px_2px_0px_#000] hover:bg-[#FFFDF7]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-black text-sm uppercase">Mode A: Strict Exam Mode</span>
                <span className={`h-4 w-4 rounded-full border-2 border-black flex items-center justify-center ${selectedMode === "REAL_EXAM" ? "bg-[#FB923C]" : "bg-white"}`}>
                  {selectedMode === "REAL_EXAM" && <span className="h-2 w-2 rounded-full bg-black" />}
                </span>
              </div>
              <p className="text-xs font-semibold text-black/80 leading-relaxed">
                Official 40-min sequential locks: VARC &rarr; DILR &rarr; QA. Real exam pressure and test endurance calibration.
              </p>
            </div>

            <div
              onClick={() => setSelectedMode("PRACTICE")}
              className={`p-5 cursor-pointer border-3 border-black transition ${
                selectedMode === "PRACTICE"
                  ? "bg-[#FED7AA] shadow-[5px_5px_0px_#000]"
                  : "bg-white shadow-[2px_2px_0px_#000] hover:bg-[#FFFDF7]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-black text-sm uppercase">Mode B: Practice & Rapid Diagnostic</span>
                <span className={`h-4 w-4 rounded-full border-2 border-black flex items-center justify-center ${selectedMode === "PRACTICE" ? "bg-[#FB923C]" : "bg-white"}`}>
                  {selectedMode === "PRACTICE" && <span className="h-2 w-2 rounded-full bg-black" />}
                </span>
              </div>
              <p className="text-xs font-semibold text-black/80 leading-relaxed">
                Free section switching enabled. Test specific questions and submit anytime to run immediate time diagnostics.
              </p>
            </div>
          </div>

          {/* Paper Structure */}
          <div className="p-4 bg-[#FEF9EF] border-2 border-black shadow-[3px_3px_0px_#000] rounded-lg">
            <div className="text-xs font-black uppercase text-black mb-2">
              Exam Structure: 62 Questions • 186 Marks
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
              {EXAM_METADATA.sections.map((sec, idx) => (
                <div key={sec.id} className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black">{idx + 1}. {sec.shortName}</span>
                    <span className="bg-[#FDE047] px-1.5 py-0.5 border border-black text-[10px]">40m</span>
                  </div>
                  <div className="text-black/70 text-[11px]">{sec.questionCount} Questions</div>
                  <div className="text-[#EA580C] text-[10px] mt-1 font-black">99%ile: ~{sec.historicalCutoffs.p99} M</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 text-center">
            <button
              onClick={() => onStartExam(selectedMode, candidate)}
              className="neo-btn w-full sm:w-auto min-w-[300px] bg-[#FB923C] hover:bg-[#F97316] text-black text-sm font-black py-4 px-8 inline-flex items-center justify-center space-x-2"
            >
              <Play className="h-4 w-4 fill-black" />
              <span>LAUNCH CAT MOCK EXAM NOW</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-3 border-black bg-[#FDE047] py-4 text-center text-xs font-bold text-black">
        CAT Mock Exam Simulator • Neo-Brutalist High-Contrast Edition • Built for 99+ Percentile Aspirants
      </footer>
    </div>
  );
}
