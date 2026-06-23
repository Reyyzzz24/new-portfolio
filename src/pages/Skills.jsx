"use client";
import React from "react";
import { motion } from "framer-motion";
import LogoLoop from "../components/LogoLoop";
import {
    SiReact, SiJavascript, SiTypescript, SiTailwindcss,
    SiLaravel, SiPhp, SiMysql, SiPython
} from 'react-icons/si';
import { FiClock, FiUsers, FiMessageSquare, FiTarget, FiZap } from 'react-icons/fi';

const techLogos = [
    { node: <SiLaravel className="text-red-500 w-8 h-8" />, title: "Laravel" },
    { node: <SiReact className="text-blue-500 w-8 h-8" />, title: "React" },
    { node: <SiJavascript className="text-yellow-500 w-8 h-8" />, title: "JavaScript" },
    { node: <SiTypescript className="text-blue-700 w-8 h-8" />, title: "TypeScript" },
    { node: <SiPhp className="text-indigo-600 w-8 h-8" />, title: "PHP" },
    { node: <SiMysql className="text-sky-600 w-8 h-8" />, title: "MySQL" },
    { node: <SiPython className="text-yellow-600 w-8 h-8" />, title: "Python" },
    { node: <SiTailwindcss className="text-teal-600 w-8 h-8" />, title: "Tailwind CSS" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

const Skills = () => {
    return (
        <section id="skills" className="bg-white w-full p-8 md:p-16 lg:p-24 select-none">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
                        My Core <span className="text-gray-400 font-normal">Capabilities</span><br />
                        & Expertise
                    </h2>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[14rem]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 bg-gray-50/50 border border-gray-200/80 rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-cyan-600 transition-colors duration-300">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tech Stack</h3>
                            <p className="text-gray-500 text-sm">Tools and frameworks for crafting scalable engineering solutions.</p>
                        </div>
                        <div className="space-y-6">
                            <LogoLoop logos={techLogos} speed={40} direction="left" logoHeight={40} gap={60} fadeOut fadeOutColor="#f9fafb" />
                            <LogoLoop logos={[...techLogos].reverse()} speed={40} direction="right" logoHeight={40} gap={60} fadeOut fadeOutColor="#f9fafb" />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2 bg-gray-50/50 border border-gray-200/80 rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-600 transition-colors duration-300">
                        <div className="p-4 bg-gray-100 border border-gray-200/60 rounded-2xl text-cyan-600 text-3xl"><FiClock /></div>
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg">Time Management</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Efficient workflow optimization, milestone delivery, and deadline-oriented execution.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-50/50 border border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-600 transition-colors duration-300 group">
                        <FiUsers className="text-3xl text-gray-400 group-hover:text-cyan-600 transition-colors duration-300 mb-3" />
                        <p className="text-gray-900 font-bold text-sm">Team Collaboration</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-50/50 border border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-600 transition-colors duration-300 group">
                        <FiMessageSquare className="text-3xl text-gray-400 group-hover:text-cyan-600 transition-colors duration-300 mb-3" />
                        <p className="text-gray-900 font-bold text-sm">Clear Communication</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2 bg-gray-50/50 border border-gray-200/80 rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-600 transition-colors duration-300">
                        <div className="p-4 bg-gray-100 border border-gray-200/60 rounded-2xl text-cyan-600 text-3xl"><FiTarget /></div>
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg">Problem Solving</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Analytical and data-driven approaches to solving complex software architecture issues.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2 bg-gray-50/50 border border-gray-200/80 rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-600 transition-colors duration-300">
                        <div className="p-4 bg-gray-100 border border-gray-200/60 rounded-2xl text-cyan-600 text-3xl"><FiZap /></div>
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg">Adaptability</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Continuous learning mindset, rapidly adapting to new stacks, tech trends, and ecosystems.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;