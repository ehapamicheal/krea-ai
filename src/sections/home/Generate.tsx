"use client";

import { generateData } from "@/Data";
import { motion } from "framer-motion"; 
import { MdKeyboardArrowDown } from "react-icons/md";

// Helper function to assign background color by title
const getIconBg = (title: string) => {
  switch (title) {
    case "Image":
      return "bg-blue-100 text-blue-600";
    case "Video":
      return "bg-yellow-100 text-yellow-600";
    case "Realtime":
      return "bg-sky-100 text-sky-600";
    case "Enhancer":
      return "bg-gray-200 text-gray-700";
    case "Edit":
      return "bg-purple-100 text-purple-600";
    case "Video Lipsync":
      return "bg-pink-100 text-pink-600";
    case "Motion Transfer":
      return "bg-black text-white dark:bg-white dark:text-black";
    default:
      return "";
  }
};

const Generate = () => {
  return (
    <motion.section
      className="max-w-[1200px] mx-auto w-full px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl font-normal font-suisse text-black dark:text-white">Generate</h2>
            <div className="flex items-center gap-1 cursor-pointer">
                <MdKeyboardArrowDown className="text-blue-600 text-2xl" />
                <p className="text-sm md:text-base text-blue-600 font-normal hover:underline font-suisse transition duration-200">Show all</p>
            </div>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            {generateData.map(({ id, title, description, icon: Icon, badge }) => (
                <div key={id} className="flex flex-col items-start gap-3 py-4 rounded-2xl group transition">

                    {/* Header with Icon + Title + Badge */}
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex gap-2">
                            <div className={`w-10 h-10 flex items-center shrink-0 justify-center rounded-lg group-hover:scale-105 transition duration-300 ${getIconBg(title)}`}>
                                <Icon className="text-xl" />
                            </div>

                            <div className="">
                                <div className="flex items-center gap-x-2 mb-1">
                                    <h3 className="text-sm leading-tight font-medium text-text-color dark:text-white font-suisse">{title}</h3>
                                    {badge && (
                                        <span className="text-xs bg-blue-600 font-normal font-suisse text-white px-2 py-0.5 rounded-full">
                                        {badge}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-text-color dark:text-white font-normal font-suisse">{description}</p>
                            </div>
                        </div>

                        {/* OPEN BUTTON */}
                        <div className="">
                            <button type="button" className="text-sm font-normal font-suisse text-text-color bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300">
                            Open
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.section>
  );
};

export default Generate;