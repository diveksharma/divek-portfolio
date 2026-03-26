import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ProjectsHero from "@/components/projects-hero";
import ProjectsList from "@/components/projects-list";

export const metadata = {
  title: "Projects — Divek Sharma",
  description: "A showcase of products I've designed and built — from SaaS platforms to client work.",
};

export default function ProjectsPage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Nav />
      <ProjectsHero />
      <ProjectsList />
      <Footer />
    </main>
  );
}
