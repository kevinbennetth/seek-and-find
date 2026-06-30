import CategorySelector from "@/components/CategorySelector";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-16 bg-[#faf9f6]">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3456] mb-3 tracking-tight">
          Seek &amp; Find
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-sm mx-auto leading-relaxed">
          A Christian conversation card game to grow in faith together.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3 text-gray-200 select-none">
          <span className="h-px w-16 bg-gray-200 block" />
          <span className="text-xl">✦</span>
          <span className="h-px w-16 bg-gray-200 block" />
        </div>
      </div>
      <CategorySelector />
    </main>
  );
}
