import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ImCross } from "react-icons/im";

export function Navbar({ sections, isOpen, onClose, onSelect }) {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        duration: 0.45,
        x: isOpen ? 0 : "-100%",
        ease: "power3.out",
      });

      if (isOpen) {
        gsap.fromTo(
          ".nav-item",
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.08, duration: 0.25 }
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-40 flex h-screen w-[82%] -translate-x-full flex-col items-center space-y-8 bg-black/70 px-4 py-20 font-bold backdrop-blur-md sm:w-[65%] md:space-y-10 lg:w-[38%]"
      aria-label="Primary"
    >
      <button
        type="button"
        onClick={onClose}
        className="nav-item rounded-full border border-zinc-500 p-3"
        aria-label="Close navigation"
      >
        <ImCross />
      </button>

      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => onSelect(section.id)}
          className="nav-item text-3xl transition-colors hover:text-white md:text-4xl"
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
