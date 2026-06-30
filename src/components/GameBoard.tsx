"use client";

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
  }, [categoryParam]);

  if (questions.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center bg-[#faf9f6]">
        <p className="text-gray-400">Loading...</p>
      </main>
    );
  }

  const current = questions[index];

  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-12 bg-[#faf9f6]">
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
        onNext={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
        onRestart={() => {
          setQuestions(shuffle(questions));
          setIndex(0);
        }}
        isFirst={index === 0}
        isLast={index === questions.length - 1}
      />
    </main>
  );
}
