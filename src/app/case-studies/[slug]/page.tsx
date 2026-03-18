import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
    ArrowLeft, Globe, BarChart4, Lock, Zap, CheckCircle2, Github,
    Cpu, Rocket, Target, Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NebulaBackground from "@/components/NebulaBackground";
import { PROJECTS } from "@/data/projects";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const project = PROJECTS.find((p) => p.id === slug);
    
    if (!project) return { title: "Project Not Found" };
    
    return {
        title: `${project.title} Case Study | Rafey Rashid`,
        description: project.excerpt,
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const slug = (await params).slug;
    const project = PROJECTS.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    const { caseStudy } = project;

    return (
        <main className="min-h-screen relative text-white selection:bg-purple-500/30">
            <NebulaBackground />
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="mb-16 space-y-6">
                    <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight text-glow">
                        {project.title.split('–')[0]} 
                        <span className="text-purple-400 block md:inline">
                            {project.title.includes('–') ? ` ${project.title.split('–')[1]}` : ''}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100/70 max-w-3xl font-sans leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Hero Screenshot */}
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass-premium mb-20 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                    <Image
                        src={project.image}
                        alt={`${project.title} Hero`}
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
                            <p className="text-xs uppercase tracking-widest font-bold">Role</p>
                        </div>
                        <p className="text-lg font-semibold">Lead Full-Stack Developer & AI Architect</p>
                    </div>
                    <div className="glass-premium p-8 rounded-3xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Users className="w-6 h-6" />
                            <p className="text-xs uppercase tracking-widest font-bold">Client Impact</p>
                        </div>
                        <p className="text-lg font-semibold">Production Ready & Scalable Deployment</p>
                    </div>
                    <div className="glass-premium p-8 rounded-3xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Cpu className="w-6 h-6" />
                            <p className="text-xs uppercase tracking-widest font-bold">Key Tech</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 4).map(tech => (
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
                                {caseStudy.challenge}
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
                                {caseStudy.solution}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {caseStudy.features.map((feature, idx) => (
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
                            <BarChart4 size={200} className="text-purple-500" />
                        </div>
                        
                        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-glow">Results & Impact</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {caseStudy.metrics.map((metric, idx) => (
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
                    {caseStudy.testimonial && (
                        <div className="relative py-12 px-8 text-center bg-gradient-to-b from-purple-500/5 to-transparent rounded-[3rem]">
                            <div className="text-6xl text-purple-500/20 absolute -top-4 left-1/2 -translate-x-1/2 font-serif font-bold">“</div>
                            <blockquote className="text-2xl md:text-3xl italic text-purple-100/90 leading-relaxed relative z-10 font-serif mb-8 max-w-4xl mx-auto">
                                {caseStudy.testimonial.text}
                            </blockquote>
                            <div className="space-y-1">
                                <p className="text-white font-bold text-lg">{caseStudy.testimonial.author}</p>
                                <p className="text-purple-400/80 text-sm tracking-widest uppercase">{caseStudy.testimonial.role}</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-6 justify-center pt-8">
                        {caseStudy.liveUrl && (
                            <Link
                                href={caseStudy.liveUrl}
                                target="_blank"
                                className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-widest text-sm"
                            >
                                <Globe className="w-5 h-5" />
                                Live Performance
                            </Link>
                        )}
                        {caseStudy.githubUrl && (
                            <Link
                                href={caseStudy.githubUrl}
                                target="_blank"
                                className="px-10 py-5 rounded-full glass-premium border border-purple-500/40 text-white font-bold hover:bg-purple-600/20 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-widest text-sm"
                            >
                                <Github className="w-5 h-5" />
                                View Source
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
