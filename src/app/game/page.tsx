import { Suspense } from "react";
import GameBoard from "@/components/GameBoard";

export default function GamePage() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 items-center justify-center bg-[#faf9f6]">
          <p className="text-gray-400">Loading...</p>
        </main>
      }
    >
      <GameBoard />
    </Suspense>
  );
}
