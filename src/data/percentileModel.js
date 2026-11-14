// CAT Percentile Estimator and Deep Diagnostic Engine

export function calculateCatPercentile(score, sectionId = "OVERALL") {
  const safeScore = Math.max(-20, score);

  if (sectionId === "VARC") {
    if (safeScore >= 42) return 99.8;
    if (safeScore >= 36) return 99.0 + (safeScore - 36) * (0.8 / 6);
    if (safeScore >= 28) return 95.0 + (safeScore - 28) * (4.0 / 8);
    if (safeScore >= 22) return 90.0 + (safeScore - 22) * (5.0 / 6);
    if (safeScore >= 16) return 80.0 + (safeScore - 16) * (10.0 / 6);
    if (safeScore >= 10) return 65.0 + (safeScore - 10) * (15.0 / 6);
    if (safeScore >= 4) return 40.0 + (safeScore - 4) * (25.0 / 6);
    return Math.max(1.0, 10 + safeScore * 5);
  }

  if (sectionId === "DILR") {
    if (safeScore >= 32) return 99.8;
    if (safeScore >= 23) return 99.0 + (safeScore - 23) * (0.8 / 9);
    if (safeScore >= 17) return 95.0 + (safeScore - 17) * (4.0 / 6);
    if (safeScore >= 13) return 90.0 + (safeScore - 13) * (5.0 / 4);
    if (safeScore >= 9) return 80.0 + (safeScore - 9) * (10.0 / 4);
    if (safeScore >= 6) return 65.0 + (safeScore - 6) * (15.0 / 3);
    if (safeScore >= 3) return 45.0 + (safeScore - 3) * (20.0 / 3);
    return Math.max(1.0, 15 + safeScore * 8);
  }

  if (sectionId === "QA") {
    if (safeScore >= 30) return 99.9;
    if (safeScore >= 21) return 99.0 + (safeScore - 21) * (0.9 / 9);
    if (safeScore >= 15) return 95.0 + (safeScore - 15) * (4.0 / 6);
    if (safeScore >= 11) return 90.0 + (safeScore - 11) * (5.0 / 4);
    if (safeScore >= 7) return 80.0 + (safeScore - 7) * (10.0 / 4);
    if (safeScore >= 4) return 60.0 + (safeScore - 4) * (20.0 / 3);
    if (safeScore >= 1) return 35.0 + (safeScore - 1) * (25.0 / 3);
    return Math.max(1.0, 10 + safeScore * 5);
  }

  // OVERALL (Max 186)
  if (safeScore >= 75) return 99.9;
  if (safeScore >= 52) return 99.0 + (safeScore - 52) * (0.9 / 23);
  if (safeScore >= 39) return 95.0 + (safeScore - 39) * (4.0 / 13);
  if (safeScore >= 30) return 90.0 + (safeScore - 30) * (5.0 / 9);
  if (safeScore >= 21) return 80.0 + (safeScore - 21) * (10.0 / 9);
  if (safeScore >= 14) return 65.0 + (safeScore - 14) * (15.0 / 7);
  if (safeScore >= 6) return 40.0 + (safeScore - 6) * (25.0 / 8);
  return Math.max(1.0, 10 + safeScore * 3);
}

