import { motion } from "framer-motion";
import { parentVariant } from "../variants";
import WorkTemplate from "./work_template";

const WorksList = () => { 
    const projects = [
       {
            name: "ManomPay",
            description: "ManomPay is an all-in-one fintech platform designed to streamline financial operations for small to medium sized businesses, freelancers and entrepreneurs.",
            image: "/projects/manompay.png",
            link: "https://manomsolutions.com/",
        },  
      {
            name: "QuickEats",
            description: "QuickEats is a multi-tenant food delivery platform designed to help small and medium-sized restaurants manage their own online ordering systems under a shared parent infrastructure.",
            image: "/projects/quickeats.png",
            link: "https://quickeats.vercel.app",
        },
        {
            name: "Tales of Logistics",
            description: "A responsive and modern logistics platform designed to capture stories from industry professionals, and drive user engagement through clean navigation and strategic call-to-actions.",
            image: "/tales_of_logistics.png",
            link: "https://talesoflogistics.com", // replace with your actual project link
        },
        {
            name: "Melch - User Side",
            description: "A sleek and responsive eCommerce platform that allows users to browse products, manage their cart, and complete secure checkouts.",
            image: "/melch_user.png",
            link: "https://melch-user.vercel.app/",
        },
        {
            name: "Melch Vendor Side",
            description: "A vendor dashboard that empowers sellers to manage their inventory, view sales analytics, handle orders, and respond to customer inquiries.",
            image: "/melch_vendor.png",
            link: "https://melch-vendor.vercel.app/",
        },
        {
            name: "FitGuru",
            description: "A fitness website for a gym. Allows clients to view gym plans, schedule sessions, and leave reviews.",
            image: "/fitguru.png",
            link: "https://chima-peter.github.io/FitGuru/"
        },
        {
            name: "YawnsWorld",
            description: "The official Web3 site for the memecoin YAWN. Enables users to learn about the token and purchase it directly from the platform.",
            image: "/yawnsworld.png",
            link: "https://chima-peter.github.io/yawnsworld/"
        },
        {
            name: "Core AI",
            description: "An AI solutions marketplace that integrates generative AI tools into a developer-friendly platform. Built using React, Tailwind CSS, and OpenAI APIs.",
            image: "/core_ai.png",
            link: "https://core-ai.vercel.app",
        },
        {
            name: "Chain Security",
            description: "A blockchain company and platform addressing Web3 risk. Features talks at major industry events, and support for blockchain investigations.",
            image: "/chainsecurity.png",
            link: "https://chain-security-rosy.vercel.app/",
        },
    ];


    return (
        <motion.ul
            className="flex flex-wrap gap-8 sm:gap-4 lg:gap-y-8 max-w-[1100px] justify-between mt-3"
            variants={parentVariant}
            initial="hidden"
            whileInView="visible">
            {
                projects.map((work, index) => (
                    <WorkTemplate {...work} key={index} />
                ))
            }
        </motion.ul>
    )
}

export default WorksList