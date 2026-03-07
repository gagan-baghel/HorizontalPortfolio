import { motion } from "framer-motion";
import Image from "next/image";
import pm from "../assets/pm.jpeg";
import { ContactForm } from "./ui/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black px-6 pb-16 pt-24 font-space sm:px-10 md:flex md:min-h-screen md:items-center md:justify-center md:py-20 lg:py-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute left-4 top-6 z-0 pb-4 font-archivo text-5xl font-black tracking-tighter text-white sm:left-8 sm:text-6xl md:left-[10%] md:top-[10%] md:text-8xl"
      >
        CONTACT
      </motion.h2>

      <div className="z-10 mt-8 flex w-full max-w-6xl flex-col items-center gap-10 md:mt-20 md:flex-row md:gap-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="hidden w-full items-center justify-center md:flex md:w-1/2"
        >
          <Image
            src={pm}
            alt="Mailman Illustration"
            className="w-full max-w-xs rounded-xl object-cover opacity-80 sm:max-w-sm"
            sizes="(max-width: 768px) 90vw, 40vw"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
