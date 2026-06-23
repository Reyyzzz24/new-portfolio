"use client";
import React from 'react';
import { motion } from "framer-motion";
import { User, Mail, ChevronDown, ArrowRight, MapPin, Smartphone } from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="contact" className="relative bg-white w-full py-20 px-6 md:px-16 lg:px-24 select-none border-b border-gray-100">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto w-full"
            >
                <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-16 md:mb-20">
                    <div className="lg:col-span-6">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.15]">
                            <span className="text-gray-300 font-normal block mb-1">Let's Get In Touch</span>
                            Experiences with Passion, Precision, and Purpose
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
                        <form action="https://formspree.io/f/xrbgknkv" method="POST" className="w-full space-y-5">

                            <InputField label="Full Name" icon={<User className="w-4 h-4" />} placeholder="Enter your full name..." name="name" type="text" />

                            <InputField label="Email Address" icon={<Mail className="w-4 h-4" />} placeholder="Enter your email address..." name="email" type="email" />

                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-gray-700 ml-1">Phone Number</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 flex items-center gap-1 border-r border-gray-200 pr-2.5 text-sm text-gray-500">
                                        <span className="text-base leading-none">🇮🇩</span>
                                        <ChevronDown className="w-3 h-3 text-gray-400 stroke-[2.5]" />
                                    </div>
                                    <input type="tel" name="phone" placeholder="+62 858-8597-8036" className="w-full pl-20 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 text-sm text-gray-900" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-gray-700 ml-1">Message</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your main text here..."
                                        required
                                        className="w-full p-4 rounded-2xl bg-white border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 resize-none text-sm text-gray-900 placeholder-gray-400"
                                    ></textarea>
                                    <span className="absolute bottom-3 left-4 text-[10px] font-medium text-gray-300">
                                        300/300
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center gap-2 bg-black hover:bg-gray-700 text-white text-xs font-bold tracking-wide py-3 px-8 rounded-full active:scale-[0.98] transition-all duration-300 shadow-md">
                                Let's Talk <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8 lg:pt-4 lg:pl-6">
                        <InfoItem icon={<MapPin />} title="Location Base" desc="Caringin, Bogor Regency, West Java, Indonesia 16730" />
                        <InfoItem icon={<Smartphone />} title="Direct Contact" desc="+62 858-8597-8036" href="tel:+6285885978036" />
                        <InfoItem icon={<Mail />} title="Email Address" desc="revayuliansatria@gmail.com" href="mailto:revayuliansatria@gmail.com" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const InputField = ({ label, icon, placeholder, name, type }) => (
    <div className="space-y-1.5">
        <label className="block text-xs font-bold text-gray-700 ml-1">{label}</label>
        <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-400">{icon}</span>
            <input type={type} name={name} placeholder={placeholder} required className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 text-sm text-gray-900" />
        </div>
    </div>
);

const InfoItem = ({ icon, title, desc, href }) => (
    <div className="flex items-start gap-5 group">
        <div className="p-3.5 bg-gray-50 border border-gray-200/60 rounded-xl text-black group-hover:border-blue-200 transition-colors duration-300 shrink-0">{icon}</div>
        <div>
            <h4 className="text-base font-bold text-gray-900">{title}</h4>
            {href ? (
                <a href={href} className="text-gray-500 text-sm mt-1.5 block hover:text-blue-600 transition-colors">{desc}</a>
            ) : (
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{desc}</p>
            )}
        </div>
    </div>
);

export default Contact;