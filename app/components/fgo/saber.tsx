import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Edit3,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import saberCharacters from "./sabercharacters.json";

// Small class icon component used by the Servants header
type ClassIconProps = {
  name: string;
  color?: string;
};

const ClassIcon = ({ name, color = "text-yellow-400" }: ClassIconProps) => {
  const baseClasses = `
    w-16 h-16 rounded-lg flex flex-col items-center justify-center
    cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110
  `;

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

const SERVANT_CLASSES = [
  { name: "Saber", color: "text-blue-400" },
  { name: "Archer", color: "text-red-400" },
  { name: "Lancer", color: "text-blue-400" },
  { name: "Rider", color: "text-green-400" },
  { name: "Caster", color: "text-blue-400" },
  { name: "Assassin", color: "text-purple-400" },
  { name: "Berserker", color: "text-red-400" },
  { name: "Ruler", color: "text-yellow-400" },
  { name: "Avenger", color: "text-yellow-400" },
  { name: "Moon Cancer", color: "text-blue-300" },
  { name: "Alter Ego", color: "text-yellow-400" },
  { name: "Foreigner", color: "text-yellow-400" },
  { name: "Pretender", color: "text-yellow-400" },
  { name: "Shielder", color: "text-yellow-400" },
  { name: "Beast", color: "text-red-500" },
];

const ServantsHeader: React.FC = () => {
  return (
    <div className="bg-[url('/Fgo/xsYKdkG.jpeg')] bg-cover bg-center rounded-lg text-white p-6 mb-8">
      <div className="max-w-5xl bg-gray-800 bg-opacity-80 mx-auto p-3 rounded">
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
          <ClassIcon name="Beast" color="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export const Saber = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const saberData = {
    description:
      "Knight of the Sword and Heroic Spirit of the Sword. A jack-of-all-trades warrior. Agile and powerful in close quarters; extremely adept at swordsmanship.",
    stats: [
      {
        icon: (
          <img src="/Fgo/icons/Powerup.png" alt="Powerup" className="w-5 h-5" />
        ),
        text: "Sabers have a base damage multiplier of 1.0x.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Stargainup.png"
            alt="Stargainup"
            className="w-5 h-5"
          />
        ),
        text: "Sabers have a base star generation rate of 10%.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Critabsup.png"
            alt="Critabsup"
            className="w-5 h-5"
          />
        ),
        text: "Sabers have a base star absorption of 100.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Instapowerup.png"
            alt="Instapowerup"
            className="w-5 h-5"
          />
        ),
        text: "Sabers have a base death rate of 35%.",
      },
    ],
    totalCount: "There are currently 54 playable Saber released in the game.",
  };

  type Character = {
    name: string;
    rarity: 3 | 4 | 5;
    image: string;
    locked: boolean;
    special?: string[];
  };

  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  const characters: Character[][] = chunk(saberCharacters as Character[], 5);

  const CharacterCard: React.FC<{ character: Character }> = ({ character }) => (
    <div className="relative">
      <div>
        {/* Character Image */}
        <div className="h-full relative overflow-hidden">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        {/* Stars */}
        <div className="absolute top-1 left-1 text-yellow-400 text-xs">
          {character.rarity}
        </div>

        {/* Lock Icon */}
        {character.locked && (
          <div className="absolute top-1 right-1 text-white text-sm">🔒</div>
        )}

        {/* Special Icons */}
        {character.special && (
          <div className="absolute top-6 right-1 flex flex-col gap-1">
            {character.special.map((icon, idx) => (
              <span key={idx} className="text-sm">
                {icon}
              </span>
            ))}
          </div>
        )}

        {/* Class Symbol */}
      </div>

      {/* Character Name */}
      <div className="text-center mt-2 text-blue-300 text-sm font-medium">
        {character.name}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Class selection header (inserted above Saber content) */}
      <ServantsHeader />

      {/* Header with Class Icons */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="Fgo/icons/Class-Saber-Gold (1).png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="Fgo/icons/Class-Saber-Grand.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Class Description */}
          <div className="max-w-2xl">
            <p className="text-gray-300 italic mb-4 leading-relaxed">
              —{saberData.description}—
            </p>

            {/* Stats */}
            <div className="space-y-2">
              {saberData.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-lg">{stat.icon}</span>
                  <span className="text-gray-300">{stat.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-400">
              {saberData.totalCount}
            </div>
          </div>
        </div>
      </div>

      {/* Advantage/Disadvantage Section */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Arrow_Advantage.png" alt="" />
              <span className="text-sm">Class Advantage</span>
            </div>
            <div className="text-white">/</div>
            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Arrow_Disadvantage.png" alt="" />
              <span className="text-sm">Disadvantage</span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 transition-colors"
          >
            [Expand]{" "}
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 p-4 bg-gray-700 rounded">
            <p className="text-sm text-gray-300">
              Class advantage information would be displayed here when expanded.
            </p>
          </div>
        )}
      </div>

      {/* Character Grid */}
      <div className="space-y-6">
        {characters.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-4">
            {row.map((character, characterIndex) => (
              <CharacterCard
                key={`${rowIndex}-${characterIndex}`}
                character={character}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
