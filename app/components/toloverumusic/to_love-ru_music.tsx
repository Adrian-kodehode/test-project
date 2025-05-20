import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Toloverumusic = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                          <Link to="/to_love-ru_darkness_battle_ecstasy_game">
                            To Love-Ru Darkness Battle Ecstasy
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_princess_game">
                            To LOVE-Ru Darkness: True Princess
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Idol Revolution
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Gravure Chances
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
          <h1 className="mb-5 italic text-3xl">To LOVE-Ru Music</h1>
          <p>
            A list of all Opening and Ending themes, insert songs, in the To
            Love-Ru series.
          </p>
          <br />
          <p>
            The character songs are listed in chronological order of
            discography. The list does not include non-vocal tracks, whitch were
            composed by Takashi Watanbe.
          </p>

          <nav className="w-80 mt-5 bg-white border rounded mb-6">
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
                <a href="#development" className="hover:underline">
                  OP's and ED's
                </a>
                <ol>
                  <li>
                    <a href="#">To LOVE-Ru</a>
                  </li>
                  <li>
                    <a href="#">Motto To LOVE-Ru</a>
                  </li>
                  <li>
                    <a href="#">To LOVE-Ru Darkness</a>
                  </li>
                  <li>
                    <a href="#">To LOVE-Ru Darkness 2nd</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#">Character Songs</a>
                <ol>
                  <li>
                    <a href="#">Variety CD 1 (July 4 2008)</a>
                  </li>
                  <li>
                    <a href="#">Variety CD 2 (August 22 2008)</a>
                  </li>
                  <li>
                    <a href="#">Variety CD 3 (October 3 2008)</a>
                  </li>
                  <li>
                    <a href="#">Variety CD 4 (October 24 2008)</a>
                  </li>
                  <li>
                    <a href="#">Variety CD 5 (November 28 2008)</a>
                  </li>
                  <li>
                    <a href="#">Motto To Love-Ru Character CD Singles</a>
                  </li>
                  <li>
                    <a href="#">Motto To Love-Ru Character CD Duets</a>
                  </li>
                  <li>
                    <a href="#">To Love-Ru Darkness Character Singles</a>
                  </li>
                  <li>
                    <a href="#">To Love-Ru Darkness 2nd Character Duets</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#">In Game Songs</a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl">
            <h1 className="text-2xl font-bold border-b mb-4" id="development">
              OP's and ED's
            </h1>
            <h2 className="italic font-bold text-l">To LOVE-Ru</h2>
            <div className="ml-8 mb-2 mt-2">
              <li>
                <strong>OP1:</strong> "
                <a
                  href="#"
                  className="text-[purple] hover:underline font-bold hover:text-black"
                >
                  Forever We Can Make It!
                </a>
                ", by THYME
              </li>
              <li>
                <strong>ED1:</strong> "{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline font-bold hover:text-black"
                >
                  Lucky Tune
                </a>
                " , by Anna (1-13, 26, OVA3)
              </li>
              <li>
                <strong>ED2:</strong>{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline font-bold hover:text-black"
                >
                  Kiss no Yukue
                </a>
                , by Anna (14-25)
              </li>
              <li>
                <strong>OVA OP:</strong> <strong>"Yattekoi Daisuki!"</strong> ,
                by Haruka Tomatsu, Sayuri Yahagi
              </li>
              <li>
                <strong>OVA ED:</strong> <strong>"Apple Panic!?"</strong>, by
                Haruka Tomatsu, Sayuri Yahagi
              </li>
            </div>
            <br />
            <h2 className="italic font-bold text-l">Motto To LOVE-Ru</h2>
            <div className="ml-8 mb-2 mt-2">
              <li>
                <strong>OP:</strong>
                <strong>"Loop the Loop"</strong>, by KOTOKO
              </li>
              <li>
                <strong>ED:</strong>
                <strong>"Baby Baby Love"</strong>, by Haruka Tomatsu
              </li>
            </div>
            <br />
            <h2 className="italic font-bold text-l">To LOVE-Ru Darkness</h2>
            <div className="ml-8 mb-2 mt-2">
              <li>
                <strong>OP:</strong> "
                <a
                  href="#"
                  className="text-[purple] hover:underline font-bold hover:text-black"
                >
                  Rakuen PROJECT
                </a>
                " by Ray (1-10, 12)
              </li>
              <li>
                <strong>ED:</strong> <strong>"Foul Play ni Kurari"</strong> by
                Kanon Wakeshima (1-9, 11, 12)
              </li>
            </div>
            <br />
            <h2 className="italic font-bold text-l">To LOVE-Ru Darkness 2nd</h2>
            <div className="ml-8 mb-2 mt-2">
              <li>
                <strong>OP:</strong> <strong>"secret arms"</strong>, by Ray
              </li>
              <li>
                <strong>ED:</strong> <strong>"Garden"</strong> by Mami Kawada
              </li>
            </div>
            <br />
            <h1
              className="text-2xl font-bold border-b mb-4"
              id="character_songs"
            >
              Character Songs
            </h1>
            <h2 className=" text-l font-bold text-l">
              Variety CD 1 (July 4 2008)
            </h2>
            <div className="ml-8 mt-4">
              {" "}
              <li>
                ダイスキみーっけ!, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                ちゃんとしてよセイシュン!, by{" "}
                <a
                  href="/mikan"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mikan Yuuki
                </a>
              </li>
              <li>
                スカートのはじっこ, by{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Variety CD 2 (August 22 2008)
            </h2>
            <div className="ml-8 mt-4">
              {" "}
              <li>
                へーーーーっつくち!~ルン時々、レン~, by{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Ren Elsie Jewelria
                </a>
              </li>
              <li>
                恋とビキニと雨予報, by{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
              <li>
                GOLDEN TRANCER, by{" "}
                <a
                  href="/yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Variety CD 3 (October 3 2008)
            </h2>
            <div className="ml-8 mt-4">
              <li>
                やだ!, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                My name is ”YAMI-chang”, by{" "}
                <a
                  href="/yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>
              </li>
              <li>
                清廉潔癖女子。, by{" "}
                <a
                  href="/yui"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Yui Kotegawa
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Variety CD 4 (October 24 2008)
            </h2>
            <div className="ml-8 mt-4">
              <li>
                わたくしナンバーワン!!, by{" "}
                <a
                  href="/saki"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Saki Tenjouin
                </a>
              </li>
              <li>
                まんなかSensitive, by{" "}
                <a
                  href="/yui"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Yui Kotegawa
                </a>
              </li>
              <li>
                SWITCHんぐ!, by{" "}
                <a
                  href="/run"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Run Elsie Jewelria
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Variety CD 5 (November 28 2008)
            </h2>
            <div className="ml-8 mt-4">
              <li>
                …っちゃえ!, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>{" "}
                and{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
              <li>
                うぃっス!カタルシス, by{" "}
                <a
                  href="/rito"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Rito Yuuki
                </a>
              </li>
              <li>
                君らしくなきゃヤダよ!, by{" "}
                <a
                  href="/mikan"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mikan Yuuki
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Motto To Love-Ru Character CD Singles
            </h2>
            <div className="ml-8 mt-4">
              <li>
                メロ・メロマンちっく, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                君が教えてくれるすべて, by{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
              <li>
                リビングWars, by{" "}
                <a
                  href="/mikan"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mikan Yuuki
                </a>
              </li>
              <li>
                ミステイク?!DEATH, by{" "}
                <a
                  href="/yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>
              </li>
              <li>
                ナナいろノーサンキュウ!, by{" "}
                <a
                  href="/nana"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Nana Astar Deviluke
                </a>
              </li>
              <li>
                モ・モ・い・ろ・み・ご・ろ, by{" "}
                <a
                  href="/momo"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Momo Belia Deviluke
                </a>
              </li>
              <li>
                のーらぶ, by{" "}
                <a
                  href="/yui"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Yui Kotegawa
                </a>
              </li>
              <li>
                スキって半透明!, by{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Oshizu Murasame
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              Motto To Love-Ru Character CD Duets
            </h2>
            <div className="ml-8 mt-4">
              <li>
                じゃないぞ!乙女ちっく, by{" "}
                <a
                  href="/#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Riko Yuusaki
                </a>{" "}
                and{" "}
                <a
                  href="/rito"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Rito Yuuki
                </a>
              </li>
              <li>
                ラ・ラ・ラ・ライブフルっ!, by{" "}
                <a
                  href="/run"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Run Elsie Jewelria
                </a>{" "}
                and{" "}
                <a
                  href="/kyouko"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Kyouko Kirisaki
                </a>
              </li>
              <li>
                いっしょにいようよ, by{" "}
                <a
                  href="/nana"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Nana Astar Deviluke
                </a>{" "}
                and{" "}
                <a
                  href="/momo"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Momo Belia Deviluke
                </a>
              </li>
              <li>
                ダーリンハニー♡スィートエモーション, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>{" "}
                and{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              To Love-Ru Darkness Character Singles
            </h2>
            <div className="ml-8 mt-4">
              <li>
                Beyond The Darkness, from{" "}
                <a
                  href="/yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>
              </li>
              <li>
                甘い世界, from{" "}
                <a
                  href="yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>
              </li>
              <li>
                MORE&MORE, from{" "}
                <a
                  href="/momo"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Momo Belia Deviluke
                </a>
              </li>
              <li>
                恋のチャンス, from{" "}
                <a
                  href="/momo"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Momo Belia Deviluke
                </a>
              </li>
              <li>
                天真爛漫!オトメ冥利☆, from{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                恋のL♡VE♂L♡VE♀大発明!, from{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                ナ・ナ・フ・シ・ギ, from{" "}
                <a
                  href="/nana"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Nana Astar Deviluke
                </a>
              </li>
              <li>
                油断×大敵, from{" "}
                <a
                  href="/nana"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Nana Astar Deviluke
                </a>
              </li>
              <li>
                いっしょにいようよ, from{" "}
                <a
                  href="/mea"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mea Kurosaki
                </a>
              </li>
              <li>そして君と恋をする, by all single characters</li>
            </div>
            <br />
            <h2 className=" text-l font-bold text-l">
              To Love-Ru Darkness 2nd Character Duets
            </h2>
            <div className="ml-8 mt-4">
              <li>
                マルサンカクカゾク, by{" "}
                <a
                  href="/lala"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Lala Satalin Deviluke{" "}
                </a>{" "}
                and{" "}
                <a
                  href="/mikan"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mikan Yuuki
                </a>
              </li>
              <li>
                恋のため息, by{" "}
                <a
                  href="/momo"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Momo Belia Deviluke
                </a>{" "}
                and{" "}
                <a
                  href="/nana"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Nana Astar Deviluke
                </a>
              </li>
              <li>
                ヘーキじゃないかも, by{" "}
                <a
                  href="/yami"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Golden Darkness
                </a>{" "}
                and{" "}
                <a
                  href="/mae"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Mea Kurosaki
                </a>
              </li>
              <li>
                キミとスクール☆デイズ, by{" "}
                <a
                  href="/yui"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Yui Kotegawa
                </a>{" "}
                and{" "}
                <a
                  href="/haruna"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Haruna Sairenji
                </a>
              </li>
              <li>最愛Darling!, by all duets</li>
            </div>
            <br />
            <h1 className="text-2xl font-bold border-b mb-4" id="in_game_songs">
              In Game Songs
            </h1>
            <li>
              <a
                href="#"
                className="text-[purple] font-bold hover:underline hover:text-black"
              >
                To LOVE-Ru: Exciting Beach School Version
              </a>{" "}
              (PSP): <strong>"HOSHI no Kakera"</strong>, by Anna
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black font-bold"
              >
                To LOVE-Ru Darkness: Battle Ecstasy
              </a>{" "}
              (VITA): <strong>"Yawajanai DID!! -Catch To LOVE-Ru"</strong>, by
              Anna
            </li>
            <br />
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
