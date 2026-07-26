"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton({ label }: { label: string }) {
  const href = buildWhatsAppLink();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] md:bottom-8 md:left-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
