import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Works from "@/components/landing/Works";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Clients from "@/components/landing/Clients";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
