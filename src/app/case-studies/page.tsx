import { Metadata } from "next";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import Breadcrumbs from "@/components/case-studies/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Case Studies | Rafey Rashid Portfolio",
    description: "In-depth breakdowns of real-world projects — challenges, solutions, tech stacks, and business impact by Rafey Rashid.",
};

const CASE_STUDIES = [
    {
        title: "Natural Glow",
        excerpt: "A high-performance e-commerce platform for organic cosmetics, focused on luxury and trust.",
        image: "/images/case-studies/natural-glow.png",
        slug: "natural-glow",
        tags: ["Next.js 15", "Stripe", "Prisma", "PostgreSQL"],
    },
    {
        title: "Neon Void",
        excerpt: "Building an elite tech storefront for high-end peripherals with micro-animations and neon UI.",
        image: "/images/case-studies/neon-void.png",
        slug: "neon-void",
        tags: ["Next.js 15", "Tailwind CSS", "Stripe", "Vercel"],
    },
    {
        title: "AI Future Hub",
        excerpt: "AI-powered educational platform for children, automating grading and personalizing feedback.",
        image: "/images/case-studies/ai-future-hub.png",
        slug: "ai-future-hub",
        tags: ["Next.js 15", "NestJS", "FastAPI", "OpenAI"],
    },
    {
        title: "AI Resume Builder",
        excerpt: "A conversion-focused SaaS tool that tailors job applications using ATS-optimized AI logic.",
        image: "/images/case-studies/ai-resume-builder.png",
        slug: "ai-resume-builder",
        tags: ["Next.js 15", "Stripe", "Groq", "PostgreSQL"],
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            {/* Breadcrumbs */}
            <Breadcrumbs />

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
