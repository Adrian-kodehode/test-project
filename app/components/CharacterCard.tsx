import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useLazyLoad } from "../hooks/useLazyLoad";

interface CharacterCardProps {
  name: string;
  image: string;
  description: string;
  type?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  description,
  type = "CHARACTER",
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isInView = useLazyLoad(imgRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full"
    >
      <div className="relative pb-[100%] mb-6">
        <img
          ref={imgRef}
          src={isInView ? image : ""}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded"
          loading="lazy"
        />
      </div>
      <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
        {type}
      </h3>
      <h2 className="text-lg text-white font-medium title-font mb-4">{name}</h2>
      <p className="leading-relaxed text-base text-gray-300">{description}</p>
    </motion.div>
  );
};
