"use client";

import { motion } from "framer-motion";
import { Lightbulb, Sparkles, GraduationCap, BarChart3 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import ProgramCard from "./ui/ProgramCard";

const programs = [
  {
    icon: Lightbulb,
    title: "Product & Innovation Hub",
    description:
      "Master product development lifecycle, agile methodologies, and innovation strategies to drive organizational growth.",
    color: "bg-gold",
  },
  {
    icon: Sparkles,
    title: "Gen-AI Mastery",
    description:
      "Comprehensive training on generative AI, LLMs, and prompt engineering to leverage AI for business transformation.",
    color: "bg-blue-100",
  },
  {
    icon: GraduationCap,
    title: "Leadership Elevation",
    description:
      "Executive coaching and leadership development programs designed to build the next generation of industry leaders.",
    color: "bg-green-100",
  },
  {
    icon: BarChart3,
    title: "Tech & Data Insights",
    description:
      "Data analytics, technical skills, and emerging technologies training for tech-forward organizational success.",
    color: "bg-purple-100",
  },
];

export default function DomainExpertise() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Expertise"
          title="Domain Excellence"
          description="Comprehensive training programs designed to elevate your workforce across critical business domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProgramCard
                icon={program.icon}
                title={program.title}
                description={program.description}
                color={program.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}