import Navbar from './components/Navbar';
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import Contact from './components/Contact';
export default function Home() {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Navbar/>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Footer/>
         <Contact />
      </main>
    </div>
  );
}
