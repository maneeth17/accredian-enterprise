import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";

export const metadata = {
  title: "Contact - Accredian Enterprise",
  description: "Get in touch with our enterprise team to schedule a personalized demo.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 pb-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">Contact Us</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl">
            Ready to transform your workforce? Get in touch with our enterprise team.
          </p>
        </div>
      </div>
      <LeadCapture />
    </>
  );
}