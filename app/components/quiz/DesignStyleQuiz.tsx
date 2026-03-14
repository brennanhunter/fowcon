'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaRedo } from 'react-icons/fa';
import { House } from 'lucide-react';
import ConsultationModal from '@/app/components/ConsultationModal';

type Style =
  | 'modern'
  | 'traditional'
  | 'coastal'
  | 'farmhouse'
  | 'midcentury'
  | 'mediterranean'
  | 'industrial'
  | 'bohemian';

interface Answer {
  text: string;
  image: string;
  styles: Style[];
}

interface Question {
  question: string;
  subtitle?: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    question: 'Which living room feels most like you?',
    answers: [
      {
        text: 'Clean lines, floating shelves, monochrome palette',
        image: '/images/quiz/question-1/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Rich wood, crown molding, and wingback chairs',
        image: '/images/quiz/question-1/top-right.jpg',
        styles: ['traditional'],
      },
      {
        text: 'Wicker accents, linen throws, and ocean blues',
        image: '/images/quiz/question-1/bottom-left.jpg',
        styles: ['coastal'],
      },
      {
        text: 'Exposed brick, leather sofa, and metal light fixtures',
        image: '/images/quiz/question-1/bottom-right.jpg',
        styles: ['industrial'],
      },
    ],
  },
  {
    question: 'Pick your dream kitchen.',
    answers: [
      {
        text: 'Handleless cabinets, waterfall island, matte black fixtures',
        image: '/images/quiz/question-2/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Shaker cabinets, apron sink, open wood shelves',
        image: '/images/quiz/question-2/top-right.jpg',
        styles: ['farmhouse'],
      },
      {
        text: 'Terra cotta tile, arched range hood, wrought iron accents',
        image: '/images/quiz/question-2/bottom-left.jpg',
        styles: ['mediterranean'],
      },
      {
        text: 'Teak cabinets, retro appliances, bold patterned backsplash',
        image: '/images/quiz/question-2/lower-right.jpg',
        styles: ['midcentury'],
      },
    ],
  },
  {
    question: 'You won a free vacation. Where are you headed?',
    subtitle: 'Trust your gut!',
    answers: [
      {
        text: 'Tokyo — cutting-edge design and neon lights',
        image: '/images/quiz/question-3/top-left.jpg',
        styles: ['modern', 'industrial'],
      },
      {
        text: 'Tuscany — vineyards, stone villas, old-world charm',
        image: '/images/quiz/question-3/top-right.jpg',
        styles: ['mediterranean', 'traditional'],
      },
      {
        text: 'A Gulf Coast beach house — sand, sun, and slow living',
        image: '/images/quiz/question-3/bottom-left.jpg',
        styles: ['coastal'],
      },
      {
        text: 'A Marrakech riad — colorful tiles, textiles, and spice markets',
        image: '/images/quiz/question-3/bottom-right.jpg',
        styles: ['bohemian'],
      },
    ],
  },
  {
    question: 'Which color palette makes your heart sing?',
    answers: [
      {
        text: 'Black, white, and charcoal with one bold pop of color',
        image: '/images/quiz/question-4/top-left.jpg',
        styles: ['modern', 'industrial'],
      },
      {
        text: 'Navy, burgundy, and gold',
        image: '/images/quiz/question-4/top-right.jpg',
        styles: ['traditional'],
      },
      {
        text: 'Warm terracotta, olive green, and sun-bleached yellow',
        image: '/images/quiz/question-4/bottom-left.jpg',
        styles: ['mediterranean', 'bohemian'],
      },
      {
        text: 'Sandy beige, soft blue, and driftwood gray',
        image: '/images/quiz/question-4/bottom-right.jpg',
        styles: ['coastal', 'farmhouse'],
      },
    ],
  },
  {
    question: "It's Saturday morning. What's your scene?",
    subtitle: 'Picture your ideal start to the day.',
    answers: [
      {
        text: 'Pour-over coffee in a spotless, sunlit kitchen',
        image: '/images/quiz/question-5/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Vinyl spinning while you cook in a retro kitchen',
        image: '/images/quiz/question-5/top-right.jpg',
        styles: ['midcentury', 'bohemian'],
      },
      {
        text: 'Barefoot on the patio, smoothie in hand, ocean breeze',
        image: '/images/quiz/question-5/bottom-left.jpg',
        styles: ['coastal'],
      },
      {
        text: 'Big farmhouse table, fresh flowers, pancakes from scratch',
        image: '/images/quiz/question-5/bottom-right.jpg',
        styles: ['farmhouse'],
      },
    ],
  },
  {
    question: 'Pick your dream bathroom.',
    answers: [
      {
        text: 'Frameless glass, wall-mounted vanity, rainfall shower',
        image: '/images/quiz/question-6/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Clawfoot tub, marble tile, polished brass fixtures',
        image: '/images/quiz/question-6/top-right.jpg',
        styles: ['traditional'],
      },
      {
        text: 'Patterned cement tile, colorful textiles, plants everywhere',
        image: '/images/quiz/question-6/bottom-left.jpg',
        styles: ['bohemian', 'mediterranean'],
      },
      {
        text: 'Concrete sink, black hardware, open pipe shelving',
        image: '/images/quiz/question-6/bottom-right.jpg',
        styles: ['industrial'],
      },
    ],
  },
  {
    question: "Choose a material you can't resist.",
    answers: [
      {
        text: 'Polished concrete or blackened steel',
        image: '/images/quiz/question-7/top-left.jpg',
        styles: ['industrial', 'modern'],
      },
      {
        text: 'Reclaimed barn wood or shiplap',
        image: '/images/quiz/question-7/top-right.jpg',
        styles: ['farmhouse'],
      },
      {
        text: 'Rattan, jute, or woven seagrass',
        image: '/images/quiz/question-7/bottom-left.jpg',
        styles: ['coastal', 'bohemian'],
      },
      {
        text: 'Hand-painted tile or wrought iron',
        image: '/images/quiz/question-7/bottom-right.jpg',
        styles: ['mediterranean', 'traditional'],
      },
    ],
  },
  {
    question: "You're hosting a dinner party. What's the vibe?",
    subtitle: 'Set the scene!',
    answers: [
      {
        text: 'Minimalist table, curated playlist, craft cocktails',
        image: '/images/quiz/question-8/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Candlelit formal dining with fine china and cloth napkins',
        image: '/images/quiz/question-8/top-right.jpg',
        styles: ['traditional'],
      },
      {
        text: 'Backyard bonfire, string lights, mismatched plates',
        image: '/images/quiz/question-8/bottom-left.jpg',
        styles: ['bohemian', 'farmhouse'],
      },
      {
        text: 'Long table under a pergola with wine and fresh herbs',
        image: '/images/quiz/question-8/bottom-right.jpg',
        styles: ['mediterranean', 'coastal'],
      },
    ],
  },
  {
    question: "Pick a piece of furniture you'd splurge on.",
    answers: [
      {
        text: 'An Eames lounge chair',
        image: '/images/quiz/question-9/top-left.jpg',
        styles: ['midcentury'],
      },
      {
        text: 'A hand-carved antique armoire',
        image: '/images/quiz/question-9/top-right.jpg',
        styles: ['traditional', 'mediterranean'],
      },
      {
        text: 'A hanging rattan egg chair',
        image: '/images/quiz/question-9/bottom-left.jpg',
        styles: ['coastal', 'bohemian'],
      },
      {
        text: 'A vintage industrial drafting table',
        image: '/images/quiz/question-9/bottom-right.jpg',
        styles: ['industrial', 'midcentury'],
      },
    ],
  },
  {
    question: 'In one word, your dream home is...',
    answers: [
      {
        text: 'Sleek',
        image: '/images/quiz/question-10/top-left.jpg',
        styles: ['modern'],
      },
      {
        text: 'Breezy',
        image: '/images/quiz/question-10/top-right.jpg',
        styles: ['coastal'],
      },
      {
        text: 'Charming',
        image: '/images/quiz/question-10/bottom-left.jpg',
        styles: ['farmhouse', 'traditional'],
      },
      {
        text: 'Eclectic',
        image: '/images/quiz/question-10/bottom-right.jpg',
        styles: ['bohemian', 'midcentury'],
      },
    ],
  },
];

