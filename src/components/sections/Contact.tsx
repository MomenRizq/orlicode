"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import type { Dictionary } from "@/i18n/getDictionary";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Contact({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const f = dict.contact.form;

  const services = [
    "Mobile App Development", "Web Development", "Dashboard / Admin Panel",
    "ERP System", "SaaS Platform", "AI Solutions", "UI/UX Design",
    "Cloud Solutions", "Custom Software", "Other",
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = [
      `*${f.name}:* ${form.name}`,
      `*${f.company}:* ${form.company}`,
      `*${f.email}:* ${form.email}`,
      `*${f.service}:* ${form.service}`,
      `*${f.message}:* ${form.message}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 start-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent 70%)" }} />

      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm font-medium text-brand-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
              {dict.contact.eyebrow}
            </div>
            <h2 className="font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              {dict.contact.title}
            </h2>
            <p className="text-lg text-ink-muted">{dict.contact.subtitle}</p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: FiMail, label: dict.contact.email_label, value: "it@orlignsa.com", href: "mailto:it@orlignsa.com" },
              { icon: FiPhone, label: dict.contact.phone_label, value: "+966558351080", href: "tel:+966558351080" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={href} href={href} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-ink-muted transition-all duration-200 group-hover:border-brand-violet/40 group-hover:bg-brand-violet/10 group-hover:text-brand-glow">
                  <Icon size={17} />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-ink-faint">{label}</span>
                  <span className="text-sm font-medium text-ink group-hover:text-brand-glow transition-colors duration-200">{value}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-violet/20 text-3xl">✓</div>
              <p className="font-jakarta text-xl font-bold text-ink">{f.success}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  { name: "name", placeholder: f.name, type: "text" },
                  { name: "company", placeholder: f.company, type: "text" },
                ].map((field) => (
                  <input
                    key={field.name}
                    required
                    name={field.name}
                    type={field.type}
                    value={form[field.name as "name" | "company"]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand-violet/50 focus:outline-none focus:bg-white/[0.05] transition-colors duration-200"
                  />
                ))}
              </div>
              <input
                required
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={f.email}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand-violet/50 focus:outline-none transition-colors duration-200"
              />
              <select
                required
                name="service"
                value={form.service}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-bg px-4 py-3.5 text-sm text-ink-muted focus:border-brand-violet/50 focus:outline-none transition-colors duration-200"
              >
                <option value="">{f.service}</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={f.message}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand-violet/50 focus:outline-none transition-colors duration-200"
              />
              <AnimatedButton type="submit" className="mt-2 self-start !px-8 !py-4">
                {f.submit} <FiArrowRight size={15} />
              </AnimatedButton>
            </>
          )}
        </motion.form>
      </Container>
    </section>
  );
}
