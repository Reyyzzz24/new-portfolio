"use client";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const navbarItems = [
        "Home", "About", "Experience", "Projects", "Skills", "Certificates", "Contact",
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/resume/resume.pdf';
        link.setAttribute('download', 'Resume_Reva_Yulian_Satria.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openPreview = () => {
        setIsOpen(false);
        setIsPreviewOpen(true);
    };

    return (
        <>
            <nav className="hidden lg:grid grid-cols-3 items-center w-full">
                <div className="flex items-center">
                    <div className="w-9 h-9 rounded-full bg-cyan-950 text-white flex items-center justify-center font-bold text-lg">
                        RY
                    </div>
                </div>

                <div className="flex justify-center">
                    <ul className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-slate-300">
                        {navbarItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={openPreview}
                        className="px-5 py-2 rounded-full bg-cyan-950 text-white text-sm hover:opacity-90 transition"
                    >
                        Download CV
                    </button>
                </div>
            </nav>

            <nav className="flex lg:hidden items-center justify-between w-full px-6 py-4">
                <span className="text-3xl font-bold text-slate-900">RY</span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 rounded-full border border-slate-300 bg-white/70 backdrop-blur-xl flex items-center justify-center text-slate-700"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 px-5 ${isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-6">
                    <ul className="flex flex-col gap-4">
                        {navbarItems.map((item) => (
                            <li key={item} className="border-b border-slate-100 last:border-0 pb-2">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-base font-medium text-slate-700 hover:text-cyan-700 transition"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={openPreview}
                        className="w-full mt-8 py-3.5 rounded-2xl bg-cyan-950 text-white text-sm font-semibold hover:bg-cyan-900 transition-colors"
                    >
                        Download CV
                    </button>
                </div>
            </div>

            {isPreviewOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-md bg-black/30">
                    <div className="relative w-full max-w-3xl bg-white border border-gray-200 shadow-2xl rounded-3xl flex flex-col max-h-[90vh] overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
                            <h3 className="text-lg font-semibold text-gray-900">CV Preview</h3>
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="p-2 transition-colors rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                aria-label="Close preview"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 min-h-0 bg-gray-100">
                            <iframe
                                src="/assets/resume/resume.pdf#toolbar=0"
                                title="CV Preview"
                                className="w-full h-full"
                            />
                        </div>

                        <div className="flex items-center justify-end gap-3 p-5 border-t border-gray-100 shrink-0">
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="px-5 py-2 rounded-full text-sm text-gray-600 hover:text-gray-900 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDownload}
                                className="px-5 py-2 rounded-full bg-cyan-950 text-white text-sm hover:opacity-90 transition"
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;