import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Skills />
    </div>
  );
}
