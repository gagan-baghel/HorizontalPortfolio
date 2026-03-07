import { AllProjects } from "./ui/AllProjects";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-0 lg:py-0"
    >
      <div className="z-10 mb-10 w-full lg:mb-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-8">
        <div>
          <h2 className="font-archivo text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-[8rem]">
            PROJECTS
          </h2>
        </div>

        <a
          href="https://github.com/gagan-baghel"
          target="_blank"
          rel="noreferrer"
          className="group hidden rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/35 hover:bg-white/[0.08] lg:block lg:min-w-[290px]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
                GitHub Profile
              </p>
              <p className="mt-2 font-archivo text-2xl font-bold text-white">
                @gagan-baghel
              </p>
            </div>
            <FaGithub className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
        </a>
      </div>

      <div className="z-10 flex h-full w-full items-center lg:px-2">
        <AllProjects />
      </div>
    </section>
  );
}
