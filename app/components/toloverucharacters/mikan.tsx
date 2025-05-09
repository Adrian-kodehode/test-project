import React from "react";

export const Mikan = () => {
  return (
    <div className="bg-[#FFF4FB] flex flex-row items-start min-h-screen">
      {/* Left: Main text content */}
      <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
        <p>
          <strong>Yūki Mikan</strong> is Rito's independent and reliable
          12-year-old sister. Mikan takes care of most of the household work
          while their parents are away working and also watches over Celine. In
          contrast to her brother, she is very mature and does not hesitate to
          tease him, going as far as lying that they aren't blood-related, but
          quickly retracting the statement and telling the truth. Mikan also
          seems to have a certain lack of respect for Rito because of this
          (hardly ever addresses him by honorific as an older brother), but does
          answer him "Onii-Chan" as thanks for trying so hard to take care of
          her when she develops a fever and when he gives her a Christmas
          present.
        </p>
        <br />
        <p>
          Mikan has grown quite attached to Yami, perhaps due to Yami seemingly
          being the same age as her. Mikan is very perceptive and seems to be
          able to read people's emotions, even their reactions, most of which is
          Rito's obvious anxiety around Sairenji Haruna and Kotegawa Yui's
          subtle feelings for him. Mikan even calls him a "playboy" (so does
          Nana) for attracting so many girls all of a sudden (even though she
          attracts so many boys at her school). Mikan, however, does respect
          Rito's relationship with Lala, even going so far as to tell Momo not
          to get too close to Rito for Lala's sake. Although it's possible that
          she could have done this out of jealousy of how close Momo was getting
          to Rito.
        </p>
        <br />
        <p>Mikan is the only main character that doesn't attend Sainan High.</p>
      </div>
      {/* Right: Info card sidebar */}
      <div className="w-[350px] p-5 font-sans sticky top-8 mr-8">
        <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
          <div className="text-center mb-4 w-full">
            <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
              Yūki Mikan
            </h1>
          </div>
          <div className="flex justify-center mb-4 w-full">
            <img
              src="/To Love Ru/mikan.jpg"
              alt="Yūki Mikan"
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
                    結城 美柑
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Name
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Yūki Mikan
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
                    11 (Elementary School Fitfh year) <br />
                    12 (Elementary School Sixth year)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Birthday
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    November 3rd
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
                    149cm
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Weight
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    41 kg
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Blood Type
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    O
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Hair Color
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Dark Brown <br />
                    Black (To LOVE-Ru full color manga)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Eye Color
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Gold Brown
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
                    Sainan First Elementary School
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Class
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    5-A (To LOVE-Ru Chapter 1-48) <br />
                    6-A (To LOVE-Ru Chapter 49-)
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Education
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Currently in School
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Occupation
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Elementary School
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Relatives
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Yūki Rito (Brother) <br />
                    Yūki Ringo (Mother) <br />
                    Yūki Saibai (Father) <br />
                    Lala Satalin Deviluke (Sister-In-Law)(Pending)
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
                    - Very mature for her age <br />
                    - Brocon <br />
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
                    Chapter 1
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    Anime Debut
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Episode 1
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
                    Hanazawa Kana
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                    English VA
                  </td>
                  <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                    Brittney Karbowski
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
