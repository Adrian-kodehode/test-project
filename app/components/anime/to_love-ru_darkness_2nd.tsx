import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Toloverudarkness2ndanime = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 min-w-[180px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/manga:opacity-100 group-hover/manga:pointer-events-auto pointer-events-none transition-opacity duration-200">
                      <ul>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_manga">To LOVE-Ru</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_manga">
                            To LOVE-Ru Darkness
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Anime */}
                  <li className="relative group/anime">
                    <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                      Anime
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 min-w-[200px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/anime:opacity-100 group-hover/anime:pointer-events-auto pointer-events-none transition-opacity duration-200">
                      <ul>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_anime">To LOVE-Ru</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/motto_to_love-ru_anime">
                            Motto To LOVE-Ru
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_anime">
                            To LOVE-Ru Darkness
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness2ndanime">
                            To LOVE-Ru Darkness 2nd
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Games */}
                  <li className="relative group/games">
                    <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                      Games
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 min-w-[240px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/games:opacity-100 group-hover/games:pointer-events-auto pointer-events-none transition-opacity duration-200">
                      <ul>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Battle
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: True
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Idol
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Gravure
                        </li>
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
                      <div className="absolute top-0 left-0 bg-purple-800 text-[#F9D910] w-5 h-5 flex items-center justify-center text-xs">
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
          <h1 className="mb-5 italic text-3xl">To LOVE-Ru Darkness 2nd</h1>
          <p>
            <strong className="italic">To LOVE-Ru Darkness 2nd</strong> (To
            LOVEる -とらぶる- ダークネス2nd Toraburu Dākunesu Sekando?) is the
            second season of to the{" "}
            <a
              href="/to_love-ru_darkness"
              className="text-[purple] underline hover:text-black"
            >
              To LOVE-Ru Darkness
            </a>{" "}
            anime adaption. The production was announced on December 21, 2014.
            It was officially aired on July 6, 2015.
          </p>
          <br />

          <nav className="w-44 mt-5 bg-white border rounded mb-6">
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
                <a href="#plot" className="hover:underline">
                  Plot
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:underline">
                  Characters
                </a>
              </li>
              <li>
                <a href="#music" className="hover:underline">
                  Music
                </a>
              </li>
              <li>
                <a href="#staff-credits" className="hover:underline">
                  Staff Credits
                </a>
              </li>

              <li>
                <a href="#episode-list" className="hover:underline">
                  Episode List
                </a>
                <ol className="list-decimal list-inside ml-5">
                  <li>
                    <a href="#episode-list">
                      To Love-Ru Darkness 2nd (2015 TV series)
                    </a>
                  </li>
                  <li>
                    <a href="#episode-list">
                      To Love-Ru Darkness 2nd (2015 OVA series)
                    </a>
                  </li>
                </ol>
              </li>

              <li>
                <a href="#external-links" className="hover:underline">
                  External links
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl">
            <br />
          </div>

          <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="plot">
            Plot
          </h2>
          <p>
            The dispassionate, transforming assassin{" "}
            <a
              href="/yami"
              className="text-[purple] underline hover:text-black"
            >
              Yami
            </a>{" "}
            returns to peer deeper into the mysteries surrounding her new life,
            while a sinister{" "}
            <a
              href="/nemesis"
              className="text-[purple] underline hover:text-black"
            >
              Nemesis
            </a>{" "}
            manipulates her younger sister{" "}
            <a href="/mea" className="text-[purple] underline hover:text-black">
              Mea
            </a>{" "}
            from the shadows. Along with their newly discovered mother,{" "}
            <a
              href="/tearju"
              className="text-[purple] underline hover:text-black"
            >
              Tearju
            </a>
            , this previously estranged family quikly becomes the center of
            everyone's attetion. On the other hand,{" "}
            <a
              href="/momo"
              className="text-[purple] underline hover:text-black"
            >
              Princess Momo
            </a>
            's{" "}
            <a href="/#" className="text-[purple] underline hover:text-black">
              Harem Plan
            </a>{" "}
            stands on shaky ground amidst{" "}
            <a
              href="/rito"
              className="text-[purple] underline hover:text-black"
            >
              Rito
            </a>
            's inablilty to confess to his longtime cruch{" "}
            <a
              href="/haruna"
              className="text-[purple] underline hover:text-black"
            >
              Haruna
            </a>{" "}
            who has grown feeling of her own.
          </p>
          <br />
          <p>
            But things aren't as peaceful as they seem, an evil force looms
            amidst the innocuous commotion, threatening the eclipse the love,
            happiness, and friendship of Rito and his harem. Only the light of
            love can hope to banish the shadow.
          </p>
          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold  border-b mt-8 mb-4"
              id="characters"
            >
              Characters
            </h2>
            <ul className="mt-2 space-y-1">
              {[
                { name: "Yuuki Rito", route: "/rito" },
                { name: "Momo Belia Deviluke", route: "/momo" },
                { name: "Kurosaki Mea", route: "/mea" },
                { name: "Nemesis", route: "/nemesis" },
                { name: "Nana Astar Deviluke", route: "/nana" },
                { name: "Lala Satalin Deviluke", route: "/lala" },
                { name: "Sairenji Haruna", route: "/haruna" },
                { name: "Yami", route: "/yami" },
                { name: "Yuuki Mikan", route: "/mikan" },
                { name: "Kotegawa Yui", route: "/yui" },
              ].map((char) => (
                <li key={char.route} className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-black mr-2 inline-block" />
                  <Link
                    to={char.route}
                    className="text-[purple] hover:underline"
                  >
                    {char.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="music">
              Music
            </h2>
            <p>
              <strong>Opening:</strong> Secret Arms by Ray
            </p>
            <p>
              <strong>Ending:</strong> Garden by Mami Kawada
            </p>

            <h2
              className="text-2xl font-bold border-b mt-8 mb-4"
              id="staff-credits"
            >
              Staff Credits
            </h2>
            <div className="flex flex-row items-start gap-6">
              <div className="flex-1">
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Original Creator:</strong> Yabuki Kentarō (art),
                    Hasemi Saki (story)
                  </li>
                  <li>
                    <strong>Director:</strong> Atsushi Ootsuki
                  </li>
                  <li>
                    <strong>Music:</strong> Takeshi Watanabe
                  </li>
                  <li>
                    <strong>Original Character Design:</strong> Yabuki Kentarō
                  </li>
                  <li>
                    <strong>Character Design:</strong> Yūichi Oka
                  </li>
                  <li>
                    <strong>Art Director:</strong> Nariyuki Ogi
                  </li>
                  <li>
                    <strong>Animation Producer:</strong> Takumi Kusakabe
                  </li>
                  <li>
                    <strong>Color Design:</strong> Tamae Matsuoka
                  </li>
                  <li>
                    <strong>Art Design:</strong> Nariyuki Ogi
                  </li>
                  <li>
                    <strong>Sound Director:</strong> Jin Aketagawa
                  </li>
                  <li>
                    <strong>Producer:</strong> Kazumasa Sanjouba, Kentarō
                    Hattori, Nobuhiro Wakayama, Tsuyoshi Tanaka
                  </li>
                </ul>
                <br />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="To Love Ru/toloverudarkness2ndlogo.jpg"
                  alt="To LOVE-Ru Darkness 2nd Logo"
                  className="w-44 h-auto rounded shadow border border-gray-200 bg-white"
                  style={{ minWidth: "180px", maxWidth: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-[#F9D910] bg-[#DB49AC] text-xl italic font-bold p-2 ">
                To LOVE-Ru Darkness 2nd
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="To Love Ru/toloverudarkness2nd.jpg"
                alt="To LOVE-Ru Darkness 2nd"
                className="w-80 h-80 object-contain border-2 border-[#DB49AC] cursor-pointer"
                onClick={() => setShowImageModal(true)}
              />
              {showImageModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                  onClick={() => setShowImageModal(false)}
                >
                  <img
                    src="To Love Ru/toloverudarkness2nd.jpg"
                    alt="To LOVE-Ru Darkness 2nd"
                    className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-[#DB49AC] bg-white"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    className="absolute top-8 right-8 text-white text-3xl font-bold"
                    onClick={() => setShowImageModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-full border-separate border-spacing-0">
                <tbody>
                  {/* Characteristics */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-[#F9D910] font-bold p-2"
                    >
                      Information
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 w-1/3 border border-[#9C2E7A] ">
                      Japanese
                    </td>
                    <td className="bg-white text-center  text-black p-2 border border-[#DB49AC] ">
                      To LOVEる -とらぶる- ダークネス2nd
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Rōmaji
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      To Raburu -Toraburu- Dākunesu Sekando
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Studio(s)
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Xebec
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Licencor[s]
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Sentai Filmworks
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Producer[s]
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Magic Capsual
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Director
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Atsushi Ootsuki
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Aired
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      July 7, 2015 to September 29, 2015
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Episodes
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      14
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Duration
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      24 minutes per episode
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Finished
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Genre[s]
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Comedy, Ecchi, Harem, Romance, School, Sci-Fi, Shōnen
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Ratings
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      R+ - Mild Nudity
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-40 right-6 z-50 bg-[#DB49AC] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-500 focus:outline-none ${
          showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
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
    </div>
  );
};
