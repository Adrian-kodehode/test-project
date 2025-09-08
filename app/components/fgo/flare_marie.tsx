// ...existing code...
import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

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

export const FlareMarie = () => {
  const [activeStage, setActiveStage] = useState(1);

  const [isExpanded, setIsExpanded] = useState(false);

  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/beast/u-olga_marie/S411_Stage1.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/beast/u-olga_marie/S411_Sprite_Ver1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/beast/u-olga_marie/S411_Stage1.png"
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

  const traits = [
    "Enuma Elish Nullification",
    "Humanoid",
    "Immune to Pigify",
    "Levitating",
    "Servant",
  ];

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
                className="w-24 h-28  rounded-lg flex-none"
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
          This article is about the Enemy Flare Marie. For other variations, see
          <a href="/e-olga_marie" className="text-blue-400">
            {" "}
            E-Olga Marie
          </a>
          . For original, see{" "}
          <a href="/u-olga_marie" className="text-blue-400">
            U-Olga Marie
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
              alt="beast Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                E-Flare Marie
              </h1>
            </div>
          </div>

          {/* Character Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white mb-1">Japanese Name:</p>
              <p className="text-white">Ｅ－フレアマリー; フレアマリー</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
                <strong>Perma-Heat LostbeltElement Flare Marie</strong>{" "}
                (恒熱遺分體こうねついぶんたいフレアマリー)
              </p>
            </div>
            <div>
              <p className="text-white mb-1">ID:</p>
              <p className="text-white">411</p>
            </div>

            <div>
              <p className="text-white font-bold mb-1">Rank</p>
              <p className="text-white">Gold</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Voice Actor:</p>
              <p className="text-blue-500">Yonezawa Madoka</p>
            </div>
            <div>
              <p className="text-blue-400 mb-1">Illustrator:</p>
              <p className="text-blue-500">Takenouchi Yoshikazu (studioBB)</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Attribute:</p>
              <p className="text-blue-500">Man</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1">Alignments:</p>
              <p className="text-blue-500">Lawful • Good</p>
            </div>
             <div>
              <p className="text-white mb-1 font-bold">Charges: 4</p>

            </div>
            <div>
              <p className="text-white mb-1 font-bold">Actions: 3</p>

            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">Death Rate:</span>
              <span className="text-white">0%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critchnup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white">Death Rate:</span>
              <span className="text-white">10%</span>
            </div>

            {/* Command Cards */}
            <div>
              <div className="flex items-center gap-4 text-sm flex-wrap">
                <span className="text-white">Hits:</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <img
                      src="/Fgo/icons/Quickicon.png"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span>3 AoE</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <img
                      src="/Fgo/icons/Artsicon.png"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span>3 </span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <img
                      src="/Fgo/icons/Bustericon.png"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span>3 AoE</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <img
                      src="/Fgo/icons/Extraicon.png"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span>3 AoE</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-white mb-1">Gender:</p>
              <p className="text-blue-500">Female</p>
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

            <p className="mt-2">
              <strong>Appeared in</strong>:{" "}
              <span className="text-blue-400">Olga Marie Quest_1</span>
            </p>
          </div>
        </div>

        {/* Right Panel - Image and Controls */}
        <div className="w-full lg:w-1/2">
          {/* Stage/Sprite Controls */}
          <div className="flex flex-wrap gap-2 mb-4">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => handleStageClick(stage)}
                className={`px-3 py-2 rounded text-sm font-medium ${
                  activeImage === stage.src
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {stage.label}
              </button>
            ))}
            {sprites.map((sprite) => (
              <button
                key={sprite.id}
                onClick={() => handleSpriteClick(sprite)}
                className={`px-3 py-2 rounded text-sm font-medium ${
                  activeImage === sprite.src
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
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
    </div>
  );
};
