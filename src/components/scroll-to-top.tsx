import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkScrollVisibility = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Show button when there's scrollable content AND user has scrolled down
            const hasScrollableContent = scrollHeight > clientHeight;
            const hasScrolledDown = scrollTop > 100; // Small threshold to avoid showing immediately
            
            setIsVisible(hasScrollableContent && hasScrolledDown);
        };

        checkScrollVisibility();

        window.addEventListener('scroll', checkScrollVisibility);

        return () => {
            window.removeEventListener('scroll', checkScrollVisibility);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <Button 
            className="fixed bottom-5 right-5 z-50 rounded-full drop-shadow-xl hover:scale-110 transition-spring"
            onClick={() => window.location.href = "#hero"}
            size="icon"
        >
            <ArrowUp  />
        </Button>
    );
};