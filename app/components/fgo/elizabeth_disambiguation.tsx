import { useState, useEffect } from "react";

type ArtoriaRow = {
  rarity: string;
  icon: string;
  servant: string;
  description: string;
  href: string;
};

export const Elizabeth = () => {
  const [data, setData] = useState<ArtoriaRow[]>([]);

  useEffect(() => {
    const mockData = [
      {
        rarity: "4★",
        href: "elizabeth_bathory",
        icon: "Fgo/characters/elizabeth_disambiguation/S018A1Icon.png",
        servant: "Elizabeth Báthory",
        description: "The original Elizabeth Báthory from Fate/Extra CCC.",
      },
      {
        rarity: "4★",
        href: "elizabeth_bathory_halloween",
        icon: "Fgo/characters/elizabeth_disambiguation/S061A1Icon.png",
        servant: "Elizabeth Báthory (Halloween)",
        description:
          "The first Halloween version of Elizabeth Báthory, appearing in the Halloween 2015 Event as an event limited free 4★ Caster.",
      },
      {
        rarity: "4★",
        href: "elizabeth_bathory_brave",
        icon: "Fgo/characters/elizabeth_disambiguation/S138A1Icon.png",
        servant: "Elizabeth Báthory (Brave)",
        description:
          "The second Halloween version of Elizabeth Báthory, appearing in the Halloween 2016 Event as an event limited free 4★ Saber.",
      },
      {
        rarity: "4★",
        href: "mecha_eli-chan",
        icon: "Fgo/characters/elizabeth_disambiguation/S190A1Icon.png",
        servant: "Mecha Eli-chan",
        description:
          "The third Halloween version of Elizabeth Báthory, appearing in the Halloween 2017 Event as an event limited free 4★ Alter-Ego.",
      },
      {
        rarity: "4★",
        href: "mecha_eli-chan_mk-ii",
        icon: "Fgo/characters/elizabeth_disambiguation/S191A1Icon.png",
        servant: "Mecha Eli-chan Mk.II",
        description:
          "The Berserker-version of Jeanne d'Arc (Alter), appearing in the Servant Summer Festival! 2018 as an event limited free 4★ Berserker.",
      },
      {
        rarity: "4★",
        href: "elizabeth_bathory_cinderella",
        icon: "Fgo/characters/elizabeth_disambiguation/S326A1Icon.png",
        servant: "Elizabeth Báthory (Cinderella)",
        description:
          "The fifth Halloween version of Elizabeth Báthory, appearing in the Halloween 2021 Event as an event limited free 4★ Rider.",
      },
      {
        rarity: "4★",
        href: "nine-tattoo_dragon_eliza",
        icon: "Fgo/characters/elizabeth_disambiguation/S367A1Icon.png",
        servant: "Nine-Tailed Dragon Eliza",
        description:
          "The sixth Halloween version of Elizabeth Báthory, appearing in the Halloween 2022 Event as an event limited free 4★ Pretender.",
      },
      {
        rarity: "4★",
        href: "carmilla",
        icon: "Fgo/characters/elizabeth_disambiguation/S046A1Icon.png",
        servant: "Carmilla",
        description:
          "The adult version of Elizabeth Báthory, appearing in the Orleans storyline.",
      },
      {
        rarity: "4★",
        href: "carmilla_rider",
        icon: "Fgo/characters/elizabeth_disambiguation/S263A1Icon.png",
        servant: "Carmilla (Rider)          ",
        description:
          "The Rider-version of Carmilla, appearing in the Las Vegas Official Bout storyline.",
      },
      {
        rarity: "GOLD",
        href: "mass_produced_mecha_eli-chan",
        icon: "Fgo/characters/elizabeth_disambiguation/Mass_Produced_Mecha_Eli-chanIcon.png",
        servant: "Mass-Produced Mecha Eli-chan",
        description:
          "The Rider-version of Carmilla, appearing in the Las Vegas Official Bout storyline.",
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
            Elizabeth (Disambiguation)
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
          <strong>
            This article is a disambiguation page for Elizabeth (Disambiguation)
          </strong>
          . The following is a list of links to pages that might share the same
          title. Please follow one of the disambiguation links below or{" "}
          <span className="text-blue-400 font-bold hover:underline cursor-pointer">
            search
          </span>{" "}
          to find the page you were looking for if it is not listed.
          <br />
          <br />
          <strong>Elizabeth Báthory</strong> is one of the Lancer-class Servants
          who first appeared in Fate/Extra CCC. Below are the variations of
          Elizabeth that have appeared in FGO:
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