export function checkIIMEligibility(varcPct, dilrPct, qaPct, overallPct) {
  const iimCutoffs = [
    {
      code: "IIM-A",
      name: "IIM Ahmedabad",
      tier: "Top Tier 1",
      minSectional: 70,
      minOverall: 80,
      practicalSectional: 85,
      practicalOverall: 99.2
    },
    {
      code: "IIM-B",
      name: "IIM Bangalore",
      tier: "Top Tier 1",
      minSectional: 75,
      minOverall: 85,
      practicalSectional: 85,
      practicalOverall: 99.0
    },
    {
      code: "IIM-C",
      name: "IIM Calcutta",
      tier: "Top Tier 1",
      minSectional: 75,
      minOverall: 85,
      practicalSectional: 88,
      practicalOverall: 99.3
    },
    {
      code: "IIM-L",
      name: "IIM Lucknow",
      tier: "Tier 1",
      minSectional: 75,
      minOverall: 85,
      practicalSectional: 82,
      practicalOverall: 97.5
    },
    {
      code: "IIM-K",
      name: "IIM Kozhikode",
      tier: "Tier 1",
      minSectional: 70,
      minOverall: 80,
      practicalSectional: 80,
      practicalOverall: 97.0
    },
    {
      code: "FMS",
      name: "FMS Delhi",
      tier: "Top Tier 1 (ROI King)",
      minSectional: 60,
      minOverall: 98.0,
      practicalSectional: 75,
      practicalOverall: 98.8
    }
  ];

  return iimCutoffs.map(college => {
    const clearsMin =
      varcPct >= college.minSectional &&
      dilrPct >= college.minSectional &&
      qaPct >= college.minSectional &&
      overallPct >= college.minOverall;

    const competitive =
      varcPct >= college.practicalSectional &&
      dilrPct >= college.practicalSectional &&
      qaPct >= college.practicalSectional &&
      overallPct >= college.practicalOverall;

    return {
      ...college,
      status: competitive ? "Strong Contender" : clearsMin ? "Eligible (Marginal)" : "Cutoff Missed",
      cleared: clearsMin
    };
  });
}

