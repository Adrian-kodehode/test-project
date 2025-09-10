import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const TamamoCat = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/berserker/tamamo_cat/S058_Stage1.png",
    },
    {
      id: 2,
      label: "Stage 2",
      src: "/Fgo/characters/berserker/tamamo_cat/S058_Stage2.png",
    },
    {
      id: 3,
      label: "Stage 3",
      src: "/Fgo/characters/berserker/tamamo_cat/S058_Stage3.png",
    },
    {
      id: 4,
      label: "Stage 4",
      src: "/Fgo/characters/berserker/tamamo_cat/S058_Stage4.png",
    },
  ];

  const costumes = [
    {
      id: 1,
      label: "Costume 1",
      src: "/Fgo/characters/berserker/tamamo_cat/S058_Costume1.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/berserker/tamamo_cat/S058_Sprite_Ver2_Stage1.png",
    },
    {
      id: 2,
      label: "Sprite 2",
      src: "Fgo/characters/berserker/tamamo_cat/S058_Sprite_Ver2_Stage2.png",
    },
    {
      id: 3,
      label: "Sprite 3",
      src: "Fgo/characters/berserker/tamamo_cat/S058_Sprite_Ver2_Stage3.png",
    },
  ];

  const costumesSprite = [
    {
      id: 1,
      label: "Costume 1 Sprite",
      src: "Fgo/characters/berserker/tamamo_cat/S058_Sprite_Ver2_Costume1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/berserker/tamamo_cat/S058_Stage1.png"
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
    "Animal Characteristics Servant",
    "Costume-Owning",
    "Demonic Beast Servant",
    "Humanoid",
    "Non-Hominidae Servant",
    "Servant",
    "Seven Knights Servant",
    "Weak to Enuma Elish",
    "Wild Beast",
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

      {/* Article Navigation */}
      <div className="px-0 sm:px-0 ">
        <p className="text-sm text-gray-400 italic text-center sm:text-left">
          This article is about the <span className="text-yellow-400">5★</span>{" "}
          <img
            src="Fgo/characters/berserker/Class-Berserker-Gold (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1"
          />{" "}
          For other variations see{" "}
          <a href="/tamamo_disambiguation" className="text-blue-400">
            Tamamo (Disambiguation)
          </a>
          .
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-gray-700 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex-shrink-0 min-w-[110px] sm:flex-1 px-4 py-3 font-medium ${
                activeTab === tab.toLowerCase()
                  ? "bg-blue-600 text-white border-b-2 border-blue-400"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Left Panel - Character Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Character Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/Fgo/characters/berserker/Class-Berserker-Gold (1).png"
              alt="berserker Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Tamamo Cat
              </h1>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((star) => (
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
              <p className="text-white">タマモキャット</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              {/* <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
                Ashtart, S Ishtar, Ishtar-Ashtart, Ashtart Origin, Ashtoreth,
                Ishtarin
              </p> */}
            </div>
            <div>
              <p className="text-gray-400 mb-1">ID:</p>
              <p className="text-white">58</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Cost:</p>
              <p className="text-blue-400 font-bold">12</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">ATK:</p>
              <p className="text-white">1,504/9,026</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">HP:</p>
              <p className="text-white">1,833/11,458</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">10,929</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">13,893</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">12,832</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">16,328</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Voice Actor:</p>
              <p className="text-blue-400">Saitō Chiwa</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Illustrator:</p>
              <p className="text-blue-400">Saitō Chiwa</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Attribute:</p>
              <p className="text-green-400">Earth</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Growth Curve:</p>
              <p className="text-white">Reverse S</p>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Absorption:</span>
              <span className="text-white">10</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Generation:</span>
              <span className="text-white">5%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge ATK:</span>
              <span className="text-white">0.71%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge DEF:</span>
              <span className="text-white">5%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Death Rate:</span>
              <span className="text-white">39%</span>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Alignments:</p>
              <p className="text-white">Chaotic • Good</p>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">Gender:</p>
              <p className="text-white">Female</p>
            </div>
          </div>

          {/* Traits */}
          <div>
            <p className="text-gray-400 mb-2">Basic Traits:</p>
            <div className="flex flex-wrap gap-1">
              {traits.map((trait, index) => (
                <span key={index} className="text-blue-400 text-sm">
                  {trait}
                  {index < traits.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
            {/* <p className="mt-2 ml-2 font-bold">
              ┗ Stage/Costume 1:{" "}
              <span className="text-blue-400 font-normal">
                Levitating Servant
              </span>
            </p> */}
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
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>2</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Artsicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>2</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Bustericon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>2</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Extraicon.png"
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

          <div className="grid grid-cols-2 gap-2 mb-4">
            {costumes.map((costume) => (
              <button
                key={costume.id}
                onClick={() => handleCostumeClick(costume)}
                className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600"
              >
                {costume.label}
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
          <div className="grid grid-cols-2 gap-2 mb-6">
            <button
              key={costumesSprite[0].id}
              onClick={() => {
                setActiveImage(costumesSprite[0].src);
                setImageType("costumeSprite");
              }}
              className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600"
            >
              Costume 1 Sprite
            </button>
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
          <div className="rounded-lg p-4 flex items-end justify-center relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
            {/* Ocean/Beach Background Effect */}
            <div className="absolute inset-0 opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 to-transparent opacity-60"></div>

            {/* Character Placeholder */}
            <div className="relative z-10 text-center w-full flex justify-center">
              <img
                src={activeImage}
                alt="Artoria Pendragon Artwork"
                className="max-w-full h-auto object-contain rounded-lg shadow-lg max-h-[60vh] sm:max-h-[50vh] md:max-h-[60vh] cursor-zoom-in"
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
