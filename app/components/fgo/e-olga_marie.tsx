import { useState, useEffect } from "react";

type EOlgaMarieRow = {
  rarity: string;
  icon: string;
  link: string;
  description: string;
  href: string;
};

const EOlgaMarie = () => {
  const [data, setData] = useState<EOlgaMarieRow[]>([]);

  useEffect(() => {
    const mockData = [
      {
        rarity: "-",
        href: "flare_marie",
        icon: "Fgo/characters/beast/e-olga_marie/S411A1Icon.png",
        link: "E-Flare Marie",
        description:
          "The fire-type E-Olga Marie that appears in Olga Marie Quest_1. She will drop U-Piece (Fire) when defeated.",
      },
      {
        rarity: "-",
        href: "aqua_marie",
        icon: "Fgo/characters/beast/e-olga_marie/S412A1Icon.png",
        link: "E-Aqua Marie",
        description:
          "The water-type E-Olga Marie that appears in Olga Marie Quest_2. She will drop U-Piece (Water) when defeated.",
      },
      {
        rarity: "-",
        href: "grand_marie",
        icon: "Fgo/characters/beast/e-olga_marie/S436A1Icon.png",
        link: "E-Grand Marie",
        description:
          "The earth-type E-Olga Marie that appears in Olga Marie Quest_3. She will drop U-Piece (Earth) when defeated.",
      },
      {
        rarity: "-",
        href: "stellar_marie",
        icon: "Fgo/characters/beast/e-olga_marie/S443A1Icon.png",
        link: "E-Stellar Marie",
        description: "The wind-type E-Olga Marie that appears in Olga Marie Quest_4. She will drop U-Piece (Wind) when defeated.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/beast/e-olga_marie/U-OlgaMarieIcon.png",
        link: "U-Olga Marie (Beast VII)",
        description: "The original form of the E-Olga Marie(s).",
      },
      {
        rarity: "5★",
        href: "u-olga_marie",
        icon: "Fgo/characters/beast/e-olga_marie/S444A1Icon.png",
        link: "U-Olga Marie",
        description: "The UnBeast class of U-Olga Marie.",
      },
    ];
    setData(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 md:p-8">
      {/* Main content container */}
      <main className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-3xl font-bold">E-Olga Marie</h2>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
              <span>EDIT</span>
            </button>
            <button className="hover:text-orange-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Disambiguation box */}
        <div className="bg-blue-900 p-4 rounded-lg border-l-4 border-blue-500 mb-6 text-sm md:text-base">
          This article is a disambiguation page for E-Olga Marie. The following
          is a list of links to pages that might share the same title. Please
          follow one of the disambiguation links below or{" "}
          <span className="text-blue-400 font-bold hover:underline cursor-pointer">
            search
          </span>{" "}
          to find the page you were looking for if it is not listed.
          <br />
          <br />
          E-Olga Marie is the Beast-class Servant who first appeared in{" "}
          <span className="text-blue-400 font-bold hover:underline cursor-pointer">
            Fate/Grand Order
          </span>
          . Below are the variations of E-Olga Marie that have appeared in FGO:
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg overflow-hidden border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-left text-sm md:text-base">
                <th className="p-3 border-r border-gray-600">Rarity</th>
                <th className="p-3 border-r border-gray-600">Icon</th>
                <th className="p-3 border-r border-gray-600">Link</th>
                <th className="p-3">Description</th>
                <th className="p-3 border-l border-gray-600">More Info</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3 border-r text-yellow-400 border-gray-700 align-middle text-center text-sm md:text-base">
                    {row.rarity}
                  </td>
                  <td className="p-3 border-r border-gray-700 align-top">
                    <img
                      src={row.icon}
                      alt="icon"
                      className="w-full h-full  rounded-md"
                    />
                  </td>
                  <td className="p-3 border-r border-gray-700 align-middle text-center text-blue-400 font-bold hover:underline cursor-pointer text-sm md:text-base">
                    {row.link}
                  </td>
                  <td className="p-3 align-middle text-center text-sm md:text-base">
                    <div>
                      {row.description.split(".")[0]}.
                      <br />
                      {row.description.split(".").slice(1).join(".").trim()}
                    </div>
                  </td>
                  <td className="p-3 border-l border-gray-700 align-middle text-center text-sm md:text-base">
                    <a
                      href={row.href}
                      className="text-blue-400 font-bold hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Categories section */}
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold border-b border-gray-600 pb-2">
            Categories
          </h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            This section is not included in the provided image.
          </p>
        </div>
      </main>

      {/* Footer or bottom elements can go here */}
      <footer className="mt-8 text-center text-gray-500 text-xs md:text-sm">
        <p>&copy; 2024 FGO Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EOlgaMarie;
