"use client";
import { useState } from "react";
import Project from "../components/ProjectCard";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Definisi varian untuk efek menyusun puzzle
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Memberi jeda antar kartu
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 12, stiffness: 60 });
  const springY = useSpring(y, { damping: 12, stiffness: 60 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 25);
    y.set(e.clientY + 25);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative bg-white min-h-screen w-full p-8 md:p-16 lg:p-24 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
            My <span className="text-gray-400 font-normal">Selected</span><br />
            Projects
          </h2>
        </div>

        {/* Grid ditambahkan motion.div dengan variants */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr grid-flow-row-dense"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {myProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Project 
                index={index} 
                {...project} 
                setPreview={setPreview} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-2xl shadow-xl pointer-events-none w-80 border border-gray-200/60 bg-gray-50"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        />
      )}
    </section>
  );
};

export default Projects;