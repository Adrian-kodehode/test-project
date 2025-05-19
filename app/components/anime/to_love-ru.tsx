import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Toloveruanime = () => {
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
          <h1 className="mb-5 italic text-3xl">To LOVE-Ru (anime)</h1>
          <p>
            <strong className="italic">To LOVE-Ru</strong> (To LOVEる (To
            Rabu-ru?)) was produced by XEBEC , directed by Takao Kato, and aired
            in Japan between April 3rd and September 25th, 2008. It consists of
            twenty-six episodes, following a different storyline than the manga,
            until the anime refocused back to the manga in future OVAs and
            season sequels. This led to negative comments, due to many episodes
            being filler. Reviews on the OVA has been slightly better since they
            adapt manga chapters.
          </p>
          <br />
          <p>
            In December 2018, North American licensor Sentai Filmworks confirmed
            an English dub covering the entire first season was being produced.
            In November 2019, Sentai Filmworks announced the English dub cast
            and that the dubbed series would release on March 31, 2020.
          </p>
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
                <a href="#characters" className="hover:underline">
                  Characters
                </a>
              </li>
              <li>
                <a href="#plot" className="hover:underline">
                  Plot
                </a>
              </li>
              <li>
                <a href="#music" className="hover:underline">
                  Music
                </a>
                <ol className="list-decimal list-inside pl-5 text-gray-600 text-xs mt-1">
                  <li>
                    <a href="#opening-theme" className="hover:underline">
                      Opening Theme
                    </a>
                  </li>
                  <li>
                    <a href="#ending-theme" className="hover:underline">
                      Ending Theme
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#episode-list" className="hover:underline">
                  Episode List
                </a>
              </li>
              <li>
                <a href="#ova-episodes" className="hover:underline">
                  OVA episodes
                </a>
              </li>
              <li>
                <a href="#receptions" className="hover:underline">
                  Receptions
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl">
            <br />
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold  border-b mt-8 mb-4"
              id="characters"
            >
              Characters
            </h2>
            <ul className="mt-2 space-y-1">
              {[
                { name: "Rito Yuuki", route: "/rito" },
                { name: "Lala Satalin Deviluke", route: "/lala" },
                { name: "Haruna Sairenji", route: "/haruna" },
                { name: "Yami", route: "/yami" },
                { name: "Mikan Yuuki", route: "/mikan" },
                { name: "Run Elsie Jewelria", route: "/run" },
                { name: "Ren Elsie Jewelria", route: "#" },
                { name: "Saki Tenjouin", route: "/saki" },
                { name: "Yui Kotegawa", route: "/yui" },
                { name: "Gid Lucione Deviluke", route: "#" },
                { name: "Zastin", route: "#" },
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
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="plot">
              Plot
            </h2>
            <div className="flex flex-row items-start gap-6">
              <div className="flex-1">
                <p>
                  Timid 16-year-old Rito Yuuki has yet to profess his love to
                  Haruna Sairenji—a classmate and subject of his infatuation
                  since junior high. Sadly, his situation becomes even more
                  challenging when one night, a mysterious, stark-naked girl
                  crash-lands right on top of a bathing Rito.
                </p>
                <br />
                <p>
                  To add to the confusion, Rito discovers that the girl, Lala
                  Satalin Deviluke, is the crown princess of an alien empire and
                  has run away from her home. Despite her position as the
                  heiress to the most dominant power in the entire galaxy, Lala
                  is surprisingly more than willing to marry the decidedly
                  average Rito in order to avoid an unwanted political marriage.
                </p>
              </div>
              <div className="flex-shrink-0 w-56">
                <img
                  src="To Love Ru/toloveruanimelogo.jpg"
                  alt="To LOVE-Ru Anime Logo"
                  className="w-full object-contain rounded"
                />
              </div>
            </div>
            <br />
            <p>
              To LOVE-Ru depicts Rito's daily struggles with the bizarre chaos
              that begins upon the arrival of Lala. With an evergrowing legion
              of swooning beauties that continuously foil his attempted
              confessions to Haruna, To LOVE-Ru is a romantic comedy full of
              slapstick humor, sexy girls, and outlandishly lewd moments that
              defy the laws of physics.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="music">
              Music
            </h2>
            <h3 className="font-bold">Opening Theme</h3>
            <li className="ml-8">
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black font-bold"
              >
                "Forever We Can Make It"
              </a>{" "}
              by Thyme
            </li>
            <br />
            <h3 className="font-bold">Ending Theme</h3>
            <li className="ml-8">
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black font-bold"
              >
                "Lucky Tune"
              </a>{" "}
              (ラッキーチューン,Rakkī Chūn) by Anna (1 - 13, 26)
            </li>
            <li className="ml-8">
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black font-bold"
              >
                "Kiss no Yukue"
              </a>{" "}
              (kissの行方), by Anna (14 - 25).
            </li>
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="chapters">
              Chapters
            </h2>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 1 (Chapter 1-7)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 1:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Girl Who Fell From the Sky
                  </a>
                </li>
                <li>
                  Chapter 2:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Great Escape of Love
                  </a>
                </li>
                <li>
                  Chapter 3:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Messenger From the Galaxy
                  </a>
                </li>
                <li>
                  Chapter 4:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    After School Memory
                  </a>
                </li>
                <li>
                  Chapter 5:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Approaching
                  </a>
                </li>
                <li>
                  Chapter 6:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Targeted Girl
                  </a>
                </li>
                <li>
                  Chapter 7:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Intruder From Space
                  </a>
                </li>
              </ul>

              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_1.jpg"
                    alt="To LOVE-Ru Volume 1"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_1.jpg"
                      alt="To LOVE-Ru Volume 1 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 2 (Chapter 8-16)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 8:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    True Form
                  </a>
                </li>
                <li>
                  Chapter 9:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Shopping Panic
                  </a>
                </li>
                <li>
                  Chapter 10:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Confession, Again!?
                  </a>
                </li>
                <li>
                  Chapter 11:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Workplace, A Battlefield!?
                  </a>
                </li>
                <li>
                  Chapter 12:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Midsummer Paparazzi
                  </a>
                </li>
                <li>
                  Chapter 13:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Desire That Whirls Under Water
                  </a>
                </li>
                <li>
                  Chapter 14:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Idiot Typhoon
                  </a>
                </li>
                <li>
                  Chapter 15:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Steamy and Heart Thumping Emotions of a Traveler
                  </a>
                </li>
                <li>
                  Chapter 16:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Dare of Fate
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_2.jpg"
                    alt="To LOVE-Ru Volume 2"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_2.jpg"
                      alt="To LOVE-Ru Volume 2 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 3 (Chapter 17-25)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 17:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Love Story on the Shore
                  </a>
                </li>
                <li>
                  Chapter 18:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Charge! A Secret Garden
                  </a>
                </li>
                <li>
                  Chapter 19:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The One I Love
                  </a>
                </li>
                <li>
                  Chapter 20:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Transfer Student Who Brings A Storm
                  </a>
                </li>
                <li>
                  Chapter 21:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Witnessing
                  </a>
                </li>
                <li>
                  Chapter 22:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Rito .vs. Ren
                  </a>
                </li>
                <li>
                  Chapter 23:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Scramble for the Lips
                  </a>
                </li>
                <li>
                  Chapter 24:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Time of the Animals
                  </a>
                </li>
                <li>
                  Chapter 25:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Queen's Temptation
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_3.jpg"
                    alt="To LOVE-Ru Volume 3"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_3.jpg"
                      alt="To LOVE-Ru Volume 3 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 4 (Chapter 26-34)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 26:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sainan Fest is Full of Disaster
                  </a>
                </li>
                <li>
                  Chapter 27:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Rito's Long Day
                  </a>
                </li>
                <li>
                  Chapter 28:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Fearful Invention
                  </a>
                </li>
                <li>
                  Chapter 29:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Small Adventure
                  </a>
                </li>
                <li>
                  Chapter 30:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Ladies Be Modest!
                  </a>
                </li>
                <li>
                  Chapter 31:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Don't Be Mad
                  </a>
                </li>
                <li>
                  Chapter 32:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    I Want To Know More
                  </a>
                </li>
                <li>
                  Chapter 33:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Get the Present!
                  </a>
                </li>
                <li>
                  Chapter 34:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Heavy Christmas
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_4.jpg"
                    alt="To LOVE-Ru Volume 4"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_4.jpg"
                      alt="To LOVE-Ru Volume 4 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 5 (Chapter 35-43)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 35:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Golden Darkness
                  </a>
                </li>
                <li>
                  Chapter 36:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Force of the Darkness
                  </a>
                </li>
                <li>
                  Chapter 37:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Princess vs Assassin
                  </a>
                </li>
                <li>
                  Chapter 38:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Darkness Lightens Up?
                  </a>
                </li>
                <li>
                  Chapter 39:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Slippery Transformation
                  </a>
                </li>
                <li>
                  Chapter 40:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Villainous Valentine
                  </a>
                </li>
                <li>
                  Chapter 41:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Chocolates and Panic
                  </a>
                </li>
                <li>
                  Chapter 42:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Confession
                  </a>
                </li>
                <li>
                  Chapter 43:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Wan-derful Life
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_5.jpg"
                    alt="To LOVE-Ru Volume 5"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_5.jpg"
                      alt="To LOVE-Ru Volume 5 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 6 (Chapter 44-52)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 44:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Wan-derful Life Part 2
                  </a>
                </li>
                <li>
                  Chapter 45:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Dark Medical Clinic
                  </a>
                </li>
                <li>
                  Chapter 46:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Shocking Birthday
                  </a>
                </li>
                <li>
                  Chapter 47:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Wild Youngster
                  </a>
                </li>
                <li>
                  Chapter 48:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Resolution
                  </a>
                </li>
                <li>
                  Chapter 49:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    One More Time, Starting From Here
                  </a>
                </li>
                <li>
                  Chapter 50:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Greatest Class In History
                  </a>
                </li>
                <li>
                  Chapter 51:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Manifest of Charm
                  </a>
                </li>
                <li>
                  Chapter 52:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Best Ladies Man
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_6.jpg"
                    alt="To LOVE-Ru Volume 6"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_6.jpg"
                      alt="To LOVE-Ru Volume 6 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 7 (Chapter 53-61)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 53:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Person Haruna Likes
                  </a>
                </li>
                <li>
                  Chapter 54:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Welcome To The Yuuki Family!
                  </a>
                </li>
                <li>
                  Chapter 55:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sneaking Around In The Old School Building
                  </a>
                </li>
                <li>
                  Chapter 56:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Approaching Fear
                  </a>
                </li>
                <li>
                  Chapter 57:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Old School Building's Prisoners
                  </a>
                </li>
                <li>
                  Chapter 58:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Unexpected Ending
                  </a>
                </li>
                <li>
                  Chapter 59:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Loving Queen
                  </a>
                </li>
                <li>
                  Chapter 60:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Troublesome, Isn't It?
                  </a>
                </li>
                <li>
                  Chapter 61:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Yami-Yami Fashion
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_7.jpg"
                    alt="To LOVE-Ru Volume 7"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_7.jpg"
                      alt="To LOVE-Ru Volume 7 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 8 (Chapter 62-70)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 62:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Like Lovers at the Summer Festival
                  </a>
                </li>
                <li>
                  Chapter 63:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    In the Name of Revenge!
                  </a>
                </li>
                <li>
                  Chapter 64:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Strange Haruna
                  </a>
                </li>
                <li>
                  Chapter 65:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Reclaim The Body
                  </a>
                </li>
                <li>
                  Chapter 66:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Swim Dolphin-Kun
                  </a>
                </li>
                <li>
                  Chapter 67:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Bizarre Forest's Inhabitants
                  </a>
                </li>
                <li>
                  Chapter 68:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Hearthrob Survival
                  </a>
                </li>
                <li>
                  Chapter 69:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Far Away From Earth
                  </a>
                </li>
                <li>
                  Chapter 70:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Night Tutor
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_8.jpg"
                    alt="To LOVE-Ru Volume 8"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_8.jpg"
                      alt="To LOVE-Ru Volume 8 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 9 (Chapter 71-79)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 71:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    An Enemy's Enemy Is An Ally!?
                  </a>
                </li>
                <li>
                  Chapter 72:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Strongest Girl in the Universe
                  </a>
                </li>
                <li>
                  Chapter 73:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Bad Mood? Good Mood?
                  </a>
                </li>
                <li>
                  Chapter 74:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Demerit Points!!??
                  </a>
                </li>
                <li>
                  Chapter 75:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Strange Connection
                  </a>
                </li>
                <li>
                  Chapter 76:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sleepover Party
                  </a>
                </li>
                <li>
                  Chapter 77:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Nighttime Terror
                  </a>
                </li>
                <li>
                  Chapter 78:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Crisis
                  </a>
                </li>
                <li>
                  Chapter 79:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Choice
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_9.jpg"
                    alt="To LOVE-Ru Volume 9"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_9.jpg"
                      alt="To LOVE-Ru Volume 9 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 10 (Chapter 80-88)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 80:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Master Of Love
                  </a>
                </li>
                <li>
                  Chapter 81:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Love Queen!?
                  </a>
                </li>
                <li>
                  Chapter 82:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Transformation
                  </a>
                </li>
                <li>
                  Chapter 83:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Love + Sports= ?!
                  </a>
                </li>
                <li>
                  Chapter 84:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Hidden Face Of The Tournament
                  </a>
                </li>
                <li>
                  Chapter 85:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Let's Play ♪
                  </a>
                </li>
                <li>
                  Chapter 86:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Oh My Little Sister!
                  </a>
                </li>
                <li>
                  Chapter 87:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    War At The Public Bathhouse
                  </a>
                </li>
                <li>
                  Chapter 88:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    War At The Public Bathhouse Part 2
                  </a>
                </li>
                <li>
                  Omake:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Exploding Heat Girl Magical Kyouko Flame!!
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_10.jpg"
                    alt="To LOVE-Ru Volume 10"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_10.jpg"
                      alt="To LOVE-Ru Volume 10 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 11 (Chapter 89-97)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 89:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    New Student Reborn
                  </a>
                </li>
                <li>
                  Chapter 90:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Let Us Serve You
                  </a>
                </li>
                <li>
                  Chapter 91:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Straight Feelings
                  </a>
                </li>
                <li>
                  Chapter 92:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Rare Visitor Comes
                  </a>
                </li>
                <li>
                  Chapter 93:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest
                  </a>
                </li>
                <li>
                  Chapter 94:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest 2
                  </a>
                </li>
                <li>
                  Chapter 95:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest 3
                  </a>
                </li>
                <li>
                  Chapter 96:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest 4
                  </a>
                </li>
                <li>
                  Chapter 97:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest 5
                  </a>
                </li>
                <li>
                  Omake:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Bath Love Big Trouble♡
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_11.jpg"
                    alt="To LOVE-Ru Volume 11"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_11.jpg"
                      alt="To LOVE-Ru Volume 11 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 12 (Chapter 98-106)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 98:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Quest Final
                  </a>
                </li>
                <li>
                  Chapter 99:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Proportions That Make Up The Heart
                  </a>
                </li>
                <li>
                  Chapter 100:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble X Trouble X To Love Ru
                  </a>
                </li>
                <li>
                  Chapter 101:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Maiden-Esque Boy
                  </a>
                </li>
                <li>
                  Chapter 102:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sexual Conversion
                  </a>
                </li>
                <li>
                  Chapter 103:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    I'll Become An Idol
                  </a>
                </li>
                <li>
                  Chapter 104:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Siblings
                  </a>
                </li>
                <li>
                  Chapter 105:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Wonderful Love
                  </a>
                </li>
                <li>
                  Chapter 106:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    You Are The Lovely Cinderella
                  </a>
                </li>
                <li>
                  Omake:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Day With Maron
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_12.jpg"
                    alt="To LOVE-Ru Volume 12"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_12.jpg"
                      alt="To LOVE-Ru Volume 12 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 13 (Chapter 107-115)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 107:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Ticking Sound of Love
                  </a>
                </li>
                <li>
                  Chapter 108:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Twin Escape
                  </a>
                </li>
                <li>
                  Chapter 109:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Double-Vision Glasses
                  </a>
                </li>
                <li>
                  Chapter 110:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    On The Night Of The Festival
                  </a>
                </li>
                <li>
                  Chapter 111:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Under The Fireworks
                  </a>
                </li>
                <li>
                  Chapter 112:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Still At The Festival
                  </a>
                </li>
                <li>
                  Chapter 113:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Beach Girls
                  </a>
                </li>
                <li>
                  Chapter 114:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Watermelon Panic
                  </a>
                </li>
                <li>
                  Chapter 115:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Exercise Elegy
                  </a>
                </li>
                <li>
                  Omake:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Legend of the Principal in Top Shape
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_13.jpg"
                    alt="To LOVE-Ru Volume 13"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_13.jpg"
                      alt="To LOVE-Ru Volume 13 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>

            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 14 (Chapter 116-124)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 116:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Dandy Man Dog
                  </a>
                </li>
                <li>
                  Chapter 117:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Predicting Love
                  </a>
                </li>
                <li>
                  Chapter 118:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Power Of Love
                  </a>
                </li>
                <li>
                  Chapter 119:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The First Step In Falling In Love
                  </a>
                </li>
                <li>
                  Chapter 120:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Magic Love Potion♡
                  </a>
                </li>
                <li>
                  Chapter 121:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Metamorphosis
                  </a>
                </li>
                <li>
                  Chapter 122:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Friends Of Love
                  </a>
                </li>
                <li>
                  Chapter 123:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Hostile Feelings
                  </a>
                </li>
                <li>
                  Chapter 124:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Let's Go To Outer-Space
                  </a>
                </li>
                <li>
                  Omake:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Delusional Chocolate ♡
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_14.jpg"
                    alt="To LOVE-Ru Volume 14"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_14.jpg"
                      alt="To LOVE-Ru Volume 14 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 15 (Chapter 125-133)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 125:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Planet Mistletoe
                  </a>
                </li>
                <li>
                  Chapter 126:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    In The Fog
                  </a>
                </li>
                <li>
                  Chapter 127:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Germination
                  </a>
                </li>
                <li>
                  Chapter 128:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Flower Petal Princess
                  </a>
                </li>
                <li>
                  Chapter 129:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Pollen Telepathy
                  </a>
                </li>
                <li>
                  Chapter 130:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    For Whom The Bell Rings
                  </a>
                </li>
                <li>
                  Chapter 131:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Rebellious Queen
                  </a>
                </li>
                <li>
                  Chapter 132:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Returning Of The Queen
                  </a>
                </li>
                <li>
                  Chapter 133:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Game
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_15.jpg"
                    alt="To LOVE-Ru Volume 15"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_15.jpg"
                      alt="To LOVE-Ru Volume 15 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 16 (Chapter 134-142)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 134:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Game 2
                  </a>
                </li>
                <li>
                  Chapter 135:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trouble Game 3
                  </a>
                </li>
                <li>
                  Chapter 136:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Boys and Chocolate and... Me
                  </a>
                </li>
                <li>
                  Chapter 137:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sweet Feelings are a Taste of Chocolate
                  </a>
                </li>
                <li>
                  Chapter 138:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Happening Weather
                  </a>
                </li>
                <li>
                  Chapter 139:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Trance Of Feelings
                  </a>
                </li>
                <li>
                  Chapter 140:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Footsteps of Spring
                  </a>
                </li>
                <li>
                  Chapter 141:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Ignorance Is Love?
                  </a>
                </li>
                <li>
                  Chapter 142:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Draft
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_16.jpg"
                    alt="To LOVE-Ru Volume 16"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_16.jpg"
                      alt="To LOVE-Ru Volume 16 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 17 (Chapter 143-152)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 143:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Hand & Tail
                  </a>
                </li>
                <li>
                  Chapter 144:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Ghost Versus
                  </a>
                </li>
                <li>
                  Chapter 145:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Things Projected In Those Eyes
                  </a>
                </li>
                <li>
                  Chapter 146:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Those Warped Into The Midst Of Darkness
                  </a>
                </li>
                <li>
                  Chapter 147:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Girl's Feelings
                  </a>
                </li>
                <li>
                  Chapter 148:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Silent Island
                  </a>
                </li>
                <li>
                  Chapter 149:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Smiling Cat
                  </a>
                </li>
                <li>
                  Chapter 150:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Determined Cat
                  </a>
                </li>
                <li>
                  Chapter 151:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Friends
                  </a>
                </li>
                <li>
                  Chapter 152:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Rito Style
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_17.jpg"
                    alt="To LOVE-Ru Volume 17"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_17.jpg"
                      alt="To LOVE-Ru Volume 17 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 18 (Chapter 153-162)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 153:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Troubling Rampage?
                  </a>
                </li>
                <li>
                  Chapter 154:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Loving Idol
                  </a>
                </li>
                <li>
                  Chapter 155:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Doki-Doki E-Mail
                  </a>
                </li>
                <li>
                  Chapter 156:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Grow Bigger ♪
                  </a>
                </li>
                <li>
                  Chapter 157:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    All Disquiet on the "Sister" Front
                  </a>
                </li>
                <li>
                  Chapter 158:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A False Love?
                  </a>
                </li>
                <li>
                  Chapter 159:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Summer Memories
                  </a>
                </li>
                <li>
                  Chapter 160:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    That Love... Those Feelings...
                  </a>
                </li>
                <li>
                  Chapter 161:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    That Important Person
                  </a>
                </li>
                <li>
                  Chapter 162:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    I Love You
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() => setShowImageModal(true)}
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love-Ru_Volume_18.jpg"
                    alt="To LOVE-Ru Volume 18"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {showImageModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setShowImageModal(false)}
                  >
                    <img
                      src="To Love Ru/To_Love-Ru_Volume_18.jpg"
                      alt="To LOVE-Ru Volume 18 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Special Chapters
            </h3>
            <li>
              Chapter 162.5:{" "}
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Afterwards
              </a>
            </li>
            <br />
          </div>
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-[#F9D910] bg-[#DB49AC] text-xl italic font-bold p-2 ">
                To LOVE-Ru
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="To Love Ru/toloveruanime.jpg"
                alt="Lala Satalin Deviluke"
                className="w-80 h-80 object-contain border-2 border-[#DB49AC] "
                onClick={() => setShowImageModal(true)}
              />
              {showImageModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                  onClick={() => setShowImageModal(false)}
                >
                  <img
                    src="To Love Ru/toloveruanime.jpg"
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
                      To LOVEる
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Rōmaji
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      To Rabu ru
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
                      Geneon Universal Entertainment, TBS
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Aired
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      April 4, 2008 to September 26, 2008
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Episodes
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      26
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
                      Comedy, Ecchi, Harem, Romance, School, Sci-Fi
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
