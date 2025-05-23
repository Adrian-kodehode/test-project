import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Lala_inventions = () => {
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
        <div className="flex-1 text-black bg-white pl-8 pr-8 pt-8 max-w-4xl">
          <h1 className="mb-5 text-5xl">Lala Satalin Deviluke/Inventions</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/lala" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/lala_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/lala_inventions"
                className="hover:underline hover:text-black"
              >
                Inventions
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/lala_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/lala_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-1">
              <p>
                Lala creates a multitude of inventions throughout the whole
                series. Most of them are seemingly childish and toy-like with
                some of them having po original purpose aside from having fun.
                Her inventions seem to have a black swirl logo with four points,
                one on top, one below and one on each side, it's unknown if this
                symbol is unique to whatever Lala creates or if it is common on
                her planet. A running gag in the plot is that her inventions
                usually do not work as well as Lala and the others had hoped,
                often resulting into a perverted accident. A list of some of her
                inventions that are given by name and their functions (and also
                the downsides to them) are as follows:
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="To Love Ru/inventions.jpg"
                alt="The Royal Palace of Deviluke."
                className="w-64 h-40 object-cover rounded shadow flex-shrink-0"
              />
            </div>
          </div>

          <nav className="w-60 mt-5 bg-white border rounded mb-6">
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
                <a href="#devilukeans" className="hover:underline">
                  List
                </a>
                <ol className=" list-inside ml-5">
                  <li>
                    <a href="#manga" className="hover:underline">
                      1.1 Manga
                    </a>
                  </li>
                  <li>
                    <a href="#anime-only" className="hover:underline">
                      1.2 Anime Only
                    </a>
                  </li>
                  <li>
                    <a href="#drama" className="hover:underline">
                      1.3 Drama CD Only
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
          <br />
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="font-bold text-2xl border-b">List</h2>
            <h3 className="text-xl mt-5 mb-2" id="manga">
              Manga
            </h3>

            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Peke
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Lala's most important invention, a sentient costume
                        robot that can transform itself into clothes for Lala to
                        wear, or repair and modify other clothes, and grow wings
                        so that Lala can fly, and serves as Lala's advisor. Peke
                        is one of the few of Lala's inventions that causes the
                        least trouble, especially to Rito, but there are times
                        when it does happen (To Love-Ru Chapter 39). Ironically,
                        Peke would cause more trouble for Lala herself than for
                        other people, as more than a few times, Peke's depleted
                        energy, distraction, or untimely removal would leave
                        Lala completely naked. Interestingly, Lala names almost
                        all of her inventions with the honorific "-kun", while
                        she almost never uses honorifics for actual living
                        people, not even for Peke, who is both her own character
                        and Lala's invention.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart2.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Pyon-Pyon Warp-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Lala's earliest and perhaps most infamous invention.
                        This bracelet-like invention allows any living person
                        (or "unit" as used by Lala) to warp a short distance to
                        a random destination, as the user cannot specify the
                        destination. Lala explained that it would only be used
                        in emergency situations, such as being chased. After the
                        ring is used once, it takes a full day to recharge its
                        power for use again. Another infamous drawback is that
                        Warp-kun can only warp living things and not anything
                        artificial, including their clothes, meaning that if the
                        person warps to a random place, they will be completely
                        naked. Later in To Love-Ru Darkness, when it is used by
                        Rito and Tearju to escape from the Principal, it has
                        apparently been upgraded just enough to warp them with
                        their socks.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart3.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      D-Dial
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Like a regular phone, she can use it to call other
                        people. But unlike a normal phone, it uses dimensional
                        technology that contains her inventions, which she uses
                        to "call" them. She has made copies for her sisters,
                        Nana and Momo, who use them to call animals and plants,
                        respectively. When a D-Dial malfunctions, it has been
                        shown to randomly summon objects from the user's virtual
                        space into the real world.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart4.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Space Distortion
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Lala built her own house and laboratory, roughly the
                        same size as the Yuuki house, but actually existing
                        within the household itself through spatial distortion.
                        Even within her D-Dial, which she uses to access her
                        stored inventions.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart5.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Go Go Vacuum-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        This invention works just like a vacuum; it sucks things
                        into itself. However, the power of this vacuum is so
                        great that it has the potential to suck up anything in
                        its path. It was later destroyed, so Lala invented
                        another one called <strong>Go-Go Vacuum-Kun 2</strong>.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart6.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Anti Gravity wing system
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        It is an invention that can give the user a pair of
                        devilish wings and allow them to fly. Peke probably has
                        it inside her, which is why she can fly. The appearance
                        of this device is invisible.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart7.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Almighty Tool
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Also known as the All Purpose Tool, this is a wand-like
                        device that Lala uses to quickly build a new invention
                        wherever she is, or to modify and upgrade any old Earth
                        object into another of her inventions. The devilish
                        wings on the sides can make a lighter to start a
                        campfire, or they can come together to form a long
                        blade, turning it into a sword.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart8.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Bum Bum Bat-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An ordinary baseball bat at first, but after Lala
                        modified it with her Almighty Tool, it now has three
                        hidden rockets for extra power when hitting the ball,
                        but the power is so great that it sends the bat flying
                        along with it's user who still has a grip on it.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart9.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Sniff-Sniff Trace-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A robot dog that can sniff out anything with a scent.
                        However, it has a tendency to wander off when it smells
                        something else that has a nice smell, such as girls'
                        panties.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart10.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Slash-Slash Warp-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A toilet-like machine that warps a creature to another
                        planet by "flushing" them down the machine. It seems to
                        work just like Pyon Pyon Warp-kun, as it transports a
                        living thing to a random place, but the creature still
                        has their clothing and it does not need a whole day to
                        recharge.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart11.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Splish Splash wave-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A turtle shaped machine that creates waves on a swimming
                        pool, however it causes panic when it creates a huge
                        whirlpool in the center and could send people flying.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart12.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Chomp-Munchy Eater-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A dinosaur-like device that (as the name suggests) eats
                        anything in Lala's choosing. It was first used when Lala
                        wanted it to eat away a typhoon but it got blown away.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart13.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Deru-Deru Vision-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A small machine that projects life-like images of
                        ghosts, which Lala used during her class' Kimodameshi
                        (test of courage). This invention was damaged (when
                        Haruna threw Rito at it, out of fear) and later
                        exploded.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart14.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Berserker DX Modified Version Spray Type-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A spray used to try to cheer up Rito but he dodged it
                        and accidentally hit some mice, causing the mice to
                        become very aggressive and perverted, as they began to
                        bite students and go up girls skirts.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart15.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Sticky-Gooey Launcher-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge cannon like gun that shoots a really sticky goo
                        substance. It was first used by Lala on her first battle
                        with Yami but misses her and hits Rito's face instead.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart16.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Grabby-Grabby Hand-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A claw like invention that extends its to grab certain
                        objects or people. This was also used against Yami by
                        Lala in their first battle, it was less effective as
                        Yami kept dodging it.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart17.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Spinny-Spunny Rope-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A long metal rope like device with a heart shape part on
                        each end. It is used to tie around certain objects
                        really tightly and is incredibly hard to break free from
                        (except for Yami who was able to cut her self free).
                        This invention is mainly use for packing, but it can be
                        really embarrassing if it wear to get tangled onto a
                        girls body. Lala created a second version called
                        Wind-Wind Rope-Kun 2.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart18.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                    <br />
                    <img
                      src="To Love Ru/inventionart19.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Maru-Maru Change-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A Machine that switches the bodies of two people. This
                        invention has only been used three times in the manga;
                        the first was when Lala switched Rito and a stray dog;
                        then Lala switched bodies with Haruna; lastly Yami and
                        Mikan switched bodies for a day.
                        <ol className="list-decimal mt-5">
                          <li>
                            {" "}
                            A smaller version of this called the{" "}
                            <strong>
                              Round Round Change-Kun Revised Beta Edition
                            </strong>{" "}
                            was accidentally used in a recent chapter to switch
                            Rito and Haruna's bodies for several hours. This
                            version had a timer. A similar version of this too
                            was used by Nana and Momo to switch with each other
                            to secretly see if Rito would be attracted to
                            someone like Nana who has really small breasts.
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart20.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Bye-Bye Memory-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An invention that resembles a short joy stick with a
                        button on top with two small wings beside it, it's
                        purpose is to wipe certain events from people's minds.
                        Lala used it to wipe any memory of herself from everyone
                        on Earth after she canceled the engagement with Rito to
                        start over, however this had no effect at all on anyone
                        except for Zastin, who lost all of his memories.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/Badge.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Peke Badge Express
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A badge with a similar face of Peke but different
                        shaped, it's either heart shaped with spiral eyes or
                        diamond with heart shaped eyes. Also like Peke, it can
                        change the users clothing when wearing it, but it can
                        only contain data from one pair of clothing. The two
                        possibly attract each other like magnets.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/To-love-ru-1865655.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Pyon-Pyon Warp-Kun DX
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A modified version of the original Warp-Kun and it can
                        transport several people with their clothing, but
                        unfortunately when it teleports someone, the machine
                        itself stays where it is, making the teleportation a
                        one-way trip, perhaps stranding the passengers at their
                        destination.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="/To Love Ru/inventions/Swim-Swim_Dolphin-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Swim-Swim Dolphin-Kun/Jet Dolphin-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A talking robotic dolphin that was used for Yui to ride
                        on the water (who couldn't swim) but she couldn't
                        control the speed, the direction or whoever it hit.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventionart10.jpg"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Sui-Sui Board-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An ironboard shaped machine that hovers of the ground
                        and has a tremendous speed (too much in fact for humans
                        to handle).
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="public/To Love Ru/inventions/Snow.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Kon-Kon Snow-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge fox like machine that hovers to the sky and
                        controls the weather by making it snow, however after a
                        while it creates a terrible snow storm because Lala
                        forgot to turn it off.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="public/To Love Ru/inventions/Bath.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Horibiro-Bath Time-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A device put next to the door of a bathroom and turns
                        the whole room into a huge public bath.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/OVA_Episode_1_-_Pai-Pai_Rocket.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Pai-Pai Rocket-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Pai-Pai Rocket-kun was (inexplicably) a rocket that was
                        supposed to change Lala's breasts to perfect
                        proportions. When Rito unwillingly crashed into it, it
                        was destroyed, but not without turning Rito into a girl.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="/To Love Ru/inventions/Cancel_Ammo_Launcher-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Cancel Ammo Launcher-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        It look like a rocket launcher that can cancel the
                        effects of other devices.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Koro_Koro_Danjo-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Koro Koro Danjo-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A gun-like machine that can change a boy into a girl. It
                        has a time limit so it can be embarrassing when a girl
                        changes back into a boy in public.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Glasses.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Suke Suke Goggle-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A pair of glasses that Lala uses to look inside her
                        inventions. Apparently, it can also look through other
                        people's clothes and see their undergarments and there
                        is a dial on the side, when turned the user can see
                        others naked completely. It can attach itself onto the
                        user so can be hard to take off.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Slapping-Firework-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Slapping-Firework-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A round bomb with a fuse on top. When lit and thrown to
                        the sky, it creates a huge firework display. This was
                        used to send Lacospo flying and going out with a bang
                        (literally)!
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Umpaka-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Umapaka-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A robotic horse that by riding on it the user will lose
                        weight, unfortunately it was to fast to withstand and
                        the user will lose too much weight and become too
                        skinny.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Flap.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Flap-Haitastu-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge robot messenger bird that can even carry an
                        actual person and fly off somewhere, Lala apparently
                        forgot that she left it carrying Rito while flying for
                        hours. It also lacks attention span. And when Rito told
                        it to put him down, it dropped him while still airborne.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Glue.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Clingy-Clingy Glue-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A device that turns any two objects or body parts into
                        powerful magnets that attract each other. It can trouble
                        just holding it.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Boobie-Boobie_Up-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Boobie-Boobie Up-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A small device practically in the shape of a breast with
                        a cute face on it which is to increase the size of a
                        females breasts. It was used to grow Nana's breast when
                        it exploded, which it did but it also decreased Momo's
                        due to being too close. However this invention was still
                        a prototype and incomplete so the effects for both of
                        them wear off after a short while.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Mira_Mira_Show-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Miru Miru Shorts-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A wand like device with an angel-like figure on top
                        wearing panties on it's head. The purpose of this
                        invention was to turn Rito into a pair of panties to be
                        worn by Mikan to see what might be bothering her. While
                        like this Rito can still move on his own and sweat,
                        there is also a time limit so it can also be really
                        embarrassing to change back in public, especially
                        without any clothes on.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Hoop.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Gone-Gone Hoop-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Lala created yet another teleportation device, a hoop
                        that by going throw it the user will be warped into some
                        random location, but with the same flaw as Pyon-Pyon
                        Warp-Kun as it also teleports people almost completely
                        naked.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Animal.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Animal Change-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Small invention that somehow changes someone into a
                        random animal, there is a time limit so that the person
                        that was transformed into an animal will turn back but
                        possibly without clothes.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="/To Love Ru/inventions/Gogo_Vacuum-Kun_A.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Go Go Vacuum-Kun A
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An invention that resembles an anglerfish with the same
                        capabilities as the original Go-Go Vacuum-Kun which Lala
                        created at school when Celine turn over a garbage bin
                        and used it to clean up the mess with the scanner on its
                        head to detect nearby trash. When this invention was
                        destroyed, it is revealed that it was powered by a micro
                        black hole.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Hard_Hard_Kacchin-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Hard Hard Kacchin-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A spray that can instantly cool and solidify liquid or
                        viscous objects. Used by Lala during the fight against
                        Yami in Darkness form.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Slippery_Slippery_Slip-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Slippery Slippery Slip-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A bomb that turn pavement smooth as icing and who stand
                        above will slip. Used by Lala during the fight against
                        Yami in Darkness form.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Bubbly-Bubbly_Soap-kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Bubbly-Bubbly Soap-kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A litle mecha that produce foam with tiny bubbles to
                        wash while bathing.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black"></td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Nyan Nyan Copy-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>A cat robot that can make a clone of anything.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Nugi_Nugi_Changing_Clothes-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Nugi Nugi Changing Clothes-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A robot that can remove automatically the clothes of the
                        user.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <h2 className="font-bold text-lg mb-2" id="anime-only">
              Anime Only
            </h2>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Deru-Deru_Mizuzou-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Deru-Deru Mizuzou-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An invention which look like a purple elefant. Its
                        function is to throw out water from its interior through
                        its tusk with a great power that is favorable to the
                        great pressure that is capable to wield.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Chilly.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Chilly-Chilly Container-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An invention similar to a huge ice cooler, it is used to
                        store food inside and keep it fresh. This invention also
                        has space distortion so it is a lot bigger on the inside
                        to contain large-sized and large amounts of food in it.
                        In the anime, it was shown containing a giant octopus, a
                        giant squid, a giant lobster and a giant worm like
                        creature that destroys a large part of the school.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Doggy.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Bow-Bow Doggie-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A dog-like invention that is used as a guard dog to
                        attack anyone suspicious. Unfortunately it attacks
                        almost anyone in sight (especially Saki) and rips their
                        clothes off with its teeth, leaving the person naked.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Racket.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      QQ-Service Ace-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Similer to Buzzing Bat-Kun, this invention is a sports
                        equipment with built-in rocket thrusts on, instead of
                        baseball bat, its a tennis racket.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Rocket.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      AA Rocket-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge rocket that was used to send Pikari back to his
                        planet.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Ose_Ose_Push-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Ose Ose Push-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A group of robotic gnomes who forces peoples to do
                        something positively or aggressively.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              {" "}
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/inventions/Ami-Ami_Net-Kun.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Ami-Ami Net-Kun
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A gun which shoots a dragnet for capturing targets.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <h2 className="font-bold text-lg mb-2" id="drama">
              Drama CD Only
            </h2>
            <div className="ml-7">
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Hoe-Hoe Kujira-Kun
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Boogie-Woogie Dance-Kun
                </a>
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
