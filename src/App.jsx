import React from "react";
import { useExamState } from "./hooks/useExamState";
import { LandingPage } from "./components/LandingPage";
import { Header } from "./components/Header";
import { SectionTabs } from "./components/SectionTabs";
import { QuestionViewer } from "./components/QuestionViewer";
import { QuestionPalette } from "./components/QuestionPalette";
import { VirtualCalculator } from "./components/VirtualCalculator";
import { QuestionPaperModal } from "./components/QuestionPaperModal";
import { InstructionsModal } from "./components/InstructionsModal";
import { SubmitModal } from "./components/SubmitModal";
import { AssessmentDashboard } from "./components/AssessmentReport/AssessmentDashboard";

export default function App() {
  const {
    phase,
    testMode,
    candidate,
    setCandidate,
    currentSectionIndex,
    currentSection,
    activeQuestionId,
    activeQuestion,
    sectionQuestions,
    sectionTimeLeft,
    questionStatus,
    userResponses,
    questionTimes,
    isCalculatorOpen,
    setIsCalculatorOpen,
    isQuestionPaperOpen,
    setIsQuestionPaperOpen,
    isInstructionsOpen,
    setIsInstructionsOpen,
    isSubmitModalOpen,
    setIsSubmitModalOpen,
    startExam,
    jumpToQuestion,
    handleSaveAndNext,
    handleMarkForReviewAndNext,
    handleClearResponse,
    handleNext,
    handlePrevious,
    switchSection,
    submitCurrentSection,
    getPaletteCounts,
    resetToLobby
  } = useExamState();

  if (phase === "LOBBY") {
    return (
      <>
        <LandingPage
          candidate={candidate}
          setCandidate={setCandidate}
          onStartExam={startExam}
          onOpenInstructions={() => setIsInstructionsOpen(true)}
        />
        <InstructionsModal
          isOpen={isInstructionsOpen}
          onClose={() => setIsInstructionsOpen(false)}
        />
      </>
    );
  }

  if (phase === "ASSESSMENT") {
    return (
      <AssessmentDashboard
        candidate={candidate}
        userResponses={userResponses}
        questionTimes={questionTimes}
        testMode={testMode}
        onRetakeExam={resetToLobby}
      />
    );
  }

  const isFirstQuestion = sectionQuestions[0]?.id === activeQuestionId;
  const isLastQuestion = sectionQuestions[sectionQuestions.length - 1]?.id === activeQuestionId;
  const isLastSection = currentSectionIndex === 2;

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-100 overflow-hidden font-sans">
      <Header
        candidate={candidate}
        currentSection={currentSection}
        timeLeftSeconds={sectionTimeLeft[currentSectionIndex]}
        testMode={testMode}
        onOpenCalculator={() => setIsCalculatorOpen(!isCalculatorOpen)}
        onOpenQuestionPaper={() => setIsQuestionPaperOpen(true)}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
      />

      <SectionTabs
        currentSectionIndex={currentSectionIndex}
        testMode={testMode}
        onSwitchSection={switchSection}
        getPaletteCounts={getPaletteCounts}
      />

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        <QuestionViewer
          question={activeQuestion}
          userResponse={userResponses[activeQuestion.id]}
          timeSpentSeconds={questionTimes[activeQuestion.id] || 0}
          onSaveAndNext={handleSaveAndNext}
          onMarkForReviewAndNext={handleMarkForReviewAndNext}
          onClearResponse={handleClearResponse}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isFirstQuestion={isFirstQuestion}
          isLastQuestion={isLastQuestion}
        />

        <QuestionPalette
          candidate={candidate}
          currentSection={currentSection}
          sectionQuestions={sectionQuestions}
          activeQuestionId={activeQuestionId}
          questionStatus={questionStatus}
          userResponses={userResponses}
          onJumpToQuestion={jumpToQuestion}
          getPaletteCounts={getPaletteCounts}
          onSubmitSection={() => setIsSubmitModalOpen(true)}
          isLastSection={isLastSection}
        />
      </div>

      <VirtualCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <QuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        currentSection={currentSection}
        sectionQuestions={sectionQuestions}
        onSelectQuestion={jumpToQuestion}
      />

      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={submitCurrentSection}
        getPaletteCounts={getPaletteCounts}
      />
    </div>
  );
}
