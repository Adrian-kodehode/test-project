import { a, r } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";
import React from "react";
import { Stars } from "./Stars";

interface Props {
  name: string;
  role: string;
  classSrc: string;
  classSrc2: string;
  position: string;
  cover: string;
  atk: string;
  def: string;
  src: string;
  href: string;
  numStars: number;
  bg: number;
  altName: string;
}

export const Student: React.FC<Props> = ({
  name,
  role,
  classSrc,
  classSrc2,
  position,
  cover,
  atk,
  def,
  src,
  href,
  numStars,
  bg,
  altName,
}) => {
  return (
    <tr
      className="bg-[#63929C] border-b border-gray-700"
      style={{
        backgroundColor:
          bg === 1
            ? "#06bbfa"
            : bg === 2
            ? "#e34a45"
            : bg === 3
            ? "#4f86f7"
            : bg === 4
            ? "#fbb35a"
            : bg === 5
            ? "#e05289"
            : bg === 6
            ? "#03C03C"
            : bg === 7
            ? "#B23B59"
            : bg === 8
            ? "#A1A9E1"
            : bg === 9
            ? "#90ABC9"
            : bg === 10
            ? "#DBDAD8"
            : bg === 11
            ? "#63929C"
            : bg === 12
            ? "#02d3fb"
            : undefined,
      }}
    >
      <td className="py-2 px-2 flex items-center justify-center gap-2">
        <a href={href}>
          <img src={src} alt="" className="w-40 h-30" />
        </a>
        <span
          className="text-xl font-extrabold"
          style={{
            textShadow: "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
          }}
        >
          {name} <br /> {altName}
        </span>
      </td>
      <td
        className="py-2 px-6"
        style={{
          backgroundColor:
            numStars === 1
              ? "#268acb"
              : numStars === 2
              ? "#e68f16"
              : numStars === 3
              ? "#9b85e6"
              : undefined,
        }}
      >
        <Stars num={numStars} />
      </td>
      <td
        className="py-2 px-3 text-xl font-extrabold text-black"
        style={{
          backgroundColor:
            role === "Striker"
              ? "#ff6133"
              : role === "Special"
              ? "#2185f6"
              : undefined,
        }}
      >
        {role}
      </td>
      <td className="py-2 px-2">
        <img src={classSrc} alt="" />
        <br />
        <img src={classSrc2} alt="" />
      </td>
      <td className="py-2 px-2 text-xl font-extrabold text-black italic">
        {position}
      </td>
      <td className="py-2 px-2 text-2xl font-extrabold text-black">
        <img src={cover} alt="" className="w-14 h-14" />
      </td>
      <td
        className="py-2 px-2 text-black text-xl font-extrabold"
        style={{
          backgroundColor:
            atk === "Sonic"
              ? "#9b57aa"
              : atk === "Penetration"
              ? "#ffa500"
              : atk === "Explosion"
              ? "#ff0000"
              : atk === "Mystic"
              ? "#46adff"
              : undefined,
        }}
      >
        {atk}
      </td>
      <td
        className="py-2 px-2 text-black text-xl font-extrabold"
        style={{
          backgroundColor:
            def === "Heavy Armor"
              ? "#ffa500"
              : def === "Light Armor"
              ? "#ff0000"
              : def === "Special Armor"
              ? "#46adff"
              : def === "Elastic Armor"
              ? "#9b57aa"
              : def === "Mystic Armor"
              ? "#46adff"
              : undefined,
        }}
      >
        {def}
      </td>
    </tr>
  );
};
