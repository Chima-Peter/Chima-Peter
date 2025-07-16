import { useState } from "react";

import { motion } from "framer-motion"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TbBrandPrisma } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { MdApi } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { VscSymbolStructure } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { parentVariant } from "../variants";
import SkillTemplate from "./skill_template";



const SkillsList = () => {
    const [skillIndex, setSkillIndex] = useState<number>(0)

    const skillCategories = [
        [
            { name: "HTML5", icon: <FaHtml5 size={25} color="#8a3ffc" />, level: 90 },
            { name: "CSS3", icon: <FaCss3Alt size={25} color="#8a3ffc" />, level: 90 },
            { name: "JavaScript", icon: <IoLogoJavascript size={25} color="#8a3ffc" />, level: 90 },
            { name: "TypeScript", icon: <SiTypescript size={25} color="#8a3ffc" />, level: 85 },
            { name: "React.js", icon: <FaReact size={25} color="#8a3ffc" />, level: 90 },
            { name: "React-Native", icon: <FaReact size={25} color="#8a3ffc" />, level: 50 },
            { name: "Next.js", icon: <FaReact size={25} color="#8a3ffc" />, level: 85 },
            { name: "Tailwind CSS", icon: <FaCss3Alt size={25} color="#8a3ffc" />, level: 90 },
            { name: "Framer Motion", icon: <FaCode size={25} color="#8a3ffc" />, level: 80 },
            { name: "Redux", icon: <FaCode size={25} color="#8a3ffc" />, level: 85 },
        ],
        [
            { name: "Node.js", icon: <FaNodeJs size={25} color="#8a3ffc" />, level: 85 },
            { name: "Express.js", icon: <SiExpress size={25} color="#8a3ffc" />, level: 90 },
            { name: "Prisma ORM", icon: <TbBrandPrisma size={25} color="#8a3ffc" />, level: 80 },
            { name: "PostgreSQL", icon: <BiLogoPostgresql size={25} color="#8a3ffc" />, level: 80 },
            { name: "MongoDB", icon: <SiMongodb size={25} color="#8a3ffc" />, level: 80 },
            { name: "Redis", icon: <DiRedis size={25} color="#8a3ffc" />, level: 85 },
            { name: "REST API", icon: <MdApi size={25} color="#8a3ffc" />, level: 90 },
            { name: "WebSockets", icon: <FaCode size={25} color="#8a3ffc" />, level: 70 },
            { name: "FastAPI", icon: <SiFastapi size={25} color="#8a3ffc" />, level: 70 },
            { name: "Django", icon: <DiDjango size={25} color="#8a3ffc" />, level: 70 },
        ],
        [
            { name: "React.js", icon: <FaReact size={25} color="#8a3ffc" />, level: 90 },
            { name: "Next.js", icon: <FaReact size={25} color="#8a3ffc" />, level: 85 },
            { name: "Node.js", icon: <FaNodeJs size={25} color="#8a3ffc" />, level: 85 },
            { name: "Express.js", icon: <SiExpress size={25} color="#8a3ffc" />, level: 80 },
            { name: "PostgreSQL", icon: <BiLogoPostgresql size={25} color="#8a3ffc" />, level: 80 },
            { name: "MongoDB", icon: <SiMongodb size={25} color="#8a3ffc" />, level: 80 },
            { name: "FastAPI", icon: <SiFastapi size={25} color="#8a3ffc" />, level: 75 },
            { name: "Web Scraping", icon: <FaCode size={25} color="#8a3ffc" />, level: 70 },
            { name: "Django", icon: <DiDjango size={25} color="#8a3ffc" />, level: 70 },
            { name: "API Integration", icon: <MdApi size={25} color="#8a3ffc" />, level: 90 },
            { name: "Prisma ORM", icon: <TbBrandPrisma size={25} color="#8a3ffc" />, level: 80 },
            { name: "Redis", icon: <DiRedis size={25} color="#8a3ffc" />, level: 85 },
            { name: "REST API", icon: <MdApi size={25} color="#8a3ffc" />, level: 90 },
        ],
        [
            { name: "TypeScript", icon: <SiTypescript size={25} color="#8a3ffc" />, level: 85 },
            { name: "JavaScript", icon: <IoLogoJavascript size={25} color="#8a3ffc" />, level: 90 },
            { name: "Python", icon: <FaPython size={25} color="#8a3ffc" />, level: 80 },
            { name: "Data Structures & Algorithms", icon: <VscSymbolStructure size={25} color="#8a3ffc" />, level: 75 },
            { name: "Computer Science", icon: <FaLaptopCode size={25} color="#8a3ffc" />, level: 70 },
        ],
    ]

    const selectedBox = skillCategories[skillIndex]


    const skillBox = [
        {
            skill: "Frontend",
            index: 0
        },
        {
            skill: "Backend",
            index: 1
        },
        {
            skill: "Web Development",
            index: 2
        },
        {
            skill: "Software Engineering",
            index: 3
        }
    ]

    return (
        <div className="w-[100%] max-w-[1024px] flex flex-col gap-5">
            <div className="flex flex-wrap gap-4 w-[100%] items-center justify-center">
                {
                    skillBox.map((box) => (
                        <button
                            className={`outline-none hover:bg-opacity-90 h-[40px] w-fit px-4 flex-shrink-0 rounded-3xl flex items-center justify-center ${skillIndex !== box.index ? "bg-[rgb(31,41,55)] bg-opacity-50" : "bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4]"}`}
                            key={box.index}
                            onClick={() => setSkillIndex(box.index)}>
                            <p className={`text-[16px] font-semibold ${skillIndex === box.index ? "text-white" : "text-transparent bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] bg-clip-text"}`}>
                                {box.skill}
                            </p>
                        </button>
                    ))
                }
            </div>
            <motion.ul
                className="flex flex-wrap gap-8 sm:gap-4 lg:gap-y-4 max-w-[1024px] w-[100%] justify-between"
                variants={parentVariant}
                initial="hidden"
                whileInView="visible">
                {
                    selectedBox.map((box,index) => (
                        <SkillTemplate {...box} key={index} />
                    ))
                }
            </motion.ul>
        </div>
    )
}

export default SkillsList