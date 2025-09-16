import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const ArtoriaPendragon = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/saber/artoria_pendragon/S002_Stage1.png",
    },
    {
      id: 2,
      label: "Stage 2",
      src: "/Fgo/characters/saber/artoria_pendragon/S002_Stage2.png",
    },
    {
      id: 3,
      label: "Stage 3",
      src: "/Fgo/characters/saber/artoria_pendragon/S002_Stage3.png",
    },
    {
      id: 4,
      label: "Stage 4",
      src: "/Fgo/characters/saber/artoria_pendragon/S002_Stage4.png",
    },
  ];

  const costumes = [
    {
      id: 1,
      label: "Costume 1",
      src: "/Fgo/characters/saber/artoria_pendragon/S002_Costume1.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/saber/artoria_pendragon/S002_Sprite_Ver3_Stage1.png",
    },
    {
      id: 2,
      label: "Sprite 2",
      src: "Fgo/characters/saber/artoria_pendragon/S002_Sprite_Ver3_Stage2.png",
    },
    {
      id: 3,
      label: "Sprite 3",
      src: "Fgo/characters/saber/artoria_pendragon/S002_Sprite_Ver3_Stage3.png",
    },
  ];

  const costumesSprite = [
    {
      id: 1,
      label: "Costume 1 Sprite",
      src: "Fgo/characters/saber/artoria_pendragon/S002_Sprite_Ver3_Costume1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/saber/artoria_pendragon/S002_Stage1.png"
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
    "Arthur",
    "Artoria Face",
    "Costume-Owning",
    "Dragon",
    "Fate/stay night Servant",
    "Hominidae Servant",
    "Humanoid",
    "King",
    "Riding",
    "Round Table Knight",
    "Servant",
    "Seven Knights Servant",
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
      {/* Header Warning */}
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <img
          src="/Fgo/icons/Bryn2.png"
          alt="BB"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-none"
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
        <X className="w-5 h-5 text-gray-400 cursor-pointer self-start sm:self-auto" />
      </div>

      {/* Article Navigation */}
      <div className="px-0 sm:px-0 my-4">
        <p className="text-sm text-gray-400 italic text-center sm:text-left">
          This article is about the <span className="text-yellow-400">5★</span>{" "}
          Artoria Pendragon. For the other variations, see{" "}
          <a href="/artoria_disambiguation" className="text-blue-400">
            Artoria (Disambiguation)
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
              src="/Fgo/icons/Class-Saber-Gold (1).png"
              alt="Saber Icon"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Artoria Pendragon
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
              <p className="text-white"> アルトリア・ペンドラゴン</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-400 mb-1">AKA:</p>
              <p className="text-white">
                King of Knights of the Holy Sword (聖剣の騎士王, Seiken no
                Kishi-ō?), King of Knights (騎士王, Kishi-ō?), Altria Pendragon,
                King Arthur, Blue Saber
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">ID:</p>
              <p className="text-white">2</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Cost:</p>
              <p className="text-blue-400 font-bold">16</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">ATK:</p>
              <p className="text-white">1,734/11,221</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">HP:</p>
              <p className="text-white">2,222/15,150</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">12,283</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.100 Grail HP:</p>
              <p className="text-yellow-400 font-bold">16,597</p>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail ATK:</p>
              <p className="text-yellow-400 font-bold">14,418</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xs">Lv.120 Grail HP:</p>
              <p className="text-yellow-400 font-bold">19,509</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Voice Actor:</p>
              <p className="text-blue-400">Kawasumi Ayako</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Illustrator:</p>
              <p className="text-blue-400">Takeuchi Takashi</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Attribute:</p>
              <p className="text-green-400">Earth</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Growth Curve:</p>
              <p className="text-white">Linear</p>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Absorption:</span>
              <span className="text-white">102</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Star Generation:</span>
              <span className="text-white">10%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge ATK:</span>
              <span className="text-white">0.86%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">NP Charge DEF:</span>
              <span className="text-white">3%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400">Death Rate:</span>
              <span className="text-white">21%</span>
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
            <p className="text-gray-400 mb-2">Basic Traits:</p>
            <div className="flex flex-wrap gap-1">
              {traits.map((trait, index) => (
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
                  <span>1</span>
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

      {/* Noble Phantasm */}
      <h2 className="text-xl font-bold mt-5 ml-8">Noble Phantasm</h2>
      <div className="mt-4 mx-auto w-[1000px] bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex justify-center p-2 bg-gray-900">
          <div className="flex gap-1">
            <button className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded">
              Rank A++
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-300 bg-gray-700 rounded hover:bg-gray-600">
              Rank A
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-300 bg-gray-700 rounded hover:bg-gray-600">
              Videos
            </button>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div className="bg-gray-700 text-center py-2 text-sm font-bold">
          Upgrades after{" "}
          <a href="#" className="text-blue-400">
            Interlude 2
          </a>
        </div>

        {/* NP Title */}
        <div className="bg-gray-900 text-center py-3">
          <p className="text-lg font-bold">Excalibur</p>
          <p className="text-sm text-blue-400">Sword of Promised Victory</p>
        </div>

        {/* Main NP Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-700">
          {/* Left Side - Buster Card */}
          <div className="md:col-span-1 bg-[#541225] flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
            <img
              src="/Fgo/icons/Buster.png"
              alt="Buster"
              className="w-24 h-24"
            />
            <p className="mt-2 font-bold text-pink-300 text-sm">Base Damage: x1.5</p>
          </div>

          {/* Right Side - Details */}
          <div className="md:col-span-2">
            <table className="w-full text-sm font-bold text-center">
              <tbody>
                <tr className="bg-gray-700">
                  <td className="p-2.5 font-bold border-b border-r border-gray-700 w-1/2">
                    Rank
                  </td>
                  <td className="p-2.5 border-b border-gray-700 w-1/2">
                    Noble Phantasm Type
                  </td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-2 border-b border-r border-gray-700">A++</td>
                  <td className="p-2 border-b border-gray-700">
                    Anti-Fortress
                  </td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2.5 font-bold border-b border-r border-gray-700">
                    Hits
                  </td>
                  <td className="p-2.5 border-b border-gray-700">
                    Per Hit Percentage
                  </td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-2 border-r border-gray-700">1</td>
                  <td className="p-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Effect */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-gray-900">
              <td className="bg-gray-700 p-2 font-bold border-r border-gray-700 w-1/3">
                Effect
              </td>
              <td className="p-2">Deals damage to all enemies. ⚠️</td>
            </tr>
          </tbody>
        </table>

        {/* NP Level */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-gray-700">
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                NP Level
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                1
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                2
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                3
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                4
              </td>
              <td className="p-2 font-bold w-[16.66%]">5</td>
            </tr>
            <tr className="bg-gray-800 font-bold">
              <td className="p-2 border-r border-gray-700 flex items-center justify-center gap-1">
                <img
                  src="/Fgo/icons/Powerup.png"
                  alt="Damage"
                  className="w-5 h-5"
                />{" "}
                Damage +
              </td>
              <td className="p-2 border-r border-gray-700">400%</td>
              <td className="p-2 border-r border-gray-700">500%</td>
              <td className="p-2 border-r border-gray-700">550%</td>
              <td className="p-2 border-r border-gray-700">575%</td>
              <td className="p-2">600%</td>
            </tr>
          </tbody>
        </table>

        {/* Overcharge Effect */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr>
              <td className="p-2 font-bold bg-[#53103e] border-r border-gray-700 w-1/3">
                Overcharge Effect
              </td>
              <td className="bg-[#290315] p-2">Charges own NP gauge.</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm font-bold text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-[#53103e]">
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                Charge
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                100%
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                200%
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                300%
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                400%
              </td>
              <td className="p-2 w-[16.66%]">500%</td>
            </tr>
            <tr className="bg-[#290315]">
              <td className="p-2 bg-[#53103e] border-r border-gray-700 flex items-center justify-center gap-1">
                <img
                  src="/Fgo/icons/NpCharge.png"
                  alt="NP"
                  className="w-5 h-5"
                />{" "}
                NP +
              </td>
              <td className="p-2 border-r border-gray-700">20%</td>
              <td className="p-2 border-r border-gray-700">27.5%</td>
              <td className="p-2 border-r border-gray-700">35%</td>
              <td className="p-2 border-r border-gray-700">42.5%</td>
              <td className="p-2">50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ascension Table */}
      <h2 className="text-xl font-bold mt-5 ml-8">Ascension</h2>
      <div className="overflow-x-auto mt-4 flex justify-center">
        <table className="w-[1000px] text-sm text-left text-gray-300">
          <thead className="text-gray-400 bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                n°
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 1
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 2
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 3
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 4
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                QP
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                1st
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Saber_piece.png"
                    alt="Saber Piece"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    100,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                2nd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Saber_piece.png"
                    alt="Saber Piece"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragon_fang.png"
                    alt="Dragon Fang"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    18
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    300,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                3rd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Saber_monument.png"
                    alt="Saber Monument"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Heros_proof.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    29
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Phoenix_plume.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    4
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    1,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                4th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Saber_monument.png"
                    alt="Saber Monument"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Phoenix_plume.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    8
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragons_reverse_scale.png"
                    alt="Heart of the Foreign God"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    3,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td
                colSpan={2}
                className="px-4 py-4 text-center border-r border-gray-700"
              >
                <div className="text-center">
                  Invisible Air:
                  <br />
                  Barrier of the Wind King
                </div>
                <div className="text-center mt-2">
                  騎士王の纏う風の宝具
                  <br />
                  主に聖剣の不可視化に用いられる
                </div>
              </td>
              <td colSpan={4} className="px-6 py-4 text-left align-middle">
                The King of Knights' Noble Phantasm of the wind. Mostly used to
                make the sacred sword invisible.
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                <img
                  src="/Fgo/characters/artoria_disambiguation/S002A1Icon.png"
                  alt="Invisible Air"
                  className="w-28 h-auto mx-auto"
                />
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Heros_proof.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    10
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Medal_of_Great_Knight.png"
                    alt="Medal of Great Knight"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Phoenix_plume.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragons_reverse_scale.png"
                    alt="Heart of the Foreign God"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    3,000,000
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold mt-5 ml-8">Skill Reinforcement</h2>
      <div className="overflow-x-auto mt-4 flex justify-center">
        <table className="w-[1000px] text-sm text-left text-gray-300">
          <thead className="text-gray-400 bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                n°
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 1
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 2
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 3
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Item 4
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                QP
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                1st
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Shiningsaber.png"
                    alt="Shining Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    200,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                2nd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Shiningsaber.png"
                    alt="Shining Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    400,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                3rd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Magicsaber.png"
                    alt="Magic Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    1,200,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                4th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Magicsaber.png"
                    alt="Magic Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Heros_proof.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    15
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    1,600,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                5th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Secretsaber.png"
                    alt="Secret Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Heros_proof.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    29
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    4,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                6th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Secretsaber.png"
                    alt="Secret Gem"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragon_fang.png"
                    alt="Dragon Fang"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    12
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    5,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                7th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragon_fang.png"
                    alt="Dragon Fang"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    24
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Talon_of_chaos.png"
                    alt="Talon of Chaos"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    4
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    10,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                8th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Talon_of_chaos.png"
                    alt="Talon of Chaos"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    11
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Dragons_reverse_scale.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    10
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    12,000,000
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="px-4 py-4 text-center border-r border-gray-700">
                9th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Crystallized_lore.png"
                    alt="Crystallized Lore"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    1
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 text-center">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/saber/artoria_pendragon/Qp.png"
                    alt="QP"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 px-2 text-white">
                    20,000,000
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold mt-5">Stats</h2>
      <div className="bg-gray-800 border border-gray-700 rounded-lg mt-4 ml-14 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            { name: "Strength", rank: "B", value: 4 },
            { name: "Endurance", rank: "B", value: 4 },
            { name: "Agility", rank: "B", value: 4 },
            { name: "Mana", rank: "A", value: 5 },
            { name: "Luck", rank: "A+", value: 5 },
            { name: "NP", rank: "A++", value: 5 },
          ].map((stat, index) => (
            <div
              key={stat.name}
              className={`p-4 text-center ${
                index < 4 ? "border-b border-gray-700" : ""
              } ${index % 2 === 0 ? "md:border-r border-gray-700" : ""}`}
            >
              <p className="font-bold text-white mb-3">
                {stat.name}:{" "}
                <span className="border-b-2 border-dotted border-gray-500">
                  {stat.rank}
                </span>
              </p>
              <div className="flex h-5 rounded-full overflow-hidden bg-gray-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1/5 ${
                      i < stat.value ? "bg-orange-500" : "bg-gray-600"
                    } ${i < 4 ? "border-r-2 border-gray-900" : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bond Level*/}
      <h2 className="text-xl font-bold mt-5 ml-8">Bond Level</h2>
      <div className="overflow-x-auto mt-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <table className="w-full text-sm text-left text-gray-300 border-collapse">
            <thead className="text-gray-400 bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-center border border-gray-600"
                >
                  Bond Level
                </th>
                {[...Array(10)].map((_, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 text-center border border-gray-600"
                  >
                    <div className="flex items-center justify-center gap-1 text-white">
                      <img
                        src={`/Fgo/icons/BondLevel${i + 1}.png`}
                        alt="Bond"
                        className="w-5 h-5"
                      />
                      <span>{i + 1}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Bond Required
                </td>
                {[
                  "3,000",
                  "6,125",
                  "6,125",
                  "6,125",
                  "6,125",
                  "282,500",
                  "300,000",
                  "320,000",
                  "340,000",
                  "370,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600"
                  >
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Total Bond
                </td>
                {[
                  "3,000",
                  "9,125",
                  "15,250",
                  "21,375",
                  "27,500",
                  "310,000",
                  "610,000",
                  "930,000",
                  "1,270,000",
                  "1,640,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600"
                  >
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-800 align-top">
                <td className="px-4 py-4 text-center font-bold border border-gray-600 align-middle">
                  Rewards
                </td>
                {[...Array(10)].map((_, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 border border-gray-600 align-middle"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 h-full">
                      <div className="relative w-16">
                        <img
                          src="/Fgo/icons/ServantCoin2.png"
                          alt="Servant Coin"
                          className="w-full h-auto"
                        />
                        <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white text-xs">
                          {i < 5 ? 5 : i < 9 ? 20 : 40}
                        </span>
                      </div>
                      {i >= 5 && i < 9 && (
                        <div className="relative w-16">
                          <img
                            src="/Fgo/icons/Saintquartz.png"
                            alt="Saint Quartz"
                            className="w-full h-auto"
                          />
                          <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white text-xs">
                            3
                          </span>
                        </div>
                      )}
                      {i === 9 && (
                        <div className="relative w-16">
                          <img
                            src="/Fgo/icons/MaxbondCEIcon.png"
                            alt="Bond CE"
                            className="mx-auto"
                          />
                          <span className="font-bold text-blue-400">
                            Bond CE
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-800">
                <td
                  className="px-4 py-4 text-center font-bold border border-gray-600 align-middle"
                  colSpan={2}
                >
                  Bond 10 Craft Essence
                </td>
                <td className="px-4 py-4 border border-gray-600" colSpan={3}>
                  <img
                    src="/Fgo/icons/CEIcon191.png"
                    alt="Crown of the Star"
                    className="w-24 mx-auto"
                  />
                </td>
                <td
                  className="px-4 py-4 border border-gray-600 text-center"
                  colSpan={6}
                >
                  <p className="font-bold text-blue-400">Crown of the Star</p>
                  <p className="text-sm">When equipped on Artoria Pendragon:</p>
                  <p className="text-sm flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Attackup.png"
                      alt="Attack Up"
                      className="w-auto h-auto"
                    />
                    <span className="">
                      Increases party's attack by 15% while self is on the
                      field.
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full text-sm text-left text-gray-300 border-collapse mt-8">
            <thead className="text-gray-400 bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-center border border-gray-600"
                >
                  Chaldean Visionary Flames
                </th>
                {[11, 12, 13, 14, 15].map((level) => (
                  <th
                    key={level}
                    scope="col"
                    className="px-4 py-3 text-center border border-gray-600"
                  >
                    <div className="flex items-center justify-center gap-1 text-white">
                      <img
                        src={`/Fgo/icons/BondLevel${level - 10}.png`}
                        alt="Bond"
                        className="w-5 h-5"
                      />
                      <span>{level}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Bond Required
                </td>
                {[
                  "1,090,000",
                  "1,230,000",
                  "1,360,000",
                  "1,500,000",
                  "1,640,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600"
                  >
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Total Bond
                </td>
                {[
                  "2,730,000",
                  "3,960,000",
                  "5,320,000",
                  "6,820,000",
                  "8,460,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600"
                  >
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-800 align-top">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Rewards
                </td>
                {[...Array(5)].map((_, i) => (
                  <td key={i} className="px-4 py-4 border border-gray-600">
                    <div className="flex flex-col items-center justify-center gap-2 h-full">
                      <div className="flex gap-2 justify-center">
                        <div className="relative w-16">
                          <img
                            src="/Fgo/icons/ServantCoin2.png"
                            alt="Servant Coin"
                            className="w-full h-auto"
                          />
                          <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white text-xs">
                            {i === 0 ? 50 : 60}
                          </span>
                        </div>
                        <div className="relative w-16">
                          <img
                            src="/Fgo/icons/Saintquartz.png"
                            alt="Saint Quartz"
                            className="w-full h-auto"
                          />
                          <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white text-xs">
                            30
                          </span>
                        </div>
                      </div>
                      {i === 4 && (
                        <div className="relative w-16">
                          <img
                            src="/Fgo/icons/SkillIconMini.png"
                            alt="New Passive Skill"
                            className="w-auto h-auto"
                          />
                          <span className="text-center text-blue-400 text-xs mt-1 block">
                            New Passive Skill
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
