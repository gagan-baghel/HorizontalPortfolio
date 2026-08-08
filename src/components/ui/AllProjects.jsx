"use client";

import { useState, useMemo, useRef } from "react";
import { BentoGridItem } from "./card";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../../data/projectsData";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const filterTabs = [
  { id: "all", label: "All", count: 41 },
  { id: "ai-fullstack", label: "AI & SaaS", count: 6 },
  { id: "interactive-3d", label: "3D & Motion", count: 6 },
  { id: "web-apps", label: "Web Apps", count: 8 },
  { id: "design-systems", label: "Design Systems", count: 7 },
  { id: "core-engineering", label: "Engineering & IoT", count: 14 },
];

export function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileLimit, setMobileLimit] = useState(6);

  const scrollRef = useRef(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.categoryGroup === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.stack.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleInspect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full flex-col">
      {/* Minimalist Controls Bar */}
      <div className="z-20 mb-6 flex w-full flex-col justify-between gap-4 px-4 sm:px-8 lg:flex-row lg:items-center lg:px-14">
        {/* Clean Minimal Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto border-b border-white/5 pb-2 no-scrollbar lg:border-none lg:pb-0">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setMobileLimit(6);
                }}
                className={`relative flex items-center gap-1.5 whitespace-nowrap py-1 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[0.62rem] text-zinc-600">({tab.count})</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side: Search & Navigation */}
        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[0.65rem] text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-40 rounded-full border border-white/10 bg-white/[0.02] py-1.5 pl-8 pr-3 text-xs text-white placeholder-zinc-600 transition-all focus:w-56 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none sm:w-48"
            />
          </div>

          <div className="hidden items-center gap-1.5 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="h-2.5 w-2.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
              aria-label="Scroll right"
            >
              <FaChevronRight className="h-2.5 w-2.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Rail */}
      <div
        ref={scrollRef}
        className="hidden h-full w-full gap-7 px-6 lg:flex lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:cursor-grab lg:active:cursor-grabbing lg:no-scrollbar lg:px-14"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-[420px] flex-shrink-0 snap-center xl:w-[460px]"
          >
            <BentoGridItem
              {...project}
              project={project}
              onInspect={handleInspect}
            />
          </div>
        ))}
        <div className="w-[12vw] flex-shrink-0" />
      </div>

      {/* Mobile Vertical View */}
      <div className="flex w-full flex-col gap-6 px-4 sm:px-8 lg:hidden">
        {filteredProjects.slice(0, mobileLimit).map((project) => (
          <div key={project.id} className="mx-auto w-full max-w-lg">
            <BentoGridItem
              {...project}
              project={project}
              onInspect={handleInspect}
            />
          </div>
        ))}

        {mobileLimit < filteredProjects.length && (
          <button
            type="button"
            onClick={() => setMobileLimit((prev) => prev + 6)}
            className="mx-auto mt-4 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-xs font-semibold tracking-widest text-zinc-300 uppercase transition-all hover:border-white/40 hover:text-white"
          >
            Show More ({filteredProjects.length - mobileLimit})
          </button>
        )}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
}
