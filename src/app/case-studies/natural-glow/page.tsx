import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft, Globe, Database, Server, Smartphone,
    BarChart4, ShoppingCart, Lock, Zap, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/case-studies/Breadcrumbs";
import DetailSection from "@/components/case-studies/DetailSection";
import TestimonialSection from "@/components/case-studies/TestimonialSection";

export const metadata: Metadata = {
    title: "Natural Glow Case Study | Rafey Rashid",
    description: "How we built a high-performance e-commerce platform for Natural Glow, a luxury organic cosmetics brand.",
};

export default function NaturalGlowPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            <div className="max-w-5xl mx-auto">
                <Breadcrumbs currentPage="Natural Glow" />

                <Link href="/case-studies" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                </Link>

                {/* Hero Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 text-glow leading-tight">
                        Natural <span className="text-purple-400">Glow</span>
                    </h1>
                    <p className="text-xl text-purple-200/80 max-w-2xl font-sans">
                        Luxury herbal cosmetics & organic skincare digital transformation.
                    </p>
                </div>

                {/* Project Hero Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium mb-16 border border-purple-500/30">
                    <Image
                        src="/images/case-studies/natural-glow.png"
                        alt="Natural Glow Hero"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Role</p>
                        <p className="text-white font-bold">Lead Full-Stack Developer & Designer</p>
                    </div>
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Timeline</p>
                        <p className="text-white font-bold">3 months (2025)</p>
                    </div>
                    <div className="glass-premium p-6 rounded-2xl border border-purple-500/20 md:col-span-2">
                        <p className="text-purple-400 text-xs uppercase tracking-widest mb-2 font-semibold">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js 15", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL", "Vercel"].map(tech => (
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
                    icon={<Globe className="w-6 h-6" />}
                >
                    <p>
                        A growing local brand of natural herbal oils, cosmetics and shampoos needed to move online — but not just any store. They wanted a digital experience that felt as pure, elegant and trustworthy as their products. Generic templates wouldn’t do. Conversion had to be high, mobile experience flawless, and the overall feel premium from the first second.
                    </p>
                </DetailSection>

                {/* Solution Section */}
                <DetailSection
                    title="The Solution"
                    icon={<Server className="w-6 h-6" />}
                    delay={0.1}
                >
                    <p className="mb-4">We built a high-performance, conversion-optimized e-commerce platform designed to feel luxurious yet approachable:</p>
                    <ul className="space-y-4 list-none p-0">
                        {[
                            { icon: <Zap className="w-4 h-4" />, text: "Hero product showcase with smooth zoom, 360° views & lifestyle imagery" },
                            { icon: <CheckCircle2 className="w-4 h-4" />, text: "Intuitive filtering, search & category navigation" },
                            { icon: <ShoppingCart className="w-4 h-4" />, text: "Frictionless cart & checkout powered by Stripe (cards + local payment methods)" },
                            { icon: <Smartphone className="w-4 h-4" />, text: "Mobile-first responsive layout with buttery-smooth transitions" },
                            { icon: <Server className="w-4 h-4" />, text: "Simple yet powerful admin dashboard for inventory, orders & basic analytics" },
                            { icon: <Lock className="w-4 h-4" />, text: "SEO-optimized product pages + fast static generation" },
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
                            "Launched with 60+ SKUs",
                            "First 30 days revenue: 2.8× higher than physical store average",
                            "Conversion rate: 4.2% (well above beauty & wellness benchmark)",
                            "Mobile load time: <1.8 s → excellent retention & lower bounce rate",
                            "Client reported 40–55% increase in repeat customers",
                            "5-star feedback on design & checkout experience",
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
                        href="https://naturalglow.vercel.app"
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
                            text: "Rafey's design made our online store feel like a spa experience – sales skyrocketed!",
                            author: "Sara Khan",
                            role: "Founder, Natural Glow",
                        },
                        {
                            text: "Fast, beautiful, and easy to manage. Highly recommend for any e-commerce startup.",
                            author: "Ahmed Raza",
                            role: "Co-Founder",
                        }
                    ]}
                />
            </div>

            <Footer />
        </main>
    );
}
