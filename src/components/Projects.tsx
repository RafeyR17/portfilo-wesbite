"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import dynamic from "next/dynamic";
import { loadSlim } from "@tsparticles/slim";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

/* ────────────────────── Project Results Mapping ────────────────────── */

const PROJECT_RESULTS: Record<string, string> = {
    "presence-rooms": "1,200+ people focusing daily • 40% average focus streak increase",
    "remoteharmony": "Reduced meeting planning time by 80% • 35% higher team satisfaction",
    "datanarrative": "5,000+ data stories generated • Users report 2–3× more insights",
    "ecoinsight": "500+ active users • Average 12–18% CO₂ reduction per user",
    "nexchain": "1,200+ members • Thousands of commissions processed",
    "ai-future-hub": "200+ students • 70% reduction in grading time • 85% completion rate",
    "ai-resume-builder": "5,000+ resumes generated • 2–3× more interview callbacks",
    "circlekeep": "1,500+ memories preserved • 4.9/5 user rating from families",
    "neon-void": "4.8% conversion rate • 35% higher AOV",
    "natural-glow": "4.2% conversion rate • 2.8× revenue increase first month",
};

/* ────────────────────── Animation Variants ────────────────────── */

const sectionVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

/* ────────────────────── Component ────────────────────── */

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const shouldReduceMotion = useReducedMotion();
    const [init, setInit] = useState(false);

    useEffect(() => {
        import("@tsparticles/react").then(({ initParticlesEngine }) => {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        });
    }, []);

    const particlesOptions = {
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
            color: { value: "#a855f7" },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: { default: "out" as const },
                random: true,
                speed: 0.4,
                straight: false,
            },
            number: { density: { enable: true }, value: 40 },
            opacity: {
                value: { min: 0.1, max: 0.4 },
                animation: { enable: true, speed: 1, sync: false }
            },
            shape: { type: "circle" },
            size: { value: { min: 1.5, max: 4.5 } },
        },
        detectRetina: true,
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-28 md:py-40 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden"
        >
            {/* ── Purple Particle Background ── */}
            {init && (
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <Particles
                        id="projects-particles"
                        options={particlesOptions}
                        className="h-full w-full"
                    />
                </div>
            )}

            {/* ── Ambient glow orbs ── */}
            <div className="absolute inset-0 pointer-events-none -z-20" aria-hidden="true">
                <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[180px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/15 blur-[160px] rounded-full" />
            </div>

            <motion.div
                variants={shouldReduceMotion ? undefined : sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* ── Heading ── */}
                <motion.div
                    variants={shouldReduceMotion ? undefined : headingVariants}
                    className="text-center mb-16 md:mb-24 space-y-6"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white text-glow">
                        Selected{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-purple-200/60 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        A curated showcase of high-performance AI tools, scalable e-commerce platforms, 
                        and production-grade full-stack applications.
                    </p>
                </motion.div>

                {/* ── Project Grid (2-column desktop, 1-column mobile) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={shouldReduceMotion ? undefined : cardVariants}
                            className="group relative rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-[power4.out]
                         bg-[rgba(30,0,60,0.18)] backdrop-blur-2xl
                         border border-[rgba(168,85,247,0.35)]
                         shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                         hover:-translate-y-4 hover:scale-[1.03]
                         hover:shadow-[0_0_50px_rgba(168,85,247,0.4),0_20px_60px_rgba(0,0,0,0.6)]
                         hover:border-[rgba(168,85,247,0.7)]"
                        >
                            {/* ── Image with Zoom Effect ── */}
                            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={675}
                                    priority={index < 2}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,0,40,0.9)] via-[rgba(20,0,40,0.2)] to-transparent" />
                            </div>

                            {/* ── Content ── */}
                            <div className="p-8 sm:p-10 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-purple-100/70 text-sm sm:text-base leading-relaxed line-clamp-2">
                                        {project.excerpt}
                                    </p>

                                    {/* Results & Impact Mini-Section */}
                                    {PROJECT_RESULTS[project.id as keyof typeof PROJECT_RESULTS] && (
                                        <div className="pt-2">
                                            <p className="text-purple-200/90 text-[xs] sm:text-sm italic font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                                <span className="border-b border-purple-500/30 pb-0.5">
                                                    {PROJECT_RESULTS[project.id as keyof typeof PROJECT_RESULTS]}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 bg-purple-950/50 text-purple-200 text-xs font-semibold rounded-full
                                             border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <Link
                                        href={`/case-studies/${project.id}`}
                                        className="inline-flex items-center gap-2 px-7 py-3.5
                                         bg-gradient-to-r from-purple-600 to-purple-800
                                         text-white text-sm font-bold uppercase tracking-wider
                                         rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)]
                                         hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
                                         hover:scale-105 transition-all duration-300 active:scale-95"
                                    >
                                        View Case Study <ArrowUpRight size={18} />
                                    </Link>

                                    {project.caseStudy.githubUrl && (
                                        <a
                                            href={project.caseStudy.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-7 py-3.5
                                             border border-purple-500/50 text-purple-300 text-sm font-bold uppercase tracking-wider
                                             rounded-full bg-transparent hover:bg-purple-500/10 hover:text-white transition-all duration-300"
                                        >
                                            GitHub <Github size={18} />
                                        </a>
                                    )}

                                    {project.caseStudy.liveUrl && !project.caseStudy.githubUrl && (
                                        <a
                                            href={project.caseStudy.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-7 py-3.5
                                             border border-purple-500/50 text-purple-300 text-sm font-bold uppercase tracking-wider
                                             rounded-full bg-transparent hover:bg-purple-500/10 hover:text-white transition-all duration-300"
                                        >
                                            Live Demo <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── ML Experiments Link ── */}
                <motion.div
                    variants={shouldReduceMotion ? undefined : cardVariants}
                    className="mt-16 md:mt-24 flex justify-center"
                >
                    <Link
                        href="/ml-experiments"
                        className="group relative inline-flex items-center gap-3 px-8 py-4
                         bg-gradient-to-r from-[rgba(168,85,247,0.15)] to-[rgba(192,132,252,0.15)]
                         border border-[rgba(168,85,247,0.4)] backdrop-blur-md rounded-full
                         text-purple-100 font-bold tracking-wide transition-all duration-500
                         hover:border-[rgba(168,85,247,0.8)] hover:from-[rgba(168,85,247,0.3)] hover:to-[rgba(192,132,252,0.3)]
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                         hover:scale-105 active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            See ML Experiments <ArrowUpRight className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/0 via-purple-400/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
