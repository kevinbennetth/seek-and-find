import Link from "next/link";
import questionsData from "@/data/questions.json";
import type { QuestionsData } from "@/types/game";

const data = questionsData as QuestionsData;

export default function CategorySelector() {
  const totalQuestions = data.categories.reduce(
    (sum, cat) => sum + cat.questions.length,
    0
  );

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {data.categories.map((category) => (
          <Link
            key={category.id}
            href={`/game?category=${category.id}`}
            className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div
              className="w-8 h-1.5 rounded-full mb-3"
              style={{ backgroundColor: category.color }}
            />
            <h2 className="text-lg font-semibold mb-1 text-[#1e3456]">
              {category.name}
            </h2>
            <p className="text-sm text-gray-400">
              {category.questions.length} questions
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/game?category=all"
        className="block w-full p-5 rounded-2xl text-center font-semibold text-white bg-[#c9a84c] hover:bg-[#b8973b] transition-colors"
      >
        All Categories · {totalQuestions} questions
      </Link>
    </div>
  );
}
