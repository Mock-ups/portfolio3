"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Magnetic } from "./motion/Magnetic";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const projectTypes = [
  "Residential",
  "Hospitality",
  "Workspace",
  "Something else",
];

const labelCls =
  "font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite";
const fieldCls =
  "w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-graphite/60 focus:border-ink transition-colors";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof values>(key: K, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
    if (errors[key as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Enter a valid email address.";
    if (values.message.trim().length < 10)
      e.message = "A sentence or two about your project helps.";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // No backend yet — hand off to the visitor's mail client.
    const subject = `New enquiry — ${values.type} project`;
    const body = `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.type}\n\n${values.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="border border-line p-8 md:p-10"
        >
          <p className="eyebrow mb-5">Message ready</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            Thank you, {values.name.split(" ")[0] || "there"}.
          </h3>
          <p className="mt-4 max-w-[48ch] text-graphite leading-relaxed">
            Your email app should have opened with the message drafted to us. If
            it didn&rsquo;t, write to us directly at{" "}
            <a href={`mailto:${site.email}`} className="ulink text-ink">
              {site.email}
            </a>
            . We reply within two working days.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-8 btn"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className={labelCls}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn(fieldCls, errors.name && "border-redline")}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-redline">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={cn(fieldCls, errors.email && "border-redline")}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-redline">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="type" className={labelCls}>
              Project type
            </label>
            <select
              id="type"
              name="type"
              value={values.type}
              onChange={(e) => update("type", e.target.value)}
              className={cn(fieldCls, "appearance-none cursor-pointer")}
            >
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelCls}>
              Tell us about the space
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(fieldCls, "resize-none", errors.message && "border-redline")}
              placeholder="Location, rooms, timeline, and what you're hoping for…"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-redline">
                {errors.message}
              </p>
            )}
          </div>

          <Magnetic>
            <button type="submit" className="btn btn--solid">
              Send enquiry
              <span className="btn__arrow" aria-hidden>
                →
              </span>
            </button>
          </Magnetic>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
