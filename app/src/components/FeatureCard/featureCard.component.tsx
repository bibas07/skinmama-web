"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group  rounded-md p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-md p-4 w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
