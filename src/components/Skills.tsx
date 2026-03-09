"use client";

import { motion } from "framer-motion";
import {
    Layout, Type, Paintbrush, Move,
    Server, Layers, Code2,
    DatabaseZap, Database, Cloud, DatabaseBackup, Globe
} from "lucide-react";

/**
 * SKILLS DATA
 * Refined to 12 essential skills for a modern Full-Stack Developer (2025-2026).
 * Grouped into 3 sections for scanability.
 */
const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        skills: [
            { name: "Next.js", icon: Layout, desc: "Full-stack React framework for production" },
            { name: "TypeScript", icon: Type, desc: "Static typing for scalable JavaScript" },
            { name: "Tailwind CSS", icon: Paintbrush, desc: "Modern utility-first styling system" },
            { name: "Framer Motion", icon: Move, desc: "Production-ready motion library for React" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: Server, desc: "High-performance JavaScript runtime" },
            { name: "NestJS", icon: Layers, desc: "Enterprise-grade Node.js framework" },
            { name: "Python", icon: Code2, desc: "Versatile language for AI & backend services" },
        ],
    },
    {
        title: "Database & Tools",
        skills: [
            { name: "Prisma", icon: DatabaseZap, desc: "Next-generation TypeScript ORM" },
            { name: "PostgreSQL", icon: Database, desc: "World's most advanced relational database" },
            { name: "Supabase", icon: Cloud, desc: "Open-source Firebase alternative" },
            { name: "MongoDB", icon: DatabaseBackup, desc: "Modern document-based NoSQL database" },
            { name: "Three.js", icon: Globe, desc: "Powering immersive 3D web experiences" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Section Headers */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white relative inline-block mb-4">
                    Technical Expertise
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/50 rounded-full" />
                </h2>
                <p className="text-purple-200/60 mt-4 text-lg max-w-2xl mx-auto">
                    A lean, high-impact toolkit focused on performance, scalability, and premium user experiences.
                </p>
            </div>

            <div className="space-y-24">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title}>
                        {/* Category Heading */}
                        <div className="flex flex-col items-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-purple-300 mb-2">
                                {category.title}
                            </h3>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        </div>

                        {/* Responsive Grid: 3 col desktop, 2 col tablet, 1 col mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative"
                                    // Desktop only hover effect via Framer Motion
                                    whileHover={{
                                        scale: 1.05,
                                        y: -6,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileFocus={{ scale: 1.05, y: -6 }}
                                >
                                    <div className="
                    skill-card h-full
                    backdrop-blur-xl bg-[#1e003c]/20 border border-[#a855f7]/40
                    rounded-2xl p-8 flex flex-col items-center justify-center
                    transition-all duration-300
                    group-hover:border-[#a855f7]/60 group-hover:bg-[#1e003c]/40
                    group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                  ">
                                        {/* Icon */}
                                        <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                                            <skill.icon size={56} strokeWidth={1.5} />
                                        </div>

                                        {/* Skill Name */}
                                        <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                                            {skill.name}
                                        </h4>

                                        {/* Description: Fades in on hover/focus */}
                                        <p className="
                      text-sm text-purple-200/80 text-center leading-snug
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
