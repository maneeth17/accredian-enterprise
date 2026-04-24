"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Activity } from "lucide-react";

const stats = [
  { icon: Users, value: "10K+", label: "Professionals Trained" },
  { icon: BookOpen, value: "200+", label: "Sessions Delivered" },
  { icon: Activity, value: "5K+", label: "Active Learners" },
];

export default function StatsRibbon() {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}