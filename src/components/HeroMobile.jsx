import { motion } from "framer-motion";

const HeroMobile = ({ xTop, xBottom, yImage, yBadge }) => {
    const badgeVariants = {
        hidden: { opacity: 1, y: 130 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            rotate: custom.rotate,
            transition: { duration: 1.2, delay: 0.8 + custom.delay, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <div className="md:hidden relative w-full h-screen overflow-hidden flex flex-col pt-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700/60 font-semibold text-center">
                Software Engineer & Creative
            </p>

            <div className="absolute top-20 w-full flex flex-col items-center z-20 pointer-events-none">
                <h1 className="w-full text-[24vw] font-black tracking-tighter leading-[0.85] text-center uppercase mt-4 text-cyan-950 flex flex-col items-center">
                    <motion.span style={{ x: xTop }} className="block">
                        REVA
                    </motion.span>

                    <motion.span
                        style={{
                            x: xBottom,
                            WebkitTextStroke: "1px #0891b2",
                            color: "transparent"
                        }}
                    >
                        YULIAN
                    </motion.span>

                    <motion.span style={{ x: xTop }} className="block">
                        SATRIA
                    </motion.span>
                </h1>
            </div>

            <div className="flex-1" />

            <div className="w-full flex flex-col items-center mt-30 z-20 relative">
                <motion.div
                    style={{ y: yBadge }}
                    className="absolute top-110 flex justify-center gap-2 px-4 z-30"
                >
                    <motion.span
                        custom={{ rotate: -5, delay: 0.1 }}
                        variants={badgeVariants} initial="hidden" animate="visible"
                        className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[10px] shadow-sm"
                    >Data Analyst</motion.span>
                    <motion.span
                        custom={{ rotate: 3, delay: 0.2 }}
                        variants={badgeVariants} initial="hidden" animate="visible"
                        className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[10px] shadow-sm"
                    >Video Editing</motion.span>
                    <motion.span
                        custom={{ rotate: -2, delay: 0.3 }}
                        variants={badgeVariants} initial="hidden" animate="visible"
                        className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[10px] shadow-sm"
                    >Fullstack Dev</motion.span>
                </motion.div>

                <div className="w-full flex justify-center z-10">
                    <motion.div
                        style={{ y: yImage }}
                        className="translate-y-20 mr-5 scale-225"
                    >
                        <img
                            src="./assets/mypicture3.png"
                            alt="Reva"
                            className="w-full h-auto object-contain grayscale"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroMobile;