import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Edit3,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import moon_cancercharacters from "./moon_cancercharacters.json";

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
          <a href="/moon_cancer">
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
          <a href="/pretender">
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
          <a
        href="/beast"
        className="flex items-center justify-center w-full h-full space-x-1"
          >
        <img
          src="Fgo/icons/Class-Beast.png"
          alt="Beast"
          className="w-10 h-10"
        />
        <img
          src="Fgo/icons/Class-Beast-Gold.png"
          alt="Beast Gold"
          className="w-10 h-10"
        />
          </a>
        );
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
          <h1 className="text-3xl font-bold text-white">Moon Cancer</h1>
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

export const MoonCancer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const moonCancerData = {
    description:
      "A title bestowed to those who threaten the world of the Moon, those who attempted to invade the core of SE.RA.PH. The Cancer of the Moon Cell.",
    stats: [
      {
        icon: (
          <img src="/Fgo/icons/Powerup.png" alt="Powerup" className="w-5 h-5" />
        ),
        text: "Moon Cancers have a base damage multiplier of 1.0x.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Stargainup.png"
            alt="Stargainup"
            className="w-5 h-5"
          />
        ),
        text: "Moon Cancers have a base star generation rate of 15%.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Critabsup.png"
            alt="Critabsup"
            className="w-5 h-5"
          />
        ),
        text: "Moon Cancers have a base star absorption of 50.",
      },
      {
        icon: (
          <img
            src="/Fgo/icons/Instapowerup.png"
            alt="Instapowerup"
            className="w-5 h-5"
          />
        ),
        text: "Moon Cancers have a base death rate of 1%.",
      },
    ],
    totalCount: "There are currently 3 playable Moon Cancers released in the game.",

  };

  type Character = {
    name: string;
    rarity: 3 | 4 | 5;
    image: string;
    locked: boolean;
    special?: string[];
  };

 function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  const characters: (Character & { url: string })[][] = chunk(
    (moon_cancercharacters as Character[]).map(character => ({
      ...character,
      url: `${character.name.toLowerCase().replace(/\s+/g, '_')}`,
    })),
    5
  );

  const CharacterCard: React.FC<{ character: Character & { url: string } }> = ({ character }) => (
    <a href={character.url} className="block">
      <div className="relative cursor-pointer">
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
    </a>
  );


  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Class selection header (inserted above Saber content) */}
      <ServantsHeader />

      {/* Header with Class Icons */}
    <div className="flex items-start mb-6 space-x-6">
        {/* Images column */}
        {/* Description column */}
        <div className="flex-grow w-full">
            <p className="text-gray-300 italic mb-4 leading-relaxed">
                —{moonCancerData.description}—
            </p>

            <div className="space-y-2">
                {moonCancerData.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-lg">{stat.icon}</span>
                        <span className="text-gray-300">{stat.text}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-sm text-gray-400">
                {moonCancerData.totalCount}
          
            </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 flex items-center justify-center">
                <img
                    src="Fgo/characters/moon_cancer/Class-MoonCancer-Gold (1).png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-20 h-20 flex items-center justify-center">
                <img
                    src="Fgo/characters/moon_cancer/Class-MoonCancer-Grand.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
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
