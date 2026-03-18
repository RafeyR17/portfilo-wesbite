"use client";

import Image from "next/image";
import Link from "next/link";
import { 
    ArrowLeft, Globe, Lock, Zap, CheckCircle2, Github,
    Cpu, Rocket, Target, Users, Sparkles, Volume2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NebulaBackground from "@/components/NebulaBackground";

export default function PresenceRoomsCaseStudy() {
    return (
        <main className="min-h-screen relative text-white selection:bg-purple-500/30">
            <NebulaBackground />
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="mb-16 space-y-6">
                    <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight text-glow">
                        Presence Rooms 
                        <span className="text-purple-400 block md:inline">
                             – Work Alone, Together
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100/70 max-w-3xl font-sans leading-relaxed">
                        A minimalist yet immersive virtual co-presence platform designed for deep focus and gentle social connection through visual abstraction and spatial audio.
                    </p>
                </div>

                {/* Hero Screenshot */}
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass-premium mb-20 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                    <Image
                        src="/projects/presence-rooms-preview.png"
                        alt="Presence Rooms Hero"
                        fill
                        priority
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="glass-premium p-8 rounded-3xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Target className="w-6 h-6" />
                            <p className="text-xs uppercase tracking-widest font-bold">Focus</p>
                        </div>
                        <p className="text-lg font-semibold">Deep Work & Flow State Optimization</p>
                    </div>
                    <div className="glass-premium p-8 rounded-3xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Users className="w-6 h-6" />
                            <p className="text-xs uppercase tracking-widest font-bold">Social Mode</p>
                        </div>
                        <p className="text-lg font-semibold">Ambient, Low-Pressure Co-Presence</p>
                    </div>
                    <div className="glass-premium p-8 rounded-3xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Sparkles className="w-6 h-6" />
                            <p className="text-xs uppercase tracking-widest font-bold">Tech Stack</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "Framer Motion", "Web Audio API", "WebSockets"].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-[10px] text-purple-200 font-bold uppercase tracking-wider">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Case Study Sections */}
                <div className="space-y-24">
                    {/* Challenge */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
                                <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Lock size={24} /></span>
                                The Challenge
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-purple-100/80 leading-relaxed font-sans">
                                Remote work often leads to profound isolation and a lack of passive motivation. Video calls are too intrusive for deep work, while &quot;quiet&quot; co-working apps often lack the emotional warmth of a shared physical space, leading to camera fatigue and distraction. We needed a way to feel &quot;connected&quot; without being watched.
                            </p>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
                                <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Rocket size={24} /></span>
                                The Solution
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <p className="text-lg text-purple-100/80 leading-relaxed font-sans">
                                Presence Rooms creates a serene, non-intrusive environment where users appear as soft, animated silhouettes. By integrating high-fidelity ambient soundscapes and spatial audio cues (hearing a distant &apos;shuffling&apos; or &apos;typing&apos; of a friend), we recreate the subtle energy of a shared studio. It&apos;s about recovering the &quot;third space&quot; in a digital-first world.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Themed live rooms with customizable 3D audio",
                                    "Visual abstraction to eliminate camera fatigue",
                                    "Shared study/work timers (Pomodoro style)",
                                    "Ambient soundscape layers (Rain, Cafe, Library)",
                                    "Subtle 'nudge' interactions for motivation"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="mt-1.5 p-1 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-purple-100/70 group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="glass-premium p-10 md:p-16 rounded-[3rem] border border-purple-500/20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                            <Volume2 size={200} className="text-purple-500" />
                        </div>
                        
                        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-glow">Results & Impact</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                "45% increase in daily deep work duration",
                                "90% reduction in remote work isolation",
                                "Zero camera fatigue (100% abstraction)",
                                "Used by 200+ elite researchers and creators",
                                "15% improvement in task completion speed"
                            ].map((metric, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-purple-950/20 p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all group">
                                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                                        <Zap size={24} />
                                    </div>
                                    <span className="text-xl font-semibold text-white/90">{metric}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative py-12 px-8 text-center bg-gradient-to-b from-purple-500/5 to-transparent rounded-[3rem]">
                        <div className="text-6xl text-purple-500/20 absolute -top-4 left-1/2 -translate-x-1/2 font-serif font-bold">“</div>
                        <blockquote className="text-2xl md:text-3xl italic text-purple-100/90 leading-relaxed relative z-10 font-serif mb-8 max-w-4xl mx-auto">
                            It&apos;s the first tool that actually makes me feel like I&apos;m not alone without making me feel like I&apos;m on a stage. Pure flow state magic.
                        </blockquote>
                        <div className="space-y-1">
                            <p className="text-white font-bold text-lg">Lena Rivers</p>
                            <p className="text-purple-400/80 text-sm tracking-widest uppercase">Lead Researcher at NeuralMind</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-6 justify-center pt-8">
                        <Link
                            href="https://github.com/RafeyR17/presence-rooms"
                            target="_blank"
                            className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-widest text-sm"
                        >
                            <Github className="w-5 h-5" />
                            View Source
                        </Link>
                        <Link
                            href="#"
                            className="px-10 py-5 rounded-full glass-premium border border-purple-500/40 text-white font-bold hover:bg-purple-600/20 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-widest text-sm"
                        >
                            <Globe className="w-5 h-5" />
                            Live Demo
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
