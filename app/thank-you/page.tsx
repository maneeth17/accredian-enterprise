import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You - Accredian Enterprise",
  description: "Thank you for contacting Accredian. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-bg-alt flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Thank You!
        </h1>
        
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
          Your request has been submitted successfully. Our enterprise team will be 
          in touch with you shortly to schedule your personalized demo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/">
  <Button size="lg">
    <ArrowLeft className="w-5 h-5 mr-2" />
    Back to Home
            </Button>
          </Link>
          <Link href="/programs">
            <Button variant="secondary" size="lg">
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}