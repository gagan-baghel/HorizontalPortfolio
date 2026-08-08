import { AllProjects } from "./ui/AllProjects";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-0 lg:py-0"
    >
      <div className="z-10 mb-8 w-full px-4 sm:px-8 lg:mb-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8 lg:px-14">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[0.68rem] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
              04 / Selected Work
            </span>
            <span className="h-px w-8 bg-zinc-800" />
            <span className="text-[0.68rem] font-medium tracking-widest text-zinc-500">
              41 Projects · Hard → Easy
            </span>
          </div>
          <h2 className="font-archivo text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-[7.5rem] leading-none">
            PROJECTS
          </h2>
        </div>

        <a
          href="https://github.com/gagan-baghel"
          target="_blank"
          rel="noreferrer"
          className="group mt-4 hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] lg:flex"
        >
          <FaGithub className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-white" />
          <span className="text-xs font-semibold tracking-wider text-zinc-300 group-hover:text-white">
            @gagan-baghel
          </span>
          <span className="text-xs text-zinc-600">↗</span>
        </a>
      </div>

      <div className="z-10 flex h-full w-full items-center">
        <AllProjects />
      </div>
    </section>
  );
}
