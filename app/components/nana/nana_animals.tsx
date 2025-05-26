import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nana_animals = () => {
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
          <h1 className="mb-5 text-5xl">Nana Astar Deviluke/Animals</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/nana" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/nana_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/nana_animals"
                className="hover:underline hover:text-black"
              >
                Animals
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/nana_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/nana_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-1">
              <p>
                As Nana is able to communicate with animals, she has befriended
                animals across the space and kept them in Cyber Safari, a
                virtual area created by Momo.
              </p>
              <br />
              <p>
                Nana's D-Dial is created by Lala and summons these animals
                wherever the device locates then.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="To Love Ru/nanaanimals.jpg"
                alt="The Royal Palace of Deviluke."
                className="w-64 h-full object-cover rounded shadow flex-shrink-0"
              />
              <span className="text-xs mt-2 ml-3">
                Nana summons animals from her D-Dial.
              </span>
            </div>
          </div>

          <br />
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="font-bold text-2xl border-b">
              List of Nana's Animals
            </h2>
            <h3 className="text-xl mt-5 mb-2" id="manga">
              Nana's Animals (To LOVE-Ru)
            </h3>

            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/animals/Modori_skunk.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Modorin
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A purple skunk-like animal known as the Skunk of Youth
                        with the ability to make people temporarily younger by
                        spraying them with its gas. Originally Run's pet, she
                        decided to let the skunk stay in Nana's cyber safari
                        park, where it now lives with its own family in an
                        environment like its own home world.
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
                      src="To Love Ru/animals/Nana_MTLR_EP4_01.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Gii-Chan
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        Known as a Giga wild boar from the planet Shishinabe, a
                        huge pig-like animal with tusks, it was used against
                        Zastin and his subordinates as it rammed right through
                        them. According to Lala, it is a rare animal.
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
                      src="To Love Ru/animals/Jiro_Snake.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Jiro Snake
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge cobra-like animal which is the natural predator
                        of a frog-like species Erogama.
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
                      src="To Love Ru/animals/Crimson_Turtle.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Crimson Turtle
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A huge spike-shelled crimson-colored turtle that appears
                        as Saruyama won in a board game (however, it's unlikely
                        he kept it).
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
                      src="To Love Ru/animals/Oku_chan.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Oku-chan
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A giant red Kyuu Octopus from the planet Hacchi. Nana
                        attempted to use its suckers on her chest in a desperate
                        attempt to make her breasts bigger. It didn't work.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <h3 className="text-xl mt-5 mb-2" id="anime">
              Nana's Animals (To LOVE-Ru Darkness)
            </h3>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/animals/Marimotta.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Marimotta
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A small pet alien that looks like a pinkish-white
                        puffball with small bird feet and black pigmentation
                        around its eyes. It has a strong sense of smell, which
                        Nana uses to find her friends.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/animals/Gesoruski.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Gesoruski
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        An enormous squid which makes a sound like "Ororon", as
                        It is one of Ororon Squids.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/animals/Drasuke.webp"
                      alt="Peke"
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Drasuke
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A large carnivorous dragon that tried to eat Rito
                        immediately it found him in Cyber Safari.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src=" To Love Ru/animals/Meda-Q.webp"
                      alt=""
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Meda-Q
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A small baby alien from the planet Tentac. It has a
                        shelled body, one eye and several wriggly tentacles. It
                        likes to hug and wrap its tentacles around people it
                        likes, like Yami. It also likes sweet food, and after
                        eating one, it gets very wild, its small tentacles grow
                        much longer, and it begins wrapping (and stripping)
                        anyone around itself in classic ecchi fashion.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    <img
                      src="To Love Ru/animals/Cloud-on_(anime).webp"
                      alt=""
                      className="w-full h-full object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Cloud-on
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A cloud-like creature with a quite funny facial
                        appearance, It seems to have the ability to shoot
                        lightning as strongly enough to even trouble Yami.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    {/* intentionally left blank for no image */}
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Mikera
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A cloud-like creature with a quite funny facial
                        appearance, It seems to have the ability to shoot
                        lightning as strongly enough to even trouble Yami.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border border-black border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-60 p-4 align-center border-r border-black">
                    {/* intentionally left blank for no image */}
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-[purple] hover:underline hover:text-black font-bold text-lg mb-2">
                      Kyuu Octopus Babies
                    </p>
                    <ul className="list-disc pl-5 text-base">
                      <li>
                        A cloud-like creature with a quite funny facial
                        appearance, It seems to have the ability to shoot
                        lightning as strongly enough to even trouble Yami.
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
