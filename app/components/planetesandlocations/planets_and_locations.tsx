import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const toloveru_planets_and_locations = () => {
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
      <div className="bg-[#fcc0e9] flex flex-row items-start justify-center min-h-screen">
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
        <div className="flex-1 text-black bg-white pl-8 pr-8 pt-8 max-w-4xl">
          <h1 className="mb-5 text-5xl">Planets and Locations</h1>
          <p>
            This is a list of the planets and locations mentioned in{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              TO LOVE-Ru
            </a>
          </p>
          <br />

          <nav className="w-40 mt-5 bg-white border rounded mb-6">
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
                <a href="#planets" className="hover:underline">
                  Planets
                </a>
              </li>
              <li>
                <a href="#major_planets">Major Planets</a>
              </li>
              <li>
                <a href="#minor_planets">Minor Planets</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ol>
          </nav>
          <h2 className="font-bold">Planests</h2>
          <br />
          <div className="flex-1 text-black max-w-2xl">
            <h1 className="text-2xl font-bold border-b mb-4" id="major_planets">
              Major Planets
            </h1>
            <li>
              <a
                href="/"
                className="text-[purple] hover:underline hover:text-black"
              >
                Earth{" "}
              </a>
              - Where{" "}
              <a
                href="sianan_town"
                className="text-[purple] hover:underline hover:text-black"
              >
                Sianan Town{" "}
              </a>
              and{" "}
              <a
                href="sainan_high"
                className="text-[purple] hover:underline hover:text-black"
              >
                Sainan High{" "}
              </a>
              are located.
            </li>
            <li>
              <a
                href="/deviluke"
                className="text-[purple] hover:underline hover:text-black"
              >
                Deviluke
              </a>
            </li>
            <li>
              <a
                href="/memorze"
                className="text-[purple] hover:underline hover:text-black"
              >
                Memorze
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-[purple] hover:underline hover:text-black"
              >
                Mistletoe
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-[purple] hover:underline hover:text-black"
              >
                Okiwana
              </a>
            </li>
            <br />
            <h1 className="text-2xl font-bold border-b mb-4" id="minor_planets">
              Minor Planets
            </h1>
            <li>
              Ako (anime only) - A planet destroyed by{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Gid Lucione Deviluke
              </span>
              .
            </li>
            <li>
              Balke - The planet where{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Ghi Bree
              </span>{" "}
              is from.
            </li>
            <li>
              Gaama - The planet where{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Lacospo
              </span>{" "}
              is from.
            </li>
            <li>
              Kild - A planet that was sliced in half by{" "}
              <a
                href="/yami"
                className="text-[purple] hover:underline hover:text-black"
              >
                Golden Darkness
              </a>{" "}
              when the Darkness transformation accidentally activated. It is
              described as the garbage dump of the universe.
            </li>
            <li>
              Plantas - The planet where{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Celine
              </span>{" "}
              is from. Judging by the name, it is likely home to many plants.
            </li>
            <li>
              Unnamed home planet of{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Tearju Lunatique
              </span>{" "}
              and{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Ryoko Mikado
              </span>{" "}
              appears to be more advanced compared to Earth. It has a futuristic
              appearance, and spaceships can be seen in the sky.
            </li>
            <li>Cedar (anime only) - Sugitani's home planet</li>
            <li>Gourmand - appears to be food themed</li>
            <li>Juda</li>
            <li>
              Kara -{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Gid Lucione Deviluke
              </span>{" "}
              fought{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Nemesis
              </span>{" "}
              in a cyberspace that was based on Kara's data
            </li>
            <li>
              Kirara (anime only) -{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Pikari
              </span>
              's home planet
            </li>
            <li>Latte</li>
            <li>Melon</li>
            <li>Nito</li>
            <li>Rubbish</li>
            <li>
              Shishinabe - Gii-Chan, one of Nana's animals comes from Shishinabe
            </li>
            <li>Sold</li>
            <li>
              Solgam - the home planet of{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Solgam
              </span>
              , an organization that was destroyed by{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Kuro
              </span>
            </li>
            <li>
              Tentac -{" "}
              <span className="text-[purple] hover:underline hover:text-black">
                Meda-Q
              </span>
              's home planet
            </li>
            <li>Zelas</li>
          </div>
          <br />
          <h1 className="text-2xl font-bold border-b mb-4" id="gallery">
            Gallery
          </h1>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center col-span-3">
              <img
                src="To Love Ru/sainan.jpg"
                alt="Sainan Town"
                className="w-full h-80 object-cover rounded shadow"
              />
              <span className="mt-2 text-center text-sm font-medium">
                Sainan Town
              </span>
            </div>
            <div className="flex flex-col items-center col-span-3">
              <img
                src="To Love Ru/DevilukePalace.jpg"
                alt="The Royal Palace of Deviluke"
                className="w-full h-80 object-cover rounded shadow"
              />
              <span className="mt-2 text-center text-sm font-medium">
                The Royal Palace of Deviluke
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/planetmemorze.jpg"
                alt="Planet Memorze"
                className="w-full h-60 object-cover rounded shadow"
              />
              <span className="mt-2 text-center text-sm font-medium">
                Planet Memorze
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/mistletoe.jpg"
                alt="Mistletoe"
                className="w-full h-60 object-cover rounded shadow"
              />
              <span className="mt-2 text-center text-sm font-medium">
                Mistletoe
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/Okiwana.jpg"
                alt="Okiwana"
                className="w-full h-60 object-cover rounded shadow"
              />
              <span className="mt-2 text-center text-sm font-medium">
                Okiwana
              </span>
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
