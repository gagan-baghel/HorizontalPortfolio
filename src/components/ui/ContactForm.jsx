"use client";

import { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { SiPostman } from "react-icons/si";
import { createPortal } from "react-dom";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setShowSuccessDialog(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const payload = await response.json().catch(() => ({}));
        setStatus({
          type: "error",
          text: payload.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        text: "An error occurred while sending your message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_45px_-28px_rgba(255,255,255,0.38)] backdrop-blur-xl sm:p-8 md:p-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-500/20 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-zinc-700/20 blur-[80px]" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center space-x-3 text-2xl font-bold tracking-tight text-white drop-shadow-md sm:mb-8 sm:space-x-4 sm:text-3xl">
          <p>Drop a message</p>
          <GoMail className="text-zinc-400" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="group relative my-6">
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
              type="text"
              required
            />
            <label
              htmlFor="name"
              className={`pointer-events-none mb-10 absolute left-0 transition-all ${name ? "-top-3 text-xs text-zinc-200" : "top-4 text-base text-zinc-500"
                } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200`}
            >
              Your Name
            </label>
          </div>

          <div className="group relative my-6">
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
              type="email"
              required
            />
            <label
              htmlFor="email"
              className={`pointer-events-none mb-10 absolute left-0 transition-all ${email ? "-top-3 text-xs text-zinc-200" : "top-4 text-base text-zinc-500"
                } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200`}
            >
              Your Email
            </label>
          </div>

          <div className="group relative my-8">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
              rows={4}
              required
            />
            <label
              htmlFor="message"
              className={`pointer-events-none mb-10 absolute left-0 transition-all ${message ? "-top-3 text-xs text-zinc-200" : "top-4 text-base text-zinc-500"
                } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200`}
            >
              Share your thoughts
            </label>
          </div>

          <SubmitButton loading={loading} />
        </form>

        {status.type === "error" ? (
          <p
            className="mt-4 inline-flex rounded-full bg-rose-500/15 px-4 py-2 text-xs font-semibold tracking-wide text-rose-300 ring-1 ring-rose-500/40"
            role="alert"
          >
            {status.text}
          </p>
        ) : null}
      </div>

      <SuccessDialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </div>
  );
}

function SubmitButton({ loading }) {
  return (
    <button
      type="submit"
      className="group/modal-btn relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-100 py-3 text-sm font-bold tracking-[0.15em] text-black uppercase transition-all hover:bg-white hover:shadow-[0_0_40px_-10px_rgba(255,255,255,1)] sm:mt-8 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading}
    >
      <span className="text-center text-black">
        {loading ? "SENDING..." : "SEND INQUIRY"}
      </span>
      {!loading && <SiPostman className="h-4 w-4 text-black transition-transform duration-300 group-hover/modal-btn:translate-x-1" />}
    </button>
  );
}

function SuccessDialog({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close success dialog"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-success-title"
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-black/95 p-8 text-white shadow-[0_40px_120px_-35px_rgba(255,255,255,0.22)] sm:p-10"
      >
        <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full bg-zinc-700/25 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-zinc-500/20 blur-[80px]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl leading-none text-white transition hover:bg-white/15"
          aria-label="Close success dialog"
        >
          ×
        </button>

        <div className="relative">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-zinc-200">
            Message Received
          </div>
          <h3 id="contact-success-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Thank You
          </h3>
          <p className="mt-4 text-base leading-relaxed text-zinc-200 sm:text-lg">
            Thanks for reaching out. We have your details and will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
