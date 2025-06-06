import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Toloverudarknessbattleecstasy = () => {
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
                            To LOVE-Ru Darkness: Battle Ecstasy
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_ture_princess_game">
                            To LOVE-Ru Darkness: True Princess
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Idol Revolution
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_gravure_chances_game">
                            To LOVE-Ru Darkness: Gravure Chances
                          </Link>
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
          <h1 className="mb-5 italic text-3xl">
            To LOVE-Ru Darkness: Battle Ecstasy
          </h1>
          <p>
            <strong className="italic">
              To LOVE-Ru Darkness: Battle Ecstasy
            </strong>{" "}
            is an "Ultra Harem Action" PSVITA game developed by Furyu in May 22,
            2014. The genre is consistently made up of four parts: Playthrough
            Action, My Room, Communication, and Adventure.
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
                  Development
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:underline">
                  Story
                </a>
              </li>

              <li>
                <a href="#contents" className="hover:underline">
                  Contents
                </a>
                <ol className="list-decimal list-inside ml-5">
                  <li>
                    <a href="#contents">Limited Edition (8,980 yen)</a>
                  </li>
                  <li>
                    <a href="#contents">Pre-Order Bonus</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#screenshots" className="hover:underline">
                  Screenshots
                </a>
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
          <h2 className="text-2xl font-bold border-b mb-4" id="development">
            Development
          </h2>
          <p>
            FuRyu has shared first details and screenshots on PS Vita “ultra
            pleasant harem action” game To Love-Ru Darkness: Battle Ecstasy. The
            game, due out in Japan on May 22 for 6,980 yen, consists of action,
            “my room,” communication, and adventure parts. Find those parts, as
            well as a story, limited edition, and pre-order details, below.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="story">
            Story
          </h2>
          <p>
            One day, when Rito was in his house, he suddenly became dizzy, and
            when he came to his senses, he was in a strange world. Momo suddenly
            appears, and from her he hears that he is imprisoned in a strange
            world and that Lala has been whisked away to a mystery dungeon. So
            Rito decides to head out and rescue Lala from the dungeon she is
            held prison in.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="contents">
            Contents
          </h2>
          <div className="ml-8">
            <li>
              Action Part - Search the dungeons in order to save the heroines,
              and defeat the monsters that appear as you progress. On each floor
              of the dungeon is an event where a heroine awaits.
            </li>
            <li>
              My Room Part - The game starts in a room that resembles Rito’s
              house. This will serve as an area in which you and the captured
              heroines from the action part can spend time together. With the
              passing of certain events, players can form close relationships
              with the heroines.
            </li>
            <li>
              Communication Part (Trouble Touch Time) – You can communicate with
              the heroines by touching the screen and using the back panel.
            </li>
            <li>
              Adventure Part - This is the part that advances the story. Talk
              with the heroines to progress.
            </li>
          </div>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="limited-edition">
            Limited Edition (8,980 yen)
          </h2>
          <div className="ml-8">
            <li>Special box</li>
            <li>Special “Konjiki no Yami” sleep sheet</li>
            <li>Special “Momo” cord reel</li>
            <li>Original costume “Sexy Apron” download code</li>
          </div>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="pre-order">
            Pre-Order Bonus
          </h2>
          <div className="ml-8">
            <li>Original costume “Maid Clothes” download code</li>
          </div>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="screenshots">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "To Love Ru/ToLOVE-RuDarknessBattleEcstasy1.jpg",
              "To Love Ru/ToLOVE-RuDarknessBattleEcstasy2.jpg",
              "To Love Ru/ToLOVE-RuDarknessBattleEcstasy3.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`To LOVE-Ru Darkness Battle Ecstasy screenshot ${idx + 1}`}
                className="w-full h-auto rounded shadow"
                onClick={() => {
                  setSelectedImage(src);
                  setShowImageModal(true);
                }}
              />
            ))}
            {showImageModal && selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setShowImageModal(false)}
              >
                <img
                  src={selectedImage}
                  alt="To LOVE-Ru Darkness 2nd"
                  className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-[#DB49AC] bg-white"
                  onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                    e.stopPropagation()
                  }
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
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="external-links">
            External links
          </h2>
          <li>
            <a
              href="/#"
              className="text-[purple] hover:underline hover:text-black"
            >
              PS VITA Official Game Site
            </a>{" "}
            <strong>(Japanese)</strong>
          </li>
          <br />
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-[#F9D910] bg-[#DB49AC] text-xl italic font-bold p-2 ">
                To LOVE-Ru Darkness
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="To Love Ru/ToLOVE-RuDarknessBattleEcstasy.jpg"
                alt="To LOVE-Ru Darkness Battle Ecstasy"
                className="w-80 h-80 object-contain border-2 border-[#DB49AC] cursor-pointer"
                onClick={() => setShowImageModal(true)}
              />
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
                      To LOVEる -とらぶる- ダークネス バトルエクスタシー
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Rōmaji
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      To Rabu ru -toraburu- Dākunesu Batoru Ekusutashii
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Release Date(s)
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      <strong>JP:</strong> May 22, 2014
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Genre[s]
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Ultra Harem Action
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Game Mode[s]
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Single Player
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Platform(s)
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      PlayStation Vita
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Ratings
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      CERO D
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
