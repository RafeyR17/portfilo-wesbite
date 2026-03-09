"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    tags: string[];
}

export default function CaseStudyCard({ title, excerpt, image, slug, tags }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
        >
            <Link href={`/case-studies/${slug}`} className="block h-full">
                <div className="
          relative h-full flex flex-col
          glass-premium rounded-2xl overflow-hidden
          transition-all duration-500
          group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
          group-hover:border-purple-400/60
        ">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033]/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 rounded-md bg-purple-900/40 border border-purple-500/20 text-[10px] font-medium text-purple-300 uppercase tracking-widest"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                            {title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                            {excerpt}
                        </p>

                        <div className="mt-auto flex items-center text-purple-400 font-semibold text-sm group-hover:gap-2 transition-all">
                            Read Case Study
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
