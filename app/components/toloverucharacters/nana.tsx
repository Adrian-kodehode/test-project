import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Nana = () => {
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
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl ">
          <h1 className="mb-5 text-3xl">Nana Astar Deviluke</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Animals
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
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
          <p>
            <strong>Nana Astar Deviluke</strong> (ナナ・アスタ・デビルーク Nana
            Asuta Debirūku?) is the twin of Momo and the younger sister of Lala.
            She is the second princess of Deviluke. She has the ability to talk
            to and understand animals. Of all the main female characters, she
            has shown the least attraction to Rito, considering him to be a
            "beast". Nevertheless, she has shown a slight affection for Rito,
            with the idea that she tried to sleep with him in his bed. In To
            Love-Ru she was seen with Momo all the time, but in To Love-Ru
            Darkness they are not together as often as before. This is because
            while Momo becomes more attached to Rito, Nana has become friends
            with Kurosaki Mea, with whom she hangs out more often. Although Mea
            is a transformation weapon and has difficulty accepting the idea of
            friendship, she eventually becomes more open with her feelings for
            others through her friendship with Nana.
          </p>
          <nav className="w-44 mt-5 bg-white text-start border rounded mb-6">
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
                <a href="#personaøity" className="hover:underline">
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
                <a href="#personaøity" className="hover:underline">
                  Equipment
                </a>
              </li>

              <li>
                <a href="#appellations" className="hover:underline">
                  Appellations
                </a>
              </li>
              <li>
                <a href="#etymology" className="hover:underline">
                  Etymology
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
              <li>
                <a href="#references" className="hover:underline">
                  Refrences
                </a>
              </li>
              <li>
                <a href="#navigation" className="hover:underline">
                  Navigation
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black max-w-2xl ">
            <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
              Appearance
            </h2>
            <p>
              Nana has long pink hair and violet eyes. In both To LOVE-Ru and To
              LOVE-Ru Darkness, Nana usually wears her hair in pigtails on the
              sides of her head. She sometimes loosens the pigtails such as
              after bathing or when wearing casual clothes.
            </p>
            <br />
            <p>
              Like all Devilukeans, Nana has a long black tail on her back, and
              like her sisters, she has a spade-shaped tail tip. Nana also has a
              smaller chest than Momo, which Momo teases her about. When Nana
              fights, her pupils become thinner and more pointed. Another
              interesting note is that she has a pointed fang on the left side
              of her upper teeth, making her the only Devilukean princess to
              have a pointed fang in her mouth.
            </p>
            <br />
            <p>
              Nana wears a unique outfit consisting of a black collar with
              yellow ornamentation, a sleeveless dress with sleeves reaching
              down to her armpits, thigh-high socks with black and red stripes,
              and black shoes. The outfit generally features black and red
              colors, as opposed to her twin sister, Momo, whose outfit features
              black and green colors.
            </p>
            <br />
            <p>
              She wears the Sainan High uniform when she attends classes. In the
              early chapters of To Love-Ru Darkness, she also wears black socks
              and the yellow vest like Momo and other students, but later she
              does not wear the vest over the uniform and changes her socks to
              white, loose and shorter.{" "}
            </p>
            <br />
          </div>
          <div className="flex-1 text-black max-w-2xl ">
            <h2 className="text-2xl font-bold border-b mb-4" id="personality">
              Personality
            </h2>
            <h3 className="ml-8">
              "You Beast!"
              <br /> ―Nana to Rito
            </h3>
            <p className="mt-8">
              Nana seems short-tempered, impatient, and somewhat tomboyish, much
              unlike her twin sister, Momo. But underneath her brash,
              overactive, and angry behavior, Nana is actually very kind,
              helpful, cheerful, and even adorable. She has an open, sincere,
              and somewhat childlike side that cherishes her friendship very
              much, which also makes her easily heartbroken when those relations
              were ever lost or betrayed, such as with Mea, whom she considers
              her first true and intimate friend.
            </p>
            <br />
            <p>
              Despite her tomboyish personality and temper, Nana has the vague
              charm that has even impressed some of the most mindless of
              individuals. Mea is an excellent example of this; When Nana was
              talking about how the two birds were going to fly west, Mea was
              astonished and amused when she found out that Nana could talk to
              animals, being fully accepting of this odd trait. Before, Mea has
              been just a mindless being that was sent to Earth. Before she met
              Nana, Mea was following Nemesis's orders without question. Thanks
              to Nana's "charm", Mea has opened up her mind and has become best
              friends with Nana.
            </p>
            <br />
            <p>
              She can be very brave whenever her friends are in trouble, such as
              when she risks her own life just to save Haruna and her dog, when
              Mea is trying to scare her away, or when a little monkey is about
              to get hit by a truck.
            </p>
            <br />
            <p>
              Nana hates to be teased by Momo because of her flat chest. While
              Momo possesses a developed figure similar to their elder sister
              and mother, Nana is far less developed and is very sensitive about
              her breasts. Momo passively and playfully teases her about it, but
              Nana occasionally becomes upset and even hurt about it. She has
              also been described as something of 'uncareful', as she was
              apparently the kind of child who would often break her toys by
              mistake, and even still manages to get most of her belongings, and
              sometimes other people's, disjointed or improperly used.{" "}
            </p>
            <br />
            <p>
              Nana apparently dislikes anything lewd and impure, mostly
              referring to Rito and calling him a beast because of his bad
              habits. However, she initially didn't know what sexual intercourse
              actually was, often thinking about how baby animals kept showing
              up on her virtual safari. After being told of the process, her
              reaction became a source of teasing for Mea. Originally, Nana was
              one of the few girls who didn't have any feelings for Rito, but
              eventually, his kindness starts to grow on her, as he helped her
              rebuild her friendship with Mea and hugged her in the process,
              which she remembered felt very good. Because of this, Nana has
              developed complex feelings when it comes to Rito. Sometimes when
              she is denying something, she makes a certain outburst, mostly
              involving Rito, meanwhile, her pigtails seem raised. She becomes
              extremely jealous when a girl approaches to him and if Momo teases
              her by telling her she loves him, she gets angry and denies it,
              which reflects her tsundere character.
            </p>
            <br />
            <p>
              Nana slightly matures over the series, as pointed out by Momo, and
              grudgingly notes that Nana might be surpassing her. When Lala was
              attempting to kiss Rito, Nana advises her that Rito has some
              complicated thing he needs to deal with first before the kiss.
              This shows that Nana has some concern over how Rito might be
              feeling. And because she avoids and denies love most of the time,
              she has taken more time to think about and examine her own
              feelings more carefully, which gives her a better understanding of
              how Rito feels about his complicated relationships at the present,
              and she may understand love better than even Momo. She does,
              however, think that couples are supposed to kiss AFTER they are
              married.
            </p>
            <br />
            <p>
              Even so, she does seem to be quite shy and graceful at times in
              necessary, most likely due to being educated as a princess.
            </p>
            <br />
            <p>
              In Nana's past, she tended to make her unique way other than
              ordinary means. This can be seen in her artistic skills which do
              not seem very good. Because of her attitude to neglect learning in
              the lessons, she went to a, unique way to develop her own style.
            </p>
            <br />
            <p>
              She is very caring towards animals due to her ability to talk to
              them.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="history">
              Powers and Abilities
            </h2>
            <p>
              <strong>Devilukean/Charmian Hybrid Physiology</strong>: Like all
              Devilukeans, Nana's physical skills are greater than any known
              race. Her's in particular, because Nana can be very athletic, as
              she is very good at sports, even being asked to join Sainan High's
              swimming club. Nana also possesses the Devilukean's super strength
              and their bloodlust, making her very dangerous in battle. However,
              her most notable ability is communicating with all animal life, it
              is revealed that this is a result of having Charmian descendants
              from her mother mixed with her Devilukean blood.
            </p>
            <br />
            <div className="ml-8">
              <li>
                <strong>Superhuman Strength:</strong> As a Devilukean, Nana
                possesses incredible strength, even able to throw an actual
                person (often Rito) a great distance.
              </li>
              <br />
              <li className="flex items-start gap-4">
                <div className="flex-1">
                  <strong>Devilukean Tail:</strong> Like her sisters, she also
                  has the ability to shoot lightning out from the tip of her
                  tail, when using this ability in tandem with Momo's, it
                  creates an even more powerful lighting shot. Also like her
                  sisters, Nana also becomes weak whenever someone touches her
                  tail. This weakness is usually taken advantage of by Momo
                  whenever they get into fight.
                </div>
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/d/df/Nana_Tail_attack_v2.png/"
                  alt=""
                  className="w-32 h-auto rounded border border-gray-200"
                />
              </li>
              <br />
              <li>
                {" "}
                <strong>Intelligence:</strong> Nana is not the smartest, but she
                is knowledgeable of animals in the galaxy. Interestingly, she
                has a degree of intelligence, such as understanding Rito's
                feelings.
              </li>
              <br />
              <li>
                <strong>Zoolingualism:</strong> An ability unique only to Nana.
                She shares a connection to animal life since she was born, being
                able to communicate with them, though this doesn't seem to be
                the case with animals with low intellect.
              </li>
              <br />
              <li className="ml-8">
                <strong>Expert Xenoecologist:</strong> Compared to both her
                sisters (and perhaps most characters), Nana is the least smart
                in comparison, even in Earth history. However, she is an expert
                on most animal biodiversity in the galaxy. She is very
                knowledgeable in the habitats and lifestyles of many species in
                the galaxy, and is able to customize and maintain the ecosystem
                in her cyber safari so that all her different pets from various
                alien sources can co-exist together. Strangely, she was unaware
                of where babies come from until recently.
              </li>
              <br />
              <li>
                <strong>Strong Will Power:</strong> She has great willpower
                since she is the only person able to resist Mea's Psycho Dive
                which is shown twice.
              </li>
              <br />
              <h2 className="text-2xl font-bold border-b mb-4" id="equipment">
                Equipment
              </h2>
              <div className="flex items-start gap-4">
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/9/90/Nana_MTLR_EP4_01.png"
                  alt="Nana summoning an animal from her D-Dial."
                  className="w-40 h-auto rounded border border-gray-200"
                />
                <p>
                  <a
                    href="#"
                    className="text-[purple] underline font-bold hover:text-black"
                  >
                    D-Dial:
                  </a>{" "}
                  An invention with the same functions as a regular phone,
                  however, her D-Dial is capable of summoning animals that she
                  has met throughout space, whenever she needs them from her
                  virtual Cyber Safari.
                </p>
              </div>
              <br />
              <p>
                <strong>Anti-Gravity Wing System:</strong> A small chip placed
                at the back of most of her clothes that gives her a pair of
                devilish wings on the back to enable flight. This is an
                invention made by Lala.
              </p>
              <br />
            </div>
          </div>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white text-center shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Nana Astar Deviluke
              </h1>
            </div>
            <div className="flex justify-center  w-full">
              <img
                src="public/To Love Ru/nana.jpg"
                alt="Nana Astar Deviluke"
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
                      ナナ・アスタ・デビルーク
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Nana Astar Deviluke
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Deviluke
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      August 8th
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Leo
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
                      151 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      43 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      B
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Pink
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Purple
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
                      Sainan High
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
                      Currently attending Sainan High
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Secound Princess of Planet Deviluke
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Lala Satalin Deviluke (Older Sister)
                      <br />
                      Momo Bella Deviluke (Younger Sister)
                      <br />
                      Gid Lucicone Deviluke (Father)
                      <br />
                      Sephie Michaela Deviluke (Mother)
                      <br />
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
                    <td className="bg-white text-center  text-black p-2 border border-[#DB49AC] ">
                      - Devilukean Tail - Pettanko (Flat chested) - Can
                      communicate with animals - Immature tendencies - Tsundere
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
                      Chapter 97
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      OVA 4
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
                      Kanae Itō
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Allison Sumrall
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
