"use client";

import { motion } from "framer-motion";
import { Github, LineChart, Cpu, MessageSquare, Terminal, Layers, Box, Globe, ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NebulaBackground from "@/components/NebulaBackground";

const ML_PROJECTS = [
    {
        title: "Titanic Survival Prediction",
        description: "Classic classification model predicting survival likelihood using passenger metadata and social status.",
        icon: <Users className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/titanic-survivor-prediction"
    },
    {
        title: "California Housing Regression",
        description: "Predicting median house values based on census data using ensemble learning techniques.",
        icon: <LineChart className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/housing-regression"
    },
    {
        title: "MNIST Digit Recognition",
        description: "Deep learning CNN trained to recognize handwritten digits with over 99% accuracy.",
        icon: <Cpu className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/mnist-digit-cnn"
    },
    {
        title: "IMDb Sentiment Analysis",
        description: "NLP model using LSTM to classify movie reviews as positive or negative based on text patterns.",
        icon: <MessageSquare className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/sentiment-analysis-lstm"
    },
    {
        title: "Personal Finance Tracker",
        description: "Smart expense categorizer using k-means clustering to identify spending patterns automatically.",
        icon: <Box className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/finance-tracker-ml"
    },
    {
        title: "URL Shortener API",
        description: "High-performance microservice with analytics and custom expiration using Redis.",
        icon: <Globe className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/url-shortener-go"
    },
    {
        title: "Sorting Visualizer",
        description: "Interactive tool to visualize various sorting algorithms (Merge, Quick, Heap) in real-time.",
        icon: <Layers className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/sorting-visualizer"
    },
    {
        title: "Library Management API",
        description: "Robust RESTful API for inventory tracking and lending workflows with full CRUD.",
        icon: <Terminal className="w-6 h-6" />,
        github: "https://github.com/RafeyR17/library-api-node"
    }
];

// Helper for ML category label
import { } from "lucide-react";

export default function MLExperiments() {
    return (
        <main className="min-h-screen relative text-white">
            <NebulaBackground />
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
                {/* Back Link */}
                <Link 
                    href="/projects" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Main Projects
                </Link>

                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-glow">
                        Machine Learning <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Experiments</span>
                    </h1>
                    <p className="text-purple-200/60 text-lg md:text-xl max-w-3xl mx-auto">
                        A collection of data science classics, algorithmic explorations, and foundational ML models.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {ML_PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-premium p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] bg-purple-900/5"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} target="_blank" className="text-purple-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                            <p className="text-purple-100/60 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>
                            
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 group-hover:text-purple-200">
                                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                ML Experiment
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
