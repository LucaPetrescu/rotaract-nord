import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Team from "@/components/Team";
import Join from "@/components/Join";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Quote />
      <Team />
      <Join />
      <Contact />
      <Footer />
    </>
  );
}
