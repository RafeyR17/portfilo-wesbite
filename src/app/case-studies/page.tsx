import { Metadata } from "next";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Case Studies | Rafey Rashid Portfolio",
    description: "In-depth breakdowns of real-world projects — challenges, solutions, tech stacks, and business impact by Rafey Rashid.",
};

import { PROJECTS } from "@/data/projects";

const CASE_STUDIES = PROJECTS.map(p => ({
    title: p.title,
    excerpt: p.excerpt,
    image: p.image,
    slug: p.id,
    tags: p.tags.slice(0, 4)
}));

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            {/* Header */}
            <div className="mb-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-glow">
                    Case <span className="text-purple-400">Studies</span>
                </h1>
                <p className="text-purple-200/60 text-lg md:text-xl max-w-3xl leading-relaxed">
                    In-depth breakdowns of real-world projects — challenges, solutions, tech stacks, and business impact.
                    Each project is a testament to high-performance engineering and premium design.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {CASE_STUDIES.map((study) => (
                    <CaseStudyCard
                        key={study.slug}
                        {...study}
                    />
                ))}
            </div>

            <Footer />
        </main>
    );
}
