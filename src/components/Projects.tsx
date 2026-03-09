"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";

/* ────────────────────── Project Data ────────────────────── */

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    primaryButton: { label: string; href: string; icon: "external" | "github" };
    caseStudyHref: string;
}

const PROJECTS: Project[] = [
    {
        title: "Natural Glow – Herbal E-Commerce Store",
        description:
            "Premium online store selling herbal oils, cosmetics, and shampoos — high-converting design, smooth shopping experience, fast performance, and elegant product presentation.",
        tags: ["Next.js", "Tailwind CSS", "Stripe"],
        image: "/projects/ecommerce-1-store.png",
        primaryButton: {
            label: "Live Demo",
            href: "https://naturalglow.vercel.app",
            icon: "external",
        },
        caseStudyHref: "/case-studies/natural-glow",
    },
    {
        title: "Neon Void – Tech E-Commerce Store",
        description:
            "Modern tech accessories platform selling headphones, keyboards, mice, and gadgets — clean UI, advanced filtering, secure checkout, and responsive across devices.",
        tags: ["Next.js", "Tailwind CSS", "Stripe"],
        image: "/projects/ecommerce-2.png",
        primaryButton: {
            label: "View on GitHub",
            href: "https://github.com/RafeyR17/neon-void-store",
            icon: "github",
        },
        caseStudyHref: "/case-studies/neon-void",
    },
    {
        title: "AI Future Hub School System",
        description:
            "Full-stack educational platform teaching AI to kids & teenagers — students submit tasks, receive AI-powered feedback, track progress; teachers manage content and grading via admin dashboard.",
        tags: ["Next.js", "NestJS/FastAPI", "PostgreSQL", "Prisma", "Tailwind"],
        image: "/projects/ai-future-hub-screenshot.png",
        primaryButton: {
            label: "Live Demo",
            href: "https://www.aifuturehubschoolsystem.academy",
            icon: "external",
        },
        caseStudyHref: "/case-studies/ai-future-hub",
    },
    {
        title: "AI Resume & Cover Letter Builder SaaS",
        description:
            "AI-powered SaaS that generates ATS-optimized resumes and cover letters instantly — paste a job description to get tailored professional documents with multiple templates and PDF export.",
        tags: ["Next.js", "Groq/OpenAI", "Tailwind", "Stripe", "Prisma"],
        image: "/projects/ai-resume-builder.png",
        primaryButton: {
            label: "View on GitHub",
            href: "https://github.com/RafeyR17/AI-Powered-Resume-Cover-Letter-Builder-SaaS",
            icon: "github",
        },
        caseStudyHref: "/case-studies/ai-resume-builder",
    },
];

/* ────────────────────── Animation Variants ────────────────────── */

const sectionVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
};

