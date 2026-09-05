import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(function handleScrollToTopCheck() {
        const check = () => {
            setIsVisible(window.scrollY > 600);
        };
        check();
        window.addEventListener('scroll', check, { passive: true });
        return () => window.removeEventListener('scroll', check);
    }, []);

    function toTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 8 }}
                    transition={{ duration: 0.2 }}
                    onClick={toTop}
                    aria-label="Back to top"
                    className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
                >
                    <ArrowUp className="h-5 w-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
