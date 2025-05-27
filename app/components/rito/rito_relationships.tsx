import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Relationships = () => {
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
          <h1 className=" text-3xl">Yūki Rito/Relationships</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/momo">Yūki Rito</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/rito" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/rito_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/rito_relationships"
                className=" hover:underline hover:text-black"
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
            <p>
              As the main character of To Love-Ru, Rito has relationships with
              several characters and has his ups and downs with a lot of them.
              Most of whom are females who are in love with him, others,
              however, have shown slight interest in him and it's unknown
              whether they have feelings for him too. The female characters'
              impressions of him are quite polarizing, as some find him to be
              truly kindhearted and innocent but clumsy, while others find him
              to be a misbehaving and shameless pervert. They either love him,
              hate him, or both. Either way, Rito's life is filled with a vast
              variety of different acquaintances, almost all of which have just
              as many positive traits to them as they do negative. Rito also has
              feelings for some of these characters.
            </p>
            <nav className="w-60 mt-5 bg-white text-start border rounded mb-6">
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
              <ol className=" list-inside px-5 py-3 text-gray-700 text-sm space-y-1">
                <li>
                  1. Family
                  <ol className=" ml-5">
                    <li>
                      <a href="#mikan" className="hover:underline">
                        1.1. Mikan Yuuki
                      </a>
                    </li>
                    <li>
                      <a href="#saibai" className="hover:underline">
                        1.2. Saibai Yuuki
                      </a>
                    </li>
                    <li>
                      <a href="#ringo" className="hover:underline">
                        1.3. Ringo Yuuki
                      </a>
                    </li>
                    <li>
                      <a href="#celine" className="hover:underline">
                        1.4. Celine
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  2. Deviluke
                  <ol className=" ml-5">
                    <li>
                      <a href="#lala" className="hover:underline">
                        2.1. Lala Satalin Deviluke
                      </a>
                    </li>
                    <li>
                      <a href="#momo" className="hover:underline">
                        2.2. Momo Belia Deviluke
                      </a>
                    </li>
                    <li>
                      <a href="#nana" className="hover:underline">
                        2.3 Nana Astar Deviluke
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  3. Sainan High
                  <ol className=" ml-5">
                    <li>
                      <a href="#haruna" className="hover:underline">
                        3.1. Haruna Sairenji
                      </a>
                    </li>
                    <li>
                      <a href="#saruyama" className="hover:underline">
                        3.2. Kenichi Saruyama
                      </a>
                    </li>
                    <li>
                      <a href="#yui" className="hover:underline">
                        3.3. Yui Kotegawa
                      </a>
                    </li>
                    <li>
                      <a href="#rin" className="hover:underline">
                        3.4. Rin Kujou
                      </a>
                    </li>
                    <li>
                      <a href="#tearju" className="hover:underline">
                        3.5. Tearju Lunatique
                      </a>
                    </li>
                    <li>
                      <a href="#mikado" className="hover:underline">
                        3.6. Ryouko Mikado
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  4. Trans Weapons
                  <ol className=" ml-5">
                    <li>
                      <a href="#yami" className="hover:underline">
                        4.1. Golden Darkness (Yami)
                      </a>
                    </li>
                    <li>
                      <a href="#mea" className="hover:underline">
                        4.2. Mea Kurosaki
                      </a>
                    </li>
                    <li>
                      <a href="#nemesis" className="hover:underline">
                        4.3. Nemesis
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#run" className="hover:underline">
                    5. Run Elise Jewelria
                  </a>
                </li>
                <li>
                  <a href="#ren" className="hover:underline">
                    6. Ren Elise Jewelria
                  </a>
                </li>
                <li>
                  <a href="#kyouko" className="hover:underline">
                    7. Kyouko Kirisaki
                  </a>
                </li>
              </ol>
            </nav>
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">Family</h2>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rito"
            >
              <a href="/rito">Mikan Yuuki</a>
            </h2>
            <p>
              Mikan is Rito's younger sister. As children, Rito and Mikan were
              awfully close, and Mikan still called him "Onii-chan". Because
              their parents were not often at home, Rito looked after Mikan and
              they spent their time together all the time, walking and playing
              outside together. Unlike Rito, who has grown up to become very
              clumsy, awkward and anxious, especially around women, Mikan has
              become hard-working, confident, and good with housework, far
              surpassing her older brother's maturity and reliability. She
              stopped calling him "Onii-chan" and doesn't quite look up to him
              and respect him the way she had before.
            </p>
            <br />
            <p>
              Nevertheless, the two of them are still close. Rito always
              considers Mikan as his one and only precious little sister and has
              shown that the thought of losing her would be too much for him to
              bear. And Mikan is happy taking care of Rito at home, even though
              he often does most of the chores and housework himself. Until
              Lala's arrival, it was still only the two siblings together at
              home, and at one point, she felt a little lonely from not spending
              time with Rito lately. At first, Mikan enjoyed seeing how Rito's
              love life with Lala and Haruna would play out, but later, she
              would occasionally wonder how she still fits into Rito's life.
              However, the two's relationship as siblings have apparently gone
              well and as said by Momo, that, like before, are taking baths
              together at times just like regular siblings do.
            </p>
            <br />
            <p>
              Thanks to Nemesis, Mikan now understands Rito's occasional tumbles
              and why it happens, stating it herself that it was "an act of
              god".
            </p>
            <br />

            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="saibai"
            >
              <a href="#">Saibai Yuuki</a>
            </h2>
            <p>
              His dad and a manga artist, who constantly asks him to pick up
              Manga supplies for him otherwise he won't give him his monthly
              allowance. Though they hardly ever spend any time together, even
              on the holidays, they both are obviously loving and care for one
              another. Being his father, Saibai often likes to tease Rito about
              the many girls in his life, much to Rito's embarrassed annoyance.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="ringo"
            >
              <a href="#">Ringo Yuuki</a>
            </h2>
            <p>
              Rito's mother, who works as a fashion designer traveling around
              the world and as such is rarely home. While they clearly care for
              each other, he is shown to be embarrassed by her unusual habit of
              touching and stripping girls to check their size. Rito loves his
              mother, despite her embarrassing behavior, and gets his hair and
              eye color from her.{" "}
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="celine"
            >
              <a href="#">Celine</a>
            </h2>
            <p>
              Celine was Lala's gift for Rito's 16th birthday. Originally Celine
              was a multi-story, monstrous, sentient sunflower kept in the
              backyard of the Yuuki residence. Although seemingly monstrous,
              Rito cared for her deeply and considered her as family, to which
              she responded with a similar caring love. When Celine seemed to
              have contracted a deadly disease, Rito was fully dedicated to
              finding the Luckberry to cure her. With the help of his friends,
              he journeyed to the S-level danger class planet Misletoe to
              retrieve the antidote, only to return to find Celine all dried up.
              But in reality, she was germinating, and from her single seed, she
              emerges in the form of a human-like infant girl with a flower on
              her head.
            </p>
            <br />
            <p>
              Rito cares very much for Celine and finds her both cute and
              innocent, taking her for walks, playing with her, and watering her
              along with all the other flowers in the garden even though it's
              not needed. While he can get annoyed at her for causing trouble
              for him via Lala's inventions or her childish mind, he still
              considers her to be one of the largest parts of his life, treating
              her like a proper baby sister/adoptive daughter while taking high
              responsibility for her when he looks after her and making sure she
              has a fun life while doing so.
            </p>
            <br />
            <p>
              She seems to view Rito as her parent because of how he always
              takes care of her and because of her child-like appearance and
              closeness with him, she is often mistaken for his daughter. Even
              Rito's mother asked who the mother was, apparently, not curious
              who the father is.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">Deviluke</h2>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="lala"
            >
              <a href="/lala">Lala Satalin Deviluke</a>
            </h2>
            <p>
              At the beginning of the series, Rito was already having love
              troubles with his crush Haruna, and when Lala suddenly appeared in
              front of him, she only brought him much more trouble. But as the
              series progressed, he became exceptionally good friends with Lala
              and even fell for her romantically. Rito even stated that he felt
              uneasy when Lala was not around. Rito started out very shy,
              inexperienced, and incompetent around women, until being forced to
              get used to the troublesome and shameless Lala, which greatly
              helped him become more comfortable around Haruna and women in
              general.
            </p>
            <br />
            <p>
              While she can annoy him often and cause him a lot of problems,
              Rito came to love Lala deeply for her kind and caring personality
              and everything she has done and was willing to do for his sake,
              even if her help didn’t benefit him in certain situations. He has
              become extremely forgiving of Lala for any trouble she may have
              unintentionally started, and deeply respects her as both his
              unofficial "girlfriend" and wife-to-be.
            </p>
            <br />
            <p>
              Countless times, Rito was willing to risk his well-being, even his
              life for Lala. For example, when Black, a hitman, pointed a gun at
              Lala, Rito stood in front of Lala and refused to move away. It was
              because of all of his positive traits that she believed he was the
              most dependable person in the universe.
            </p>
            <br />
            <p>
              At the end of the original series, Rito confessed his love to
              Lala, while also telling her that he loved Haruna as well. Lala
              was ecstatic about this, however, noting that once their marriage
              was official, Earth laws would no longer matter, and he would be
              free to marry both Lala and Haruna. Rito was shocked by this,
              stating that Lala was "too open-minded" (Chapter 162).
            </p>
            <br />
            <p>
              At first, it appeared that Lala was quite childish regarding her
              love for a generally unreliable boy, but as the series progressed
              and Rito gradually matured and showed his kinder side, it would
              appear that Lala was somewhat right about him and truly did see
              something special in him. When Rito went to comfort and give
              advice and encouragement to a heartbroken Nana, Lala noticed that
              Nana had cheered up, and she stated that it was as expected of
              Rito (To Love-Ru Darkness Chapter 21).
            </p>
            <br />
            <p>
              In To Love Ru Darkness, Rito still loved both Haruna and Lala. And
              while he stated that Haruna was the one he "loves first", it was
              immensely implied through his actions around the both of them that
              this was chronologically speaking and that he loved the two of
              them equally. While his main objective was to confess his love to
              Haruna, he had shown his love for Lala as often and as
              appropriately as he could and kept it in mind and often frets over
              how to manage his feelings for both without causing the situation
              to hurt anyone. As the series progressed, Rito considered Momo's
              Harem idea; however, he quickly dismissed it at first time.
            </p>
            <br />
            <p>
              Overall, Rito developed a very maturing, connected relationship
              with Lala, going with her on errands, weekend activities, after
              school events, and just hanging around the household like a
              regular couple. The two of them are very nearly boyfriend and
              girlfriend (with all the other girls' in Rito's life being the
              only thing keeping the two of them from actually hooking up) and
              share an overly complicated chemistry that goes beyond a typical
              boy-girl crush; one that is still developing and becoming a more
              understanding, mutual love. Though he can usually get irritated by
              accidents caused by her and/or her inventions, he still had an
              incredibly open mind and heart to her personality, and great love
              for her caring, innocent child-like side (when it doesn't cause
              problems or stress), as well as her customarily kind and loving
              self, and was almost always open to strengthening their
              relationship further.
            </p>
            <br />
            <p>
              Lala had put aside her own love for Rito until he had finally
              confessed to Haruna. But with some encouragement from Momo, Lala
              began acting like her old clingy self to Rito and still acted
              childish. With further help from Momo, she now approached him in a
              more adult way, like coming to him in the bathtub and asking for a
              kiss. But because of the pressure Rito had about the Harem Plan
              and the situation with Nemesis, he rejected it. Lala understood
              that he must be going through a lot of complicated things.
              Instead, she kissed him on the cheek and told him she would be
              waiting until he's ready, which Rito was both surprised by and
              appreciated.
            </p>
            <br />
            <p>
              At the beginning of Chapter 77, Lala suggested to Rito to have
              dates alternately with her and Haruna because both have confessed
              their feelings to Rito. While Rito was initially going to reject
              this idea, he thought back to all the memories he shared with Lala
              and realized how painful it would be to lose her that he started
              crying. With this, Haruna accepted Lala’s idea of Rito dating them
              both.
            </p>
            <br />
            <p>
              Lala is a very important existence in Rito's life and vice versa;
              for Rito just the thought of Lala not being apart of his life
              pains him greatly and gets anxious whenever she's not around. As
              there feelings continue to grow for each other throughout the
              series, Rito has become an irreplaceable existence to Lala.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="momo"
            >
              <a href="/momo">Momo Belia Deviluke</a>
            </h2>
            <p>
              Rito is not as romantically attracted and attached to Momo as he
              is with her older sister, Lala, and he notes that Momo is more
              mischievous and cunninger compared to Lala. Rito does grow to
              trust her and consider her a good and dependable friend, as she
              protects him from danger, and would want also to be there for her
              as well. He relates with Momo quite well and goes along with
              whatever mishaps she creates much more easily than he does with
              Lala's mischief. Although he still has difficulty getting used to
              her perverted tendencies, he seems to understand that it's the way
              she is and is sometimes open to/tolerant of her sexual desires, so
              long as they're not too extreme or risqué.
            </p>
            <br />
            <p>
              Rito has grown to find a great deal of confidence in his
              relationship with Momo, talking with her about different issues in
              both of their lives on a (normally) mature basis. Because there
              are other girls who love Rito, Momo constantly tries to get him
              intimately closer with them and herself, (sometimes through very
              chaotic and even poorly executed plans), thus creating the Harem
              plan. She says the reason for doing this is to make everyone
              happy, but in truth, it's because she doesn't care whether she is
              second or third, as long as she is loved by him and wants to be by
              Rito's side all the time. Although he shakes it off at first, he
              slowly considers it, especially after seeing Run's true feelings
              towards him.
            </p>
            <br />
            <p>
              Rito seems to start getting more interested in Momo (sexually) as
              seen in Darkness Chapter 73 where he has a dream about pushing
              Momo down and grabbing and sucking her breasts on purpose, while
              it actually was Lala in his futon at the time.
            </p>
            <br />
            <p>
              In Chapter 77 Momo has confessed her love for Rito and explained
              to him "The Harem Plan" was created by a weakness in her heart,
              but still, she wants to become the number one in Rito's heart.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="nana"
            >
              <a href="/nana">Nana Atar Deviluke</a>
            </h2>
            <p>
              Even though she can be abusive, rude, and short with him, Rito
              stills holds Nana in high regard as he does with both her sisters.
              While she can annoy and even anger him through her thoughtless
              comments on his 'perverted ways', he does enjoy being around her
              like all the other members of the household.{" "}
            </p>
            <br />
            <p>
              He has, multiple times, comforted and helped her through hard
              times, helping fix her broken friendship with Mea, (with an added
              hug for comfort), giving her advice about getting along with
              family, and assuring her that men don't care about women's breast
              sizes.
            </p>
            <br />
            <p>
              Rito has admitted to her, (while Momo was in her body), that she
              has a unique and wonderful personality, and holds her in high
              esteem when she proves her maturity on occasion. It is quite
              possible that Rito may even have feelings for Nana, shown by
              events such as when he felt embarrassed after hugging her out of
              nowhere to help her calm down, and almost kissing her when Momo,
              again in Nana's body, talked to him kindly and offered it to him.
            </p>
            <br />
            <p>
              In Chapter 35 of Darkness, Nana has shown some concern about the
              kind of things Rito might be going through.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">
              Sainan High
            </h2>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="haruna"
            >
              <a href="/haruna">Haruna Sairenji</a>
            </h2>
            <p>
              Haruna has been the girl of Rito's affections since before the
              start of the series purely due to her kind, caring, and forgiving
              nature that's very much like his own. She essentially represents
              the most normal and peaceful relationship Rito could have had
              among his love interests. In many ways, Haruna would have made the
              perfect girlfriend for Rito, as she is similarly shy and modest,
              understands and loves Rito's kind and gentle nature, is very
              patient and forgiving of Rito's perverted clumsiness and has also
              harbored affectionate feelings for him. Although Rito owes much to
              the bold and extroverted Lala for the friendship he now enjoys
              between himself, Lala, and Haruna, he now has both Lala's growing
              place in his heart and Haruna's loyalty and friendship to Lala to
              add to his indecisiveness.
            </p>
            <br />
            <p>
              Rito greatly cares for Haruna while also loving her. He comforts
              her whenever she feels frightened or awkward and will go to
              extraordinary lengths to ensure her happiness and safety, much to
              her appreciation. While not exactly having a boyfriend/girlfriend
              relationship, the two are practically halfway there. He manages to
              get along very well with her, talking with her when he can summon
              the courage to do so and verbally appreciates her caring side to
              him and others around her.
            </p>
            <br />
            <p>
              Despite their somewhat intimate relationship, they still address
              each other by their last name (Haruna calls Rito "Yuuki-kun", and
              Rito calls her "Sairenji"). In Japanese culture, people who are
              close to each other often address their partners by their first
              name, and sometimes, they add honorifics (-kun, -chan, -san, etc)
              to determine their closeness. Judging by this, their relationship
              may not be as stable and close as that of close friends, though
              both are trying their best to overcome their shyness. However,
              Rito calls her "Haruna-chan" in his mind, in contrast with Nana
              calling him "Yuuki Rito" in her mind.
            </p>
            <br />
            <p>
              Later on, in Chapter 54 in the manga, they accidentally kissed.
              Both have mixed feelings about their accidental kiss with the one
              they love, and the next day, they are too flustered to face each
              other. But after pressure from Oshizu and Momo, both are about to
              finally confess their love to each other. But at the very last
              second, Haruna apologizes for the accidental kiss, and Rito simply
              forgives her, leaving their relationship in a currently awkward
              but good place.{" "}
            </p>
            <br />
            <p>
              In chapter 75, Haruna confessed to Rito after defending him from
              Sainan High's male students because they were chasing him around.
              After she went into the equipment room with Rito, she was happy to
              know from Rito that a harem plan was not possible in his opinion
              and confessed to him, to which in return Rito replied, but the
              author left a cliffhanger by not stating what he replied.{" "}
            </p>
            <br />
            <p>
              In Chapter 76&77, both decide to act like a couple, but Rito
              refuses to start a real relationship because he also loves Lala as
              well. Lala suggests to Rito to have dates alternately with her and
              Haruna because both have confessed their feelings to Rito. While
              Rito was initially going to reject this idea, he thought back to
              all the memories he shared with Lala and realized how painful it
              would be to lose her that he started crying. With this, Haruna
              accepted Lala’s idea of Rito dating them both as to ensure the
              Rito wouldn't lie to himself.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="saruyama"
            >
              <a href="#">Kenichi Saruyama</a>
            </h2>
            <p>
              Kenichi Saruyama is Rito's perverted male friend. They have been
              friends for a long time, and he is Rito's only real male friend.
              Saruyama has been aware of Rito's crush on Haruna since before the
              start of the series, and he also understands Rito's incompetence
              around girls well enough that he wasn't at all surprised that Rito
              failed yet again to confess his love to Haruna. Saruyama has made
              some attempts to help Rito get together with Haruna.
            </p>
            <br />
            <p>
              Although they are friends, they both have certain dislikes towards
              each other. Rito doesn't like how other students see them grouped
              together when Saruyama starts acting and talking like a pervert,
              and Saruyama (along with almost every boy in the school) envies
              Rito for being close to Lala and with so many other popular girls,
              even though he already has feelings for Haruna.
            </p>
            <br />
            <p>
              Saruyama has a crush on a girl named Riko Yuusaki, who, unknown to
              him, is actually Rito, transformed into a girl by Lala's
              inventions. Saruyama is no less a pervert and a loser around
              "Riko" as he is any other time when he talks about girls, which
              disgusts Rito.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="yui"
            >
              <a href="/yui">Yui Kotegawa</a>
            </h2>
            <p>
              Being a strict, high-strung, and no-nonsense girl with little
              tolerance for unacceptable behavior and an impression that boys
              are generally shameless, it is no surprise that she often has a
              negative impression of Rito, (claiming that he's even worse than
              the Principal). In addition, she is often a target of Rito's
              perverted clumsiness, being caught in many provocative situations
              with him, much to her dismay and Rito's heartfelt and excessive
              apologies. Although she will likely never stop believing that boys
              are always shameless, with Rito being no exception, over time she
              comes to accept that Rito is different from most boys. As she
              gradually understands and appreciates Rito's kindness and accepts
              that Rito is still shameless but not a bad person, Yui warms up to
              him and grows to like him and her love for him grows more and
              more. While Rito doesn't seem to have any romantic feelings for
              her in return, he has shown to find her attractive, as evidenced
              by how embarrassed he was being alone with her in her room.
            </p>
            <br />
            <p>
              Rito also tends to compliment Yui on relatively small matters,
              such as her "cute" cat-pattern pool floaty and her yukata and is
              even willing to come forward and talk with her on casual terms as
              if there were no awkwardness between the two.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rin"
            >
              <a href="/rin">Rin Kujou</a>
            </h2>
            <p>
              Rin dislikes Rito's perverted clumsiness, especially around her,
              Aya and most of all Saki, and doesn't hesitate to hit him for it
              with her wooden sword (sometimes with a real sword, and on one
              occasion, she used a gun on him). One time, she and Aya requested,
              or rather forced, Rito to arrange a meeting between Saki and
              Zastin, and when he helped them, Rin has shown a slightly better
              understanding towards him (even willingly smiled at him), but
              unfortunately, that did not last long before Rito's clumsiness
              struck again, ending her short-lived respect for him, although she
              still acts quite formal towards him.
            </p>
            <br />
            <p>
              She has shown kindness and hospitality to Mikan and finds the
              younger sister to be a lot more reliable than her brother and has
              a better relationship with her. He has shown to be grateful when
              she helps his sister when she wasn't feeling well. Mikan agrees
              with Rin that he can be clumsy but tells her that he can be
              reliable when one is in trouble, however, she was unable to see
              him the way she does, but eventually does later.
            </p>
            <br />
            <p>
              Despite showing resentment towards him, Rito willingly risked his
              life to save her from being possessed by the sword Bladix,
              standing up to the sword's consciousness and expressing about how
              she has those close to her, which greatly touches her. Afterwards
              she appears to have changed her impression of him. She is now
              grateful to him, but this time in a clearly more bashful way,
              which is highly uncharacteristic to her usual composed and aloof
              self, and she likely has begun to grow affectionate feelings
              towards him (To Love-Ru Darkness Chapter 33).
            </p>
            <br />
            <p>
              In Chapter 52, Rin and Rito go on a date, which was set up by Saki
              in order to get them closer together. Initially, Rito believed
              that the "date" was to gather information on Zastin and during the
              entire date Saki was guiding Rin on what to do through an
              earpiece. When asking each other's daily lives, Rin was touched at
              the relationship Rito shares with Mika and was surprised that she
              and Rito both enjoy B-rated movies. However, the friendly
              atmosphere was ruined by Saki in an attempt to create a romantic
              setting. Later, when Rito found out that Saki set the date up for
              Rin, Rito stated how he admired the side of her that is willing to
              go so far for her friends, causing Rin to smile and blush "Thank
              you". At the end of their date, when Haruna arrived, Rin noticed
              the two's reactions to each other and decided to leave the two
              alone. After leaving she reflected on how before she thought that
              a date was a "tedious thing" and something that she didn't need.
              However, she goes on to say that she's changed her mind and was
              unexpected by how it made her feel.
            </p>
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
