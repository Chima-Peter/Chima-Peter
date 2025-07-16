"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from "react-icons/cg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = ({ setNavbar }: { setNavbar: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathname = usePathname();
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


    const isActive = (path: string) => {
        return pathname === path ? true : false;
    }

    const closeNavbar = () => {
        setNavbar(false)
    }


    return (
        <AnimatePresence mode='wait'>
            <motion.section
                className="bg-black bg-background fixed top-0 left-0 w-[100vw] z-50 overflow-x-hidden  h-[100%] min-h-[100vh] px-4 sm:px-6 lg:px-12 xl:px-14 2xl:px-24 py-8 font-main flex flex-col gap-16"
            >
                <div className='w-[100%] flex justify-between items-center'>
                    <Link href={'/'} className='font-montserrat text-[1.2rem] font-semibold tracking-wide text-white flex gap-1 items-center'>
                        <h1 className="text-white font-bold text-[1.4rem] sm:text-[1.8rem] tracking-wide">
                            CHIMA PETER
                        </h1>
                    </Link>
                    <button onClick={closeNavbar} className='p-3 bg-gray-100 rounded-lg'>
                        <CgClose size={30} />
                    </button>
                </div>
                <section className='flex w-[100%] flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        {
                            navLinks.map((link) => (
                                <Link onClick={() => setNavbar(false)} href={link.link} key={link.name} className={`font-roboto w-fit font-semibold transition-all duration-500 ease-in-out group text-[0.9rem] flex flex-col gap-1 relative text-white`}>
                                    {link.name}
                                    <div className={`${isActive(link.link) ? 'bg-white' : 'bg-transparent'} transition-all duration-500 ease-in-out group-hover:bg-white w-[100%] h-[3px] rounded-full`} />
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </motion.section>
        </AnimatePresence>
    )
}

export default SideBar