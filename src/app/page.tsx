import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Your main content will go here */}
      </main>
    </div>
  );
}
