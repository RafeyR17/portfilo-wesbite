"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Github, Linkedin, Facebook, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
    { icon: Github, label: "GitHub", link: "https://github.com/RafeyR17" },
    { icon: Linkedin, label: "LinkedIn", link: "#" },
    { icon: Facebook, label: "Facebook", link: "#" },
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/rafey_dev/" },
];

function FloatingInput({
    label,
    name,
    type = "text",
    textarea = false,
    value,
    onChange,
}: {
    label: string;
    name: string;
    type?: string;
    textarea?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
    const [focused, setFocused] = useState(false);
    const isActive = focused || value.length > 0;
    const id = name;

    const sharedClasses =
        "w-full bg-purple-900/10 border border-purple-500/20 rounded-2xl px-6 pt-7 pb-3 outline-none text-white transition-all duration-300 focus:bg-purple-900/30 focus:border-purple-400 focus:shadow-[0_0_20px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.2)]";

    return (
        <div className="relative group">
            <label
                htmlFor={id}
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${isActive
                    ? "top-2 text-[10px] text-purple-300 font-bold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                    : "top-1/2 -translate-y-1/2 text-sm text-purple-200/50 group-hover:text-purple-300/80"
                    }`}
            >
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={id}
                    name={name}
                    rows={4}
                    required
                    className={`${sharedClasses} resize-none`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    required
                    className={sharedClasses}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
}

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const form = sectionRef.current?.querySelector(".contact-form");
            if (form) {
                gsap.from(form, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/rafeyrashid051@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Contact Form Submission from Portfolio!"
                }),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                setIsSuccess(true);

                // Cosmic confetti burst — dynamic import for performance
                const { default: confetti } = await import("canvas-confetti");
                const duration = 3000;
                const end = Date.now() + duration;
                const frame = () => {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: ['#a855f7', '#c084fc', '#ffffff', '#ff00ff']
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: ['#a855f7', '#c084fc', '#ffffff', '#ff00ff']
                    });
                    if (Date.now() < end) requestAnimationFrame(frame);
                };
                frame();

                setTimeout(() => setIsSuccess(false), 4000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-32 px-4 md:px-10 max-w-5xl mx-auto">
            <div className="contact-form glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/8 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-800/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                    {/* Left side */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            Let&apos;s Create Something{" "}
                            <span className="text-purple-400">Epic.</span>
                        </h2>
                        <p className="text-purple-100/50 text-lg leading-relaxed">
                            Whether you have a groundbreaking idea, need a premium web presence,
                            or just want to say hi — my inbox is always open.
                        </p>

                        {/* Social icons with orbit glow */}
                        <div className="flex gap-3 pt-6">
                            {SOCIALS.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className="group relative p-4 glass rounded-2xl hover:bg-purple-500/10 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon
                                            size={22}
                                            className="text-purple-300/70 group-hover:text-purple-300 transition-colors"
                                        />
                                        {/* Orbit ring */}
                                        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-500" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side — form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <FloatingInput
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <FloatingInput
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <FloatingInput
                            label="Your Message"
                            name="message"
                            textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="w-full py-5 glass rounded-2xl text-center text-purple-300 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                                >
                                    <Check size={20} className="text-green-400" />
                                    Message Sent Successfully!
                                </motion.div>
                            ) : (
                                <motion.button
                                    key="submit"
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <div className="relative flex items-center justify-center w-6 h-6">
                                            <div className="absolute inset-0 rounded-full border-t-2 border-white border-r-2 border-transparent animate-spin" />
                                            <div className="absolute inset-1 rounded-full border-b-2 border-purple-300 border-l-2 border-transparent animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.7s" }} />
                                            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff] animate-pulse" />
                                        </div>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Beam
                                        </>
                                    )}
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
}
