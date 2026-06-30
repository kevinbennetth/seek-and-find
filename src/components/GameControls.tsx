import Link from "next/link";

interface Props {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function GameControls({
  index,
  total,
  onPrev,
  onNext,
  onRestart,
  isFirst,
  isLast,
}: Props) {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="px-5 py-2.5 rounded-xl border border-gray-200 text-[#1e3456] font-medium disabled:opacity-30 hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>

        <span className="text-sm text-gray-400">
          {index + 1} of {total}
        </span>

        {isLast ? (
          <button
            onClick={onRestart}
            className="px-5 py-2.5 rounded-xl bg-[#c9a84c] text-white font-medium hover:bg-[#b8973b] transition-colors"
          >
            Restart
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-5 py-2.5 rounded-xl bg-[#1e3456] text-white font-medium hover:bg-[#162a44] transition-colors"
          >
            Next →
          </button>
        )}
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
