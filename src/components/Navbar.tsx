"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#projects" },
    { name: "Story", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);

            // Hide on scroll down, show on scroll up
            if (currentY > lastScrollY.current && currentY > 400) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll spy — highlight active section
    useEffect(() => {
        const sections = NAV_LINKS.map((link) =>
            document.querySelector(link.href) as HTMLElement
        ).filter(Boolean);

        const observers = sections.map((section) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${section.id}`);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(section);
            return observer;
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-5 transition-all duration-500 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
            >
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                    className={`flex items-center gap-2 md:gap-6 px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${scrolled
                        ? "bg-[rgba(15,0,30,0.6)] backdrop-blur-2xl saturate-[180%] border border-purple-500/20 shadow-[0_8px_32px_rgba(168,85,247,0.12)]"
                        : "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]"
                        }`}
                >
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-lg font-serif font-bold text-white tracking-widest hover:text-purple-300 transition-colors group relative"
                    >
                        RR<span className="text-purple-500 group-hover:text-purple-400 transition-colors">.</span>
                        <span className="absolute -inset-2 rounded-full bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`relative px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all duration-300 group ${isActive
                                        ? "text-purple-300 bg-purple-500/10"
                                        : "text-white/50 hover:text-white/90"
                                        }`}
                                >
                                    {link.name}
                                    {/* Animated underline */}
                                    <span
                                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-purple-400 transition-all duration-300 ${isActive ? "w-4" : "w-0 group-hover:w-3"
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#contact");
                        }}
                        className="hidden md:inline-flex items-center gap-1.5 bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full text-[11px] font-black transition-all uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] group"
                    >
                        Hire Me
                        <svg
                            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-purple-300 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                        onClick={() => setMobileOpen(false)}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`text-3xl font-serif font-bold tracking-widest transition-colors ${activeSection === link.href
                                    ? "text-purple-400"
                                    : "text-white/60 hover:text-purple-300"
                                    }`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: NAV_LINKS.length * 0.1 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("#contact");
                            }}
                            className="mt-4 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                        >
                            Hire Me →
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
