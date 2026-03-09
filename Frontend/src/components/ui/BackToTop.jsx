import { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when user scrolls down 90% of the viewport height (approx hero section)
            if (window.pageYOffset > window.innerHeight * 0.9) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`back-to-top glass ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to Top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-up"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
};

export default BackToTop;
