import CategorySelector from "@/components/CategorySelector";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-16 bg-[#faf9f6]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1e3456] mb-3 tracking-tight">
          Seek &amp; Find
        </h1>
        <p className="text-gray-500 text-base max-w-sm mx-auto">
          A Christian conversation card game to grow in faith together.
        </p>
      </div>
      <CategorySelector />
    </main>
  );
}
