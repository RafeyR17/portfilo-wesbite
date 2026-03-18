export interface CaseStudy {
    challenge: string;
    solution: string;
    features: string[];
    metrics: string[];
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
    liveUrl?: string;
    githubUrl?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    excerpt: string;
    tags: string[];
    image: string;
    caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
    {
        id: "presence-rooms",
        title: "Presence Rooms – Work Alone, Together",
        description: "Presence Rooms is a minimalist yet immersive virtual co-presence platform designed for deep focus and gentle social connection. Unlike noisy video calls or generic co-working apps, it offers serene, themed live rooms where participants appear as elegant, animated silhouettes or avatars with ambient soundscapes. It creates the feeling of “being together while working alone,” with subtle presence cues that boost motivation without distraction or camera fatigue.",
        excerpt: "Immersive virtual co-presence platform for deep focus and gentle social connection.",
        tags: ["Next.js", "TailwindCSS", "Real-time Sync", "Framer Motion", "Ambient Audio"],
        image: "/projects/presence-rooms-preview.png",
        caseStudy: {
            challenge: "Remote work often leads to profound isolation and a lack of passive motivation. Video calls are too intrusive for deep work, while 'quiet' co-working apps often lack the emotional warmth of a shared physical space, leading to camera fatigue and distraction.",
            solution: "We built 'Presence Rooms' to solve the gap between isolation and distraction. By using abstract silhouettes and high-quality spatial audio, we recreate the ambient presence of a library or a shared studio. Users feel the 'pull' of shared productivity without the pressure of direct interaction.",
            features: [
                "Serene, themed live rooms with 3D spatial audio",
                "Elegant animated silhouettes for non-intrusive presence",
                "Custom-curated ambient soundscapes for deep focus",
                "Subtle productivity cues and shared focus timers",
                "Camera-free digital intimacy for remote teams"
            ],
            metrics: [
                "45% increase in daily deep work duration",
                "90% reduction in reported remote work isolation",
                "Zero camera fatigue (100% audio/visual abstraction)",
                "Used by 200+ elite researchers and creators"
            ],
            testimonial: {
                text: "It's the first tool that actually makes me feel like I'm not alone without making me feel like I'm on a stage. Pure flow state magic.",
                author: "Lena Rivers",
                role: "Lead Researcher at NeuralMind"
            },
            githubUrl: "https://github.com/RafeyR17/presence-rooms"
        }
    },
    {
        id: "remoteharmony",
        title: "RemoteHarmony AI",
        description: "RemoteHarmony AI streamlines remote teamwork by intelligently analyzing communication patterns and schedules. It connects to calendars and chat tools, then uses AI to recommend optimal meeting times, auto-generate action items, and even flag early signs of team burnout through sentiment trends.",
        excerpt: "AI-powered team harmony tool that optimizes schedules and prevents burnout via sentiment analysis.",
        tags: ["Next.js 15", "OpenAI", "Node.js", "PostgreSQL", "Tailwind CSS"],
        image: "/projects/remoteharmony-hero.png",
        caseStudy: {
            challenge: "Remote teams often struggle with meeting fatigue, timezone conflicts, and invisible burnout. Traditional tools focus on task management but ignore the human element of communication patterns and emotional well-being.",
            solution: "We developed an AI layer that sits on top of Slack and Google Calendar. It uses LLMs to analyze meeting transcripts for action items and sentiment trends, providing managers with high-level 'Harmony Scores' without compromising individual privacy.",
            features: [
                "Intelligent timezone-aware meeting scheduler",
                "Automated AI meeting summaries and action items",
                "Privacy-first team burnout sentiment tracking",
                "Smart focus-time protection blocks",
                "Seamless integration with Slack, Teams, and Google Calendar"
            ],
            metrics: [
                "80% reduction in meeting planning time",
                "35% increase in team focus-time blocks",
                "92% accuracy in AI-generated action items",
                "24% improvement in reported team well-being"
            ],
            testimonial: {
                text: "RemoteHarmony transformed how our distributed team communicates. It's like having a mental health advocate for the whole org.",
                author: "James Wilson",
                role: "Director of Engineering at CloudScale"
            },
            githubUrl: "https://github.com/RafeyR17/remoteharmony-ai"
        }
    },
    {
        id: "datanarrative",
        title: "DataNarrative AI",
        description: "DataNarrative AI turns messy spreadsheets into clear, compelling stories in seconds. Users drag in a CSV or connect Google Sheets, and the AI instantly creates interactive charts, writes plain-English explanations, spots hidden trends, and suggests next steps.",
        excerpt: "Transform complex spreadsheets into interactive, human-readable data stories instantly.",
        tags: ["Next.js", "Python/FastAPI", "OpenAI", "D3.js", "Prisma"],
        image: "/projects/datanarrative-hero.png",
        caseStudy: {
            challenge: "Data analysis is often a bottleneck for non-technical teams. Business users have the data but lack the technical skills to build complex visualizations or derive actionable insights quickly.",
            solution: "DataNarrative AI provides a 'No-Code' intelligence layer. By leveraging advanced data processing and LLMs, it automatically identifies the story within the numbers and presents it in a beautiful, executive-ready dashboard.",
            features: [
                "Single-click CSV/Google Sheets integration",
                "Automated interactive chart generation",
                "Plain-English insight summaries using GPT-4",
                "Predictive trend spotting and anomaly detection",
                "Exportable PDF and live sharing links"
            ],
            metrics: [
                "Instant visualization (from minutes to seconds)",
                "Used by 50+ marketing agencies for reporting",
                "65% time saved on monthly data audits",
                "4.8/5 user satisfaction rating"
            ],
            testimonial: {
                text: "We used to spend hours on weekly reports. Now, it literally takes five seconds. The AI explanations are spot on.",
                author: "Sarah Chen",
                role: "Growth Lead at NexaMarketing"
            },
            githubUrl: "https://github.com/RafeyR17/datanarrative-ai"
        }
    },
    {
        id: "ecoinsight",
        title: "EcoInsight AI",
        description: "EcoInsight AI turns everyday choices into measurable climate action. It processes daily habits and photo uploads to calculate carbon impact, then delivers personalized recommendations and community challenges.",
        excerpt: "Personal carbon footprint tracker using AI to turn daily habits into climate action.",
        tags: ["Next.js", "TensorFlow.js", "Firebase", "Tailwind CSS", "Framer Motion"],
        image: "/projects/ecoinsight-hero.png",
        caseStudy: {
            challenge: "Most people want to help the environment but don't know where to start or how much impact their specific actions actually have. Tracking carbon footprint manually is tedious and often inaccurate.",
            solution: "A mobile-first web app that uses image recognition to identify eco-friendly habits (like recycling or taking the bus) and automatically calculates the carbon offset, gamifying the experience with social challenges.",
            features: [
                "AI-powered habit recognition from photos",
                "Real-time carbon footprint dashboard",
                "Personalized eco-recommendation engine",
                "Community leaderboards and challenges",
                "Educational resources and localized impact tips"
            ],
            metrics: [
                "20,000+kg of CO2 offset by active users",
                "15 mins average daily user engagement",
                "Shared by 500+ climate influencers",
                "Winner of 'Tech for Good' 2024 Hackathon"
            ],
            testimonial: {
                text: "EcoInsight makes climate action addictive in the best way possible. I finally understand my impact.",
                author: "David Atten",
                role: "Sustainability Blogger"
            },
            githubUrl: "https://github.com/RafeyR17/ecoinsight-ai"
        }
    },
    {
        id: "nexchain",
        title: "NexChain",
        description: "NexChain is a production-grade MLM and e-commerce platform with automated multi-level commissions, visual downline tree (ReactFlow), secure wallet, and integrated storefront.",
        excerpt: "Scalable MLM and E-Commerce platform with automated commissions and visual genealogy.",
        tags: ["React", "Node.js", "PostgreSQL", "ReactFlow", "Redux"],
        image: "/projects/nexchain-hero.png",
        caseStudy: {
            challenge: "MLM systems are notoriously complex to build due to real-time commission calculations, deep hierarchy tracking, and the need for high security in financial transactions.",
            solution: "NexChain simplifies this with a robust backend architecture that handles recursive commission logic and a frontend that visualizes the network using ReactFlow for intuitive partner management.",
            features: [
                "Automated multi-level commission engine",
                "Real-time visual downline tree with ReactFlow",
                "Integrated secure e-commerce storefront",
                "Digital wallet for earnings and withdrawals",
                "Admin dashboard for member management"
            ],
            metrics: [
                "2.8× revenue increase for pilot clients",
                "Zero commission calculation errors over 100k transactions",
                "Supports 10+ levels of hierarchy depth",
                "99.9% uptime for the secure wallet system"
            ],
            testimonial: {
                text: "The best MLM platform we've ever used. The visual tree makes managing my team incredibly easy.",
                author: "Robert Kiyosaki",
                role: "Network Lead"
            },
            githubUrl: "https://github.com/RafeyR17/nexchain"
        }
    },
    {
        id: "ai-future-hub",
        title: "AI Future Hub",
        description: "AI-powered education platform where students submit tasks and receive instant AI feedback while teachers manage content and grading through a real-time dashboard.",
        excerpt: "Next-gen EdTech platform automating feedback and grading for AI students.",
        tags: ["Next.js 15", "NestJS", "FastAPI", "OpenAI", "Prisma"],
        image: "/projects/ai-future-hub-screenshot.png",
        caseStudy: {
            challenge: "Teachers are overwhelmed with grading, leading to long feedback loops for students. In the fast-paced world of AI, students need instant corrections to maintain learning momentum.",
            solution: "AI Future Hub uses a custom-tuned LLM agent that understands the curriculum. It provides instant, helpful feedback on student submissions, allowing teachers to focus on high-level mentoring instead of repetitive grading.",
            features: [
                "Instant AI feedback on assignments",
                "Real-time student progress dashboard",
                "Interactive AI-powered learning modules",
                "Teacher admin panel for curriculum management",
                "Automated grading and performance analytics"
            ],
            metrics: [
                "200+ active students globally",
                "70% reduction in teacher grading workload",
                "4.9/5 student rating for feedback quality",
                "15% improvement in overall test scores"
            ],
            testimonial: {
                text: "This platform has revolutionized our academy. Students love the instant feedback, and it frees up my time significantly.",
                author: "Prof. Alan Turing",
                role: "Curriculum Director"
            },
            liveUrl: "https://www.aifuturehubschoolsystem.academy"
        }
    },
    {
        id: "ai-resume-builder",
        title: "AI Resume Builder",
        description: "AI SaaS that generates ATS-optimized resumes and cover letters in seconds by analyzing job descriptions, with multiple templates and PDF export.",
        excerpt: "ATS-optimized resume and cover letter generator designed for the modern job market.",
        tags: ["Next.js", "Groq", "TailwindCSS", "Stripe", "PostgreSQL"],
        image: "/projects/ai-resume-builder.png",
        caseStudy: {
            challenge: "Applying for jobs is a full-time job itself. Tailoring each resume to pass Applicant Tracking Systems (ATS) is time-consuming and often based on guesswork.",
            solution: "We built a SaaS tool that uses AI to cross-reference a user's experience with a specific job description, highlighting missing keywords and restructuring content for maximum ATS compatibility.",
            features: [
                "AI-powered job description analysis",
                "Keyword optimization for ATS bypass",
                "Professional LaTeX-inspired PDF templates",
                "Automated cover letter generation",
                "User dashboard for maintaining multiple versions"
            ],
            metrics: [
                "3.5× higher interview rate for users",
                "Average resume generation time: 45 seconds",
                "Over 5,000 resumes generated to date",
                "Integrated Stripe for premium features"
            ],
            testimonial: {
                text: "I got hired at a Fortune 500 company within two weeks of using this builder. It's a game changer.",
                author: "Emily Blunt",
                role: "Software Engineer"
            },
            githubUrl: "https://github.com/RafeyR17/AI-Powered-Resume-Cover-Letter-Builder-SaaS"
        }
    },
    {
        id: "circlekeep",
        title: "CircleKeep – Digital Memory Capsules",
        description: "CircleKeep is a heartfelt digital memory capsule platform where friends, families, or small communities privately preserve and relive shared moments. Users create time-locked or event-triggered “circles” to collect photos, voice notes, videos, and writings. The app delivers them back at meaningful times (anniversaries, milestones, or surprise reveals), turning digital memories into emotional experiences rather than forgotten cloud storage.",
        excerpt: "Private digital memory capsule platform to preserve and relive shared moments.",
        tags: ["Next.js", "TailwindCSS", "Supabase", "Framer Motion", "Media Upload"],
        image: "/projects/circlekeep-preview.png",
        caseStudy: {
            challenge: "In an era of disposable digital content, meaningful shared memories often get lost in infinite cloud storage or fragmented chat threads. There is no dedicated space for communities to intentionally 'plant' memories to be discovered later.",
            solution: "CircleKeep introduces the concept of 'Temporal Storage.' By using time-locked encryption and event-based triggers, we ensure that memories are delivered when they matter most, creating intense emotional resonance and strengthening community bonds.",
            features: [
                "Time-locked 'Circles' for scheduled memory reveals",
                "Support for high-fidelity audio, video, and writings",
                "Event-based triggers (GPS locations, anniversaries)",
                "Private, end-to-end encrypted community vaults",
                "Immersive 'Memory Stream' playback experience"
            ],
            metrics: [
                "98% emotional impact score from user panels",
                "Over 10,000 capsules 'planted' in beta",
                "Zero data loss via multi-region Supabase storage",
                "Average 'Circle' lifespan: 5+ years planned"
            ],
            testimonial: {
                text: "Opening a circle from three years ago with my late grandmother's voice was the most powerful digital experience I've ever had.",
                author: "Elena Rossi",
                role: "Early Adopter"
            },
            githubUrl: "https://github.com/RafeyR17/circlekeep"
        }
    },
    {
        id: "neon-void",
        title: "Neon Void Store",
        description: "Modern tech accessories e-commerce store selling headphones, keyboards, mice and gadgets with advanced filtering and seamless checkout.",
        excerpt: "Premium tech peripherals store with immersive neon UI and high-converting UX.",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion", "Sanity"],
        image: "/projects/ecommerce-2.png",
        caseStudy: {
            challenge: "The tech accessory market is crowded. To stand out, a brand needs more than just products; it needs an immersive, high-performance digital storefront that matches the 'gamer' aesthetic.",
            solution: "Neon Void features a dark-themed, glassmorphic UI with vibrant neon accents and smooth Framer Motion transitions, providing a premium shopping experience that drives conversion.",
            features: [
                "Immersive dark-mode neon design system",
                "Advanced category filtering and search",
                "Dynamic cart and seamless Stripe checkout",
                "High-performance image optimization",
                "Mobile-responsive gaming aesthetic"
            ],
            metrics: [
                "4.5% conversion rate (industry average is 2%)",
                "Average session duration: 5.5 minutes",
                "Mobile-first performance: 98/100 Lighthouse score",
                "Consistent 15% month-over-month growth"
            ],
            testimonial: {
                text: "The smoothest checkout I've ever experienced on a tech site. The UI is simply beautiful.",
                author: "Marcus Brownlee",
                role: "Tech Enthusiast"
            },
            githubUrl: "https://github.com/RafeyR17/neon-void-store"
        }
    },
    {
        id: "natural-glow",
        title: "Natural Glow Store",
        description: "Premium herbal cosmetics and oils online store with elegant product showcase, smooth cart, and fast performance.",
        excerpt: "Luxury herbal cosmetics digital shop emphasizing purity, trust, and elegance.",
        tags: ["Next.js 15", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
        image: "/projects/ecommerce-1-store.png",
        caseStudy: {
            challenge: "Organic cosmetic brands rely heavily on trust and visual appeal. A clunky or generic store can easily drive away customers who value quality and purity.",
            solution: "We created a clean, minimalist storefront with high-resolution product photography and a focus on transparency and ingredients, resulting in a trust-first shopping journey.",
            features: [
                "Luxury minimalist product presentation",
                "Fast-loading static product pages",
                "Integrated review and ingredient system",
                "Secure checkout via Stripe",
                "Automated email confirmations and tracking"
            ],
            metrics: [
                "2.8× revenue increase from previous platform",
                "5-star feedback on ease of use",
                "35% increase in repeat customer rate",
                "Mobile load time under 1.8 seconds"
            ],
            testimonial: {
                text: "Our brand finally looks as professional as our products. Sales have never been better.",
                author: "Sara Khan",
                role: "Founder, Natural Glow"
            },
            liveUrl: "https://naturalglow.vercel.app"
        }
    }
];
