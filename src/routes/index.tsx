import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About, ResumeStrip } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements, Certifications, Education, Experience } from "@/components/sections/Journey";
import { Contact, Footer, Profiles, Resume } from "@/components/sections/Contact";

const title = "Marri Lalitha Raga Pravallika | Software & Embedded Systems Engineer";
const description =
  "Portfolio of Marri Lalitha Raga Pravallika — Software & Embedded Systems Engineer working across software development, AI, embedded systems, VLSI and hardware–software integration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ResumeStrip />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Resume />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
