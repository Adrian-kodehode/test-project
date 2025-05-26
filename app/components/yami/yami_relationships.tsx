import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Yami_relationships = () => {
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
          <h1 className="mb-5 text-5xl">Yami/Relationship</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/yami" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/yami_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/yami_relationships"
                className="hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/yami_gallery"
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
            Yami was initially hired to kill Rito by Lacospo (one of Lala's
            suitors), but after learning that Rito is not Lacospo described him
            to be, she turned on him, but still claims that she will kill Rito
            eventually. He actually confirms to Rito that she only said that as
            an excuse to stay on Earth, and warns him not to make her too angry
            (Chapter 138). As time passes, Yami seems to grow some feelings for
            Rito. It is Rito who introduced her to taiyaki, the only thing she
            really eats. Rito carried her on his back to Mikado's clinic when
            she overused her powers, saved her from another assassin hired by
            Lacospo, and, unbeknownst to him, showed her a kinder side of
            himself that made her envy Mikan for being so close to him. Yami
            hates it when Rito sees her naked or changing, and she never
            hesitates to use her transformation powers to give him a powerful
            punch to the face, though this is possibly just her instinctive way
            of getting someone to leave her alone. She does not seem to mind
            when other girls see her naked or changing.
          </p>
          <br />
          <p>
            Yami appears to have love-hate feelings towards Rito. She convinces
            him, and perhaps herself as well, that he is still her target. And
            she often states how much she hates perverts. Naturally, Rito's
            pattern of accidentally falling and groping girls earns Yami's wrath
            more than a few times. Even when seeing Yami naked is clearly not
            Rito's fault, she would still proceed to give him a beating.
            However, like other female characters, Rito's kindness does manage
            to slowly grow on her. It's possible that Yami knows that Rito isn't
            as perverted as some think and just hates it when he sees her
            without clothes.
          </p>
          <br />
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p>
                In Chapter 158 of the manga, Yami was accidentally sprayed by
                Celine's pollens, causing her to feel infatuated with Rito. She
                then forces Rito to spend time with her (like a date), and soon
                after, asked him to kiss her, but stopped her and tried to get
                her to go back to her old, normal personality. After the effects
                of the pollen wore off, Yami asked why he didn't kiss her. Rito
                replied that he couldn't do that if she was not on her proper
                mental state. Yami then called him idiot for showing kindness to
                an enemy, but also made it clear that she doesn't hate idiots.
                She then smiled very sweetly at him. This is the only time Yami
                ever showed her soft side to a male, and also the only time she
                smiled heartily in the whole manga. All of this suggests that it
                seems possible that Yami started to develop feelings for Rito
                from this point. Even though she says she'll let him die
                painlessly when she kills him, obviously as a cover.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/yamismile.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
              />
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                Yami smiles sweetly to Rito (Chapter 158 of the manga, To
                Love-Ru)
              </span>
            </div>
          </div>
          <br />
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p>
                In To Love-Ru Darkness (the sequel of the original To Love-Ru
                manga), while Yami is still wrathful to Rito's usual clumsiness,
                her relationship and feelings with him continue to grow and
                develop.{" "}
              </p>
              <br />
              <p>
                In Chapters 013-014, Rito and Yami get caught by Lala's
                invention and become stuck together, temporarily unable to
                separate, much to her bitterness. After a day putting up with
                each other, when things finally calm down at night, they are
                finally able to speak more calmly with each other while being
                alone together. Yami begins revealing to Rito about her past
                with Tearju, and the organization that separated them and turned
                Yami into a weapon, something she never spoke about even to
                Mikan. When Rito condemns the organization, she finds him quite
                strange because even though Rito knows that he is her target to
                kill, he would get mad for her sake at the people from the
                organization who used her like a weapon. Yami notes that she
                feels safe and at peace when she is around Rito, feelings she
                does not often experience in her unhappy life as an assassin.
                After the effects of Lala's invention wore off, Yami still
                clings to Rito as she falls asleep. Rito is the only person whom
                she has opened up to about her past.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/yamiblush.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
              />
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                Yami blushes to Rito (Chapter 002, To Love-Ru Darkness)
              </span>
            </div>
          </div>
          <br />
          <p>
            In Darkness chapter 40, Yami's Darkness transformation radically
            changes her personality into a bolder and highly perverted one, and
            her feelings for Rito are revealed (or somewhat changed) in a very
            psychotic way. She now greatly enjoys feeling ecchi, and immediately
            teleports Rito to her side, surrounding him with many girls as she
            molests them around Rito. She explains her desire to kill him in a
            very ecchi situation to express her love for him and because he is
            her target.
          </p>
          <br />
          <p>
            It is revealed in Chapter 46 that Yami is in fact in love with Rito,
            and that it is said love that causes the "bug" in her Darkness
            transformation. But after Rito helped her transform back to normal,
            she denies any kind of love for him and still insists that he is her
            target. Nevertheless, Yami is grateful to him and now possesses a
            desire to improve her relationship with him, though due to her
            growing tsundere traits, she is far from willing to admit it, and
            Rito ignorantly interprets her angry outbursts as still hating and
            wanting to kill him.
          </p>
          <br />
          <p>
            After that incident, Yami realizes that her feeling for Rito is
            love. She admits to Mikan that she is in love with her older
            brother. In Darkness Chapter 71, Yami transforms into her darkness
            form to save Rito from Kuro. During this incident in Chapter 72,
            Yami is groped by Rito, but this time she just scolds him a little
            bit, instead of hitting him like she's been doing in the past. After
            the fight, Yami confesses her feelings to Rito, calling him her
            "target of love".
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
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p className="mt-3">
                After that incident, Yami realizes that her feeling for Rito is
                love. She admits to Mikan that she is in love with her older
                brother. In Darkness Chapter 71, Yami transforms into her
                darkness form to save Rito from Kuro. During this incident in
                Chapter 72, Yami is groped by Rito, but this time she just
                scolds him a little bit, instead of hitting him like she's been
                doing in the past. After the fight, Yami confesses her feelings
                to Rito, calling him her "target of love".
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/yamimikan.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
              />
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                Yami and Mikan hanging out.
              </span>
            </div>
          </div>
          <br />
          <h3>
            <a
              href="/lala"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Lala Satalin Deviluke
            </a>
          </h3>
          <p className="mt-3">
            Yami is forced to fight Lala when she is assigned to kill Rito.
            After they stop fighting, they become friends (at least in Lala's
            eyes). As of Yami's opinion of Lala, she seems oblivious to Lala's
            friendly behavior towards her, but she never attacks Lala or says
            anything bad about her after their fight.
          </p>
          <br />
          <p>
            It was Lala who named her Yami-chan (Yami means darkness in
            Japanese), a name repeated by most other characters.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, Yami's Darkness transformation activates,
            radically changing her personality. With her newfound shameless
            personality, she psychotically expresses her love for Rito and her
            desire to kill him, and with Lala protecting Rito, Darkness declares
            Lala as her enemy and the one blocking her from killing Rito and
            become one with him. But after Yami's transformation is faded, she
            apologizes to Lala for their fight, which Lala quickly forgives
            without any problem.
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
            Yami doesn't appear to be particularly attached to Mea after
            discovering that
          </p>
          <br />
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p>
                she is technically her sister and, also like her, a (second
                generation) transformation weapon made from the same
                organization as Yami. It is Mea's mission to return Yami back
                into space and back into her previous cold assassin's life,
                which is a task set to her by her master Nemesis. Mea at least
                desires for "Yami Onee-chan" to join her. But Yami encourages
                Mea to learn and embrace the human life and companionship on
                Earth, just as Yami is learning to do.
              </p>
              <br />
              <p>
                Mea still thinks that Yami should be the ultimate weapon and
                unstoppable by anyone. However, in To-Love-Ru Darkness chapter
                30, Mea has a slight change of heart after her conversation with
                Rito. When he explains how Tearju sees her and Yami as her
                little sisters and how families are important, she helps him
                persuade Yami to come back to school and perhaps rebuild her
                relationship with Tearju.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/yamimea.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
              />
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                The first time Yami admits out loud that Mea is her sister
              </span>
            </div>
          </div>
          <br />
          <p>
            In Darkness Chapter 37, Mea was forced to use her transformation
            powers in front of many others to save the school from a micro black
            hole. Yami then appeared and introduced Mea as her little sister.
            Mea was then warmly welcomed by all of the students present. Yami
            has shown that Mea is someone important to her , some examples were
            when Nemesis lied to her about Mea not being real which caused her
            to lose her peace of mind and use her "Darkness" ability. Another is
            when she had transported Momo and Nana to Mea's apartment while she
            was "Darkness" showing she still believes Mea is real.
          </p>
          <br />
          <h3>
            <a
              href="/tearju"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Tearju Lunatique
            </a>
          </h3>
          <p className="mt-3">
            Tearju is the one who created and gave life to Yami from her own
            DNA, making Tearju sort of like her mother, but Yami stated they
            were more like sisters. Before her life as an assassin, Yami used to
            play and have fun with Tearju and would even eat whatever she cooked
            (despite being badly made). Yami seems to hold high respect for
            Tearju even now. When Tearju escaped the organization, she was
            unable to take Yami with her, although Yami doesn't blame her for it
            and says she's glad that Tearju is alright. Tearju wants to be close
            to her again, but because both are similarly emotionally awkward and
            unsure, neither would approach each other unless forced to. Since
            Tearju's arrival as a teacher at Sainan high, Yami stopped wearing
            her uniform and stopped attending classes.
          </p>
          <br />
          <p>
            If Tearju had rescued Yami from the organization that turned her
            into a weapon, Yami would have grown up differently with a better
            and happier childhood. It is revealed that Yami is afraid of
            becoming closer to Tearju because she doesn't know how to face her
            after becoming a notorious assassin, and feels she doesn't deserve
            to be with her again after what she has become. But with help of
            Rito and Mea, they persuade her to come back to school. Tearju has
            become her new homeroom teacher, and was tearfully overjoyed to see
            her in her uniform.
          </p>
          <br />
          <p>
            Yami's relationship with Tearju still remains very awkward. Even
            after Yami publicly introduced Mea as her sister, she remains
            reluctant to become closer to Tearju again and would rather drag
            even Rito along with her to avoid being alone with Tearju.
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Lunatique
            </a>
          </h3>
          <p>
            The Lunatique is the artificial intelligence in Yami's space ship
            which is also where she lives. Lunatique is very loyal to Yami as he
            always calls her "master" and shows some concern for her. Yami
            states that he is like an old friend who helps her escape when she
            is on the verge of life and death. She eventually told him to refer
            to her as "Yami-chan".
          </p>
          <br />
          <h3>
            <a
              href="nemesis"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Nemesis
            </a>
          </h3>
          <p>
            Nemesis is also a transformation weapon like Yami and Mea. Nemesis
            and Yami seem to know each other, though they first meet each other
            in Darkness Chapters 23-24. Nemesis originally planned for Yami to
            return to her old life as an assassin, starting with finishing what
            she started when first coming to Earth which is killing Rito.
            However, because Rito can change the way a transformation weapon
            acts, Nemesis decided to observe how things progress, first by
            approaching Rito herself.
          </p>
          <br />
          <p>
            Nemesis says that one day, Yami will inevitably once again become an
            emotionless killer when she uses a hidden ability known as
            "Darkness", which she describes will bring about chaos and
            destruction to the universe. After Yami's Darkness transformation is
            defeated by Rito, it is now unknown if Nemesis has anymore plans
            with Yami. Jan
          </p>
          <br />
          <h3>
            <a
              href="#"
              className="text-[purple] mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Principal
            </a>
          </h3>
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p>
                Yami finds the principal annoying due to him constantly sexually
                harassing her. When he harasses her, she instantly beats him,
                which he seems to enjoy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/yamiprincipal.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
              />
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                Principal flirting on Yami.
              </span>
            </div>
          </div>
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
