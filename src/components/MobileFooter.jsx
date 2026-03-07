import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
];

export function MobileFooter({ onNavigate }) {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 px-6 pb-10 pt-14 font-space sm:px-10 lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-xl rounded-3xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_20px_45px_-35px_rgba(255,255,255,0.55)] backdrop-blur-xl"
      >
        <p className="text-xs font-semibold tracking-[0.26em] text-zinc-400 uppercase">
          Stay Connected
        </p>
        <h3 className="mt-3 font-archivo text-3xl font-black tracking-tight text-white">
          Let&apos;s build something elite.
        </h3>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate?.(link.id)}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.15em] text-zinc-100 uppercase backdrop-blur-md transition-colors hover:border-white/35 hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Gagan Baghel. Crafted with intent.</p>
        </div>
      </motion.div>
    </footer>
  );
}
