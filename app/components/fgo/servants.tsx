import React, { useState } from 'react';
import { Edit3, MessageSquare, MoreVertical } from 'lucide-react';
import { a } from 'node_modules/framer-motion/dist/types.d-DDSxwf0n';

interface ClassIconProps {
  name: string;
  color?: string;
  isSelected?: boolean;
  isAvenger?: boolean;
}

const ClassIcon = ({ name, color = 'text-yellow-400', isSelected = false, isAvenger = false }: ClassIconProps) => {
  const baseClasses = `
    w-16 h-16 rounded-lg  flex flex-col items-center justify-center
    cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110
   
  `;

  // Simple geometric shapes representing class symbols
  const renderIcon = () => {
    switch(name.toLowerCase()) {
      case 'saber':
        return <img src="Fgo/icons/Class-Saber-Gold.png" alt="" />
      case 'archer':
        return <img src="Fgo/icons/Class-Archer-Gold.png" alt="" />
      case 'lancer':
        return <img src="Fgo/icons/Class-Lancer-Gold.png" alt="" />
      case 'rider':
        return <img src="Fgo/icons/Class-Rider-Gold.png" alt="" />  
      case 'caster':
        return <img src="Fgo/icons/Class-Caster-Gold.png" alt="" />
      case 'assassin':
        return <img src="Fgo/icons/Class-Assassin-Gold.png" alt="" />
      case 'berserker':
        return <img src="Fgo/icons/Class-Berserker-Gold.png" alt="" />
      case 'ruler':
        return <img src="Fgo/icons/Class-Ruler-Gold.png" alt="" />
      case 'avenger':
        return <img src="Fgo/icons/Class-Avenger-Gold.png" alt="" />
      case 'moon cancer':
        return <a href="/bb_dubai"><img src="Fgo/icons/Class-MoonCancer-Gold.png" alt="" /></a>
      case 'alter ego':
        return <img src="Fgo/icons/Class-Alterego-Gold.png" alt="" />
      case 'foreigner':
        return <img src="Fgo/icons/Class-Foreigner-Gold.png" alt="" />
      case 'pretender':
        return <a href="/cait_cu_cerpriestess"><img src="Fgo/icons/Class-Pretender-Gold.png" alt="" /></a>
      case 'shielder':
        return <img src="Fgo/icons/Class-Shielder-Gold.png" alt="" />
      case 'beast':
        return (
        <div className="flex items-center justify-center space-x-1">
            <img src="Fgo/icons/Class-Beast.png" alt="" className="w-10 h-10" />
            <img src="Fgo/icons/Class-Beast-Gold.png" alt="" className="w-10 h-10" />
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
  const [selectedClass, setSelectedClass] = useState('Avenger');

  const classes = [
    { name: 'Saber', color: 'text-blue-400' },
    { name: 'Archer', color: 'text-red-400' },
    { name: 'Lancer', color: 'text-blue-400' },
    { name: 'Rider', color: 'text-green-400' },
    { name: 'Caster', color: 'text-blue-400' },
    { name: 'Assassin', color: 'text-purple-400' },
    { name: 'Berserker', color: 'text-red-400' },
    { name: 'Ruler', color: 'text-yellow-400' },
    { name: 'Avenger', color: 'text-yellow-400' },
    { name: 'Moon Cancer', color: 'text-blue-300' },
    { name: 'Alter Ego', color: 'text-yellow-400' },
    { name: 'Foreigner', color: 'text-yellow-400' },
    { name: 'Pretender', color: 'text-yellow-400' },
    { name: 'Shielder', color: 'text-yellow-400' },
    { name: 'Beast', color: 'text-red-500' }
  ];

  return (
    <div className="bg-[url('/Fgo/xsYKdkG.jpeg')] bg-cover bg-center h-screen text-white p-6">
      <div className="max-w-4xl bg-gray-800 bg-opacity-80 mx-auto p-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Avenger</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-blue-400">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">104</span>
            </div>
            <Edit3 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Passive Skill Note */}
        <div className="mb-8">
          <p className="text-gray-300 text-sm italic">
            For the passive skill of the same name, see{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Avenger (Passive Skill)
            </a>
            .
          </p>
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-7 gap-4 mb-8">
          {classes.slice(0, 14).map((classItem, index) => (
            <div key={classItem.name} className="flex justify-center">
              <ClassIcon
                name={classItem.name}
                color={classItem.color}
                isSelected={selectedClass === classItem.name}
                isAvenger={classItem.name === 'Avenger'}
              />
            </div>
          ))}
        </div>

        {/* Beast Class (centered) */}
        <div className="flex justify-center">
          <ClassIcon
            name="Beast"
            color="text-red-500"
            isSelected={selectedClass === 'Beast'}
          />
        </div>

        {/* Selection Handler */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Selected Class: <span className="text-yellow-400 font-semibold">{selectedClass}</span>
          </p>
        </div>
      </div>
    </div>
  );
}