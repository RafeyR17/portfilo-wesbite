"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DetailSectionProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
    delay?: number;
}

export default function DetailSection({ title, icon, children, delay = 0 }: DetailSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="glass-premium p-8 md:p-10 rounded-2xl hover:border-purple-400/50 transition-all duration-500 mb-10"
        >
            <div className="flex items-center gap-4 mb-6">
                {icon && <div className="text-purple-400">{icon}</div>}
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                    {title}
                </h3>
            </div>
            <div className="prose prose-invert prose-purple max-w-none">
                {children}
            </div>
        </motion.div>
    );
}
