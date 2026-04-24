"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Clock } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const benefits = [
  {
    icon: Award,
    title: "Industry Recognized",
    description: "Our certifications are recognized by leading enterprises worldwide.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry veterans with 15+ years of experience.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "95% of our participants see career growth within 6 months.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Self-paced modules that fit your busy schedule.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Accredian Advantage"
          description="Join thousands of professionals who have transformed their careers through our training programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
              <p className="text-text-secondary text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}