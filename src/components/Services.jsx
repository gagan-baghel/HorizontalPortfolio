import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { IconCode, IconPalette, IconServer } from "@tabler/icons-react";

const services = [
    {
        title: "Frontend Engineering",
        description: "Architecting pixel-perfect, highly complex user interfaces with React, Next.js, and Framer Motion. Ensuring 60fps animations and flawless responsive design.",
        icon: <IconCode className="h-8 w-8 text-neutral-300" />,
    },
    {
        title: "UI/UX & Interaction",
        description: "Designing premium, cinematic aesthetic experiences. From deep user research to prototyping glowing glassmorphism and 3D architectural tilt layouts.",
        icon: <IconPalette className="h-8 w-8 text-neutral-300" />,
    },
    {
        title: "Backend & Systems",
        description: "Building robust Node.js server architectures, designing scalable database schemas, and integrating secure API layers to power the frontend seamlessly.",
        icon: <IconServer className="h-8 w-8 text-neutral-300" />,
    },
];

export function Services() {
  return (
    <section
      id="services"
      className="flex w-full flex-col justify-center px-6 py-20 font-space sm:px-10 lg:min-h-full lg:px-24 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-14 lg:mb-16"
      >
        <h2 className="mb-2 text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase md:text-xl">
          Capabilities
        </h2>
        <h3 className="font-archivo text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">
          My Core Services
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          End-to-end product execution from concept and interaction design to performant implementation and system-ready delivery.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group/card relative flex min-h-[18rem] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/80 md:min-h-[22rem] md:p-8"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-lg md:mb-8 md:h-16 md:w-16">
        {service.icon}
      </div>

      <div className="z-10">
        <h4 className="mb-3 text-xl font-bold tracking-tight text-white drop-shadow-md md:mb-4 md:text-2xl">
          {service.title}
        </h4>
        <p className="text-sm font-light leading-relaxed text-zinc-400 md:text-base">
          {service.description}
        </p>
      </div>
    </div>
  );
}
