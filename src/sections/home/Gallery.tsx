"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { galleryData } from "@/Data";
import { MdPriceChange } from "react-icons/md";


const textVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Gallery = () => {

    
    
  return (
    <section className="px-6 md:px-0 py-12">
        <div className="w-full mx-auto md:w-[92%]">
            <motion.div
              initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariant}
             className="flex items-center justify-between mb-8">
                <h2 className="text-xl md:text-2xl font-normal font-suisse text-black dark:text-white">Gallery</h2>
                <div className="flex items-center gap-x-2">
                    <MdPriceChange />
                    <p className="text-sm md:text-base font-normal font-suisse text-text-color dark:text-white">Pricing</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {galleryData.map((item, idx) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden relative rounded-2xl h-[300px] md:h-[350px]"
                >
                    <Image
                    src={item.image}
                    alt={`Gallery image ${item.id}`}
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Gallery;