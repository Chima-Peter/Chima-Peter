"use client"

import { motion } from "framer-motion"
import StatBlock from "@/components/home/stat_block"
import TypingAnimation from "@/components/home/typing_animation"
import Image from "next/image"
import { childVariant, parentVariant } from "@/components/variants"
import ToolsList from "@/components/home/tools_list"
import SkillsList from "@/components/home/skills_list"
import WorksList from "@/components/home/works_list"



const HomePage = () => {
    return (
        <main className="w-[100%] font-sen gap-12">
            <motion.section
                className="w-[100%] relative flex items-center justify-center py-16 md:py-20 lg:py-24 h-screen flex-col gap-4 xl:max-h-[550px]"
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.h1 variants={childVariant} className="text-center text-4xl md:text-5xl font-bold text-white lg:text-6xl font-sen w-fit z-10  px-2 md:px-4 lg:px-6">
                    Hey, I am&nbsp;
                    <span className="bg-clip-text font-extrabold bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] text-transparent">
                        <TypingAnimation words={['a Software Developer', 'a Web Developer', 'a Full Stack Engineer', 'a JavaScript Ninja', 'a Clean Code Advocate', 'Chima Ojimma',]} />
                    </span>
                </motion.h1>
                <motion.h2 variants={childVariant} className="text-center text-4xl md:text-5xl font-bold text-white lg:text-6xl font-sen w-fit z-10 px-2 md:px-4 lg:px-6">
                    Let’s build your vision <br />
                    <p className="bg-clip-text bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] text-transparent font-bold inline-block mt-3">
                        pixel&nbsp;
                    </p>
                    by&nbsp;
                    <p className="bg-clip-text bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] text-transparent font-bold inline-block">
                        pixel.
                    </p>
                </motion.h2>
                <Image
                    className="object-fill w-[100%] h-screen absolute top-0 left-0 object-center"
                    src={'/hero_section_image.png'}
                    width={1440}
                    height={700}
                    priority
                    fetchPriority="high"
                    alt="Chima Peter" />
            </motion.section>

            <motion.section
                className="flex flex-col w-[100%] bg-gradient-to-b from-black via-[#060022] to-[#00093d] items-center justify-center px-4 md:px-6 py-24 lg:px-8 gap-8"
                id="why-hire-me"
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 variants={childVariant} className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] mb-3 bg-clip-text font-bold text-center uppercase">
                    Why hire me
                </motion.h2>
                <div className="w-[100%] justify-center flex items-center flex-wrap-reverse gap-8 md:gap-12 lg:gap-8">
                    <motion.div variants={childVariant} className="relative w-[400px] h-[400px] p-4">
                        <Image
                            alt="Chima Ojimma"
                            width={400}
                            height={400}
                            src="/chima_ojimma.jpg"
                            className="w-full h-full object-fit object-center relative z-10"
                        />

                        <span className="absolute inset-0 z-0 animate-borderEdge pointer-events-none"></span>
                    </motion.div>
                    <div className="w-[100%] lg:w-[60%] flex flex-col gap-4 items-start">
                        <motion.p variants={childVariant} className="text-white lg:max-w-[600px] w-[100%] text-justify font-sen text-[20px] tracking-wide leading-relaxed">
                            With a strong foundation in Computer Science and hands-on experience in full stack development, I specialize in building high-performance web applications using tools like Next.js, React, and Node.js.
                        </motion.p>
                        <StatBlock />
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="flex flex-col w-[100%] bg-gradient-to-b from-[#00093d] via-[#060022] to-black items-center justify-center px-4 md:px-6 lg:px-8 gap-8 pb-10 pt-16"
                variants={parentVariant}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
            >
                <div className="flex flex-col gap-6 items-center justify-center">
                    <motion.h2 variants={childVariant}
                    id="tools" 
                    className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] mb-3 bg-clip-text font-bold text-center uppercase w-fit">
                        Tools
                    </motion.h2>
                    <ToolsList />
                </div>
                <div className="flex flex-col gap-6 items-center justify-center mt-4">
                    <motion.h2 variants={childVariant}
                    id="skills" 
                    className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] mb-3 bg-clip-text font-bold text-center uppercase w-fit">
                        Skills
                    </motion.h2>
                    <SkillsList />
                </div>
            </motion.section>

            <motion.section
                className="flex flex-col w-[100%] bg-gradient-to-b from-black via-[#060022] to-black items-center justify-center px-4 md:px-6 lg:px-8 gap-0 pt-16 pb-12"
                id="my-works"
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 variants={childVariant} className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] mb-1 bg-clip-text font-bold text-center uppercase w-fit">
                    My works
                </motion.h3>
                <motion.p variants={childVariant} className="text-[20px] tracking-wide text-white mb-6 ">
                    Here are some of my recent works
                </motion.p>
                <WorksList />
            </motion.section>
        </main>
    )
}

export default HomePage