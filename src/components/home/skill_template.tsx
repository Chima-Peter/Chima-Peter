import { motion } from "framer-motion";
import { ReactNode } from "react";
import { childVariant } from "../variants";

interface SkillTemplateProps {
  name: string;
  level: number;
  icon: ReactNode;
}

const SkillTemplate = ({ name, level, icon }: SkillTemplateProps) => {
  return (
    <motion.div
      variants={childVariant}
      animate="visible"
      className="bg-[#121221] rounded-2xl p-4 w-[100%] sm:w-[48%] lg:w-[32%] max-w-[500px] shadow-md">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-white font-medium">{name}</span>
      </div>
      <div className="w-full h-3 bg-zinc-800 rounded-full relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_4px_15px_rgba(114,82,255,0.4)]"
        />
      </div>
      <p className="text-right text-sm text-[#b28cff] font-semibold mt-1">{level}%</p>
    </motion.div>
  );
};

export default SkillTemplate;
