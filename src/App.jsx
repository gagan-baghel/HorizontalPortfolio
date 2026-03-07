"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { GiDoubleFaceMask } from "react-icons/gi";
import { useScroll, useTransform, motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileFooter } from "./components/MobileFooter";

const About = dynamic(() => import("./components/About").then((mod) => mod.About));
const Services = dynamic(() => import("./components/Services").then((mod) => mod.Services));
const Experience = dynamic(() => import("./components/Experience").then((mod) => mod.Experience));
const Projects = dynamic(() => import("./components/Projects").then((mod) => mod.Projects));
const Contact = dynamic(() => import("./components/Contact").then((mod) => mod.Contact));

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
  const [deferReady, setDeferReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const handleChange = () => setIsNavOpen(false);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const run = () => setDeferReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 500 });
      return () => window.cancelIdleCallback(id);
    }
    const timeoutId = window.setTimeout(run, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-525vw"]);

  const DeferredPlaceholder = ({ id }) => (
    <section
      id={id}
      className="flex min-h-[45vh] w-full items-center justify-center border border-white/5 bg-black/40 px-6 py-14"
      aria-hidden="true"
    >
      <div className="h-2 w-20 animate-pulse rounded-full bg-white/20" />
    </section>
  );

  const scrollToSection = (id) => {
    const isMobileViewport = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
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
    <div className="w-full lg:hidden">
      <section id="home" className="w-full">
        <Hero onNavigate={scrollToSection} isMobile />
      </section>
      {deferReady ? <About /> : <DeferredPlaceholder id="about" />}
      {deferReady ? <Services /> : <DeferredPlaceholder id="services" />}
      {deferReady ? <Experience /> : <DeferredPlaceholder id="experience" />}
      {deferReady ? <Projects /> : <DeferredPlaceholder id="projects" />}
      {deferReady ? <Contact /> : <DeferredPlaceholder id="contact" />}
      <MobileFooter onNavigate={scrollToSection} />
    </div>
  );

  const desktopLayout = (
    <div ref={containerRef} className="relative hidden h-[600vh] bg-black lg:block">
      <div className="fixed left-0 top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-[625vw]">
          <section id="home" className="relative mr-[5vw] h-full w-[100vw] overflow-hidden">
            <Hero onNavigate={scrollToSection} />
          </section>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            {deferReady ? <About /> : <DeferredPlaceholder id="about" />}
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            {deferReady ? <Services /> : <DeferredPlaceholder id="services" />}
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            {deferReady ? <Experience /> : <DeferredPlaceholder id="experience" />}
          </div>

          <div className="mr-[5vw] h-full w-[100vw] flex-shrink-0 overflow-hidden">
            {deferReady ? <Projects /> : <DeferredPlaceholder id="projects" />}
          </div>

          <div className="h-full w-[100vw] flex-shrink-0 overflow-hidden">
            {deferReady ? <Contact /> : <DeferredPlaceholder id="contact" />}
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

      {mobileLayout}
      {desktopLayout}
    </div>
  );

  return appContent;
}

export default App;
