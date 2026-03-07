import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BentoGridItem({
  title = "The Art of Design",
  description = "Discover the beauty of highly engineered, functional architecture and deep visual aesthetic.",
  imgUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  category = "Case Study",
  meta = "Project",
  stack = "",
  repoUrl = "#",
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[21rem] w-full max-w-none cursor-pointer overflow-hidden rounded-2xl bg-black/50 shadow-2xl transition-all duration-300 sm:h-[24rem] md:h-[27rem] lg:h-[470px]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] lg:group-hover:scale-110"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/55 to-transparent transition-opacity duration-500 lg:group-hover:opacity-80" />

      <div className="absolute inset-0 z-20 flex translate-y-0 flex-col justify-end p-5 transition-transform duration-500 sm:p-6 lg:translate-y-8 lg:p-8 lg:group-hover:translate-y-0">
        <div className="mb-4 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-zinc-200 uppercase sm:text-[0.7rem]">
          <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-md">
            {category}
          </span>
          <span className="text-zinc-300/85">{meta}</span>
        </div>

        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white drop-shadow-md sm:text-3xl">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-200 opacity-100 transition-opacity duration-500 lg:text-base lg:opacity-0 lg:group-hover:opacity-100">
          {description}
        </p>
        <p className="mt-2 line-clamp-1 text-xs tracking-wide text-zinc-300/90">
          {stack}
        </p>

        <div className="mt-5 h-10 overflow-hidden opacity-100 transition-all duration-500 lg:mt-4 lg:h-0 lg:opacity-0 lg:group-hover:mt-6 lg:group-hover:h-12 lg:group-hover:opacity-100">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 border-b border-white/30 pb-1 text-sm font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:border-white"
          >
            <span>Open Repository</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
