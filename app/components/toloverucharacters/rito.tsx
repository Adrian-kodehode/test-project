import React from "react";
import { Link } from "react-router-dom";

export const Rito = () => {
  return (
    <div className="ml-64 flex-1">
      {/* Wiki Logo Header */}
      <div className="h-44 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images7.alphacoders.com/700/700001.png"
            alt="To Love-Ru Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <a href="/test">
            <img
              src="To Love Ru/Site-logo (2).png"
              alt="To LOVE-Ru Wiki"
              className="h-20"
            />
          </a>
        </div>
      </div>

      {/* Wiki Navigation */}
      <nav className="bg-[#DB49AC] text-white shadow">
        <div className="container mx-auto px-4">
          <ul className="flex">
            <li className="py-3 px-4 hover:bg-pink-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
              EXPLORE
            </li>
            <li className="py-3 px-4 hover:bg-pink-600">MEDIA</li>
            <li className="py-3 px-4 hover:bg-pink-600">
              <Link to="/toloveru">CHARACTERS</Link>
            </li>
            <li className="py-3 px-4 hover:bg-pink-600">COMMUNITY</li>
            <li className="py-3 px-4 hover:bg-pink-600">TOOLS</li>
            <li className="py-3 px-4 hover:bg-pink-600">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="py-3 px-4 hover:bg-pink-600">
              <Link to="/video">VIDEO</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-[#FFF4FB] flex flex-row items-start justify-center min-h-screen">
        <div className="w-64 border-r border-gray-200 bg-white fixed left-0 top-0 h-full sidebar transition-transform duration-300">
          {/* Wiki Title */}
          <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-800">To LOVE-Ru Wiki</h2>
              <button
                onClick={() => {
                  const sidebar = document.querySelector(".sidebar");
                  const mainContent = document.querySelector(".ml-64");
                  sidebar?.classList.toggle("-translate-x-full");
                  mainContent?.classList.toggle("ml-0");
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Others Like You Viewed Section */}
          <div className="p-0">
            <h3 className="text-sm font-bold py-2 px-4 text-purple-900 border-b border-gray-200">
              Others Like You Viewed
            </h3>

            <div>
              <a href="/nana">
                <img src="To Love Ru/nana.jpg" alt=""></img>
              </a>
              <p className="text-xs text-center font-medium text-purple-900 mt-1 line-clamp-2">
                Nana Astar Deviluke
              </p>
            </div>
            {/* Character list with square images */}
            <div className="divide-y divide-gray-200">
              {[
                {
                  name: "Kotegawa Yui",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/1/19/Yui_Kotegawa_TLRD_Manga.png",
                  route: "/yui",
                },
                {
                  name: "Yūki Mikan",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/0/08/Mikan_Yuuki_TLRD_Manga.png",
                  route: "/mikan",
                },
                {
                  name: "Tearju Lunatique",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/e/e9/Tearju_Lunatique_TLRD_Manga.png",
                  route: "/tearju",
                },
                {
                  name: "Lala Satalin Deviluke",
                  image: "To Love Ru/lala.jpg",
                  route: "/lala",
                },
                {
                  name: "Sairenji Haruna",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                  route: "/haruna",
                },
              ].map((character, index) => (
                <a
                  key={index}
                  href={character.route}
                  className="flex items-center py-2 px-4 hover:bg-gray-50 transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-12 h-12 mr-3 flex-shrink-0 bg-pink-100 rounded overflow-hidden">
                    {character.image ? (
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-pink-200 flex items-center justify-center">
                        <span className="text-pink-500 font-medium text-xs">
                          {character.name.split(" ")[0][0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="font-medium text-sm text-purple-900">
                    {character.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Top Pages this Week */}
            <h3 className="text-sm font-bold py-2 px-4 mt-2 text-purple-900 border-t border-b border-gray-200">
              Top Pages this Week
            </h3>

            <div className="p-2">
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    name: "Lala Satalin Deviluke",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/2/2c/Lala_Satalin_Deviluke_TLRD_Manga.png",
                    number: 1,
                  },
                  {
                    name: "Yuki Rito",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                    number: 2,
                  },
                  {
                    name: "Momo Deviluke",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                    number: 3,
                  },
                ].map((page, index) => (
                  <div key={index} className="relative">
                    <div className="relative">
                      <img
                        src={page.image}
                        alt={page.name}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-purple-800 text-white w-5 h-5 flex items-center justify-center text-xs">
                        {page.number}
                      </div>
                    </div>
                    <p className="text-xs font-medium text-purple-900 mt-1 line-clamp-2">
                      {page.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Left: Main text content */}
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
          <p>
            <strong>Yūki Rito</strong> is the main male protagonist of the To
            Love-Ru series, and its sequel, To Love-Ru Darkness. He is a normal
            16-year-old student of Sainan High, who has a big crush on Sairenji
            Haruna, to whom he attempted numerous times to confess to but has
            met failure each time. It was only by accident that he met Lala
            Satalin Deviluke, an alien princess he accidentally became engaged
            to.
          </p>
          <br />
          <p>
            Rito used to be on the soccer team in junior high and was fairly
            good, but quit because he was constantly helping his father with his
            manga duties, and did not want to leave his little sister Yūki Mikan
            alone in the house. Mikan comments he is very good at the most
            "useless little things", like crane and festival games (e.g. hoops,
            catching fish, squirt guns). Along with the many useless little
            things Rito is good at, he is also an accomplished florist, gardener
            and horticulturist.
          </p>
          <br />
          <p>
            Rito's nature is an extremely loving one, yet also somewhat clumsy,
            where he always ends up unintentionally molesting or groping the
            many girls in the series. He is generally very kind, thoughtful and
            has a lot of respect for women, though mostly by intention, and not
            so much by a success. Due to his shyness around girls, he is very
            awkward around women and has great difficulty maintaining his
            composure around any sort of stimulating situation. Even without
            interference from Lala's inventions, Oshizu's psychic powers, or
            Celine jumping into his face, Rito is individually clumsy enough to
            trip over absolutely nothing, and possesses extraordinary skill in
            accidentally reaching his hands or face into the breasts or other
            private parts of any girl within reach when he is falling. He is
            constantly viewed as a "pervert" but unknowingly, his kindliness is
            what wins him the affections of most of the girls in the series.
          </p>
          <br />{" "}
          <p>
            Over time he also comes to love Lala and knowing his feelings for
            Haruna, she suggests for him to be with both of them, because due to
            being engaged to her, he is next in line for the throne of Deviluke,
            which would make polygamy legal for him. In{" "}
            <strong>To Love-Ru Darkness</strong>, Lala's little sister Momo also
            falls in love with Rito and expands Lala's initial idea into her
            harem plan, where she and all the other girls who love Rito can be
            with him.
          </p>
          <br />
          <p>
            As of Chapter 61 of Darkness, Rito became Nemesis' Trans-Fusion host
            after he offered her his body as a temporary home until she
            recovered enough power to retain a physical form. Nemesis inside
            Rito knew that he has feelings for Haruna, so she created an
            atmosphere so under such circumstances they finally confessed to
            each other (Chapter 75 & 76).
          </p>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans sticky top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center mb-4 w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Yūki Rito
              </h1>
            </div>
            <div className="flex justify-center mb-4 w-full">
              <img
                src="https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png"
                alt="Yūki Rito"
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
                      結城 リト(梨斗)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Yūki Rito
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
                      15 (first year) <br />
                      16 (second year)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      October 16
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Libra
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Male
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      164.5 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      62 kg
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
                      Light brown (manga, Motto To Love-Ru onwards in anime)
                      Brownish orange (First To Love-Ru anime and OVAs)
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
                      Sainan High
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Class
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      1-A (chapters 1-48) <br />
                      2-A (chapters 49-present)
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
                      Occupation
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Highschool student
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Yūki Mikan (sister) <br />
                      Yūki Saibai (father) <br />
                      Yūki Ringo (mother) <br />
                      Celine (adoptive daughter/sister) <br />
                      Yuusaki Riko (female alter-ego) <br />
                      Gid Lucione Deviluke (father-in-law)(Pending) <br />
                      Sephie Michaela Deviluke (mother-in-law)(Pending) <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Lala Satalin Deviluke (fiancée) / (future wife) Momo Belia
                      Deviluke (harem plan candidate and mastermind)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      - Always grabs girl's private parts by accident <br />
                      - Frequently does perverted things in sleep <br />
                      - High agility beyond Earthling level <br />
                      - Immune to Charmian power <br />
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
                      To LOVE-Ru Chapter 1
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      To LOVE-Ru Episode 1
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
                      Akeno Watanabe
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black p-2 border border-[#DB49AC] ">
                      Ry McKeand
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
    </div>
  );
};
