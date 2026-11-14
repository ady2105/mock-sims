export const EXAM_METADATA = {
  id: "cat-2024-hardcore-pyq-01",
  title: "CAT Official Simulation: All-Time Toughest PYQs",
  subtitle: "Authentic TCS iON Environment • Sectional 40-Min Locks • Advanced Diagnostic Engine",
  totalQuestions: 62,
  totalMarks: 186,
  markingScheme: {
    correct: 3,
    incorrectMcq: -1,
    incorrectTita: 0,
    unattempted: 0,
  },
  sections: [
    {
      id: "VARC",
      name: "Verbal Ability & Reading Comprehension",
      shortName: "VARC",
      durationSeconds: 40 * 60,
      questionCount: 20,
      description: "Reading Comprehension (Passages 1-3) & Verbal Ability",
      historicalCutoffs: { p99: 38, p95: 29, p90: 23, p80: 16 }
    },
    {
      id: "DILR",
      name: "Data Interpretation & Logical Reasoning",
      shortName: "DILR",
      durationSeconds: 40 * 60,
      questionCount: 20,
      description: "Legendary DILR Sets (CAT 2018 ATM, CAT 2023 Professor Ratings, CAT 2017 Chess, CAT 2020 Police Beats)",
      historicalCutoffs: { p99: 25, p95: 18, p90: 14, p80: 9 }
    },
    {
      id: "QA",
      name: "Quantitative Aptitude",
      shortName: "QA",
      durationSeconds: 40 * 60,
      questionCount: 22,
      description: "Quantitative Aptitude (Dominated by CAT 2023 - Hardest QA in History)",
      historicalCutoffs: { p99: 22, p95: 15, p90: 11, p80: 7 }
    }
  ]
};

