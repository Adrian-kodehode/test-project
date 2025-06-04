import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Toloverudarknessmanga = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
                          To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          Motto To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness 2nd
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
          <h1 className="mb-5 italic text-3xl">To LOVE-Ru Darkness (manga)</h1>
          <p>
            <strong>To LOVE-Ru Darkness</strong> is the sequel to the first
            manga series in the To LOVE-Ru franchise. It was serialized between
            October 4 2010 and March 4 2017 in the monthly manga magazine "Jump
            Square" and the chapters collected into 18 tankōbon volumes.
          </p>
          <br />
          <p>
            To LOVE-Ru Darkness is notably more mature than To LOVE-Ru; it
            retains its usual perverted comedy, but with more focus on its plot
            and more serious story and character development, and now provides
            much more graphic fanservice, which occasionally borders on hentai.
          </p>
          <br />
          <p>
            After the end, two bonus chapters (Bangaihen 23 and Bangaihen 24)
            were released in May and June 2017 issues of Jump Square. On
            November 4, 2017 Jump SQ released another Special Bangaihen with 8
            page length. Successively a full-color one-shot was published in
            Jump Square on May 2, 2019 to celebrate Kentaro Yabuki' 20th
            anniversary as artist. More recently in 2023, in occasion of the To
            Love-Ru 15th Anniversary Finale, it published another one-shot on
            Jump web site.
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
                <a href="#chapters" className="hover:underline">
                  Chapters
                </a>
                <ol className="list-decimal list-inside pl-5 text-gray-600 text-xs mt-1">
                  <li>
                    <a href="#vol-1" className="hover:underline">
                      Volume 1 (Chapters 0-4)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-2" className="hover:underline">
                      Volume 2 (Chapters 5-8)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-3" className="hover:underline">
                      Volume 3 (Chapters 9-12)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-4" className="hover:underline">
                      Volume 4 (Chapters 13-16)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-5" className="hover:underline">
                      Volume 5 (Chapters 17-20)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-6" className="hover:underline">
                      Volume 6 (Chapters 21-24)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-7" className="hover:underline">
                      Volume 7 (Chapters 25-28)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-8" className="hover:underline">
                      Volume 8 (Chapters 29-32)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-9" className="hover:underline">
                      Volume 9 (Chapters 33-36)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-10" className="hover:underline">
                      Volume 10 (Chapters 37-40)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-11" className="hover:underline">
                      Volume 11 (Chapters 41-44)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-12" className="hover:underline">
                      Volume 12 (Chapters 45-48)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-13" className="hover:underline">
                      Volume 13 (Chapters 49-53)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-14" className="hover:underline">
                      Volume 14 (Chapters 54-57)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-15" className="hover:underline">
                      Volume 15 (Chapters 58-62)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-16" className="hover:underline">
                      Volume 16 (Chapters 63-67)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-17" className="hover:underline">
                      Volume 17 (Chapters 68-72)
                    </a>
                  </li>
                  <li>
                    <a href="#vol-18" className="hover:underline">
                      Volume 18 (Chapters 73-77)
                    </a>
                  </li>
                  <li>
                    <a href="#extra-chapters" className="hover:underline">
                      Extra Chapters
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reprint" className="hover:underline">
                  Reprint
                </a>
              </li>
              <li>
                <a href="#criticisms" className="hover:underline">
                  Criticisms
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="plot">
              Plot
            </h2>
            <p>
              <a href="/rito" className="text-[purple] underline">
                Rito
              </a>{" "}
              remains unsuccessful and indecisive with his love for his crush,{" "}
              <a href="/haruna" className="text-[purple] underline">
                Haruna
              </a>
              , and the alien princess,{" "}
              <a href="/lala" className="text-[purple] underline">
                Lala
              </a>
              . Meanwhile, Lala's little sister,{" "}
              <a href="/momo" className="text-[purple] underline">
                Momo
              </a>
              , also falls in love with Rito, and works on building a harem for
              him, in the hopes of giving herself a part of Rito's love life to
              include herself in. And so she enrolls in his school to secretly
              support all of Rito's love interests, and even attempts to find
              more, including recently enrolled alien assassin{" "}
              <a href="/yami" className="text-[purple] underline">
                Konjiki no Yami
              </a>{" "}
              (Golden Darkness), aka Yami. But another student,{" "}
              <a href="/mea" className="text-[purple] underline">
                Kurosaki Mea
              </a>
              , reveals herself to be Yami's little sister, and intends for Yami
              to return to being an assassin.
            </p>

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
                { name: "Yuuki Rito", route: "/rito" },
                { name: "Momo Belia Deviluke", route: "/momo" },
                { name: "Nana Astar Deviluke", route: "/nana" },
                { name: "Lala Satalin Deviluke", route: "/lala" },
                { name: "Sairenji Haruna", route: "/haruna" },
                { name: "Kurosaki Mea", route: "/mea" },
                { name: "Yami", route: "/yami" },
                { name: "Nemesis", route: "/nemesis" },
                { name: "Yuuki Mikan", route: "/mikan" },
                { name: "Kotegawa Yui", route: "/yui" },
                { name: "celine", route: "#" },
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
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="chapters">
              Chapters
            </h2>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 1 (Chapter 0-4)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 0: Prologue -{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Prologue and Activation
                  </a>
                </li>
                <li>
                  Chapter 1:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Continue
                  </a>
                </li>
                <li>
                  Chapter 2:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Doubt and Dish
                  </a>
                </li>
                <li>
                  Chapter 3:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Each Speculation
                  </a>
                </li>
                <li>
                  Chapter 4:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Exciting Squall
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_1.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_1.jpg"
                    alt="To LOVE-Ru Volume 1"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 1 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 2 (Chapter 5-8)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 5:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Uneasiness -Peach and Anxiety-
                  </a>
                </li>
                <li>
                  Chapter 6:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    True Smile -The Past, Those Feelings... Blind-
                  </a>
                </li>
                <li>
                  Chapter 7:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Worry -The Past, Those Feelings... Blind-
                  </a>
                </li>
                <li>
                  Chapter 8:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    A Man? Woman? -The Changing Ones-
                  </a>
                </li>
                <li>
                  Bangaihen 1:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Pollen Plan -Dangerous Little Sister Situation-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_2.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_2.jpg"
                    alt="To LOVE-Ru Volume 2"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 2 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 3 (Chapter 9-12)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 9:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Metamorphose -Time For A Change-
                  </a>
                </li>
                <li>
                  Chapter 10:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sisters -The Invention Of Happiness: Lala-
                  </a>
                </li>
                <li>
                  Chapter 11:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    True Self -True Face of DArkness-
                  </a>
                </li>
                <li>
                  Chapter 12:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Bad Mood -Bonds Of Happiness-
                  </a>
                </li>
                <li>
                  Bangaihn 2{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    First Love -First Love Before You Know It-
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
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_3.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_3.jpg"
                    alt="To LOVE-Ru Volume 3"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 3 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 4 (Chapter 13-16)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 13:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Adhesion -Can't Part? Can't Let Go?-
                  </a>
                </li>
                <li>
                  Chapter 14:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Past ~Memories Leading To Tomorrow~
                  </a>
                </li>
                <li>
                  Chapter 15:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Refrain ~Warmth~
                  </a>
                </li>
                <li>
                  Chapter 16:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Right Thing ~What is a Way of Life?~
                  </a>
                </li>
                <li>
                  Bangaihen 3:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Body Touch? ~Nyanderful Life~
                  </a>
                </li>
                <li>
                  Bangaihen 4:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Room ~A Maiden's Heart~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_4.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_4.jpg"
                    alt="To LOVE-Ru Volume 4"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 4 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 5 (Chapter 17-20)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 17:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Trigger ~Intensification of Love~
                  </a>
                </li>
                <li>
                  Chapter 18:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Exchange ~Me and I~
                  </a>
                </li>
                <li>
                  Chapter 19:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Nostalgia ~Back Then, At That Place~
                  </a>
                </li>
                <li>
                  Chapter 20:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Uneasy ~Hearts bewilderment~
                  </a>
                </li>
                <li>
                  Bangaihen 5:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Flower ~Budding Feelings~
                  </a>
                </li>
                <li>
                  Bangaihen 6:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Changing Heart ~Honest Feelings~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_5.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_5.jpg"
                    alt="To LOVE-Ru Volume 5"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 5 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 6 (Chapter 21-24)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 21:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Rain ~Again, Just Like Until Now~
                  </a>
                </li>
                <li>
                  Chapter 22:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    After a Storm Comes a Calm ~Friend~
                  </a>
                </li>
                <li>
                  Chapter 23:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Summer Festival ~The Beginning of The Festival~
                  </a>
                </li>
                <li>
                  Chapter 24:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Door of Fate ~And From Now On~
                  </a>
                </li>
                <li>
                  Bangaihen 7:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Anxious (1) ~Is This Alright~
                  </a>
                </li>
                <li>
                  Bangaihen 8:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Anxious (2) ~Distressed Maiden and Big Brother~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_6.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_6.jpg"
                    alt="To LOVE-Ru Volume 6"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 6 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 7 (Chapter 25-28)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 25:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    New Move ~Birds of a Feather~
                  </a>
                </li>
                <li>
                  Chapter 26:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Uncounsciously Head Hazy? Heart Pounding~
                  </a>
                </li>
                <li>
                  Chapter 27:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Adventure ~Rito Mouse's Adventure~
                  </a>
                </li>
                <li>
                  Bangaihen 9 :{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Girl of Blaze Magical Kyoko ~Flame~
                  </a>
                </li>
                <li>
                  Chapter 28:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Infiltration ~Kyouko! In Trouble!?~
                  </a>
                </li>
                <li>
                  Bangaihen 10:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    It Feels ~Teacher Who Endures~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_7.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_7.jpg"
                    alt="To LOVE-Ru Volume 7"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 7 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 8 (Chapter 29-32)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 29:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Manservant ~Competition~
                  </a>
                </li>
                <li>
                  Chapter 30:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Resistance ~Even Thought I Understand~
                  </a>
                </li>
                <li>
                  Chapter 31:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Cleaning ~Magnificently and Beautiful~
                  </a>
                </li>
                <li>
                  Chapter 32:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Danger ~Danger~
                  </a>
                </li>
                <li>
                  Bangaihen 11:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Adhesion ~But No Ill Intent~
                  </a>
                </li>
                <li>
                  Bangaihen 12:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Mobile Phone ~Heart Pounding? Voice~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_8.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_8.jpg"
                    alt="To LOVE-Ru Volume 8"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 8 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 9 (Chapter 33-36)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 33:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Appreciation ~Progressing Feelings~
                  </a>
                </li>
                <li>
                  Chapter 34:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    When Talking ~Sisters' Love Circumstances~
                  </a>
                </li>
                <li>
                  Chapter 35:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Kiss ~What Lies Beyond a Kiss~
                  </a>
                </li>
                <li>
                  Chapter 36:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Real Intention ~Trouble Girls~
                  </a>
                </li>
                <li>
                  Bangaihen 13:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Suddenly ~Imagination and Reality~
                  </a>
                </li>
                <li>
                  Bangaihen 14:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Ghost Story ~Heart-pounding ~Voice~ 4-Koma
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage("To Love Ru/To_Love_Ru_Darkness_Volume_9.jpg")
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_9.jpg"
                    alt="To LOVE-Ru Volume 9"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 9 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 10 (Chapter 37-40)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 37:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    True Character ~Identity Revealed~
                  </a>
                </li>
                <li>
                  Chapter 38:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Clinic ~Can't Become Honest~
                  </a>
                </li>
                <li>
                  Chapter 39:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The Begining of Darkness ~That Time~
                  </a>
                </li>
                <li>
                  Chapter 40:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Release of Darkness ~Release~
                  </a>
                </li>
                <li>
                  Bangaihen 15:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Moonlight ~Moonlit Angel~
                  </a>
                </li>
                <li>
                  Bangaihen 16:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Photography ~Take that awesome picture!~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_10.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_10.jpg"
                    alt="To LOVE-Ru Volume 10"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 10 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 11 (Chapter 41-44)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 41:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Prediction is Impossible ~Out of Control Darkness~
                  </a>
                </li>
                <li>
                  Chapter 42:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Escape ~What you Believe~
                  </a>
                </li>
                <li>
                  Chapter 43:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Whose Thing is a Flance? ~Lala VS Yami~
                  </a>
                </li>
                <li>
                  Chapter 44:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Power and Power ~Protector and Protected~
                  </a>
                </li>
                <li>
                  Bangaihen 17:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Technique ~Door of A Maiden~
                  </a>
                </li>
                <li>
                  Bangaihen 18:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Holiday ~Cooking Flexion?~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_11.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_11.jpg"
                    alt="To LOVE-Ru Volume 11"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 11 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 12 (Chapter 45-48)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 45:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sister ~The Two Weapons~
                  </a>
                </li>
                <li>
                  Chapter 46:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The End of Darkness ~I Hate Ecchi~
                  </a>
                </li>
                <li>
                  Chapter 47:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Bright Future -Thank You-
                  </a>
                </li>
                <li>
                  Chapter 48:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Re-starting -Harem Plan-
                  </a>
                </li>
                <li>
                  Bangaihen 19:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Adhesion Panic -I Knew It... She's Angry?-
                  </a>
                </li>
                <li>
                  Bangaihen 20:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Bath -Good Bath... I Guess?-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_12.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_12.jpg"
                    alt="To LOVE-Ru Volume 12"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 12 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 13 (Chapter 49-53)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 49:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Mother -An Angel Too Beautiful-
                  </a>
                </li>
                <li>
                  Chapter 50:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Charm -Great Mother-
                  </a>
                </li>
                <li>
                  Chapter 51:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Smile Baby -Baby Panic-
                  </a>
                </li>
                <li>
                  Chapter 52:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Mission Date -Slapstick Date-
                  </a>
                </li>
                <li>
                  Chapter 53:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Puberty -I'll Try To Be Honest-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_13.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_13.jpg"
                    alt="To LOVE-Ru Volume 13"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 13 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>

            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 14 (Chapter 54-57)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 54:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    First Accident? -Frist Time...-
                  </a>
                </li>
                <li>
                  Chapter 55:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Worry -A Step Forward-
                  </a>
                </li>
                <li>
                  Chapter 56:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Delight -Growth of Body and Heart-
                  </a>
                </li>
                <li>
                  Chapter 57:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Principal -Not Good Day-
                  </a>
                </li>
                <li>
                  Bangaihen 21:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Washed -Bonds of Battlefied-
                  </a>
                </li>
                <li>
                  Bangaihen 22:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Natural Face -Time of Rest-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_14.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_14.jpg"
                    alt="To LOVE-Ru Volume 14"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 14 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 15 (Chapter 58-62)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 58:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Story after school -Hidden Feelings-
                  </a>
                </li>
                <li>
                  Chapter 59:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Enjoy myself -Dark Matter-
                  </a>
                </li>
                <li>
                  Chapter 60:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Power and power -Fleeting Battle-
                  </a>
                </li>
                <li>
                  Chapter 61:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Taken -Nemesis-
                  </a>
                </li>
                <li>
                  Chapter 62:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The fresh world -Everywhere together♪~
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_15.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_15.jpg"
                    alt="To LOVE-Ru Volume 15"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 15 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 16 (Chapter 63-67)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 63:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    All right -All that ends well......
                  </a>
                </li>
                <li>
                  Chapter 64:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Morals -Who is the one disrupting the morals!
                  </a>
                </li>
                <li>
                  Chapter 65:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    New Plan -Conseling-
                  </a>
                </li>
                <li>
                  Chapter 66:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Inspection -Let's Examine-
                  </a>
                </li>
                <li>
                  Chapter 67:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Real feelinga -Battle With True Feelings-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_16.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_16.jpg"
                    alt="To LOVE-Ru Volume 16"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 16 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 17 (Chapter 68-72)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 68:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Idol -An idol only for you-
                  </a>
                </li>
                <li>
                  Chapter 69:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    One night -Let's sleep over!-
                  </a>
                </li>
                <li>
                  Chapter 70:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Request -Target-
                  </a>
                </li>
                <li>
                  Chapter 71:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    The reason that I fight -The Reason to Protect-
                  </a>
                </li>
                <li>
                  Chapter 72:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Black and darkness -Conveyed Feelings-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_17.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_17.jpg"
                    alt="To LOVE-Ru Volume 17"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 17 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Volume 18 (Chapter 73-77)
            </h3>
            <div className="ml-5 mb-5 flex flex-row items-start gap-6">
              <ul className="list-disc pl-5 mt-3 flex-1">
                <li>
                  Chapter 73:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Delusion -What Do I Do?-
                  </a>
                </li>
                <li>
                  Chapter 74:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    After a long time -Nemesis's Ambition-
                  </a>
                </li>
                <li>
                  Chapter 75:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Sudden Confession -Important Words-
                  </a>
                </li>
                <li>
                  Chapter 76:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    How will you do? -Decision!?-
                  </a>
                </li>
                <li>
                  Chapter 77:{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Let's Meet Again Sometime -I'm Looking Forward to Our
                    Future-
                  </a>
                </li>
              </ul>
              <div className="w-56 max-w-xs flex-shrink-0">
                <button
                  type="button"
                  className="focus:outline-none w-full"
                  onClick={() =>
                    setModalImage(
                      "To Love Ru/To_Love_Ru_Darkness_Volume_18.jpg"
                    )
                  }
                  style={{ display: "block" }}
                >
                  <img
                    src="To Love Ru/To_Love_Ru_Darkness_Volume_18.jpg"
                    alt="To LOVE-Ru Volume 18"
                    className="w-full object-contain border-2 border-[#DB49AC] hover:scale-105 transition-transform"
                  />
                </button>
                {modalImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setModalImage(null)}
                  >
                    <img
                      src={modalImage}
                      alt="To LOVE-Ru Volume 18 Large"
                      className="max-w-full max-h-[90vh] rounded-lg border-4 border-[#DB49AC] shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
            <h3 className="font-bold text-[purple] hover:underline hover:text-black">
              Extra Chapters
            </h3>
            <li>
              Bangaihen 23:{" "}
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Multiplication ~From the Front and From Behind~
              </a>
            </li>
            <li>
              Bangaihen 24:{" "}
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Multiplication ~From the Front and From Behind~ Part 2
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                A Special Bangaihen~
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Rito and Sayaka's After School
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Extra Arc
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                To Love-Ru: Mikan & Maruru
              </a>
            </li>
            <br />
            <h3 className="text-2xl font-bold border-b mb-4" id="gallery">
              Gallery
            </h3>
            <p>
              For chapter covers, see{" "}
              <a
                href="#"
                className="text-[purple] underline hover:underline hover:text-black"
              >
                Manga Covers.
              </a>
            </p>
            <br />
            <h3 className="text-2xl font-bold border-b mb-4" id="reprint">
              Reprint
            </h3>
            <p>
              The series was republished in a 9-volume edition (Jump Remix)
              between 2017 and 2019. A third reprint in a 10-volume bunkoban
              edition was published between October 16 2020 and February 18
              2021. Bunko edition include 3 extra pages for every volume.
            </p>
            <br />
          </div>
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
                src="To Love Ru/To_Love_Ru_Darkness_Volume_1.jpg"
                alt="Lala Satalin Deviluke"
                className="w-80 h-80 object-contain border-2 border-[#DB49AC] "
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
                      To LOVEる -とらぶる- ダークネス
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Rōmaji
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      To Rabu ru -toraburu- Dākunesu
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-boldd p-2 border border-[#9C2E7A] ">
                      Author
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Hasemi Saki
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Illustrator
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Yabuki Kentarō
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Volumes
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      18
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Chapters
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      102
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Completed
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Published
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      October 4, 2010 to May 1, 2017
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Genre(s)
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Comedy, Ecchi, Romance, School, Sci-Fi, Shounen, Harem,
                      Supernatural
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-[#F9D910] font-bold p-2 border border-[#9C2E7A] ">
                      Serialization
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Jump SQ
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
