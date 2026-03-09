import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft, Globe, Database, Server, Smartphone,
    BarChart4, ShoppingCart, Lock, Zap, CheckCircle2,
    Cpu, Layout, Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/case-studies/Breadcrumbs";
import DetailSection from "@/components/case-studies/DetailSection";
import TestimonialSection from "@/components/case-studies/TestimonialSection";

export const metadata: Metadata = {
    title: "Neon Void Case Study | Rafey Rashid",
    description: "How we built a high-tech e-commerce experience for Neon Void, specialized in high-end peripherals.",
};

export default function NeonVoidPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Navbar />

            <div className="max-w-5xl mx-auto">
                <Breadcrumbs currentPage="Neon Void" />

                <Link href="/case-studies" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                </Link>

                {/* Hero Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 text-glow leading-tight">
                        Neon <span className="text-purple-400">Void</span>
                    </h1>
                    <p className="text-xl text-purple-200/80 max-w-2xl font-sans">
                        Elite digital storefront for high-end tech peripherals & audio gear.
                    </p>
                </div>

                {/* Project Hero Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden glass-premium mb-16 border border-purple-500/30">
                    <Image
                        src="/images/case-studies/neon-void.png"
                        alt="Neon Void Hero"
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
                    icon={<Cpu className="w-6 h-6" />}
                >
                    <p>
                        A new brand specializing in high-end wireless headphones, keyboards, mice and audio gear needed a digital storefront that matched their “precision, clarity, presence” positioning — clean, futuristic, fast and unmistakably premium. They refused to look like every other tech dropshipping site.
                    </p>
                </DetailSection>

                {/* Solution Section */}
                <DetailSection
                    title="The Solution"
                    icon={<Layout className="w-6 h-6" />}
                    delay={0.1}
                >
                    <p className="mb-4">We created a sleek, performance-first e-commerce experience that feels like a high-end product launch:</p>
                    <ul className="space-y-4 list-none p-0">
                        {[
                            { icon: <Zap className="w-4 h-4" />, text: "Dark, neon-accented UI with micro-animations on product interaction" },
                            { icon: <CheckCircle2 className="w-4 h-4" />, text: "Advanced filtering (by feature, price, connectivity, color)" },
                            { icon: <ShoppingCart className="w-4 h-4" />, text: "Ultra-smooth cart drawer & one-page checkout (Stripe)" },
                            { icon: <Layers className="w-4 h-4" />, text: "3D product viewer fallback + multiple high-res angles" },
                            { icon: <Server className="w-4 h-4" />, text: "Admin dashboard for stock, orders & promo codes" },
                            { icon: <Zap className="w-4 h-4" />, text: "Blazing-fast load times via Next.js static generation + image optimization" },
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
                            "Launched with 45+ curated SKUs",
                            "First-month revenue exceeded projections by 210%",
                            "Conversion rate: 4.8% (top quartile electronics benchmark)",
                            "Average order value: 35% higher than industry benchmark",
                            "Page speed score: 94–97 on Lighthouse",
                            "Client feedback: 'Feels like a $100k agency site'",
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
                        href="https://neonvoid.vercel.app"
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
                            text: "The animations and UI blew us away – our brand presence is now elite!",
                            author: "Zain Malik",
                            role: "CEO, Neon Void",
                        },
                        {
                            text: "Rafey delivered a site that's as innovative as our products. Sales up big time.",
                            author: "Fatima Ahmed",
                            role: "Marketing Lead",
                        }
                    ]}
                />
            </div>

            <Footer />
        </main>
    );
}
