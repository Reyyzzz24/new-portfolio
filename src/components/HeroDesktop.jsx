import { motion } from "framer-motion";

const HeroDesktop = ({ xTop, xBottom, yImage, yBadge }) => (
  <div className="hidden md:flex relative flex-1 flex-col items-center justify-center pb-20">
    <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700/60 font-semibold">
      Software Engineer & Creative
    </p>

    <h1 className="w-full text-[12vw] font-bold tracking-tighter leading-[0.9] text-cyan-950 uppercase mt-4 overflow-hidden">
      <motion.div
        style={{ x: xTop }}
        initial={{ x: "1000px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center gap-[2vw]"
      >
        <span>REVA</span>
        <span className="text-[#0891b2]">
          YULIAN
        </span>
      </motion.div>

      <motion.div
        style={{ x: xBottom }}
        initial={{ x: "-1000px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        SATRIA
      </motion.div>
    </h1>

    <motion.div
      style={{ y: yImage }}
      initial={{ y: "110vh" }}
      animate={{ y: "0px" }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute -top-[10%] md:top-[20%] lg:-top-[10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[800px] lg:w-[1000px] z-10 pointer-events-none"
    >
      <img
        src="./assets/mypicture4.png"
        alt="Reva"
        className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
      />
    </motion.div>

    <motion.div
      style={{ y: yBadge }}
      initial={{ opacity: 0, y: "150vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[90%] flex gap-4 z-20"
    >
      {[
        { text: "Data Analyst", rotate: "-6deg" },
        { text: "Video Editing", rotate: "3deg" },
        { text: "Fullstack Developer", rotate: "5deg" },
      ].map((item) => (
        <motion.div
          key={item.text}
          whileHover={{ rotate: "0deg" }}
          style={{ rotate: item.rotate }}
          className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-800 shadow-sm hover:border-cyan-500 transition-all cursor-default"
        >
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default HeroDesktop;