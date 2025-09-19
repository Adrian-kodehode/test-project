// ...existing code...
import React, { useState } from "react";
import { Star, Zap, Shield, Heart, Users, Crown, X } from "lucide-react";

export const Morgan = () => {
  const [activeTab, setActiveTab] = useState("servant");
  const [activeStage, setActiveStage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("first");
  const [appendSkillTab, setAppendSkillTab] = useState("first");
  const [npTab, setNpTab] = useState("rank");

  const tabs = ["Servant", "Dialogue", "Quest", "Gallery"];
  const stages = [
    {
      id: 1,
      label: "Stage 1",
      src: "/Fgo/characters/berserker/morgan/S309_Stage1.png",
    },
    {
      id: 2,
      label: "Stage 2",
      src: "/Fgo/characters/berserker/morgan/S309_Stage2.png",
    },
    {
      id: 3,
      label: "Stage 3",
      src: "/Fgo/characters/berserker/morgan/S309_Stage3.png",
    },
    {
      id: 4,
      label: "Stage 4",
      src: "/Fgo/characters/berserker/morgan/S309_Stage4.png",
    },
  ];

  const costumes = [
    {
      id: 1,
      label: "Costume 1",
      src: "/Fgo/characters/berserker/morgan/S309_Costume1.png",
    },
  ];

  const sprites = [
    {
      id: 1,
      label: "Sprite 1",
      src: "Fgo/characters/berserker/morgan/S309_Sprite_Ver1_Stage1.png",
    },
    {
      id: 2,
      label: "Sprite 2",
      src: "Fgo/characters/berserker/morgan/S309_Sprite_Ver1_Stage2.png",
    },
    {
      id: 3,
      label: "Sprite 3",
      src: "Fgo/characters/berserker/morgan/S309_Sprite_Ver1_Stage3.png",
    },
  ];

  const costumesSprite = [
    {
      id: 1,
      label: "Costume 1 Sprite",
      src: "Fgo/characters/berserker/morgan/S309_Sprite_Ver1_Costume1.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(
    "/Fgo/characters/berserker/morgan/S309_Stage1.png"
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
    "Fae",
    "Humanoid",
    "King",
    "Non-Hominidae Servant",
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
      <div className="bg-gray-900 border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
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
        <X className="w-5 h-5 text-white cursor-pointer self-start sm:self-auto" />
      </div>

      {/* Article Navigation */}
      <div className="px-0 sm:px-0 my-4">
        <p className="text-sm text-white italic text-center sm:text-left">
          This article is about the <span className="text-yellow-400">5★</span>{" "}
          <img
            src="Fgo/characters/berserker/Class-Berserker-Gold (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1"
          />{" "}
          Morgan. For <span className="text-yellow-400">5★</span>{" "}
          <img
            src="Fgo/characters/caster/Class-Caster-Gold (1).png"
            alt=""
            className="inline-block h-8 w-8 ml-1"
          />
          , see{" "}
          <a href="/aesc_the_savior" className="text-blue-400">
            Aesc the Savior
          </a>
          .
        </p>
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
                Morgan
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
              <p className="text-white font-bold mb-1">
                Japanese Name:{" "}
                <span className="text-white font-normal"> モルガン</span>
              </p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-white font-bold mb-1">
                AKA: Morgana le Fae{" "}
                <span className="font-normal">
                  (モルガン・ル・フェ?), Morgan le Fay,
                </span>{" "}
                Vivian
              </p>
            </div>
            <div>
              <p className="text-white font-bold mb-1">
                ID: <span className="text-white font-normal">309</span>
              </p>
            </div>

            <div>
              <p className="text-blue-400 font-bold mb-1">
                Cost: <span className="text-white font-normal">16</span>
              </p>
            </div>

            <div>
              <p className="text-white font-bold mb-1">
                ATK:{" "}
                <span className="text-white font-normal">1,884/12,193</span>
              </p>
            </div>
            <div>
              <p className="text-white font-bold mb-1">
                HP: <span className="text-white font-normal">1,824/12,440</span>
              </p>
            </div>

            <div>
              <p className="text-yellow-400 font-bold">
                Lv.100 Grail ATK:{" "}
                <span className="text-yellow-400 ">13,347</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">
                Lv.100 Grail HP: <span className="text-yellow-400">13,628</span>
              </p>
            </div>

            <div>
              <p className="text-yellow-400 font-bold">
                Lv.120 Grail ATK:{" "}
                <span className="text-yellow-400 ">15,667</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">
                Lv.120 Grail HP:{" "}
                <span className="text-yellow-400 ">16,017</span>
              </p>
            </div>

            <div>
              <p className="text-blue-400 font-bold mb-1">
                Voice Actor:{" "}
                <span className="text-blue-400 font-normal">Ishikawa Yui</span>
              </p>
            </div>
            <div>
              <p className="text-blue-400 font-bold mb-1">
                Illustrator:{" "}
                <span className="text-blue-400 font-normal">
                  Takeuchi Takashi
                </span>
              </p>
            </div>

            <div>
              <p className="text-blue-400 font-bold mb-1">
                Attribute:{" "}
                <span className="text-blue-400 font-normal">Earth</span>
              </p>
            </div>
            <div>
              <p className="text-blue-400 font-bold mb-1">
                Growth Curve:{" "}
                <span className="text-white font-normal">Semi S</span>
              </p>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Critabsup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-bold">Star Absorption:</span>
              <span className="text-white">10</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Stargainup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-bold">Star Generation:</span>
              <span className="text-white">5%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Npchargeup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-bold">NP Charge ATK:</span>
              <span className="text-white">0.53%</span>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/NPGainUpDmg.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-bold">NP Charge DEF:</span>
              <span className="text-white">5%</span>
            </div>

            <div className="flex items-center gap-2 col-span-1">
              <img
                src="/Fgo/icons/Instapowerup.png"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-bold">Death Rate:</span>
              <span className="text-white">37.3%</span>
            </div>
            <div>
              <p className="text-blue-400 font-bold mb-1">
                Alignments:{" "}
                <span className="text-blue-400 font-normal">Lawful • Evil</span>
              </p>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <p className="text-white font-bold mb-1">
                Gender: <span className="text-white font-normal">Female</span>
              </p>
            </div>
          </div>

          {/* Traits */}
          <div>
            <p className="text-white font-bold mb-2">
              Basic <span className="text-blue-400">Traits</span>:
            </p>
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
                <div key={index} className="w-auto h-auto">
                  <img
                    src={card.icon}
                    alt={card.type}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="text-white font-bold">Hits:</span>
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
                  <span>3</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <img
                    src="/Fgo/icons/Extraicon.png"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                  <span>5</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image and Controls */}
        <div className="w-full lg:w-1/3">
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
                }`}>
                {stage.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {costumes.map((costume) => (
              <button
                key={costume.id}
                onClick={() => handleCostumeClick(costume)}
                className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600">
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
                className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600">
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
              className="px-3 py-2 rounded text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600">
              Costume 1 Sprite
            </button>
          </div>

          {/* Expanded Lightbox */}
          {isExpanded && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setIsExpanded(false)}>
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
                  style={{ animationDelay: `${i * 0.2}s` }}>
                  ✦
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="flex gap-1 p-2 overflow-x-auto">
          {bottomTabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Active Skills*/}

      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Active Skills</h2>
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveSkillTab("first")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "first"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              First Skill
            </button>
            <button
              onClick={() => setActiveSkillTab("second")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "second"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Second Skill
            </button>
            <button
              onClick={() => setActiveSkillTab("third")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "third"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Third Skill
            </button>
          </div>
        </div>

        {activeSkillTab === "first" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Available from the start
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Atk_up.png"
                  alt="Charisma of Desire"
                  className="w-20 h-20"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Charisma of Desire B
                </p>
                <p className="text-sm">Increases party's attack for 3 turns.</p>
                <p className="text-sm">Charges own NP gauge.</p>
                <p className="text-sm">
                  Reduces all enemies' defense for 3 turns.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 w-1/12">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Attackup.png"
                      alt="Attack"
                      className="w-5 h-5"
                    />
                    Attack +
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/NpCharge.png"
                      alt="NP"
                      className="w-5 h-5"
                    />
                    NP +
                  </td>
                  {[
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "24%",
                    "25%",
                    "26%",
                    "27%",
                    "28%",
                    "30%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Defensedown.png"
                      alt="Defense"
                      className="w-5 h-5"
                    />
                    Defense -
                  </td>
                  {[
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "24%",
                    "25%",
                    "26%",
                    "27%",
                    "28%",
                    "30%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600">
                    Cooldown
                  </td>
                  <td colSpan={5} className="p-2 border-r border-gray-600">
                    8
                  </td>
                  <td colSpan={3} className="p-2 border-r border-gray-600">
                    7
                  </td>
                  <td colSpan={2} className="p-2">
                    6
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSkillTab === "second" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks after 1st Ascension
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Startnp.png"
                  alt="Protection of the Lake"
                  className="w-20 h-20"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center">
                <div className="flex justify-center gap-1 mb-3">
                  <button className="px-4 py-1 text-sm font-bold rounded bg-blue-600 text-white">
                    Default
                  </button>
                  <button className="px-4 py-1 text-sm font-bold rounded bg-gray-800 text-gray-400 hover:bg-gray-700">
                    After Clearing Avalon le Fae
                  </button>
                </div>
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Protection of the Lake C
                </p>
                <p className="text-sm">Charges one ally's NP gauge.</p>
                <p className="text-sm">
                  Increases party's NP generation rate for 3 turns.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center border-t border-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 w-1/12">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/NpCharge.png"
                      alt="NP"
                      className="w-5 h-5"
                    />
                    NP +
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Npchargeup.png"
                      alt="NP Rate"
                      className="w-5 h-5"
                    />
                    NP Rate +
                  </td>
                  {[
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "19%",
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "25%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600">
                    Cooldown
                  </td>
                  <td colSpan={5} className="p-2 border-r border-gray-600">
                    7
                  </td>
                  <td colSpan={4} className="p-2 border-r border-gray-600">
                    6
                  </td>
                  <td colSpan={1} className="p-2">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeSkillTab === "third" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks after 3rd Ascension
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Guts.png"
                  alt="Witch's Casket"
                  className="w-20 h-20"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Beyond the Furthest End A
                </p>
                <p className="text-sm">
                  Grants self Guts status for 1 time, 3 turns.
                </p>
                <p className="text-sm mt-1">
                  Increases own critical star absorption for 3 turns.
                </p>
                <p className="text-sm mt-1">
                  Increases own critical damage for 3 turns.
                </p>
                <p className="text-sm mt-1">
                  <img
                    src="/Fgo/icons/Buffregen.png"
                    alt=""
                    className="inline"
                  />{" "}
                  Grants self Regeneration buff for 3 turns.
                </p>
                <p className="text-sm">
                  (Reduces all enemies' attack(1 turn) every turn for 3 turns.)
                </p>
                <p className="text-sm mt-1">
                  Reduces their critical attack chance (1 turn) every turn for 3
                  turns.
                </p>
                <p className="text-sm mt-1">Gains critical stars.</p>
              </div>
            </div>
            <table className="w-full text-sm text-center border-t border-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Gutsstatus.png"
                      alt="Heal"
                      className="w-5 h-5"
                    />
                    Revives with
                  </td>
                  {[
                    "1000 HP",
                    "1200 HP",
                    "1400 HP",
                    "1600 HP",
                    "1800 HP",
                    "2000 HP",
                    "2200 HP",
                    "2400 HP",
                    "2600 HP",
                    "3000 HP",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Critabsup.png"
                      alt="Crit Absorption"
                      className="w-5 h-5"
                    />
                    Absorption +
                  </td>
                  {[
                    "3000 %",
                    "3200 %",
                    "3400 %",
                    "3600 %",
                    "3800 %",
                    "4000 %",
                    "4200 %",
                    "4400 %",
                    "4600 %",
                    "5000 %",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>{" "}
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Critdmgup.png"
                      alt="Crit Damage Up"
                      className="w-5 h-5"
                    />
                    Crit Damage +
                  </td>
                  {[
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "24%",
                    "25%",
                    "26%",
                    "27%",
                    "28%",
                    "30%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>{" "}
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Attackdown.png"
                      alt="Attack Down"
                      className="w-5 h-5"
                    />
                    Attack -
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>{" "}
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Critchndown.png"
                      alt="Crit Chance Down"
                      className="w-5 h-5"
                    />
                    Crit Chance -
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>{" "}
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/GainStars.png"
                      alt="Stars"
                      className="w-5 h-5"
                    />
                    Stars +
                  </td>
                  {["5", "6", "7", "8", "9", "10", "11", "12", "13", "15"].map(
                    (val, i) => (
                      <td
                        key={i}
                        className={`p-2 ${
                          i < 9 ? "border-r border-gray-600" : ""
                        }`}>
                        {val}
                      </td>
                    )
                  )}
                </tr>
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600">
                    Cooldown
                  </td>
                  <td colSpan={5} className="p-2 border-r border-gray-600">
                    9
                  </td>
                  <td colSpan={3} className="p-2 border-r border-gray-600">
                    8
                  </td>
                  <td colSpan={2} className="p-2">
                    7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Passive Skills */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Passive Skills</h2>
        <div className="divide-y divide-gray-700">
          {/* Skill 1 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">1</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Madness.png"
                alt="Mad Enhancement"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Mad Enhancement</span> B
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Busterupstatus.png"
                  alt="Buster Up"
                  className="w-5 h-5"
                />
                Increases own Buster performance by 8%.
              </p>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">2</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Anti_magic.png"
                alt="Magic Resistance"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Magic Resistance</span>{" "}
              A
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Resistanceup.png"
                  alt="Debuff Resistance"
                  className="w-5 h-5"
                />
                Increases own debuff resistance by 20%.
              </p>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">3</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Item_construction.png"
                alt="Item Construction"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Item Construction</span>{" "}
              EX
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Statusup.png"
                  alt="Debuff Success Rate"
                  className="w-5 h-5"
                />
                Increases own debuff success rate by 12%.
              </p>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">4</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Territory_creation.png"
                alt="Territory Creation"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">
                Territory Creation{" "}
              </span>{" "}
              B
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Artsupstatus.png"
                  alt="Arts Up"
                  className="w-5 h-5"
                />
                Increases own Arts performance by 8%.
              </p>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">5</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Criticalchanceresup.png"
                alt="Fae Eyes"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Fae Eyes </span> A
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Critchanceresup.png"
                  alt="Crit Attack Resistance"
                  className="w-5 h-5"
                />
                Increases own critical attack chance resistance by 20%.
              </p>
            </div>
          </div>

          {/* Bond 15 Skill */}
          <div className="bg-gray-700 text-center py-2">
            <p className="text-sm font-bold text-gray-300">
              Reach <span className="text-blue-400">Bond Level </span>
              15
            </p>
          </div>
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">-</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Bondskill.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <p className="font-bold text-blue-400">
                Guidance of the Visionary Flames
              </p>
              <p className="text-sm flex items-start gap-1">
                <img
                  src="/Fgo/icons/BondExp.png"
                  alt="Bond Points Up"
                  className="w-5 h-5 mt-0.5"
                />
                <span>
                  Increases party's Bond Points gained by 25%. (Including sub
                  members)
                  <br />
                  (Stackable, This passive will not trigger if the owner is a
                  Support Servant.)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Append Skills */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Append Skills</h2>
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setAppendSkillTab("first")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "first"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              First Skill
            </button>
            <button
              onClick={() => setAppendSkillTab("second")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "second"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Second Skill
            </button>
            <button
              onClick={() => setAppendSkillTab("third")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "third"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Third Skill
            </button>{" "}
            <button
              onClick={() => setAppendSkillTab("fourth")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "fourth"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Fourth Skill
            </button>{" "}
            <button
              onClick={() => setAppendSkillTab("fifth")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "fifth"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Fifth Skill
            </button>
          </div>
        </div>
        {appendSkillTab === "first" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Damageup.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Extra Attack Finesse Improvement
                </p>
                <p className="text-sm">
                  Increases own Extra Attack performance.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Extraattackup.png"
                      alt="Extra Attack"
                    />
                    Extra Attack +
                  </td>
                  {[
                    "30%",
                    "32%",
                    "34%",
                    "36%",
                    "38%",
                    "40%",
                    "42%",
                    "44%",
                    "46%",
                    "50%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "second" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Startnp.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Mana Loading
                </p>
                <p className="text-sm">Starts battle with NP gauge charged.</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 w-1/12">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/NpCharge.png" alt="" />
                    NP +
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "third" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Criticalchanceresup.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Anti-Saber Critical Attack Chance Resistance
                </p>
                <p className="text-sm">
                  Increases own critical attack chance resistance against{" "}
                  <img
                    src="/Fgo/icons/Class-Saber-Gold (1).png"
                    alt=""
                    className="inline h-8"
                  />{" "}
                  <a href="/saber" className="text-blue-400">
                    Saber
                  </a>{" "}
                  enemies.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Critchanceresup.png" alt="" />
                    <p>
                      vs.{" "}
                      <a href="/saber" className="text-blue-400">
                        Saber
                      </a>{" "}
                      Crit Chance Res +
                    </p>
                  </td>
                  {[
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "24%",
                    "25%",
                    "26%",
                    "27%",
                    "28%",
                    "30%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "fourth" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Critdmg.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Special Attack Finesse Improvement
                </p>
                <p className="text-sm">Increases own critical damage.</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Critdmgup.png" alt="" />
                    <span> Crit Damage +</span>
                  </td>
                  {[
                    "20%",
                    "21%",
                    "22%",
                    "23%",
                    "24%",
                    "25%",
                    "26%",
                    "27%",
                    "28%",
                    "30%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}{" "}
        {appendSkillTab === "fifth" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Skillreloading.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Skill Reloading
                </p>
                <p className="text-sm">
                  Reduces activated skill cooldown by 1 for N times. (Only once
                  per skill).
                </p>
                <p>(N: Based on Skill Level.)</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Skillcooldown.png" alt="" />
                    <span> Reduction Available Count +</span>
                  </td>
                  {["1", "1", "1", "1", "1", "2", "2", "2", "2", "3"].map(
                    (val, i) => (
                      <td
                        key={i}
                        className={`p-2 ${
                          i < 9 ? "border-r border-gray-600" : ""
                        }`}>
                        {val}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Noble Phantasm */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Noble Phantasm</h2>
        {/* Tabs */}
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setNpTab("rank")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                npTab === "rank"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Rank EX
            </button>
            <button
              onClick={() => setNpTab("videos")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                npTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Videos
            </button>
          </div>
        </div>

        {/* Upgrade Banner */}

        {/* NP Title */}
        <div className="bg-gray-900 text-center py-3">
          <p className="text-lg font-bold text-blue-400">Roadless Camelot</p>
          <p className="text-sm font-bold text-blue-400">
            The Now Unreachable Utopia
          </p>
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
            <p className="mt-2 font-bold text-pink-300 text-sm">
              Base Damage: x1.5
            </p>
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
                  <td className="p-2 border-r border-gray-700">6</td>
                  <td className="p-2">4%, 9%, 14%, 19%, 23%, 31%</td>
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
              <td className="p-2">
                {" "}
                <span>
                  {" "}
                  <img
                    src="/Fgo/icons/Powerup.png"
                    alt=""
                    className="inline"
                  />{" "}
                  Increases own damage against Round Table Knight or Fae enemies
                  by 50% for 1 turn. (Activates first)
                </span>
                <br />
                <span>Deals damage to all enemies.</span> <br />
                <span>
                  <img src="/Fgo/icons/Curse.png" alt="" className="inline" />{" "}
                  Inflicts Curse status with 1000 damage for 5 turns to them.
                </span>
                <br />
                <span>
                  <img
                    src="/Fgo/icons/NPOvercharge.png"
                    alt=""
                    className="inline"
                  />{" "}
                  Overcharges party's NP by 1 stage for 1 time, 3 turns.
                </span>
              </td>
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
            <tr className="bg-gray-900 font-bold">
              <td className="p-2 border-r border-gray-700 flex items-center justify-center gap-1">
                <img
                  src="/Fgo/icons/Powerup.png"
                  alt="Damage"
                  className="w-5 h-5"
                />{" "}
                Damage +
              </td>
              <td className="p-2 border-r border-gray-700">300%</td>
              <td className="p-2 border-r border-gray-700">400%</td>
              <td className="p-2 border-r border-gray-700">450%</td>
              <td className="p-2 border-r border-gray-700">475%</td>
              <td className="p-2">500%</td>
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
              <td className="bg-[#290315] p-2">
                Deals extra damage to enemies with{" "}
                <span className="text-blue-400">Man Attribute</span>.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm font-bold text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-[#53103e]">
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                Charge
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">100%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">200%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">300%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">400%</td>
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
              <td className="p-2 border-r border-gray-700">150%</td>
              <td className="p-2 border-r border-gray-700">162.5%</td>
              <td className="p-2 border-r border-gray-700">175%</td>
              <td className="p-2 border-r border-gray-700">187.5%</td>
              <td className="p-2">200%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ascension Table */}
      <div className="overflow-x-auto mt-4 flex justify-center">
        <table className="w-[1000px] text-sm text-left text-gray-300">
          <thead className="text-gray-400 ">
            <h2 className="bg-none text-white text-[25px] font-bold mt-3 mb-3 ml-8">
              Ascension
            </h2>
            <tr className="bg-gray-700">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                1st
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Berserker_piece.png"
                    alt="Berserker Piece"
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
              <td className="px-6 py-4 border-r border-gray-700 text-center">
                <div className="relative  w-24 mx-auto">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                2nd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Berserker_piece.png"
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
                    src="/Fgo/characters/berserker/morgan/Forbidden_page.png"
                    alt="Forbidden Page"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    8
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                3rd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Berserker_monument.png"
                    alt="Berserker Monument"
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
                    src="/Fgo/characters/berserker/morgan/Homunculus_baby.png"
                    alt="Homunculus Baby"
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
                    src="/Fgo/characters/berserker/morgan/Scarab_of_Wisdom.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    2
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
                <div className="relative  w-24 mx-auto">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                4th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Berserker_monument.png"
                    alt="Berserker Monument"
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
                    src="/Fgo/characters/berserker/morgan/Scarab_of_Wisdom.png"
                    alt="Scarab of Wisdom"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    4
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Genesis_Egg.png"
                    alt="Genesis Egg"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td
                colSpan={2}
                className="px-4 py-4 text-center border-r border-l border-gray-700">
                <div className="text-center text-blue-400">Queen of Winter</div>
              </td>
              <td
                colSpan={4}
                className="px-6 py-4 border-r border-gray-700 text-left align-middle">
                The King of Knights' Noble Phantasm of the wind. Mostly used to
                make the sacred sword invisible.
              </td>
            </tr>
            <tr className="bg-gray-900">
              <td className="px-4 py-4 text-center border-r border-l border-b border-gray-700">
                <img
                  src="/Fgo/characters/berserker/morgan/S309C1Icon.png"
                  alt="Invisible Air"
                  className="w-28 h-auto mx-auto"
                />
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Seashell.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Crown_of_Radiant_Silver.png"
                    alt="Medal of Great Knight"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Scales_of_Fantasies.png"
                    alt="Dragon's Reverse Scale"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Genesis_Egg.png"
                    alt="Heart of the Foreign God"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                1st
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Shiningberserker.png"
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
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                2nd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Shiningberserker.png"
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
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                3rd
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Magicberserker.png"
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
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                4th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Magicberserker.png"
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
                    src="/Fgo/characters/berserker/morgan/Homunculus_baby.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                5th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Secretberserker.png"
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
                    src="/Fgo/characters/berserker/morgan/Homunculus_baby.png"
                    alt="Hero's Proof"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    10
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                6th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Secretberserker.png"
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
                    src="/Fgo/characters/berserker/morgan/Forbidden_page.png"
                    alt="Forbidden Page"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    5
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                7th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Forbidden_page.png"
                    alt="Forbidden Page"
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
                    src="/Fgo/characters/berserker/morgan/Fruit_Of_Longevity.png"
                    alt="Fruit of Longevity"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    4
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900 border-b border-gray-700">
              <td className="px-4 py-4 text-center border-r border-l border-gray-700">
                8th
              </td>
              <td className="px-6 py-4 border-r border-gray-700">
                <div className="relative w-24 mx-auto">
                  <img
                    src="/Fgo/characters/berserker/morgan/Fruit_Of_Longevity.png"
                    alt="Fruit of Longevity"
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
                    src="/Fgo/characters/berserker/morgan/Scales_of_Fantasies.png"
                    alt="Scales of Fantasies"
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-0 right-0 bg-black bg-opacity-75 px-1 text-white">
                    24
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700"></td>
              <td className="px-6 py-4 border-r border-gray-700 text-center">
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
            <tr className="bg-gray-900">
              <td className="px-4 py-4 text-center border-r border-l border-b border-gray-700">
                9th
              </td>
              <td className="px-6 py-4 border-r border-b border-gray-700">
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
              <td className="px-6 py-4 border-r border-b border-gray-700"></td>
              <td className="px-6 py-4 border-r border-b border-gray-700"></td>
              <td className="px-6 py-4 border-r border-b border-gray-700"></td>
              <td className="px-6 py-4 border-b border-r border-gray-700 text-center">
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
      <h2 className="text-xl font-bold mt-5 ml-8">Stats</h2>
      <div className="bg-gray-900 border border-gray-700 rounded-lg mt-4 mx-auto max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            { name: "Strength", rank: "C", value: 3 },
            { name: "Endurance", rank: "E", value: 1 },
            { name: "Agility", rank: "B", value: 4 },
            { name: "Mana", rank: "A+", value: 5 },
            { name: "Luck", rank: "B", value: 4 },
            { name: "NP", rank: "EX", value: 5 },
          ].map((stat, index) => (
            <div
              key={stat.name}
              className={`p-4 text-center ${
                index < 4 ? "border-b border-gray-700" : ""
              } ${index % 2 === 0 ? "md:border-r border-gray-700" : ""}`}>
              <p className="font-bold text-white mb-3">
                {stat.name}:{" "}
                <span
                  className={`border-b-2 border-dotted ${
                    stat.rank === "EX"
                      ? "text-yellow-400 border-yellow-400"
                      : "border-gray-500"
                  }`}>
                  {stat.rank}
                </span>
              </p>
              <div className="flex h-5 rounded-full overflow-hidden bg-gray-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1/5 ${
                      i < stat.value
                        ? stat.rank === "EX"
                          ? "bg-yellow-400"
                          : "bg-orange-500"
                        : "bg-gray-600"
                    } ${i < 4 ? "border-r-2 border-gray-900" : ""}`}></div>
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
                  className="px-4 py-3 text-center border border-gray-600 text-blue-400">
                  Bond Level
                </th>
                {[...Array(10)].map((_, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 text-center border border-gray-600">
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
              <tr className="bg-gray-900 text-white">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Bond Required
                </td>
                {[
                  "4,500",
                  "20,000",
                  "2,500",
                  "2,500",
                  "10,500",
                  "110,000",
                  "450,000",
                  "340,000",
                  "330,000",
                  "410,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600">
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-900 text-white">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Total Bond
                </td>
                {[
                  "4,500",
                  "24,500",
                  "27,000",
                  "29,500",
                  "40,000",
                  "150,000",
                  "600,000",
                  "940,000",
                  "1,270,000",
                  "1,680,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600">
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-900 text-white align-top">
                <td className="px-4 py-4 text-center font-bold border border-gray-600 align-middle">
                  Rewards
                </td>
                {[...Array(10)].map((_, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 border border-gray-600 align-middle">
                    <div className="flex flex-col items-center justify-center gap-2 h-full">
                      <div className="relative w-16">
                        <img
                          src="/Fgo/characters/berserker/morgan/ServantCoin309.png"
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
              <tr className="bg-gray-900 text-white">
                <td
                  className="px-4 py-4 text-center font-bold border border-gray-600 align-middle"
                  colSpan={2}>
                  Bond 10 Craft Essence
                </td>
                <td className="px-4 py-4 border border-gray-600" colSpan={3}>
                  <img
                    src="/Fgo/characters/berserker/morgan/CEIcon1416.png"
                    alt="Crown of the Star"
                    className="w-24 mx-auto"
                  />
                </td>
                <td
                  className="px-4 py-4 border border-gray-600 text-center"
                  colSpan={6}>
                  <p className="font-bold text-blue-400">
                    At the Furthest Ends
                  </p>
                  <p className="text-sm text-white">
                    When equipped on <strong>Morgan</strong>:
                  </p>
                  <p className="text-sm flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Powerup.png"
                      alt="Attack Up"
                      className="w-auto h-auto"
                    />
                    <span className="text-white">
                      Increases party's damage against{" "}
                      <span className="text-blue-400">Round Table Knight </span>{" "}
                      or <span className="text-blue-400"> Fae </span>
                      enemies by 15%,
                    </span>
                  </p>{" "}
                  <p className="text-sm flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Powerup.png"
                      alt="Attack Up"
                      className="w-auto h-auto mb-6 "
                    />
                    <span className="text-white">
                      Increases party's damage against enemies with{" "}
                      <span className="text-blue-400">Man Attribute</span> by
                      15% while self is on the field.
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
                  className="px-4 py-3 text-center border text-blue-400 border-gray-600">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="/Fgo/characters/berserker/morgan/BoundLevel15.png"
                      alt="Chaldean Visionary Flames"
                    />
                    <span className="whitespace-nowrap">
                      Chaldean Visionary Flames
                    </span>
                  </div>
                </th>
                {[11, 12, 13, 14, 15].map((level) => (
                  <th
                    key={level}
                    scope="col"
                    className="px-4 py-3 text-center border border-gray-600">
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
              <tr className="bg-gray-900 text-white">
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
                    className="px-4 py-4 text-center border border-gray-600">
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-900 text-white">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Total Bond
                </td>
                {[
                  "2,770,000",
                  "4,000,000",
                  "5,360,000",
                  "6,860,000",
                  "8,500,000",
                ].map((val, i) => (
                  <td
                    key={i}
                    className="px-4 py-4 text-center border border-gray-600">
                    {val}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-900 align-top">
                <td className="px-4 py-4 text-center font-bold border border-gray-600">
                  Rewards
                </td>
                {[...Array(5)].map((_, i) => (
                  <td key={i} className="px-4 py-4 border border-gray-600">
                    <div className="flex flex-col items-center justify-center gap-2 h-full">
                      <div className="flex gap-2 justify-center">
                        <div className="relative w-16">
                          <img
                            src="/Fgo/characters/berserker/morgan/ServantCoin309.png"
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
      <h2 className="text-xl mt-5 font-bold ">Biography</h2>
    </div>
  );
};
