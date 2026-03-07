import { motion } from "framer-motion";

const strengths = [
  {
    title: "Design Precision",
    text: "Composition, typography, and interaction are treated as one system, not separate tasks.",
  },
  {
    title: "Engineering Depth",
    text: "Component architecture, performance budgets, and maintainability stay intact under visual complexity.",
  },
  {
    title: "Business Focus",
    text: "Every screen is designed to build trust, drive clarity, and increase conversion quality.",
  },
];

const stack = ["Next.js", "React", "Framer Motion", "Tailwind", "Node.js", "MongoDB"];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-screen lg:items-center lg:px-16 lg:py-24 xl:px-24"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="h-[28rem] w-[28rem] rounded-full bg-zinc-800/30 blur-[100px] md:h-[40rem] md:w-[40rem]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-4 left-4 z-10 hidden pb-4 font-archivo text-8xl font-black tracking-tighter text-white md:block lg:left-[8%] lg:text-9xl"
      >
        ABOUT
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 mx-auto w-full max-w-6xl"
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
          About Me
        </p>
        <h3 className="font-archivo text-4xl font-black tracking-tight text-white sm:text-5xl lg:max-w-3xl">
          I build premium digital products where visual craft and engineering rigor meet.
        </h3>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <p className="mb-6 text-base font-light leading-relaxed text-zinc-200 sm:text-lg">
              I build digital systems with intent. Every interface is structured, deliberate, and engineered to scale — not just designed to impress. My work sits at the intersection of visual precision and production-grade frontend architecture.
            </p>
            <p className="text-base font-light leading-relaxed text-zinc-300 sm:text-lg">
              From motion choreography to performance budgets, I obsess over details that most people ignore. The result: products that feel premium, load fast, and stay maintainable long after launch.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] text-zinc-200 uppercase backdrop-blur-md sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5 shadow-[0_18px_45px_-35px_rgba(255,255,255,0.45)] backdrop-blur-md"
              >
                <h4 className="mb-2 text-lg font-semibold text-white">{strength.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-300">{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
