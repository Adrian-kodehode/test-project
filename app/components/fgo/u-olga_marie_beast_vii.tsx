import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const UOlgaMarieBeastVII = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    {
      id: 1,
      label: "Portrait",
      src: "/Fgo/characters/beast/U-Olga Marie (Beast VII)/U-Olga_Marie_Portrait.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Enemy Sprite",
      src: "Fgo/characters/beast/U-Olga Marie (Beast VII)/U-OlgaMarie_Sprite_Enemy_Ver1.png",
    },
    {
      id: 2,
      label: "Playable Sprite",
      src: "Fgo/characters/beast/U-Olga Marie (Beast VII)/U-OlgaMarie_Sprite_Playable_Ver1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/beast/U-Olga Marie (Beast VII)/U-Olga_Marie_Portrait.png"
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
    { type: "quick, arts, buster", icon: "Fgo/icons/QAAAB.png" },
  ];

  const traits = [
    "Enuma Elish Nullification",
    "Humanoid",
    "Levitating Servant",
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
          src="/Fgo/characters/beast/U-Olga Marie (Beast VII)/RiyoMeuniere.png"
          alt="BB"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-none"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-white">
              This is an NPC-only Servant{" "}
              <X className="inline-block w-5 h-5 fill-red-500 text-red-500 mb-1" />
            </h3>
          </div>
          <p className="text-white-300 text-sm">
            It cannot be obtained as a playable-Servant through any means.
          </p>
        </div>
        <X className="w-5 h-5 text-white-400 cursor-pointer self-start sm:self-auto" />
      </div>

      {/* Article Navigation */}
      <div className="px-0 sm:px-0 my-4">
        <p className="text-sm text-white italic text-center sm:text-left">
          This article is about the <span className="text-yellow-400">5★</span>
          <img
            src="Fgo/characters/beast/Class-Beast (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1 mr-1"
          />
          Beast VII U-Olga Marie. For the playable{" "}
          <span className="text-yellow-400">5★</span>{" "}
          <img
            src="Fgo/characters/beast/Class-Beast-Gold (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1 mr-1"
          />
          UnBeast, see{" "}
          <a href="/u-olga_marie" className="text-blue-400">
            U-Olga Marie
          </a>
          . For Chaldea's former director, see{" "}
          <a href="/" className="text-blue-400">
            Olga Marie Animusphere
          </a>
          . For Enemy variations, see{" "}
          <a href="/e-olga_marie" className="text-blue-400">
            E-Olga Marie
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
                  : "bg-gray-800 text-white-300 hover:bg-gray-700"
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
              src="/Fgo/characters/beast/U-Olga Marie (Beast VII)/Class-Unknown-Rainbow.png"
              alt="Archer Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <img
              src="/Fgo/characters/beast/Class-Beast-GrandRainbow.png"
              alt="Archer Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                U-Olga Marie
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
              <p className="text-white-400 mb-1">Japanese Name:</p>
              <p className="text-white">Ｕ－オルガマリー</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-white-400 mb-1">AKA:</p>
              <p className="text-white">
                Ultra-Olga Marie, <strong>Beast VII, Alien God</strong>{" "}
                (異星の神?), Foreign God, The Seventh Apostle of the Alien
                World, <strong>U-Planet Olga Marie</strong>
                (Ｕ－プラネット・オルガマリー)
              </p>
            </div>
            <div>
              <p className="text-white-400 mb-1 font-bold">ID:</p>
              <p className="text-white font-bold">??</p>
            </div>

            <div>
              <p className="text-white-400 mb-1 font-bold">Cost:</p>
              <p className="text-blue-400 font-bold ">0</p>
            </div>

            <div>
              <p className="text-white-400 mb-1 font-bold">ATK:</p>
              <p className="text-white font-bold">2,101/13,596</p>
            </div>
            <div>
              <p className="text-white-400 mb-1 font-bold">HP:</p>
              <p className="text-white font-bold">2,745/18,720</p>
            </div>

            <div>
              <p className="text-yellow-400  font-bold">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">14,883</p>
            </div>
            <div>
              <p className="text-yellow-400  font-bold">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">20,509</p>
            </div>

            <div>
              <p className="text-yellow-400  font-bold">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">17,469</p>
            </div>
            <div>
              <p className="text-yellow-400  font-bold">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">24,103</p>
            </div>

            <style>{`
              @keyframes rainbow {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; } /* move forward only */
              }
              .rainbow-text {
              background: linear-gradient(90deg, #ff004c, #ff7b00, #ffd500, #00c853, #0091ea, #6a1b9a, #ff004c, #ff7b00, #ffd500, #00c853, #0091ea, #6a1b9a, #ff004c);
              background-size: 200% 100%;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
              animation: rainbow 5s linear infinite;
              animation-direction: normal;
              }
            `}</style>

            <div>
              <p className="text-yellow-400 rainbow-text font-bold">
                Lv.150 Grail ATK:
              </p>
              <p className="rainbow-text font-bold">17,469</p>
            </div>
            <div>
              <p className="text-yellow-400 rainbow-text font-bold">
                Lv.150 Grail HP:
              </p>
              <p className="rainbow-text font-bold">24,103</p>
            </div>

            <div>
              <p className="text-blue-400 mb-1 font-bold">Voice Actor:</p>
              <p className="text-blue-400">Yonezawa Madoka</p>
            </div>
            <div>
              <p className="text-blue-400 mb-1 font-bold">Illustrator:</p>
              <p className="text-blue-400">Takeuchi Takashi</p>
            </div>

            <div>
              <span className="text-blue-400 mb-1 font-bold">
                Attribute: <span className="text-blue-400 font-normal">Beast</span>
              </span>
              <br />
              <span>
                ┗ <span className="text-blue-400">Star </span>(
                <span className="text-blue-400">Grand Duel: Extra</span>)
              </span>
            </div>
            <div>
              <p className="text-blue-400 mb-1 font-bold">Growth Curve:</p>
              <p className="text-white">Semi S</p>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-blue-400">Star Absorption:</span>
              <span className="text-white">95</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-blue-400">Star Generation:</span>
              <span className="text-white">9.9%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-blue-400">NP Charge ATK:</span>
              <span className="text-white">0.33%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-blue-400">NP Charge DEF:</span>
              <span className="text-white">3%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-blue-400">Death Rate:</span>
              <span className="text-white">11%</span>
            </div>
            <div>
              <p className="text-blue-400 mb-1">Alignments:</p>
              <p className="text-white">Lawful • Good</p>
              <span>
                ┗ <span className="text-blue-400">Lawful • Evil </span>(
                <span className="text-blue-400">Grand Duel: Extra</span>)
              </span>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <span className="text-white mb-1">
                Gender: <span className="text-blue-400">Female</span>
              </span>
            </div>
          </div>

          {/* Traits */}
          <div>
            <p className="text-white-400 mb-2">Basic Traits:</p>
            <div className="flex flex-wrap gap-1">
              {traits.map((trait, index) => (
                <span key={index} className="text-blue-400 text-sm">
                  {trait}
                  {index < traits.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
            <span>
              ┗{" "}
              <span className="text-blue-400 font-bold">Grand Duel Extra</span>:
              <span className="text-blue-400">
                {" "}
                Divinity<span className="text-white">,</span> Giant
                <span className="text-white">,</span> Immune to Pigify
                <span className="text-white">,</span> Super Large
              </span>
            </span>
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
              <span className="text-white-400">Hits:</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Quickicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>4</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Artsicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>3</span>
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
                  <span>5 AoE</span>
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
                    : "bg-gray-700 text-white-300 hover:bg-gray-600"
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
                className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-white-300 hover:bg-gray-600"
              >
                {sprite.label}
              </button>
            ))}
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
                  : "bg-gray-700 text-white-300 hover:bg-gray-600"
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
