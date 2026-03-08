"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 500 };
    const trailConfig = { damping: 40, stiffness: 150 };

    const borderX = useSpring(cursorX, springConfig);
    const borderY = useSpring(cursorY, springConfig);

    // Trail elements
    const trail1X = useSpring(cursorX, { damping: 30, stiffness: 200 });
    const trail1Y = useSpring(cursorY, { damping: 30, stiffness: 200 });
    const trail2X = useSpring(cursorX, { damping: 50, stiffness: 100 });
    const trail2Y = useSpring(cursorY, { damping: 50, stiffness: 100 });

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

        const moveCursor = (e: MouseEvent) => {
            // Set initial position immediately to avoid jump
            if (!isVisible) {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
                setIsVisible(true);
            } else {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Optimized event delegation for interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest("a, button, [role='button'], input, textarea, .glass-card, .project-card, .skill-card, .tech-badge");
            if (isInteractive) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseover", handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);


    return (
        <>
            {!isTouchDevice && (
                <>
                    {/* Trail 2 (Slowest) */}
                    <motion.div
                        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[997] opacity-20"
                        style={{
                            x: trail2X,
                            y: trail2Y,
                            translateX: "-50%",
                            translateY: "-50%",
                            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                        }}
                    />

                    {/* Trail 1 */}
                    <motion.div
                        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[998] opacity-40"
                        style={{
                            x: trail1X,
                            y: trail1Y,
                            translateX: "-50%",
                            translateY: "-50%",
                            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                        }}
                    />

                    {/* Main Orb */}
                    <motion.div
                        className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] bg-purple-500"
                        style={{
                            x: borderX,
                            y: borderY,
                            translateX: "-50%",
                            translateY: "-50%",
                            width: isHovering ? 28 : 22,
                            height: isHovering ? 28 : 22,
                            boxShadow: isHovering
                                ? "0 0 30px #a855f7, 0 0 60px rgba(168,85,247,0.4)"
                                : "0 0 20px #a855f7",
                        }}
                        animate={{
                            scale: isVisible ? 1 : 0,
                            opacity: isVisible ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </>
            )}

            <style jsx global>{`
                @media (pointer: fine) {
                    body, a, button, [role='button'], input, textarea, .glass-card, .project-card, .skill-card {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
}
