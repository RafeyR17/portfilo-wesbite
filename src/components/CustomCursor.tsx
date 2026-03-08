"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400 };
    const trailConfig = { damping: 30, stiffness: 200 };

    const borderX = useSpring(cursorX, springConfig);
    const borderY = useSpring(cursorY, springConfig);

    // Outer trail (slower follow)
    const trailX = useSpring(cursorX, trailConfig);
    const trailY = useSpring(cursorY, trailConfig);

    // Dynamic size based on hovering state
    const dotSize = isHovering ? 30 : 20;
    const ringSize = isHovering ? 60 : 40;

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleOverInteractive = () => setIsHovering(true);
        const handleOutInteractive = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        // Add hover detection to interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, [role='button'], input, textarea, .glass-card, .project-card, .skill-card"
        );
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleOverInteractive);
            el.addEventListener("mouseleave", handleOutInteractive);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleOverInteractive);
                el.removeEventListener("mouseleave", handleOutInteractive);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return null;

    return (
        <>
            {/* Core dot — radial purple glow */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: dotSize,
                    height: dotSize,
                    background: "radial-gradient(circle, #a855f7 0%, rgba(168,85,247,0.4) 60%, transparent 100%)",
                    boxShadow: "0 0 12px rgba(168,85,247,0.6), 0 0 24px rgba(168,85,247,0.3)",
                }}
                animate={{
                    scale: isVisible ? 1 : 0,
                    width: dotSize,
                    height: dotSize,
                }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
            />

            {/* Ring — spring follow */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[998] border"
                style={{
                    x: borderX,
                    y: borderY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: ringSize,
                    height: ringSize,
                    borderColor: isHovering
                        ? "rgba(168, 85, 247, 0.6)"
                        : "rgba(168, 85, 247, 0.25)",
                    boxShadow: isHovering
                        ? "0 0 20px rgba(168,85,247,0.3)"
                        : "none",
                }}
                animate={{
                    scale: isVisible ? 1 : 0,
                    width: ringSize,
                    height: ringSize,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 250 }}
            />

            {/* Outer trail glow — slowest follow */}
            <motion.div
                className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[997]"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                        "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
                }}
                animate={{
                    scale: isVisible ? 1 : 0,
                }}
            />
        </>
    );
}
