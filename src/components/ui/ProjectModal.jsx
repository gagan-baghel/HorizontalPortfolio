"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const getComplexityColor = (level) => {
    switch (level) {
      case 5:
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
      case 4:
        return "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
      case 3:
        return "border-blue-500/40 bg-blue-500/10 text-blue-300";
      case 2:
        return "border-amber-500/40 bg-amber-500/10 text-amber-300";
      case 1:
      default:
        return "border-zinc-500/40 bg-zinc-500/10 text-zinc-300";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950/95 p-0 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl no-scrollbar"
          >
            {/* Header Image Cover */}
            <div className="relative h-56 w-full overflow-hidden sm:h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imgUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-md transition-all hover:bg-white hover:text-black"
                aria-label="Close modal"
              >
                <FaTimes className="h-4 w-4" />
              </button>

              {/* Badges on Top of Image */}
              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase backdrop-blur-md ${getComplexityColor(
                    project.complexityLevel
                  )}`}
                >
                  {project.complexityLabel}
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold tracking-wider text-zinc-200 uppercase backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-archivo text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    {project.meta}
                  </p>
                </div>

                {/* Quick Action Links */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-wider text-black uppercase transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="h-3 w-3" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  Project Overview
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200 sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Key Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                    Key Architectural Highlights
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm"
                      >
                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies & Stack */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  <FaLayerGroup className="h-3.5 w-3.5" />
                  <span>Technologies & Frameworks</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stackPills?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  )) || (
                    <span className="text-sm text-zinc-300">{project.stack}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
