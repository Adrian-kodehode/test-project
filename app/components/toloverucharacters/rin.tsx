import React from "react";

export const Rin = () => {
  return (
    <div className="bg-[#FFF4FB] flex flex-row items-start min-h-screen">
      {/* Left: Main text content */}
      <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
        <p>
          <strong>Kujō Rin</strong> is Tenjōin Saki's loyal and longest known
          friend. Rin is skilled in kendo and has been a loyal bodyguard to Saki
          for years, as her family has always served the Tenjouin family in this
          position. The bespectacled Fujisaki Aya is weak-willed and became
          associated with Saki after she and Rin protected her from bullies when
          they were children.
        </p>
      </div>
      {/* Right: Info card sidebar */}
      <div className="w-[350px] p-5 font-sans sticky top-8 mr-8">
        <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
          <div className="text-center mb-4 w-full">
            <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
              Kujō Rin
            </h1>
          </div>
          <div className="flex justify-center mb-4 w-full">
            <img
              src="/To Love Ru/rin.jpg"
              alt="Kujō Rin"
              className="w-48 h-48 object-cover border-2 border-[#DB49AC] rounded"
            />
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <tbody>
                {/* Characteristics */}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                  >
                    Characteristics
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 w-1/3 border border-[#9C2E7A] ">
                    Kanji
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    九条 凛
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Name
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Kujō Rin
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Planet
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Earth
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Age
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    16 (second year) <br />
                    17 (third year)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Birthday
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    October 25
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Zodiac Sign
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Scorpio
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Gender
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Female
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Height
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    167.5cm
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Weight
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    54kg
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Blood Type
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    A
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Hair Color
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Dark Brown
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Eye Color
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Brown
                  </td>
                </tr>
                {/* Personal Status */}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                  >
                    Personal Status
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    School
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Sainan High
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Class
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    2-D (chapters 1-48) <br />
                    3-D (chapters 49-present)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Education
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Currently attending High School
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Occupation
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    High school student <br />
                    Tenjōin Saki's personal bodyguard <br />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Relatives
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Tenjōin Saki (in service to) <br />
                    Kai Kujou (father)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Martial Status
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Single
                  </td>
                </tr>

                {/* First Appearance */}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                  >
                    First Appearance
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Manga Debut
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Chapter 25
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Anime Debut
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Episode 5
                  </td>
                </tr>
                {/* Voice Actors */}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                  >
                    Voice Actors
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Japanese VA
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Mai Hashimoto
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    English VA
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Chaney Moore
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                  >
                    Gallery
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
