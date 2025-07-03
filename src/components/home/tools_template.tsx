import React, { ReactNode } from 'react'
import { childVariant } from '../variants'
import { motion } from "framer-motion"

type Props = {
    icon: ReactNode,
    tool: string
}

const ToolsTemplate = (props: Props) => {
    return (
        <motion.li 
            className="w-[100%] sm:w-[250px] md:w-[240px] h-[170px] flex flex-col items-center justify-center gap-6 rounded-lg bg-[rgb(31,41,55)] bg-opacity-50"
            variants={childVariant}>
            {props.icon}
            <p className='text-[20px] tracking-wide text-white'>
                {props.tool}
            </p>
        </motion.li>
    )
}

export default ToolsTemplate