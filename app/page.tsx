import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedWork from "@/components/featured-work";
import About from "@/components/about";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <FeaturedWork />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
