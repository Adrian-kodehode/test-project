import React, { useState } from "react";

export const JeanneAlterCard = () => {
  const [activeTab, setActiveTab] = useState("Active Skills");

  const tabs = [
    "Active Skills",
    "Passive Skills",
    "Append Skills",
    "Noble Phantasm",
    "Ascension",
    "Skill Upgrades",
    "Stats",
    "Bond Level",
    "Biography",
    "Trivia",
  ];

  const stageButtons = [
    { label: "Stage 1", active: true, src: "Fgo/characters/S106_Stage1.png" },
    { label: "Stage 2", active: false, src: "Fgo/characters/S106_Stage2.png" },
    { label: "Stage 3", active: false, src: "Fgo/characters/S106_Stage3.png" },
    { label: "Stage 4", active: false, src: "Fgo/characters/S106_Stage4.png" },
    {
      label: "Costume",
      active: false,
      src: "Fgo/characters/S106_Costume1.png",
    },
    {
      label: "Stage 1",
      active: false,
      src: "Fgo/characters/S106_Sprite_Ver3_Stage1.png",
    },
    {
      label: "Stage 2",
      active: false,
      src: "Fgo/characters/S106_Sprite_Ver3_Stage2.png",
    },
    {
      label: "Stage 3",
      active: false,
      src: "Fgo/characters/S106_Sprite_Ver3_Stage3.png",
    },
    {
      label: "Costume 1 Sprite",
      active: false,
      src: "Fgo/characters/S106_Sprite_Ver3_Costume1.png",
    },
  ];

  const cardTypes = [
    { tyoe: "Quick", color: "#2bfb02" },
    { type: "Arts", color: "#0a60d1" },
    { type: "Buster", color: "#e34a45" },
  ];

  const hitCounts = [{ icon: "Fgo/characters/icons/QAABB.png", count: 1 }];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-800 text-white p-6 rounded-lg max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="Fgo/characters/icons/Class-Avenger-Gold.png" alt="" />
          </div>
          <h1 className="text-3xl font-bold">Jeanne d'Arc (Alter)</h1>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <span className="text-blue-400">Japanese Name:</span>{" "}
                ジャンヌ・ダルク（オルタ）
              </p>
              <p>
                <span className="text-blue-400">AKA:</span> Dragon Witch
                (竜の魔女, Ryū no Majo ), Jeanne Alter, Jalter, Witch of
                Vengeance, ジャンヌ
              </p>
              <p>
                <span className="text-blue-400">ID</span> 106
              </p>
            </div>
          </div>
          <p>
            <span className="text-blue-400">Cost:</span> 16
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <span className="text-blue-400">ATK:</span> 2,046
          </p>
          <p>
            <span className="text-yellow-400"> Lv.100 Grail ATK:</span> 14,498
          </p>
          <p>
            <span className="text-yellow-400"> Lv.120 Grail ATK:</span> 17,017
          </p>
        </div>
        <div>
          <p>
            <span className="text-blue-400">HP:</span> 1,734/11,761
          </p>
          <p>
            <span className="text-yellow-400"> Lv.100 Grail HP:</span> 12,885
          </p>
          <p>
            <span className="text-yellow-400"> Lv.120 Grail HP:</span> 15,143
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p>
            <span className="text-blue-400">Voice Actor:</span>{" "}
            <span className="text-blue-300">Sakamoto Maaya</span>
          </p>
          <p>
            <span className="text-blue-400">Attribute:</span> Man
          </p>
          <p>
            <span>
              <img
                src="Fgo/characters/icons/Critabsup.png"
                alt="Star Absorption"
                className="inline-block w-4 h-4"
              />{" "}
              Star Absorption:
            </span>{" "}
            29
          </p>
          <p>
            <span>
              <img
                src="Fgo/characters/icons/Npchargeup.png"
                alt="NP Charge ATK"
                className="inline-block w-4 h-4"
              />{" "}
              NP Charge ATK:
            </span>{" "}
            0.83%
          </p>
          <p>
            <span>
              <img
                src="Fgo/characters/icons/Instapowerup.png"
                alt="Death Rate"
                className="inline-block w-4 h-4"
              />{" "}
              Death Rate:
            </span>{" "}
            5.7%
          </p>
          <p>
            <span className="text-blue-400">Gender:</span> Female
          </p>
        </div>
        <div>
          <p>
            <span className="text-blue-400">Illustrator:</span>{" "}
            <span className="text-blue-300">Takeuchi Takashi</span>
          </p>
          <p>
            <span className="text-blue-400">Growth Curve:</span> S
          </p>
          <p>
            <span>
              <img
                src="Fgo/characters/icons/Stargainup.png"
                alt="Star Generation"
                className="inline-block w-4 h-4"
              />{" "}
              Star Generation:
            </span>{" "}
            6%
          </p>
          <p>
            <span>
              <img
                src="Fgo/characters/icons/NPGainUpDmg.png"
                alt="NP Charge DEF"
                className="inline-block w-4 h-4"
              />{" "}
              NP Charge DEF:
            </span>{" "}
            5%
          </p>
          <p>
            <span className="text-blue-400">Alignments:</span>{" "}
            <span className="text-blue-300">Chaotic • Evil</span>
          </p>
        </div>
      </div>

      <div>
        <p>
          <span className="text-blue-400">Basic Traits:</span>{" "}
          <span className="text-blue-300">
            Artoria Face, Costume-Owning, Hominidae
          </span>
        </p>
        <p className="text-blue-300">
          Servant, Humanoid, Servant, Weak to Enuma Elish
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-blue-400">Hits:</span>
        {hitCounts.map((hit, index) => (
          <div key={index} className="text-blue-300">
            {hit.icon && (
              <img
                src={hit.icon}
                alt={`Hit ${index + 1}`}
                className="inline-block w-full h-full"
              />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {stageButtons.map((stage, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(stage.src)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                selectedImage === stage.src
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>
        <div className="bg-[url('/Fgo/xsYKdkG.jpeg')] bg-center rounded-lg p-4 w-full h-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-48 h-64 bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
              <div 
                className="w-full h-full cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setShowModal(true)}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Character Art"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : stageButtons[0].src ? (
                  <img
                    src={stageButtons[0].src}
                    alt="Character Art"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-slate-400">Character Art</span>
                )}
              </div>

              {/* Modal for expanded image */}
              {showModal && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                  style={{ animation: 'fadeIn 0.3s ease-out' }}
                  onClick={() => setShowModal(false)}
                >
                  <div 
                    className="relative max-w-4xl max-h-screen p-4"
                    style={{ animation: 'scaleIn 0.3s ease-out' }}
                  >
                    <img
                      src={selectedImage || stageButtons[0].src}
                      alt="Character Art Expanded"
                      className="w-full h-full object-contain rounded-lg"
                    />
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-2 right-2 bg-slate-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-700"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              <style>{`
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes scaleIn {
                  from { transform: scale(0.8); opacity: 0; }
                  to { transform: scale(1); opacity: 1; }
                }
              `}</style>
            </div>
            <p className="text-sm text-slate-100 text-shadow-xl">
              Jeanne d'Arc (Alter)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="mt-6 border-t border-slate-700 pt-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 bg-slate-700 rounded-lg">
          <h3 className="text-lg font-bold mb-2">{activeTab}</h3>
          <p className="text-slate-300">
            {activeTab === "Active Skills" &&
              "Display active skills and their effects here."}
            {activeTab === "Passive Skills" &&
              "Display passive skills and their effects here."}
            {activeTab === "Noble Phantasm" &&
              "Display Noble Phantasm details here."}
            {activeTab === "Biography" &&
              "Display character biography and lore here."}
            {![
              "Active Skills",
              "Passive Skills",
              "Noble Phantasm",
              "Biography",
            ].includes(activeTab) &&
              `Content for ${activeTab} would be displayed here.`}
          </p>
        </div>
      </div>
    </div>
  );
};
