"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="text-xl font-serif font-bold text-white tracking-widest mb-2">
                            RR<span className="text-purple-500">.</span>
                        </div>
                        <p className="text-xs text-purple-200/40 tracking-widest uppercase">
                            &copy; {new Date().getFullYear()} Rafey Rashid. Crafted with stardust.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: Github, link: "#", label: "GitHub" },
                            { icon: Linkedin, link: "#", label: "LinkedIn" },
                            { icon: Twitter, link: "#", label: "Twitter" },
                        ].map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="p-3 glass rounded-xl text-purple-300/60 hover:text-purple-300 hover:bg-purple-500/10 transition-all"
                                    aria-label={social.label}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Back to Top Rocket */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-3 px-6 py-3 glass rounded-full text-[10px] font-bold text-purple-300 uppercase tracking-[0.2em] hover:bg-purple-500/10 transition-all cursor-pointer"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        Launch to Top
                        {/* Rocket trail */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0 group-hover:h-6 bg-gradient-to-t from-purple-500/40 to-transparent rounded-b-full transition-all duration-300 blur-sm" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
