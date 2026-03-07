import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    role: "Computer Science Studies",
    company: "Academic Foundation",
    period: "2018 - 2020",
    description:
      "Deep dive into algorithms, data structures, and the fundamentals of software engineering.",
    skills: "OOP, Architecture, Core CS Fundamentals",
  },
  {
    year: "2020",
    role: "Junior Frontend Developer",
    company: "Early Product Work",
    period: "2020 - 2022",
    description:
      "Built and maintained responsive web applications with strong focus on React component architecture and state management.",
    skills: "React, State Management, Responsive UI",
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Anything4Cloud · Full-time · Amsterdam (Remote)",
    period: "Aug 2022 - Jan 2023",
    description:
      "Designed and implemented landing pages and business websites using React, HTML, CSS, Bootstrap, Tailwind, and JavaScript with focus on performance and usability.",
    skills: "Front-End Development, React.js, JavaScript, Tailwind, Bootstrap",
  },
  {
    year: "2023",
    role: "Full-stack Developer",
    company: "DV Solutions · Freelance · Queensland (Remote)",
    period: "Jan 2023 - Dec 2023",
    description:
      "Developed e-commerce platforms using Next.js, MERN, and TypeScript. Improved performance with Redux and Tailwind, built Chart.js admin visualizations, and integrated Stripe payments.",
    skills: "Chart.js, Tailwind CSS, Next.js, MERN, TypeScript, Stripe",
  },
  {
    year: "2023",
    role: "Software Developer",
    company: "Cybage Software · Full-time · Pune (Hybrid)",
    period: "Dec 2023 - Present",
    description:
      "Working on multiple client projects with React.js, Next.js, and MERN stack. Building high-performance, scalable, responsive applications and interactive data visualizations.",
    skills: "React.js, Next.js, MERN, TypeScript, Redux.js, Tailwind CSS, Chart.js",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-full lg:flex-col lg:justify-center lg:px-24 lg:py-0"
    >
      <div className="mb-12 w-full md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase md:text-xl">
            The Journey
          </h2>
          <h3 className="font-archivo text-4xl font-black tracking-tighter text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Experience Timeline
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            A snapshot of how design thinking, frontend architecture, and product execution evolved through real client and product work.
          </p>
        </motion.div>
      </div>

      <div className="lg:hidden">
        <div className="relative ml-3 border-l border-white/15 pl-7">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative pb-10"
            >
              <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full border-2 border-zinc-500 bg-black transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="mb-2 block font-archivo text-4xl font-black tracking-tighter text-white select-none">
                {milestone.year}
              </span>
              <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-zinc-300 uppercase">
                {milestone.period}
              </p>
              <h4 className="mb-3 text-xl font-bold text-white drop-shadow-md">
                {milestone.role}
              </h4>
              <p className="mb-3 text-sm text-zinc-300">{milestone.company}</p>
              <p className="text-base font-light leading-relaxed text-zinc-400">
                {milestone.description}
              </p>
              <p className="mt-3 text-xs tracking-wide text-zinc-400">
                {milestone.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden w-full overflow-x-auto pb-10 no-scrollbar lg:block">
        <div className="relative flex min-w-max items-center pr-24">
          <div className="absolute left-0 top-5 h-px w-full -translate-y-1/2 bg-white/10" />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-5 h-[3px] w-full -translate-y-1/2 bg-gradient-to-r from-zinc-600 via-zinc-300 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />

          <div className="relative z-10 flex gap-12 md:gap-20 lg:gap-32">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative flex w-[300px] flex-shrink-0 flex-col items-start pt-16 md:w-[380px]"
              >
                <div className="absolute left-0 top-5 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-zinc-500 bg-black transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="ml-2 mt-4 border-l border-white/10 pl-6 transition-colors duration-300 group-hover:border-white/30">
                  <span className="mb-3 block font-archivo text-4xl font-black tracking-tighter text-white select-none md:text-6xl">
                    {milestone.year}
                  </span>
                  <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-zinc-300 uppercase">
                    {milestone.period}
                  </p>
                  <h4 className="mb-4 text-xl font-bold text-white drop-shadow-md md:text-2xl">
                    {milestone.role}
                  </h4>
                  <p className="mb-3 text-sm text-zinc-300 md:text-base">{milestone.company}</p>
                  <p className="text-base font-light leading-relaxed text-zinc-400 md:text-lg">
                    {milestone.description}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-zinc-400 md:text-sm">
                    {milestone.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
