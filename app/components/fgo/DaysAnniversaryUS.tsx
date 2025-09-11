import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export const DaysAnniversaryUS = () => {
  const [activeTab, setActiveTab] = useState("Main Info");
  const [showCategories, setShowCategories] = useState(false);

  const tabs = [
    "Main Info",
    "SR Exchange",
    "Social Media Campain",
    "Limited Time Master Missions",
    "Summoning Campain",
  ];

  const rateUpServants = [
    {
      name: "Artoria Caster",
      rarity: 5,
      image: "Fgo/DaysAnniversaryUS/S284A1Icon.png",
      href: "artoria_caster",
    },
    {
      name: "Morgan",
      rarity: 5,
      image: "Fgo/DaysAnniversaryUS/S309A3Icon.png",
      href: "morgan",
    },
  ];

  const rateUpCraftEssences = [
    {
      name: "Apex",
      rarity: 5,
      atk: "500/2000",
      hp: "0/0",
      effects: [
        "Buster +8%",
        "40% Staring NP Charge",
        "NP Overcharge Level +2 (1 times)",
      ],
      image: "Fgo/DaysAnniversaryUS/CE1718.png",
    },
    {
      name: "Playing the Spring Strings",
      rarity: 4,
      atk: "250/1000",
      hp: "400/1600",
      effects: [
        "Arts +10%",
        "NP Gain +10%",
        "NP Overcharge Level +2 (1 times)",
      ],
      image: "Fgo/DaysAnniversaryUS/CE1333.png",
    },
  ];

  const requiresCraftEssence = {
    name: "Beast Game 2020",
    rarity: 4,
    atk: "200/750",
    hp: "320/1200",
    effect: ["Gain 10 Critical Stars (1 time)", "Arts +3%", "NP Gain +5%"],
    image: "Fgo/DaysAnniversaryUS/CE1463.png",
  };

  const craftEssences = [
    { name: "Apex", rarity: 5, image: "Fgo/DaysAnniversaryUS/CEIcon1718.png" },
    {
      name: "Playing the Spring Strings",
      rarity: 5,
      image: "Fgo/DaysAnniversaryUS/CEIcon1333.png",
    },
    {
      name: "Gloucester in 2020",
      rarity: 4,
      image: "Fgo/DaysAnniversaryUS/CEIcon1463.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-blue-400">
        <div className="flex items-center gap-2">
          <div className="w- h- ">
            <img src="Fgo/Site-logo (6).png" alt="" />
          </div>
          <span className="text-sm">Current Event: USA Event, US Server</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-blue-600 rounded text-sm">
            VIEW SCHEDULE
          </button>
          <button className="p-1">⋮</button>
        </div>
      </div>

      {/* Main Title */}
      <div className=" py-4">
        <h1 className="text-4xl ml-10">3000 Days Anniversary (US)</h1>

        {/* Anniversary Banner */}
        <div className="max-w-4xl mx-auto ">
          <div className="relative  p-8 overflow-hidden">
            <img
              src="Fgo/DaysAnniversaryUS/3000DaysAnniversaryUS.png"
              alt=""
              className="w-full h-full"
            />
            <div className="text-sm text-left text-white mt-4">
              <strong>Duration</strong>: September 10th 2025 21:00 – September
              30th 2025 20:59 PDT
            </div>
          </div>
        </div>
      </div>

      {/* Golden Arrow */}
      <div className="flex justify-center">
        <div className="text-yellow-400 text-2xl">✦</div>
      </div>

      {/* Event Info Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">EVENT INFO</h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center ">
          <div className="bg-slate-800 rounded-lg p-1 flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded whitespace-nowrap text-sm ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summoning Banner */}
      <div className="max-w-4xl mx-auto  px-4">
        <div className="relative flex justify-center items-center overflow-hidden">
          <img
            src="Fgo/DaysAnniversaryUS/3000DaysSummonUS.png"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="flex justify-center text-sm text-white mt-2">
          <strong>Duration</strong>: September 10th 2025 21:00 – September 30th
          2025 20:59 PDT
        </div>
      </div>

      {/* Rate-Up Servants */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <h3 className="text-lg font-bold mb-4">Rate-Up Servants</h3>
        <div className="grid grid-cols-2 gap-4">
          {rateUpServants.map((servant, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-4 flex items-center gap-3"
            >
              <img
                src={`/${servant.image}`}
                alt={servant.name}
                className="w-29 h-29 rounded"
              />
              <div>
                <a href={`/${servant.href}`}>
                  <div className="font-semibold text-xl mb-1">
                    {servant.name}
                  </div>
                </a>
                <div className="flex text-yellow-400">
                  {[...Array(servant.rarity)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Table */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 gap-px bg-slate-600">
            <div className="bg-slate-700 p-4 text-center font-semibold">
              Duration
            </div>
            <div className="bg-slate-700 p-4 text-center font-semibold">
              Rate-Up Banners
            </div>

            <div className="bg-slate-800 p-3 text-ml flex justify-center items-center">
              2025-09-10 21:00 - 09-30 20:59 PDT
            </div>
            <div className="bg-slate-800 p-3 flex justify-center items-center gap-2">
              <img
                src={`/${rateUpServants[1].image}`}
                alt={rateUpServants[1].name}
                className="w-24 h-26 rounded"
              />
              <img
                src={`/${craftEssences[0].image}`}
                alt={craftEssences[0].name}
                className="w-24 h-26 rounded"
              />
            </div>

            <div className="bg-slate-800 p-3 text-ml flex justify-center items-center">
              2025-09-12 21:00 - 09-30 20:59 PDT
            </div>
            <div className="bg-slate-800 p-3 flex justify-center gap-1">
              <div>
                <img
                  src={`/${rateUpServants[0].image}`}
                  alt={rateUpServants[0].name}
                  className="w-24 h-26 rounded"
                />
              </div>
              <div>
                <img
                  src={`/${craftEssences[1].image}`}
                  alt={craftEssences[1].name}
                  className="w-24 h-26 rounded"
                />
              </div>
              <div>
                <img
                  src={`/${craftEssences[2].image}`}
                  alt={craftEssences[2].name}
                  className="w-24 h-26 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rate-Up Craft Essences */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <h3 className="text-lg font-bold mb-4">Rate-Up Craft Essences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rateUpCraftEssences.map((ce, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <img
                  src={`/${ce.image}`}
                  alt={ce.name}
                  className="w-56 h-62 rounded"
                />
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-lg">{ce.name}</div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(ce.rarity)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-white mb-2">
                    ATK: {ce.atk} | HP: {ce.hp}
                  </div>
                  <ul className="mt-5 text-ml text-white space-y-1">
                    {ce.effects.map((effect, i) => (
                      <li key={i}>• {effect}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requires Craft Essence */}
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <h3 className="text-lg font-bold mb-4">
          Rate-Up Craft Essences (Requires Latest • Clear)
        </h3>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-start gap-4">
            <div className="w-56">
              <img
                src={`/${requiresCraftEssence.image}`}
                alt={requiresCraftEssence.name}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-2 text-lg">
                {requiresCraftEssence.name}
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(requiresCraftEssence.rarity)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-sm text-white mb-10">
                ATK: {requiresCraftEssence.atk} | HP: {requiresCraftEssence.hp}
              </div>
              <ul className="mt-5 text-ml text-white space-y-1">
                {requiresCraftEssence.effect.map((effect, i) => (
                  <li key={i}>• {effect}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center gap-2 text-lg font-bold mb-4 hover:text-blue-400 transition-colors"
        >
          Categories
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              showCategories ? "rotate-180" : ""
            }`}
          />
        </button>

        {showCategories && (
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Event
              </button>
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Summoning
              </button>
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Campaign
              </button>
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Limited Time
              </button>
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Anniversary
              </button>
              <button className="text-left p-2 hover:bg-slate-700 rounded">
                Pickup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
