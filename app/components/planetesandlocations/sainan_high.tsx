import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sianan_high = () => {
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
          <h1 className="mb-5 text-5xl">Sainan High</h1>
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-1">
                  <strong>Sainan Metropolitan High School</strong> or simply{" "}
                  <strong>Sainan High</strong> (彩南高校) is the school where
                  all of the main characters (except for{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    Mikan
                  </a>
                  ) study. As the series progressed, more and more of{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    Rito
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    Lala
                  </a>
                  's friends enroll in the school, usually girls. A running gag
                  in the series is that the female characters in the series do
                  not have any difficulty enrolling despite being aliens because
                  the{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    perverted principal
                  </a>{" "}
                  accepts any cute girl who enrolls there. Sometimes, the
                  principal would even invite other cute girls to go to his
                  school (i.e.{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    Riko
                  </a>
                </div>
                <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-4">
                  <img
                    src="To Love Ru/SainanHigh.jpg"
                    alt="Sainan high school main building."
                    className="w-72 h-40 object-cover rounded-lg shadow-lg "
                  />
                  <span className="mt-2 text-xs text-gray-500 text-center w-full">
                    Sainan high school main building.
                  </span>
                </div>
              </div>
              <p>
                ). However, there were times where a male character was able to
                enroll in the school easily as well, like{" "}
                <a
                  href="#"
                  className="text-[purple] underline hover:text-black"
                >
                  Ren
                </a>
                , who enrolled in the middle of the year. A reason for this
                could be that the principal's pervertedness does not pick any
                gender (like in one case when the principal chased after{" "}
                <a
                  href="#"
                  className="text-[purple] underline hover:text-black"
                >
                  Run
                </a>
                , so she transformed into Ren, hoping that the principal would
                stop, only to have him say he was okay with that too, and resume
                chasing).
              </p>
              <br />
              <p>
                The school was destroyed in{" "}
                <a
                  href="#"
                  className="text-[purple] underline hover:text-black"
                >
                  Chapter 72
                </a>{" "}
                due to Lala and Yami having a fight, though it was rebuilt by{" "}
                <a
                  href="#"
                  className="text-[purple] underline hover:text-black"
                >
                  Chapter 74
                </a>
                .
              </p>
            </div>
          </div>
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
                <a href="#uniforms" className="hover:underline">
                  Uniforms
                </a>
              </li>
              <li>
                <a href="#students" className="hover:underline">
                  Students
                </a>
                <ol className="list-item list-inside ml-5">
                  <li>
                    <a href="#1styear" className="hover:underline">
                      1st Year
                    </a>
                  </li>
                  <li>
                    <a href="#2ndyear" className="hover:underline">
                      2nd Year
                    </a>
                  </li>
                  <li>
                    <a href="#3rdyear" className="hover:underline">
                      3rd Year
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#staff" className="hover:underline">
                  Staff
                </a>
              </li>
              <li>
                <a href="gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold border-b mb-4" id="uniforms">
            Uniforms
          </h1>
          <p>
            During summer, the male unifom consists a white short sleeve button
            shirt and green trousers with a yellow cross-hatched pattern. In
            Winter, they wear a lemon coloured blazer and a green tie.
          </p>
          <br />
          <p>
            During summer, the female uniform also consists a white button shirt
            with a sleeve-less lemon colored jumper, a green bow-tie and green
            skirts with yellow coloured cross-hatched pattern. In Winter, they
            also wear a lemon colored blazer instead of a jumper.
          </p>
          <br />

          <h1 className="text-2xl font-bold border-b mb-4" id="students">
            Students
          </h1>
          <p>This list only includes characters who have names.</p>
          <br />
          <h2 className="font-bold text-xl mb-5">1st Year</h2>
          <div className="ml-8">
            <li>
              <a
                href="/momo"
                className="text-[purple] hover:underline hover:text-black"
              >
                Momo Belia Deviluke
              </a>
            </li>
            <li>
              <a
                href="/nana"
                className="text-[purple] hover:underline hover:text-black"
              >
                Nana Astra Deviluke
              </a>
            </li>
            <li>
              <a
                href="/mea"
                className="text-[purple] hover:underline hover:text-black"
              >
                Kurosaki Mea
              </a>
            </li>
            <li>
              <a
                href="/yami"
                className="text-[purple] hover:underline hover:text-black"
              >
                Yami{" "}
              </a>
              (Golden Darkness)
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Tachibana
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Nakajima
              </a>
            </li>
            <li>Kurata</li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Sugimura
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Chiaki Yanagida
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Reina Kozakura
              </a>
            </li>
          </div>
          <h2 className="font-bold text-xl mb-5 mt-5">2nd Year</h2>
          <div className="ml-8">
            <li>
              <a
                href="/rito"
                className="text-[purple] hover:underline hover:text-black"
              >
                Yūki Rito
              </a>
            </li>
            <li>
              <a
                href="/lala"
                className="text-[purple] hover:underline hover:text-black"
              >
                Lala Satalin Deviluke
              </a>
            </li>
            <li>
              <a
                href="/haruna"
                className="text-[purple] hover:underline hover:text-black"
              >
                Sairenji Haruna
              </a>
            </li>
            <li>
              <a
                href="/yui"
                className="text-[purple] hover:underline hover:text-black"
              >
                Kotegawa Yui
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Ren Elsie Jewelria
              </a>
            </li>
            <li>
              <a
                href="/run"
                className="text-[purple] hover:underline hover:text-black"
              >
                Run Elsie Jewelria
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Sawada Mio
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Momioka Risa
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Saruyama Kenichi
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Oshizu Murasame
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Arai Sayaka
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Shirayuri Koyomi
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Matome Ageru
              </a>
            </li>
          </div>
          <h2 className="font-bold text-xl mb-5 mt-5">3rd Year</h2>
          <div className="ml-8">
            <li>
              <a
                href="/saki"
                className="text-[purple] hover:underline hover:text-black"
              >
                Tenjōin Saki
              </a>
            </li>
            <li>
              <a
                href="/rin"
                className="text-[purple] hover:underline hover:text-black"
              >
                Kujō Rin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Fujisaki Ayako
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Motemitsu Taizō
              </a>
            </li>
            <li>Kusao</li>
            <br />
          </div>
          <p>
            The first ones to be introduced as students of Sainan High were Rito
            Yuuki, his male friend Kenichi Saruyama, and Rito's crush Haruna
            Sairenji. In the second chapter, Haruna's perverted friends, Risa
            Momioka and Mio Sawada, were also introduced briefly. Then, by the
            fourth chapter, Lala also enrolled in Sainan High to become closer
            to Rito. When Haruna toured Lala around the school, another
            recurring character was introduced: Taizou Motemitsu, the pitcher of
            the baseball team who's notorious for hitting on girls then suddenly
            rejected and exclaimed by his posse. By the twentieth chapter, one
            of Lala's childhood friends, Ren Elsie Jewelria, also enrolled in
            Sainan High to become closer to Lala. A few chapters later, three
            more girls were introduced, the arrogant queen bee Saki Tenjouin,
            and her friends Rin Kujou and Aya Fujisaki, all three being one year
            higher than Rito and his friends. Later, Ren's female counterpart,
            Run, also enrolled in the school despite Ren being enrolled there
            already.{" "}
          </p>
          <br />
          <p>
            Rito and Lala initially attempted to hide the fact that Lala is an
            alien. Students would often notice Lala's Devilukean tail swinging
            behind her, but at first they simply passed it off as some
            accessory. Eventually, their friends discovered that she is actually
            an alien, to which they reacted surprisingly unsurprised. And soon
            enough, much of the entire school knows that she is an alien, also
            none too surprised.
          </p>
          <br />
          <p>
            On Rito and Lala's second year, Yui Kotegawa was introduced, who is
            a member of the student morals committee, and is often seen
            reprimanding the students' "shameless" behavior. In the abandoned
            building next to the school, there lived a ghost named Shizu
            Murasame, who soon enrolled in the middle of the year after{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Dr. Mikado
            </a>{" "}
            gave her an artificial body.
          </p>
          <br />
          <p>
            In To LOVE-Ru Darkness, Lala's twin sisters, Momo and Nana, enroll
            as well as Golden Darkness (Yami). Momo and Nana enrolled in Sainan
            High because Momo would like to keep an eye on Rito and his girls so
            that her{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Harem Plan
            </a>{" "}
            may succeed (she just convinced Nana to join her in enrolling). Nana
            soon befriends Mea Kurosaki, who is revealed to be a second
            generation{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Transformation Weapon
            </a>{" "}
            (Yami's little sister), who joined Sainan High a month prior to keep
            an eye on Golden Darkness.
          </p>
          <br />
          <p>
            Right after enrolling, Momo instantly becomes popular, and soon has
            her own fan club, the{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Venus Momo Club
            </a>{" "}
            (VMC). Like her sister, the club knows that Momo is an alien
            princess from the planet Deviluke. They seem to have nothing better
            to do than to follow and worship her, which she finds annoying.
          </p>
          <br />
          <h1 className="text-2xl font-bold border-b mb-4" id="staff">
            Staff
          </h1>
          <p>
            {" "}
            The most prominent staff in the series is{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Ryoko Mikado
            </a>
            , the school doctor, who also happens to be an alien. She becomes a
            close friend and ally to Rito, Lala, and their friends, and they
            would consult with her whenever they have alien problems. The second
            most prominent staff is the{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              notoriously perverted unnamed principal
            </a>{" "}
            of the school. The principal would usually appear only to chase his
            female students or to offer other cute girls to enroll into his
            school. The third most prominent staff is{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Honekawa-Sensei
            </a>
            , Rito and Lala's elderly homeroom teacher. He is the only seen
            teacher who actually discusses something in the classroom. In To
            LOVE-Ru Darkness,{" "}
            <a
              href="/tearju"
              className="text-[purple] underline hover:text-black"
            >
              Dr. Tearju Lunatique
            </a>{" "}
            substitutes Honekawa as Rito and Lala's homeroom teacher before
            becoming the homeroom teacher of Nana, Momo, Yami and Mea's class.
            The least prominent staff are{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Sasuga
            </a>
            , the tennis club's handsome advisor, and{" "}
            <a href="#" className="text-[purple] underline hover:text-black">
              Naruiwa
            </a>
            , a teacher in the disciplinary team.
          </p>
          <br />
          <h1 className="text-2xl font-bold border-b mb-4" id="gallery">
            Gallery
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {[
              "To Love Ru/SainanHigh1.jpg",
              "To Love Ru/SainanHigh2.jpg",
              "To Love Ru/SainanHigh3.jpg",
              "To Love Ru/SainanHigh4.jpg",
              "To Love Ru/SainanHigh5.jpg",
              "To Love Ru/SainanHigh6.jpg",
              "To Love Ru/SainanHigh7.jpg",
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
            ))}
          </div>
          <br />
          <h1 className="text-2xl font-bold border-b mb-4" id="trivia">
            Trivia
          </h1>
          <div className="ml-8">
            {" "}
            <li>
              There are warning posters of the Principal throughout the school.
            </li>
            <li>
              There are also recruiting posters of the VMC throughout the
              school.
            </li>
            <li>
              The school's uniform design is similar to the uniform from the
              One-Shot Manga Futagami Double, illustrated and authored by Yabuki
              Kentaro, the illustrator of the To Love-Ru series.
            </li>
            <li>
              The name of the high school in To Love-Ru, Sainan (彩南), is a
              homophone to the Japanese word for catastrophe (災難). This is
              probably a wordplay related to the theme of the series.
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
