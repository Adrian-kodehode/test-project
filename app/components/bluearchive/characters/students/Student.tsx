import { a, r } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";
import React from "react";
import { Stars } from "./Stars";


interface Props {

  name: string;
  role: string;
  classSrc: string;
  position: string;
  cover: string;
  atk: string;
  def: string;
  src: string;
  href: string;
  numStars: number;
}

export const Student: React.FC<Props> = ({
  
  name,
  role,
  classSrc,
  position,
  cover,
  atk,
  def,
  src,
  href,
  numStars,
}) => {
  return (
    <tr className="bg-[#63929C] border-b border-gray-700">
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
          {name}
        </span>
      </td>
      <td className="py-2 px-6 bg-blueArchive-purple">
       <Stars num= {numStars} /> 
      </td>
      <td className="py-2 px-3 text-xl font-extrabold text-black bg-blueArchive-darkblue">
        {role}
      </td>
      <td className="py-2 px-2">
        {" "}
        <img src={classSrc} alt="" />
      </td>
      <td className="py-2 px-2 text-xl font-extrabold text-black italic">
        {position}
      </td>
      <td className="py-2 px-2 text-2xl font-extrabold text-black">
        <img src={cover} alt="" className="w-14 h-14" />
      </td>
      <td className="py-2 px-2 text-black text-xl  font-extrabold bg-blueArchive-darkpurple">
        {atk}
      </td>
      <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
        {def}
      </td>
    </tr>
  );
};
