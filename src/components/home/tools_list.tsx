"use client"

import { motion } from "framer-motion"
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import ToolsTemplate from "./tools_template";
import { parentVariant } from "../variants";


const ToolsList = () => {
    const toolList = [
        {
            icon: <VscVscode color="#8a3ffc" size={60} />,
            tool: "Visual Studio Code"
        },
        {
            icon: <FaGit color="#8a3ffc" size={60} />,
            tool: "Git"
        },
        {
            icon: <FaGithub color="#8a3ffc" size={60} />,
            tool: "GitHub"
        },
        {
            icon: <SiPostman color="#8a3ffc" size={60} />,
            tool: "Postman"
        },
        {
            icon: <IoLogoFigma color="#8a3ffc" size={60} />,
            tool: "Figma"
        }
    ]
    return (
        <motion.ul
            className="flex flex-wrap gap-8 sm:gap-4 lg:gap-y-4 max-w-[1024px] justify-between"
            variants={parentVariant}
            initial="hidden"
            whileInView="visible">
            {
                toolList.map((tool) => (
                    <ToolsTemplate {...tool} key={tool.tool} />
                ))
            }
        </motion.ul>
    )
}

export default ToolsList