import React from "react";
import { Compass, CheckCircle2, Award, Calendar, Target, Flag } from "lucide-react";

export function ActionRoadmapView({ summary }) {
  return (
    <div className="space-y-6 font-sans">
      {/* Banner */}
      <div className="neo-card-yellow p-6 text-black space-y-2">
        <div className="flex items-center space-x-2">
          <span className="bg-[#FB923C] p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Compass className="h-5 w-5 text-black" />
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            How & When to Prepare: Targeted Score-Maximization Roadmap
          </h3>
        </div>
        <p className="text-xs sm:text-sm font-bold text-black/80 max-w-3xl leading-relaxed">
          Structured week-by-week preparation blueprint calibrated from your test metrics to breach the 99th percentile cutoff on CAT D-Day.
        </p>
      </div>

      {/* 3 Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Phase I */}
        <div className="neo-card p-5 bg-white space-y-3">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="text-[10px] font-black uppercase bg-[#FED7AA] px-2 py-0.5 border border-black">
              Weeks 1 to 3
            </span>
            <span className="text-xs font-black uppercase text-black/60">Phase I</span>
          </div>
          <h4 className="font-black text-base uppercase text-black">
            Triage & Gap Rectification
          </h4>
          <ul className="space-y-2.5 text-xs font-bold text-black/80">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>VARC:</strong> Read 2 daily essays from Aeon / Project Syndicate. Target 320 wpm with 80% comprehension retention.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>DILR:</strong> Solve 3 PYQ sets daily with strict 15-minute stopwatch limits. Master 2-variable matrix & tournament brackets.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>QA:</strong> Drill Algebra functional equations, polynomials, and Geometry incircle/hypotenuse relations.</span>
            </li>
          </ul>
        </div>

        {/* Phase II */}
        <div className="neo-card p-5 bg-white space-y-3">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="text-[10px] font-black uppercase bg-[#FEF08A] px-2 py-0.5 border border-black">
              Weeks 4 to 7
            </span>
            <span className="text-xs font-black uppercase text-black/60">Phase II</span>
          </div>
          <h4 className="font-black text-base uppercase text-black">
            The 3-Round Strategy
          </h4>
          <ul className="space-y-2.5 text-xs font-bold text-black/80">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>Round 1 (0-15m):</strong> Rapid scan. Solve sitters in &lt; 90s. Target 6-8 direct QA sitters and easy Para Jumbles.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>Round 2 (15-35m):</strong> Crack your 2 chosen DILR caselets completely. Do not bail out after 10 mins if halfway through.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>Round 3 (35-40m):</strong> Review TITA questions with zero negative penalty risk.</span>
            </li>
          </ul>
        </div>

        {/* Phase III */}
        <div className="neo-card p-5 bg-white space-y-3">
          <div className="flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="text-[10px] font-black uppercase bg-[#86EFAC] px-2 py-0.5 border border-black">
              Weeks 8 to 10
            </span>
            <span className="text-xs font-black uppercase text-black/60">Phase III</span>
          </div>
          <h4 className="font-black text-base uppercase text-black">
            Full Mock Marathon & 2X Rule
          </h4>
          <ul className="space-y-2.5 text-xs font-bold text-black/80">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>Slot Alignment:</strong> Take 2 full mocks per week strictly in your allocated slot (8:30am, 12:30pm, or 4:30pm).</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>2X Analysis Rule:</strong> Spend at least 4 hours analyzing every 2-hour mock test question-by-question.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
              <span><strong>Error Log:</strong> Maintain a dedicated hardbound notebook of every time sink and careless error.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* D-Day Checklist */}
      <div className="neo-card p-6 bg-[#FEF08A] space-y-3">
        <h4 className="font-black text-base uppercase text-black flex items-center">
          <Flag className="h-4 w-4 mr-2" />
          CAT Exam Day Golden Execution Rules
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-bold text-black">
          <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
            ⚡ <strong>The 3-Minute Hard Bailout:</strong> In QA or DILR, if no clear mathematical pathway exists after 180 seconds, mark skipped and move on immediately.
          </div>
          <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
            🎯 <strong>Never Solve All 4 DILR Sets:</strong> 2 complete sets (10 Qs) with 100% accuracy guarantees 97-98%ile in modern tough CAT slots.
          </div>
        </div>
      </div>
    </div>
  );
}
