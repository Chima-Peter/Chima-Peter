import StickyIntro from "@/components/layout/sticky-intro";
import MobileNav from "@/components/layout/mobile-nav";
import SiteFooter from "@/components/layout/site-footer";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <MobileNav />
      <div className="mx-auto min-h-screen max-w-7xl px-5 pt-20 sm:px-8 lg:flex lg:gap-16 lg:px-12 lg:pt-0 xl:gap-24">
        <StickyIntro />
        <div className="w-full lg:w-[min(60%,40rem)] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Contact />
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
