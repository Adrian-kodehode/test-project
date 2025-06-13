import React, { useEffect, useState } from "react";
import blueArchiveCharacters, { blueArchiveCharacterImages } from '../bluearchive/characters';


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
      <main className="flex-1 mt-10 mb-10 max-w-7xl bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg mx-auto flex flex-col items-center justify-center">
        {/* Filter Bar */}
        {/* <div className="w-full mb-4 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="text-[#59deff] underline cursor-pointer">
              By Class
            </span>
            <span className="text-gray-300 cursor-pointer">By Terrain</span>
            <span className="text-gray-300 cursor-pointer">By Stats</span>
            <span className="text-gray-300 cursor-pointer">By UE</span>
            <span className="text-gray-300 cursor-pointer">By Bond</span>
            <span className="text-gray-300 cursor-pointer">By Material</span>
            <span className="text-gray-300 cursor-pointer">By Gift</span>
          </div>
          <div className="w-full bg-[#222] rounded px-2 py-1 flex flex-wrap items-center gap-3 text-xs mt-2">
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-pink-400 border border-white"></span>{" "}
              Attacker
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-gray-400 border border-white"></span>{" "}
              Supporter
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-yellow-400 border border-white"></span>{" "}
              Tank
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-green-400 border border-white"></span>{" "}
              Healer
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-blue-400 border border-white"></span>{" "}
              Tactical
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                className="inline"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
              </svg>
              Have Cover
            </span>
            <span className="flex items-center gap-1">
              <span className="text-xl">✗</span> No Cover
            </span>
          </div>
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
              <tr className="bg-[#00bfff] border-b border-gray-700">
                <td className="py-2  relative flex items-center justify-center ">
                  <img
                    src="/Blue-Archive/characters/Hoshino_Icon.png"
                    alt="Hoshino"
                    className="w-20 h-16"
                  />
                  <span
                    className="absolute pb-8 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-white px-2 py-1 rounded font-bold text-shadow-xl"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Hoshino
                  </span>
                </td>
                <td className="py-2 px-2 bg-[#9b85e6]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-1">
                      <img src="Blue-Archive/images/Star_Icon.png" alt="" />
                      <img src="Blue-Archive/images/Star_Icon.png" alt="" />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1"
                    />
                  </div>
                </td>
                <td className="py-2 px-2 font-bold text-black bg-[#ff6133]">
                  Striker
                </td>
                <td className="py-2 px-2">
                  <span className="inline-block w-6 h-6 bg-black rounded-full border border-white flex items-center justify-center mx-auto">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </span>
                </td>
                <td className="py-2 px-2 font-bold text-black italic">FRONT</td>
                <td className="py-2 px-2 text-2xl text-black">✗</td>
                <td className="py-2 px-2 text-black font-bold bg-[#ffa500]">
                  Penetration
                </td>
                <td className="py-2 px-2 text-black font-bold bg-[#ffa500]">
                  Heavy Armor
                </td>
              </tr>
              <tr className="bg-[#ff3b3b] border-b border-gray-700">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hoshino_Swimsuit_Icon.png"
                    alt="Hoshino"
                    className="w-40 h-30"
                  />
                  Hoshino
                </td>
                <td className="py-2 px-2">
                  <span className="text-yellow-300">★</span>
                  <span className="text-yellow-300">★</span>
                  <span className="text-gray-400">★</span>
                </td>
                <td className="py-2 px-2">Striker</td>
                <td className="py-2 px-2">
                  <span className="inline-block w-6 h-6 bg-black rounded-full border border-white flex items-center justify-center mx-auto">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <ellipse cx="12" cy="12" rx="8" ry="4" />
                    </svg>
                  </span>
                </td>
                <td className="py-2 px-2 font-bold italic">FRONT</td>
                <td className="py-2 px-2 text-2xl">✗</td>
                <td className="py-2 px-2 text-red-300 font-bold">Explosion</td>
                <td className="py-2 px-2 text-blue-300 font-bold bg-[#1e90ff]">
                  Special Armor
                </td>
              </tr>
              <tr className="bg-[#59deff]">
                <td className="py-2 px-2 flex items-center justify-center gap-2">
                  <img
                    src="/Blue-Archive/characters/Hoshino_Armed_Icon.png"
                    alt="Hoshino (Armed)"
                    className="w-40 h-30"
                  />
                  Hoshino <br /> (Armed)
                </td>
                <td className="py-2 px-2">
                  <span className="text-yellow-300">★</span>
                  <span className="text-yellow-300">★</span>
                  <span className="text-gray-400">★</span>
                </td>
                <td className="py-2 px-2">Striker</td>
                <td className="py-2 px-2">
                  <span className="inline-block w-6 h-6 bg-black rounded-full border border-white flex items-center justify-center mx-auto">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v8" stroke="white" strokeWidth="2" />
                    </svg>
                  </span>
                </td>
                <td className="py-2 px-2 font-bold italic">FRONT</td>
                <td className="py-2 px-2 text-2xl">✗</td>
                <td className="py-2 px-2 text-blue-200 font-bold">Mystic</td>
                <td className="py-2 px-2 text-yellow-400 font-bold bg-[#ffb300]">
                  Heavy Armor
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
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
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-[#222c]" : "bg-[#333c]"}>
                <td className="py-2 px-2">Student {i + 1}</td>
                <td className="py-2 px-2 border-b border-black bg-[#9b85e6]">
                  <div className="flex flex-col items-center bg-[#9b85e6]">
                    <div className="flex flex-row gap-1">
                      <img src="Blue-Archive/images/Star_Icon.png" alt="" />
                      <img src="Blue-Archive/images/Star_Icon.png" alt="" />
                    </div>
                    <img
                      src="Blue-Archive/images/Star_Icon.png"
                      alt=""
                      className="mt-1"
                    />
                  </div>
                </td>
                <td className="py-2 px-2">Striker</td>
                <td className="py-2 px-2">
                  <span className="inline-block w-6 h-6 bg-black rounded-full border border-white mx-auto"></span>
                </td>
                <td className="py-2 px-2 font-bold italic">FRONT</td>
                <td className="py-2 px-2 text-2xl">✗</td>
                <td className="py-2 px-2 text-blue-200 font-bold">Mystic</td>
                <td className="py-2 px-2 text-yellow-400 font-bold bg-[#ffb300]">
                  Heavy Armor
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
