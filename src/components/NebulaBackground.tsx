"use client";

import { useEffect, useMemo, useState } from "react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function NebulaBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        import("@tsparticles/react").then(({ initParticlesEngine }) => {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        });
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: { color: { value: "transparent" } },
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: { enable: true },
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: { opacity: 0.3, color: "#a855f7" }
                    },
                },
            },
            particles: {
                color: {
                    value: ["#a855f7", "#ffffff", "#d8b4fe"]
                },
                links: {
                    color: "#a855f7",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: { min: 0.2, max: 0.6 },
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: isMobile ? 50 : 120
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 4.5 },
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false
                    }
                },
                twinkle: {
                    particles: {
                        enable: true,
                        color: "#ffffff",
                        frequency: 0.05,
                        opacity: 1
                    }
                }
            },
            detectRetina: true,
        }),
        [isMobile]
    );

    if (!init) return null;

    return (
        <div className="fixed inset-0 -z-10">
            {/* Flowing gradient base */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Particles - Disabled on mobile for performance */}
            {!isMobile && (
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute inset-0"
                />
            )}

            {/* Radial depth glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(168,85,247,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(77,0,128,0.15),transparent_50%)]" />
        </div>
    );
}
