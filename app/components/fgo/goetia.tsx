// ...existing code...
import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

// types for skill data
type SkillKey = "First Skill" | "Second Skill" | "Third Skill";

interface StatRow {
  name: string;
  icon: string;
  color: string;

  values: number[];
}

interface SkillEntry {
  name: string;
  src: string;
  icon: string;
  images?: string[];
  effects: string[];
  overcharge: string;
  cooldowns: number[];
  stats: StatRow[];
}

export const Goetia = () => {
  const [activeTab, setActiveTab] = useState<SkillKey>("First Skill");
  const [activeStage, setActiveStage] = useState(1);
  const tabs: SkillKey[] = ["First Skill", "Second Skill", "Third Skill"];
  const [isExpanded, setIsExpanded] = useState(false);

  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/beast/goetia/S151_Stage1.png",
    },
  ];

  const skillsData: Record<SkillKey, SkillEntry> = {
    "First Skill": {
      name: "Azure Summerwear B",
      src: "Fgo/icons/Quickartsup.png",
      icon: "⚡",

      effects: [
        "Increases party's Quick performance for 3 turns.",
        "Increases party's Arts performance for 3 turns.",
        "Increases party's buff removal resistance for 1 time, 3 turns.",
      ],
      overcharge: "Overcharges party's NP by 2 stages for 1 time, 3 turns.",
      cooldowns: [9, 8, 7],
      stats: [
        {
          name: "Quick +",
          icon: "⚡",
          color: "text-green-400",

          values: [10, 11, 12, 13, 14, 15, 16, 17, 18, 20],
        },
        {
          name: "Arts +",
          icon: "✦",
          color: "text-blue-400",

          values: [10, 11, 12, 13, 14, 15, 16, 17, 18, 20],
        },
        {
          name: "Buff Removal Res +",
          icon: "🛡",
          color: "text-yellow-400",

          values: [50, 55, 60, 65, 70, 75, 80, 85, 90, 100],
        },
      ],
    },
    "Second Skill": {
      name: "Crimson Blade Strike A",
      src: "Fgo/icons/NPOvercharge.png",
      icon: "⚔",

      images: ["/Fgo/icons/NPOvercharge.png", "/Fgo/icons/Quickupstatus.png"],
      effects: [
        "Increases own Attack for 3 turns.",
        "Increases own Critical Damage for 3 turns.",
        "Grants self Guts status for 1 time, 5 turns.",
      ],
      overcharge: "Increases own NP damage for 1 turn.",
      cooldowns: [8, 7, 6],
      stats: [
        {
          name: "Attack +",
          icon: "⚔",
          color: "text-red-400",

          values: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40],
        },
        {
          name: "Critical Damage +",
          icon: "💥",
          color: "text-orange-400",

          values: [30, 32, 34, 36, 38, 40, 42, 44, 46, 50],
        },
        {
          name: "Guts HP",
          icon: "❤",
          color: "text-pink-400",

          values: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 2000],
        },
      ],
    },
    "Third Skill": {
      name: "Mystic Protection EX",
      src: "Fgo/icons/MysticProtection.png",
      icon: "🔮",

      effects: [
        "Increases party's Defense for 3 turns.",
        "Grants party Debuff Immunity for 3 turns.",
        "Recovers party's HP.",
      ],
      overcharge: "Increases party's NP generation rate for 3 turns.",
      cooldowns: [7, 6, 5],
      stats: [
        {
          name: "Defense +",
          icon: "🛡",
          color: "text-blue-400",

          values: [15, 17, 19, 21, 23, 25, 27, 29, 31, 35],
        },
        {
          name: "HP Heal",
          icon: "❤",
          color: "text-green-400",

          values: [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 3000],
        },
        {
          name: "NP Gen +",
          icon: "⭐",
          color: "text-purple-400",

          values: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40],
        },
      ],
    },
  };

  // currentSkill selected from skillsData (activeTab is SkillKey)
  const currentSkill = skillsData[activeTab];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/beast/goetia/S151_Sprite_Ver1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/beast/goetia/S151_Stage1.png"
  );
  const [imageType, setImageType] = useState("stage");

  interface Stage {
    id: number;
    label: string;
    src: string;
  }

  const handleStageClick = (stage: Stage) => {
    setActiveStage(stage.id);
    setActiveImage(stage.src);
    setImageType("stage");
  };

  interface Costume {
    id: number;
    label: string;
    src: string;
  }

  const handleCostumeClick = (costume: Costume) => {
    setActiveImage(costume.src);
    setImageType("costume");
  };

  interface Sprite {
    id: number;
    label: string;
    src: string;
  }

  const handleSpriteClick = (sprite: Sprite) => {
    setActiveImage(sprite.src);
    setImageType("sprite");
  };

  const cardTypes = [
    { type: "quick, arts, buster", icon: "Fgo/icons/QQABB.png" },
  ];

  const traits = ["King"];

  const bottomTabs = [
    "Active Skills",
    "Passive Skills",
    "Append Skills",
    "Noble Phantasm",
    "Ascension",
    "Skill Upgrade",
    "Stats",
    "Bond Level",
    "Biography",
    "Trivia",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans px-4 sm:px-6 lg:px-8">
      {/* Header Warning */}
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <img
          src="/Fgo/icons/BBSlotBBQSadist.png"
          alt="Bryn2"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-none"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-white">
              This is an Enemy-only Servant{" "}
              <X className="inline-block w-5 h-5 fill-red-500 text-red-500 mb-1" />
            </h3>
          </div>
          <p className="text-gray-300 text-sm">
            It cannot be obtained as a playable-Servant through any means.
          </p>
        </div>
        <X className="w-5 h-5 text-white cursor-pointer self-start sm:self-auto" />
      </div>

      {/* Article Navigation */}
      <div className="px-0 sm:px-0 my-4">
        <p className="text-sm text-white italic text-center sm:text-left">
          This article is about
          <img
            src="Fgo/characters/beast/Class-Beast (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1 mr-1"
          />
          Beast I Goetia. For the Grand Caster, see{" "}
          <a href="" className="text-blue-400">
            Solomon (Enemy)
          </a>
          . For King of Man, see{" "}
          <a href="" className="text-blue-400">
            King of Man Goetia
          </a>
          .
        </p>
      </div>

      {/* Main Tabs */}

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Left Panel - Character Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Character Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/Fgo/characters/beast/Class-Beast (1).png"
              alt="Archer Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Goetia
              </h1>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star: number) => (
                  <Star
                    key={star}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Character Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white mb-1">Japanese Name:</p>
              <p className="text-white">ゲーティア</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
                <strong>King of Demon Gods Goetia</strong> (魔神王ゲーティア?),
                Beast I
              </p>
            </div>
            <div>
              <p className="text-white mb-1">ID:</p>
              <p className="text-white">151</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Cost:</p>
              <p className="text-white font-bold">16</p>
            </div>

            <div>
              <p className="text-white mb-1">ATK:</p>
              <p className="text-white">2,268/24,721</p>
            </div>
            <div>
              <p className="text-white mb-1">HP:</p>
              <p className="text-white">11,400/688,560</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">24,721</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">688,560</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">?? / ??</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">?? / ??</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Voice Actor:</p>
              <p className="text-blue-500">Sugita Tomokazu</p>
            </div>
            <div>
              <p className="text-blue-400 mb-1">Illustrator:</p>
              <p className="text-blue-500">Yamanaka Kotetsu</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Attribute:</p>
              <p className="text-blue-500">Beast</p>
            </div>
            <div>
              <p className="text-blue-400 mb-1">Growth Curve:</p>
              <p className="text-white">Linear</p>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">Star Absorption:</span>
              <span className="text-white">0</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">Star Generation:</span>
              <span className="text-white">0%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">NP Charge ATK:</span>
              <span className="text-white">0%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">NP Charge DEF:</span>
              <span className="text-white">0%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">Death Rate:</span>
              <span className="text-white">0%</span>
            </div>
            <div>
              <p className="text-blue-400 mb-1">Alignments:</p>
              <p className="text-blue-500">Chaotic • Good</p>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <p className="text-white mb-1">Gender:</p>
              <p className="text-blue-500">None</p>
            </div>
          </div>

          {/* Traits */}
          <div>
            <p className="text-white mb-2">Basic Traits:</p>
            <div className="flex flex-wrap gap-1">
              {traits.map((trait: string, index: number) => (
                <span key={index} className="text-blue-400 text-sm">
                  {trait}
                  {index < traits.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Command Cards */}
          <div>
            <div className="flex gap-1 mb-2">
              {cardTypes.map((card, index) => (
                <div key={index} className="w-full h-full">
                  <img
                    src={card.icon}
                    alt={card.type}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="text-white">Hits:</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Quickicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>AoE 10</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Artsicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>9</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Bustericon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>AoE 1</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Extraicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>1</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image and Controls */}
        <div className="w-full lg:w-1/2">
          {/* Stage/Costume Controls */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => handleStageClick(stage)}
                className={`px-3 py-2 rounded text-sm font-medium ${
                  activeStage === stage.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>

          {/* Sprite Controls */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {sprites.map((sprite) => (
              <button
                key={sprite.id}
                onClick={() => handleSpriteClick(sprite)}
                className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600"
              >
                {sprite.label}
              </button>
            ))}
          </div>

          {isExpanded && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setIsExpanded(false)}
            >
              <img
                src={activeImage}
                alt="Expanded artwork"
                className="max-w-full max-h-full object-contain cursor-zoom-out"
              />
            </div>
          )}

          {/* Character Artwork */}
          <div className="rounded-lg p-4 flex items-end justify-center relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
            {/* Ocean/Beach Background Effect */}

            {/* Character Placeholder */}
            <div className="relative z-10 text-center w-full flex justify-center">
              <img
                src={activeImage}
                alt="Artoria Pendragon Artwork"
                className="max-w-full h-auto object-contain rounded-lg shadow-lg max-h-[60vh] sm:max-h-[50vh] md:max-h-[60vh]"
                onClick={() => setIsExpanded(true)}
              />
            </div>

            {/* Decorative Elements */}
            <div className="hidden sm:block absolute top-4 left-4 text-yellow-200 opacity-60">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="inline-block animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  ✦
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="flex gap-1 p-2 overflow-x-auto">
          {bottomTabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 text-white p-6 rounded-lg max-w-4xl mx-auto font-sans mt-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-semibold text-blue-300">Active Skills</h1>
          <svg
            className="w-4 h-4 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-700 rounded-t-lg p-1 mb-0">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded transition-colors ${
                  activeTab === tab
                    ? "bg-slate-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-650"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Available from start banner */}
        <div className="bg-slate-700 px-4 py-2 text-center text-slate-300 text-sm">
          Available from the start
        </div>

        {/* Skill Details */}
        <div className="bg-slate-750 border-l-2 border-r-2 border-slate-700">
          {/* Skill Icon and Name */}
          <div className="flex items-center gap-4 p-4 bg-slate-800 border-b border-slate-700">
            <div>
              <div>
                <img src="Fgo/icons/Quickartsup.png" alt="" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-300">
                {currentSkill.name}
              </h3>
            </div>
          </div>

          {/* Effects */}
          <div className="p-4 space-y-2">
            {currentSkill.effects.map((effect, index) => (
              <p key={index} className="text-slate-300 text-sm leading-relaxed">
                {effect}
              </p>
            ))}
            {/* optional skill images/icons */}
            {currentSkill.images && currentSkill.images.length > 0 && (
              <div className="pt-2 flex gap-2">
                {currentSkill.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`skill-${i}`}
                    className="h-8 w-8 object-contain"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400 text-lg">✦</span>
              <p className="text-slate-300 text-sm">
                {currentSkill.overcharge}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Table */}
        <div className="bg-slate-750 border border-slate-700 rounded-b-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">
                  Level
                </th>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <th
                    key={num}
                    className="text-center py-3 px-2 text-slate-400 font-medium w-16"
                  >
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {/* Dynamic Stats Rows */}
              {currentSkill.stats.map((stat, statIndex) => (
                <tr
                  key={statIndex}
                  className="hover:bg-slate-700/50 transition-colors"
                >
                  <td className="py-3 px-4 flex items-center gap-2">
                    <div>
                      <span className="text-xs">{stat.icon}</span>
                    </div>
                    <span className={`${stat.color} font-medium`}>
                      {stat.name}
                    </span>
                  </td>
                  {stat.values.map((value, index) => (
                    <td
                      key={index}
                      className="text-center py-3 px-2 text-slate-300 border"
                    >
                      {stat.name.includes("HP") ? value : `${value}%`}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Cooldown Row */}
              <tr className="bg-slate-800">
                <td className="py-3 px-4 text-slate-400 font-medium">
                  Cooldown
                </td>
                <td className="text-center py-3 px-2 text-slate-300">
                  {currentSkill.cooldowns[0]}
                </td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300">
                  {currentSkill.cooldowns[1]}
                </td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300"></td>
                <td className="text-center py-3 px-2 text-slate-300">
                  {currentSkill.cooldowns[2]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
