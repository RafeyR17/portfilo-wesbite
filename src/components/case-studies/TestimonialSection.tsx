"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
    text: string;
    author: string;
    role: string;
}

interface TestimonialSectionProps {
    testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
    return (
        <section className="py-20">
            <div className="flex flex-col items-center mb-12">
                <Quote className="w-12 h-12 text-purple-500/40 mb-4" />
                <h3 className="text-3xl font-serif font-bold text-white text-center">
                    What Clients Say
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-premium p-8 rounded-2xl relative group hover:border-purple-400/50 transition-all duration-300"
                    >
                        <p className="text-gray-300 italic mb-6 leading-relaxed">
                            "{t.text}"
                        </p>
                        <div>
                            <p className="text-white font-bold">{t.author}</p>
                            <p className="text-purple-400 text-sm">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
