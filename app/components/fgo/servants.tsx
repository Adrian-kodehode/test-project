import React, { useState } from "react";
import { Edit3, MessageSquare, MoreVertical } from "lucide-react";
import { a } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";

const SERVANT_CLASSES: { name: string; color?: string }[] = [
  { name: "Saber", color: "text-yellow-400" },
  { name: "Archer", color: "text-yellow-400" },
  { name: "Lancer", color: "text-yellow-400" },
  { name: "Rider", color: "text-yellow-400" },
  { name: "Caster", color: "text-yellow-400" },
  { name: "Assassin", color: "text-yellow-400" },
  { name: "Berserker", color: "text-yellow-400" },
  { name: "Ruler", color: "text-yellow-400" },
  { name: "Avenger", color: "text-yellow-400" },
  { name: "Moon Cancer", color: "text-yellow-400" },
  { name: "Alter Ego", color: "text-yellow-400" },
  { name: "Foreigner", color: "text-yellow-400" },
  { name: "Pretender", color: "text-yellow-400" },
  { name: "Shielder", color: "text-yellow-400" },
];

interface ClassIconProps {
  name: string;
  color?: string;
  isSelected?: boolean;
  isAvenger?: boolean;
}

const ClassIcon = ({ name, color = "text-yellow-400" }: ClassIconProps) => {
  const baseClasses = `
    w-16 h-16 rounded-lg  flex flex-col items-center justify-center
    cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110
   
  `;

  // Simple geometric shapes representing class symbols
  const renderIcon = () => {
    switch (name.toLowerCase()) {
      case "saber":
        return (
          <a href="/saber">
            <img
              src="Fgo/icons/Class-Saber-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "archer":
        return (
          <a href="/archer">
            <img
              src="Fgo/icons/Class-Archer-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "lancer":
        return (
          <a href="/lancer">
            <img
              src="Fgo/icons/Class-Lancer-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "rider":
        return (
          <a href="/rider">
            <img
              src="Fgo/icons/Class-Rider-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "caster":
        return (
          <a href="/caster">
            <img
              src="Fgo/icons/Class-Caster-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "assassin":
        return (
          <a href="/assassin">
            <img
              src="Fgo/icons/Class-Assassin-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "berserker":
        return (
          <a href="/berserker">
            <img
              src="Fgo/icons/Class-Berserker-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "ruler":
        return (
          <a href="/ruler">
            <img
              src="Fgo/icons/Class-Ruler-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "avenger":
        return (
          <a href="/avenger">
            <img
              src="Fgo/icons/Class-Avenger-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "moon cancer":
        return (
          <a href="/bb_dubai">
            <img
              src="Fgo/icons/Class-MoonCancer-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "alter ego":
        return (
          <a href="/alter_ego">
            <img
              src="Fgo/icons/Class-Alterego-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "foreigner":
        return (
          <a href="/foreigner">
            <img
              src="Fgo/icons/Class-Foreigner-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "pretender":
        return (
          <a href="/cait_cu_cerpriestess">
            <img
              src="Fgo/icons/Class-Pretender-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "shielder":
        return (
          <a href="/shielder">
            <img
              src="Fgo/icons/Class-Shielder-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </a>
        );
      case "beast":
        return (
          <div className="flex items-center justify-center space-x-1">
            <img src="Fgo/icons/Class-Beast.png" alt="" className="w-10 h-10" />
            <img
              src="Fgo/icons/Class-Beast-Gold.png"
              alt=""
              className="w-10 h-10"
            />
          </div>
        );
      default:
        return <div className={`w-4 h-4 ${color} bg-current rounded-full`} />;
    }
  };

  return (
    <div className={baseClasses}>
      {renderIcon()}
      <span className={`text-xs mt-1 ${color} font-medium`}>{name}</span>
    </div>
  );
};

export default function Servants() {
  const classes = [
    { icon: <p className="bold">Base</p> },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Shielder-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },

    {
      icon: (
        <img
          src="Fgo/icons/Class-Saber-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Archer-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Lancer-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Rider-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Caster-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Assassin-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Berserker-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Ruler-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Avenger-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-MoonCancer-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Alterego-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Foreigner-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img
          src="Fgo/icons/Class-Pretender-Gold.png"
          alt=""
          className="w-13 h-13"
        />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/S377A1Icon.png" alt="" className="w-full h-full" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/S417A1Icon.png" alt="" className="w-full h-full" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/Class-Beast.png" alt="" className="w-13 h-13" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/Class-Beast.png" alt="" className="w-13 h-13" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/Class-Beast.png" alt="" className="w-13 h-13" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/Class-Beast.png" alt="" className="w-13 h-13" />
      ),
    },
    {
      icon: (
        <img src="Fgo/icons/Class-Beast.png" alt="" className="w-13 h-13" />
      ),
    },
  ];

  const multipliers = [
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Saber row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Archer row
    [
      "1.0x",
      "1.0x",
      "2.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Lancer row
    [
      "0.95x",
      "1.0x",
      "0.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Rider row
    [
      "1.05x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Caster row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Assassin row
    [
      "0.9x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Berserker row
    [
      "0.9x",
      "1.0x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "2.0x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "0.5x",
      "1.5x",
      "0.5x",
      "1.0x",
      "1.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Ruler row
    [
      "1.1x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "1.0x",
      "0.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Avenger row
    [
      "1.1x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "2.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Moon Cancer row
    [
      "1.1x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.2x",
      "1.0x",
      "1.0x",
    ],
    // Alter Ego row
    [
      "1.0x",
      "1.0x",
      "0.5x",
      "0.5x",
      "0.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.2x",
      "1.2x",
      "1.0x",
    ],
    // Foreigner row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "2.0x",
      "2.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.2x",
      "1.0x",
    ],
    // Pretender row
    [
      "1.0x",
      "1.0x",
      "1.5x",
      "1.5x",
      "1.5x",
      "0.5x",
      "0.5x",
      "0.5x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "2.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Beast I row
    [
      "1.0x",
      "1.0x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "2.0x",
      "0.5x",
      "0.5x",
      "0.5x",
      "0.5x",
      "0.5x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Beast II row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.5x",
      "0.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Beast III/R row
    [
      "1.0x",
      "1.0x",
      "2.0x",
      "2.0x",
      "2.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "2.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Beast III/L row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
    // Beast IV row
    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],

    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],

    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],

    [
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "0.5x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
      "1.0x",
    ],
  ];

  const getMultiplierColor = (multiplier) => {
    if (multiplier === "0.5x") return "bg-[#191952] text-white";
    if (multiplier === "0.9x") return "bg-black text-white";
    if (multiplier === "0.95x") return "bg-black text-white";
    if (multiplier === "1.0x") return "bg-black text-white";
    if (multiplier === "1.05x") return "bg-black text-white";
    if (multiplier === "1.1x") return "bg-black text-white";
    if (multiplier === "1.2x") return "bg-[#535308] text-white";
    if (multiplier === "1.5x") return "bg-[#5d3710] text-white";
    if (multiplier === "2.0x") return "bg-[#5a0707] text-white";
    return "bg-blue-500 text-white";
  };

  const ServantsHeader: React.FC = () => {
    return (
      <div className="rounded-lg text-white p-6 mb-8">
        <div className="max-w-5xl  mx-auto p-3 rounded">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Servants</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-blue-400">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm">104</span>
              </div>
              <Edit3 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>
  
          <div className="grid grid-cols-7 gap-4 mb-8">
            {SERVANT_CLASSES.slice(0, 14).map((classItem) => (
              <div key={classItem.name} className="flex justify-center">
                <ClassIcon name={classItem.name} color={classItem.color} />
              </div>
            ))}
          </div>
  
          <div className="flex justify-center">
           <a href="/beast"> <ClassIcon name="Beast" color="text-yellow-400" /></a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[url('/Fgo/xsYKdkG.jpeg')] bg-cover bg-center h-full text-white p-6">
      <div className="max-w-7xl bg-gray-800 bg-opacity-80 rounded mx-auto p-3">
        {/* Header */}
      <ServantsHeader />
        <div className="flex items-center justify-between">
         
           
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-7 ">
          {classes.slice(0, 14).map(() => (
            <div className="flex justify-center"></div>
          ))}
        </div>

      
        <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
          {/* Header Tabs */}
          <div className="flex items-center justify-center mb-6 border-b border-gray-700">
            <button className="px-6 py-3 text-blue-400 border-b-2 border-blue-400 bg-gray-800">
              Servant List
            </button>
            <button className="px-6 py-3 text-gray-400 hover:text-gray-300 bg-gray-800">
              Servant List by ID
            </button>
            <button className="px-6 py-3 text-gray-400 hover:text-gray-300 bg-gray-800">
              Servants from Riyo Manga
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl">
            {/* Card Icon */}
            <div className="float-right ml-6 mb-4">
              <img src="/Fgo/icons/Servant.png" alt="Card Icon" />
            </div>

            {/* Introduction */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Servants</span>
                <span className="text-gray-400">（サーヴァント）</span>
                <span className="text-gray-300">
                  {" "}
                  are Heroic Spirits that you, as the Master, command in{" "}
                </span>
                <span className="text-blue-400">Battle</span>
                <span className="text-gray-300">. Each Servant has a </span>
                <span className="text-blue-400">Class</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">active skills</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">passive skills</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">append skills</span>
                <span className="text-gray-300">, and </span>
                <span className="text-blue-400">Noble Phantasm</span>
                <span className="text-gray-300">
                  . They are also grouped into 3 types the Knight classes (
                </span>
                <span className="text-blue-400">Saber</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Archer</span>
                <span className="text-gray-300"> and </span>
                <span className="text-blue-400">Lancer</span>
                <span className="text-gray-300">), Cavalry classes (</span>
                <span className="text-blue-400">Rider</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Caster</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Assassin</span>
                <span className="text-gray-300"> and </span>
                <span className="text-blue-400">Berserker</span>
                <span className="text-gray-300">) and Extra classes (</span>
                <span className="text-blue-400">Ruler</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Avenger</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Moon Cancer</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Shielder</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Alter Ego</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Foreigner</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Pretender</span>
                <span className="text-gray-300">, and </span>
                <span className="text-blue-400">Beast</span>
                <span className="text-gray-300">).</span>
              </p>
            </div>

            {/* Summoning Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">
                  Servants are primarily obtained via{" "}
                </span>
                <span className="text-blue-400">summoning</span>
                <span className="text-gray-300">. </span>
                <span className="text-yellow-400">3★</span>
                <span className="text-gray-300">
                  {" "}
                  Servants or below may be summoned for 200{" "}
                </span>
                <span className="text-blue-400">Friend Points</span>
                <span className="text-gray-300"> each, and </span>
                <span className="text-yellow-400">3-5★</span>
                <span className="text-gray-300"> servants for 3 </span>
                <span className="text-blue-400">Saint Quartz</span>
                <span className="text-gray-300">
                  {" "}
                  each. Some Servants can be obtained as special rewards during{" "}
                </span>
                <span className="text-blue-400">events</span>
                <span className="text-gray-300">.</span>
              </p>
            </div>

            {/* Ascension Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">You can </span>
                <span className="text-blue-400">Ascend</span>
                <span className="text-gray-300">
                  {" "}
                  Servants to increase their maximum level, slightly changing
                  their art and battle sprites. Ascending can also unlock{" "}
                </span>
                <span className="text-blue-400">new skills</span>
                <span className="text-gray-300">, all of which can be </span>
                <span className="text-blue-400">reinforced</span>
                <span className="text-gray-300">. Their </span>
                <span className="text-blue-400">Noble Phantasms</span>
                <span className="text-gray-300">
                  {" "}
                  can also be upgraded: combining the same Servant upgrades the
                  NP level, while completing{" "}
                </span>
                <span className="text-blue-400">Interludes</span>
                <span className="text-gray-300"> may upgrade the rank.</span>
              </p>
            </div>

            {/* Craft Essences Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-blue-400">Craft Essences</span>
                <span className="text-gray-300">
                  {" "}
                  can be equipped to your servants to increase their stats and
                  abilities.
                </span>
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">Feeding Servants </span>
                <span className="text-blue-400">Experience Cards</span>
                <span className="text-gray-300">
                  {" "}
                  or other Servants grants experience. When enough experience is
                  gained to level up, their ATK and HP increases.{" "}
                </span>
                <span className="text-blue-400">Status Up Cards</span>
                <span className="text-gray-300">
                  {" "}
                  also increase ATK and HP, but these stat gains are independent
                  of levels and have a maximum value of 1000 per Servant. It is
                  now possible to have Servants gain yet another 1000 points to
                  each stat with the inclusion of{" "}
                </span>
                <span className="text-yellow-400">4★</span>
                <span className="text-gray-300"> </span>
                <span className="text-blue-400">Status Up Cards</span>
                <span className="text-gray-300">.</span>
              </p>
            </div>

            {/* Attributes Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">Each Servant has an </span>
                <span className="text-blue-400">Attribute</span>
                <span className="text-gray-300">
                  {" "}
                  that also slightly affects their performance in battle.
                </span>
              </p>
            </div>

            {/* Bond Level Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">Having Servants in your </span>
                <span className="text-blue-400">Party</span>
                <span className="text-gray-300">
                  {" "}
                  when completing a quest will increase their{" "}
                </span>
                <span className="text-blue-400">Bond level</span>
                <span className="text-gray-300">
                  , which unlocks their biography and the ability to do{" "}
                </span>
                <span className="text-blue-400">Interludes</span>
                <span className="text-gray-300"> if available.</span>
              </p>
            </div>

            {/* Enemies Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">
                  Servants can also be found as enemies in{" "}
                </span>
                <span className="text-blue-400">Main Quest</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Free Quests</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Event Quests</span>
                <span className="text-gray-300"> and so on.</span>
              </p>
            </div>

            {/* Support Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">
                  When starting a quest, you can choose another player's{" "}
                </span>
                <span className="text-blue-400">Support Servant</span>
                <span className="text-gray-300">
                  {" "}
                  based on each class to help you in battle.
                </span>
              </p>
            </div>

            {/* Burning Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">You can also </span>
                <span className="text-blue-400">burn</span>
                <span className="text-gray-300"> Servants to gain </span>
                <span className="text-blue-400">QP</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">Mana Prisms</span>
                <span className="text-gray-300"> and </span>
                <span className="text-blue-400">Rare Prism</span>
                <span className="text-gray-300">.</span>
              </p>
            </div>

            {/* Final Section */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-gray-300">
                  There are currently 433 obtainable Servants, of which 277 are{" "}
                </span>
                <span className="text-blue-400">event reward</span>
                <span className="text-gray-300">, </span>
                <span className="text-blue-400">story locked</span>
                <span className="text-gray-300">, or </span>
                <span className="text-blue-400">limited</span>
                <span className="text-gray-300">
                  {" "}
                  either because they were only obtainable as{" "}
                </span>
                <span className="text-blue-400">event rewards</span>
                <span className="text-gray-300">
                  , they have not been added to the general{" "}
                </span>
                <span className="text-blue-400">summoning pool</span>
                <span className="text-gray-300"> until clear </span>
                <span className="text-blue-400">Main Quest</span>
                <span className="text-gray-300">
                  , or they are only available for limited times.
                </span>
              </p>
            </div>

            <div className="p-6 bg-gray-900 text-white min-h-screen">
              <div className="max-w-7xl ">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
                  Servant Triangle
                </h1>

                {/* Legend */}
                <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <h2 className="text-lg font-semibold mb-3">
                    Class Advantage System
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-6 bg-green-600 rounded text-xs flex items-center justify-center">
                        2.0x
                      </span>
                      <span>Strong Advantage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-6 bg-green-400 rounded text-xs flex items-center justify-center">
                        1.5x
                      </span>
                      <span>Advantage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-6 bg-blue-500 rounded text-xs flex items-center justify-center">
                        1.0x
                      </span>
                      <span>Neutral</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-6 bg-red-600 rounded text-xs flex items-center justify-center">
                        0.5x
                      </span>
                      <span>Disadvantage</span>
                    </div>
                  </div>
                </div>

                {/* Main Table */}
                <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-2xl">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="border border-gray-600 p-2 text-center font-semibold">
                          <div className="flex flex-col items-center">
                            <span className="text-xs text-gray-300 mb-1">
                              Defense
                            </span>
                            <span className="text-xs text-gray-300">→</span>
                            <span className="text-xs text-gray-300 mt-1">
                              Attack ↓
                            </span>
                          </div>
                        </th>
                        {classes.map((cls, index) => (
                          <th
                            key={index}
                            className="border border-gray-600 p-1 min-w-16"
                          >
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-1`}
                              >
                                {cls.icon}
                              </div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((attackClass, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-750">
                          <td className="border border-gray-600 p-2 bg-gray-700 font-semibold">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-lg`}
                              >
                                {attackClass.icon}
                              </div>
                            </div>
                          </td>
                          {multipliers[rowIndex].map((multiplier, colIndex) => (
                            <td
                              key={colIndex}
                              className="border border-gray-600 "
                            >
                              <div
                                className={`text-xs font-bold text-center   ${getMultiplierColor(
                                  multiplier
                                )} h-12 flex items-center justify-center`}
                              >
                                {multiplier}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Notes */}
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">
                    Special Notes:
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                    <li>
                      <strong>Beast I</strong> is similar to Demon Pillar's
                      7-class system
                    </li>
                    <li>
                      <strong>Beast II</strong> and Corrupted Ushiwakamaru's
                      7-class are similar to Shielder-class
                    </li>
                    <li>
                      <strong>Beast III/L</strong> are similar to the Broken
                      Archer Class
                    </li>
                    <li>
                      <strong>Beast IV</strong> can change own class
                      advantage/disadvantage by passive skill in battle
                    </li>
                  </ul>
                  <div>
                    <img src="Fgo/Class_Meta_AvalonLeFae_Update.png" alt="" className="flex mx-auto mt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
