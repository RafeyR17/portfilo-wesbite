"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Trophy, Laptop, Medal, Rocket, FileBadge } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const JOURNEY = [
    {
        year: "2023",
        title: "CS50: Introduction to Computer Science (Harvard University)",
        desc: "Completed Harvard's flagship CS50 course — built rock-solid foundations in programming, algorithms, data structures, web basics (HTML/CSS/JS/Python/SQL), and computational thinking. This ignited my full-stack journey and taught me the power of structured problem-solving.",
        icon: GraduationCap,
    },
    {
        year: "2023–2025",
        title: "Self-Taught Mastery in Modern Full-Stack Development",
        desc: "Mastered production-grade stacks through intensive, project-heavy courses: React 18+ & Next.js (Zero to Mastery, Frontend Masters), enterprise Node.js/NestJS (Udemy), advanced animations (Framer Motion, GSAP), and Data layers (Prisma, PostgreSQL). Translated theory into 10+ shipped e-commerce & web apps.",
        icon: Laptop,
    },
    {
        year: "2024–2025",
        title: "National University / Singapore Programming Tournament",
        desc: "Competed in a rigorous national/international programming contest (university-level with Singapore participation) — achieved 8th place worldwide. Proved elite algorithmic skills, pressure performance, and creative problem-solving against top global talent.",
        icon: Trophy,
    },
    {
        year: "2025",
        title: "CS50x 2025: Refreshed Harvard Certification",
        desc: "Re-completed the updated 2025 edition (new lectures, problem sets, AI tools like CS50's duck debugger) — earned a fresh certificate to stay ahead on evolving CS concepts, modern tooling, and best practices in 2026-era development.",
        icon: FileBadge,
    },
    {
        year: "2025",
        title: "Top 50 Coder in Pakistan (GitHub Recognition)",
        desc: "Recognized as one of Pakistan's top 50 coders by GitHub — awarded for consistent high-quality contributions, repositories, stars/forks, and community impact. Validates early open-source excellence and code craftsmanship.",
        icon: Medal,
    },
    {
        year: "2025–Present",
        title: "Freelance Full-Stack Engineer",
        desc: "Delivering immersive, high-performance digital experiences: 10+ projects (e-commerce with Shopify/Next.js, interactive web apps). Obsessed with 98–100 Lighthouse optimization, scalable architecture, and client-focused results. Open for collaborations that push boundaries.",
        icon: Rocket,
    },
];

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return; // Disable GSAP on mobile
        const ctx = gsap.context(() => {
            // 1. Draw central timeline line progressively
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { height: 0 },
                    {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 95%",
                            end: "bottom 90%",
                            scrub: 1.5,
                        },
                    }
                );
            }

            // 2. Animate cards (slide in from sides + fade up)
            const cards = sectionRef.current?.querySelectorAll(".timeline-card");
            cards?.forEach((card, index) => {
                const isLeft = index % 2 === 0;

                gsap.from(card, {
                    opacity: 0,
                    x: isLeft ? -50 : 50,
                    y: 30,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 92%",
                        toggleActions: "play none none reverse",
                    },
                });

                // 3. Animate the center dot + icon for each card
                const dot = card.parentElement?.querySelector(".timeline-dot");
                if (dot) {
                    gsap.from(dot, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 92%",
                            toggleActions: "play none none reverse",
                        },
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section ref={sectionRef} id="about" className="py-32 px-4 md:px-10 relative overflow-hidden">
            {/* Background glow for depth - smaller on mobile */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[300px] h-[300px] blur-[80px]' : 'w-[800px] h-[800px] blur-[150px]'} bg-purple-900/10 rounded-full pointer-events-none`} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-white text-glow">
                        My Journey in <span className="text-purple-400">Code</span>
                    </h2>
                    <p className="text-purple-200/80 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-sans font-light">
                        From Harvard foundations to global recognition — a self-driven path of
                        learning, competition, and shipping real-world projects that shape my
                        expertise today.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative max-w-5xl mx-auto mt-12 md:mt-20">
                    {/* Central Line (Draws on scroll) */}
                    <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-purple-900/40 rounded-full">
                        <div
                            ref={lineRef}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 via-purple-600 to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] origin-top"
                        />
                    </div>

                    {/* Timeline Entries */}
                    <div className="space-y-12 md:space-y-24">
                        {JOURNEY.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex items-center w-full">
                                    {/* Center Dot + Icon */}
                                    <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] z-20 timeline-dot group-hover:scale-110 transition-all duration-300">
                                        <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping opacity-20" />
                                        <Icon className="text-purple-300 text-base md:text-xl relative z-10" />
                                    </div>

                                    {/* Card Container */}
                                    <div
                                        className={`w-full md:w-1/2 pl-[60px] md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16 md:ml-auto"
                                            }`}
                                    >
                                        <motion.div 
                                            className="timeline-card group cursor-default relative"
                                            whileHover={isMobile ? {} : {
                                                scale: 1.05,
                                                y: -6,
                                                transition: { duration: 0.3, ease: "easeOut" }
                                            }}
                                            whileFocus={isMobile ? {} : { scale: 1.05, y: -6 }}
                                        >
                                            <div className="glass-card hover-lift hover-glow p-6 md:p-10 rounded-2xl md:rounded-3xl border border-purple-500/20 backdrop-blur-2xl bg-purple-950/20 relative overflow-hidden">

                                                {/* Holographic edge shimmer (CSS trick) */}
                                                <div className="absolute inset-[-1px] rounded-2xl md:rounded-3xl bg-gradient-to-tr from-transparent via-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[1px]" />

                                                {/* Hover glow effect behind card text */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />

                                                {/* Year Badge */}
                                                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 md:mb-6">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                                    <span className="text-[10px] md:text-xs font-bold text-purple-300 tracking-[0.15em] md:tracking-[0.2em] font-sans">
                                                        {item.year}
                                                    </span>
                                                </div>

                                                {/* Content */}
                                                <h3 className="text-lg md:text-3xl font-serif font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-purple-200 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <motion.p 
                                                    className="text-white/70 leading-relaxed font-sans text-xs md:text-base font-light"
                                                    whileHover={isMobile ? {} : { scale: 1.02 }}
                                                    whileTap={isMobile ? {} : { scale: 0.98 }}
                                                >
                                                    {item.desc}
                                                </motion.p>

                                                {/* Optional interactive particles on hover (css trick) */}
                                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/10 rounded-2xl md:rounded-3xl transition-colors duration-700 pointer-events-none" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
