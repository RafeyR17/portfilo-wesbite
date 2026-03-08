"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Atom, Lightbulb, FileCode2, FileCode, Palette, Film, Layout, Brush,
    Server, Box, Layers, TerminalSquare, Zap, Beaker,
    Database, Network, Triangle, Globe, GitBranch, Github, ShoppingCart
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
    {
        title: "Frontend Magic",
        description: "Dynamic, SEO-friendly apps with butter-smooth animations",
        color: "#c084fc",
        skills: [
            { name: "React.js", icon: Atom, color: "#61DAFB", desc: "Dynamic, component-driven UIs" },
            { name: "Next.js", icon: Lightbulb, color: "#ffffff", desc: "SEO-friendly, full-stack React" },
            { name: "TypeScript", icon: FileCode2, color: "#3178C6", desc: "Type-safe logic & scalability" },
            { name: "JavaScript", icon: FileCode, color: "#F7DF1E", desc: "Core language mastery" },
            { name: "Tailwind CSS", icon: Palette, color: "#06B6D4", desc: "Rapid, consistent styling" },
            { name: "Framer Motion", icon: Film, color: "#0055FF", desc: "Smooth declarative animations" },
            { name: "GSAP", icon: () => <span className="text-lg font-black tracking-tighter">GS</span>, color: "#88CE02", desc: "Scroll magic & timelines" },
            { name: "HTML5", icon: Layout, color: "#E34F26", desc: "Semantic, accessible markup" },
            { name: "CSS3", icon: Brush, color: "#1572B6", desc: "Advanced layouts & effects" },
        ],
    },
    {
        title: "Backend Power",
        description: "Scalable servers, fast APIs, real-time features & secure logic",
        color: "#a855f7",
        skills: [
            { name: "Node.js", icon: Server, color: "#339933", desc: "Event-driven servers & APIs" },
            { name: "Express.js", icon: Box, color: "#ffffff", desc: "Lightweight, flexible routing" },
            { name: "NestJS", icon: Layers, color: "#E0234E", desc: "Enterprise-grade TypeScript" },
            { name: "Python", icon: TerminalSquare, color: "#3776AB", desc: "Versatile & powerful scripting" },
            { name: "FastAPI", icon: Zap, color: "#009688", desc: "Async, high-perf APIs" },
            { name: "Django", icon: Layers, color: "#092E20", desc: "Rapid full-featured backend" },
            { name: "Flask", icon: Beaker, color: "#ffffff", desc: "Lightweight Python backend" },
        ],
    },
    {
        title: "Data & Storage",
        description: "Reliable, performant data handling — structured to flexible",
        color: "#d8b4fe",
        skills: [
            { name: "PostgreSQL", icon: Database, color: "#4169E1", desc: "Advanced relational + JSON" },
            { name: "MySQL", icon: Database, color: "#4479A1", desc: "Fast & reliable reads" },
            { name: "MongoDB", icon: Database, color: "#47A248", desc: "Flexible NoSQL schemas" },
            { name: "Prisma", icon: Network, color: "#2D3748", desc: "Type-safe ORM & migrations" },
            { name: "Redis", icon: Zap, color: "#DC382D", desc: "Caching & real-time pub/sub" },
        ],
    },
    {
        title: "Deployment & Tools",
        description: "Ship fast, collaborate seamlessly, scale globally",
        color: "#e9d5ff",
        skills: [
            { name: "Vercel", icon: Triangle, color: "#ffffff", desc: "Instant global hosting" },
            { name: "Netlify", icon: Globe, color: "#00C7B7", desc: "JAMstack deployments" },
            { name: "Git", icon: GitBranch, color: "#F05032", desc: "Version control mastery" },
            { name: "GitHub", icon: Github, color: "#ffffff", desc: "Collaboration & CI/CD" },
            { name: "Shopify", icon: ShoppingCart, color: "#96BF48", desc: "E-commerce integrations" },
        ],
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each category
            const categories = sectionRef.current?.querySelectorAll(".skill-category");
            categories?.forEach((cat, catIndex) => {
                const cards = cat.querySelectorAll(".skill-orb");

                gsap.from(cards, {
                    scale: 0.6,
                    opacity: 0,
                    y: 30,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: cat,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });

                // Subtle scroll rotation for skill cards
                gsap.to(cards, {
                    rotate: () => gsap.utils.random(-8, 8),
                    y: () => gsap.utils.random(-15, 15),
                    ease: "sine.inOut",
                    scrollTrigger: {
                        trigger: cat,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                });

                // Category title
                const title = cat.querySelector(".cat-title");
                if (title) {
                    gsap.from(title, {
                        x: catIndex % 2 === 0 ? -40 : 40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cat,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-32 px-4 md:px-10 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-6 space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    My Toolkit for Building{" "}
                    <span className="text-purple-400">the Future</span>
                </h2>
                <p className="text-purple-200/40 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    The technologies I wield to craft high-performance, immersive digital
                    experiences — blending frontend finesse with robust backend architecture
                    and reliable data layers.
                </p>
            </div>

            {/* Categories */}
            <div className="space-y-16 mt-16">
                {CATEGORIES.map((category, catIdx) => (
                    <div key={category.title} className="skill-category">
                        {/* Category header */}
                        <div className="cat-title flex items-center gap-4 mb-8">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: category.color, boxShadow: `0 0 12px ${category.color}60` }}
                            />
                            <div>
                                <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-purple-200/40 mt-0.5">
                                    {category.description}
                                </p>
                            </div>
                            {/* Connecting line */}
                            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
                        </div>

                        {/* Skills grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div
                                        key={skill.name}
                                        className="skill-orb group relative"
                                    >
                                        <div className="glass-card rounded-2xl p-4 md:p-5 flex flex-col items-center gap-2.5 cursor-default hover-lift hover-glow">
                                            {/* Icon */}
                                            <div
                                                className="text-2xl md:text-3xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                                style={{ color: skill.color }}
                                            >
                                                <Icon />
                                            </div>

                                            {/* Name */}
                                            <span className="text-[9px] md:text-[10px] font-bold text-white/50 group-hover:text-white tracking-wider uppercase transition-colors text-center leading-tight">
                                                {skill.name}
                                            </span>
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 backdrop-blur-xl rounded-xl text-[10px] text-purple-200 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-purple-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-30">
                                            {skill.desc}
                                            {/* Arrow */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-purple-500/20 rotate-45" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom note */}
            <div className="mt-16 text-center">
                <p className="text-xs text-purple-200/30 italic">
                    Every tool here has powered real projects — from high-converting stores
                    to interactive web apps that scale effortlessly.
                </p>
            </div>
        </section>
    );
}
