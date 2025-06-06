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
          <h1 className="mb-5 text-5xl">Lala Satalin Deviluke/Relationship</h1>
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
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/lala_inventions"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Inventions
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/lala_relationships"
                className="hover:underline hover:text-black"
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
          <nav className="w-72 mt-5 bg-white border rounded mb-6">
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
          <p className="mt-3">
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
          <br />
          <h3>
            <a
              href="/haruna"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Haruna Sairenji
            </a>
          </h3>
          <p className="mt-3">
            Lala regards Haruna as her best friend and will often go to her for
            advive when she is not sure about some part of Earth culture or
            Rito. Later, Haruna reveals to Lala that she too is in love with
            Rito. This causes Lala guilt over how she has acted around Rito over
            the previous year, she even tries to distance hearself from him in
            an effort to make Haruna more comfortable.
          </p>
          <br />
          <p>
            Later after much thinking, she confronts Haruna and declearess
            hearself her official love rival. She has since reverted back to her
            over-the-top method of displauing her affections to Rito.
          </p>
          <br />
          <p>
            Lala and HAruna are also one of the very few people that wilingly
            used Maru-Maru Charge-Kun with each other when Lala tried to lure
            and catch the alleged stalker, once again proves how great trust
            both girls have in each other. Though Lala for a moment also tried
            to please Rito, with her chance. Not too successful, as it rather
            caused great confusion in his heart.
          </p>
          <br />
          <h3>
            <a
              href="/haruna"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Peke
            </a>
          </h3>
          <p className="mt-3">
            As Lala is her creator, it goes without saying that Peke is greatly
            loyal and obedient to Lala. Peke is Lala's most constant companion,
            and has been with her since her creation and when Lala ran away from
            home. While Peke considers Lala as a great person, admired for her
            beauty and intelligence, and finds any suitor unworthy of her, Peke
            is still aware of some of Lala's eccentricities. She questions
            Lala's judgment in choosing Rito as her fiancé, and her childish
            attempts at getting closer to him. And she says that despite being
            one of the greatest geniuses in the galaxy, most of Lala's
            inventions turn out to be pranks.{" "}
          </p>
          <br />
          <h3>
            <a
              href="/nana"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Nana Astar Deviluke
            </a>
          </h3>
          <p>
            Nana is one of Lala's little sisters and has shown very high respect
            for her sister, calling her "Ane-ue". They both excel in sports, and
            sometimes Nana would get a little upset with her for her airheaded
            personality. Nana also shows respect for her when she scolds Momo
            for sleeping in Rito's bed, saying that Rito is Lala's fiancé.
          </p>
          <br />
          <h3>
            <a
              href="/momo"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Momo Belia Deviluke
            </a>
          </h3>
          <p>
            Momo is Lala's youngest sister. Like Nana, she also shows high
            respect for her older sister, calling her "Onee-sama". Momo's
            respect was also shown when she did not try to steal Rito from her,
            and instead decided to be contented with being a lover. However,
            Momo has since found a compromise so that her sister would not be
            heartbroken, and Momo's love for Rito can still be reciprocated.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, Momo inherits and expands Lala's harem plan,
            wanting to share Rito with her sister, as well as with all of Rito's
            other love interests.
          </p>
          <br />
          <h3>
            <a
              href="/mikan"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Mikan Yuuki
            </a>
          </h3>
          <p>
            Lala thinks very highly of Mikan, mostly because she lets her stay
            in her and Rito's house and Lala loves her cooking. Lala and Mikan
            are very good friends and Lala always tries to help her with chores
            (even though she messes up the chores most of the time). Their
            relationship at times can even be described as siblingly.
          </p>
          <br />
          <p>
            Mikan is somehow extremely casual and unfazed with the
            eccentricities around Lala, whether it's Rito's recent engagement to
            Lala, or even Lala's alien origins. Even finding Lala completely
            naked in Rito's bed has become a normal occurrence to her. Mikan
            easily welcomed Lala into their lives and is pleased to know that
            things will get more interesting upon Lala's arrival. However, she
            does not feel the same way about her sister Momo, who is more mature
            and mischievous.
          </p>
          <br />
          <p>
            Lala really enjoys Mikan's cooking, which she is really terrible at,
            always putting dark matter in it.
          </p>
          <br />
          <h3>
            <a
              href="/yami"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Golden Darkness (Yami/Eve)
            </a>
          </h3>
          <p>
            Lala considers herself a friend to Yami, going so far as to help her
            pick out new clothes (Chapter 61), and help Yami realize how nice
            Rito really is by letting Mikan and Yami switch bodies for a while
            (Chapter 139). Yami would even put aside her hatred towards Rito for
            the moment whenever Lala asks her.
          </p>
          <br />
          <p>
            It was Lala who named her Yami-chan, a name repeated by most other
            characters.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, Yami's Darkness transformation activates,
            radically changing her personality. With her newfound shameless
            personality, she psychotically expresses her love for Rito and her
            desire to kill him, and with Lala protecting Rito, Darkness declares
            Lala as her enemy and the one blocking her from killing Rito and
            become one with him.
          </p>
          <br />
          <h3>
            <a
              href="/yui"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Yui Kotegawa
            </a>
          </h3>
          <p>
            In terms of personality, Lala and Yui are the polar opposite of each
            other. But in spite of that, they are generally friends, even though
            Yui does hold some dislike over Lala's naive, yet indecent behavior.
          </p>
          <br />
          <p>
            Lala likes Yui a lot and often tries to find ways to include her in
            their group events. While others have a tendency to view Yui in a
            bossy, and sometimes resentful light, Lala does not. However, due to
            Lala's nature, it is doubtful if she would see anything as bad in
            her.
          </p>
          <br />
          <p>
            Regarding appearance Lala and Yui sports, nearly identical
            curvaceous figures and together are considered to have the most
            attractive bodies at the school by other girls. Whenever a
            comparison of girls' figures is brought up Lala and Yui are often
            used as a sort of an idea that other girls want to achieve.
            Ironically, even though these two have the best bodies, they are the
            only two so far who pay no real attention to their appearance.
          </p>
          <br />
          <p>
            Yui would seemingly get jealous whenever she sees Lala close to
            Rito, but naturally, denies it herself.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Ren Elsie Jewelria
            </a>
          </h3>
          <p>
            When they were children, Lala would often dress up Ren as a girl and
            call him a cry baby. Lala would also perform disastrous experiments
            on him and test out her inventions on him. Despite this, Ren is in
            love with Lala. In their past, when Ren asked Lala if she would
            marry him, she passively replied that she would if he could become
            manly. Upon arriving on Earth, Ren persistently tries to prove to
            Lala that he has become manly by trying to defeat Rito in various
            completely pointless challenges. However, Lala remains passive,
            neglectful, and even somewhat oblivious of Ren's attempts to court
            her, as she now only wants Rito.
          </p>
          <br />
          <h3>
            <a
              href="/ren"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Run Elsie Jewelria
            </a>
          </h3>
          <p>
            Run is Ren's (former) female self, who is essentially an entirely
            different person but shares the same body as Ren. While Ren is in
            love with Lala, despite Lala playing with them quite abusively as
            children, Run holds a grudge against her. She never forgave Lala for
            tormenting her as a child. To make things worse, Lala has Rito, with
            whom Run is also in love with. Run immaturely made various
            outrageous attempts to get revenge and harass and humiliate Lala,
            such as using the youth skunk and the clothes-destroying bomb, but
            they all backfire. But Run and Lala are actually friends, and have
            been since childhood, and Run doesn't genuinely hate Lala, but
            simply has been angry at her. Lala still regards Run as one of her
            best friends and is completely clueless about how Run feels.
          </p>
          <br />
          <p>
            In recent times, Run has had a more friendly relationship with Lala,
            or at least more civil, and seems to have put her grudge behind her,
            as she no longer tries to get back at her by pulling pranks on her.
            After Run becomes a popular idol and attends school less often, she
            and Lala are rarely seen together anymore.
          </p>
          <br />
          <h3>
            <a
              href="/saki"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Saki Tenjouin
            </a>
          </h3>
          <p>
            While Lala tries to be friends with everyone, Saki Tenjouin holds a
            grudge against Lala for challenging her popularity (without being
            aware of it). Saki used to be the most popular and beautiful girl in
            school, until Lala showed up and attracted all the attention away.
            Saki goes so far as to go naked, set up booby traps, and even shoot
            Lala with mustard to try to humiliate her. Most of her antics
            usually backfire. However, Saki has shown some gratitude when Lala
            helped her the time she ran away from home.
          </p>
          <br />
          <p>
            Lala is mostly oblivious to the fact that Saki really doesn't like
            her, and is still friendly to her.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Risa Momioka & Mio Sawada
            </a>
          </h3>
          <p>
            Risa and Mio are Lala's somewhat perverted classmates and friends of
            Haruna. Lala has limited direct contact with them in the series but
            clearly enjoys their company. Indeed when the two of them engage in
            their usual antics of groping girls, Lala is never annoyed by them,
            even when it's her turn to be groped.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Mikado Ryouko
            </a>
          </h3>
          <p>
            "Mikado-sensei", as the kids usually call her, is one of Rito's and
            Lala's personal friends. When Lala had her strange flu, it was
            revealed that Mikado is in fact also an alien and provides exotic
            herbs and treatment methods intended for other aliens that live
            amongst unknowing Earth inhabitants.
          </p>
          <br />
          <p>
            Lala is respectful of Mikado and treats her with the same sunny
            personality that she treats everyone else.
          </p>
          <br />
          <h3>
            <a
              href="/gid"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Gid Lucione Deviluke
            </a>
          </h3>
          <p>
            Her father, the King of the planet Deviluke, can be very strict and
            demands obedience from Lala and her sisters, like when she ran away
            from home to escape meetings with her suitors (which he forces her
            to go to), he sent extreme forces to bring her back.
          </p>
          <br />
          <p>
            In the manga, he seemed kind and understanding of Lala's choice in
            having Rito for a husband and said to arrange the wedding right
            away, but she declined his wedding plans, making him go back to
            being strict, stating that he finally allowed her to have her own
            way, but she revealed that he only wanted her to get married so he
            can step down as king and go around doing perverted things (also
            because she knew that Rito did not love her at the time and did not
            want to force him).
          </p>
          <br />
          <p>
            She is shown, however, to have warm memories of him from her
            childhood, comparing Rito's kindness to her father coming to find
            her when she was lost in the woods on Deviluke.
          </p>
          <br />
          <h3>
            <a
              href="/sephie"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Sephie Michaela Deviluke
            </a>
          </h3>
          <p>
            Sephie is the mother of Lala, Nana, and Momo, and she has yet to
            make an appearance in the manga. Peke notes that Lala's mother is
            very beautiful and that Lala has inherited her beauty and attractive
            physique from her. Momo states that she's a wonderful person. As the
            current queen of Deviluke (in their father's place, who isn't good
            at politics), she demonstrates active leadership and endeavors to
            maintain relations with every planet. To Lala and her sisters, she
            is the person they admire the most.
          </p>
          <br />
          <p>
            Momo has stated that despite being busy most of the time, their
            mother still makes time to call them (To-Love-Ru Darkness Chapter
            23). She finally makes time to visit her daughters after hearing
            that Lala became small after overusing her powers.
          </p>
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
