import { mySocials } from "../constants";

const Footer = () => {
    return (
        <section className="bg-gray-800 c-space py-6">
            <div className="mb-6 bg-gradient-to-r from-transparent via-cyan-700 to-transparent h-[1px] w-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-sm text-neutral-400">

                {/* Kolom 1: Kiri */}
                <p className="text-center md:text-left">© 2026 Reva Yulian Satria. All rights reserved.</p>

                <div className="flex justify-center gap-4">
                    <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
                    <span>|</span>
                    <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
                </div>

                <div className="flex justify-center md:justify-end gap-4">
                    {mySocials.map((social, index) => (
                        <a href={social.href} key={index} className="hover:opacity-80 transition-opacity">
                            <img src={social.icon} className="w-5 h-5" alt={social.name} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;