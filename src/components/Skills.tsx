"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
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

    return (
        <section ref={sectionRef} id="skills" className="py-32 px-4 md:px-10 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-serif font-bold text-white text-glow"
                >
                    My Technical{" "}
                    <span className="text-purple-400">Toolkit</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-purple-200/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                >
                    The core technologies I use to architect high-performance, immersive
                    digital experiences across the full development stack.
                </motion.p>
            </div>

            {/* Categories */}
            <div className="space-y-20">
                {CATEGORIES.map((category, catIdx) => (
                    <div key={category.title} className="skill-category">
                        {/* Category header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-10"
                        >
                            <div
                                className="w-3 h-3 rounded-full shadow-[0_0_15px_#a855f7]"
                                style={{ backgroundColor: category.color }}
                            />
                            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                                {category.title}
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
                        </motion.div>

                        {/* Skills grid: 4 columns desktop, 2 tablet, 1 mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {category.skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        className="group relative"
                                    >
                                        <div className="glass-card backdrop-blur-xl bg-purple-950/20 border border-purple-500/20 rounded-3xl p-8 flex flex-col items-center gap-4 transition-all duration-500 hover:border-purple-400/50 hover:bg-purple-900/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                                            {/* Icon */}
                                            <div
                                                className="text-4xl md:text-5xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                                                style={{ color: skill.color }}
                                            >
                                                <Icon />
                                            </div>

                                            {/* Info */}
                                            <div className="text-center">
                                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-xs text-purple-200/50 leading-relaxed font-sans">
                                                    {skill.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-20 text-center"
            >
                <p className="text-sm text-purple-200/30 italic font-sans max-w-xl mx-auto">
                    Every tool in my kit is chosen for its ability to deliver premium,
                    scalable, and high-performance digital products.
                </p>
            </motion.div>
        </section>
    );
}
