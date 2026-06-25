"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/ui/icons";

/*
 * Two-step conversational contact form.
 *   Step 1 — pick what you're building (chips, better lead qualification).
 *   Step 2 — contact details, with calm inline validation.
 * Submit button morphs Send → Sending… → Sent ✓ (no bare spinner).
 *
 * No backend is wired yet: handleSubmit simulates the request. Replace the
 * timeout in `submit()` with a POST to your form endpoint / email service.
 * Fully keyboard-navigable and screen-reader labeled.
 */

const PROJECT_TYPES = [
  "Website / platform",
  "Business app",
  "AI / ML",
  "Cloud",
  "Other",
] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const reduce = useReducedMotion();
  const uid = useId();
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key as keyof Errors]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Add your name.";
    if (!values.email.trim()) next.email = "Add your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Check this email address.";
    if (!values.message.trim()) next.message = "Tell us a little about it.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message,
          projectType,
        }),
      });
      if (!res.ok) throw new Error("api error");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const stepTransition = {
    initial: { opacity: 0, x: reduce ? 0 : 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduce ? 0 : -16 },
    transition: { duration: 0.3, ease: EASE_OUT },
  };

  if (status === "sent") {
    return (
      <div
        className="flex flex-col items-start gap-4 border border-graphite-line bg-black p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="t-eyebrow text-orange">Message sent</p>
        <h3 className="t-h1 text-white">Thanks — we&apos;ll be in touch.</h3>
        <p className="t-body measure text-gray-mid">
          We read every message and usually reply within one business day. If
          it&apos;s urgent, email us at{" "}
          <a
            href="mailto:hello@thestralis.com"
            className="text-orange hover:underline"
          >
            hello@thestralis.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="border border-graphite-line bg-black p-8 md:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="t-mono text-gray-mid">
          {String(step + 1).padStart(2, "0")} / 02
        </span>
        <span className="t-mono text-gray-mid">
          {step === 0 ? "What you're building" : "Your details"}
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === 0 ? (
          <motion.div key="step1" {...stepTransition}>
            <fieldset>
              <legend className="t-h2 mb-6 text-white">
                What are you building?
              </legend>
              <div className="flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type) => {
                  const selected = projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setProjectType(type)}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-[0.9375rem] transition-colors duration-150 [transition-timing-function:var(--ease-out-brand)] active:scale-[0.97]",
                        selected
                          ? "border-orange bg-orange text-black"
                          : "border-white/20 text-gray-light hover:border-white hover:text-white",
                      )}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-10">
              <button
                type="button"
                disabled={!projectType}
                onClick={() => setStep(1)}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange px-6 py-3 text-[0.9375rem] font-medium text-black transition-[transform,background-color,opacity] duration-150 [transition-timing-function:var(--ease-out-brand)] hover:bg-orange-deep active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="step2" {...stepTransition}>
            <div className="flex flex-col gap-7">
              <Field
                id={`${uid}-name`}
                label="Name"
                required
                value={values.name}
                onChange={(v) => set("name", v)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id={`${uid}-email`}
                label="Email"
                type="email"
                required
                value={values.email}
                onChange={(v) => set("email", v)}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                id={`${uid}-company`}
                label="Company (optional)"
                value={values.company}
                onChange={(v) => set("company", v)}
                autoComplete="organization"
              />
              <Field
                id={`${uid}-message`}
                label="What are you building?"
                required
                multiline
                value={values.message}
                onChange={(v) => set("message", v)}
                error={errors.message}
              />
            </div>

            <div className="mt-9 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="text-[0.9375rem] text-gray-mid transition-colors hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-[0.9375rem] font-medium text-black transition-[transform,background-color] duration-150 [transition-timing-function:var(--ease-out-brand)] hover:bg-orange-deep active:scale-[0.97] disabled:opacity-70"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "error"
                    ? "Try again"
                    : "Start a project"}
              </button>
              {status === "error" && (
                <span className="t-body-sm text-orange" role="alert">
                  Something went wrong. Please retry.
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  multiline = false,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const shared = cn(
    "w-full bg-transparent pb-2.5 text-base text-white placeholder:text-gray-dark",
    "border-b transition-colors duration-150 [transition-timing-function:var(--ease-out-brand)]",
    "focus:outline-none",
    error ? "border-orange" : "border-graphite-line focus:border-orange",
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="t-eyebrow text-gray-mid">
        {label}
        {required && <span className="ml-1 text-orange">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={3}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(shared, "resize-none")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={shared}
        />
      )}
      {error && (
        <span id={`${id}-error`} className="t-body-sm text-orange" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
