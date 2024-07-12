'use client';

import { Fragment, useRef } from "react";
import Hero from "@/components/ui/hero";
import Clients from "@/components/ui/clients";
import Timeline from "@/components/ui/events";
import ScrollPrompt from "@/components/ui/scrollDown";
import { Progress } from "@/components/ui/progress";
import SimpleForm from "@/components/ui/simpleForm";
import ProductCard from "@/components/ui/productCard";
import Footer from "@/components/ui/footer";
import { motion, useScroll } from "framer-motion";

export default function Page() {
    const formContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();

    const scrollToForm = () => {
        if (formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Fragment>
            <div className={"bg-gray-800 w-full overflow-x-hidden"}>
                <motion.div className="fixed top-0 left-0 right-0 h-2 transform-origin-left bg-red-400 rounded opacity-100" style={{scaleX: scrollYProgress}}/>
                <Hero scrollToForm={scrollToForm} />
                <ScrollPrompt/>
                <Timeline/>
                <Clients/>
                <ProductCard/>
                <div ref={formContainerRef}>
                    <SimpleForm />
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
}
