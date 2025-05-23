import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Plants = () => {
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
          <h1 className=" text-3xl">Momo Belia Deviluke/Plants</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/momo">Momo Belia Deviluke</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/momo" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/plot"
                className="text-[purple] hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a href="/plants" className=" hover:underline hover:text-black">
                Plants
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/quotes"
                className="text-[purple] hover:underline hover:text-black"
              >
                Quotes
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <p>
              Due to{" "}
              <a
                href="/momo"
                className="text-[purple] underline hover:text-black"
              >
                Momo
              </a>
              's ability to communicate with plants, she has befriended plants
              from all across space and kept them as her pets. Her{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                D-Dial
              </a>{" "}
              is invented by{" "}
              <a
                href="
              /lala"
                className="text-[purple] underline hover:text-black"
              >
                Lala
              </a>
              , for summoning plants wherever she is from her{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Cyber Garden
              </a>
              , a virtual space that she created where she keeps her plants.
            </p>
            <br />
            <div className="ml-8">
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Carnivorous Plant:
                </a>
                Unnamed plant that appears in chapter 112 for capturing Ranjula.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Shibarisugi:{" "}
                </a>
                A monstrous tree from planet Okiwana. Unlike normal trees, it
                has a face with red eyes a mouth and has lots of roots that can
                be used as tentacles. it was used against Zastin to grab him.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Watermelon of Planet Uri:
                </a>
                Watermelon of A huge sentient watermelon with arms, legs and a
                mouth from the planet Melon, it spits out watermelon juice and
                seeds from its mouth and controls its roots like tentacles. It
                was used for the game "Watermelon Splitting". and it didn't seem
                to mind being eaten as Momo stated it takes pride in his flavor,
                however, everyone found it too creepy, which upsets it, causing
                it to retaliate on the main cast. In the end, it was cut up by
                Yami and eaten by some of the characters.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Adrena Flower:{" "}
                </a>
                A flower that increases excitement, it was used on the Principal
                for Rito and Yui not to part ways.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Rain Flower:{" "}
                </a>
                flower like flower that pours rain, it was used for Rito and Yui
                to run to Rito's house.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Aphrodisiac Flower:
                </a>
                Momo mentions that she has this type of flower however it is
                currently unseen. As the name suggests, it probably stimulates
                ones sexual desire, although Momo said it's only temporary.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Jikido Flower:
                </a>
                A flower that changes the personality of anyone who smells it,
                Celine used it when she summoned allot of flowers from Momo's
                D-Dial and Rito accidentally smelled it which altered his
                personality (turning him to an actual pervert).
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Kenja Flower:
                </a>
                A flower that heals the effect of the Jikido flower, it was used
                by Momo for Rito to turn to normal from smelling the Jikido
                Flower. It can also be used as a calming agent.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Cannon Flower:
                </a>
                A flower from planet Juda and a species of garden balsam, it's
                huge and has a mouth which shoots fist size seeds. It was used
                when Momo protected Rito and Yami from Azenda.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Black Rose:
                </a>
                A black rose from planet Zelas that paralyzes the body and
                disrupts the concentration of the person.It was used when Momo
                protected Rito and Yami from Azenda.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Dazuul Seed:
                </a>
                Seeds that instantly grow when pressed against some physical
                force and wrap around anything or anyone within its reach,
                although it seems to molest girls private parts when caught in
                it. Momo seems to sense when they start growing.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Rainbow Rose:
                </a>
                Multi-colored roses that shine all sorts of different colors of
                a rainbow, Momo states that they are very rare even in space.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Milkea Flower:
                </a>
                A plant then secretes a white nectar that maintains the beauty
                of skin and also soothes fatigue. Momo used this plant when she
                and Rito shared "ghost stories" with Nemesis.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Chucchu Weed:
                </a>
                A mass of giant vine tentacles with lips. It absorbs nutrients
                by using its lips to suck body secretions from any close by
                lifeform. Momo accidentally summons this plant while trying to
                get Rito and Kyouko into a romantic situation.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold "
                >
                  Philings Flower:
                </a>
                A beautiful flower which has pink-coloured petals. Most of the
                flower tends to be withered before flowering.
              </li>
            </div>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4">Anime Only</h2>
            <div className="ml-8">
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold"
                >
                  Celine:
                </a>{" "}
                While still in her original plant form, Celine was summoned by
                Momo as one of her temporary plants in the fourth OVA.
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black font-bold"
                >
                  Sugitani:
                </a>{" "}
                A huge sentient tree with a face on it from the planet Cedar. It
                produces a certain pollon that whoever breathes it in will act
                freely and express their hidden desires. Evidently Devilukeans
                seem to be immune to its effects, although it had no effect on
                Rito what so ever, this could be due to him already being honest
                with himself, any other reason if any is unknown. The tree seems
                to have perverted desires as when it breathed it himself, it
                started molesting Nana and Momo.
              </li>
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
