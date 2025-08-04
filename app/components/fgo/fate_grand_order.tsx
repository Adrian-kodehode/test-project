import React, { useState } from "react";

export const FateGrandOrder = () => {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  const navItems = [
    // Row 1
    [
      {
        title: "SERVANTS",
        src: "/Fgo/icons/Servant_Button_Hover.png",
        srcHover: "/Fgo/icons/Servant_Button.png",
        href: "/fgo/Servants",
        external: false,
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
  );
};