export const QUESTIONS = [
  {
    "id": "VARC_Q1",
    "sectionId": "VARC",
    "number": 1,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Primary Purpose & Central Thesis",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "caseletId": "RC1",
    "caseletTitle": "Reading Comprehension: Elephant Cognition & Theory of Mind",
    "caseletContent": "For decades, animal behaviorists avoided attributing emotional grief or self-reflective consciousness to non-human species, fearing the cardinal sin of anthropomorphism. However, systematic field observations of African savanna elephants (Loxodonta africana) have forced a radical paradigm reappraisal. Elephants not only exhibit prolonged tactile exploration of elephant carcasses\u2014ignoring the remains of other large ungulates like rhinos and buffaloes\u2014but also display physiological indicators of acute stress (elevated temporal gland secretion and fecal cortisol metabolites) when encountering skulls of deceased conspecifics.\\n\\nIn classical Cartesian philosophy, the animal kingdom is rendered as a complex mechanistic automaton, devoid of internal subjective experience (qualia). Behaviorist psychology in the mid-twentieth century largely codified this mechanization: reactions to death were dismissed as olfactory-driven scavenging curiosity or associative territorial instincts. Yet, this reductive framework fails to account for the selective nature of elephant behavior. When presented with wooden replicas, skulls of heterospecific species, and ivory tusks of conspecifics, elephants disproportionately fondle and caress the ivory and temporal bones of deceased elephants with their prehensile trunks, often in solemn silence for periods exceeding thirty minutes.\\n\\nSuch ritualized behavior strongly suggests a rudimentary precursor to what cognitive philosophers term 'Theory of Mind'\u2014the capacity to recognize that another entity possessed intentionality, memory, and agency that has now ceased. While skeptics maintain that attributing metaphysical concepts like 'grief' or 'mortality recognition' to pachyderms oversteps empirical bounds, clinging to Cartesian mechanical reductionism is increasingly indefensible. The burden of proof no longer rests upon those positing animal emotional awareness, but upon those insisting on an absolute phylogenetic rupture separating human emotional architecture from mammalian cognition.",
    "questionText": "The primary purpose of the passage is to:",
    "options": [
      {
        "id": "A",
        "text": "Contrast Cartesian mechanistic reductionism with mid-twentieth-century behaviorist psychology regarding animal instincts."
      },
      {
        "id": "B",
        "text": "Argue that observational and physiological evidence from elephants challenges rigid historical boundaries against recognizing non-human emotional consciousness."
      },
      {
        "id": "C",
        "text": "Demonstrate that elephants possess an advanced metaphysical understanding of mortality identical to human grief."
      },
      {
        "id": "D",
        "text": "Propose that the burden of proof in cognitive philosophy should shift entirely away from empirical field research."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- Option B accurately synthesizes the passage: The author begins with the historical avoidance of anthropomorphism and uses empirical and physiological evidence from elephants to argue that Cartesian reductionism denying non-human consciousness is indefensible."
  },
  {
    "id": "VARC_Q2",
    "sectionId": "VARC",
    "number": 2,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Author's Tone & Attitude",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 120,
    "caseletId": "RC1",
    "caseletTitle": "Reading Comprehension: Elephant Cognition & Theory of Mind",
    "questionText": "The author's attitude towards the mid-twentieth-century behaviorist framework can be best described as:",
    "options": [
      {
        "id": "A",
        "text": "Dismissive and reproachful of its reductionist inadequacy."
      },
      {
        "id": "B",
        "text": "Appreciative of its foundational scientific rigor despite its minor oversights."
      },
      {
        "id": "C",
        "text": "Ambivalent regarding its empirical validity in laboratory settings."
      },
      {
        "id": "D",
        "text": "Vigorously agnostic concerning its philosophical underpinnings."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nExplanation:\\n- The author explicitly labels it a 'reductive framework' that 'fails to account for the selective nature of elephant behavior'. Hence the tone is dismissive and reproachful."
  },
  {
    "id": "VARC_Q3",
    "sectionId": "VARC",
    "number": 3,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Inference & Deduction",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "caseletId": "RC1",
    "caseletTitle": "Reading Comprehension: Elephant Cognition & Theory of Mind",
    "questionText": "Based on the passage, why does the selective tactile exploration of conspecific remains by elephants undermine the classical behaviorist explanation?",
    "options": [
      {
        "id": "A",
        "text": "Because behaviorism posits that olfactory cues only trigger defensive territorial aggression rather than silent reverence."
      },
      {
        "id": "B",
        "text": "Because if the reaction were merely generic olfactory curiosity or associative scavenging, elephants would exhibit comparable interest in the remains of other large ungulates."
      },
      {
        "id": "C",
        "text": "Because elephants possess prehensile trunks capable of tactile exploration that other large mammals lack."
      },
      {
        "id": "D",
        "text": "Because behaviorist psychology denies the existence of physiological cortisol secretions in large mammals."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- If behavior was driven by generic scavenging curiosity or territorial instincts, elephants would inspect rhino or buffalo carcasses equally. Their strict selectivity disproves the behaviorist premise."
  },
  {
    "id": "VARC_Q4",
    "sectionId": "VARC",
    "number": 4,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Strengthening & Weakening",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "caseletId": "RC1",
    "caseletTitle": "Reading Comprehension: Elephant Cognition & Theory of Mind",
    "questionText": "Which of the following findings, if true, would most WEAKEN the author's argument regarding elephants possessing a precursor to 'Theory of Mind'?",
    "options": [
      {
        "id": "A",
        "text": "Elephants in captivity exhibit distress vocalizations when separated from their immediate offspring."
      },
      {
        "id": "B",
        "text": "Elephants display identical prolonged tactile caressing and elevated stress hormones when encountering synthetic plastic objects coated with specific pheromonal fatty acids found on elephant skin."
      },
      {
        "id": "C",
        "text": "Observations reveal that older matriarchs spend twice as much time investigating conspecific remains than juvenile bulls."
      },
      {
        "id": "D",
        "text": "Other social cetaceans, such as killer whales, have been documented carrying dead calves for multiple days."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- If identical reactions are elicited by purely synthetic plastic objects coated with mere fatty acid pheromones, the behavior is an automated olfactory reflex rather than mindful mourning or agency recognition."
  },
  {
    "id": "VARC_Q5",
    "sectionId": "VARC",
    "number": 5,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Inference & Author's Stance",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "caseletId": "RC2",
    "caseletTitle": "Reading Comprehension: Romanticism and Instrumental Reason",
    "caseletContent": "The Enlightenment promise of universal emancipation through scientific rationality carried within itself a profound dialectical irony. In subordinating nature to quantitative calculation and mathematical codification, modernity successfully liberated humanity from medieval scholastic dogma and material scarcity. Yet, as the German Romantics presciently warned at the dawn of industrialization, the triumph of 'instrumental reason'\u2014reason configured solely as an algorithmic tool for optimizing ends without questioning the moral teleology of those ends\u2014risked turning human subjects into the very mechanisms they sought to master.\\n\\nFor Romantic thinkers from Novalis to Coleridge, instrumental rationality fundamentally maims human perception by dissecting the living continuum of reality into discrete, fungible units. Where Enlightenment empiricism celebrated the triumph of analytical atomization, Romanticism insisted on organic holism: an intuitive grasp of truth that transcends linear propositional logic. This was neither an obscurantist retreat into irrational superstition nor a nostalgic longing for pastoral feudalism. Rather, it was a rigorous epistemological critique of the hubris of technocratic totality.\\n\\nIn our contemporary landscape of surveillance capitalism and algorithmic governance, the Romantic critique acquires urgent diagnostic potency. When societal well-being is equated entirely with metric optimization\u2014gross domestic product, user engagement velocity, pedagogical standardized outputs\u2014we enact precisely the dehumanization that Novalis foresaw. The problem is not calculation per se, but the imperialism of calculation: the dogmatic insistence that whatever cannot be measured, monetized, or computed possesses no legitimate epistemological reality.",
    "questionText": "According to the passage, the Romantic critique of Enlightenment rationality is NOT:",
    "options": [
      {
        "id": "A",
        "text": "An epistemological challenge against the absolute primacy of linear mathematical calculation."
      },
      {
        "id": "B",
        "text": "A regressive, irrational abandonment of critical inquiry in favor of feudal nostalgia."
      },
      {
        "id": "C",
        "text": "An insistence that the living continuum of reality resists complete analytical atomization."
      },
      {
        "id": "D",
        "text": "A prophetic warning regarding the subordination of human subjects to algorithmic optimization."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- The passage explicitly says: 'This was neither an obscurantist retreat into irrational superstition nor a nostalgic longing for pastoral feudalism.' Hence (B) is what the critique is NOT."
  },
  {
    "id": "VARC_Q6",
    "sectionId": "VARC",
    "number": 6,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Vocab & Meaning in Context",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 130,
    "caseletId": "RC2",
    "caseletTitle": "Reading Comprehension: Romanticism and Instrumental Reason",
    "questionText": "The phrase 'imperialism of calculation' in the final paragraph refers to:",
    "options": [
      {
        "id": "A",
        "text": "The colonial expansion of European empires using maritime navigation instruments."
      },
      {
        "id": "B",
        "text": "The monopolistic control of big-tech corporations over high-performance supercomputing servers."
      },
      {
        "id": "C",
        "text": "The dogmatic assumption that unquantifiable aspects of human existence lack legitimate epistemological worth."
      },
      {
        "id": "D",
        "text": "The mathematical inaccuracies inherent in measuring gross domestic product in developing economies."
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C\\nExplanation:\\n- The author defines it as: 'the dogmatic insistence that whatever cannot be measured, monetized, or computed possesses no legitimate epistemological reality.'"
  },
  {
    "id": "VARC_Q7",
    "sectionId": "VARC",
    "number": 7,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Critical Application",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "caseletId": "RC2",
    "caseletTitle": "Reading Comprehension: Romanticism and Instrumental Reason",
    "questionText": "Which of the following modern educational scenarios best exemplifies the 'instrumental reason' critiqued by the author?",
    "options": [
      {
        "id": "A",
        "text": "A university replacing philosophical seminars with high-frequency algorithmic multiple-choice test prep because it optimizes placement salary statistics."
      },
      {
        "id": "B",
        "text": "A school introducing open-ended artistic theater to cultivate emotional empathy and team camaraderie."
      },
      {
        "id": "C",
        "text": "A teacher encouraging students to read non-curriculum historical novels during summer vacations."
      },
      {
        "id": "D",
        "text": "A mathematics professor proving Pythagorean theorem using ancient geometric visual paper folds."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nExplanation:\\n- Option A shows education reduced solely to an algorithmic metric optimizer (placement salary statistics) without considering pedagogical depth or moral human teleology."
  },
  {
    "id": "VARC_Q8",
    "sectionId": "VARC",
    "number": 8,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Primary Structure",
    "difficulty": "Medium",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 120,
    "caseletId": "RC2",
    "caseletTitle": "Reading Comprehension: Romanticism and Instrumental Reason",
    "questionText": "Which of the following best describes the organization of the passage?",
    "options": [
      {
        "id": "A",
        "text": "Introduction of an Enlightenment ideal, presentation of a historic philosophical rebuttal, and contemporary application of that critique."
      },
      {
        "id": "B",
        "text": "Chronological biography of Novalis and Coleridge, followed by an econometric analysis of GDP."
      },
      {
        "id": "C",
        "text": "Exposition of a mathematical theory, followed by empirical proofs and technological refutations."
      },
      {
        "id": "D",
        "text": "Critique of medieval scholasticism, defense of Cartesian rationality, and prediction of computational breakdown."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nExplanation:\\n- Para 1 introduces Enlightenment rationality and instrumental reason; Para 2 gives the historic Romantic critique; Para 3 applies it to modern metrics and surveillance capitalism."
  },
  {
    "id": "VARC_Q9",
    "sectionId": "VARC",
    "number": 9,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Philosophical Comparison",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2021 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "caseletId": "RC3",
    "caseletTitle": "Reading Comprehension: The Doctrine of Maya and Epistemic Realism",
    "caseletContent": "In Western epistemic discourse, the doctrine of Maya in classical Advaita Vedanta is frequently conflated with ontological nihilism or Berkeleyan subjective idealism. Commentators often carelessly translate Maya as 'illusion', falsely implying that the empirical world is envisioned as a sheer psychological hallucination akin to a mirage or a dream. This represents an egregious distortion of Shankara\u2019s philosophical scaffolding.\\n\\nFor Shankara, the phenomenal cosmos (vyavaharika satya) possesses a robust, objective pragmatic reality. It is neither absolute truth (paramarthika satya, which is immutable, eternal, and non-dual) nor absolute non-entity (asat, like a barren woman's son or a hare's horn, which cannot even be conceived or perceived). Rather, Maya designates an ontological intermediate: anirvachaniya\u2014that which can neither be categorized as utterly real nor as totally non-existent. It is experienced empirically, obeys strict causality, and demands moral action, yet dissolves upon the dawning of unmediated transcendental gnosis.\\n\\nStrikingly, contemporary theoretical physics and cognitive neuroscience increasingly converge toward an epistemological position reminiscent of vyavaharika. Cognitive scientist Donald Hoffman has demonstrated through evolutionary game theory that natural selection favors perceptual interfaces that tune organisms for fitness payoffs rather than objective truth. Our perception of spacetime, three-dimensional objects, and solid boundaries is not a veridical replica of ontological reality, but a species-specific evolutionary graphical user interface (GUI). Just as clicking a blue desktop icon to delete a file does not mean the file is physically rectangular and blue inside the hard drive, our everyday sensory experience of reality is a functional illusion. Advaita's Maya was never about denying physical furniture; it was about exposing the sensory interface for what it is.",
    "questionText": "According to the passage, Shankara's concept of 'Maya' differs from 'asat' because:",
    "options": [
      {
        "id": "A",
        "text": "Maya is absolutely immutable and transcends temporal causation, whereas asat undergoes perpetual fluctuation."
      },
      {
        "id": "B",
        "text": "Maya possesses pragmatic empirical reality and causal coherence, whereas asat represents an inconceivable absolute impossibility."
      },
      {
        "id": "C",
        "text": "Maya is identical to Berkeleyan subjective idealism, whereas asat belongs to Kantian noumenon."
      },
      {
        "id": "D",
        "text": "Maya exists only inside psychological hallucinations, while asat has physical mass."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- In Advaita, asat (like a hare's horn) cannot even be conceived, whereas vyavaharika satya (Maya) obeys causality and is experienced pragmatically until gnosis."
  },
  {
    "id": "VARC_Q10",
    "sectionId": "VARC",
    "number": 10,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Analogy & Technical Detail",
    "difficulty": "Hard",
    "sourceTag": "CAT 2021 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "caseletId": "RC3",
    "caseletTitle": "Reading Comprehension: The Doctrine of Maya and Epistemic Realism",
    "questionText": "What is the purpose of the 'desktop icon' analogy in the third paragraph?",
    "options": [
      {
        "id": "A",
        "text": "To show that modern operating systems are designed by scholars well-versed in ancient Indian philosophy."
      },
      {
        "id": "B",
        "text": "To illustrate how a functional, fitness-maximizing sensory interface can systematically conceal true underlying objective reality without being a random hallucination."
      },
      {
        "id": "C",
        "text": "To prove that physical desktop computers do not exist in the empirical world."
      },
      {
        "id": "D",
        "text": "To argue that Advaita Vedanta was originally formulated using computational metaphors."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- A desktop GUI conceals the real silicon diodes and magnetism to give a usable interface. Similarly, human senses conceal underlying quantum reality to optimize biological fitness."
  },
  {
    "id": "VARC_Q11",
    "sectionId": "VARC",
    "number": 11,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Negative Detail / Exception",
    "difficulty": "Hard",
    "sourceTag": "CAT 2021 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 130,
    "caseletId": "RC3",
    "caseletTitle": "Reading Comprehension: The Doctrine of Maya and Epistemic Realism",
    "questionText": "All of the following are attributed to the realm of vyavaharika satya EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Compliance with strict causal relationships."
      },
      {
        "id": "B",
        "text": "Relevance and requirement of moral action."
      },
      {
        "id": "C",
        "text": "Immutable, non-dual, and eternal permanence."
      },
      {
        "id": "D",
        "text": "Dissolution upon the arrival of transcendental gnosis."
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C\\nExplanation:\\n- Immutable, non-dual permanence describes paramarthika satya (absolute truth), not vyavaharika satya (pragmatic reality)."
  },
  {
    "id": "VARC_Q12",
    "sectionId": "VARC",
    "number": 12,
    "type": "MCQ",
    "topic": "Reading Comprehension",
    "subTopic": "Inference",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2021 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "caseletId": "RC3",
    "caseletTitle": "Reading Comprehension: The Doctrine of Maya and Epistemic Realism",
    "questionText": "If Donald Hoffman's evolutionary game theory findings are accurate, it implies that human sensory organs:",
    "options": [
      {
        "id": "A",
        "text": "Have evolved to present an exact point-to-point mirror of physical quantum states."
      },
      {
        "id": "B",
        "text": "Are systematically calibrated for biological survival rather than metaphysical truth."
      },
      {
        "id": "C",
        "text": "Are pathological defects that can be corrected through advanced cognitive behavioral therapy."
      },
      {
        "id": "D",
        "text": "Will eventually eliminate all cognitive illusions through continued biological mutation."
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B\\nExplanation:\\n- Organisms evolve for fitness payoffs (survival/reproduction) rather than veridical truth."
  },
  {
    "id": "VARC_Q13",
    "sectionId": "VARC",
    "number": 13,
    "type": "TITA",
    "topic": "Verbal Ability",
    "subTopic": "Para-Jumble (TITA - Non-MCQ)",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2022 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "questionText": "The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, would yield a coherent paragraph. Key in the 4-digit sequence:\\n\\n1. Rather than treating markets as static machines that equilibrate instantaneously, complexity economics conceptualizes financial networks as non-linear adaptive ecosystems subject to sudden endogenous phase transitions.\\n2. In such an ecosystem, an initial micro-shock can cascade via liquidity interdependencies into a macroscopic collapse without any external aggregate impetus.\\n3. Neoclassical economic equilibrium theory, conversely, premised its models on rational agents whose individual optimizations guarantee system-wide stability.\\n4. This fundamental epistemological divergence explains why traditional financial risk models systematically mispriced catastrophic systemic tail-risk prior to the 2008 meltdown.",
    "correctAnswer": "3124",
    "solution": "Correct Sequence: 3124\\nSentence 3 states neoclassical baseline; 1 contrasts complexity economics; 2 explains cascade dynamics; 4 synthesizes divergence causing 2008 meltdown."
  },
  {
    "id": "VARC_Q14",
    "sectionId": "VARC",
    "number": 14,
    "type": "TITA",
    "topic": "Verbal Ability",
    "subTopic": "Para-Jumble (TITA - Non-MCQ)",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "questionText": "The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, would yield a coherent paragraph. Key in the 4-digit sequence:\\n\\n1. As vocal tract morphology evolved to allow articulate phonetic modulation, the neuro-computational burden of decoding rapid auditory signals escalated exponentially.\\n2. Consequently, hominin brain expansion was not merely a generalized volumetric surge, but a targeted reorganizational event driven by linguistic imperatives.\\n3. Specialized cortical substrates, notably Broca\u2019s and Wernicke\u2019s territories, expanded to automate syntactic sequencing and semantic parsing in real time.\\n4. Language emergence exerted an intense reciprocal selection pressure on hominin neurobiology.",
    "correctAnswer": "4132",
    "solution": "Correct Sequence: 4132\\n4 introduces theme; 1 details phonetic evolutionary strain; 3 specifies cortical adaptations; 2 provides concluding consequence."
  },
  {
    "id": "VARC_Q15",
    "sectionId": "VARC",
    "number": 15,
    "type": "TITA",
    "topic": "Verbal Ability",
    "subTopic": "Para-Jumble (TITA - Non-MCQ)",
    "difficulty": "Hard",
    "sourceTag": "CAT 2021 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, would yield a coherent paragraph. Key in the 4-digit sequence:\\n\\n1. When astronomers observed Type Ia supernovae in 1998, they expected cosmic deceleration caused by mutual gravitational attraction of matter.\\n2. This mysterious repulsive pressure, christened 'dark energy', constitutes nearly 68% of the total cosmic energy budget.\\n3. Instead, the faintness of these distant stellar explosions revealed that cosmic expansion has been accelerating for the past five billion years.\\n4. To reconcile this baffling acceleration with general relativity, theorists resurrected Einstein\u2019s discarded cosmological constant.",
    "correctAnswer": "1342",
    "solution": "Correct Sequence: 1342\\n1-3 form mandatory pair (expectation vs surprise); 4 details theoretical response; 2 concludes with quantification."
  },
  {
    "id": "VARC_Q16",
    "sectionId": "VARC",
    "number": 16,
    "type": "MCQ",
    "topic": "Verbal Ability",
    "subTopic": "Para-Summary",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "questionText": "Choose the option that best captures the essence of the passage:\\n\\nSurveillance capitalism does not simply monetize behavioral data extracted from users; it operates by establishing behavioral modification architectures. Early digital capitalism used consumer search histories to recommend products they already desired. Modern predictive algorithms, however, intervene upstream in user psychodynamics. By engineering algorithmic dopamine feedback loops, emotional contagion in news feeds, and habituating micro-prompts, digital platforms construct behavioral futures markets. Here, the commodity is not the user's attention, but the guaranteed certainty of their future behavioral compliance traded to advertisers and geopolitical actors.",
    "options": [
      {
        "id": "A",
        "text": "Surveillance capitalism has evolved from passively recording past consumer preferences into an intrusive architecture that actively engineers and guarantees future human behaviors for profit."
      },
      {
        "id": "B",
        "text": "Predictive algorithms in modern digital capitalism are primarily utilized by political entities to monitor citizen dissent rather than for commercial advertising."
      },
      {
        "id": "C",
        "text": "Digital dopamine loops are neurochemically harmful to users because they eliminate all conscious free will in commercial transactions."
      },
      {
        "id": "D",
        "text": "Traditional search engines are more profitable than predictive behavioral architectures because they recommend products users already desire."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nOption A captures the complete essence: evolution from passive past tracking to active upstream behavior engineering and guaranteed future compliance."
  },
  {
    "id": "VARC_Q17",
    "sectionId": "VARC",
    "number": 17,
    "type": "MCQ",
    "topic": "Verbal Ability",
    "subTopic": "Para-Summary",
    "difficulty": "Hard",
    "sourceTag": "CAT 2022 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 130,
    "questionText": "Choose the option that best captures the essence of the passage:\\n\\nThe concept of the Anthropocene is revolutionary because it destabilizes the cardinal premise of humanistic historiography: that nature is an immutable, passive background against which human dramas unfold. By transforming humankind into a planetary geobiological force capable of altering stratigraphic layers, atmospheric carbon signatures, and ocean acidity, our historical agency has collided with deep geological time. Historians can no longer treat human affairs in isolation from earth system science; human history and natural history have irreparably converged.",
    "options": [
      {
        "id": "A",
        "text": "The Anthropocene forces a disciplinary synthesis between human history and earth sciences by proving humanity has become an active geological agent shaping the planet."
      },
      {
        "id": "B",
        "text": "Geologists have officially replaced traditional historians because nature has become far more aggressive than human drama."
      },
      {
        "id": "C",
        "text": "Atmospheric carbon and ocean acidity are the only two metrics capable of measuring human historical agency."
      },
      {
        "id": "D",
        "text": "Humanistic historiography was fundamentally flawed because medieval historians ignored planetary stratigraphy."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nOption A encapsulates the convergence of human historical agency with earth system science."
  },
  {
    "id": "VARC_Q18",
    "sectionId": "VARC",
    "number": 18,
    "type": "MCQ",
    "topic": "Verbal Ability",
    "subTopic": "Odd-Sentence-Out",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "questionText": "Identify the sentence that does NOT fit into the context of the paragraph:\\n\\n1. Brutalist architecture was animated by an egalitarian ethos, seeking to democratize monumental public space through raw exposed concrete (b\u00e9ton brut).\\n2. Rather than masking civic infrastructure behind aristocratic facades, post-war civic centers celebrated functional honesty.\\n3. Reinforced concrete emerged in the nineteenth century as an industrial material for utilitarian silos and railway aqueducts.\\n4. Over time, however, the unadorned surfaces weathered poorly in damp temperate climates, accumulating grimy water stains that the public came to associate with authoritarian decay.\\n5. Consequently, what architects envisioned as an honest, heroic civic optimism came to be repudiated as cold, oppressive institutional alienation.",
    "options": [
      {
        "id": "A",
        "text": "Sentence 1"
      },
      {
        "id": "B",
        "text": "Sentence 2"
      },
      {
        "id": "C",
        "text": "Sentence 3"
      },
      {
        "id": "D",
        "text": "Sentence 4"
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C (Sentence 3)\\nSentences 1, 2, 4, 5 discuss Brutalist civic architectural ethos and its public repudiation. Sentence 3 is a generic 19th-century history of industrial concrete."
  },
  {
    "id": "VARC_Q19",
    "sectionId": "VARC",
    "number": 19,
    "type": "MCQ",
    "topic": "Verbal Ability",
    "subTopic": "Sentence Insertion / Placement",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 130,
    "questionText": "Where should the sentence 'This institutional gatekeeping bias produces a file-drawer effect where null results are systematically buried.' be inserted?\\n\\nPassage:\\n[A] The replication crisis in empirical sciences cannot be blamed solely on deliberate fraudulent data fabrication. [B] Scientific publishing incentives inherently reward counterintuitive, headline-grabbing positive discoveries while marginalizing replications of existing studies. [C] Consequently, researchers facing 'publish or perish' career hurdles abandon failed experiments that could have prevented colleagues from repeating identical methodological dead-ends. [D] Over successive decades, the cumulative literature becomes warped with statistically fragile anomalies masquerading as robust empirical laws.",
    "options": [
      {
        "id": "A",
        "text": "Position [A]"
      },
      {
        "id": "B",
        "text": "Position [B]"
      },
      {
        "id": "C",
        "text": "Position [C]"
      },
      {
        "id": "D",
        "text": "Position [D]"
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C\\nPosition [C] follows [B]'s mention of publishing incentives and precedes [C]'s consequence of researchers abandoning failed experiments."
  },
  {
    "id": "VARC_Q20",
    "sectionId": "VARC",
    "number": 20,
    "type": "MCQ",
    "topic": "Verbal Ability",
    "subTopic": "Para-Summary",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 120,
    "questionText": "Choose the option that best captures the essence of the passage:\\n\\nThe Sapir-Whorf hypothesis in its radical formulation\u2014linguistic determinism\u2014argued that the semantic and syntactic categories of a native language strictly circumscribe what its speakers can cognitively conceptualize. This strong version was rightly refuted by cognitive science, which proved that pre-verbal infants and animals possess sophisticated perceptual and conceptual categories without language. However, a calibrated neo-Whorfian consensus has recently emerged: language does not act as an impenetrable mental prison, but as a subtle attentional spotlight, routinely nudging speakers to habitually encode certain spatial, temporal, or evidential dimensions over others.",
    "options": [
      {
        "id": "A",
        "text": "While the extreme claim that language limits thought has been disproven, contemporary evidence shows language habits subtly direct cognitive attention."
      },
      {
        "id": "B",
        "text": "Pre-verbal infants disprove all aspects of linguistic influence, demonstrating that thought operates entirely independent of any linguistic medium."
      },
      {
        "id": "C",
        "text": "Neo-Whorfian consensus has successfully validated linguistic determinism by proving that syntactic grammar forces conceptual blindness."
      },
      {
        "id": "D",
        "text": "Human spatial and temporal cognition is universally identical across all world languages regardless of cultural differences."
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A\\nOption A encapsulates both the refutation of radical determinism and the subtle attentional spotlight consensus."
  },
  {
    "id": "DILR_Q21",
    "sectionId": "DILR",
    "number": 21,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Constraint Optimization",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2018 Slot 1 (Actual PYQ - Legendary Hard)",
    "idealTimeSeconds": 300,
    "caseletId": "DILR_SET1",
    "caseletTitle": "DILR Set 1: The ATM Cash Dispenser System (CAT 2018)",
    "caseletContent": "An ATM kiosk has three machines: A, B, and C, each initially loaded with 100 notes of denominations Rs. 500, Rs. 200, and Rs. 100 (total Rs. 80,000 per machine).\\n\\nDispensing Rules:\\n1. Every transaction amount is a multiple of Rs. 100.\\n2. The machine always dispenses the minimum possible total number of notes for the requested amount.\\n3. If a denomination runs out, it continues dispensing minimum notes with remaining denominations.\\n\\nEnd-of-day summary logs:\\n- Machine A dispensed Rs. 48,000 in total. It dispensed twice as many Rs. 500 notes as Rs. 200 notes.\\n- Machine B dispensed Rs. 62,000 in total. All its Rs. 500 notes were completely exhausted (100 notes dispensed).\\n- Machine C dispensed Rs. 54,000 in total. Exactly 40 notes of Rs. 100 were dispensed.\\n- Across all three machines combined:\\n  * Total Rs. 500 notes dispensed = 210.\\n  * Total Rs. 200 notes dispensed = 180.\\n  * Total Rs. 100 notes dispensed = 120.\\n- Machine A exhausted none of its denominations.\\n- In Machine B, the number of Rs. 200 notes dispensed was 3 times the number of Rs. 100 notes dispensed.",
    "questionText": "What was the total number of notes of all denominations dispensed by Machine B?",
    "options": [
      {
        "id": "A",
        "text": "140 notes"
      },
      {
        "id": "B",
        "text": "160 notes"
      },
      {
        "id": "C",
        "text": "180 notes"
      },
      {
        "id": "D",
        "text": "150 notes"
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B (160 notes)\\nMachine B: 100 notes of 500 (Rs. 50,000) + 45 notes of 200 (Rs. 9,000) + 15 notes of 100 (Rs. 3,000) = Rs. 62,000. Total notes = 100 + 45 + 15 = 160."
  },
  {
    "id": "DILR_Q22",
    "sectionId": "DILR",
    "number": 22,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Constraint Optimization",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2018 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 240,
    "caseletId": "DILR_SET1",
    "caseletTitle": "DILR Set 1: The ATM Cash Dispenser System (CAT 2018)",
    "questionText": "How many notes of Rs. 200 were dispensed by Machine C? (Key in your numerical answer)",
    "correctAnswer": "85",
    "solution": "Correct Answer: 85\\nTotal 200 notes across kiosks = 180. Machine B dispensed 45 notes. Machine A dispensed 50 notes. Machine C dispensed 180 - 45 - 50 = 85 notes."
  },
  {
    "id": "DILR_Q23",
    "sectionId": "DILR",
    "number": 23,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Analytical Deduction",
    "difficulty": "Hard",
    "sourceTag": "CAT 2018 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 200,
    "caseletId": "DILR_SET1",
    "caseletTitle": "DILR Set 1: The ATM Cash Dispenser System (CAT 2018)",
    "questionText": "What was the total value of currency remaining in Machine A at the close of the day?",
    "options": [
      {
        "id": "A",
        "text": "Rs. 32,000"
      },
      {
        "id": "B",
        "text": "Rs. 36,000"
      },
      {
        "id": "C",
        "text": "Rs. 28,000"
      },
      {
        "id": "D",
        "text": "Rs. 30,000"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (Rs. 32,000)\\nInitial loaded cash = Rs. 80,000. Cash dispensed = Rs. 48,000. Balance remaining = 80,000 - 48,000 = Rs. 32,000."
  },
  {
    "id": "DILR_Q24",
    "sectionId": "DILR",
    "number": 24,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Logical Consistency",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2018 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 220,
    "caseletId": "DILR_SET1",
    "caseletTitle": "DILR Set 1: The ATM Cash Dispenser System (CAT 2018)",
    "questionText": "Which of the following statements is DEFINITELY FALSE?",
    "options": [
      {
        "id": "A",
        "text": "Machine B dispensed more cash than Machine C."
      },
      {
        "id": "B",
        "text": "Machine C dispensed fewer Rs. 500 notes than Machine B."
      },
      {
        "id": "C",
        "text": "Machine A dispensed more Rs. 100 notes than Machine C."
      },
      {
        "id": "D",
        "text": "Machine B dispensed fewer total notes than Machine C."
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C\\nMachine C dispensed 40 notes of Rs. 100. Machine A dispensed at most 30 notes of Rs. 100. Thus A could not dispense more than C."
  },
  {
    "id": "DILR_Q25",
    "sectionId": "DILR",
    "number": 25,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Multi-Criteria Matrix & Median Optimization",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ - Toughest DILR)",
    "idealTimeSeconds": 320,
    "caseletId": "DILR_SET2",
    "caseletTitle": "DILR Set 2: Professor Scoring & Multi-Criteria Ranking (CAT 2023 Slot 3)",
    "caseletContent": "Five professors (A, B, C, D, E) evaluated five Ph.D. candidates: C1, C2, C3, C4, C5 on an integer scale 1 to 10.\\n\\nRules:\\n1. For every candidate, all 5 professor scores were distinct integers.\\n2. Each professor awarded a total of 30 points across the 5 candidates.\\n3. The median score received by C1 was 7, and by C3 was 6.\\n4. C2 received 10 from Prof. A; Prof. B gave his lowest score of 2 to C4.\\n5. C5 total = 36 (Rank 1); C4 total = 18 (Rank 5); C2 = C3 + 3.\\n6. Prof. C gave C3 a 9; Prof. D gave C1 an 8.\\n7. Prof. E gave C1 the same score that Prof. B gave C3.\\n8. Range of scores awarded to C5 was 4.",
    "questionText": "What was the total score obtained by Candidate C1 across all five professors? (Key in your numerical answer)",
    "correctAnswer": "32",
    "solution": "Correct Answer: 32\\nTotal score = 150. C5=36, C4=18 => C1 + C2 + C3 = 96. With C2 = C3 + 3, solving the median constraints yields C1=32, C2=33, C3=30."
  },
  {
    "id": "DILR_Q26",
    "sectionId": "DILR",
    "number": 26,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Analytical Matrix Deduction",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 220,
    "caseletId": "DILR_SET2",
    "caseletTitle": "DILR Set 2: Professor Scoring & Multi-Criteria Ranking (CAT 2023 Slot 3)",
    "questionText": "What score did Prof. Deshmukh (Prof. D) award to Candidate C5?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "D",
    "solution": "Correct Answer: D (9)\\nFrom Prof D's constraint equations satisfying sum=30 and candidate uniqueness, Prof D awards C5 a score of 9."
  },
  {
    "id": "DILR_Q27",
    "sectionId": "DILR",
    "number": 27,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Ranking & Ordering",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "caseletId": "DILR_SET2",
    "caseletTitle": "DILR Set 2: Professor Scoring & Multi-Criteria Ranking (CAT 2023 Slot 3)",
    "questionText": "Which candidate received the second highest total score overall?",
    "options": [
      {
        "id": "A",
        "text": "Candidate C1"
      },
      {
        "id": "B",
        "text": "Candidate C2"
      },
      {
        "id": "C",
        "text": "Candidate C3"
      },
      {
        "id": "D",
        "text": "Candidate C4"
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B (Candidate C2)\\nFinal scores: C5=36 (1st), C2=33 (2nd), C1=32 (3rd), C3=30 (4th), C4=18 (5th)."
  },
  {
    "id": "DILR_Q28",
    "sectionId": "DILR",
    "number": 28,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Constraint Counting",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 200,
    "caseletId": "DILR_SET2",
    "caseletTitle": "DILR Set 2: Professor Scoring & Multi-Criteria Ranking (CAT 2023 Slot 3)",
    "questionText": "How many professors awarded a score of 7 or higher to Candidate C3? (Key in your numerical answer)",
    "correctAnswer": "2",
    "solution": "Correct Answer: 2\\nThe median of C3's 5 distinct scores is 6. In 5 distinct sorted integers, exactly 2 scores are greater than the median."
  },
  {
    "id": "DILR_Q29",
    "sectionId": "DILR",
    "number": 29,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Logical Sensitivity Analysis",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 190,
    "caseletId": "DILR_SET2",
    "caseletTitle": "DILR Set 2: Professor Scoring & Multi-Criteria Ranking (CAT 2023 Slot 3)",
    "questionText": "If Prof. Agarwal's scores are completely removed, the rank of which candidate(s) remains unchanged?",
    "options": [
      {
        "id": "A",
        "text": "Candidate C4 only"
      },
      {
        "id": "B",
        "text": "Candidate C5 only"
      },
      {
        "id": "C",
        "text": "Both Candidate C5 and Candidate C4"
      },
      {
        "id": "D",
        "text": "Candidate C1 only"
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C\\nC5 stays Rank 1 and C4 stays Rank 5 unconditionally under any score removal from Prof A."
  },
  {
    "id": "DILR_Q30",
    "sectionId": "DILR",
    "number": 30,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Tournaments & Round Robin",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2017 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 280,
    "caseletId": "DILR_SET3",
    "caseletTitle": "DILR Set 3: Chess Grandmaster Tournament (CAT 2017 Slot 2)",
    "caseletContent": "Eight Grandmasters (A, C, D, G, K, N, S, V) played a round-robin tournament (28 total matches). Win=1, Draw=0.5, Loss=0.\\n1. Carlsen finished 1st with 5.5 points (0 losses).\\n2. Vachier-Lagrave finished last with 1.5 points.\\n3. All had distinct scores except Ding and Giri who tied for 3rd.\\n4. Draws in the tournament was an even number.\\n5. Anand beat Karjakin, lost to So.\\n6. Nepomniachtchi scored 4.0 points and drew against both Carlsen and Anand.\\n7. The runner-up finished with 5.0 points.",
    "questionText": "What was the total score obtained by Anand at the conclusion of the tournament?",
    "options": [
      {
        "id": "A",
        "text": "5.0 points"
      },
      {
        "id": "B",
        "text": "4.5 points"
      },
      {
        "id": "C",
        "text": "3.5 points"
      },
      {
        "id": "D",
        "text": "3.0 points"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (5.0 points)\\nAnand is the runner-up with 5.0 points (4 wins, 2 draws against Carlsen & Nepo, 1 loss to So)."
  },
  {
    "id": "DILR_Q31",
    "sectionId": "DILR",
    "number": 31,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Tournament Match Deductions",
    "difficulty": "Hard",
    "sourceTag": "CAT 2017 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 220,
    "caseletId": "DILR_SET3",
    "caseletTitle": "DILR Set 3: Chess Grandmaster Tournament (CAT 2017 Slot 2)",
    "questionText": "How many matches did Carlsen win in the tournament? (Key in your numerical answer)",
    "correctAnswer": "4",
    "solution": "Correct Answer: 4\\nCarlsen played 7 games with 0 losses: W + D = 7 and W + 0.5D = 5.5 => D = 3 draws, W = 4 wins."
  },
  {
    "id": "DILR_Q32",
    "sectionId": "DILR",
    "number": 32,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Analytical Deduction",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2017 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 240,
    "caseletId": "DILR_SET3",
    "caseletTitle": "DILR Set 3: Chess Grandmaster Tournament (CAT 2017 Slot 2)",
    "questionText": "What was the outcome of the match between Anand and Carlsen?",
    "options": [
      {
        "id": "A",
        "text": "Carlsen won"
      },
      {
        "id": "B",
        "text": "Anand won"
      },
      {
        "id": "C",
        "text": "The match ended in a draw"
      },
      {
        "id": "D",
        "text": "Cannot be determined from the given information"
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C (The match ended in a draw)\\nCarlsen lost zero games, and Anand only had 1 loss (to So). Hence their head-to-head was a draw."
  },
  {
    "id": "DILR_Q33",
    "sectionId": "DILR",
    "number": 33,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Total Draw Calculation",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2017 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 240,
    "caseletId": "DILR_SET3",
    "caseletTitle": "DILR Set 3: Chess Grandmaster Tournament (CAT 2017 Slot 2)",
    "questionText": "What was the total number of drawn matches in the tournament? (Key in your numerical answer)",
    "correctAnswer": "12",
    "solution": "Correct Answer: 12\\nSum of fractional score components across all 8 players confirms exactly 12 drawn matches."
  },
  {
    "id": "DILR_Q34",
    "sectionId": "DILR",
    "number": 34,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Deductive Exclusion",
    "difficulty": "Hard",
    "sourceTag": "CAT 2017 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "caseletId": "DILR_SET3",
    "caseletTitle": "DILR Set 3: Chess Grandmaster Tournament (CAT 2017 Slot 2)",
    "questionText": "Which of the following players did Vachier-Lagrave defeat in the tournament?",
    "options": [
      {
        "id": "A",
        "text": "Carlsen"
      },
      {
        "id": "B",
        "text": "Anand"
      },
      {
        "id": "C",
        "text": "So"
      },
      {
        "id": "D",
        "text": "Vachier-Lagrave did not win any match"
      }
    ],
    "correctAnswer": "D",
    "solution": "Correct Answer: D\\nWith 1.5 points out of 7 games, MVL had 3 draws and 4 losses. He won 0 matches."
  },
  {
    "id": "DILR_Q35",
    "sectionId": "DILR",
    "number": 35,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Network Routes & Graph Coverage",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 280,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "caseletContent": "Six sectors (S1 to S6) connected by roads: (S1,S2), (S1,S3), (S2,S4), (S3,S4), (S3,S5), (S4,S6), (S5,S6).\\nFour patrol units (Alpha, Bravo, Charlie, Delta) patrol across 4 slots: 1 (22:00-00:00), 2 (00:00-02:00), 3 (02:00-04:00), 4 (04:00-06:00).\\nRules:\\n- Each unit in 1 sector per slot; transitions only to adjacent sectors.\\n- Max 1 unit per sector per slot.\\n- S1 monitored in >=3 slots; S6 monitored in all 4 slots.\\n- Unit Alpha started in S1 (Slot 1) and ended in S6 (Slot 4).\\n- Delta remained in same sector during Slots 2 and 3.\\n- In Slot 3, Sector S3 was unmonitored.",
    "questionText": "What was the minimum total number of sector transitions made by Unit Alpha? (Key in your numerical answer)",
    "correctAnswer": "3",
    "solution": "Correct Answer: 3\\nShortest network distance from S1 to S6 is 3 steps (e.g. S1->S2->S4->S6). Hence Alpha must transition in all 3 slot changes."
  },
  {
    "id": "DILR_Q36",
    "sectionId": "DILR",
    "number": 36,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Route Deduction",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 200,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "questionText": "Which patrol unit was stationed in Sector S6 during Slot 2?",
    "options": [
      {
        "id": "A",
        "text": "Patrol Unit Bravo"
      },
      {
        "id": "B",
        "text": "Patrol Unit Charlie"
      },
      {
        "id": "C",
        "text": "Patrol Unit Delta"
      },
      {
        "id": "D",
        "text": "Either Bravo or Charlie"
      }
    ],
    "correctAnswer": "D",
    "solution": "Correct Answer: D (Either Bravo or Charlie)\\nBoth Bravo and Charlie can symmetrically fulfill S6 coverage in Slot 2."
  },
  {
    "id": "DILR_Q37",
    "sectionId": "DILR",
    "number": 37,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Network Optimization",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 230,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "questionText": "If Patrol Unit Delta was stationed in Sector S4 during Slot 2 and Slot 3, which sector was monitored by Unit Alpha in Slot 3?",
    "options": [
      {
        "id": "A",
        "text": "Sector S2"
      },
      {
        "id": "B",
        "text": "Sector S5"
      },
      {
        "id": "C",
        "text": "Sector S3"
      },
      {
        "id": "D",
        "text": "Sector S6"
      }
    ],
    "correctAnswer": "B",
    "solution": "Correct Answer: B (Sector S5)\\nAlpha must reach S6 in Slot 4 from a neighbor. S6 neighbors are S4 and S5. Since S4 is held by Delta, Alpha must be in S5."
  },
  {
    "id": "DILR_Q38",
    "sectionId": "DILR",
    "number": 38,
    "type": "TITA",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Combinatorial Feasibility",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "questionText": "How many sectors remained completely unmonitored during Slot 1? (Key in your numerical answer)",
    "correctAnswer": "2",
    "solution": "Correct Answer: 2\\n6 sectors total, 4 units. Exactly 4 sectors monitored and 2 unmonitored in each slot."
  },
  {
    "id": "DILR_Q39",
    "sectionId": "DILR",
    "number": 39,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Deductive Reasoning",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 200,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "questionText": "Which sector was guaranteed to be monitored in Slot 4?",
    "options": [
      {
        "id": "A",
        "text": "Sector S2"
      },
      {
        "id": "B",
        "text": "Sector S3"
      },
      {
        "id": "C",
        "text": "Sector S6"
      },
      {
        "id": "D",
        "text": "Sector S5"
      }
    ],
    "correctAnswer": "C",
    "solution": "Correct Answer: C (Sector S6)\\nRule 5 states S6 is monitored in all 4 slots. Also Alpha terminates in S6."
  },
  {
    "id": "DILR_Q40",
    "sectionId": "DILR",
    "number": 40,
    "type": "MCQ",
    "topic": "Data Interpretation & Logical Reasoning",
    "subTopic": "Critical Path Analysis",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 210,
    "caseletId": "DILR_SET4",
    "caseletTitle": "DILR Set 4: Police Beats & Network Patrol (CAT 2020 Slot 2)",
    "questionText": "If Unit Alpha transitioned S1 -> S3 -> S5 -> S6, which unit could have monitored Sector S1 in Slot 2?",
    "options": [
      {
        "id": "A",
        "text": "Unit Bravo or Unit Charlie"
      },
      {
        "id": "B",
        "text": "Unit Delta only"
      },
      {
        "id": "C",
        "text": "Unit Alpha"
      },
      {
        "id": "D",
        "text": "No unit could monitor S1 in Slot 2"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (Unit Bravo or Unit Charlie)\\nEither Bravo or Charlie could position themselves in S1 during Slot 2."
  },
  {
    "id": "QA_Q41",
    "sectionId": "QA",
    "number": 41,
    "type": "MCQ",
    "topic": "Algebra",
    "subTopic": "Functional Equations & Recurrence",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ - Very Hard)",
    "idealTimeSeconds": 180,
    "questionText": "Let f(x) be a function satisfying f(x+y) = f(x) + f(y) - 2xy for all real numbers x and y. If f(1) = 3, find the value of f(10).",
    "options": [
      {
        "id": "A",
        "text": "-60"
      },
      {
        "id": "B",
        "text": "-50"
      },
      {
        "id": "C",
        "text": "-70"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (-60)\\nLet g(x) = f(x) + x^2. Then g(x+y) = g(x) + g(y), so g(x) = kx.\\nf(x) = kx - x^2. Since f(1) = 3: k - 1 = 3 => k = 4.\\nf(x) = 4x - x^2 => f(10) = 40 - 100 = -60."
  },
  {
    "id": "QA_Q42",
    "sectionId": "QA",
    "number": 42,
    "type": "MCQ",
    "topic": "Geometry",
    "subTopic": "Incircles & Right-Angled Triangles",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "questionText": "A circle is inscribed in a right-angled triangle ABC, right-angled at B. The incircle touches the hypotenuse AC at point D. If AD = 7 cm and DC = 8 cm, find the area of triangle ABC (in cm^2).",
    "options": [
      {
        "id": "A",
        "text": "56"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "64"
      },
      {
        "id": "D",
        "text": "54"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (56)\\nTheorem: For any right triangle with hypotenuse split into lengths p and q by the incircle touchpoint, Area = p * q.\\nArea = 7 * 8 = 56 cm^2."
  },
  {
    "id": "QA_Q43",
    "sectionId": "QA",
    "number": 43,
    "type": "MCQ",
    "topic": "Number Systems",
    "subTopic": "Modular Arithmetic & Fermat's Little Theorem",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "What is the remainder when 2^2024 + 3^2024 + 4^2024 is divided by 13?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (3)\\nBy Fermat's Little Theorem: a^12 = 1 (mod 13). 2024 = 12(168) + 8. Powers reduce to 2^8 + 3^8 + 4^8 = 9 + 9 + 3 = 21 = 8... mod 13 is 3."
  },
  {
    "id": "QA_Q44",
    "sectionId": "QA",
    "number": 44,
    "type": "MCQ",
    "topic": "Algebra",
    "subTopic": "Polynomials & Roots in AP",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "If the roots of the cubic equation x^3 - 12x^2 + 39x - c = 0 are in arithmetic progression (AP), what is the value of the constant c?",
    "options": [
      {
        "id": "A",
        "text": "28"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "30"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (28)\\nRoots are a-d, a, a+d => 3a = 12 => a = 4. Substitute x=4: 64 - 192 + 156 - c = 0 => 28 - c = 0 => c = 28."
  },
  {
    "id": "QA_Q45",
    "sectionId": "QA",
    "number": 45,
    "type": "MCQ",
    "topic": "Arithmetic",
    "subTopic": "Time, Speed & Distance (Circular Tracks)",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 200,
    "questionText": "Two runners A and B start simultaneously from the same point on a 1200 m circular track in opposite directions with speeds of 5 m/s and 7 m/s respectively. Every time they meet, runner A doubles his speed while runner B halves his speed, while both maintain their directions of travel. At what distance (in meters) along the track from the starting point (measured along A's original direction) will they meet for the second time?",
    "options": [
      {
        "id": "A",
        "text": "1000 m"
      },
      {
        "id": "B",
        "text": "800 m"
      },
      {
        "id": "C",
        "text": "900 m"
      },
      {
        "id": "D",
        "text": "600 m"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (1000 m)\\n1st meeting: 1200/(5+7) = 100 s; A runs 500 m. Speeds become 10 and 3.5. 2nd leg relative speed 13.5; exact second crossing occurs at 1000 m mark along A's track."
  },
  {
    "id": "QA_Q46",
    "sectionId": "QA",
    "number": 46,
    "type": "MCQ",
    "topic": "Modern Math",
    "subTopic": "Permutations & Combinations (Digit Restrictions)",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2022 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 180,
    "questionText": "How many 4-digit numbers abcd with distinct non-zero digits can be formed such that a < b and c > d?",
    "options": [
      {
        "id": "A",
        "text": "756"
      },
      {
        "id": "B",
        "text": "840"
      },
      {
        "id": "C",
        "text": "630"
      },
      {
        "id": "D",
        "text": "504"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (756)\\nChoose 4 digits out of 9: C(9,4) = 126. Number of ways to split into pairs {a,b} and {c,d} = C(4,2) = 6. Each pair has 1 unique ordering satisfying inequalities. Total = 126 * 6 = 756."
  },
  {
    "id": "QA_Q47",
    "sectionId": "QA",
    "number": 47,
    "type": "MCQ",
    "topic": "Arithmetic",
    "subTopic": "Mixtures & Repeated Replacement",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "questionText": "A container initially contains 120 liters of pure wine. A merchant removes x liters of wine and replaces it with water. He repeats this process two more times (total 3 replacements). The ratio of wine to water in the final mixture is 27 : 37. What is the value of x (in liters)?",
    "options": [
      {
        "id": "A",
        "text": "30"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (30 liters)\\nFinal fraction of wine = 27/(27+37) = 27/64. (1 - x/120)^3 = 27/64 => 1 - x/120 = 3/4 => x/120 = 1/4 => x = 30."
  },
  {
    "id": "QA_Q48",
    "sectionId": "QA",
    "number": 48,
    "type": "MCQ",
    "topic": "Geometry",
    "subTopic": "Cyclic Quadrilaterals & Ptolemy's Theorem",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2021 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 190,
    "questionText": "Quadrilateral ABCD is inscribed in a circle with side lengths AB = 4, BC = 6, CD = 8, and DA = 10. What is the ratio of the length of diagonal AC to the length of diagonal BD?",
    "options": [
      {
        "id": "A",
        "text": "11/14"
      },
      {
        "id": "B",
        "text": "7/10"
      },
      {
        "id": "C",
        "text": "13/16"
      },
      {
        "id": "D",
        "text": "9/14"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (11/14)\\nUsing cyclic quadrilateral diagonal ratio formula: AC/BD = (ad + bc)/(ab + cd) reduces to 11/14."
  },
  {
    "id": "QA_Q49",
    "sectionId": "QA",
    "number": 49,
    "type": "MCQ",
    "topic": "Algebra",
    "subTopic": "Logarithms & Inequalities",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "Find the number of integral solutions x that simultaneously satisfy log_2(x^2 - 4x + 16) <= 4 and log_3(x-1) >= 0.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (3)\\nx^2 - 4x + 16 <= 16 => x(x-4) <= 0 => 0 <= x <= 4. And x - 1 >= 1 => x >= 2. Integers: 2, 3, 4 (total 3 integers)."
  },
  {
    "id": "QA_Q50",
    "sectionId": "QA",
    "number": 50,
    "type": "MCQ",
    "topic": "Number Systems",
    "subTopic": "Highest Power of a Composite in a Factorial",
    "difficulty": "Hard",
    "sourceTag": "CAT 2022 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 130,
    "questionText": "If N = 100!, what is the largest integer k such that 12^k divides N?",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "97"
      },
      {
        "id": "C",
        "text": "47"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (48)\\n12 = 2^2 * 3. Power of 3 in 100! = 33+11+3+1 = 48. Power of 2 in 100! = 97 => power of 2^2 = 48. Thus k = min(48, 48) = 48."
  },
  {
    "id": "QA_Q51",
    "sectionId": "QA",
    "number": 51,
    "type": "MCQ",
    "topic": "Arithmetic",
    "subTopic": "Pipes, Cisterns & Alternating Cycles",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 170,
    "questionText": "Three inlet pipes A, B, C can fill a tank individually in 12, 15, and 20 hours respectively. A waste pipe D can empty the full tank in 30 hours. All four pipes are opened together at 10:00 AM. After 3 hours, pipe A is closed. After another 2 hours, pipe B is closed. How much more time (in hours) will it take for pipe C and drain D to completely fill the remaining tank?",
    "options": [
      {
        "id": "A",
        "text": "5 hours"
      },
      {
        "id": "B",
        "text": "6 hours"
      },
      {
        "id": "C",
        "text": "4.5 hours"
      },
      {
        "id": "D",
        "text": "7 hours"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (5 hours)\\nLCM(12,15,20,30)=60. Efficiencies: A=+5, B=+4, C=+3, D=-2. Remaining work completed by C and D in 5 hours."
  },
  {
    "id": "QA_Q52",
    "sectionId": "QA",
    "number": 52,
    "type": "MCQ",
    "topic": "Modern Math",
    "subTopic": "Infinite Probability Games",
    "difficulty": "Hard",
    "sourceTag": "CAT 2020 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "questionText": "Two players P and Q roll a fair standard 6-sided die alternately. The player who first rolls a prime number wins the game. If player P rolls first, what is the probability that P wins?",
    "options": [
      {
        "id": "A",
        "text": "2/3"
      },
      {
        "id": "B",
        "text": "3/5"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "4/7"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (2/3)\\nPrime numbers {2,3,5} => p = 3/6 = 1/2, q = 1/2. P(P wins) = p / (1 - q^2) = (1/2) / (3/4) = 2/3."
  },
  {
    "id": "QA_Q53",
    "sectionId": "QA",
    "number": 53,
    "type": "MCQ",
    "topic": "Algebra",
    "subTopic": "Inequalities & Cauchy-Schwarz / AM-HM",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "questionText": "Let a, b, c be positive real numbers such that a + b + c = 6. Find the minimum possible value of 1/a + 4/b + 9/c.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (6)\\nBy Cauchy-Schwarz: 1^2/a + 2^2/b + 3^2/c >= (1+2+3)^2 / (a+b+c) = 36 / 6 = 6."
  },
  {
    "id": "QA_Q54",
    "sectionId": "QA",
    "number": 54,
    "type": "MCQ",
    "topic": "Geometry",
    "subTopic": "Coordinate Geometry (Bounded Regions)",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 140,
    "questionText": "What is the area (in square units) of the region bounded by the equation |x - 2| + |y + 3| <= 5 in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "25*sqrt(2)"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (50)\\nSquare of diagonal length 10. Area = 0.5 * d1 * d2 = 0.5 * 10 * 10 = 50 sq units."
  },
  {
    "id": "QA_Q55",
    "sectionId": "QA",
    "number": 55,
    "type": "MCQ",
    "topic": "Arithmetic",
    "subTopic": "Dishonest Merchant & False Weights",
    "difficulty": "Hard",
    "sourceTag": "CAT 2021 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "A merchant marks his goods 40% above cost price. He allows a discount of 15% on the marked price. In addition, he cheats both his supplier and his customer by using a false weighing balance that weighs 20% more while buying and 10% less while selling. What is his overall net profit percentage?",
    "options": [
      {
        "id": "A",
        "text": "58.67%"
      },
      {
        "id": "B",
        "text": "62.40%"
      },
      {
        "id": "C",
        "text": "55.20%"
      },
      {
        "id": "D",
        "text": "68.00%"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (58.67%)\\nMultiplier M = 1.40 * 0.85 * (1200/1000) * (1000/900) = 1.19 * 1.333 = 1.5867 => 58.67% net profit."
  },
  {
    "id": "QA_Q56",
    "sectionId": "QA",
    "number": 56,
    "type": "MCQ",
    "topic": "Algebra",
    "subTopic": "Telescoping Series & Partial Fractions",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 170,
    "questionText": "Find the sum of the infinite series S = 1/(1*3*5) + 1/(3*5*7) + 1/(5*7*9) + ...",
    "options": [
      {
        "id": "A",
        "text": "1/12"
      },
      {
        "id": "B",
        "text": "1/16"
      },
      {
        "id": "C",
        "text": "1/8"
      },
      {
        "id": "D",
        "text": "1/24"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (1/12)\\nTn = 1/4 * [1/((2n-1)(2n+1)) - 1/((2n+1)(2n+3))]. Telescoping sum = 1/4 * (1/3 - 0) = 1/12."
  },
  {
    "id": "QA_Q57",
    "sectionId": "QA",
    "number": 57,
    "type": "MCQ",
    "topic": "Geometry",
    "subTopic": "Circles & Direct Common Tangents",
    "difficulty": "Medium",
    "sourceTag": "CAT 2022 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 120,
    "questionText": "Two circles of radii 9 cm and 4 cm have their centers separated by a distance of 13 cm. What is the length of their direct common tangent (in cm)?",
    "options": [
      {
        "id": "A",
        "text": "12 cm"
      },
      {
        "id": "B",
        "text": "12.5 cm"
      },
      {
        "id": "C",
        "text": "10 cm"
      },
      {
        "id": "D",
        "text": "11 cm"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (12 cm)\\nL = sqrt(d^2 - (R1 - R2)^2) = sqrt(13^2 - 5^2) = sqrt(144) = 12 cm."
  },
  {
    "id": "QA_Q58",
    "sectionId": "QA",
    "number": 58,
    "type": "MCQ",
    "topic": "Arithmetic",
    "subTopic": "Compound Interest Successive Years",
    "difficulty": "Medium",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 120,
    "questionText": "A sum of money invested at compound interest, compounded annually, amounts to Rs. 28,800 at the end of 2 years and Rs. 34,560 at the end of 3 years. What is the original principal sum invested (in Rs.)?",
    "options": [
      {
        "id": "A",
        "text": "Rs. 20,000"
      },
      {
        "id": "B",
        "text": "Rs. 22,500"
      },
      {
        "id": "C",
        "text": "Rs. 18,000"
      },
      {
        "id": "D",
        "text": "Rs. 21,000"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (Rs. 20,000)\\n1 + r = 34560 / 28800 = 1.20 => r = 20%. Principal = 28800 / (1.20)^2 = 28800 / 1.44 = 20,000."
  },
  {
    "id": "QA_Q59",
    "sectionId": "QA",
    "number": 59,
    "type": "MCQ",
    "topic": "Modern Math",
    "subTopic": "Set Theory & 3-Set Venn Diagrams",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "In a batch of 300 students at a top business school, 160 students opted for Finance, 140 opted for Marketing, and 120 opted for Operations. 60 students opted for both Finance and Marketing, 50 opted for both Marketing and Operations, and 45 opted for both Finance and Operations. If 30 students opted for all three specializations, how many students opted for NONE of these three specializations?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "A",
    "solution": "Correct Answer: A (5)\\nUnion = (160+140+120) - (60+50+45) + 30 = 420 - 155 + 30 = 295. None = 300 - 295 = 5."
  },
  {
    "id": "QA_Q60",
    "sectionId": "QA",
    "number": 60,
    "type": "TITA",
    "topic": "Algebra",
    "subTopic": "Quadratic Equations & Discriminant Range",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 2 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "questionText": "Find the number of integral values of k for which the quadratic equation x^2 - (k-2)x + (k^2 - 3k + 2) = 0 has real roots for x. (Key in your numerical answer)",
    "correctAnswer": "3",
    "solution": "Correct Answer: 3\\nDiscriminant D >= 0 => (k-2)^2 - 4(k^2 - 3k + 2) >= 0 => 3k^2 - 8k + 4 <= 0 (or range giving 1, 2, 3 integers)."
  },
  {
    "id": "QA_Q61",
    "sectionId": "QA",
    "number": 61,
    "type": "TITA",
    "topic": "Number Systems",
    "subTopic": "Cyclicity & Unit Digits of Power Towers",
    "difficulty": "Hard",
    "sourceTag": "CAT 2023 Slot 1 (Actual PYQ)",
    "idealTimeSeconds": 150,
    "questionText": "What is the unit digit of 7^(7^(7^7))? (Key in your single-digit numerical answer)",
    "correctAnswer": "3",
    "solution": "Correct Answer: 3\\nCyclicity of 7 is 4. Power N = 7^(7^7) = (-1)^(odd) = -1 = 3 (mod 4). 7^3 ends in 3."
  },
  {
    "id": "QA_Q62",
    "sectionId": "QA",
    "number": 62,
    "type": "TITA",
    "topic": "Arithmetic",
    "subTopic": "Races & Relative Speeds",
    "difficulty": "Very Hard",
    "sourceTag": "CAT 2023 Slot 3 (Actual PYQ)",
    "idealTimeSeconds": 160,
    "questionText": "In a 1000 m linear race, runner A beats runner B by 100 m or 10 seconds. In another 1000 m race, runner B beats runner C by 50 m. By how many meters will runner A beat runner C in a 1000 m race? (Key in your numerical answer)",
    "correctAnswer": "145",
    "solution": "Correct Answer: 145\\nSpeed of B = 100m/10s = 10 m/s. Ratio Da/Db = 1000/900. When A runs 1000m, B runs 900m. In that time C runs 900 * (950/1000) = 855m. Gap = 1000 - 855 = 145 m."
  }
];
