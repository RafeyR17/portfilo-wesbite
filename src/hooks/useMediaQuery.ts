import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        
        // Set initial state correctly on mount
        setMatches(media.matches);
        
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    // Default to false on server, correctly updated on client mount
    return mounted ? matches : false;
}

export function useIsMobile() {
    return useMediaQuery("(max-width: 768px)");
}
