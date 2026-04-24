import DomainExpertise from "@/components/DomainExpertise";
import Partners from "@/components/Partners";

export const metadata = {
  title: "Programs - Accredian Enterprise",
  description: "Explore our comprehensive training programs designed to elevate your workforce.",
};

export default function ProgramsPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy text-center">Our Programs</h1>
          <p className="text-lg text-text-secondary text-center mt-4 max-w-2xl mx-auto">
            Comprehensive training programs designed to elevate your workforce across critical business domains.
          </p>
        </div>
      </div>
      <DomainExpertise />
      <Partners />
    </>
  );
}