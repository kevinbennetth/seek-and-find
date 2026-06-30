import Link from "next/link";

interface Props {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function GameControls({
  index,
  total,
  onPrev,
  onNext,
  isFirst,
  isLast,
}: Props) {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="px-5 py-2.5 rounded-xl border border-gray-200 text-[#1e3456] font-medium disabled:opacity-30 hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>

        <span className="text-sm text-gray-400 tabular-nums">
          {index + 1} / {total}
        </span>

        <button
          onClick={onNext}
          className="px-5 py-2.5 rounded-xl bg-[#1e3456] text-white font-medium hover:bg-[#162a44] transition-colors"
        >
          {isLast ? "Finish" : "Next →"}
        </button>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-[#1e3456] transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
