import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const MashuKyrielight = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Stage1.png",
    },
    {
      id: 2,
      label: "Stage 2",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Stage2.png",
    },
    {
      id: 3,
      label: "Stage 3",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Stage3.png",
    },
    {
      id: 4,
      label: "Stage 4",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Stage4.png",
    },
  ];

  const costumes = [
    {
      id: 1,
      label: "Costume 1",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Costume1.png",
    },
    {
      id: 2,
      label: "Costume 2",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Costume2.png",
    },
    {
      id: 3,
      label: "Costume 3",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Costume3.png",
    },
  ];

  const ortenaus = [
    {
      id: 1,
      label: "Ortenaus",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Ortenaus1.png",
    },
    {
      id: 2,
      label: "Ortenaus 2",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Ortenaus2.png",
    },
  ];

  const ortenausSprite = [
    {
      id: 1,
      label: "Ortenaus Sprite",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Ortenaus1.png",
    },
  ];

  const paladin = [
    {
      id: 1,
      label: "Paladin",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Paladin1.png",
    },
    {
      id: 2,
      label: "Paladin 2",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Paladin2.png",
    },
  ];

  const paladinSprite = [
    {
      id: 1,
      label: "Paladin Sprite",
      src: "/Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Paladin1.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Stage1.png",
    },
    {
      id: 2,
      label: "Sprite 2",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Stage2.png",
    },
    {
      id: 3,
      label: "Sprite 3",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Stage3.png",
    },
  ];

  const costumesSprite = [
    {
      id: 1,
      label: "Costume 1 Sprite",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Costume1.png",
    },
    {
      id: 2,
      label: "Costume 2 Sprite",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Costume2.png",
    },
    {
      id: 3,
      label: "Costume 3 Sprite",
      src: "Fgo/characters/shielder/mashu_kyrielight/S001_Sprite_Ver2_Costume3.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/shielder/mashu_kyrielight/S001_Stage1.png"
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
    { type: "quick, arts, buster", icon: "Fgo/icons/QAABB.png" },
  ];

  const traits = [
    "Costume-Owning",
    "Demi-Servant",
    "Hominidae Servant",
    "Humanoid",
    "Living Human",
    "Riding",
    "Servant",
    "Weak to Enuma Elish",
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
      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Left Panel - Character Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Character Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/Fgo/characters/shielder/Class-Shielder-Gold (1).png"
              alt="Shielder Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Mashu Kyrielight
              </h1>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
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
              <p className="text-gray-400 mb-1">Japanese Name:</p>
              <p className="text-white">マシュ・キリエライト</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
                Mash Kyrielight, Mashu Kirielite, Mash,{" "}
                <strong>Fairy Knight Galahad</strong>
                (妖精騎士ギャラハッド?), <strong>Shielder Paladin</strong>
                (シールダー・パラディーン?)
              </p>
            </div>
            <div>
              <p className="text-white mb-1 font-bold">ID:</p>
              <p className="text-white">1</p>
            </div>
            <div>
              <p className="text-blue-400 mb-1 font-bold">Cost:</p>
              <p className="text-white ">0 (Original/Ortenaus)</p>
              <p>┗ 16 (Paladin)</p>
            </div>
            {/* ATK */}
            <div>
              <p className="text-white mb-1 font-bold">ATK: 1,261/6,791</p>
              <p className="font-bold">
                ┗ <span className="text-red-500 ml-1 font-normal">4</span>
                <span className="text-yellow-400">★</span>
                <span className="text-red-500"> ATK</span>:{" "}
                <span className="text-red-500 font-normal"> 1,455/8,730</span>
              </p>
              <p className="font-bold">
                ┗ <span className="text-red-500 ml-1 font-normal">4</span>
                <span className="text-yellow-400">★</span>
                <span className="text-red-500"> Lv.90 ATK</span>:{" "}
                <span className="text-red-500 font-normal"> 9,653</span>
              </p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-purple-500"> Lv.90 ATK</span>:{" "}
                <span className="text-purple-500 font-normal"> 10,835</span>
              </p>
            </div>
            {/* HP */}
            <div>
              <p className="text-white mb-1 font-bold">HP: 1,724/10,302</p>
              <p className="font-bold">
                ┗ <span className="text-red-500 ml-1 font-normal">4</span>
                <span className="text-yellow-400">★</span>
                <span className="text-red-500"> HP</span>:{" "}
                <span className="text-red-500 font-normal"> 2,060/12,977</span>
              </p>
              <p className="font-bold">
                ┗ <span className="text-red-500 ml-1 font-normal">4</span>
                <span className="text-yellow-400">★</span>
                <span className="text-red-500"> Lv.90 HP</span>:{" "}
                <span className="text-red-500 font-normal"> 14,248</span>
              </p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-purple-500"> Lv.90 HP</span>:{" "}
                <span className="text-purple-500 font-normal"> 15,528</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">14,498</p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-white-500">: </span>
                <span className="text-purple-500 font-normal"> 11,861</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">12,885</p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-white">: </span>
                <span className="text-purple-500 font-normal"> 17,528</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">17,017</p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-white">: </span>
                <span className="text-purple-500 font-normal"> 13,992</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">15,143</p>
              <p className="font-bold">
                ┗ <span className="text-purple-500 ml-1 font-normal">5</span>
                <span className="text-yellow-400">★</span>
                <span className="text-white">: </span>
                <span className="text-purple-500 font-normal">19,993</span>
              </p>
            </div>
            <div>
              <p className="text-white mb-1 font-bold">Voice Actor:</p>
              <p className="text-blue-400">Takahashi Rie</p>
            </div>
            <div>
              <p className="text-white mb-1 font-bold">Illustrator:</p>
              <p className="text-blue-400">Takeuchi Takashi</p>
            </div>
            <div>
              <p className="text-white mb-1 font-bold">
                Attribute:{" "}
                <span className="font-normal text-blue-400">Earth</span>
              </p>
              <p>
                ┗ <span className="text-blue-400">Man</span> (Paladin)
              </p>
            </div>
            <div>
              <p className="text-white mb-1 font-bold">Growth Curve:</p>
              <p className="text-white">Linear</p>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                alt="Critical Absorption"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Absorption:</span>
              <span className="text-white">99</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                alt="Star Generation"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Generation:</span>
              <span className="text-white">9.9%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                alt="NP Charge ATK"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge ATK:</span>
              <span className="text-white">0.84%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                alt="NP Charge DEF"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge DEF:</span>
              <span className="text-white">3%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                alt="Death Rate"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Death Rate:</span>
              <span className="text-white">24.5%</span>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Alignments:</p>
              <p className="text-white">Lawful • Good</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">Gender:</p>
              <p className="text-white">Female</p>
            </div>
          </div>

          {/* Traits */}
          <div>
            <p className="text-blue-400 mb-2">Basic Traits:</p>
            <div className="flex flex-wrap gap-2 mb-2 ">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="text-blue-400 px-2 py-1 rounded text-sm border border-blue-400"
                >
                  {trait}
                </span>
              ))}
            </div>
            <div>
              <span className=" font-bold">
                ┗ Costume 1-2:{" "}
                <span className="text-blue-400">Summer Mode Servant</span>
              </span>
            </div>{" "}
            <div>
              <span className=" font-bold">
                ┗ Paladin: <span className="text-blue-400">Defender</span>
              </span>
            </div>{" "}
            <div>
              <span className=" font-bold">
                ┗ Except Paladin:{" "}
                <span className="text-blue-400">Round Table Knight</span>
              </span>
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
              <span className="text-gray-400">Hits:</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Quickicon.png"
                    alt="Quick"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>2</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Artsicon.png"
                    alt="Arts"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>2</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Bustericon.png"
                    alt="Buster"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>1</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Extraicon.png"
                    alt="Extra"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>3</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image and Controls */}
        <div className="w-full lg:w-1/2">
          {/* Controls */}
          <div className="space-y-4 mb-6">
            {/* Stages */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {stages.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => handleStageClick(stage)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      activeStage === stage.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Ortenaus */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                {ortenaus.map((ortenaus) => (
                  <button
                    key={ortenaus.id}
                    onClick={() => handleStageClick(ortenaus)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      activeStage === ortenaus.id
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {ortenaus.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Paladin */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                {paladin.map((paladin) => (
                  <button
                    key={paladin.id}
                    onClick={() => handleStageClick(paladin)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      activeStage === paladin.id
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {paladin.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Costumes */}
            <div>
              <div className="grid grid-cols-3 gap-2">
                {costumes.map((costume) => (
                  <button
                    key={costume.id}
                    onClick={() => handleCostumeClick(costume)}
                    className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {costume.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Sprites */}
            <div>
              <div className="grid grid-cols-3 gap-2">
                {sprites.map((sprite) => (
                  <button
                    key={sprite.id}
                    onClick={() => handleSpriteClick(sprite)}
                    className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {sprite.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Costume Sprites */}
            <div>
              <div className="grid grid-cols-3 gap-2">
                {costumesSprite.map((sprite) => (
                  <button
                    key={sprite.id}
                    onClick={() => {
                      setActiveImage(sprite.src);
                      setImageType("costumeSprite");
                    }}
                    className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {sprite.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Ortenaus Sprites */}
            <div>
              <div className="grid grid-cols-3 gap-2">
                {ortenausSprite.map((sprite) => (
                  <button
                    key={sprite.id}
                    onClick={() => {
                      setActiveImage(sprite.src);
                      setImageType("costumeSprite");
                    }}
                    className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {sprite.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Paladin Sprites */}
            <div>
              <div className="grid grid-cols-3 gap-2">
                {paladinSprite.map((sprite) => (
                  <button
                    key={sprite.id}
                    onClick={() => {
                      setActiveImage(sprite.src);
                      setImageType("costumeSprite");
                    }}
                    className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {sprite.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Expanded Lightbox */}
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
          <div className="rounded-lg p-4 flex items-end justify-center relative overflow-hidden min-h-[280px] sm:min-h-[320px] bg-gradient-to-b ">
            {/* Ocean/Beach Background Effect */}

            {/* Character Placeholder */}
            <div className="relative z-10 text-center w-full flex justify-center">
              <img
                src={activeImage}
                alt="Mashu Kyrielight Artwork"
                className="max-w-full h-auto object-contain rounded-lg shadow-lg max-h-[60vh] sm:max-h-[50vh] md:max-h-[60vh] cursor-zoom-in transition-transform hover:scale-105"
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
