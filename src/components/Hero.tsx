"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

const GLSLHills = dynamic(
    () => import("@/components/ui/glsl-hills").then((mod) => mod.GLSLHills),
    { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mq.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return prefersReducedMotion;
}

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);
    return isMobile;
}

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [init, setInit] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();

    // Initialize particles engine
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // GSAP Entrance Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

            tl.from(".hero-content > *", {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                delay: 0.5
            })
                .from(".hero-avatar", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.75)"
                }, "-=1");

            // Floating movement for avatar
            gsap.to(".hero-avatar", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Parallax effect on scroll
            gsap.to(".hero-content", {
                y: 100,
                opacity: 0.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const particlesOptions: ISourceOptions = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                    parallax: {
                        enable: true,
                        force: 5,
                        smooth: 10
                    }
                },
                resize: { enable: true },
            },
            modes: {
                grab: {
                    distance: 140,
                    links: { opacity: 0.2, color: "#a855f7" }
                },
            },
        },
        particles: {
            color: { value: ["#a855f7", "#d8b4fe", "#ffffff"] },
            links: {
                enable: false, // Disabling links for performance
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: { min: 0.4, max: 0.8 }, // Slightly faster as requested
                straight: false,
            },
            number: {
                density: { enable: true }, // Removed area property
                value: isMobile ? 25 : 55 // Reduced particle count
            },
            opacity: {
                value: { min: 0.2, max: 0.5 }, // Subtle range
                animation: { enable: true, speed: 0.5, sync: false }
            },
            shape: { type: "circle" },
            size: {
                value: { min: 1, max: 2 },
            },
            twinkle: {
                particles: { enable: true, color: "#d8b4fe", frequency: 0.03, opacity: 1 }
            }
        },
        detectRetina: true,
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center breathing-bg overflow-hidden"
            id="hero"
        >
            {/* ── Layer 0: GLSL Hills Shader (lowest visual layer) ── */}
            {!prefersReducedMotion && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-35">
                    <GLSLHills
                        cameraZ={150}
                        speed={0.3} // Faster rolling effect
                        planeSize={isMobile ? 128 : 192} // Optimized plane size
                    />
                </div>
            )}

            {/* ── Layer 1: Overlay gradient to blend shader with cosmic background ── */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-purple-950/20 to-black/30 pointer-events-none" />

            {/* ── Layer 3: tsParticles with Mouse Parallax ── */}
            {init && (
                <div className="absolute inset-0 z-[3] opacity-60 pointer-events-none">
                    <Particles
                        id="tsparticles"
                        options={particlesOptions}
                        className="h-full w-full"
                    />
                </div>
            )}

            {/* ── Layer 4: Floating Radial Glow Orbs ── */}
            <div className="absolute top-[15%] left-[5%] w-[40rem] h-[40rem] bg-purple-600/15 blur-[150px] rounded-full animate-pulse-glow z-[4]" />
            <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-magenta-600/10 blur-[130px] rounded-full animate-float z-[4]" style={{ animationDelay: "-3s" }} />
            <div className="absolute top-[40%] right-[15%] w-[30rem] h-[30rem] bg-purple-900/10 blur-[140px] rounded-full animate-float z-[4]" style={{ animationDelay: "-5s" }} />
            <div className="absolute bottom-[30%] left-[20%] w-[25rem] h-[25rem] bg-purple-500/10 blur-[120px] rounded-full animate-pulse-glow z-[4]" style={{ animationDelay: "-1s" }} />

            {/* ── Layer 10: Hero Content ── */}
            <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Text Content */}
                <div ref={contentRef} className="hero-content flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-300 tracking-[0.2em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                        AVAILABLE FOR NEW PROJECTS
                    </div>

                    <div className="space-y-4">
                        <h1
                            className="font-serif font-black tracking-tighter metallic-text block whitespace-nowrap"
                            style={{
                                fontSize: "clamp(5rem, 14vw, 14rem)",
                                lineHeight: 0.92,
                                filter: "drop-shadow(0 0 40px rgba(168,85,247,0.5))"
                            }}
                        >
                            Rafey Rashid
                        </h1>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium text-purple-200/90 leading-tight max-w-2xl opacity-0 animate-fade-up-stagger" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                            Web Developer & Creator of <span className="text-white">Immersive Digital Worlds</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up-stagger" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                        Crafting high-converting <span className="text-purple-300">e-commerce stores</span> and powerful <span className="text-purple-300">web apps</span> that captivate — 50+ projects shipped & counting.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6 pt-4 opacity-0 animate-fade-up-stagger" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.08, boxShadow: "0 0 60px rgba(168,85,247,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-premium ripple-btn px-10 py-5 bg-purple-600/80 rounded-full text-white font-black text-sm tracking-[0.3em] uppercase transition-all shadow-lg text-center"
                        >
                            EXPLORE MY WORK ↓
                        </motion.a>

                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 0 30px rgba(168,85,247,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-5 border border-purple-500/30 rounded-full text-purple-200 font-black text-sm tracking-[0.3em] uppercase transition-all backdrop-blur-md text-center"
                        >
                            MY STORY
                        </motion.a>
                    </div>
                </div>

                {/* Avatar Section */}
                <div className="hero-avatar relative order-1 lg:order-2">
                    {/* Back Glow Orb */}
                    <div className="absolute inset-0 bg-purple-600/40 blur-[100px] rounded-full transform scale-90 pointer-events-none" />

                    <motion.div
                        whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 0 60px rgba(168,85,247,0.5)" }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-purple-500/60 p-2 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden"
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-purple-900/20">
                            <Image
                                src="/images/rafey-rashid.jpg"
                                alt="Rafey Rashid - Full-Stack Web Developer"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
            </div>

            <style jsx>{`
                .hero-content > *, .hero-avatar, .animate-fade-up-stagger {
                    will-change: transform, opacity;
                }
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up-stagger {
                    animation: fade-up 1.2s cubic-bezier(0.22, 1, 0.36, 1);
                }
            `}</style>
        </section>
    );
}
