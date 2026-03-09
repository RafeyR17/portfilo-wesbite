import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft, Globe, Database, Github,
    BarChart4, CheckCircle2,
    FileSearch, PenTool, Layout, Zap, CreditCard, Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/case-studies/Breadcrumbs";
import DetailSection from "@/components/case-studies/DetailSection";
import TestimonialSection from "@/components/case-studies/TestimonialSection";

export const metadata: Metadata = {
    title: "AI Resume Builder Case Study | Rafey Rashid",
    description: "Building an ATS-optimized AI SaaS for job seekers: AI Resume Builder.",
};

export default function AIResumeBuilderPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            <div className="max-w-5xl mx-auto">
                <Breadcrumbs currentPage="AI Resume Builder" />

                <Link href="/case-studies" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                </Link>

                {/* Hero Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 text-glow leading-tight">
                        AI Resume <span className="text-purple-400">Builder</span>
                    </h1>
                    <p className="text-xl text-purple-200/80 max-w-2xl font-sans">
                        ATS-optimized SaaS turning job descriptions into interview-winning applications in seconds.
                    </p>
                </div>

                {/* Project Hero Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium mb-16 border border-purple-500/30">
                    <Image
                        src="/images/case-studies/ai-resume-builder.png"
                        alt="AI Resume Builder Hero"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033]/60 to-transparent" />
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Role</p>
                        <p className="text-white font-bold">Lead Full-Stack Developer</p>
                    </div>
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Timeline</p>
                        <p className="text-white font-bold">2–3 months (2025)</p>
                    </div>
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20 md:col-span-2">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-2 font-semibold">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js 15", "Tailwind CSS", "Groq/OpenAI API", "Stripe", "Prisma", "PostgreSQL"].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs text-purple-200 font-medium whitespace-nowrap">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Challenge Section */}
                <DetailSection
                    title="The Challenge"
                    icon={<FileSearch className="w-6 h-6" />}
                >
                    <p>
                        Job seekers waste hours tailoring resumes and cover letters for each application — and most still get rejected by ATS systems. Existing tools were either too generic or too expensive. There was a clear need for a fast, intuitive, and highly effective optimization tool.
                    </p>
                </DetailSection>

                {/* Solution Section */}
                <DetailSection
                    title="The Solution"
                    icon={<PenTool className="w-6 h-6" />}
                    delay={0.1}
                >
                    <p className="mb-4">We built a fast, affordable SaaS that turns job descriptions into perfectly tailored, ATS-optimized resumes & cover letters in seconds:</p>
                    <ul className="space-y-4 list-none p-0">
                        {[
                            { icon: <Zap className="w-4 h-4" />, text: "User pastes job description → AI analyzes requirements & generates tailored content" },
                            { icon: <Layout className="w-4 h-4" />, text: "Multiple premium templates (modern, creative, executive)" },
                            { icon: <Layers className="w-4 h-4" />, text: "One-click PDF export with pixel-perfect formatting" },
                            { icon: <Database className="w-4 h-4" />, text: "Version history & edit-anytime persistence" },
                            { icon: <CreditCard className="w-4 h-4" />, text: "Free tier + tiered paid subscription via Stripe" },
                            { icon: <Layout className="w-4 h-4" />, text: "Clean, distraction-free UI with real-time preview" },
                        ].map((item, id) => (
                            <li key={id} className="flex items-start gap-3 text-gray-300">
                                <span className="mt-1 text-purple-400">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </DetailSection>

                {/* Impact Section */}
                <DetailSection
                    title="Results & Impact"
                    icon={<BarChart4 className="w-6 h-6" />}
                    delay={0.2}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            "Generated >5,000 resumes in first 3 months",
                            "Users report 2–3× more interview callbacks",
                            "ATS pass rate improved significantly (user data)",
                            "Monthly recurring revenue growing steadily",
                            "4.8/5 average rating on ease-of-use",
                            "Successful integration of multiple LLM providers",
                        ].map((impact, id) => (
                            <div key={id} className="flex items-center gap-3 text-purple-200">
                                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                <span>{impact}</span>
                            </div>
                        ))}
                    </div>
                </DetailSection>

                {/* Action Buttons */}
                <div className="mt-16 flex flex-wrap gap-6 justify-center">
                    <Link
                        href="#"
                        className="px-8 py-4 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center"
                    >
                        <Globe className="w-5 h-5 mr-2" />
                        Coming soon – waitlist open
                    </Link>
                    <Link
                        href="https://github.com/RafeyR17/AI-Powered-Resume-Cover-Letter-Builder-SaaS"
                        target="_blank"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        View Source
                    </Link>
                </div>

                {/* Testimonials */}
                <TestimonialSection
                    testimonials={[
                        {
                            text: "Rafey's tool landed me 3 interviews in a week – game-changer!",
                            author: "Ayesha Siddiqui",
                            role: "Marketing Manager",
                        },
                        {
                            text: "ATS-friendly and beautiful designs. Worth every penny.",
                            author: "Omar Farooq",
                            role: "Software Engineer",
                        }
                    ]}
                />
            </div>

            <Footer />
        </main>
    );
}
