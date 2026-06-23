import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import HeroDesktop from "../components/HeroDesktop";
import HeroMobile from "../components/HeroMobile";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const xTop = useTransform(scrollYProgress, [0, 0.8], ["0px", "-600px"]);
    const xBottom = useTransform(scrollYProgress, [0, 0.8], ["0px", "600px"]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
    const yBadge = useTransform(scrollYProgress, [0, 1], ["0px", "-280px"]);

    return (
        <section ref={targetRef} className="relative min-h-screen bg-white overflow-hidden font-sans select-none">
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
            }} />
            <div className="relative z-10 flex flex-col min-h-screen md:p-6 lg:p-8 p-0">
                <Navbar />
                <HeroDesktop xTop={xTop} xBottom={xBottom} yImage={yImage} yBadge={yBadge} />
                <HeroMobile xTop={xTop} xBottom={xBottom} yImage={yImage} yBadge={yBadge} />
            </div>
        </section>
    );
};
export default Hero;