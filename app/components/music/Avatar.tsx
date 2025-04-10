import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number; // Optional size prop for custom dimensions
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50 }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
};

export default Avatar;