interface StyleResult {
  name: string;
  tagline: string;
  description: string;
  tips: string[];
  image: string;
}

const styleResults: Record<Style, StyleResult> = {
  modern: {
    name: 'Modern',
    tagline: 'Clean, bold, intentional.',
    description:
      "You're all about clean lines, open spaces, and a streamlined aesthetic. Function meets form in every corner — think sleek cabinetry, quartz surfaces, matte black fixtures, and a neutral palette with bold accents. Your ideal home feels curated, uncluttered, and effortlessly cool.",
    tips: [
      'Flat-panel or slab cabinetry in the kitchen',
      'Large-format tile for a seamless, modern bathroom',
      'Integrated smart home features and hidden storage',
    ],
    image: '/images/quiz/results/modern.jpg',
  },
  traditional: {
    name: 'Traditional',
    tagline: 'Refined, timeless, elegant.',
    description:
      "You appreciate classic craftsmanship, rich materials, and spaces that feel established and polished. Crown molding, dark-stained hardwood, stone countertops, and elegant fixtures are your language. Your ideal home has depth, character, and a sense of permanence that never goes out of style.",
    tips: [
      'Raised-panel cabinetry with decorative hardware',
      'Natural stone countertops and polished fixtures',
      'Detailed trim work, wainscoting, and chair rails',
    ],
    image: '/images/quiz/results/traditional.jpg',
  },
  coastal: {
    name: 'Coastal',
    tagline: 'Breezy, bright, relaxed.',
    description:
      "Inspired by sun, sea, and sand — your taste is naturally at home here in Tampa Bay. Light color palettes, natural textures like rattan and linen, and an overall sense of breezy relaxation define your style. Your ideal home feels like a permanent vacation — calming, open, and bathed in natural light.",
    tips: [
      'Light wood or whitewashed cabinetry',
      'Soft blue and sandy neutral accents throughout',
      'Natural woven textures — rattan, jute, and linen',
    ],
    image: '/images/quiz/results/coastal.jpg',
  },
  farmhouse: {
    name: 'Farmhouse',
    tagline: 'Warm, welcoming, full of character.',
    description:
      "You love warmth, charm, and spaces that feel genuinely lived-in. Shiplap walls, open shelving, reclaimed wood, and cozy textiles make your heart sing. Your ideal home is the kind of place where people naturally gather — comfortable, inviting, and full of personality.",
    tips: [
      'Shaker-style cabinetry with an apron-front sink',
      'Reclaimed or wide-plank wood flooring',
      'Open shelving, vintage hardware, and warm lighting',
    ],
    image: '/images/quiz/results/farmhouse.jpg',
  },
  midcentury: {
    name: 'Mid-Century Modern',
    tagline: 'Retro-cool, bold, iconic.',
    description:
      "You have an eye for iconic design and love the optimism of mid-century style. Bold geometric patterns, organic curves, statement furniture, and a mix of natural and manufactured materials define your taste. Your ideal home is a conversation piece — distinctive, playful, and full of personality.",
    tips: [
      'Walnut or teak cabinetry with simple pulls',
      'Bold, geometric tile patterns in bathrooms and kitchens',
      'Statement lighting fixtures and iconic furniture silhouettes',
    ],
    image: '/images/quiz/results/mid-century-modern.jpg',
  },
  mediterranean: {
    name: 'Mediterranean',
    tagline: 'Sun-kissed, warm, old-world.',
    description:
      "You're drawn to the warmth and romance of Mediterranean living — perfectly suited to Florida's climate. Terra cotta, wrought iron, arched doorways, and rich tile work speak to your soul. Your ideal home feels like a European escape — warm, textured, and bathed in golden light.",
    tips: [
      'Arched doorways and niches for architectural interest',
      'Hand-painted or patterned tile backsplashes',
      'Wrought iron accents, warm stone, and stucco textures',
    ],
    image: '/images/quiz/results/mediterranean.jpg',
  },
  industrial: {
    name: 'Industrial',
    tagline: 'Raw, edgy, unapologetic.',
    description:
      "You love the beauty in raw materials and honest construction. Exposed brick, concrete, blackened steel, and utilitarian fixtures give a space its soul. Your ideal home has an urban loft energy — open layouts, high ceilings, and a fearless mix of rough and refined elements.",
    tips: [
      'Concrete or metal countertop accents',
      'Open shelving with black iron brackets',
      'Matte black fixtures and exposed-style lighting',
    ],
    image: '/images/quiz/results/industrial.jpg',
  },
  bohemian: {
    name: 'Bohemian',
    tagline: 'Free-spirited, layered, eclectic.',
    description:
      "Rules? You'd rather mix patterns, layer textures, and surround yourself with pieces that tell a story. Colorful textiles, global influences, lush plants, and handcrafted touches define your style. Your ideal home is a curated adventure — vibrant, personal, and endlessly interesting.",
    tips: [
      'Patterned cement or encaustic tile for floors and walls',
      'Colorful, textured textiles and layered rugs',
      'Plenty of greenery, macrame, and handcrafted accents',
    ],
    image: '/images/quiz/results/bohemian.jpg',
  },
};