/* ────────────────────── Component ────────────────────── */

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-28 md:py-36 px-4 md:px-10 max-w-7xl mx-auto"
        >
            {/* ── Ambient glow orbs for this section ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
                <div className="absolute top-[10%] left-[-8%] w-[45%] h-[45%] bg-purple-700/15 blur-[140px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-fuchsia-600/12 blur-[120px] rounded-full animate-pulse-glow [animation-delay:4s]" />
            </div>

            <motion.div
                variants={shouldReduceMotion ? undefined : sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* ── Heading ── */}
                <motion.div
                    variants={shouldReduceMotion ? undefined : headingVariants}
                    className="text-center mb-16 md:mb-20 space-y-5"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white text-glow">
                        Selected{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-purple-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
                        High-converting e-commerce stores, AI-powered tools, and
                        production-ready educational platforms — 50+ projects shipped &amp;
                        counting.
                    </p>
                </motion.div>

                {/* ── Project Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-9">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={shouldReduceMotion ? undefined : cardVariants}
                            className="group relative rounded-3xl overflow-hidden transition-all duration-500 ease-out
                         bg-[rgba(30,0,60,0.18)] backdrop-blur-2xl
                         border border-[rgba(168,85,247,0.35)]
                         shadow-[inset_0_0_30px_rgba(168,85,247,0.08),0_8px_32px_rgba(0,0,0,0.4)]
                         hover:-translate-y-3 hover:scale-[1.03]
                         hover:shadow-[inset_0_0_40px_rgba(168,85,247,0.18),0_0_50px_rgba(168,85,247,0.5),0_20px_60px_rgba(0,0,0,0.5)]
                         hover:border-[rgba(168,85,247,0.6)]
                         focus-within:ring-2 focus-within:ring-purple-500/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                        >
                            {/* ── Image ── */}
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`Screenshot of ${project.title}`}
                                    width={1200}
                                    height={675}
                                    priority={index < 2}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Purple overlay on hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[rgba(30,0,60,0.95)] via-[rgba(30,0,60,0.3)] to-transparent
                             opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                />
                                {/* Subtle purple glow overlay on hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-fuchsia-500/0
                             group-hover:from-purple-600/10 group-hover:via-purple-500/5 group-hover:to-fuchsia-500/10
                             transition-all duration-700"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* ── Content ── */}
                            <div className="p-6 sm:p-8 space-y-5">
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight group-hover:text-purple-100 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-purple-100/60 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-purple-900/40 text-purple-200 text-xs sm:text-sm font-medium rounded-full
                                 border border-purple-500/20 transition-colors duration-300
                                 group-hover:border-purple-500/35 group-hover:bg-purple-900/55"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    {/* Primary Button */}
                                    <a
                                        href={project.primaryButton.href}
                                        target={project.primaryButton.href.startsWith("http") ? "_blank" : undefined}
                                        rel={project.primaryButton.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="relative inline-flex items-center gap-2 px-6 py-3
                               bg-gradient-to-r from-purple-600 to-purple-800
                               text-white text-xs sm:text-sm font-semibold uppercase tracking-wider
                               rounded-full overflow-hidden
                               shadow-[0_0_20px_rgba(168,85,247,0.3)]
                               hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]
                               hover:scale-105
                               active:scale-[0.98]
                               transition-all duration-300 ease-out
                               focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:ring-offset-2 focus:ring-offset-black"
                                        aria-label={`${project.primaryButton.label} – ${project.title}`}
                                    >
                                        {/* Ripple overlay */}
                                        <span
                                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0
                                 translate-x-[-100%] group-hover:translate-x-[100%]
                                 transition-transform duration-700 ease-in-out"
                                            aria-hidden="true"
                                        />
                                        {project.primaryButton.icon === "github" ? (
                                            <Github size={16} />
                                        ) : (
                                            <ExternalLink size={16} />
                                        )}
                                        {project.primaryButton.label}
                                    </a>

                                    {/* Case Study Button */}
                                    <a
                                        href={project.caseStudyHref}
                                        className="inline-flex items-center gap-2 px-6 py-3
                                 border border-purple-500/60 text-purple-300 text-xs sm:text-sm font-semibold uppercase tracking-wider
                                 rounded-full bg-transparent
                                 hover:bg-purple-500/15 hover:text-purple-100 hover:border-purple-400/80
                                 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                                 active:scale-[0.98]
                                 transition-all duration-300 ease-out
                                 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:ring-offset-2 focus:ring-offset-black"
                                        aria-label={`View Case Study for ${project.title}`}
                                    >
                                        <ArrowUpRight size={16} />
                                        Case Study
                                    </a>
                                </div>
                            </div>

                            {/* ── Corner accent glow ── */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 bg-purple-500/8 blur-3xl rounded-full
                           group-hover:bg-purple-500/20 group-hover:w-40 group-hover:h-40
                           transition-all duration-700 pointer-events-none"
                                aria-hidden="true"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ── View More CTA ── */}
                <motion.div
                    variants={shouldReduceMotion ? undefined : ctaVariants}
                    className="flex justify-center mt-16 md:mt-20"
                >
                    <a
                        href="https://github.com/RafeyR17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-r from-purple-600/80 to-purple-800/80
                       text-white text-sm sm:text-base font-semibold uppercase tracking-widest
                       rounded-full overflow-hidden
                       border border-purple-500/40
                       shadow-[0_0_25px_rgba(168,85,247,0.25)]
                       hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
                       hover:scale-105 hover:border-purple-400/60
                       active:scale-[0.98]
                       transition-all duration-300 ease-out
                       focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:ring-offset-2 focus:ring-offset-black"
                        aria-label="View more projects on GitHub"
                    >
                        {/* Shimmer sweep */}
                        <span
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0
                         -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 ease-in-out"
                            aria-hidden="true"
                        />
                        <Github size={20} />
                        View More Projects
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
