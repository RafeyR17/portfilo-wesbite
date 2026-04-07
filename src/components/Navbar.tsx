"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { useIsMobile } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
    { name: "Skills", href: "/#skills" },
    { name: "Works", href: "/#projects" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Story", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useIsMobile();
    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);

            // Keep visible everywhere as requested
            setHidden(false);
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable scroll on body when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileOpen]);

    // Scroll spy — highlight active section
    useEffect(() => {
        const sections = NAV_LINKS
            .filter(link => link.href.includes("#"))
            .map((link) => {
                const id = link.href.split("#")[1];
                return document.getElementById(id);
            })
            .filter(Boolean) as HTMLElement[];

        const observers = sections.map((section) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`/#${section.id}`);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(section);
            return observer;
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleNavClick = (link: typeof NAV_LINKS[0]) => {
        setMobileOpen(false);
        if (link.href.startsWith("/#")) {
            const id = link.href.split("#")[1];
            if (pathname === "/") {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    return;
                }
            } else {
                router.push(link.href);
                return;
            }
        }
        // Fallback for non-hash links or if element not found on home page
        if (!link.href.includes("#")) {
            router.push(link.href);
        }
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-5 transition-all duration-500 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { y: -100, opacity: 0 },
                        visible: { 
                            y: 0, 
                            opacity: 1,
                            transition: { delay: 0.2, duration: isMobile ? 0 : 0.8, ease: "easeOut" }
                        }
                    }}
                    className={`flex items-center gap-2 md:gap-6 px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${scrolled
                        ? "bg-[rgba(15,0,30,0.6)] backdrop-blur-2xl saturate-[180%] border border-purple-500/20 shadow-[0_8px_32px_rgba(168,85,247,0.12)]"
                        : "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]"
                        }`}
                >
                    {/* Logo */}
                    <a
                        href="/#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            if (pathname === "/") {
                                const hero = document.getElementById("hero");
                                if (hero) {
                                    hero.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            } else {
                                router.push("/#hero");
                            }
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
                                    aria-label={`Go to ${link.name} section`}
                                    onClick={(e) => {
                                        if (link.href.startsWith("/") || link.href.startsWith("#")) {
                                            e.preventDefault();
                                            handleNavClick(link);
                                        }
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
                        href="/#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick({ name: "Contact", href: "/#contact" });
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

            {/* Mobile Sidebar (Hamburger Menu) */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial={isMobile ? { x: "100%" } : { opacity: 0 }}
                            animate={isMobile ? { x: 0 } : { opacity: 1 }}
                            exit={isMobile ? { x: "100%" } : { opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] z-[120] bg-[rgba(10,5,20,0.98)] backdrop-blur-2xl border-l border-white/10 p-8 pt-24 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.href.startsWith("/") || link.href.startsWith("#")) {
                                                e.preventDefault();
                                                handleNavClick(link);
                                            }
                                        }}
                                        className={`text-xl font-serif font-bold tracking-[0.1em] transition-colors py-2 border-b border-white/5 ${activeSection === link.href
                                            ? "text-purple-400"
                                            : "text-white/70 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick({ name: "Contact", href: "/#contact" });
                                    }}
                                    className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold uppercase tracking-[0.1em] text-xs text-center transition-all shadow-lg active:scale-95"
                                >
                                    Hire Me
                                </a>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 text-center">
                                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Rafey Riaz &copy; 2026</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    );
}
