import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const heroPills = ["Next.js", "Framer Motion", "UI Systems", "3D Interaction"];

export function Hero({ onNavigate, isMobile = false }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Upgraded blur-fade-up animation for the text
  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isMobile) {
    return (
      <AuroraBackground className="h-screen w-[100vw] justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col items-center justify-center -translate-x-12 -translate-y-12 px-8 text-center md:px-0"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md">
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase">
              Hi, my name is
            </p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="max-w-5xl">
            <span className="block pb-2 text-[6rem] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] md:text-[9rem]">
              Gagan Baghel
            </span>
            <span className="block pb-6 text-2xl font-bold tracking-widest text-zinc-300 uppercase md:text-4xl">
              Freelance Web Developer & Designer
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
            Crafting engaging, world-class web experiences featuring heavy 3D interactions and elite aesthetic engineering.
          </motion.p>
        </motion.div>
      </AuroraBackground>
    );
  }

  return (
    <AuroraBackground className="min-h-0 w-full justify-center overflow-hidden py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-8"
      >
        <motion.div variants={itemVariants} className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md">
          <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1 variants={itemVariants} className="max-w-5xl">
          <span className="block pb-2 text-[2.9rem] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] sm:text-[3.8rem] md:text-[6rem]">
            Gagan Baghel
          </span>
          <span className="block pb-6 text-base font-bold tracking-[0.2em] text-zinc-300 uppercase sm:text-lg md:text-2xl">
            Freelance Web Developer & Designer
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-2xl text-base font-light leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
          Crafting engaging, world-class web experiences featuring heavy 3D interactions and elite aesthetic engineering.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-zinc-200 uppercase backdrop-blur-md sm:text-xs"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => onNavigate?.("projects")}
            className="w-full rounded-full bg-zinc-100 px-6 py-3 text-sm font-bold tracking-[0.16em] text-black uppercase transition-all hover:bg-white sm:w-auto"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.("contact")}
            className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-zinc-100 uppercase backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
