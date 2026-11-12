import SiteHeader from "@/components/layout/site-header";
import Hero from "@/components/layout/hero";
import SiteFooter from "@/components/layout/site-footer";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="site-shell">
          <About />
          <Projects />
          <Experience />
          <Stack />
          <Contact />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
