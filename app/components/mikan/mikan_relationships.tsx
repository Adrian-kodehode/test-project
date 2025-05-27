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
          <h1 className=" text-3xl">Yūki Mikan/Relationships</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/momo">Yūki Mikan</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/mikan" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/mikan_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/mikan_relationships"
                className=" hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/mikan_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
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
              <ol className="list-decimal list-inside px-5 py-3 text-gray-700 text-sm space-y-1">
                <li>
                  <a href="#rito" className="hover:underline">
                    {" "}
                    Rito Yuuki
                  </a>
                </li>
                <li>
                  <a href="#lala" className="hover:underline">
                    Lala Satalin Deviluke
                  </a>
                </li>
                <li>
                  <a href="#darkness" className="hover:underline">
                    Golden Darkness
                  </a>
                </li>
                <li>
                  <a href="#momo" className="hover:underline">
                    Momo Belia Deviluke
                  </a>
                </li>
                <li>
                  <a href="#nana" className="hover:underline">
                    Nana Astar Deviluke
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline">
                    Saibai Yuuki
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ringo Yuuki
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Celine
                  </a>
                </li>
                <li>
                  <a href="#mami" className="hover:underline">
                    Sachie and Mami
                  </a>
                </li>
                <li>
                  <a href="#haruko" className="hover:underline">
                    Haruko Nitta
                  </a>
                </li>
              </ol>
            </nav>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rito"
            >
              <a href="/rito">Rito Yuuki</a>
            </h2>
            <p>
              As children, Rito and Mikan were very close, and Mikan still
              called him "Onii-chan". Because their parents were not often at
              home, Rito looked after Mikan and they spent their time together
              all the time, walking and playing outside together. Unlike Rito,
              who has grown up to become very clumsy, awkward and anxious,
              especially around women, Mikan has become hard-working, confident,
              and good with housework, far surpassing her older brother's
              maturity and reliability. She stopped calling him "Onii-chan" and
              doesn't quite look up to him and respect him the way she had
              before. In the first episode, she tells Rito that she's
              embarrassed to be his little sister when she believes that he's
              having sexual fantasies of girls in the bathtub.
            </p>
            <br />
            <p>
              Nevertheless, the two of them are still very close and love each
              other as brother and sister, even to the point of admiration
              towards one another. Rito always considers Mikan as his one and
              only precious little sister, and Mikan is happy taking care of
              Rito at home. Until Lala's arrival, it was still only the two
              siblings together at home, and at one point, she felt a little
              lonely from not spending time with Rito lately. Her friends
              believe that the reason she rejects many interested boys at school
              is because she already has a "wonderful Onii-chan". Their
              impression comes from the fact that Mikan talks about Rito a lot
              at school, despite mostly calling him a useless big brother who's
              nothing really great.
            </p>
            <br />
            <p>
              Mikan may not show it but she cares very deeply for Rito and
              misses his company to the point one could suspect her of having a
              brother complex. She seems almost enthralled by his sensitivity
              and his kindness, and often worries about being seperated from
              him. This more evident in the second OVA where she wondered if he
              would marry her if they were not blood related, and in the manga
              where she blushes every time another character mentions how
              "great" of a person her brother truly is, even though she claims
              she doesn't see why he's such a big deal. Her brother complex may
              be the reason she rarely calls Rito "Onii-chan", less a lack of
              caring for him and more a sign of her wish that their relationship
              was something more respectable due to the sisterly reverence she
              has for him. She also states how she and Rito used to play
              together before Lala entered their lives. Much like Yui, Mikan's
              also shown to be extremely fond of Rito's character due to the
              fact that he's the only genuinely nice boy she knows (as all the
              boys at her school always try and date her despite her constantly
              telling them that she doesn't want to).
            </p>
            <br />
            <p>
              It is later revealed that, as a child, Mikan is terrified of
              thunder and lightning, though Rito would always comfort her and
              lend his support despite getting scared by it himself.
            </p>
            <br />
            <p>
              Even though she says that he's only good at useless things (which
              was shown a couple of times in the series), Rito has proven to be
              useful at more life-threatening situations, and in To LOVE-Ru
              Darkness chapter 31 she admitted that he can be counted on when
              someone is in trouble.
            </p>
            <br />
            <p>
              She sometimes shows a playful side towards Rito, and seems to
              enjoy teasing him to the point of Momo noting she can become
              bratty while doing so. Whenever Rito has been turned into his
              female alter-ego, Riko, she does not hesitate to tease him by
              offering girl's clothes or refering to him as one would an older
              sister. It was even seen that when Riko thanked her for helping
              her, it seemed to flip a switch in her wherein she simply couldn't
              avoid teasing her "Onee-chan".
            </p>
            <br />
            <p>
              Thanks to Momo's plan, Mikan was tricked into taking a bath with
              Rito again after they haven't done it in years. Since then Mikan
              and Rito are seen taking a bath together comfortably and
              organically (in Darkness Chapter 46.5). Mikan has also stopped
              making it a big deal for Momo to take a bath with Rito (since
              Darkness Chapter 73).
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="lala"
            >
              <a href="/lala">Lala Satalin Deviluke</a>
            </h2>
            <p>
              Similar to how she treats her older brother, Mikan generally acts
              like an older sister to the childlike Lala. Mikan is somehow
              extremely casual and unfazed with the eccentricities around Lala,
              whether it's Rito's recent engagement to Lala, or even Lala's
              alien origins. Even finding Lala completely naked in Rito's bed
              has become a normal occurrence to her. Mikan is pleased to know
              that things will get more interesting upon Lala's arrival in their
              lives. They also have a close friendship, as shown when they are
              showering together Mikan offers on scrubbing her back.
            </p>
            <br />
            <p>
              Despite this Mikan some times feels jealous of the attention that
              Rito gives Lala much like she does with the other girls. However
              as they grow closer this becomes less common.
            </p>
            <br />
            <p>Lala always enjoys Mikan's cooking.</p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="darkness"
            >
              <a href="/yami">Golden Darkness</a>
            </h2>
            <div className="flex flex-row items-start gap-4 mb-6">
              <div className="flex-1">
                <p>
                  Mikan is Yami's most significant relationship. Perhaps due to
                  appearing to be the same age, Mikan constantly approaches Yami
                  to encourage a friendship with her. Although Yami was hesitant
                  at first to be acquainted and friendly with anybody, she has
                  also grown attached to Mikan. They are often seen hanging
                  together. Mikan is essentially the only person Yami truly
                  considers as a friend, and has become willing to put her own
                  life at risk to protect her. This friendship is shown when
                  Mikan buys both of them matching taiyaki keychains. Despite
                  Yami's emotionless expressions, Mikan says that she can
                  understand how she feels.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/8/8e/Ch5.jpg/"
                  alt=""
                  className="w-40 h-auto rounded shadow"
                />
              </div>
            </div>

            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="momo"
            >
              <a href="/momo">Momo Belia Deviluke</a>
            </h2>
            <p>
              Although she at first welcomed Lala's little sisters into her
              home, Mikan and Momo's relationship has grown humorously
              adversarial when Rito is involved. Strangely, while she doesn't
              mind the innocent and childish Lala clinging onto Rito and
              sleeping naked next to him, Mikan particularly dislikes Momo's
              more mature doting and more sexual advances with Rito. Although
              it's not explicitly stated why, it could be because she is
              somewhat suspicious of the mischievous Momo's intentions. Or more
              likely it is due to feeling that, unlike Lala, Momo is gradually
              filling the place in Rito's life which belonged to Mikan. This is
              how Mikan felt when she reflected on how Momo helps her with the
              cooking and laundry at home, gradually taking the wife-like
              position in Rito's life, which had always been occupied by Mikan.
              But Momo assures her that this was not the case, and that Rito
              himself expressed how precious Mikan is to him as his little
              sister. Momo admitted that she envies how Mikan is a close part of
              Rito's life and tells her that she hopes to become as close to him
              as Mikan is. Unknown to Mikan, Momo is adding her to the "Harem
              Plan," intending to include her into the harem Momo is building
              around Rito, despite Mikan being Rito's sister.
            </p>
            <br />
            <p>
              Nevertheless, Mikan has become something of an obstacle to Momo,
              barring Momo's access to Rito and warning Rito to be careful
              around Momo. She now acts as a sort of sentry to stop Momo from
              sneaking into Rito's bed at night. She even becomes uneasy when
              she is forced to leave Rito and Momo alone together at home, as,
              after being untimely distracted, she rushes straight home to
              prevent Momo from doing anything to Rito.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="nana"
            >
              <a href="/nana">Nana Astar Deviluke</a>
            </h2>
            <p>
              Mikan has developed a positive connection with Nana due to their
              similar chest-related angst. Mikan has shown to trust Nana, such
              as asking her to wake Rito up and lets her take a bath with him
              and Yami, whose hands were stuck together due to Lala's invention,
              Clingy-Clingy Glue-kun that Celine had found.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="saibai"
            >
              <a href="#">Saibai Yuuki</a>
            </h2>
            <div className="flex flex-row items-start gap-4 mb-6">
              <div className="flex-1">
                <p>
                  Her dad and a manga artist, who constantly asks her to come
                  along with Rito to bring him manga supplies to his apartment
                  with the bonus of having her clean up and cook food for him
                  and his co-workers which he greatly enjoys, although Mikan
                  finds it tiring. She also hates how he thinks that Momo is as
                  sweet as she acts around him.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/a/a9/Saibai_Mikan_TLRD_EP3_01.png/"
                  alt=""
                  className="w-40 h-auto rounded shadow"
                />
                <span className="text-xs mt-2 text-center">
                  Mikan cleaning up Saibai's place.
                </span>
              </div>
            </div>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="ringo"
            >
              <a href="#">Ringo Yuuki</a>
            </h2>
            <p>
              Mikan's mother, who works as a fashion designer travelling around
              the world and as such is rarely home. Unlike Rito, she is not
              shown to to be embarrassed by her mother's eccentric habits and
              seems more relaxed in her presence than her brother.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="celine"
            >
              <a href="#">Celine</a>
            </h2>
            <p>
              Mikan and Celine get along extremely well and they are seen
              playing together on some occasions, having developed a near
              perfect mother-daughter/sisters relationship. Celine also sleeps
              in Mikan's room. In the anime, Celine would sometimes copy Mikan's
              motherly personality. It was Mikan who named her Celine.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="mami"
            >
              <a href="#">Sachie and Mami</a>
            </h2>
            <p>
              They are the two closest friends to Mikan from the school. They
              admire her a lot because she is smart, talented and very popular
              with the boys. They are also interested in her love life, as she
              is quite popular with the boys but continually rejects their
              invitations on dates because she is apparently not interested in
              dating. Because this effectively makes her older brother, Rito,
              the only boy in her life, and because she apparently talks about
              him at school, her friends believe that Rito must be a very cool
              big brother to her and are eager to meet him, which Mikan always
              dodges from allowing to happen because of the erotic mishaps that
              constantly happen around him.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="haruko"
            >
              <a href="#">Haruko Nitta</a>
            </h2>
            <p>
              Mikan's teacher. She is a big fan of Mikan's mangaka father's work
              and may have planned a home visit to Mikan's house with the
              intention to meet him. She thinks that Mikan is very mature and
              reliable despite her age. Once she saw that Mikan was serious (she
              was thinking about Rito and Momo's relationship) and she thought
              that Mikan was giving the class badly.
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
