import React, { useEffect, useState } from "react";

export const Students = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/Blue-Archive/Site-background-dark.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        imageRendering: "auto", // Prevents pixelation
      }}
    >
      {/* Header */}

      {/* Main Content */}
      <header className="w-full  flex flex-col items-start justify-center pt-10 pl-40 relative">
        <div className="flex flex-row items-start gap-6">
          <a href="/bluearchivehome">
            <img
              src="/Blue-Archive/Site-logo (5).png"
              alt="Blue Archive Logo"
              className="h-24 w-auto drop-shadow-lg"
            />
          </a>
          <h1 className="text-lx pt-10 font-bold text-[#02d3fb] tracking-wide drop-shadow-md">
            Sensei Welcome to Kivotos!
          </h1>
        </div>
        <nav className="mt-4 flex gap-8 text-[#02d3fb] font-bold text-lg justify-center">
          <a href="#" className="hover:underline hover:text-white transition">
            EXPLORE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            BLUE ARCHIVE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            TERMINOLOGY
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            MENU
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            MISC
          </a>
        </nav>
      </header>
      <main className="flex-1 mt-10 mb-10 w-[1200px] max-w-[98vw] bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg mx-auto flex flex-col items-center justify-center">
        {/* Filter Bar */}
        {/* Top Buttons */}
        <div className="w-full flex flex-row gap-4 mb-4 justify-center">
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Limited List
          </button>
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Detailed List
          </button>
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Variant List
          </button>
        </div>
        {/* Tab Bar */}
        <div className="w-full flex flex-row gap-8 border-b-2 border-[#59deff] mb-2 text-base font-semibold justify-center items-center">
          <span className="text-[#59deff] underline cursor-pointer pb-1 border-b-2 border-[#59deff]">
            By Class
          </span>
          <span className="text-gray-300 cursor-pointer pb-1">By Terrain</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Stats</span>
          <span className="text-gray-300 cursor-pointer pb-1">By UE</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Bond</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Material</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Gift</span>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-center text-white border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-[#00bfff] text-black">
              <tr>
                <th className="py-2 px-2">Student</th>
                <th className="py-2 px-2">Rarity</th>
                <th className="py-2 px-2">Role</th>
                <th className="py-2 px-2">Class</th>
                <th className="py-2 px-2">Position</th>
                <th className="py-2 px-2">Cover</th>
                <th className="py-2 px-2">ATK TYPE</th>
                <th className="py-2 px-2">DEF TYPE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#00bfff] border-b border-t border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <a href="/hoshino">
                    {" "}
                    <img
                      src="/Blue-Archive/characters/Hoshino_Icon.png"
                      alt="Hoshino"
                      className="w-40 h-30"
                    />
                  </a>
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hoshino
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <a href="/hoshino_swimsuit">
                    <img
                      src="/Blue-Archive/characters/Hoshino_Swimsuit_Icon.png"
                      alt="Hoshino (Armed)"
                      className="w-40 h-30"
                    />
                  </a>
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hoshino <br />
                    (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46ADFF]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hoshino_Armed_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hoshino <br /> (Armed)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className=" flex flex-col items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black  text-xl font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Shiroko_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Shiroko
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Shiroko_Riding_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Shiroko <br /> (Riding)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Shiroko_Swimsuit_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Shiroko <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Shiroko_Terror_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Shiroko <br /> Terror
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Serika_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Serika
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explostion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Serika_New_Year_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Serika <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Serika_Swimsuit_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Serika <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Nonomi_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Nonomi
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Nonomi_Swimsuit_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Nonomi <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Ayane_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Ayane
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Healer (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Ayane_Swimsuit_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Ayane <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268ACB]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tactical.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>

              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Makoto_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Makoto
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Satsuki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Satsuki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Chiaki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Chiaki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Mystic Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Iroha_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Iroha
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tactical.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Ibuki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Ibuki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hina_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hina
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <a href="/hina_swimsuit">
                    {" "}
                    <img
                      src="/Blue-Archive/characters/Hina_Swimsuit_Icon.png"
                      alt=""
                      className="w-40 h-30"
                    />
                  </a>
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hina <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hina_Dress_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hina <br /> (Dress)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#9b57aa]">
                  Elastic Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Ako_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Ako
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Ako_Dress_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Ako <br /> (Dress)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Iori_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Iori
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Iori_Swimsuit_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Iori <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Chinatsu_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Chinatsu
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Healer (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Chinatsu_Hot_Spring_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Chinatsu <br /> (Hot Spring)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Aru_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Aru
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explotion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Aru_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Aru <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Aru_Dress_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Aru <br /> (Dress)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Mutsuki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Mutsuki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Mutsuki_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Mutsuki <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kayoko_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kayoko
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kayoko_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kayoko <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kayoko_Dress_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kayoko <br /> (Dress)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Haruka_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Haruka
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Haruka_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Haruka <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Haruna_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Haruna
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Haruna_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Haruna <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Haruna_Gym_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Haruna <br /> (Gym)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Healer (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Junko_Icon (1).png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Junko
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Junko_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Junko <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268ACB]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Izumi_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Izumi
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Izumi_Swimsuit_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Izumi <br /> (Swimsuit)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268ACB]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Izumi_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Izumi <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Akari_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Akari
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Akari_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Akari <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tactical.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Fuuka_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Fuuka
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Healer (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Fuuka_New_Year_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Fuuka <br /> (New Year)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Juri_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Juri
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>{" "}
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Juri_Part_Timer_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Juri <br /> (Part Timer)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Sena_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Sena
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tactical.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Sena_Casual_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Sena <br /> (Casual)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Healer (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kasumi_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kasumi
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Megu_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Megu
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#e34a45] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kirara_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kirara
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Rio_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Rio
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#9b57aa]">
                  Elastic Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Yuuka_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Yuuka
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Yuuka_Gym_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Yuuka <br /> (Gym)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Yuuka_Pajamas_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Yuuka <br /> (Pajamas)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ff0000]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Noa_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Noa
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#46adff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Noa_Pajamas_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Noa <br /> (Pajamas)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Koyuki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Koyuki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#FF6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Chihiro_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Chihiro
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetraton
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Maki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Maki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetraton
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Maki_Camp_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Maki <br /> (Camp)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hare_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hare
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hare_Camp_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hare <br /> (Camp)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kotama_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kotama
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Kotama_Camp_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Kotama <br /> (Camp)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Neru_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Neru
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Neru_Bunny_Girl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Neru <br /> (Bunny Girl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Neru_Schoolgirl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Neru <br /> (Schoolgirl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#9b57aa]">
                  Elastic Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Karin_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Karin
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Karin_Bunny_Girl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Karin <br />
                    (Bunny Girl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9B85E6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Karin_Schoolgirl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Karin <br /> (Schoolgirl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Akane_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Akane
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#e68f16]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[orange]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Akane_Bunny_Girl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Akane <br /> (Bunny Girl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46ADFF]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Asuna_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Asuna
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268ACB]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46ADFF]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Asuna_Bunny_Girl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Asuna <br /> (Bunny Girl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46ADFF]">
                  Mystic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Asuna_Schoolgirl_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Asuna <br /> (Schoolgirl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Toki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Toki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#9b57aa]">
                  Elastic Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <a href="/toki_bunny">
                    {" "}
                    <img
                      src="/Blue-Archive/characters/Toki_Bunny_Girl_Icon.png"
                      alt=""
                      className="w-40 h-30"
                    />
                  </a>
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Toki <br /> (Bunny Girl)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hibiki_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hibiki
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
                  Special
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#4f86f7] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hibiki_Cheerleader_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hibiki <br /> (Cheerleader)
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268ACB]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  BACK
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[red]">
                  Explosion
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#63929C] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <a href="/hikari">
                    {" "}
                    <img
                      src="/Blue-Archive/characters/Hikari_Icon.png"
                      alt=""
                      className="w-40 h-30"
                    />
                  </a>
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Hikari
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Supporter.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#63929C] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Nozomi_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Nozomi
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  MIDDLE
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img src="Blue-Archive/icons/Cover.png" alt="" />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
              <tr className="bg-[#63929C] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Aoba_Icon.png"
                    alt=""
                    className="w-40 h-30"
                  />
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      textShadow:
                        "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
                    }}
                  >
                    Aoba
                  </span>
                </td>
                <td className="py-2 px-6 bg-[#268acb]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img
                        src="Blue-Archive/images/Star_Icon.png"
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="  flex items-center justify-center mx-auto">
                    <img src="Blue-Archive/icons/Tank.png" alt="" />
                  </span>
                </td>
                <td className="py-2 px-2 text-xl font-extrabold text-black italic">
                  FRONT
                </td>
                <td className="py-2 px-2 text-2xl font-extrabold text-black">
                  <img
                    src="Blue-Archive/icons/Cross_1.png"
                    alt=""
                    className="w-14 h-14"
                  />
                </td>
                <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#9b57aa]">
                  Sonic
                </td>
                <td className="py-2 px-2 text-black text-xl font-extrabold bg-[red]">
                  Light Armor
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-6 z-50 bg-[#59deff] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-500 focus:outline-none"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
