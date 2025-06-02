import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Plot = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

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
                          Motto To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_anime">
                            To LOVE-Ru Darkness
                          </Link>
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
        <div className="w-64 border-r border-gray-200 bg-white text-center fixed left-0 top-0 h-full sidebar transition-transform duration-300">
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
          <h1 className=" text-3xl">Kujō Rin/Plot</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/rin">Kujō Rin</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/rin" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a href="/rin_plot" className=" hover:underline hover:text-black">
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/rin_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">Plot</h2>
            <p>
              In the begining, Rin was seen as a minor, always serving Saki
              where or whenever she is is, but over time her role has seemingly
              increased. While Rin is very loyal and caring to Saki, she is also
              very dutiful. These made her conflicted when Saki once ran away
              from home, and Rin was ordered to bring her back, even by force.
              But after Saki managed to settle things with her family, she and
              Rin were able to remain friends.{" "}
            </p>
            <br />
            <p>
              Rin is usually calm and very composed, and is perhaps one of the
              most mature character in the series, at least among the students,
              despite how few moments her character was explored without being
              together with her friends. Like Saki and most other girls, she is
              also not completely safe from the antics that surround Rito Yuuki,
              and naturally, she has a negative impression of him, but she has
              shown few instances of potential to understand him better and
              perhaps grow more patient with him. Throughout most of the series,
              Rin is hardly ever seen without accompanying Saki Tenjouin and/or
              Aya Fujisaki, and has interacted personally with very few other
              characters in the series. However, in To LOVE-Ru Darkness, she has
              caught the notice of Momo, who is considering adding her to the
              Harem Plan, hoping that Rin would open up to consider Rito as a
              love interest.
            </p>
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
