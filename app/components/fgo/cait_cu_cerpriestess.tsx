import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const Cait_Cú_Cerpriestess = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    { id: 1, label: "Stage 1", src: "/Fgo/characters/Cait Cu Cerpriestess/S392_Stage1.png" },
    { id: 2, label: "Stage 2", src: "/Fgo/characters/Cait Cu Cerpriestess/S392_Stage2.png" },
    { id: 3, label: "Stage 3", src: "/Fgo/characters/Cait Cu Cerpriestess/S392_Stage3.png" },
    { id: 4, label: "Stage 4", src: "/Fgo/characters/Cait Cu Cerpriestess/S392_Stage4.png" },
  ];

 

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/Cait Cu Cerpriestess/S392_Sprite_Ver1_Stage1.png",
    },
    {
      id: 2,
      label: "Sprite 2",
      src: "Fgo/characters/Cait Cu Cerpriestess/S392_Sprite_Ver1_Stage2.png",
    },
    {
      id: 3,
      label: "Sprite 3",
      src: "Fgo/characters/Cait Cu Cerpriestess/S392_Sprite_Ver1_Stage3.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/Cait Cu Cerpriestess/S392_Stage1.png"
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
    "Demonic",
    "Fae",
    "Humanoid",
    "Non-Hominidae Servant",
    "Riding",
    "Servant",
    "Summer Mode Servant",
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
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header Warning */}
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4  flex items-start gap-3">
        <img
          src="/Fgo/icons/Bryn2.png"
          alt="BB"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-white">
              This is a Limited Servant
            </h3>
            <Star className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-gray-300 text-sm">
            They are only available during special{" "}
            <span className="text-blue-400">summoning campaigns</span>. When no
            such campaigns are active, this Servant cannot be summoned.
          </p>
        </div>
        <X className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* Article Navigation */}
      <div className="px-4 mb-4">
        <p className="text-sm text-gray-400 italic">
          This article is about the <span className="text-yellow-400">4★</span>{" "}
          Baobhan Sith. For the <span className="text-yellow-400">4★</span>, see{" "}
          <span className="text-blue-400">
            <a href="/#">Baobhan Sith</a>
          </span>
          . 
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`flex-1 px-4 py-3 font-medium ${
              activeTab === tab.toLowerCase()
                ? "bg-blue-600 text-white border-b-2 border-blue-400"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-6 p-6">
        {/* Left Panel - Character Info */}
        <div className="w-1/2 space-y-6">
          {/* Character Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/Fgo/icons/Class-Pretender-Gold.png"
              alt="Pretender Icon"
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Cait Cú Cerpriestess</h1>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Character Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Japanese Name:</p>
              <p className="text-white"> ケット・クー・ミコケル; バーヴァン・シー; 妖精騎士トリスタン</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
              Baobhan Sith, Faerie Knight Tristan, Kait Cu Cerpriestess, Cait Cú MikoCer
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">ID:</p>
              <p className="text-white">392</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Cost:</p>
              <p className="text-blue-400 font-bold">12</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">ATK:</p>
              <p className="text-white">1,638/9831</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">HP:</p>
              <p className="text-white">1,841/11,506</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">11,903</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">13,951</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">13,976</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">16,396</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Voice Actor:</p>
              <p className="text-blue-400">Waki Azumi</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Illustrator:</p>
              <p className="text-blue-400">Mochizuki Kei</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Attribute:</p>
              <p className="text-green-400">Earth</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Growth Curve:</p>
              <p className="text-white">S</p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Critabsup.png" className="w-7 h-7" />
              <span className="text-gray-400">Star Absorption:</span>
              <span className="text-white">99</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Stargainup.png" className="w-7 h-7" />
              <span className="text-gray-400">Star Generation:</span>
              <span className="text-white">19.8%</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Npchargeup.png" className="w-7 h-7" />
              <span className="text-gray-400">NP Charge ATK:</span>
              <span className="text-white">0.59%</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/NPGainUpDmg.png" className="w-7 h-7" />
              <span className="text-gray-400">NP Charge DEF:</span>
              <span className="text-white">3%</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/Fgo/icons/Instapowerup.png" className="w-7 h-7" />
              <span className="text-gray-400">Death Rate:</span>
              <span className="text-white">18%</span>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Alignments:</p>
              <p className="text-white">Chaotic • Evil</p>
            </div>

            <div className="col-span-2">
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
            <h2 className="mt-2">┗ Stage 3 <span className="text-blue-400">Levitating Servant</span></h2>
          </div>

          {/* Command Cards */}
          <div>
            <div className="flex gap-1 mb-2">
              {cardTypes.map((card, index) => (
                <div key={index}>
                  <img
                    src={card.icon}
                    alt={card.type}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">Hits:</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <img src="/Fgo/icons/Quickicon.png" className="w-7 h-7"></img>
                  <span>4</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img src="/Fgo/icons/Artsicon.png" className="w-7 h-7"></img>
                  <span>3</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Bustericon.png"
                    className="w-7 h-7"
                  ></img>
                  <span>3</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img src="/Fgo/icons/Extraicon.png" className="w-7 h-7" />
                  <span>5</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image and Controls */}
        <div className="w-1/2">
          {/* Stage/Costume Controls */}
          <div className="grid grid-cols-3 gap-2 mb-4">
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
          <div className="grid grid-cols-3 gap-2 mb-6">
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

        

          {/* Character Artwork */}
          <div className="ounded-lg p-4 aspect-square flex items-end justify-center relative overflow-hidden">
            {/* Ocean/Beach Background Effect */}
            <div className="absolute inset-0  opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3  to-transparent opacity-60"></div>

            {/* Character Placeholder */}
            <div className="relative z-10 text-center">
              <img
                src={activeImage}
                alt="Cait Cú Cerpriestess Artwork"
                className="w-fit h-fit object-cover max-w-xs max-h-xs rounded-lg shadow-lg"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-yellow-200 opacity-60">
              {[...Array(4)].map((_, i) => (
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
        <div className="flex flex-wrap gap-1 p-2">
          {bottomTabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
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
