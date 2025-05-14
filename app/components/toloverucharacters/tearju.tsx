import React from "react";
import { Link } from "react-router-dom";

export const Tearju = () => {
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
              <li className="py-3 px-4 hover:bg-pink-600 relative group cursor-pointer">
                    MEDIA
                    <div className="absolute left-0 top-full min-w-[180px] bg-white text-black shadow-lg rounded z-20 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
                      <ul>
                      {/* Manga */}
                      <li className="relative group/manga">
                        <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                        Manga
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[180px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/manga:opacity-100 group-hover/manga:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness</li>
                        </ul>
                        </div>
                      </li>
                      {/* Anime */}
                      <li className="relative group/anime">
                        <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                        Anime
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[200px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/anime:opacity-100 group-hover/anime:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">Motto To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness 2nd</li>
                        </ul>
                        </div>
                      </li>
                      {/* Games */}
                      <li className="relative group/games">
                        <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                        Games
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[240px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/games:opacity-100 group-hover/games:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Battle</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: True</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Idol</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Gravure</li>
                        </ul>
                        </div>
                      </li>
                      </ul>
                    </div>
                    </li>
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
      <div className="bg-white flex flex-row items-start justify-center min-h-screen">
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
                    route: "/lala",
                  },
                  {
                    name: "Yuki Rito",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                    number: 2,
                    route: "/rito",
                  },
                  {
                    name: "Momo Deviluke",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                    number: 3,
                    route: "/momo",
                  },
                ].map((page, index) => (
                  <Link
                    key={index}
                    to={page.route}
                    className="relative block"
                    style={{ textDecoration: "none" }}
                  >
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Left: Main text content */}
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
          <h1 className="mb-5 text-3xl">Tearju Lunatique</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                {" "}
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <p>
            <strong>Tearju Lunatique</strong> (ティアーユ＝ルナティーク Tiāyu
            Runatīku?) is{" "}
            <a href="/yami" className="text-[purple] underline">
              Yami (Golden Darkness)
            </a>{" "}
            and{" "}
            <a href="/mea" className="text-[purple] underline">
              Kurosaki Mea
            </a>{" "}
            creator, as she used her own cells in order to create Yami but
            didn't do the same for Mea. She is a genius in Universe
            Biotechnology and has been since she was a teenager. She takes the
            role of a klutzy and beautiful homeroom teacher at Rito's school in
            the later chapters of Darkness. She is aware of Yami at school and
            tries to get close to her like before she left her; she is also
            aware of her feelings for Rito.
          </p>
          <nav className="w-44 mt-5 bg-white text-start border rounded mb-6">
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <span className="font-semibold text-gray-700 flex items-center text-sm">
                <svg
                  className="w-4 h-4 mr-1 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Contents
              </span>
              <button className="text-xs text-[purple] hover:underline font-semibold">
                [hide]
              </button>
            </div>
            <ol className="list-decimal list-inside px-5 py-3 text-gray-700 text-sm space-y-1">
              <li>
                <a href="#appearance" className="hover:underline">
                  {" "}
                  Appearance
                </a>
              </li>
              <li>
                <a href="#personaøity" className="hover:underline">
                  Personality
                </a>
              </li>
              <li>
                <a href="#history" className="hover:underline">
                  History
                </a>
              </li>
              <li>
                <a href="#etymology" className="hover:underline">
                  Etymology
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
              Appearance
            </h2>
            <p>
              Tearju is a very curvaceous woman with long blond hair and green
              eyes. She also wears glasses. Most characters noticed that she
              resembles Yami a lot (being her genetic origin). She often wears
              black clothing such as a suit and a skirt. Underneath that suit is
              a white under shirt with a high collar with a green brooch.
              Similar to her friend, she also tends to wear skimpy, lacy panties
              and bras, usually either purple or black, that are usually shown
              anytime she winds up in a perverted situation. Out of all the
              alien characters, she appears to be more human than all the
              others.
            </p>
            <br />
            <p>
              Her 3-sizes are B96-W56-H90, which makes her the bustiest female
              in series.
            </p>
            <br />
          </div>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="personality">
              Personality
            </h2>
            <p>
              Tearju's personality can be described to be much like Rito. She is
              very kind to those around her. But she can also be shy and clumsy,
              both physically and socially, and can sometimes end up in awkward
              moments. But despite this she is considered to be very smart and
              knowledgeable.
            </p>
            <br />
            <p>
              Tearju cares deeply for Yami like a daughter/little sister and
              wants to be close to her like before, but doesn't quite know how
              to approach her after being separated from her for so long and
              having her personality change so drastically. She also considers
              Mea her little sister and would also want to be close to her, but
              Mea greatly denies and rejects it, as was apparently brought up to
              do so.
            </p>
            <br />
          </div>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="history">
              History
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img
                  src="To Love Ru/tearjuart.jpg"
                  alt=""
                  className="w-60 rounded"
                />
                <div className="text-xs text-gray-600 mt-1 ">
                  An old photo of the young Tearju and Mikado.
                </div>
              </div>
              <div>
                <p>
                  Sometime in her youth, Tearju studied Biotechnology. She was
                  also friends with Ryoko Mikado in school and went their
                  separate ways at some point. Years later, she was part of
                  Eden, an organization that would create Eve (later named
                  Yami). Tearju raised her like a little sister, but the
                  organization had plans to use Eve as weapon, and chased Tearju
                  away. In the aftermath, Tearju had escaped and went into
                  hiding, but is aware of the fall of the organization and that
                  Eve became known as the assassin Golden Darkness.
                </p>
                <br />
                <p>
                  During the events of To-Love-Ru Darkness, Tearju was found by
                  Mikado, who informed her of Yami's current position. Tearju
                  was brought to Earth and is currently a teacher at Sainan High
                  hoping to establish a better relationship with Yami and
                  perhaps help Mea embrace humanity as well.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="etymology">
              Etymology
            </h2>
            <p>
              Her last name, 'Lunatique', is the French word for 'moody', in
              relation to her previous life as a 'mad scientist'. It is also a
              play on words of the word 'lunatic'.
            </p>
            <br />
          </div>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans sticky top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Tearju Lunatique
              </h1>
            </div>
            <div className="flex justify-center  w-full">
              <img
                src="/To Love Ru/tearju.jpg"
                alt="Tearju Lunatique"
                className="w-80 h-80 object-cover border-2 border-[#DB49AC] "
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      ティアーユ＝ルナティーク
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Tearju Lunatique
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Unknown
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Unknown (likely the same as Ryoko Mikado)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Febuary 24th
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Pisces
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Female
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      167 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      58 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Unknown
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Blonde
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Green
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Unknown
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      - Educated from unknown school from another planet. <br />
                      - Genius in Biotechnology
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      - Sainan High School Teacher <br />
                      - Scientist and Biotechnician (formerly) <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Yami (Golden Darkness) <br />
                      (clone/creation/daughter figure) <br />
                      Mea Kurosaki (creation/daughter figure) <br />
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      - Unlucky <br />
                      - Clumsy <br />
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Darkness Chapter 13 in flashback <br />
                      Darkness Chapter 14 in person <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Darkness Episode 9 in flashback <br />
                      Darkness Episode 10 in person <br />
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Misato Fukuen
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Katelyn Barr
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
