"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
    {
        quote:
            "Rafey completely transformed our online store from a basic Shopify setup into a high-converting, lightning-fast experience. The custom animations, mobile optimization, and seamless checkout flow he built increased our conversion rate by 42% in the first two months.",
        highlight: "conversion rate by 42%",
        author: "Ayesha Imran",
        role: "Founder & CEO",
        company: "VelvetVogue.pk",
        type: "Luxury fashion e-commerce",
        avatar: "/avatars/ayesha.png",
        rating: 5,
        impact: "+42% Conversion Rate",
    },
    {
        quote:
            "We needed a robust internal dashboard for our growing SaaS product, and Rafey delivered exactly what we envisioned — clean, performant, and scalable with Next.js. He handled complex data visualizations, real-time updates, and authentication flawlessly, all delivered ahead of schedule.",
        highlight: "delivered ahead of schedule",
        author: "Hamza Ali",
        role: "CTO",
        company: "PulseAnalytics",
        type: "SaaS analytics platform",
        avatar: "/avatars/hamza.png",
        rating: 5,
        impact: "Delivered Ahead of Schedule",
    },
    {
        quote:
            "Rafey took our outdated website and turned it into a modern, visually stunning showcase that perfectly represents our brand. The glassmorphic elements, smooth scroll animations, and blazing load times made our bounce rate drop by 31%.",
        highlight: "bounce rate drop by 31%",
        author: "Mariam Khan",
        role: "Marketing Director",
        company: "ArtisanLoom",
        type: "Handcrafted home decor",
        avatar: "/avatars/mariam.png",
        rating: 5,
        impact: "-31% Bounce Rate",
    },
    {
        quote:
            "Needed a custom web app MVP built quickly for investor demo — Rafey shipped a polished, bug-free version in just 18 days. The UI is intuitive, animations are buttery smooth, and it scales beautifully on all devices.",
        highlight: "just 18 days",
        author: "Saad Rehman",
        role: "Co-founder",
        company: "QuickServe Logistics",
        type: "On-demand delivery startup",
        avatar: "/avatars/saad.png",
        rating: 5,
        impact: "MVP in 18 Days",
    },
    {
        quote:
            "Rafey has been our go-to developer for over a year now. From our initial e-commerce launch to multiple feature updates and performance optimizations, every project has exceeded expectations. Our site now consistently hits 98–100 Lighthouse scores.",
        highlight: "98–100 Lighthouse scores",
        author: "Zoya Farooq",
        role: "Owner",
        company: "GlowEssentials",
        type: "Skincare & beauty e-commerce",
        avatar: "/avatars/zoya.png",
        rating: 5,
        impact: "98-100 Lighthouse Score",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-purple-400" : "text-purple-900/50"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function highlightText(text: string, highlight: string) {
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-purple-300 font-semibold">
                {part}
            </span>
        ) : (
            <span key={i}>{part}</span>
        )
    );
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heading = sectionRef.current?.querySelector(".testimonial-heading");
            if (heading) {
                gsap.from(heading, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Auto-advance every 6s
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    const navigate = (dir: number) => {
        setDirection(dir);
        setActiveIndex((prev) => {
            const next = prev + dir;
            if (next < 0) return TESTIMONIALS.length - 1;
            if (next >= TESTIMONIALS.length) return 0;
            return next;
        });
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 80 : -80,
            opacity: 0,
            scale: 0.96,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -80 : 80,
            opacity: 0,
            scale: 0.96,
        }),
    };

    const current = TESTIMONIALS[activeIndex];

    return (
        <section
            ref={sectionRef}
            id="proof"
            className="py-32 px-4 md:px-10 max-w-6xl mx-auto"
        >
            {/* Heading */}
            <div className="testimonial-heading text-center mb-20 space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    What Clients <span className="text-purple-400">Say</span>
                </h2>
                <p className="text-purple-200/50 max-w-md mx-auto">
                    Don&apos;t take my word for it — hear from the people I&apos;ve worked
                    with.
                </p>
            </div>

            {/* Featured testimonial — carousel */}
            <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                <div className="overflow-hidden rounded-[2.5rem] glass-card hover-lift hover-glow min-h-[380px] md:min-h-[320px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className="p-8 md:p-14"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
                                {/* Quote */}
                                <div className="space-y-6">
                                    {/* Quote mark */}
                                    <svg
                                        className="w-10 h-10 text-purple-500/30"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                                    </svg>

                                    <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light italic">
                                        &ldquo;{highlightText(current.quote, current.highlight)}&rdquo;
                                    </p>

                                    {/* Impact badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                                        <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                                            {current.impact}
                                        </span>
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="flex md:flex-col items-center md:items-end gap-5 md:gap-4 md:text-right min-w-[200px]">
                                    <div className="relative">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6),inset_0_0_10px_rgba(168,85,247,0.4)]">
                                            <Image
                                                src={current.avatar}
                                                alt={current.author}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Glow ring */}
                                        <div className="absolute -inset-1 rounded-full border border-purple-500/20 animate-pulse pointer-events-none" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <StarRating rating={current.rating} />
                                        <p className="text-base font-bold text-white">
                                            {current.author}
                                        </p>
                                        <p className="text-xs text-purple-300/80">
                                            {current.role},{" "}
                                            <span className="text-purple-400 font-semibold">
                                                {current.company}
                                            </span>
                                        </p>
                                        <p className="text-[10px] text-purple-200/40 uppercase tracking-[0.15em]">
                                            {current.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-between mt-8">
                    {/* Dots */}
                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > activeIndex ? 1 : -1);
                                    setActiveIndex(i);
                                }}
                                className={`rounded-full transition-all duration-300 ${i === activeIndex
                                    ? "w-8 h-2 bg-purple-500"
                                    : "w-2 h-2 bg-purple-500/30 hover:bg-purple-500/50"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-3 glass rounded-full hover:bg-purple-500/10 text-purple-300/60 hover:text-purple-300 transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="p-3 glass rounded-full hover:bg-purple-500/10 text-purple-300/60 hover:text-purple-300 transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mini grid — remaining testimonials preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {TESTIMONIALS.filter((_, i) => i !== activeIndex)
                    .slice(0, 3)
                    .map((t, i) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-6 space-y-4 cursor-pointer"
                            onClick={() => {
                                const realIndex = TESTIMONIALS.findIndex(
                                    (item) => item.author === t.author
                                );
                                setDirection(realIndex > activeIndex ? 1 : -1);
                                setActiveIndex(realIndex);
                            }}
                        >
                            <p className="text-sm text-white/60 leading-relaxed line-clamp-3 italic">
                                &ldquo;{t.quote.slice(0, 120)}...&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/30">
                                    <Image
                                        src={t.avatar}
                                        alt={t.author}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white/80">{t.author}</p>
                                    <p className="text-[10px] text-purple-300/60">{t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </section>
    );
}