const emptyScores: Record<Style, number> = {
  modern: 0,
  traditional: 0,
  coastal: 0,
  farmhouse: 0,
  midcentury: 0,
  mediterranean: 0,
  industrial: 0,
  bohemian: 0,
};

export default function DesignStyleQuiz() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'calculating' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<Style, number>>({ ...emptyScores });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (phase === 'calculating') {
      const timer = setTimeout(() => setPhase('results'), 2200);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleAnswer = (styles: Style[], answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    const newScores = { ...scores };
    styles.forEach((style) => {
      newScores[style] += 1;
    });
    setScores(newScores);

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setPhase('calculating');
      }
    }, 450);
  };

  const getResult = (): Style => {
    return (Object.entries(scores) as [Style, number][]).reduce((a, b) =>
      a[1] >= b[1] ? a : b
    )[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ ...emptyScores });
    setPhase('intro');
  };

  const progress = ((currentQuestion) / questions.length) * 100;
  const resultStyle = getResult();
  const result = styleResults[resultStyle];

  const totalPoints = Object.values(scores).reduce((sum, s) => sum + s, 0);

  return (
    <>
      <section className="min-h-[600px] bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* INTRO SCREEN */}
            {phase === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <House className="mx-auto mb-6 text-primary-blue" size={56} strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to find your style?
                </h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto mb-3">
                  Answer 10 quick, fun questions — from dream vacations to dream kitchens — and
                  we&apos;ll reveal your unique design personality.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  8 possible styles &middot; Takes about 60 seconds &middot; No wrong answers
                </p>
                <button
                  onClick={() => setPhase('quiz')}
                  className="bg-primary-blue text-white font-semibold px-10 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg cursor-pointer inline-flex items-center gap-2"
                >
                  Let&apos;s Go
                  <FaArrowRight />
                </button>
              </motion.div>
            )}

            {/* QUIZ QUESTIONS */}
            {phase === 'quiz' && (
              <motion.div
                key={`q-${currentQuestion}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-blue h-2 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-primary-blue mb-2 text-center">
                  {questions[currentQuestion].question}
                </h2>
                {questions[currentQuestion].subtitle && (
                  <p className="text-gray-400 text-center mb-6">
                    {questions[currentQuestion].subtitle}
                  </p>
                )}
                {!questions[currentQuestion].subtitle && <div className="mb-8" />}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer.styles, index)}
                      disabled={selectedAnswer !== null}
                      className={`group relative rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer text-left ${
                        selectedAnswer === index
                          ? 'border-primary-blue ring-2 ring-primary-blue/30 scale-[0.98]'
                          : 'border-transparent hover:border-primary-blue'
                      }`}
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={answer.image}
                          alt={answer.text}
                          fill
                          className={`object-cover transition-transform duration-500 ${
                            selectedAnswer === index ? 'scale-105' : 'group-hover:scale-105'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-semibold text-lg leading-snug">
                            {answer.text}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CALCULATING SCREEN */}
            {phase === 'calculating' && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="flex gap-3 mb-8">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 rounded-full bg-primary-blue"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <p className="text-xl text-gray-600 font-medium">Analyzing your style...</p>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {phase === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
                  Your Design Style Is
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-2">
                  {result.name}
                </h2>
                <p className="text-gray-400 italic text-lg mb-8">{result.tagline}</p>

                <div className="relative aspect-[16/9] max-w-2xl mx-auto rounded-lg overflow-hidden mb-8">
                  <Image
                    src={result.image}
                    alt={`${result.name} style interior`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  {result.description}
                </p>

                {/* Tips */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-lg mx-auto mb-10 text-left">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Remodeling tips for your {result.name} style:
                  </h3>
                  <ul className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary-blue mt-1 shrink-0">&#10003;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    Bring Your {result.name} Vision to Life
                    <FaArrowRight />
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="border-2 border-primary-blue text-primary-blue font-semibold px-8 py-4 rounded-md hover:bg-primary-blue hover:text-white transition-colors text-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FaRedo />
                    Retake Quiz
                  </button>
                </div>

                {/* Score Breakdown */}
                <div className="max-w-md mx-auto mt-10">
                  <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Your Style Breakdown
                  </h3>
                  <div className="space-y-3">
                    {(Object.entries(scores) as [Style, number][])
                      .sort((a, b) => b[1] - a[1])
                      .map(([style, score]) => {
                        const pct = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;
                        return (
                          <div key={style}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">
                                {styleResults[style].name}
                              </span>
                              <span className="text-gray-500">{pct}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-primary-blue h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
