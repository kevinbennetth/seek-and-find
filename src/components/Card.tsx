import type { Question } from "@/types/game";

interface Props {
  question: Question;
  categoryName: string;
  categoryColor: string;
}

export default function Card({ question, categoryName, categoryColor }: Props) {
  return (
    <div className="card-enter w-full max-w-xl bg-white rounded-3xl shadow-md overflow-hidden mb-8">
      <div className="h-2" style={{ backgroundColor: categoryColor }} />
      <div className="p-8">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: categoryColor }}
        >
          {categoryName}
        </span>
        <p className="text-xl font-medium text-[#1e3456] leading-relaxed">
          {question.text}
        </p>
        {question.scripture && (
          <p className="mt-6 text-sm text-gray-400 italic">{question.scripture}</p>
        )}
      </div>
    </div>
  );
}
