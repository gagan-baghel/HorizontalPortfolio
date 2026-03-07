"use client";

import { useEffect, useRef, useState } from "react";
import { GiDoubleFaceMask } from "react-icons/gi";
import { useScroll, useTransform, motion } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { MobileFooter } from "./components/MobileFooter";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MOBILE_MEDIA_QUERY = "(max-width: 1023px)";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const handleChange = (event) => {
      setIsMobileViewport(event.matches);
      setIsNavOpen(false);
    };

    setIsMobileViewport(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll(
    isMobileViewport ? undefined : { target: containerRef },
  );

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-525vw"]);

  const scrollToSection = (id) => {
    if (isMobileViewport) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsNavOpen(false);
      return;
    }

    const sectionIndex = sections.findIndex((s) => s.id === id);
    if (sectionIndex !== -1) {
      const scrollableHeight =
        (containerRef.current?.offsetHeight ??
          document.documentElement.scrollHeight) - window.innerHeight;
      const targetScroll =
        (sectionIndex / (sections.length - 1)) * Math.max(scrollableHeight, 0);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  const mobileLayout = (
    <div className="w-full">
      <section id="home" className="w-full">
        <Hero onNavigate={scrollToSection} isMobile />
      </section>
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <MobileFooter onNavigate={scrollToSection} />
    </div>
  );

  const desktopLayout = (
    <div ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="fixed left-0 top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-[625vw]">
          <section id="home" className="relative mr-[5vw] h-full w-[100vw] overflow-hidden">
            <Hero onNavigate={scrollToSection} />
          </section>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            <About />
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            <Services />
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            <Experience />
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            <Projects />
          </div>

          <div className="h-full w-[100vw] flex-shrink-0 overflow-hidden">
            <Contact />
          </div>
        </motion.div>
      </div>
    </div>
  );

  const appContent = (
    <div className="relative bg-black">
      <button
        type="button"
        onClick={() => setIsNavOpen((prev) => !prev)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600 bg-black/40 text-3xl text-white backdrop-blur md:left-8 md:top-8"
        aria-label="Toggle navigation"
      >
        <GiDoubleFaceMask />
      </button>

      <Navbar
        sections={sections}
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onSelect={scrollToSection}
      />

      {isNavOpen && (
        <button
          type="button"
          onClick={() => setIsNavOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          aria-label="Close navigation overlay"
        />
      )}

      {isMobileViewport ? mobileLayout : desktopLayout}
    </div>
  );

  return appContent;
}

export default App;