export function analyzeExamDiagnostics(questions, userResponses, questionTimes) {
  const diagnostics = [];
  const timeAccuracyQuadrants = {
    swiftAndAccurate: [],
    slowGrinders: [],
    carelessErrors: [],
    timeSinks: [],
    unattemptedTraps: [],
    untouchedSitters: []
  };

  let totalTimeOnWrong = 0;
  let totalTimeOnCorrect = 0;
  let totalTimeOnUnattempted = 0;
  let wrongCount = 0;
  let correctCount = 0;
  let unattemptedCount = 0;

  const caseletStats = {};

  questions.forEach(q => {
    const response = userResponses[q.id];
    const timeSpent = questionTimes[q.id] || 0;
    const isAttempted = response !== undefined && response !== null && String(response).trim() !== "";
    const isCorrect = isAttempted && String(response).trim().toUpperCase() === String(q.correctAnswer).trim().toUpperCase();

    if (q.caseletId) {
      if (!caseletStats[q.caseletId]) {
        caseletStats[q.caseletId] = {
          title: q.caseletTitle,
          sectionId: q.sectionId,
          totalTime: 0,
          attempted: 0,
          correct: 0,
          totalQuestions: 0
        };
      }
      caseletStats[q.caseletId].totalTime += timeSpent;
      caseletStats[q.caseletId].totalQuestions += 1;
      if (isAttempted) caseletStats[q.caseletId].attempted += 1;
      if (isCorrect) caseletStats[q.caseletId].correct += 1;
    }

    if (!isAttempted) {
      unattemptedCount++;
      totalTimeOnUnattempted += timeSpent;
      if (timeSpent > 90) {
        timeAccuracyQuadrants.unattemptedTraps.push({ q, timeSpent });
      } else if (q.difficulty === "Medium" && timeSpent < 20) {
        timeAccuracyQuadrants.untouchedSitters.push(q);
      }
    } else if (isCorrect) {
      correctCount++;
      totalTimeOnCorrect += timeSpent;
      if (timeSpent <= q.idealTimeSeconds * 1.1) {
        timeAccuracyQuadrants.swiftAndAccurate.push({ q, timeSpent });
      } else {
        timeAccuracyQuadrants.slowGrinders.push({ q, timeSpent });
      }
    } else {
      wrongCount++;
      totalTimeOnWrong += timeSpent;
      if (timeSpent < q.idealTimeSeconds * 0.55) {
        timeAccuracyQuadrants.carelessErrors.push({ q, timeSpent });
      } else if (timeSpent >= q.idealTimeSeconds * 1.25) {
        timeAccuracyQuadrants.timeSinks.push({ q, timeSpent });
      }
    }
  });

  if (timeAccuracyQuadrants.timeSinks.length > 0) {
    const wastedSecs = timeAccuracyQuadrants.timeSinks.reduce((sum, item) => sum + item.timeSpent, 0);
    const wastedMins = Math.round(wastedSecs / 60);
    diagnostics.push({
      type: "DANGER",
      title: `Critical Alert: ${wastedMins} Minutes Sunk in High-Investment Traps`,
      category: "Time Management",
      icon: "AlertTriangle",
      description: `You spent more than 1.3x ideal time on ${timeAccuracyQuadrants.timeSinks.length} questions and still got them wrong (Questions: ${timeAccuracyQuadrants.timeSinks.map(i => `Q${i.q.number}`).join(", ")}). In a tough CAT paper, this costs both -1 negative mark AND starves 4-5 easier questions of time.`,
      recommendation: "Implement the strict 2.5-Minute Abandonment Rule: If you cannot form a concrete solution path by 120 seconds in QA or 3 minutes on a DILR set, flag for review and abandon immediately."
    });
  }

  Object.values(caseletStats).forEach(c => {
    if (c.sectionId === "DILR") {
      const caseletMins = Math.round(c.totalTime / 60);
      if (caseletMins >= 16 && c.correct <= 1) {
        diagnostics.push({
          type: "DANGER",
          title: `DILR Set Selection Disaster: ${caseletMins} mins on "${c.title}"`,
          category: "DILR Strategy",
          icon: "TrendingDown",
          description: `You invested ${caseletMins} minutes in this set but only converted ${c.correct} out of ${c.totalQuestions} questions correctly. In CAT DILR, scoring 99%ile requires cracking only 2 to 2.5 sets cleanly! Sinking 16+ minutes into an uncrackable set destroys the entire section.`,
          recommendation: "Pre-scan Round: Spend the first 4 minutes skimming all 4 DILR sets without solving. Rank them: Easiest -> Moderate -> Trap. Attack only your top 2 sets first."
        });
      }
    }
  });

  if (timeAccuracyQuadrants.carelessErrors.length >= 2) {
    diagnostics.push({
      type: "WARNING",
      title: `Careless Errors: ${timeAccuracyQuadrants.carelessErrors.length} Questions Rushed Under Speed Pressure`,
      category: "Accuracy & Focus",
      icon: "ZapOff",
      description: `You answered questions ${timeAccuracyQuadrants.carelessErrors.map(i => `Q${i.q.number}`).join(", ")} in less than half their ideal time, resulting in avoidable negative marks.`,
      recommendation: "Read CAT question stems twice. Look out for trick words: 'must be true', 'cannot be false', 'integral solutions', or reversed units."
    });
  }

  if (timeAccuracyQuadrants.untouchedSitters.length >= 2) {
    diagnostics.push({
      type: "INFO",
      title: `Missed Sitters: ${timeAccuracyQuadrants.untouchedSitters.length} Moderate Questions Never Attempted`,
      category: "Exam Navigation",
      icon: "EyeOff",
      description: `Questions ${timeAccuracyQuadrants.untouchedSitters.map(q => `Q${q.number}`).join(", ")} were accessible questions from high-scoring areas, but you spent less than 20 seconds on them or ran out of time before reaching them.`,
      recommendation: "Adopt the 2-Round Test Taking Approach (Round 1: Rapid scan & solve sitters < 90s; Round 2: Revisit moderate multi-step questions)."
    });
  }

  if (timeAccuracyQuadrants.swiftAndAccurate.length >= 4) {
    diagnostics.push({
      type: "SUCCESS",
      title: `Core Strength: ${timeAccuracyQuadrants.swiftAndAccurate.length} Questions Executed at Elite Speed`,
      category: "Execution Edge",
      icon: "Award",
      description: `You solved questions ${timeAccuracyQuadrants.swiftAndAccurate.slice(0, 5).map(i => `Q${i.q.number}`).join(", ")} accurately well within ideal time benchmarks. This efficiency is what 99+ percentilers rely on.`,
      recommendation: "Protect this advantage by maintaining daily timed speed drills."
    });
  }

  return {
    diagnostics,
    timeAccuracyQuadrants,
    summaryStats: {
      avgTimeCorrect: correctCount > 0 ? Math.round(totalTimeOnCorrect / correctCount) : 0,
      avgTimeWrong: wrongCount > 0 ? Math.round(totalTimeOnWrong / wrongCount) : 0,
      avgTimeUnattempted: unattemptedCount > 0 ? Math.round(totalTimeOnUnattempted / unattemptedCount) : 0,
      totalTimeOnWrong,
      totalTimeOnCorrect,
      totalTimeOnUnattempted,
      correctCount,
      wrongCount,
      unattemptedCount
    }
  };
}
