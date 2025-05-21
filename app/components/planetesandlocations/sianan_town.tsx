import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sianan_town = () => {
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
          <h1 className="mb-5 text-5xl">Sainan Town</h1>
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-1">
              <p>
                <strong>Sainan Town</strong> (彩南町 Sainan machi) is the
                Japanese town where most of the main events occur in To Love-Ru
                series.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="To Love Ru/sainan.jpg"
                alt="The Royal Palace of Deviluke."
                className="w-80 h-40 object-cover rounded shadow flex-shrink-0"
              />
              <span className="mt-2 text-center text-sm font-medium">
                Sainan Town.
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold border-b mb-4" id="location">
            Location
          </h1>
          <li>
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Yuuki's House
            </a>{" "}
            - The house of Yuuki family.{" "}
            <a
              href="/rito"
              className="text-[purple] hover:underline hover:text-black"
            >
              Rito
            </a>{" "}
            and{" "}
            <a
              href="/mikan"
              className="text-[purple] hover:underline hover:text-black"
            >
              Yūki Mikan
            </a>{" "}
            are living here, while their parents,{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Saibai
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Ringo
            </a>{" "}
            are living in other places due to their works. Early in the story,{" "}
            <a
              href="/lala"
              className="text-[purple] hover:underline hover:text-black"
            >
              Lala
            </a>{" "}
            asks Rito to live with him.{" "}
            <a
              href="/nana"
              className="text-[purple] hover:underline hover:text-black"
            >
              Nana
            </a>{" "}
            and{" "}
            <a
              href="/momo"
              className="text-[purple] hover:underline hover:text-black"
            >
              Momo
            </a>{" "}
            also join the house later.
          </li>
          <li>
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Sainan High
            </a>{" "}
            - The high school of the town. Most of the major characters are
            attending this school.
          </li>
          <li>
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Sainan First Elementary School
            </a>{" "}
            - The school where Mikan is attending.{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Nogiwa Mami
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Kogure Sachie
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Makoto Ooyoshi
            </a>{" "}
            also attend this school.
          </li>
          <li>
            7-Twelve Convenience Store - A (branch of) convenince store near
            Yuuki's House.
          </li>
          <li>Park</li>
          <li>Shopping District</li>
          <li>Tenjouin's Department Store</li>
          <li>Super Vegeta - A supermarket in the shopping district.</li>
          <li>Starbox Coffee - A branch of the franchised coffee shop.</li>
          <li>Cafe Hasurin - The maid cafe where Sawada Mio works.</li>
          <li>Bennys Restaurant</li>
          <li>Library</li>
          <li>Water Theme Park</li>
          <li>
            Poka Poka Hotspring - The bath house where Yami takes a bath
            frequently.
          </li>
          <li>Shrine</li>
          <li>Saibai Studio</li>
          <li>
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Mikado's Clinic
            </a>
          </li>
          <li>
            Mezon Apartment -{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Zastin
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Maul
            </a>
            , and{" "}
            <a
              href="#"
              className="text-[purple] hover:underline hover:text-black"
            >
              Smutts
            </a>
            's place on Earth.
          </li>
          <br />
          <h1 className="text-2xl font-bold border-b mb-4" id="gallery">
            Gallery
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {[
              "https://static.wikia.nocookie.net/to-loveru/images/a/a5/Yuuki%27s_House_MTLR_EP8_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/4/45/7-Twelve_TLRD_EP2_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/a/ab/Tokimeki_Park_TLRD_EP3_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/6/65/Sainan_Shopping_District_MTLR_EP4_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/e/ee/Cafe_Hasurin_MTLR_EP10_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/9/99/Bennys_TLRD_EP6_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/9/9b/Starbox_Coffee_TLRD_OVA1_01.png",
              "https://static.wikia.nocookie.net/to-loveru/images/8/8e/Park_TLRD_EP4_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/9/98/Taiyaki_Stand_TLRD_EP9_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/a/ad/Riverside_TLRD_EP5_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/2/28/Poka_Poka_Hotspring_MTLR_EP1_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/d/dd/Shrine_TLRD_OVA2_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/2/29/Mikado_Clinic_MTLR_EP2_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/1/17/Mezon_Apartment_MTLR_EP5_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/b/bf/Water_Theme_Park_MTLR_EP12_01.png/",
              "https://static.wikia.nocookie.net/to-loveru/images/1/12/Mea%27s_Condominium_TLRD_EP11_01.png/",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-40 object-cover object-center transition-transform duration-200 hover:scale-105"
                  onClick={() => {
                    setSelectedImage(src);
                    setShowImageModal(true);
                  }}
                />
              </div>
            ))}
            {/* Image Modal rendered once, outside the map */}
            {showImageModal && selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setShowImageModal(false)}
              >
                <img
                  src={selectedImage}
                  alt=""
                  className="max-w-[full] max-h-[full] rounded shadow-lg border-4 border-[#DB49AC] bg-white"
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
          <h1 className="text-2xl font-bold border-b mb-4" id="trivia">
            Trivia
          </h1>
          <li>
            The name of some locations in the town are alluded to other series
            and the real world:
            <ol className="list-disc list-inside ml-12">
              <li>"Mezon Apartment" from Mezon Ikkoku.</li>
              <li>"Super Vegeta" from Dragon Ball Z.</li>
              <li>"Tokimeki Park" from Tokimeki Memorial.</li>
              <li>"7-Twelve" from 7-Eleven.</li>
              <li>"Bennys" from Benny's.</li>
              <li>"Starbox Coffee" from Starbucks.</li>
            </ol>
          </li>
          <br />
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
