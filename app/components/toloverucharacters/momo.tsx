import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Momo = () => {
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
          <h1 className="mb-5 text-3xl">Momo Belia Deviluke</h1>
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
                Plants
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
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Quotes
              </a>
            </div>
          </div>
          <p>
            <strong>Momo Belia Deviluke</strong> is Nana's twin, as well as
            Lala's younger sister. As Gid's daughter, she holds the title of
            "Third Princess of Deviluke" as she is the youngest out of his three
            daughters. In To Love-Ru, she used to be seen with Nana all the
            time, but in To Love-Ru Darkness, they are not together as often as
            before. This is because while Nana became friends with Kurosaki Mea,
            whom she hangs out with more often, Momo becomes more attached to
            Rito and focuses on expanding "The Harem Plan" she has for him.
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
            </ol>
          </nav>
          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
              Appearance
            </h2>
          </div>
          <p>
            Momo has short pink hair and purple eyes. In the To LOVE-Ru manga,
            Momo's hair was frizzy, but in the beginning of To LOVE-Ru Darkness
            she straightened her hair out in hopes that Rito would see her as
            more mature. She also has two small flowers on her hair. Like all
            Devilukeans, Momo has a long black tail at her back, and like her
            sisters, she has a spade-shaped tail end. Momo also has a bigger
            bust than Nana, which the latter sometimes envies. When Momo turns
            into "evil Momo", she acquires a short fang similar to Nana's except
            that Nana's fang is on her left side while Momo's is on her right
            side. Her pupils also become thinner and pointed.
          </p>
          <br />
          <p>
            According to the official databook, Momo's measurements were
            B78-W54-H78 in the original manga. In To LOVE-Ru: Darkness, the
            Venus Momo Club members estimated her measurements to be B80-W54-H79
            which is later confirmed[1].
          </p>
          <br />
          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="personality">
              Personality
            </h2>
            <p>
              While other characters would describe her as sweet, kindhearted
              and innocent, the real Momo is above all else highly perverted, a
              side of herself which she doesn't show to others much, with the
              exception of Rito, whom she loves and lusts for. She often
              fantasizes perverted situations with Rito even if it's him with
              another girl, and desires for him to become sexually active
              towards her. Sometimes, whenever Momo gets caught up in the moment
              of imagining an ecchi situation with Rito and some other girl, she
              has a tendency to drool. She often sneaks into his bed at night
              half naked to sleep with him because, in his sleep, he becomes
              much more frisky and physically active than he is aware of. She is
              essentially the complete polar opposite of Rito Yuuki.
            </p>
            <br />
            <p>
              She seems to enjoy physical pleasure so much that it's difficult
              to determine whether or not she is mistaking lust for love. One of
              the main reasons that she fell in love with Rito is because she
              loves his unintentional lustful tendencies which he shows when
              asleep. She doesn't care if she is not Rito's favorite lover, and
              is perfectly satisfied being one of many partners, and hopes that
              Rito's other love interests are also as willing to compromise and
              share their love for Rito. She even tempted Rito with an offer of
              his own "flower garden of girls". Nonetheless, whatever way she
              interprets love, she at least takes it seriously. She is not
              willing to show her lustful side to anyone or be groped by anyone
              except Rito. She turned down the chance to be accidentally kissed
              by Rito in his sleep, wanting to receive a kiss from him only when
              he wants to.
            </p>
            <br />
            <p>
              However, after her mother visits her and questions her if her
              heart is fine with her plan, Momo begins to see her own Harem Plan
              in a more logical perspective. While she convinces herself that
              she would be perfectly content with being a part of Rito's harem,
              she is now showing obvious signs of reluctance and doubting if she
              would be truly happy with sharing Rito with all of the other
              girls.
            </p>
            <br />
            <p>
              She is very caring towards plants, due to her ability to
              communicate with them, and treats them as her friends and should
              the situation be fit to their abilities, her tools and weapons. In
              fact she notes one of the reasons she fell for Rito was his
              kindness towards Celine and the plants in his garden, after which
              she only progressively falls deeper in love with him, which
              gradually goes from teasing him, to sleeping in his bed, to
              conducting the Harem Plan all to secure her place beside him.
            </p>
            <br />
            <p>
              Momo is also known for her yandere tendencies, which some
              characters who truly know her would describe to be the real Momo.
              She is generally sweeter than her twin sister, but develops a bad
              attitude whenever Nana takes credit for something they do. She
              also shows a darker and more sinister side of herself whenever her
              friends are in trouble, and she becomes more mischievous and
              hostile. Some examples of this are when Nana and Yami were in
              trouble on Planet Mistletoe, when the VMC planned to beat up Rito,
              and when Yami, Mikan and Rito were threatened by Azenda. People
              have generally stated that Momo becomes very scary when this
              occurs. Momo calls this her battle state, a state which Yami and
              Mea have noted that she has a tremendous amount of bloodlust.
            </p>
            <br />
            <p>
              Although she can be rather perverse and even selfish with her
              desires on occasions, she is still a very kind person to those she
              cares about and is willing to do anything to make them happy,
              including helping Rito choose more than one woman when he
              obviously cares about so many. Many of her perverted antics, while
              also being for her own enjoyment, are more often than not done to
              titillate and arouse Rito out of love and lust at the same time.
              She's even willing to go to the extent of being absolutely
              protective over others, like when she made it her current goal at
              a time to make sure Rito wasn't harmed by Yami, and threatening
              the VMC to let Rito go and apologize to him after beating him up
              and promising to do worse.
            </p>
            <br />
            <p>
              Momo occasionally fiddles with her hair when thinking over
              important situations concerning either Nemesis or her Harem plan,
              which she would seem very serious about.
            </p>
            <br />
            <p>
              Like Rito, she also has an interest in playing video games, most
              notably when buying love sim games for ideas for her "harem plan".
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="history">
              History
            </h2>
            <p>
              Ever since childhood, Momo and Nana always argued. Whenever they
              fight, their older sister, Lala, would always arrange ways for
              them to make up, and for Zastin not to be angry with them. An
              example of this is when they were children, and Momo and Nana were
              fighting, but Lala caused her inventions to run amok then asked
              for Momo and Nana's help to catch them, so that Momo and Nana will
              work together, and Zastin would scold Lala instead.
            </p>
            <br />
            <p>
              At some point, Momo travelled through space and met tons of plants
              she befriended due to her ability to talk to them.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="powers">
              Powers and Abilities
            </h2>
            <div className="flex flex-row items-start gap-4">
              <div className="flex-1">
                <p>
                  <strong>Devilukean/Charmain Hybrid Physiology</strong>: Like
                  all Devilukeans, Momo physical abilities are incredibly
                  strong. Momo also has a hidden side to her known as "Evil
                  Momo" (which she calls it her "battle mode"), in this state
                  she has tremendous bloodlust, making her dangerous in battle.
                  Despite her true power hasn't been shown in any battle yet,
                  Nana seems to be scared of this side of Momo. Yami and Nemesis
                  are also aware of her hidden power.
                </p>
              </div>
              <img
                src="To Love Ru/momoart.jpg"
                alt=""
                className="w-1/2 h-auto object-contain"
                onClick={() => {
                  window.open("To Love Ru/momoart.jpg ", "_blank");
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <br />
            <p>
              However, her most notable ability is communicating with all plant
              life. It is revealed that this is a result of being of Charmian
              descent.
            </p>
            <br />
            <div className="ml-8">
              <p className="mt-2">
                • <strong>Superhuman Strength</strong>: as a Devilukean, Momo
                possesses incredible strength.
              </p>
              <div className="mt-4 flex flex-row gap-4 items-start">
                <div className="flex-1">
                  <p className="mt-2">
                    • <strong>Devilukean Tail</strong>: She also has the ability
                    to fire lightning out from the tip of her tail, when using
                    this ability in tandem with with Nana's, it creates an even
                    more powerful lighting shot. Like her sisters, Momo also
                    becomes weak whenever someone touches her tail (however,
                    given her personality, she apparently enjoys it as it has an
                    erotic feeling to it).
                  </p>
                  <p className="mt-2">
                    • <strong>Botanical Communication</strong>: An ability
                    unique only to Momo. She shares a connection to plant life
                    since she was born, being able to communicate with them
                  </p>
                  <p className="mt-4 ml-8">
                    • <strong>Expert Xenobotanist and Horticulturalist</strong>:
                    Momo's ability to understand plant life allows her to become
                    an expert botanist. She understands the biology and
                    chemistry of most plant life in the galaxy, and the
                    abilities and effects of their spores, pollens and other
                    characteristics. She maintains her own interplanetary
                    garden, which she is able to access through her d-dial phone
                    to call any of her plants and use their abilities for
                    varying purposes, including combat.
                  </p>
                  <br />
                </div>
                <img
                  src="To Love Ru/momoart2.jpg"
                  alt=""
                  className="w-1/2  h-auto object-contain"
                  onClick={() => {
                    window.open("To Love Ru/momoart2.jpg ", "_blank");
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <p>
              <strong>Intelligence</strong>: Momo also has a great intellect and
              an aptitude with her sister Lala's technology, like creating the
              virtual world video game Trouble Quest, programming a cyber safari
              for Nana, and generating an invisible barrier. In terms of
              technology, she is not as smart as Lala, but far more than Nana.
              She is especially knowledgeable with the biology of most
              plant-life in the galaxy.
            </p>
            <br />
            <p>
              <strong>Acting</strong>: She's also proven to be a very good
              actress, managing to fool Rito while in Nana's body that 'Nana'
              was attracted to him and wanted make sure he liked her despite her
              breast size. Most notably, she manages to trick everyone into
              thinking she is a sweet and innocent girl.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="equipment">
              Equipment
            </h2>
            <div className="flex flex-row items-start gap-4">
              <div className="flex-1">
                <p>
                  <strong className="text-[purple] underline">D-Dial</strong>:
                  An invention with the same functions as a regular phone,
                  however her D-Dial is capable of summoning plants and fruits
                  that she has met through out space, whenever she needs them
                  from an interplanetary botanical garden.
                </p>
                <br />
              </div>
              <img
                src="To Love Ru/momoddial.jpg"
                alt=""
                className="w-1/2 h-auto object-contain"
                onClick={() => {
                  window.open("To Love Ru/momoddial.jpg", "_blank");
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <p>
              <strong>Anti-Gravity Wing System</strong>: A small chip placed at
              the back of most of her clothes that gives her a pair of devilish
              wings on the back to enable flight. This is an invention made by
              Lala.
            </p>
            <br />
            <p>
              <strong>Laptop</strong>: Momo has a unique Laptop, which is what
              she used to create a virtual space for the game Trouble Quest and
              the Cyber Safari for her plants and Nana's animals. It can also
              change the scenery through a window like making seem like it's
              raining.
            </p>
            <br />
            <p>
              <strong>Transmutational Barrier Generator</strong>: A device that
              creates a huge force field, big enough to contain a whole house.
            </p>
            <br />
          </div>
          <h2 className="text-2xl font-bold border-b mb-4" id="appellations">
            Appellations
          </h2>
          <div className="grid grid-cols-3 gap-0 border mb-6">
            <div className="font-bold border flex items-center justify-center p-2 bg-gray-100">
              Character
            </div>
            <div className="font-bold border flex items-center justify-center p-2 bg-gray-100">
              What they call her
            </div>
            <div className="font-bold border flex items-center justify-center p-2 bg-gray-100">
              What she calls them
            </div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yuuki Rito</a>{" "}
            </div>
            <div className="border p-2">Momo</div>
            <div className="border p-2">Rito-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Lala Satalin Deviluke</a>{" "}
            </div>
            <div className="border p-2">Momo</div>
            <div className="border p-2">Onee-sama</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Nana Astar Deviluke</a>{" "}
            </div>
            <div className="border p-2">Momo</div>
            <div className="border p-2">Nana</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yuuki Mikan</a>{" "}
            </div>
            <div className="border p-2">Momo-san</div>
            <div className="border p-2">Mikan-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yuuki Saibai</a>{" "}
            </div>
            <div className="border p-2">Momo-chan</div>
            <div className="border p-2">Father</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Kurosaki Mea</a>{" "}
            </div>
            <div className="border p-2">Momo-chan</div>
            <div className="border p-2">Mea-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yami</a>{" "}
            </div>
            <div className="border p-2">Princess Momo, Momo</div>
            <div className="border p-2">
              Yami-san, Konjiki no Yami-san (earlier)
            </div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Zastin</a>{" "}
            </div>
            <div className="border p-2">Momo-sama</div>
            <div className="border p-2">Zastin-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Sairenji Haruna</a>{" "}
            </div>
            <div className="border p-2">Momo-chan</div>
            <div className="border p-2">Haruna-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Kotegawa Yui</a>{" "}
            </div>
            <div className="border p-2">Momo-chan</div>
            <div className="border p-2">Kotegawa-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Momioka Risa</a>{" "}
            </div>
            <div className="border p-2">Momo-chi</div>
            <div className="border p-2">
              Momioka-san, Momioka Risa (in thoughts)
            </div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Nakajima</a>{" "}
            </div>
            <div className="border p-2">Momo-sama, Momo-san (earlier)</div>
            <div className="border p-2">MNakajima-san</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Saruyama Kenichi</a>{" "}
            </div>
            <div className="border p-2">Momo-chan</div>
            <div className="border p-2">Saruyama-san</div>
          </div>
          <h2 className="text-2xl font-bold border-b mb-4" id="etymology">
            Etymology
          </h2>
          <p>Momo's given name is the japanese word for "peach" (桃).</p>
          <br />
          <p>
            Like the other parts of the Devilukean family, Momo's second name
            Belia (ベリア Beria) is a reference to the demons, Belial or Berith.
          </p>{" "}
          <br />
          <p>
            Her middle name Belia may also refer to Beelzebub, who was one of
            the three superior spirits (or the Unholy Trinity) of Hell, together
            with Lucifer (Satan) and Astaroth.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="trivia">
            Trivia
          </h2>
          <div className="flex flex-row gap-4 items-start">
            <div className="flex-1">
              <p>
                • Her estimated age of 14[2] seems to be based on the school
                year that she and her sister joined. However, the people that
                make the estimation have no first-hand knowledge.
              </p>
              <p className="mt-2 ml-8">
                • Furthermore in another chapter it is shown that Nana and Momo
                was allowed to join the school because of the perverted
                principal, suggesting that there should actually be a problem
                with them enrolling. Meaning they might be too young to actually
                join.
              </p>
              <br />
              <p className="mt-1">
                • Her middle name is also transliterated to "Velia", "Veria",
                "Beria" or "Bella" in some fan translations.
              </p>
            </div>
            <img
              src="To Love Ru/momoart3.jpg"
              alt=""
              className="w-1/2 h-auto object-contain"
              style={{ maxWidth: 200 }}
            />
          </div>
          <p className="mt-1">
            • Her actual design and Mea's were based on another character by
            Yabuki Kentarō: Amane Yuka from the one-shot Futagami Double, who
            had a cameo in the manga Mayoi Neko Overrun! Chapter 3 page 23.
          </p>
          <p className="mt-1">
            • It’s heavily implied that Momo has orally serviced Rito at least
            three times over the course of the series.
          </p>
          <div className="ml-8 mt-5">
            {" "}
            <p>
              • The first time is implied to happen at the beginning of Chapter
              141 of the original manga.
            </p>
            <p>
              • The second time is implied to happen sometime during the first
              chapter of Darkness when Momo joined Rito in the bath with Mea
              seeing the event occur by peaking into Rito’s memories with her
              Psycho Dive ability in chapter 3.
            </p>
            <p>
              • The third time is implied to happen at the beginning of chapter
              39 of Darkness.
            </p>
            <br />
          </div>
          <p>
            • Momo’s english voice actress Natalie Rial is the real life sister
            of Monica Rial who voiced Kirisaki Kyōko and Haruna in To Love Ru
            Darkness 2nd.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="references">
            References
          </h2>
          <div className="ml-4">
            <li> Harem Plan Guide Book and any other media after that.</li>
            <li> To Love-Ru Darkness chapter 17</li>
            <br />
          </div>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white text-center shadow-lg flex flex-col items-center">
            <div className="text-center w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Momo Belia Deviluke
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="/To Love Ru/momo.jpg"
                alt="Momo Belia Deviluke"
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
                      モモ・ベリア・デビルーク
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Momo Belia Deviluke
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
                      45 kg
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
                      Third Princess of Deviluke
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Lala Satalin Deviluke (Older Sister) <br />
                      Nana Astar Deviluke (Older Twin) <br />
                      Gid Lucione Deviluke (Father) <br />
                      Sephie Michaela Deviluke (Mother)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Yūki Rito (harem plan possible leader and mastermind)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      - Devilukean tail <br />
                      - Able to communicate with plants <br />
                      - Perverted <br />
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
                      Episode OVA 4
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
                      Aki Toyosaki
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Natalie Rial
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
