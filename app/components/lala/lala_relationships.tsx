import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Lala_relationships = () => {
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
          <div className="flex items-start gap-6 mb-6"></div>
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
                <a href="#relationships" className="hover:underline">
                  Relationships with Other Characters
                </a>
                <ol className=" list-inside ml-5">
                  <li>
                    <a href="#rito-yuuki" className="hover:underline">
                      1.1 Rito Yuuki
                    </a>
                  </li>
                  <li>
                    <a href="#haruna-sairenji" className="hover:underline">
                      1.2 Haruna Sairenji
                    </a>
                  </li>
                  <li>
                    <a href="#peke" className="hover:underline">
                      1.3 Peke
                    </a>
                  </li>
                  <li>
                    <a href="#nana-astar-deviluke" className="hover:underline">
                      1.4 Nana Astar Deviluke
                    </a>
                  </li>
                  <li>
                    <a href="#momo-belia-deviluke" className="hover:underline">
                      1.5 Momo Belia Deviluke
                    </a>
                  </li>
                  <li>
                    <a href="#mikan-yuuki" className="hover:underline">
                      1.6 Mikan Yuuki
                    </a>
                  </li>
                  <li>
                    <a href="#golden-darkness" className="hover:underline">
                      1.7 Golden Darkness (Yami/Eve)
                    </a>
                  </li>
                  <li>
                    <a href="#yui-kotegawa" className="hover:underline">
                      1.8 Yui Kotegawa
                    </a>
                  </li>
                  <li>
                    <a href="#ren-elsie-jewelria" className="hover:underline">
                      1.9 Ren Elsie Jewelria
                    </a>
                  </li>
                  <li>
                    <a href="#run-elsie-jewelria" className="hover:underline">
                      1.10 Run Elsie Jewelria
                    </a>
                  </li>
                  <li>
                    <a href="#saki-tenjouin" className="hover:underline">
                      1.11 Saki Tenjouin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#risa-momioka-mio-sawada"
                      className="hover:underline"
                    >
                      1.12 Risa Momioka &amp; Mio Sawada
                    </a>
                  </li>
                  <li>
                    <a href="#mikado-ryouko" className="hover:underline">
                      1.13 Mikado Ryouko
                    </a>
                  </li>
                  <li>
                    <a href="#gid-lucione-deviluke" className="hover:underline">
                      1.14 Gid Lucione Deviluke
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sephie-michaela-deviluke"
                      className="hover:underline"
                    >
                      1.15 Sephie Michaela Deviluke
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="relationships">
            Relationships with Other Characters
          </h2>
          <h3>
            <a
              href="/rito"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Rito Yuuki
            </a>
          </h3>
          <p>
            In the first chapter, Lala only pretends to love Rito so that she
            can stay on Earth and escape her marriage suitors. However, after he
            saves her (or rather tries to save her) from Zastin and his
            subordinates, and reasons the necessity of love and freedom in
            marriage, Lala mistakenly assumes that Rito truly understood her
            feelings, and she really does fall in love with him and wants to
            marry him. It is her marriage to him that will make him the next
            king of Deviluke, after her father.
          </p>
          <br />
          <p>
            At first, Lala's love for Rito appears to be childish. She often
            enthusiastically hugs him and openly shows her affection to him. She
            claims that he's good "When push comes to shove" (Chapter 5), and
            believes that he is "The most dependable person in the Universe"
            (Chapter 19). As the story progresses, Lala gradually matures, and
            so does her love for Rito, as it is not as insane as before. Her
            (somewhat) calmer attitude around him has allowed them to develop a
            closer relationship.
          </p>{" "}
          <br />
          <p>
            In the last chapter of To Love-Ru, Rito finally confesses to Lala
            that he loves her. While she is very happy to hear it, she is also
            overjoyed when he tells her that he loves Haruna as well, believing
            that he loves both. In actuality, Lala knows that if Rito marries
            her, then as the new king of Deviluke, he could also marry Haruna,
            who has become Lala's best friend. But when Rito's bumbling last
            attempt to confess to Haruna finds him blindly confessing to four
            other characters, none of whom were Haruna herself, Lala expresses
            greater joy or happiness of everyone marrying Rito so that they
            could all stay together, perhaps proving that Lala's maturity still
            needs to grow some more.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, their feelings for each other remain the
            same, and they both now enjoy a more calm and comfortable
            relationship, but they still haven't moved forward into a more
            romantic relationship, due to Rito wanting to confess to Haruna
            first, to which Lala encourages. After all the time they had to know
            each other better, they both now genuinely see something special in
            each other. When Rito hears about how much Lala loves her sisters,
            and learns that Lala is truly a kind and pure girl, he falls more in
            love with her (To Love-Ru Darkness chapter 10). And when Rito goes
            to comfort and give advice and encouragement to a heartbroken Nana,
            Lala notices that Nana has cheered up, and she states that it's as
            expected of Rito (To Love-Ru Darkness chapter 21).
          </p>
          <br />
          <p>
            However, Peke wondered that if it's ok to leave her where it is now,
            saying that there hasn't been any real development since Rito's
            confession to her and also says that it's not enough. With some
            encouragement from Momo (and for the sake of completing her Harem
            plan), Momo tells her to be more appealing towards Rito. Lala starts
            acting like her old self and being really clingy to Rito again. Lala
            also teleported into the bathtub where Rito currently was
            (reflecting the time first they met). She started coming onto him
            and even wanted to try a kiss. (To Love-Ru Darkness chapter 34)
          </p>
          <br />
          <p>
            After an ecchi moment in the bathroom, Lala practices kissing Rito
            with the stuffed bunny he gave her, when Nana walks in and Lala
            tells her about Rito's feelings. The next day, Rito confronts Lala
            on top of the school and admits that he can't kiss her until he's
            figured out his feelings, something Lala has expected, since Nana
            told her the previous night. She then apologizes to Rito for loving
            him so much she didn't realize his feelings. She then proceeded to
            kiss him on the cheek and states that until he's ready, she'll be
            waiting for a special kiss from him. (To Love-Ru Darkness chapter
            35)
          </p>
          <br />
          <p>
            Lala is a very important existance in Rito life and vice versa for
            rito just the thought of lala not being apart of his life pains him
            greatly and gets anxious whenever she's not around as for Lala as
            there feelings continue to grow for each other throughout the series
            Rito has become a irreplaceable existance to her.
          </p>
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
