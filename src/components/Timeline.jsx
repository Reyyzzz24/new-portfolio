"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AnimatedContent = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, x }}
      className="mb-4 font-normal text-gray-500 text-left leading-relaxed text-sm md:text-base"
    >
      {children}
    </motion.p>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="bg-white w-full p-8 md:p-16 lg:p-24 select-none" ref={containerRef}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
            Experiences <span className="text-gray-400 font-normal">with</span><br />
            Passion & Purpose
          </h2>
        </div>

        <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-20 md:gap-10">
              <div className="sticky z-40 flex flex-col self-start top-40 md:w-1/3">
                <div className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-[15px] bg-white border-2 border-cyan-950">
                  <div className="w-2 h-2 rounded-full bg-cyan-950" />
                </div>

                <div className="hidden md:flex flex-col gap-2 pl-12">
                  <h3 className="text-xl font-medium text-cyan-950">{item.date}</h3>
                  <h4 className="text-xl font-bold text-gray-800">{item.job}</h4>
                </div>
              </div>

              <div className="relative w-full pl-12 pr-4 md:pl-0">
                <div className="block mb-4 md:hidden">
                  <h3 className="text-xl font-medium text-cyan-950">{item.date}</h3>
                  <h4 className="text-xl font-bold text-gray-800">{item.job}</h4>
                </div>

                <div className="w-full">
                  {item.contents.map((content, idx) => (
                    <AnimatedContent key={idx}>
                      {content}
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ height: height + "px" }} className="absolute left-[1px] top-0 w-[2px] bg-gray-200">
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-cyan-950 to-transparent rounded-full origin-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};