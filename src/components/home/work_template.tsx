import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { childVariant } from '../variants'

type Props = {
    name: string,
    description: string,
    image: string,
    link: string
}

const WorkTemplate = (props: Props) => {
    return (
        <motion.div variants={childVariant}  className='flex flex-col gap-4 w-[100%] rounded-3xl md:w-[350px] h-[450px] bg-white'>
            <Image alt={props.name} width={250} height={500} src={props.image} className='object-fill rounded-t-3xl w-[100%]  md:w-[350px]' />
            <div className='px-6 py-2 flex flex-col gap-2'>
                <h4 className='text-2xl font-bold tracking-tight'>
                    {props.name}
                </h4>
                <p className='text-[16px] tracking-wide leading-relaxed text-justify text-neutral-600'>
                    {props.description}
                </p>
            </div>
            <Link target='_blank' className='bg-black text-white w-[96%] self-center mb-2 mt-auto rounded-2xl h-[50px] flex items-center justify-center font-semibold text-[24px] hover:bg-opacity-75' href={props.link}>
                Visit
            </Link>
        </motion.div>
    )
}

export default WorkTemplate