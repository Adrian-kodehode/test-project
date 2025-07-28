import React, { useEffect, useState } from "react";
import { Student } from "./characters/students/Student";
import { a } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";
import studentdata from "./characters/studentdata.json";

export const Students = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: string;
    count: number;
  }>({
    key: null,
    direction: "ascending",
    count: 0,
  });

  const handleSort = (key: string) => {
    let direction = "ascending";
    let count = sortConfig.count;

    if (sortConfig.key === key) {
      count = (count + 1) % 3;
      if (count === 0) {
        // Reset to original order
        setSortConfig({ key: null, direction: "ascending", count: 0 });
        return;
      } else if (sortConfig.direction === "ascending") {
        direction = "descending";
      }
    } else {
      count = 1; // Reset count when a new key is clicked
    }

    setSortConfig({ key, direction, count });
  };

  const sortedStudentData = React.useMemo(() => {
    let sortableItems = [...studentdata];
    if (sortConfig !== null && sortConfig.key !== null) {
      sortableItems.sort((a: any, b: any) => {
        if (sortConfig.key && a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (sortConfig.key && a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [studentdata, sortConfig]);

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
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Student
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("numStars")}
                >
                  Rarity
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("role")}
                >
                  Role
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("class")}
                >
                  Class
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("position")}
                >
                  Position
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("cover")}
                >
                  Cover
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("atk")}
                >
                  ATK TYPE
                </th>
                <th
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => handleSort("def")}
                >
                  DEF TYPE
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedStudentData.map(
                (
                  {
                    src,
                    href,
                    name,
                    altName,
                    role,
                    classSrc,
                    classSrc2,
                    position,
                    cover,
                    atk,
                    def,
                    numStars,
                    bg,
                  },
                  index
                ) => (
                  <Student
                    key={index}
                    src={src}
                    href={href}
                    name={name}
                    altName={altName}
                    role={role}
                    classSrc={classSrc}
                    classSrc2={classSrc2}
                    position={position}
                    cover={cover}
                    atk={atk}
                    def={def}
                    numStars={numStars}
                    bg={bg}
                  />
                )
              )}
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
