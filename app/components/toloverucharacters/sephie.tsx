import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sephie = () => {
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
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-4xl ">
          <h1 className="mb-5 text-3xl">Sephie MMichaela Deviluke</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="yami_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <p>
            <strong>Sephie Michaela Deviluke</strong>{" "}
            (セフィー・ミカエラ・デビルーク Sefī Mikaera Debirūku?) is the
            mother of{" "}
            <a
              href="/lala"
              className="text-[purple] underline hover:text-black"
            >
              Lala Satalin Deviluke
            </a>
            ,{" "}
            <a
              href="/nana"
              className="text-[purple] underline hover:text-black"
            >
              Nana Astar Deviluke
            </a>
            , and{" "}
            <a
              href="/momo"
              className="text-[purple] underline hover:text-black"
            >
              Momo Belia Deviluke
            </a>
            . She is the Queen of planet{" "}
            <a
              href="/deviluke"
              className="text-[purple] underline hover:text-black"
            >
              Deviluke
            </a>{" "}
            and a decendent of an alien race known as <strong>Charmians</strong>
            .
          </p>
          <br />
          <p>
            In To LOVE-Ru Darkness chapter 49, worried by the fact that Lala has
            become small, she came to visit them om Earth
          </p>
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
                <a href="#appearance" className="hover:underline">
                  {" "}
                  Appearance
                </a>
              </li>
              <li>
                <a href="#personality" className="hover:underline">
                  Personality
                </a>
              </li>
              <li>
                <a href="#history" className="hover:underline">
                  History
                </a>
              </li>
              <li>
                <a href="#powers" className="hover:underline">
                  Powers and Abilities
                </a>
              </li>
              <li>
                <a href="#relationships" className="hover:underline">
                  Relationships
                </a>
                <ol className=" list-inside pl-5 mt-2 space-y-1">
                  <li>
                    <a href="#gid">5.1. Gid Lucio</a>
                  </li>
                  <li>
                    <a href="#daughters">5.2. Daughters</a>
                  </li>
                  <li>
                    <a href="#rito">5.3. Yuuki Rito</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#appellations" className="hover:underline">
                  Appellations
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
            </ol>
          </nav>

          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold mb-3 border-b" id="appearance">
              Appearance
            </h2>
            <p>
              Known for her beauty, Sephie sports the slander, voluptuous figure
              that her race, the Charmians, are known for. She has fair skin,
              long wavy hair and shares its pink color woth her daughters, and
              has red eyes (pink in the anime). When visiting Earth, she wears a
              gold tiara and a revealing, white of f-sholder dress that accents
              her large brests. To prevent men from being affected by her
              beauty, she sports a pink veil that obscures her face.
              Measurements are B92-W58-H90
            </p>
            <br />
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold mt-5 mb-3 border-b"
              id="personality"
            >
              Personality
            </h2>
            <p>
              She acts more as the leader of the planet Deviluke than her
              husband, Gid Lucione Deviluke, the king of Deviluke and emperor of
              the Milky Way Galaxy. Unlike her demanding and spoiled husband,
              she has been described as a wonderful person, a hardworking leader
              of her people, and a good role model for her daughters. As the
              current queen of Deviluke (in the king's place, who isn't good at
              politics), she demonstrates active leadership and endeavors to
              maintain relations with every planet.
            </p>
            <br />
            <p>
              As a Charmian, Sephie is, by nature, a very caring and
              understanding individual. She manages to see the good in most
              everything, and seemingly yearns to introduce true happiness into
              people's lives to the point of absolute selflessness.
            </p>
            <br />
            <p>
              Despite not being vain, humorously, she is still unintentionally
              narcissistic about her beauty. She would often comment about her
              own beautiful face, and loudly laments and regrets how much
              trouble she causes around herself simply for being too beautiful.
              And even to the few who have ever been unfazed when seeing her
              face, she would ask them if they are okay after seeing her
              "beautiful face", an attitude that perplexed even Gid when they
              were both children.
            </p>
            <br />
            <p>
              In terms of personality, Sephie resembles her youngest daughter,
              Momo. She takes a liking to Rito for his innocence, which remained
              unshakable even in the face of her overwhelming beauty and muses
              he is similar to her spouse. She realized quickly why her
              daughters loved him, and jokingly offered all three to him. And
              based on his flustered reaction, as well as knowing that Sephie
              was much like her, she quickly knew that Momo is working on a
              harem plan around Rito, which she approves of if Momo is fine with
              it, much to Momo's shock.
            </p>
            <br />
          </div>

          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="history">
            History
          </h2>
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Because of her over-appealing beauty, Sephie has faced many
                troubles from males of any kind coming on to her since
                childhood. During her childhood, however, she and the surviving
                members of her race traveled the galaxy as a caravan, because
                they didn't have a home planet of their own. After being
                assaulted by numerous men, the one who kept her safe from this
                was Gid Lucione Deviluke, whom she fell in love with due to him
                not being affected by her charm, eventually married him and had
                three daughters.
              </p>
              <br />
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src="To Love Ru/sephieart.jpg"
                alt="Rito, Mikan, and Celine meet Sephie for the first time"
                className="w-40 h-auto rounded"
              />
              <span className="mt-2 text-sm text-center break-words w-52  block">
                Rito, Mikan, and Celine meet Sephie for the first time
              </span>
            </div>
          </div>

          <br />
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="powers">
            Powers and Abilities
          </h2>
          <p>
            <strong>Charming Physiology:</strong> Sephie is part of a race known
            as Charmians, a humanoid race who are endowed with the most
            beautiful voices and appearances in the universe.
          </p>
          <br />
          <div className="ml-5">
            <ul className="list-disc pl-5">
              <li className="flex gap-4 items-start">
                <div className="flex-1">
                  <li>
                    <strong>Lust Inducement via Pheromones:</strong> The sites
                    of pheromone production and other secretions in a Charmian's
                    deep dermis produce numerous psychoactive chemicals, which,
                    when inhaled or absorbed through the skin, induce in an
                    individual a sexual desire no matter how much of a gentlemen
                    they are. This also works on animals. However, certain
                    individuals (such as Gid and Rito) are capable of resisting
                    this.
                  </li>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <img
                    src="https://static.wikia.nocookie.net/to-loveru/images/f/f5/Sephie_Principal_TLRD2_OVA2_01.png"
                    alt=""
                    className="w-40 h-auto rounded"
                  />
                  <span className="mt-2 text-sm text-center w-36 block">
                    Sephie's Charmian ability.
                  </span>
                </div>
              </li>
              <li>
                <strong>Superhuman Physical Attributes:</strong> Charmians have
                naturally augmented physiologies due to their entire body being
                composed of healthy cells. It has been stated that "every cell
                in a Charmian's body is perfection".
              </li>
              <li>
                <strong>Decelerated Aging:</strong> If a Charmian lived long
                enough, the regeneration of healthy cells would have slowed down
                the aging process in their body.
              </li>
              <li>
                <strong>Charismatic Voice:</strong> Charmians are known to have
                beautiful voices, able to bring out the good in people and stop
                conflicts between them using only their words.
              </li>
              <li>
                <strong>Enhanced Metabolism:</strong> As a Charmian, Sephie is
                resistant to gaining weight as part of having her attractive
                figure.
              </li>
            </ul>
          </div>
          <br />
          <h2
            className="text-2xl font-bold mt-5 mb-3 border-b"
            id="relationships"
          >
            Relationships
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2" id="gid">
                  Gid Lucione Deviluke
                </h3>
                <p>
                  She is married to Gid, the king of Deviluke and the emperor of
                  the Milky Way galaxy. It's unknown what her impression of him
                  is, especially considering his intentions of dropping down
                  from the throne to go around and do perverted things to other
                  women, but Momo states that Gid is completely unable to oppose
                  her. It was Gid, however, who saved her when the great
                  intergalactic war was fought over her, implying that he does
                  care for her and her well-being.
                </p>
                <br />
                <p>
                  Sephie once stated to Momo that she wanted Gid to notice her
                  because he was the first male who was completely unaffected by
                  her charm due to Gid being only interesting in fighting. She
                  tried to get him notice her and end up forced herself onto
                  him. She remember fondly how Gid's face was bright red when
                  she did.
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <img
                  src="To Love Ru/sephieart2.jpg"
                  alt=""
                  className="w-60 h-auto rounded"
                />
                <span className="mt-2 text-sm text-center break-words w-52 block">
                  A young Sephie with her future husband, Gid
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" id="daughters">
                Daughters
              </h3>
              <p>
                Sephie loves her daughters very much, showing equal affection
                and attention to each of them. Lala, Momo, and Nana have
                inherited her beauty (though Nana does not share their
                impressive breast size), but not enough to inherit the
                Charmian's seductive trait, which Sephie is grateful for, so
                they wouldn't grow up with the same trouble she did. Momo states
                that she's a wonderful person. To her daughters, she is the
                person they admire the most.
              </p>
              <br />
              <p>
                Despite their love for her, Lala and her sisters do not seem too
                lonely or upset at being so separated from their mother while
                staying on Earth. Because their mother is so busy leading her
                people (and because of their father's perverted hobbies), her
                daughters seem to have grown up most of their lives in the
                palace under the care of Zastin and their teachers.
              </p>
              <br />
              <p>
                While on Earth, Momo has stated that despite being busy most of
                the time, their mother still makes time to call them (To-Love-Ru
                Darkness Chapter 23), and is willing to bathe with them as she
                did when they were children to make up for lost time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" id="rito">
                Yuuki Rito
              </h3>
              <p>
                Despite only knowing him for a short time, it's clear that
                Sephie respects him as the fiancee of her eldest daughter, and
                is just as understanding and caring towards him as she is with
                all other people she comes across. She thinks of him as someone
                with intensive, soulful willpower and considerate restraint,
                which reminds her of her husband and why she fell in love with
                him to begin with, and has described as being a "wonderful
                person."
              </p>
            </div>
          </div>
          <h2
            className="text-2xl font-bold mt-5 mb-3 border-b"
            id="appellations"
          >
            Appellations
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#dfdfdf] text-black">
                  <th className="px-4 py-2 border border-gray-300">
                    Character
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    What they call her
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    What she calls them
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Gid Lucione Deviluke
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Sephie</td>
                  <td className="px-4 py-2 border border-gray-300">Gid</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Lala Satalin Deviluke
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Mama</td>
                  <td className="px-4 py-2 border border-gray-300">Lala</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Momo Belia Deviluke
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Oka-sama</td>
                  <td className="px-4 py-2 border border-gray-300">Momo</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Nana Astar Deviluke
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Haha-ue</td>
                  <td className="px-4 py-2 border border-gray-300">Nana</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Yuuki Rito
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Sephie-san
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Rito-san</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">
                    Yuuki Mikan
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Sephie-san
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Mikan-san
                  </td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">Peke</td>
                  <td className="px-4 py-2 border border-gray-300">
                    Sephie-sama
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Peke</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-300">Zastin</td>
                  <td className="px-4 py-2 border border-gray-300">
                    Sephie-sama
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Zastin</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="trivia">
            Trivia
          </h2>
          <ul className="list-disc pl-5 ml-5">
            <li>
              In chapter 2 of "To Love Ru Trouble", a mistranslation stated that
              Lala's mother was dead, which caused some controversy when she was
              mentioned again in Darkness chapter 23, where Momo states she is
              alive and calls on occasion. She makes her first appearance in
              person in To Love-Ru Darkness chapter 49.{" "}
            </li>
            <li>
              She seems to be based on (at least appearance-wise) Sephiria Arks,
              a character from previous work, Black Cat, by To Love Ru' artist,
              Kentaro Yabuki.{" "}
            </li>
            <li>
              Unlike her husband and daughters, whose middle names reference to
              demons, Sephie's middle name, Michaela, is a reference to the
              archangel Michael.{" "}
            </li>
          </ul>
          <br />
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Sephie Michaela Deviluke
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="/To Love Ru/sephie2.jpg"
                alt="Sephie Michaela Deviluke"
                className="w-80 h-80 object-cover border-2 border-[#DB49AC] "
              />
            </div>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0">
                <tbody>
                  {/* Characteristics */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Characteristics
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 w-1/3 border border-[#9C2E7A] ">
                      Kanji
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      金色の闇 (イヴ)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Konjiki no Yami
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Kurosu (2008 anime only)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      14-15 (manga) <br /> 24,000 Kurosu Years (2008 anime only)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      December 24th
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Capricon
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Female
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      153 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      45 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      AB
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Blonde
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Dark Red
                    </td>
                  </tr>
                  {/* Personal Status */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Personal Status
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      School
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Class
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      1-B
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Currently attending Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Assassin <br />
                      Target:{" "}
                      <a href="/rito" className="text-[purple] ">
                        Yuuki Rito
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Doctor Tearju Lunatique <br />
                      Kurosaki Nea
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Single
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Body Transformation <br />
                      "Darkness" Transformation
                    </td>
                  </tr>
                  {/* First Appearance */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      First Appearance
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Manga Debut
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Chapter 35
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Episode 11
                    </td>
                  </tr>
                  {/* Voice Actors */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Voice Actors
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Japanese VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Misato Fuken
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Katelyn Barr
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Gallery
                    </td>
                  </tr>
                </tbody>
              </table>
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
