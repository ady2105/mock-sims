import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Award, Clock, Compass, BookOpen, RotateCcw, Printer, ArrowLeft, BarChart3, Flame, Zap } from "lucide-react";
import { EXAM_METADATA, QUESTIONS } from "../../data/examData";
import { calculateCatPercentile, analyzeExamDiagnostics } from "../../data/percentileModel";
import { ScorecardHero } from "./ScorecardHero";
import { TimeAnalysisView } from "./TimeAnalysisView";
import { TimeAccuracyMatrixView } from "./TimeAccuracyMatrixView";
import { DiagnosticAlertsView } from "./DiagnosticAlertsView";
import { ActionRoadmapView } from "./ActionRoadmapView";
import { QuestionReviewView } from "./QuestionReviewView";

export function AssessmentDashboard({
  candidate,
  userResponses,
  questionTimes,
  testMode,
  onRetakeExam
}) {
  const [activeTab, setActiveTab] = useState("SCORECARD");

  let totalMarks = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let negativeMarks = 0;
  let totalAttempted = 0;

  const sectionScores = {
    VARC: { score: 0, correct: 0, wrong: 0, unattempted: 0, accuracy: 0, percentile: 0 },
    DILR: { score: 0, correct: 0, wrong: 0, unattempted: 0, accuracy: 0, percentile: 0 },
    QA:   { score: 0, correct: 0, wrong: 0, unattempted: 0, accuracy: 0, percentile: 0 }
  };

  QUESTIONS.forEach((q) => {
    const resp = userResponses[q.id];
    const isAttempted = resp !== undefined && resp !== null && String(resp).trim() !== "";
    const isCorrect = isAttempted && String(resp).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();

    const sec = sectionScores[q.sectionId];

    if (!isAttempted) {
      sec.unattempted += 1;
    } else {
      totalAttempted += 1;
      if (isCorrect) {
        totalCorrect += 1;
        totalMarks += 3;
        sec.correct += 1;
        sec.score += 3;
      } else {
        totalWrong += 1;
        sec.wrong += 1;
        if (q.type === "MCQ") {
          totalMarks -= 1;
          negativeMarks += 1;
          sec.score -= 1;
        }
      }
    }
  });

  Object.keys(sectionScores).forEach((secId) => {
    const s = sectionScores[secId];
    const attempted = s.correct + s.wrong;
    s.accuracy = attempted > 0 ? Math.round((s.correct / attempted) * 100) : 0;
    s.percentile = calculateCatPercentile(s.score, secId);
  });

  const overallPercentile = calculateCatPercentile(totalMarks, "OVERALL");
  const accuracyPct = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const summary = {
    totalMarks,
    negativeMarks,
    overallPercentile,
    sectionScores,
    totalAttempted,
    totalCorrect,
    totalWrong,
    totalUnattempted: QUESTIONS.length - totalAttempted,
    accuracyPct
  };

  const { diagnostics, timeAccuracyQuadrants, summaryStats } = analyzeExamDiagnostics(
    QUESTIONS,
    userResponses,
    questionTimes
  );

  useEffect(() => {
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  }, []);

  const tabs = [
    { id: "SCORECARD", label: "Scorecard & IIM Calls", icon: Award },
    { id: "TIME", label: "Time Analysis", icon: Clock },
    { id: "MATRIX", label: "Time-Accuracy Matrix", icon: Zap },
    { id: "DIAGNOSTIC", label: "Where You Are Lacking", icon: Flame },
    { id: "ROADMAP", label: "How & When to Prepare", icon: Compass },
    { id: "SOLUTIONS", label: "Question Review & Solutions", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-[#FEF9EF] text-black font-sans pb-16 selection:bg-[#FACC15] selection:text-black">
      {/* Neo-Brutalist Header */}
      <header className="bg-[#FDE047] border-b-3 border-black sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onRetakeExam}
              className="neo-btn bg-white p-1.5 text-black"
              title="Return to Exam Lobby"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-[#FB923C] text-black text-xs font-black px-2 py-0.5 border-2 border-black shadow-[1px_1px_0px_#000]">
                  REPORT
                </span>
                <h1 className="text-base sm:text-lg font-black uppercase tracking-tight text-black">
                  Diagnostic Assessment & Analysis
                </h1>
              </div>
              <span className="text-[11px] font-bold text-black/80">
                CAT Toughest PYQ Exam • Candidate: <span className="underline">{candidate.name}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="neo-btn bg-white px-3 py-1.5 text-xs text-black hidden sm:flex items-center space-x-1.5"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print Report</span>
            </button>
            <button
              onClick={onRetakeExam}
              className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-3.5 py-1.5 text-xs flex items-center space-x-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Retake Exam</span>
            </button>
          </div>
        </div>

        {/* Tabs Row */}
        <div className="bg-[#FEF08A] border-t-2 border-black px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex space-x-2 overflow-x-auto custom-scrollbar py-2 text-xs font-black">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`neo-btn px-3 py-1.5 flex items-center space-x-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-[#FB923C] text-black shadow-[3px_3px_0px_#000] scale-102"
                      : "bg-white text-black hover:bg-white/80"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "SCORECARD" && <ScorecardHero summary={summary} candidate={candidate} />}
        {activeTab === "TIME" && <TimeAnalysisView questions={QUESTIONS} userResponses={userResponses} questionTimes={questionTimes} diagnosticStats={summaryStats} />}
        {activeTab === "MATRIX" && <TimeAccuracyMatrixView quadrants={timeAccuracyQuadrants} />}
        {activeTab === "DIAGNOSTIC" && <DiagnosticAlertsView diagnostics={diagnostics} />}
        {activeTab === "ROADMAP" && <ActionRoadmapView summary={summary} />}
        {activeTab === "SOLUTIONS" && <QuestionReviewView questions={QUESTIONS} userResponses={userResponses} questionTimes={questionTimes} />}
      </main>
    </div>
  );
}
