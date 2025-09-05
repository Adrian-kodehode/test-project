import { useState, useEffect } from "react";

type ArtoriaRow = {
  rarity: string;
  icon: string;
  servant: string;
  description: string;
  href: string;
};

export const Artoria = () => {
  const [data, setData] = useState<ArtoriaRow[]>([]);

  useEffect(() => {
    const mockData = [
      {
        rarity: "5★",
        href: "artoria_pendragon",
        icon: "Fgo/characters/artoria_disambiguation/S002A1Icon.png",
        servant: "Artoria Pendragon",
        description:
          "The original Artoria Pendragon, aka Saber in Fate/Stay Night, Fate/Zero, Carnival Phantasm, and many more.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S160A2Icon.png",
        servant: "Arthur Pendragon (Prototype)",
        description:
          "The original planned character of Artoria who appears in Fate/Prototype and Fate/Prototype: Fragments of Blue and Silver.",
      },
      {
        rarity: "4★",
        href: "artoria_pendragon_alter",
        icon: "Fgo/characters/artoria_disambiguation/S003A2Icon.png",
        servant: "Artoria Pendragon (Alter)",
        description:
          "The altered version/another aspect of Artoria Pendragon, aka Saber Alter in Fate/Stay Night Heaven's Feel.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S004A1Icon.png",
        servant: "Artoria Pendragon (Lily)",
        description:
          "The younger version of Artoria Pendragon, aka Saber Lily in Fate/Unlimited Codes.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S073A1Icon.png",
        servant: "Artoria Pendragon (Santa Alter)",
        description:
          "The Santa version of Artoria Pendragon (Alter), appearing in Christmas 2015 as an event limited free 4★ Rider.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S078A3Icon.png",
        servant: "Artoria Pendragon (Lancer Alter)",
        description:
          "The Alter-version of Artoria Pendragon (Lancer), appearing in the London storyline. She is only available for summoning after London is cleared.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S119A3Icon.png",
        servant: "Artoria Pendragon (Lancer)",
        description:
          "The Lancer-version/alternate timeline version of Artoria Pendragon, appearing in the Camelot storyline. She is only available for summoning after Camelot is cleared.",
      },
      {
        rarity: "5★",
        href: "artoria_pendragon_archer",
        icon: "Fgo/characters/artoria_disambiguation/S129A1Icon.png",
        servant: "Artoria Pendragon (Archer)",
        description:
          "The Archer-version of Artoria Pendragon, appearing in the FGO 2016 Summer Event storyline.",
      },
      {
        rarity: "5★",
        href: "artoria_pendragon_rider_alter",
        icon: "Fgo/characters/artoria_disambiguation/S179A1Icon.png",
        servant: "Artoria Pendragon (Rider Alter)",
        description:
          "The Rider-version of Artoria Pendragon (Alter), appearing in the Dead Heat Summer Race! storyline.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S265A1Icon.png",
        servant: "Artoria Pendragon (Ruler)",
        description:
          "The Ruler-version of Artoria Pendragon (Lancer), appearing in the Las Vegas Official Bout storyline.",
      },
      {
        rarity: "5★",
        href: "artoria_caster",
        icon: "Fgo/characters/artoria_disambiguation/S284A2Icon.png",
        servant: "Artoria Caster",
        description:
          "The Caster-version/alternate timeline version of Artoria Pendragon, appearing in the Avalon le Fae storyline.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S086A1Icon.png",
        servant: "Mysterious Heroine X",
        description:
          "The Assassin-version/alternate universe version of Artoria Pendragon, appearing in the Saber Wars Event storyline.",
      },
      {
        rarity: "5★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S155A1Icon.png",
        servant: "Mysterious Heroine X (Alter)",
        description:
          "The Berserker-version/alternate universe version of Artoria Pendragon, first appearing during the Valentine 2016 Event Re-Run.",
      },
      {
        rarity: "5★",
        href: "artoria_caster_berserker",
        icon: "Fgo/characters/artoria_disambiguation/S386A1Icon.png",
        servant: "Artoria Caster (Berserker)",
        description:
          "The Berserker-version version of Artoria Caster, appearing in the Servant Summer Festival! 2023 storyline.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S222A3Icon.png",
        servant: "Mysterious Heroine XX",
        description:
          "The Foreigner-version of Mysterious Heroine X, appearing in the Servant Summer Festival! 2018 storyline.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S308A1Icon.png",
        servant: "Mysterious Idol X (Alter)",
        description:
          "The Rider-version of Artoria Pendragon (Alter), appearing in the Dead Heat Summer Race! storyline.",
      },
      {
        rarity: "4★",
        href: "",
        icon: "Fgo/characters/artoria_disambiguation/S423A2Icon.png",
        servant: "Mysterious Heroine XX (Alter)",
        description:
          "The Rider-version of Artoria Pendragon (Alter), appearing in the Dead Heat Summer Race! storyline.",
      },
    ];
    setData(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 md:p-8">
      {/* Main content container */}
      <main className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-3xl font-bold">
            Artoria (Disambiguation)
          </h2>
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
          This article is a disambiguation page for Artoria (Disambiguation).
          The following is a list of servants to pages that might share the same
          title. Please follow one of the disambiguation servants below or{" "}
          <span className="text-blue-400 font-bold hover:underline cursor-pointer">
            search
          </span>{" "}
          to find the page you were looking for if it is not listed.
          <br />
          <br />
          Artoria Pendragon is the mascot/poster-character of the Fate series.
          Below are the variations of Artoria that have appeared in FGO:
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg overflow-hidden border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-left text-sm md:text-base">
                <th className="p-3 border-r border-gray-600">Rarity</th>
                <th className="p-3 border-r border-gray-600">Icon</th>
                <th className="p-3 border-r border-gray-600">Servant</th>
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
                    {row.servant}
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
