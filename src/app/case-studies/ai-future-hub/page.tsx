import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft, Globe, Database, Server,
    BarChart4, CheckCircle2,
    Code2, Users, Rocket, BrainCircuit, GraduationCap, ClipboardList, Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/case-studies/Breadcrumbs";
import DetailSection from "@/components/case-studies/DetailSection";
import TestimonialSection from "@/components/case-studies/TestimonialSection";

export const metadata: Metadata = {
    title: "AI Future Hub Case Study | Rafey Rashid",
    description: "Building an AI-powered learning ecosystem for kids: AI Future Hub.",
};

export default function AIFutureHubPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            <div className="max-w-5xl mx-auto">
                <Breadcrumbs currentPage="AI Future Hub" />

                <Link href="/case-studies" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                </Link>

                {/* Hero Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 text-glow leading-tight">
                        AI Future <span className="text-purple-400">Hub</span>
                    </h1>
                    <p className="text-xl text-purple-200/80 max-w-2xl font-sans">
                        AI-powered learning ecosystem transforming STEM education for kids aged 10–17.
                    </p>
                </div>

                {/* Project Hero Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium mb-16 border border-purple-500/30">
                    <Image
                        src="/images/case-studies/ai-future-hub.png"
                        alt="AI Future Hub Hero"
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
                        <p className="text-white font-bold">4 months (2025)</p>
                    </div>
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20 md:col-span-2">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-2 font-semibold">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js 15", "NestJS", "FastAPI", "PostgreSQL", "Prisma", "Supabase Auth", "Groq API"].map(tech => (
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
                    icon={<Users className="w-6 h-6" />}
                >
                    <p>
                        Traditional coding & AI education platforms were boring or overly complex for kids aged 10–17. Teachers spent too much time grading repetitive tasks and lacked tools to give personalized feedback at scale. Engagement and completion rates were low.
                    </p>
                </DetailSection>

                {/* Solution Section */}
                <DetailSection
                    title="The Solution"
                    icon={<BrainCircuit className="w-6 h-6" />}
                    delay={0.1}
                >
                    <p className="mb-4">We built a full-stack, AI-powered learning ecosystem that makes learning AI fun, instant and trackable:</p>
                    <ul className="space-y-4 list-none p-0">
                        {[
                            { icon: <Code2 className="w-4 h-4" />, text: "Students submit code/tasks → AI instantly analyzes, grades & gives natural-language feedback + improvement suggestions" },
                            { icon: <ClipboardList className="w-4 h-4" />, text: "Teachers create lessons, assign challenges, monitor class progress via real-time dashboard" },
                            { icon: <Rocket className="w-4 h-4" />, text: "Gamified progression (badges, levels, leaderboards) to keep young learners motivated" },
                            { icon: <Lock className="w-4 h-4" />, text: "Secure role-based access (student / teacher / admin) via Supabase" },
                            { icon: <ClipboardList className="w-4 h-4" />, text: "Parent-friendly progress reports (PDF export)" },
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
                            "Pilot phase: 200+ active students across Lahore",
                            "Teacher grading time reduced by ~70%",
                            "Task completion rate increased from ~40% to 85%",
                            "Average student rating: 4.9/5 (parents & teachers)",
                            "Adopted as core curriculum part for ages 10–17",
                            "Successful deployment of real-time AI feedback loop",
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
                        href="https://www.aifuturehubschoolsystem.academy"
                        target="_blank"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center"
                    >
                        <Globe className="w-5 h-5 mr-2" />
                        Live Demo
                    </Link>
                    <button
                        disabled
                        className="px-8 py-4 rounded-full glass-premium border border-purple-500/30 text-purple-300 font-bold opacity-70 cursor-not-allowed flex items-center"
                    >
                        <Database className="w-5 h-5 mr-2" />
                        Private Codebase
                    </button>
                </div>

                {/* Testimonials */}
                <TestimonialSection
                    testimonials={[
                        {
                            text: "Rafey's AI platform transformed our classrooms – kids are excited about coding!",
                            author: "Principal Nadia Khan",
                            role: "Educator",
                        },
                        {
                            text: "Feedback is instant and personalized. A game-changer for education.",
                            author: "Ali Hassan",
                            role: "Teacher",
                        }
                    ]}
                />
            </div>

            <Footer />
        </main>
    );
}
