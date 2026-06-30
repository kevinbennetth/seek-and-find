"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import questionsData from "@/data/questions.json";
import type { QuestionsData, Question } from "@/types/game";
import Card from "./Card";
import GameControls from "./GameControls";

const data = questionsData as QuestionsData;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GameBoard() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "all";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [categoryName, setCategoryName] = useState("All Categories");
  const [categoryColor, setCategoryColor] = useState("#c9a84c");

  useEffect(() => {
    let pool: Question[] = [];

    if (categoryParam === "all") {
      pool = data.categories.flatMap((c) => c.questions);
      setCategoryName("All Categories");
      setCategoryColor("#c9a84c");
    } else {
      const cat = data.categories.find((c) => c.id === Number(categoryParam));
      if (cat) {
        pool = cat.questions;
        setCategoryName(cat.name);
        setCategoryColor(cat.color);
      }
    }

    setQuestions(shuffle(pool));
    setIndex(0);
    setCompleted(false);
  }, [categoryParam]);

  if (questions.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center bg-[#faf9f6]">
        <p className="text-gray-400">Loading…</p>
      </main>
    );
  }

  if (completed) {
    return (
      <main className="flex flex-col flex-1 items-center justify-center px-6 py-16 bg-[#faf9f6] text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold"
          style={{ backgroundColor: categoryColor }}
        >
          ✓
        </div>
        <h2 className="text-2xl font-bold text-[#1e3456] mb-3">
          You&apos;ve seen all {questions.length} cards!
        </h2>
        <p className="text-gray-500 max-w-sm mb-10 leading-relaxed">
          May these conversations draw you closer to one another and to Christ.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-sm">
          <button
            onClick={() => {
              setQuestions(shuffle(questions));
              setIndex(0);
              setCompleted(false);
            }}
            className="flex-1 px-6 py-3 rounded-xl text-white font-semibold transition-colors"
            style={{ backgroundColor: categoryColor }}
          >
            Shuffle &amp; Restart
          </button>
          <Link
            href="/"
            className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-[#1e3456] font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const current = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-12 bg-[#faf9f6]">
      <div className="w-full max-w-xl mb-5">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: categoryColor }}
          />
        </div>
      </div>

      <Card
        key={index}
        question={current}
        categoryName={categoryName}
        categoryColor={categoryColor}
      />

      <GameControls
        index={index}
        total={questions.length}
        onPrev={() => setIndex((i) => Math.max(0, i - 1))}
        onNext={() => {
          if (index === questions.length - 1) {
            setCompleted(true);
          } else {
            setIndex((i) => i + 1);
          }
        }}
        isFirst={index === 0}
        isLast={index === questions.length - 1}
      />
    </main>
  );
}
