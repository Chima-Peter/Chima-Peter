"use client"

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState, useEffect } from "react";
import SideBar from "./sidebar";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";



const MobileNav = () => {
    const location = usePathname();
    const [openSidebar, setSidebar] = useState(false)

    useEffect(() => {
        setSidebar(false);
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }, [location])

    useEffect(() => {
        document.body.style.overflowY = openSidebar ? "hidden" : "auto";

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [openSidebar]);


    return (
        <nav className="flex flex-col backdrop-blur-md w-[100%] items-center lg:hidden justify-between fixed top-0 z-50 shadow-custom-offset">
            <section className="flex w-[100%] items-center py-4 px-4 justify-between">
                <h1 className="text-white font-bold text-[1.4rem] sm:text-[1.8rem] tracking-wide">
                    CHIMA PETER
                </h1>

                <button onClick={() => setSidebar(true)}>
                    <HiOutlineMenuAlt2 className="text-white" size={34} />
                </button>
                <AnimatePresence mode="sync">
                    {openSidebar && (
                        <motion.div
                            key="sidebar"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className='bg-white fixed top-0 w-[100vw] z-50 overflow-hidden min-h-[100vh] '
                        >
                            <SideBar setNavbar={setSidebar} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </nav>
    )
}

export default MobileNav