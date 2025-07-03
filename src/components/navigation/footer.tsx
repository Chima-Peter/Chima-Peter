import { FaSquareInstagram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";


const Footer = () => {
    const socialMediaLinks = [
        {
            link: "",
            icon: <FaSquareInstagram className="text-white hover:text-[#8a3ffc]" size={24} />
        },
        {
            link: "",
            icon: <BsWhatsapp className="text-white hover:text-[#8a3ffc]" size={24} />
        },
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
        <footer className="bg-black flex w-[100%] pt-24 pb-12 items-center justify-center flex-col gap-6">
            <div className="flex items-center justify-center w-[100%] gap-6 flex-wrap">
                {
                    socialMediaLinks.map((media) =>(
                        <Link href={media.link} key={media.link}>
                            {media.icon}
                        </Link>
                    ))
                }
            </div>
            <p className="text-[14px] tracking-wide text-center w-[100%] text-white">
                © 2025 Chima Ojimma.
            </p>
        </footer>
    )
}

export default Footer