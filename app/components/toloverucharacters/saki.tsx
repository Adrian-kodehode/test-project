import React from "react";

export const Saki = () => {
  return (
    <div className="bg-[#FFF4FB] flex flex-row items-start min-h-screen">
      {/* Left: Main text content */}
      <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
        <p>
          <strong>Tenjōin Saki</strong> is the arrogant self-proclaimed queen
          bee of the school. She is currently in her third-year. Saki
          consistently tries to defeat Lala in everything, stating there can
          only be one "queen" in Sainan High. She even tries to seduce Rito to
          make Lala jealous (despite not loving him), but later, she falls in
          love with Zastin. She once teamed up with Run Elise Jewelria to make
          Lala look bad in front of Rito and to prove that Saki is the queen of
          all things.
        </p>
      </div>
      {/* Right: Info card sidebar */}
      <div className="w-[350px] p-5 font-sans sticky top-8 mr-8">
        <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
          <div className="text-center mb-4 w-full">
            <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
              Tenjōin Saki
            </h1>
          </div>
          <div className="flex justify-center mb-4 w-full">
            <img
              src="https://static.wikia.nocookie.net/to-loveru/images/6/67/Saki_Tenjouin_TLRD_Manga.png"
              alt="Tenjōin Saki"
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
                    天条院 沙姫
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Name
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Tenjōin Saki
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
                    16 (Second year) <br />
                    17 (Third year)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Birthday
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    February 1
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Zodiac Sign
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Aquarius
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
                    165cm
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Weight
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    50kg
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
                    Blonde
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Eye Color
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Gold
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
                    Currently attending Sainan High
                  </td>
                </tr>

                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Relatives
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Tenjōin Ryūga (Father)
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
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Unusual Features
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Stereotypical noblewoman's laugh
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
                    Chapter 24
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
                    Ayako Kawasumi
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    English VA
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Maggie Flecknoe
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
