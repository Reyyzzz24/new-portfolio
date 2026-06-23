import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";

const AnimatedParagraph = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.4"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [-40, 0]);

    return (
        <motion.p ref={ref} style={{ opacity, x }} className="text-cyan-100/80 font-normal leading-relaxed text-left text-sm md:text-base">
            {children}
        </motion.p>
    );
};

const StatItem = ({ number, suffix, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const [rounded, setRounded] = React.useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, number, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (latest) => setRounded(Math.round(latest))
            });
            return () => controls.stop();
        }
    }, [isInView, count, number]);

    return (
        <div ref={ref} className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light tracking-tight text-white">
                <span>{rounded}</span>
                {suffix}
            </span>
            <span className="text-[10px] md:text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                {label}
            </span>
        </div>
    );
};

const About = () => {
    const titleRef = useRef(null);
    const { scrollYProgress: titleScroll } = useScroll({
        target: titleRef,
        offset: ["start 0.9", "start 0.6"]
    });

    const titleOpacity = useTransform(titleScroll, [0, 1], [0, 1]);
    const titleX = useTransform(titleScroll, [0, 1], [-30, 0]);

    const imgRef = useRef(null);
    const { scrollYProgress: imgScroll } = useScroll({
        target: imgRef,
        offset: ["start 0.8", "end 1"]
    });
    const imgOpacity = useTransform(imgScroll, [0, 1], [0, 1]);
    const imgScale = useTransform(imgScroll, [0, 1], [0.95, 1]);

    return (
        /* BACKGROUND LUAR: PUTIH */
        <section id="about" className="bg-white min-h-screen w-full flex flex-col select-none">
            
            {/* FRAME ROUNDED: CYAN-950 */}
            <div className="max-w-7xl mx-auto w-full bg-cyan-950 rounded-[48px] overflow-hidden p-8 md:p-16 lg:p-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Kolom Kiri: Teks & Statistik */}
                    <div className="flex flex-col justify-between h-full lg:col-span-7">
                        <div className="w-full">
                            <motion.h2
                                ref={titleRef}
                                style={{ opacity: titleOpacity, x: titleX }}
                                className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8"
                            >
                                About <span className="text-cyan-500 font-normal">Me</span>
                            </motion.h2>

                            <div className="space-y-6">
                                <AnimatedParagraph>
                                    I am a versatile Fullstack Developer and Product Designer based in Bogor,
                                    driven by a passion for transforming complex data into intuitive, high-performance
                                    digital experiences. My work bridges the gap between aesthetic design and functional
                                    engineering.
                                </AnimatedParagraph>
                                <AnimatedParagraph>
                                    My technical expertise spans beyond traditional web development; I integrate
                                    Machine Learning into my projects to build intelligent, data-driven systems
                                    that solve real-world problems.
                                </AnimatedParagraph>
                                <AnimatedParagraph>
                                    Beyond writing code, I am an avid Video Editor. This unique creative skill allows
                                    me to maintain a high standard of visual storytelling dan UX/UI refinement.
                                </AnimatedParagraph>
                            </div>
                        </div>

                        {/* Statistik (Border disesuaikan dengan background gelap) */}
                        <div className="w-full flex mt-12 pt-8">
                            <div className="flex flex-row items-center gap-8 md:gap-14">
                                <StatItem number={10} suffix="+" label="Projects" />
                                <StatItem number={3} suffix="+" label="Years Exp" />
                                <StatItem number={99} suffix="%" label="UAT Score" />
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Foto Profil Elegan */}
                    <motion.div
                        ref={imgRef}
                        style={{ opacity: imgOpacity, scale: imgScale }}
                        className="relative w-full h-[400px] lg:h-[550px] rounded-[32px] overflow-hidden bg-cyan-900/50 lg:col-span-5"
                    >
                        <img
                            src="./assets/image.jpeg"
                            alt="Profile"
                            className="w-full h-full object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;