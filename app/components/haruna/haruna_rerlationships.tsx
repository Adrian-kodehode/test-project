import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Haruna_relationships = () => {
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
          <h1 className="mb-5 text-5xl">Sairenji Haruna/Relationship</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/haruna" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/haruna_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
         
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/haruna_relationships"
                className="hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
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
                <a href="#rito-yuuki" className="hover:underline">
                  Rito Yuuki
                </a>
              </li>
              <li>
                <a href="#lala-satalin-deviluke" className="hover:underline">
                  Lala Satalin Deviluke
                </a>
              </li>
              <li>
                <a href="#oshizu" className="hover:underline">
                  Oshizu Murasame
                </a>
              </li>
              <li>
                <a href="#mikan-yuuki" className="hover:underline">
                  Akiho Sairenji
                </a>
              </li>
              <li>
                <a href="#risa&mio" className="hover:underline">
                  Risa Momioka & Mio Sawada
                </a>
              </li>
              <li>
                <a href="#maron" className="hover:underline">
                  Maron
                </a>
              </li>
            </ol>
          </nav>
          <br />
          <h3>
            <a
              href="/rito"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
              id="rito"
            >
              Rito Yuuki
            </a>
          </h3>
          <p>
            Haruna is a very kind, patient and understanding girl. More than
            most other girls in the series, Haruna has always known about and
            loved Rito's positive traits, despite also being a frequent victim
            of Rito's perverted clumsiness. In Chapter 84, it is revealed that
            Haruna first took notice of his existence when he won the school
            festival for his class, and she has realized and remembered that he
            must be a kind person since she noticed him taking care of the
            flowers at school when they were neglected by others. When the
            plants in the school garden got ruined, she was the only person who
            believes he wasn't the one responsible, when other girls accused
            him.
          </p>
          <br />
          <p>
            Unknown to Haruna, Rito has harbored affections for her since he
            overheard that she was the only one who believed in him about the
            school garden incident before the start of the series, but because
            of his shyness and clumsiness, his numerous attempts to confess his
            love to her ended in failure. And unknown to Rito, Haruna has held
            affections for him as well. But she is hesitant to begin a romantic
            relationship with him due to her friendship with Lala, who is
            already pursuing a relationship with Rito.
          </p>
          <br />
          <p>
            Haruna also finds Rito to be very gentle, caring, compassionate and
            loyal. These feelings are furthered by the advice he gives to
            others, the way he treats plants and animals alike and how often
            he's willing to sacrifice himself for the sake of others. She has a
            romantic side to her with her feelings that long to be fully
            attached to him, even calling Yami "lucky" when they were
            accidentally attached together and unable to separate.
          </p>
          <br />
          <p>
            In Darkness chapter 54, Haruna's relationship with Rito takes an
            unexpected leap forward when the two are shrunken by Lala's
            invention and amidst trying to hide themselves, accidentally kissed
            each other. The next day, both are too flustered to face each other
            and don't know how to react to the accidental kiss with the one they
            harbored feelings for. But after pressure from Oshizu and Momo, both
            are on the verge of finally confessing to each other, but at the
            very last second, Haruna apologizes for the accidental kiss, and
            Rito simply forgives, leaving their romantic development back to
            nowhere.
          </p>
          <br />
          <p>
            Despite their somewhat implicitly intimate relationship, they still
            address each other by their last name (Haruna calls Rito
            "Yuuki-kun", and Rito calls her "Sairenji"). In Japanese culture,
            people who are close to each other often address their partners by
            their first name, and sometimes, they add honorifics (-kun, -chan,
            -san, etc) to determine their closeness. Judging by this, their
            relationship may not be stable and close as close friends; although
            they two are trying their best to overcome their shyness.
          </p>
          <br />
          <p>
            In chapter 75, she finally decides to confess her feelings to Rito
            after to Nemesis announces her plan to create a harem with all girls
            of Sainan. Haruna does not believe in a harem and that love should
            be monopolized. She gains the courage to confess when Rito screams a
            harem is impossible.
          </p>
          <br />
          <p>
            In chapter 76, Rito also admitted that he also has feelings for her
            . However, he refused to be in a relationship with Haruna because he
            also has strong feelings for Lala.
          </p>
          <br />
          <h3>
            <a
              href="/lala"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
              id="lala"
            >
              Lala Satalin Deviluke
            </a>
          </h3>
          <div className="flex flex-row items-start gap-4 mb-4">
            <div className="flex-1">
              <p>
                Haruna and Lala are best friends. It is because of her
                friendship with Lala that Haruna has been hesitant to pursue a
                romantic relationship with Rito. Lala, on the other hand, knows
                about Rito's feelings for Haruna, and is very enthusiastic to
                see them get together, believing that both girls can marry Rito
                together, as Japan's customs would no longer apply to Rito when
                he marries Lala and becomes King of Deviluke.
              </p>
              <br />
              <p>
                As of To love-Ru Darkness, she has learned that both she and
                Lala can marry Rito together, which greatly surprised her,
                realizing the reason for Lala's cheerfulness about Haruna's
                feelings for Rito. She currently doesn't quite know what to make
                of the newfound possibility.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://static.wikia.nocookie.net/to-loveru/images/0/05/LHY.jpg"
                alt=""
                className="w-40 h-auto rounded shadow"
              />
              <span className="text-xs text-gray-600 mt-2 text-center">
                Lala's and Haruna's skinship reaches near yuri levels.
              </span>
            </div>
          </div>
          <br />

          <p>
            Haruna and Lala are also one of the very few people that willingly
            used Maru-Maru Change-Kun with each other when Lala tried lure and
            catch alleged stalker, once again prove how great trust both girl
            have in each other. Though those few Haruna's moment within Lala's
            body caused great confusion in Rito's heart.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
              id="oshizu"
            >
              Oshizu Murasame
            </a>
          </h3>
          <p>
            Despite Haruna's huge fear of ghosts, she has become very
            comfortable around Oshizu, and the two have become good friends, and
            are often seen together. Oshizu is the first to learn of Haruna's
            crush on Rito after briefly possessing her, and becomes very
            supportive and encouraging towards Haruna confessing her feelings to
            him. She would even go as far as using powers to help, which usually
            fails in the end.
          </p>
          <br />
          <div>
            <h3>
              <a
                href="#"
                className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
                id="risa&mio"
              >
                Risa Momioka & Mio Sawada
              </a>
            </h3>
            <p>
              Risa and Mio are Haruna's close friends, and are often seen
              together in school. Haruna is less than amused by them constantly
              groping her.
            </p>
            <br />
            <h3>
              <a
                href="#"
                className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
                id="maron"
              >
                Maron
              </a>
            </h3>
            <div className="flex flex-row items-start gap-4 mb-4">
              <div className="flex-1">
                <p>
                  Maron is the pet dog Haruna has at home. He is actually her
                  older sister's pet, but because she is always working, Haruna
                  is always the one taking care of him. Maron highly considers
                  Haruna his master, and spends a great deal of time licking
                  her, sometimes all over her body in a very perverted manner.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/2/2c/ToLoveRu_v02_165.jpg"
                  alt=""
                  className="w-40 h-auto rounded shadow"
                />
                <span className="text-xs text-gray-600 mt-2 text-center">
                  Risa startles Haruna by groping her.
                </span>
              </div>
            </div>
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
