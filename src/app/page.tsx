import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
