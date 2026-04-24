"use client";

import { motion } from "framer-motion";

const partners = [
  "TechCorp Global",
  "InnovateX",
  "FutureScale",
  "DataDrive Inc",
  "CloudNexus",
  "AIVentures",
];

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-text-secondary uppercase tracking-wider text-sm font-semibold mb-4">
            Trusted By Leading Organizations
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Our Partners & Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-bg-alt rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-center">
                <div className="h-10 w-full bg-gradient-to-r from-text-secondary/20 to-text-secondary/10 rounded flex items-center justify-center">
                  <span className="text-text-secondary font-semibold text-sm">{partner}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}