"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Magnetic } from "./motion/Magnetic";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const ERROR = "#ea384c";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const projectTypes = [
  "Residential visualization",
  "Commercial visualization",
  "Interior render",
  "Full project / freelance",
  "Something else",
];

const labelCls =
  "block text-xs font-semibold uppercase tracking-[0.12em] text-slate mb-2";
const fieldCls =
  "w-full bg-bg border border-line rounded-md px-4 py-3 text-dark placeholder:text-slate/60 focus:border-dark focus:outline-none transition-colors";

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

    const subject = `New enquiry — ${values.type}`;
    const body = `Name: ${values.name}\nEmail: ${values.email}\nType: ${values.type}\n\n${values.message}`;
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
          className="border border-line rounded-lg p-8 md:p-10"
        >
          <p className="subtitle mb-5">
            <span className="subtitle__dot" />
            Message ready
          </p>
          <h3 className="h-lg">Thank you, {values.name.split(" ")[0] || "there"}.</h3>
          <p className="mt-4 max-w-[48ch] text-slate leading-relaxed">
            Your email app should have opened with the message drafted. If it
            didn&rsquo;t, write to me directly at{" "}
            <a href={`mailto:${site.email}`} className="ulink text-dark">
              {site.email}
            </a>
            . I reply within two days.
          </p>
          <button type="button" onClick={() => setSent(false)} className="mt-8 btn btn--outline">
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
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
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
                className={fieldCls}
                style={errors.name ? { borderColor: ERROR } : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs" style={{ color: ERROR }}>
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
                className={fieldCls}
                style={errors.email ? { borderColor: ERROR } : undefined}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs" style={{ color: ERROR }}>
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
              Tell me about the project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(fieldCls, "resize-none")}
              style={errors.message ? { borderColor: ERROR } : undefined}
              placeholder="Project type, location, timeline, and what you're hoping for…"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs" style={{ color: ERROR }}>
                {errors.message}
              </p>
            )}
          </div>

          <Magnetic>
            <button type="submit" className="btn">
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
