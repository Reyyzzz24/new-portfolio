import { mySocials } from "../constants";

const Footer = () => {
    return (
        <section className="bg-gray-800 c-space py-6">
            <div className="mb-6 bg-gradient-to-r from-transparent via-cyan-700 to-transparent h-[1px] w-full" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
                
                <p>© 2026 Reva Yulian Satria. All rights reserved.</p>

                <div className="flex gap-4">
                    <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
                    <span>|</span>
                    <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
                </div>

                <div className="flex gap-4">
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