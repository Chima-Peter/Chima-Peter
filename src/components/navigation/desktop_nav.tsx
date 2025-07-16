"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const DesktopNav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const navLinks = [
        {
            name: "Why Hire Me",
            link: "#why-hire-me"
        },
        {
            name: "Tools",
            link: "#tools"
        },
        {
            name: "Skills",
            link: "#skills"
        },
        {
            name: "My works",
            link: "#my-works"
        }
    ]

    const socialMediaLinks = [
        {
            link: "",
            icon: <FaLinkedinIn className="text-white hover:text-[#8a3ffc]" size={24} />
        },
        {
            link: "",
            icon: <FaXTwitter className="text-white hover:text-[#8a3ffc]" size={24} />
        },
        {
            link: "",
            icon: <BsGithub className="text-white hover:text-[#8a3ffc]" size={24} />
        }
    ]
    
    return (
        <div className="shadow-md fixed top-0 left-0 hidden z-50 lg:flex items-center justify-center w-[100%]">
            <nav className="flex items-center px-4 md:px-6 lg:px-8 gap-8 justify-between font-sen py-4 w-[100%] backdrop-blur-md max-w-[1440px]">
                <Link href={'/'}>
                    <h1 className="text-white font-bold text-[2.5rem] tracking-wide">
                        CHIMA PETER
                    </h1>
                </Link>
                <div className="flex items-center gap-6 min-[1100px]:gap-8 self-center">
                    {
                        navLinks.map((link, index) => (
                            <Link  href={link.link} key={index} className={`font-roboto font-medium tracking-wide text-white transition-all duration-500 ease-in-out group text-[1rem] flex flex-col gap-1 relative`}>
                                {link.name}
                                <div className={`${isActive(link.link) ? 'bg-black' : 'bg-transparent'} transition-all duration-500 ease-in-out group-hover:bg-black w-[100%] h-[3px] rounded-full`} />
                            </Link>
                        ))
                    }
                </div>

                <div className="flex items-center gap-4">
                    {
                        socialMediaLinks.map((media, index) =>(
                            <Link href={media.link} key={index}>
                                {media.icon}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </div>
    )
}

export default DesktopNav