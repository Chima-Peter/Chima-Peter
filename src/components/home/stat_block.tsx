'use client';

import { motion } from 'framer-motion';

const stats = [
  { icon: '🚀', label: 'Startups', value: '3' },
  { icon: '✅', label: 'Projects Completed', value: '10+' },
  { icon: '🤝', label: 'Clients', value: '5+' },
];

const StatBlock = () => {
  return (
    <div className="flex gap-4 flex-wrap mt-4 w-[100%] lg:justify-normal justify-center">
        {stats.map((stat, i) => (
        <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
            className="bg-white flex gap-2 w-[100%] sm:w-fit rounded-full py-4 px-4 items-center shadow-2xl"
        >
            <div className="text-2xl">
                {stat.icon}
            </div>
            <h3 className="text-3xl font-semibold">
                {stat.value}
            </h3>
            <p className="text-[16px] text-gray-600">
                {stat.label}
            </p>
        </motion.div>
        ))}
    </div>
  );
};

export default StatBlock;
