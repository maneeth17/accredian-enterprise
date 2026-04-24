"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-bg-alt via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-navy">Enterprise Training Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Upskill Your Workforce for the{" "}
              <span className="text-gold">AI Era</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl"
            >
              Transform your organization with cutting-edge training programs 
              designed by industry experts. Empower your teams to lead in the age of AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="group cursor-pointer">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="secondary" size="lg" className="cursor-pointer">
                  View Programs
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-sm text-text-secondary">10K+ Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold" />
                <span className="text-sm text-text-secondary">95% Success Rate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract decorative elements */}
            <div className="relative w-full aspect-square">
              {/* Main circle */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-navy/10 to-gold/10 rounded-full"
              />

              {/* Floating cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-10 right-10 bg-white rounded-xl shadow-2xl p-6 w-48"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-navy" />
                  </div>
                  <span className="font-semibold text-navy">Growth</span>
                </div>
                <div className="h-2 bg-bg-alt rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-full bg-gold rounded-full"
                  />
                </div>
                <span className="text-sm text-text-secondary mt-2 block">+75% this quarter</span>
              </motion.div>

              {/* Second floating card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-20 left-10 bg-white rounded-xl shadow-2xl p-6 w-44"
              >
                <div className="text-3xl font-bold text-navy mb-1">200+</div>
                <div className="text-sm text-text-secondary">Sessions Delivered</div>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-6 w-2 rounded ${i <= 4 ? "bg-gold" : "bg-border"}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Decorative dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="absolute w-3 h-3 bg-gold/30 rounded-full"
                  style={{
                    top: `${20 + i * 12}%`,
                    right: `${10 + (i % 3) * 15}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}