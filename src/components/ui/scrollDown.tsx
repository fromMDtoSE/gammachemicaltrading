import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollPrompt() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide the scroll prompt when the user scrolls down
        const handleScroll = () => {
            setIsVisible(false);
            window.removeEventListener("scroll", handleScroll);
        };

        window.addEventListener("scroll", handleScroll);

        // Check if the component is visible for the first time
        const isFirstVisit = localStorage.getItem("isFirstVisit") === null;
        if (!isFirstVisit) {
            setIsVisible(false);
        }

        // Set isFirstVisit flag to false after the first visit
        localStorage.setItem("isFirstVisit", "false");

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>
            {isVisible && (
                <motion.div
                    className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                    <motion.div
                        className="relative"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity }}
                    >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto">
                            <div className="w-6 h-6 border-b-2 border-r-2 transform rotate-45"></div>
                        </div>
                        <p className="text-sm font-bold mt-2">Scroll down</p>
                    </motion.div>
                </motion.div>
            )}
        </Fragment>
    );
}
