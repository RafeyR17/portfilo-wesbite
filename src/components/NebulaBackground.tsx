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

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: { value: "transparent" },
            },
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 5,
                            smooth: 10,
                        },
                    },
                },
                modes: {
                    grab: {
                        distance: 200,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 0.5,
                            color: "#a855f7",
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: ["#ffffff", "#a855f7", "#c084fc", "#ff00ff"],
                },
                links: {
                    color: "#a855f7",
                    distance: 160,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: 0.3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 900,
                    },
                    value: 120,
                },
                opacity: {
                    value: { min: 0.15, max: 0.4 },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        sync: false,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3.5 },
                    animation: {
                        enable: true,
                        speed: 1.5,
                        sync: false,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) return null;

    return (
        <div className="fixed inset-0 -z-10">
            {/* Flowing gradient base */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Particles */}
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0"
            />

            {/* Radial depth glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(168,85,247,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(77,0,128,0.15),transparent_50%)]" />
        </div>
    );
}
