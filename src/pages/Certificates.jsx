"use client";
import React from 'react';
import { motion } from "framer-motion";
import { myCertificates } from '../constants';

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    }
  };

  return (
    <section id="certificates" className="bg-white w-full p-8 md:p-16 lg:p-24 select-none">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
            Official <span className="text-gray-400 font-normal">Credentials</span><br />
            & Certifications
          </h2>
          <p className="text-sm text-gray-400 max-w-xs font-medium leading-relaxed">
            Validated knowledge and professional achievements across engineering and design disciplines.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min"
        >
          {myCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-gray-50/50 rounded-2xl overflow-hidden border border-gray-200/80 hover:border-cyan-600 transition-all duration-300 h-full flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/90 text-gray-600 rounded-full backdrop-blur-sm border border-gray-200/50 shadow-sm">
                    {cert.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between gap-3 bg-white w-full flex-grow">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate group-hover:text-cyan-600 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 truncate">
                    {cert.issuer} <span className="text-gray-300 px-0.5">•</span> {cert.issuedDate}
                  </p>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 p-2 rounded-full bg-gray-50 border border-gray-200/60 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-300 shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;