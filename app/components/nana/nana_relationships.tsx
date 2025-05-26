import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nana_relationships = () => {
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
          <h1 className="mb-5 text-5xl">Nana Astar Deviluke/Relationship</h1>
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
                <a href="#lala-satalin-deviluke" className="hover:underline">
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                <a href="#momo-belia-deviluke" className="hover:underline">
                  Momo Belia Deviluke
                </a>
              </li>
              <li>
                <a href="#rito-yuuki" className="hover:underline">
                  Rito Yuuki
                </a>
              </li>
              <li>
                <a href="#mikan-yuuki" className="hover:underline">
                  Mikan Yuuki
                </a>
              </li>
              <li>
                <a href="#haruna-sairenji" className="hover:underline">
                  Haruna Sairenji
                </a>
              </li>
              <li>
                <a href="#mea-kurosaki" className="hover:underline">
                  Mea Kurosaki
                </a>
              </li>
              <li>
                <a href="#sephie-michaela-deviluke" className="hover:underline">
                  Sephie Michaela Deviluke
                </a>
              </li>
              <li>
                <a href="#celine" className="hover:underline">
                  Celine
                </a>
              </li>
            </ol>
          </nav>
          <br />
          <h3>
            <a
              href="/lala"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Lala Satalin Deviluke
            </a>
          </h3>
          <p className="mt-4">
            Ever since childhood, Nana and Momo always fought. Every time the
            two fought, their older sister Lala always made reconciliation for
            the twins, therefore Zastin was not to be angry with them. For
            example, in childhood, when Momo and Nana were fighting, Zastin
            scolded them. Meanwhile Lala made her inventions run amok, and she
            begged Nana and Momo to catch the inventions, so her twins were led
            to help it together, and Zastin diverted his anger from the twins
            and toward Lala.
          </p>
          <br />
          <p>
            Nana has shown very high respects and affection for her sister,
            calling her "Ane-ue". They both excel in sports and get along quite
            well together, though sometimes Nana would get a little upset with
            Lala for the airheaded personality. Nana also shows respect for her
            when she scolds Momo for sleeping in Rito's bed, saying that Rito is
            Lala's fiancée, despite her annoyed feelings towards him.
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
          <p className="mt-4">
            Nana's most active and noticeable relationship is with her twin
            sister Momo. While the two love each other and are often seen
            spending time together, they are naturally polar opposites. From an
            early age, they have always been fighting and it was only through
            the efforts of her elder sister Lala that their relationship
            remained good. Although the twin sisters often squabble with each
            other over trivial things, they do love each other deeply. In To
            Love-Ru, they are often seen together and often plan mischievous
            things together, such as the virtual reality games, and running away
            from home to escape their studies together.
          </p>
          <br />
          <p>
            Nana envies Momo for having larger breasts than her, something that
            Momo doesn't hesitate to tease her about. Although Momo may have
            some reasons to be jealous of Nana, the only time she has ever shown
            jealousy towards Nana was when Rito hugged her, which is something
            Momo had never received from him.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, they both enroll in the same school as Rito
            and Lala, and still do things together, but their lives become less
            attached and parallel to each other, and they are not as often seen
            together as they were before. While Nana develops her own friendship
            with Mea and lives a life far more relaxed than her younger half's,
            Momo concentrates on her Harem Plan that was originally proposed by
            Lala to make almost every girl close to fall for him, including her
            sister Nana. At the end of Darkness Chapter 35 Momo decides to let
            Nana in on her Harem plan, but when she hears of it, she is strongly
            against it.
          </p>
          <br />
          <h3>
            <a
              href="/rito"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Rito Yuuki
            </a>
          </h3>
          <div className="flex flex-row items-start gap-4">
            <div className="flex-1">
              <p>
                Nana is one of the few girls who does not have romantic feelings
                for Rito in the beginning. In fact, her impression of him and
                his friendships with many girls is quite negative. She thinks of
                him as a shameless pervert, and is widely known for calling him
                a "beast". Overall, she doesn't genuinely hate him, but rather
                she can't seem to see what's so great about him. She has,
                however, said that he can be kind sometimes and is often
                grateful when he puts her needs before himself, and he tries to
                make her as calm and happy as he can, given her normally abrupt
                change of mood. She begins to have feelings for him when he
                saved her from falling.
              </p>
              <br />
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <img
                src="To Love Ru/nanarito.jpg"
                alt=""
                className="mb-1 w-48 h-auto"
              />
              <span className="text-center text-xs text-gray-700">
                Nana beating up Rito.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="flex-1">
              <p>
                After Nana's relationship with Mea became strained and left her
                heartbroken, Rito came to offer her advice and encouragement.
                When Rito hugged her in his arms to console her, it gave her the
                courage to confront and reconcile with Mea. Nana is grateful to
                him for encouraging her to confront to Mea, and she also notes
                that being hugged by Rito felt warm. Her feelings for Rito have
                greatly improved from this, and she subsequently snuck into
                Rito's room to sleep next to him (only to find Momo already
                sleeping next to him half-naked, much to her anger).
              </p>
              <br />
              <p>
                As time goes on for her, Nana eventually begins to have slight
                romantic feelings for Rito (like feeding him food), although she
                tends to snap herself back to what she thinks to be real and
                continues to dislike him. While she doesn't fully give into
                these thoughts, she tends to have a somewhat shy and flustered
                reaction to them.
              </p>
              <br />
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <img
                src="To Love Ru/nanarito2.jpg"
                alt=""
                className="mb-1 w-48 h-auto"
              />
            </div>
          </div>
          <p>
            Currently, Nana generally treats Rito like a brother, but obviously
            the kind she often squabbles with and gets mad at. She still says
            that Rito is an idiot, pervert, and a beast, but she acknowledges
            that he can truly be counted on when someone is in trouble and will
            thank him for his help, though in her own way and on very rare
            occasions. She remembers how good it felt when she was hugged in his
            arms. Once, while listening to a scary story, she easily got scared
            and was seen hiding closely behind Rito.
          </p>
          <br />
          <p>
            Despite what she thought of him the first time they met, she has
            slowly developed affectionate feelings towards him that she herself
            can barely understand or chooses to understand, much like Kotegawa.
            But later on, she wonders if she might be the type of girl Rito
            would like, and even wonders if he likes her breast size or if he
            would like her with makeup, however, when she and Momo where gonna
            see what kind of girls like, he tells her that he likes girls for
            their personality, not their appearences, and tells Nana that he
            doesn't care that she's flat-chested, which made her blush later on.
          </p>
          <br />
          <p>
            Interestingly, while she refers to him as "Rito", she referred to
            him as "Yuuki Rito" in her earlier appearances when talking to
            herself about him. This may show that she secretly didn't consider
            their relationship to be that close at the time. In later chapters
            of To Love-Ru and To Love-Ru Darkness, she always thinks and speaks
            of him as "Rito".
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
            Mikan has developed a positive connection with Nana due to their
            similar chest-related angst. Mikan has shown to trust Nana, such as
            asking her to wake Rito up and lets her take a bath with him and
            Yami, whose hands were stuck together due to Lala's invention,
            Clingy-Clingy Glue-kun that Celine had found.
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
          <p>
            Nana actually knows that Haruna furtively loves Rito through
            Haruna's dog Maron as Nana can communicate with animals, although
            only few of the characters know Haruna's affection toward Rito.
          </p>
          <br />
          <h3>
            <a
              href="/mea"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Mea Kurosaki
            </a>
          </h3>
          <p>
            After enrolling into Sainan High School along with Momo, Mea became
            the first friend Nana made, and Nana greatly cherishes their
            friendship. Unknown to Nana, at first, Mea is a living weapon, like
            Yami And like Yami, Mea is not genuinely accustomed to friendship
            and emotions, despite her cheery exterior.
          </p>
          <br />
          <p>
            Mea convinced herself that she is a weapon who was only pretending
            to have emotions to follow orders as a spy in the school. When Nana
            discovered Mea's identity as a living weapon, Mea confessed that she
            was only pretending to be friends. This left Nana deeply upsets. But
            after consolation and encouragement from Rito, Nana approached Mea
            again, and Mea realized that she does still care for Nana. They have
            since become friends again.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Sephie Michaela Deviluke
            </a>
          </h3>
          <div className="flex flex-row items-start gap-4">
            <div className="flex-1">
              <p>
                Sephie is the mother of Lala, Nana and Momo. It's said that she
                might be the most beautiful woman ever, something Lala and Momo
                have inherited from her, but not Nana as much (who is very
                sensitive about it). Momo states that she's a wonderful person.
                As the current queen of Deviluke (in their father's place, who
                isn't good at politics), she demonstrates active leadership and
                endeavors to maintain relations with every planet. To Nana and
                her sisters, she is the person they admire the most.
              </p>
              <br />
              <p>
                Nana has an obviously strong bond with her mother, hugging her
                in front of others and constantly being on the lookout for her
                well-being.
              </p>
                <br />
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <img
                src="To Love Ru/nanamother.jpg"
                alt=""
                className="mb-1 w-48 h-auto"
              />
              <span className="text-center text-xs text-gray-700">
                Nana clings on her mother.
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
