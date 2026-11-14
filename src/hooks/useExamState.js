import { useState, useEffect, useRef, useCallback } from "react";
import { EXAM_METADATA, QUESTIONS } from "../data/examData";

const STORAGE_KEY = "cat_mock_exam_state_v1";
const HISTORY_KEY = "cat_mock_exam_history_v1";

export function useExamState() {
  const [phase, setPhase] = useState("LOBBY");
  const [testMode, setTestMode] = useState("REAL_EXAM");

  const [candidate, setCandidate] = useState({
    name: "Aakash Sharma",
    rollNumber: "CAT2024-984210",
    slot: "Slot 1 (Forenoon)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  });

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [activeQuestionId, setActiveQuestionId] = useState(QUESTIONS[0].id);

  const [questionStatus, setQuestionStatus] = useState(() => {
    const initial = {};
    QUESTIONS.forEach((q, idx) => {
      initial[q.id] = idx === 0 ? "NOT_ANSWERED" : "NOT_VISITED";
    });
    return initial;
  });

  const [userResponses, setUserResponses] = useState({});
  const [questionTimes, setQuestionTimes] = useState(() => {
    const initial = {};
    QUESTIONS.forEach(q => { initial[q.id] = 0; });
    return initial;
  });

  const [sectionTimeLeft, setSectionTimeLeft] = useState(() => {
    return EXAM_METADATA.sections.map(s => s.durationSeconds);
  });

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [examStartTime, setExamStartTime] = useState(null);
  const [examEndTime, setExamEndTime] = useState(null);

  const currentSection = EXAM_METADATA.sections[currentSectionIndex];
  const sectionQuestions = QUESTIONS.filter(q => q.sectionId === currentSection.id);
  const activeQuestion = QUESTIONS.find(q => q.id === activeQuestionId) || sectionQuestions[0];

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const activeQIdRef = useRef(activeQuestionId);
  useEffect(() => {
    activeQIdRef.current = activeQuestionId;
  }, [activeQuestionId]);

  const currentSecIdxRef = useRef(currentSectionIndex);
  useEffect(() => {
    currentSecIdxRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  const handleFinalSubmit = useCallback(() => {
    setIsTimerRunning(false);
    const endTime = new Date().toISOString();
    setExamEndTime(endTime);
    setIsSubmitModalOpen(false);
    setPhase("ASSESSMENT");

    try {
      const historyItem = {
        id: "attempt_" + Date.now(),
        date: endTime,
        testMode,
        candidate,
        userResponses,
        questionTimes,
        questionStatus
      };
      const existingHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      existingHistory.unshift(historyItem);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(existingHistory.slice(0, 10)));
    } catch (e) {
      console.warn("Could not save to history:", e);
    }
  }, [testMode, candidate, userResponses, questionTimes, questionStatus]);

  const handleAutoSubmit = useCallback(() => {
    handleFinalSubmit();
  }, [handleFinalSubmit]);

  useEffect(() => {
    if (phase !== "IN_EXAM" || !isTimerRunning) return;

    const interval = setInterval(() => {
      setQuestionTimes(prev => {
        const qId = activeQIdRef.current;
        return {
          ...prev,
          [qId]: (prev[qId] || 0) + 1
        };
      });

      setSectionTimeLeft(prev => {
        const secIdx = currentSecIdxRef.current;
        const currentSeconds = prev[secIdx];

        if (currentSeconds <= 1) {
          if (secIdx < EXAM_METADATA.sections.length - 1) {
            const nextSecIdx = secIdx + 1;
            const nextSec = EXAM_METADATA.sections[nextSecIdx];
            const nextQuestions = QUESTIONS.filter(q => q.sectionId === nextSec.id);

            setCurrentSectionIndex(nextSecIdx);
            setActiveQuestionId(nextQuestions[0].id);

            setQuestionStatus(statusPrev => ({
              ...statusPrev,
              [nextQuestions[0].id]: statusPrev[nextQuestions[0].id] === "NOT_VISITED" ? "NOT_ANSWERED" : statusPrev[nextQuestions[0].id]
            }));

            const updated = [...prev];
            updated[secIdx] = 0;
            return updated;
          } else {
            handleAutoSubmit();
            return prev;
          }
        }

        const updated = [...prev];
        updated[secIdx] = currentSeconds - 1;
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, isTimerRunning, handleAutoSubmit]);

  const startExam = (mode = "REAL_EXAM", customCandidate = null) => {
    setTestMode(mode);
    if (customCandidate) setCandidate(customCandidate);

    const initialStatus = {};
    const initialTimes = {};
    QUESTIONS.forEach((q, idx) => {
      initialStatus[q.id] = idx === 0 ? "NOT_ANSWERED" : "NOT_VISITED";
      initialTimes[q.id] = 0;
    });

    setQuestionStatus(initialStatus);
    setQuestionTimes(initialTimes);
    setUserResponses({});
    setCurrentSectionIndex(0);
    setActiveQuestionId(QUESTIONS[0].id);
    setSectionTimeLeft(EXAM_METADATA.sections.map(s => s.durationSeconds));
    setExamStartTime(new Date().toISOString());
    setExamEndTime(null);
    setPhase("IN_EXAM");
    setIsTimerRunning(true);
  };

  const jumpToQuestion = useCallback((targetQuestionId) => {
    const targetQ = QUESTIONS.find(q => q.id === targetQuestionId);
    if (!targetQ) return;

    if (testMode === "REAL_EXAM" && targetQ.sectionId !== currentSection.id) {
      alert(`Sectional Lock Active: You cannot move to ${targetQ.sectionId} until Section ${currentSection.shortName} is completed.`);
      return;
    }

    if (targetQ.sectionId !== currentSection.id) {
      const secIdx = EXAM_METADATA.sections.findIndex(s => s.id === targetQ.sectionId);
      if (secIdx !== -1) setCurrentSectionIndex(secIdx);
    }

    setQuestionStatus(prev => {
      const currentQStatus = prev[activeQuestionId];
      const newStatus = { ...prev };

      if (currentQStatus === "NOT_VISITED") {
        newStatus[activeQuestionId] = "NOT_ANSWERED";
      }

      if (newStatus[targetQuestionId] === "NOT_VISITED") {
        newStatus[targetQuestionId] = "NOT_ANSWERED";
      }

      return newStatus;
    });

    setActiveQuestionId(targetQuestionId);
  }, [activeQuestionId, currentSection.id, currentSection.shortName, testMode]);

  const handleSaveAndNext = useCallback((responseValue) => {
    const qId = activeQuestionId;
    const hasAnswer = responseValue !== undefined && responseValue !== null && String(responseValue).trim() !== "";

    if (hasAnswer) {
      setUserResponses(prev => ({ ...prev, [qId]: responseValue }));
      setQuestionStatus(prev => ({ ...prev, [qId]: "ANSWERED" }));
    } else {
      setQuestionStatus(prev => {
        const current = prev[qId];
        return {
          ...prev,
          [qId]: current === "ANSWERED" ? "ANSWERED" : "NOT_ANSWERED"
        };
      });
    }

    const currentIndex = sectionQuestions.findIndex(q => q.id === qId);
    if (currentIndex < sectionQuestions.length - 1) {
      const nextQ = sectionQuestions[currentIndex + 1];
      setActiveQuestionId(nextQ.id);
      setQuestionStatus(prev => ({
        ...prev,
        [nextQ.id]: prev[nextQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[nextQ.id]
      }));
    } else {
      alert(`You have reached the end of Section ${currentSection.shortName}.`);
    }
  }, [activeQuestionId, sectionQuestions, currentSection.shortName]);

  const handleMarkForReviewAndNext = useCallback((responseValue) => {
    const qId = activeQuestionId;
    const hasAnswer = responseValue !== undefined && responseValue !== null && String(responseValue).trim() !== "";

    if (hasAnswer) {
      setUserResponses(prev => ({ ...prev, [qId]: responseValue }));
      setQuestionStatus(prev => ({ ...prev, [qId]: "ANSWERED_MARKED" }));
    } else {
      setQuestionStatus(prev => ({ ...prev, [qId]: "MARKED_REVIEW" }));
    }

    const currentIndex = sectionQuestions.findIndex(q => q.id === qId);
    if (currentIndex < sectionQuestions.length - 1) {
      const nextQ = sectionQuestions[currentIndex + 1];
      setActiveQuestionId(nextQ.id);
      setQuestionStatus(prev => ({
        ...prev,
        [nextQ.id]: prev[nextQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[nextQ.id]
      }));
    }
  }, [activeQuestionId, sectionQuestions]);

  const handleClearResponse = useCallback(() => {
    const qId = activeQuestionId;
    setUserResponses(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setQuestionStatus(prev => ({ ...prev, [qId]: "NOT_ANSWERED" }));
  }, [activeQuestionId]);

  const handleNext = useCallback(() => {
    const currentIndex = sectionQuestions.findIndex(q => q.id === activeQuestionId);
    if (currentIndex < sectionQuestions.length - 1) {
      jumpToQuestion(sectionQuestions[currentIndex + 1].id);
    }
  }, [activeQuestionId, sectionQuestions, jumpToQuestion]);

  const handlePrevious = useCallback(() => {
    const currentIndex = sectionQuestions.findIndex(q => q.id === activeQuestionId);
    if (currentIndex > 0) {
      jumpToQuestion(sectionQuestions[currentIndex - 1].id);
    }
  }, [activeQuestionId, sectionQuestions, jumpToQuestion]);

  const switchSection = useCallback((targetSectionIndex) => {
    if (targetSectionIndex === currentSectionIndex) return;

    if (testMode === "REAL_EXAM") {
      alert("Section Switching Locked: In authentic CAT rules, you must complete the 40-minute window or submit the current section to proceed.");
      return;
    }

    setCurrentSectionIndex(targetSectionIndex);
    const targetSec = EXAM_METADATA.sections[targetSectionIndex];
    const targetQuestions = QUESTIONS.filter(q => q.sectionId === targetSec.id);
    setActiveQuestionId(targetQuestions[0].id);

    setQuestionStatus(prev => ({
      ...prev,
      [targetQuestions[0].id]: prev[targetQuestions[0].id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[targetQuestions[0].id]
    }));
  }, [currentSectionIndex, testMode]);

  const submitCurrentSection = useCallback(() => {
    if (currentSectionIndex < EXAM_METADATA.sections.length - 1) {
      const nextSecIdx = currentSectionIndex + 1;
      const nextSec = EXAM_METADATA.sections[nextSecIdx];
      const nextQuestions = QUESTIONS.filter(q => q.sectionId === nextSec.id);

      setCurrentSectionIndex(nextSecIdx);
      setActiveQuestionId(nextQuestions[0].id);

      setQuestionStatus(prev => ({
        ...prev,
        [nextQuestions[0].id]: prev[nextQuestions[0].id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[nextQuestions[0].id]
      }));
    } else {
      handleFinalSubmit();
    }
  }, [currentSectionIndex, handleFinalSubmit]);

  const getPaletteCounts = useCallback((secId = null) => {
    const targetQuestions = secId ? QUESTIONS.filter(q => q.sectionId === secId) : sectionQuestions;
    const counts = {
      NOT_VISITED: 0,
      NOT_ANSWERED: 0,
      ANSWERED: 0,
      MARKED_REVIEW: 0,
      ANSWERED_MARKED: 0
    };

    targetQuestions.forEach(q => {
      const status = questionStatus[q.id] || "NOT_VISITED";
      counts[status] = (counts[status] || 0) + 1;
    });

    return counts;
  }, [questionStatus, sectionQuestions]);

  const resetToLobby = () => {
    setPhase("LOBBY");
    setIsTimerRunning(false);
  };

  return {
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
    isTimerRunning,
    examStartTime,
    examEndTime,

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
    handleFinalSubmit,
    getPaletteCounts,
    resetToLobby
  };
}
