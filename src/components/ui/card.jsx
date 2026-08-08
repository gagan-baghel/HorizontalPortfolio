"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function BentoGridItem({
  title = "The Art of Design",
  description = "Discover the beauty of highly engineered, functional architecture and deep visual aesthetic.",
  imgUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  category = "Case Study",
  meta = "Project",
  stack = "",
  stackPills = [],
  repoUrl = "#",
  liveUrl = null,
  complexityLevel = 3,
  complexityLabel = "Level 3",
  onInspect,
  project,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onInspect?.(project)}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-[24rem] w-full max-w-none cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] sm:h-[26rem] md:h-[28rem] lg:h-[450px]"
    >
      {/* Background Image with Cinematic Scale */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Elegant Dark Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Top Header: Minimal Complexity & Category Tag */}
      <div className="relative z-20 flex items-center justify-between p-6">
        <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          {category}
        </span>
        <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[0.62rem] font-medium tracking-widest text-zinc-300 backdrop-blur-md">
          L{complexityLevel}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 flex flex-col justify-end p-6 transition-transform duration-500 sm:p-7">
        <p className="mb-1 text-[0.65rem] font-medium tracking-[0.18em] text-zinc-400 uppercase">
          {meta}
        </p>

        <h3 className="font-archivo text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-100 sm:text-3xl">
          {title}
        </h3>

        {/* Expandable info on hover/interaction */}
        <div className="mt-2 grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 lg:grid lg:grid-rows-[0fr]">
          <div className="overflow-hidden">
            <p className="pt-2 text-xs leading-relaxed text-zinc-300 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4" onClick={(e) => e.stopPropagation()}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-white transition-colors hover:text-zinc-300"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt className="h-2.5 w-2.5" />
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              <FaGithub className="h-3 w-3" />
              <span>Source</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => onInspect?.(project)}
            className="ml-auto text-[0.68rem] font-medium tracking-widest text-zinc-500 uppercase transition-colors hover:text-zinc-300"
          >
            Overview →
          </button>
        </div>
      </div>
    </motion.article>
  );
}
