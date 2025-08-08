import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const FateGrandOrder = () => {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  const FGONewsDashboard = () => {
    const [activeTab, setActiveTab] = useState("japanese");

    const japaneseEvents = [
      {
        title: "Grand Duel Extra Pre-Release Campaign",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/8/81/Grand_Duel_Extra_Pre-Release_Campaign_Banner.png",
        type: "current",
      },
      {
        title: "Servant Strengthening Quests Part XIX",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/8/81/STQ19Banner.png",
        type: "current",
      },
      {
        title: "Fate/Grand Order ～10th Anniversary～ Summoning Campaign I",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/1/19/FGOFes2025Summon1.png",
        type: "current",
      },
      {
        title: "Fate/Grand Order ～10th Anniversary～",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/7/76/10th_anniversary.png",
        type: "current",
      },
      {
        title: "OVER THE SAME SKY -JULY- Summoning Campaign",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/7/7b/Over_the_same_sky_july_pu.png",
        type: "current",
      },
      {
        title: "Fate/Grand Order 10th Anniversary: OVER THE SAME SKY",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/c/c7/OVER_THE_SAME_SKY_Banner.png",
        type: "current",
      },
    ];

    const upcomingJapaneseEvents = [
      {
        title: "Grand Duel: Extra",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/8/81/Grand_Duel_Extra_Pre-Release_Campaign_Banner.png",
        type: "upcoming",
      },
    ];

    const englishEvents = [
      {
        title: "FGO Summer 2024 Revival Summoning Campaign (US)",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/8/88/Summer2024RevivalSummonUS.png",
        type: "current",
      },
      {
        title: "FGO Summer 2025 Event (US)",
        banner:
          "https://static.wikia.nocookie.net/fategrandorder/images/c/c1/FGOSummer2025EventUS.png",
        type: "current",
      },
    ];

    const japaneseServants = [
      {
        name: "U-Olga Marie",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/4/45/S444A2Icon.webp",
      },
    ];

    const englishServants = [
      {
        name: "Scáthach-Skaði (Ruler)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/4/4f/S357A1Icon.webp",
      },
      {
        name: "Wu Zetian (Caster)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/4/41/S358A1Icon.webp",
      },
      {
        name: "Ibuki Dōji (Berserker)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/4/4d/S355A1Icon.webp",
      },
      {
        name: "Utsumi Erice (Avenger)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/a/a4/S356A1Icon.webp",
      },
      {
        name: "Lady Avalon",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/5/59/S353A1Icon.webp",
      },
      {
        name: "Gareth (Saber)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/2/2b/S354A1Icon.webp",
      },
      {
        name: "Mélusine (Ruler)",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/2/27/S390A1Icon.webp",
      },
      {
        name: "UDK-Barghest",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/5/59/S391A1Icon.webp",
      },
      {
        name: "Oberon",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/1/19/S316A1Icon.webp",
      },
      {
        name: "Gawain",
        icon: "https://static.wikia.nocookie.net/fategrandorder/images/7/7a/S123A1Icon.webp",
      },
    ];

    const EventCard = ({ event }) => (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4">
        <div className="aspect-[8/3] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="font-bold text-gray-800 text-sm leading-tight">
              {event.title}
            </h3>
          </div>
        </div>
      </div>
    );

    const ServantIcon = ({ servant }) => (
      <div className="group relative">
        <div className="w-full h-full  rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <div className="w-full h-full  flex items-center justify-center overflow-hidden">
            <img
              src={servant.icon}
              alt={servant.name}
              className="w-full h- object-cover rounded"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div
              className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
          {servant.name}
        </div>
      </div>
    );

    const navItems = [
      // Row 1
      [
        {
          title: "SERVANTS",
          src: "/Fgo/icons/Servant_Button_Hover.png",
          srcHover: "/Fgo/icons/Servant_Button.png",
          href: "/servants",
          external: true,
        },
        {
          title: "CLASS",
          src: "/Fgo/icons/Class_Button_2.png",
          srcHover: "/Fgo/icons/Class_Button_Hover.png",
          href: "/fgo/Servants",

          external: false,
        },
        {
          title: "ACTIVE SKILLS",
          src: "/Fgo/icons/ActiveSkill_ButtoN_3.png",
          srcHover: "/Fgo/icons/ActiveSkill_ButtoN_4.png",
          href: "/fgo/Active_Skills",

          external: false,
        },
        {
          title: "PASSIVE SKILLS",
          src: "/Fgo/icons/Passive_Skill_Button_2.png",
          srcHover: "/Fgo/icons/Passive_Skill_Button_3.png",
          href: "/fgo/Passive_Skills",

          external: false,
        },
        {
          title: "COMMAND CODE",
          src: "/Fgo/icons/CC_Button_1.png",
          srcHover: "/Fgo/icons/CC_Button_2.png",
          href: "/fgo/Command_Code",
          external: false,
        },
        {
          title: "CRAFT ESSENCES",
          src: "/Fgo/icons/CE_Button_2.png",
          srcHover: "/Fgo/icons/CE_EXP_Button_1.png",
          href: "/fgo/Craft_Essences",
          external: false,
        },
      ],
      // Row 2
      [
        {
          title: "QUESTS",
          src: "/Fgo/icons/Quest_Button_1.png",
          srcHover: "/Fgo/icons/Quest_Button_2.png",
          href: "/fgo/Quests",
          external: false,
        },
        {
          title: "STRENGTHEN",
          src: "/Fgo/icons/Strengthen_Button.png",
          srcHover: "/Fgo/icons/Strengthen_Button_2.png",
          href: "/fgo/Servant_Strengthening_Quests",
          external: false,
        },
        {
          title: "ENEMIES",
          src: "/Fgo/icons/Enemies_Button_v3.png",
          srcHover: "/Fgo/icons/Enemies_Button_v2.png",
          href: "/fgo/Enemies",
          external: false,
        },
        {
          title: "RESOURCES",
          src: "/Fgo/icons/Resources_Button_v5.png",
          srcHover: "/Fgo/icons/Resources_Button_v3_hover.png",
          href: "/fgo/Resources",
          external: false,
        },
        {
          title: "DROP RATES",
          src: "/Fgo/icons/Drops_Button_1.png",
          srcHover: "/Fgo/icons/Drops_Button_2.png",
          href: "https://docs.google.com/spreadsheets/d/1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA/view#gid=0",
          external: true,
        },
        {
          title: "DA VINCI SHOP",
          src: "/Fgo/icons/DaVinciShop_Button_3.png",
          srcHover: "/Fgo/icons/DaVinciShop_Button_4.png",
          href: "/fgo/Da_Vinci's_Workshop",
          external: false,
        },
      ],
      // Row 3
      [
        {
          title: "MASTER",
          src: "/Fgo/icons/Master_Button.png",
          srcHover: "/Fgo/icons/Master_Button_Hover.png",
          href: "/fgo/Master",
          external: false,
        },
        {
          title: "MYSTIC CODE",
          src: "/Fgo/icons/Mystic_Code_Button_1.png",
          srcHover: "/Fgo/icons/Mystic_Code_Button_2.png",
          href: "/fgo/Mystic_Codes",
          external: false,
        },
        {
          title: "MASTER MISSION",
          src: "/Fgo/icons/MasterMission_Button_1.png",
          srcHover: "/Fgo/icons/MasterMission_Button_2.png",
          href: "/fgo/Master_Missions",
          external: false,
        },
        {
          title: "PRESENT",
          src: "/Fgo/icons/PresentBox_Button.png",
          srcHover: "/Fgo/icons/PresentBox_Button_2.png",
          href: "/fgo/Gift_Box",
          external: false,
        },
        {
          title: "OPTIONS",
          src: "/Fgo/icons/Options_Button_1.png",
          srcHover: "/Fgo/icons/Options_Button_2.png",
          href: "/fgo/Options",
          external: false,
        },
        {
          title: "ACC. RECOVERY",
          src: "/Fgo/icons/Account_Recovery_Button_1.png",
          srcHover: "/Fgo/icons/Account_Recovery_Button_2.png",
          href: "/fgo/Account_Recovery",
          external: false,
        },
      ],
      // Row 4
      [
        {
          title: "LEVELING",
          src: "/Fgo/icons/Leveling_Button_4.png",
          srcHover: "/Fgo/icons/Leveling_Button.png",
          href: "/fgo/Leveling",
          external: false,
        },
        {
          title: "SUMMONING",
          src: "/Fgo/icons/Summoning_Button_2.png",
          srcHover: "/Fgo/icons/Summoning_Button_4.png",
          href: "/fgo/Summoning",
          external: false,
        },
        {
          title: "FORMATION",
          src: "/Fgo/icons/Formation_Button_1.png",
          srcHover: "/Fgo/icons/Formation_Button_2.png",
          href: "/fgo/Formation",
          external: false,
        },
        {
          title: "PLAYER'S GUIDE",
          src: "/Fgo/icons/Player_Guide_Button_1.png",
          srcHover: "/Fgo/icons/Player_Guide_Button_2.png",
          href: "/fgo/Basic_Gameplay_Guide",
          external: false,
        },
        {
          title: "BOND",
          src: "/Fgo/icons/Bond_Button_1.png",
          srcHover: "/Fgo/icons/Bond_Button_2.png",
          href: "/fgo/Bond_Points",
          external: false,
        },
        {
          title: "COSTUME DRESS",
          src: "/Fgo/icons/Costume_Button_1.png",
          srcHover: "/Fgo/icons/Costume_Button_3.png",
          href: "/fgo/Costume_Dress",
          external: false,
        },
      ],
      // Row 5
      [
        {
          title: "MY ROOM",
          src: "/Fgo/icons/My_Room_Button_2.png",
          srcHover: "/Fgo/icons/My_Room_Button_3.png",
          href: "/fgo/My_Room",
          external: false,
        },
        {
          title: "ERROR MSGS",
          src: "/Fgo/icons/Error_Button_1.png",
          srcHover: "/Fgo/icons/Error_Button_2.png",
          href: "/fgo/Error_Messages",
          external: false,
        },
        {
          title: "ANIME",
          src: "/Fgo/icons/Anime_Button_1.png",
          srcHover: "/Fgo/icons/Anime_Button_2.png",
          href: "/fgo/F/GO_Animation_Works",
          external: false,
        },
        {
          title: "MANGA",
          src: "/Fgo/icons/Manga_Button_1.png",
          srcHover: "/Fgo/icons/Manga_Button_2.png",
          href: "/fgo/Category:Manga",
          external: false,
        },
        {
          title: "MEDIA",
          src: "/Fgo/icons/Live_Button_2.png",
          srcHover: "/Fgo/icons/Live_Button_3.png",
          href: "/fgo/Media",
          external: false,
        },
        {
          title: "OTHER PROJECTS",
          src: "/Fgo/icons/OtherProject_Button_1.png",
          srcHover: "/Fgo/icons/OtherProject_Button_2.png",
          href: "/fgo/Other_FGO_Projects",
          external: false,
        },
      ],
    ];

    const bottomNavItems = [
      { title: "UPDATE NOTES", href: "/fgo/Update_Notes", colspan: 2 },
      {
        title: "HOUSE RULES",
        href: "/fgo/Help:Fate/Grand_Order_fgoa_Guidelines",
        colspan: 2,
      },
      { title: "COMMUNITY", href: "/fgo/Special:Community", colspan: 2 },
    ];

    const handleTileClick = (href: string, external: boolean = false): void => {
      if (external) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        // In a real Remix app, you'd use the Link component or navigate function
        console.log(`Navigate to: ${href}`);
      }
    };

    return (
      <div className="bg-[url('/Fgo/xsYKdkG.jpeg')] bg-center bg-cover min-h-screen">
        <div className="w-[900px] max-w-6xl mx-auto p-4 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="grid grid-cols-6 gap-3">
            {navItems.map((row, rowIndex) =>
              row.map((item, colIndex) => {
                const tileKey = `${rowIndex}-${colIndex}`;
                const isHovered = hoveredTile === tileKey;

                return (
                  <div
                    key={tileKey}
                    className={`
                  relative group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-10
                  ${isHovered}
                  rounded-lg shadow-lg hover:shadow-2xl border border-slate-600 hover:border-slate-400
                  aspect-square flex flex-col items-center justify-center p-2
                `}
                    onMouseEnter={() => setHoveredTile(tileKey)}
                    onMouseLeave={() => setHoveredTile(null)}
                    onClick={() => handleTileClick(item.href, item.external)}
                  >
                    {/* Icon or image */}
                    {item.src ? (
                      <img
                        src={
                          isHovered && item.srcHover ? item.srcHover : item.src
                        }
                        alt={`${item.title} icon`}
                        className="w-full h-full mb-2 object-contain"
                      />
                    ) : (
                      <div
                        className={`
                    w-12 h-12 mb-2 rounded-full flex items-center justify-center text-white font-bold text-lg
                    ${isHovered ? "bg-white/20" : "bg-white/10"}
                    transition-all duration-300
                  `}
                      >
                        {item.title.charAt(0)}
                      </div>
                    )}

                    {/* Title */}
                    <div className="text-white text-center text-xs font-medium leading-tight">
                      {item.title}
                    </div>

                    {/* Hover effect overlay */}
                    <div
                      className={`
                  absolute inset-0 rounded-lg transition-opacity duration-300
                  ${isHovered ? "opacity-20" : "opacity-0"}
                  bg-gradient-to-t from-white/10 to-transparent
                `}
                    />

                    {/* External link indicator */}
                    {item.external && (
                      <div className="absolute top-1 right-1">
                        <svg
                          className="w-3 h-3 text-white/60"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom navigation bar */}
          <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Fate/Grand Order News
                  </h1>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className=" rounded-lg shadow-lg mb-6">
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab("japanese")}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                      activeTab === "japanese"
                        ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    Japanese Server
                  </button>
                  <button
                    onClick={() => setActiveTab("english")}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                      activeTab === "english"
                        ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    English Server
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "japanese" && (
                    <div>
                      {/* Rate-up Servants */}
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-white mb-4 text-center">
                          Current Rate-Up Servants
                        </h2>
                        <div className="flex justify-center">
                          <div className="grid grid-cols-1 gap-4">
                            {japaneseServants.map((servant, index) => (
                              <ServantIcon key={index} servant={servant} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Events Grid */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Current Events */}
                        <div>
                          <div className=" flex items-center justify-center  py-3  mb-4">
                            <img
                              src="Fgo/icons/CurrentEventsDivider.png"
                              alt=""
                            />
                          </div>
                          <div className="space-y-4">
                            {japaneseEvents.map((event, index) => (
                              <EventCard key={index} event={event} />
                            ))}
                          </div>
                        </div>

                        {/* Upcoming Events */}
                        <div>
                          <div className="flex items-center justify-center  py-3  mb-4">
                           <img src="Fgo/icons/Upcoming-Events.png" alt="" />
                          </div>
                          <div className="space-y-4">
                            {upcomingJapaneseEvents.map((event, index) => (
                              <EventCard key={index} event={event} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "english" && (
                    <div>
                      {/* Rate-up Servants */}
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                          Current Rate-Up Servants
                        </h2>
                        <div className="flex justify-center">
                          <div className="grid grid-cols-5 gap-3 max-w-md">
                            {englishServants
                              .slice(0, 10)
                              .map((servant, index) => (
                                <ServantIcon key={index} servant={servant} />
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Events Grid */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Current Events */}
                        <div>
                          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-3 rounded-t-lg mb-4">
                            <h3 className="font-bold text-lg">
                              Current Events
                            </h3>
                          </div>
                          <div className="space-y-4">
                            {englishEvents.map((event, index) => (
                              <EventCard key={index} event={event} />
                            ))}
                          </div>
                        </div>

                        {/* Upcoming Events */}
                        <div>
                          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 rounded-t-lg mb-4">
                            <h3 className="font-bold text-lg">
                              Upcoming Events
                            </h3>
                          </div>
                          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
                            None currently announced.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* All Events Button */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-center py-4 rounded-b-lg">
                  <button className="text-white font-bold text-lg hover:text-blue-200 transition-colors duration-300 flex items-center justify-center mx-auto">
                    All Events
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-red-600 mb-4 text-center">
                  IMPORTANT
                </h2>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Account Security:</strong> Keep your account safe!
                      Avoid showing detailed information about your account,
                      bind your account to avoid losing it, and ask for more
                      detailed tips on our Discord server.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <em>
                        Friendly reminder that this game is a fictional work,
                        and has no relation to anything happening in the real
                        world.
                      </em>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Recommended Android:</strong> Version 4.1 - 10.0,
                      please avoid using Android phones with Intel CPUs.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Minimum RAM:</strong> 2GB for both Android and iOS
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-3 mt-6">
                  {bottomNavItems.map((item, index) => (
                    <div
                      key={index}
                      className={`
              col-span-${item.colspan} bg-slate-700 hover:bg-slate-600 
              transition-colors duration-300 cursor-pointer
              rounded-lg p-3 border border-slate-600 hover:border-slate-400
            `}
                      onClick={() => handleTileClick(item.href)}
                    >
                      <div className="text-white text-center font-semibold text-sm tracking-wide">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <FGONewsDashboard />;
};
