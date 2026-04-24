"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export default function ProgramCard({
  icon: Icon,
  title,
  description,
  color = "bg-gold",
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div
        className={`w-14 h-14 md:w-16 md:h-16 ${color} rounded-full flex items-center justify-center mb-4`}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-navy" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-text-secondary text-sm md:text-base">{description}</p>
    </motion.div>
  );
}