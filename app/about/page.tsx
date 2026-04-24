import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Target, Eye, Heart } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us - Accredian Enterprise",
  description: "Learn about Accredian's mission to transform enterprise training for the AI era.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-28 pb-16 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-navy">About Accredian</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl">
            Empowering enterprises with cutting-edge training programs designed for the AI era.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-text-secondary mb-4">
                Founded in 2018, Accredian was born from a simple vision: to bridge the gap between 
                enterprise training and the rapidly evolving demands of the AI era.
              </p>
              <p className="text-text-secondary mb-4">
                What started as a small consultancy has grown into a global enterprise training 
                platform, trusted by Fortune 500 companies and fast-growing startups alike.
              </p>
              <p className="text-text-secondary">
                Today, we continue to innovate and push the boundaries of corporate learning, 
                helping organizations transform their workforce for tomorrow's challenges.
              </p>
            </div>

            <div className="bg-bg-alt rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy">10K+</div>
                  <div className="text-sm text-text-secondary">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy">200+</div>
                  <div className="text-sm text-text-secondary">Sessions Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy">5K+</div>
                  <div className="text-sm text-text-secondary">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy">50+</div>
                  <div className="text-sm text-text-secondary">Enterprise Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Our Mission</h3>
              <p className="text-text-secondary">
                To empower every organization with the skills and knowledge needed to thrive in the age of AI.
              </p>
            </div>
            <div className="text-center p-6">
              <Eye className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Our Vision</h3>
              <p className="text-text-secondary">
                To be the global leader in enterprise AI training and transformation.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Our Values</h3>
              <p className="text-text-secondary">
                Innovation, Excellence, and Customer-Centricity in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Workforce?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join the hundreds of enterprises that have already taken the first step.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}