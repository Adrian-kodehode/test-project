import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Yami = () => {
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
                          To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness
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
                          To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          Motto To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness
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
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl ">
          <h1 className="mb-5 text-3xl">Konjiki no Yami</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                {" "}
                Plot
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
            <strong>Konjiki no Yami</strong> (金色の闇, Golden Darkness), mostly
            referred to by other characters as <strong>Yami</strong>, is a major
            character in To Love-Ru and To Love-Ru Darkness. She is a lonely
            assassin who is initially hired by Lacospo, one of{" "}
            <a href="/lala" className="text-[purple] underline">
              Lala
            </a>
            's arranged suitors, to kill{" "}
            <a href="/rito" className="text-[purple] underline">
              Yuuki Rito
            </a>
            . But when Lacospo effectively annuls the job, she decides to take
            her time and, under the pretense of still needing to complete her
            mission to kill Rito, stays on Earth. As she spends more time on
            Earth, she builds a very strong relationship with Rito's mature
            younger sister,{" "}
            <a href="/mikan" className="text-[purple] underline">
              Yuuki Mikan
            </a>{" "}
            and to Rito himself, whom she also develops feelings for.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, Yami becomes central to the main plot. This
            is because there is a group that wants her to join them as the
            heartless assassin she once was. Her "sister",{" "}
            <a href="/mea" className="text-[purple] underline">
              Kurosaki Mea
            </a>{" "}
            (a transformation weapon of the same program that created Yami) and
            a mysterious figure known as Nemesis, arrive to Earth to take her
            away and revive the old heartless/murdering self that she once was.
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
                <ol className="list-decimal list-inside pl-5 text-gray-600 text-xs mt-1">
                  <li>
                    <a href="#darkness" className="hover:underline">
                      Darkness
                    </a>
                  </li>
                </ol>
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
            </ol>
          </nav>

          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold mb-3 border-b" id="appearance">
              Appearance
            </h2>
            <div className="flex flex-row items-start gap-6">
              <div className="flex-1">
                <p>
                  Yami has long blonde hair, dark red eyes, and a child-like
                  figure. Her 3-sizes are B75-W52-H77. Although it should be
                  noted that she can change her appearance to look older with
                  her transformation ability, her choice to remain in her
                  child-like form is most likely due to the fact that it is
                  comfortable when in combat. This can be seen in both the manga
                  and OVA where she wonders on whether or not having larger
                  breasts and a more mature body would affect her balance.
                  Characters have made several notes about the shape of her
                  thighs throughout a few points in the manga—most notably the
                  principal, who makes the remark during their first meeting. Of
                  course, this was all before they were pummeled by none other
                  than Yami herself.
                </p>
              </div>
              <div className="flex flex-col items-center min-w-[160px]">
                <img
                  src="To Love Ru/ToLoveRuDarkness-Bangaihen11_16.png"
                  alt=""
                  className="w-60 h-auto rounded"
                  onClick={() =>
                    window.open(
                      "To Love Ru/ToLoveRuDarkness-Bangaihen11_16.png",
                      "_blank"
                    )
                  }
                />
                <h3 className="mt-2 flex items-center justify-center text-black text-xs">
                  Yami is afraid of slimy things.
                </h3>
              </div>
            </div>
            <br />
            <p>
              She is well known for her all-black Gothic-style signature leather
              outfit. Her outfit has a star shaped gap at the chest of her
              clothing, which can also be found on the clothing of Mea and
              Nemesis. It also features two waist belts, five-leg belts on both
              of her legs, and two sleeves that attach to her upper arm via
              belt.
            </p>
            <br />
            <p>
              Another notable aspect of her appearance are her silver and black
              hair clips on each side of her head which give her a cat-like
              appearance, possibly paying homage to the illustrator's earlier
              work, "Black Cat", from which her character design also
              originated.
            </p>
            <br />
            <p>
              When the Darkness Transformation was activated, her appearance
              (mostly her attire) drastically changed. She donned a much more
              revealing leather outfit with red sharp claws on each of her
              fingers. Two black horns appeared on her head.
            </p>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold mt-5 mb-3 border-b"
              id="personality"
            >
              Personality
            </h2>
            <p className="italic">"I hate ecchi people."</p>
            <p>―Yami's view on perverted things</p>
            <br />
            <p>
              Though she does come off as stoic, emotionless, and withdrawn in
              actuality she is pretty kind, but she would attack people who
              talks about something that she doesn't like. She also hates
              perverted people and normally attacks Rito (despite knowing its
              not his intention), who by his clumsy nature trips into her and
              gropes her, or the Principal, whose perverted nature makes him
              come running to her in almost no clothing whenever he sees her.
              Other people she has attacked include Saruyama Kenichi, Kotegawa
              Yū, and Motemitsu Taizō. She also has a weakness towards anything
              slimy and with tentacles. She is a mayadere.
            </p>
            <br />
            <p>
              Yami is often reading books to understand Earth's culture and
              learn more about emotions such as love. She had been contracted to
              kill Rito, but after their initial meeting she chose to 'assess'
              him. Since chapter 158, she has begun showing small inklings of
              feelings towards him for not taking advantage of her while
              affected by Celine's pollen.
            </p>
            <br />
            <p>
              In To Love-Ru Darkness, Yami's feelings for Rito are shown quite a
              few times. He shows kindness to her, and because of this she's not
              sure about her feelings or whether she really wants to kill him
              but tries to convince herself that he is still her target.
              Strangely, he is the only person she has ever opened up to about
              her origin and about her old life before being an assassin,
              instead of to her closest friend Mikan, which is also something
              that confuses herself. One time she looked at him from behind
              holding a book titled "lovers", further hinting her feelings for
              him.
            </p>
            <br />
            <p>
              She has a fondness of taiyaki, which was the first she eats after
              coming to earth which was also given to her by Rito, shortly
              before her attempt to assassinate him. It's stated that since
              becoming an assassin, Yami has never slept with a calm mind (her
              body always "standing" on guard), but she appears to have slept
              calmly ever since she slept next to Rito (Darkness Chapter 13).
            </p>
            <br />
            <p>
              In the beginning, Yami wasn't always heartless and cold. Before
              she became an assassin, she was a happy, cheerful and playful
              little child, especially around Tearju, but was left heartbroken
              when hearing that she had left and Yami was left in the hands of
              the organization, Eden that made her the mostly emotionless person
              she is today. If she had not been raised by Eden, she would have
              likely had a similar personality to Mea. However, as the series
              progresses, she begins to show a more happy and gentle side from
              time to time and opens up more around others especially Rito, whom
              she shows love/hate feelings to.
            </p>
            <br />
            <p>
              Since Tearju's arrival, Yami has remained distant towards her,
              although she still cares for her greatly. The real reason for this
              was because of her life as an assassin and what she became after
              they last met, she was afraid of the awkwardness between them. She
              once admit herself that being an assassin is even worse than
              "being a pervert like you". But with some encouragement from Rito
              and Mea, Yami slowly tries to become closer to Tearju. Yami is
              shown to evidently be shy, constantly avoiding mushy moments and
              Tearju, whom she still feels awkward towards.
            </p>
            <br />
            <p>
              After she returns from her Darkness transformation, Yami's
              personality displays significant changes. While she is still
              mostly her usual self, she now has stronger tsundere tendencies,
              mostly regarding Rito. She has become much more angry and
              over-reactive when it comes to her feelings for Rito, whom she
              continues to deny having any feelings for. She also appears to be
              less stoic around Mikan, her best friend.
            </p>
            <br />
            <p>
              At the end of To Love-Ru Darkness chapter 70, she accepted her
              feelings and told Mikan about her love for Rito and at the end of
              chapter 71, she commenced in a fight with Kuro in order to save
              Rito's life. She finally managed to defeat him by destroying his
              Gun. And after the battle, Yami at last confessed her feelings to
              Rito.
            </p>
            <br />
          </div>
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="darkness">
              Darkness
            </h2>
            <div className="flex flex-row items-start gap-6">
              <div className="flex-1">
                <p className="italic">"I feel really perverted."</p>
                <p>―Darkness</p>
                <br />
                <div className="flex flex-row items-start gap-6">
                  <div className="flex-1">
                    <p className="mt-2">
                      When the Darkness Transformation is activated, Yami's
                      personality changes quite drastically. In fact it can be
                      inferred that her personality becomes the complete
                      opposite of her normal one in that she becomes
                      hyperactive, perverted, and less bothered by slimy things.
                      Her feelings for Rito, which she would regularly try to
                      hide, are laid so out in the open that it becomes a
                      complete and total obsession.
                    </p>
                  </div>
                  <div className="flex flex-col items-center min-w-[160px]">
                    <img
                      className="w-60 h-auto rounded shadow"
                      src="To Love Ru/darkness.jpg"
                      alt=""
                      onClick={() =>
                        window.open("To Love Ru/darkness.jpg", "_blank")
                      }
                    />
                  </div>
                </div>
                <br />
                <p>
                  She is shown to be more playful and enjoys "ecchi" things.
                  Yami seems to be more than openly infatuated with Rito,
                  wanting him to do more perverted things to her. She has
                  absolutely no problem admitting she loves Rito, and yet, as he
                  is her "target", she still intends to kill him. In fact, she
                  constantly believes that by killing him, he will then be in
                  her heart forever and they will become one, which she
                  describes as the most ecchi thing possible. However, she
                  acknowledges that for him, this reality is one of being chewed
                  up and swallowed like taiyaki. She thus uses her newfound
                  powers to manipulate matter and prepared the most fitting
                  place for the "ecchi him" to die as tribute. She also
                  expresses disappointment, at best, when he is taken away from
                  her. She is so fond of the "ecchi him" that she says that a
                  Rito who is not ecchi would be like taiyaki without the red
                  bean paste filling.
                </p>
                <br />
                <p>
                  Because of her newfound fondness towards anything "ecchi," she
                  doesn't hesitate use her powers to do something lewd to others
                  and herself even during battles. Her trauma towards anything
                  slimy and with tentacles seems to have transformed into
                  delight and become weaponized in this form, as seen when she
                  created tentacles to molest Lala as well as herself and used
                  water to molest a large number of students in a swimming pool.
                </p>
                <br />
                <p>
                  She appears to be incredibly obsessed with Rito, to the point
                  where all of her transformations seem to start assuming his
                  form. She also has nothing but murderous emotion towards Lala,
                  as she believes Rito's fiancée would naturally be her biggest
                  enemy. Finally, when she is unable to retrieve Rito from Lala,
                  she decided to destroy the entire planet, and Rito along with
                  it, and playfully calls him hers in the process.
                </p>
                <br />
                <p>
                  Originally, her personality was emotionless with the
                  destructive impulses and instinct of plunging the universe
                  into chaos. The cause of her new ecchi personality in this
                  form might be because of the memories of being sexually
                  harassed by Rito, but even she is not sure how she ended up
                  this way. Mea speculates that Rito's actions caused a "bug" to
                  occur in the program, which ultimately allowed Yami to resist
                  its complete takeover, ironically Mea also believes that
                  aggravating this "bug" further is the solution to allowing
                  Yami's true personality to resurface and crash the program
                  entirely, in other words the only solution is for Rito to
                  "subdue" her by intentionally harassing her instead of by
                  accident, because it's something even she would not expect
                  from him. Ironically, when he does indeed take the offensive
                  as above, Darkness becomes quite weak against Rito, ultimately
                  crashing the program completely.
                </p>
                <br />
                <p>
                  It is revealed by Mea that the "bug" is in fact caused by
                  Yami's feelings towards Rito. After reverting to normal,
                  however, she still continued to deny having any feelings for
                  him until Darkness Chapter 70.
                </p>
                <br />
                <p>
                  At the end of Darkness Chapter 71, it is shown that she now
                  has the ability to activate the Darkness transformation out of
                  her own will. However, this Darkness transformation is
                  different as her wing are white and she has full control of
                  her personality. She can also transform instantly. Despite the
                  differences between her last transformation, she still retains
                  her perverted attire.
                </p>
                <br />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="history">
            History
          </h2>
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Not much of Golden Darkness' history was known until she opened
                up to Rito. She is a living weapon created by Dr. Tearju
                Lunatique from her own cells (making Yami a clone) who named her
                Eve and raised her. Eve was a happy little girl who looked up to
                Tearju who would read her bedtime stories and cook. Despite the
                food turning out poorly, Eve would still force herself to eat
                it. They lived happily and Tearju planned to run away with Eve
                but her plans were preempted by the Eden organization which
                found out about the planned flight and attempted to kill Tearju,
                forcing her to flee without Eve. Eve, who had just finished
                making a necklace for Tearju, was then told that Tearju had
                abandoned her and she would be trained as a weapon. It is then
                that she was renamed Golden Darkness. Eden was destroyed by the
                hitman Kuro, setting Eve free of their control. After Eden was
                destroyed, Tearju heard rumors about a golden-haired assassin
                and knew it had to be Eve. Tearju started searching for Eve but
                was unable to find her (they meet again only in To-Love-Ru
                Darkness).
              </p>
              <br />
            </div>
            <div className="flex-shrink-0">
              <img
                src="To Love Ru/yamiandtearju.jpg"
                alt="Young Yami in Dr.Tearju's care."
                className="w-60 h-auto rounded"
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Before she met Rito and Lala, Yami lived alone in the universe,
                performing assassination assignments as they were given to her.
                At some point she bought an artificial intelligence for her
                spaceship from a junk shop and named it Lunatique.
              </p>
              <br />
              <p>
                Soon after Yami completed her assassin training, she went to a
                planet whose inhabitants have tentacles. Though she herself
                refuses to tell of the experience, it is strongly implied that
                it caused her extreme dislike of anything slimy and with
                tentacles.
              </p>
              <br />
              <p>
                Yami once fought and defeated the assassin called Tyrant Azenda
                because of a dispute within the assassination organization they
                both worked for. That organization used to exist on the Planet
                Kild, in the Talha Galaxy, which was known as the garbage dump
                of the Universe
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="To Love Ru/yamiart.jpg"
                alt=""
                className="w-60 h-auto rounded"
              />
            </div>
          </div>
          <br />
          <p>
            One time, while Yami was in the midst of combat her mind ran amok
            and transformed into her Darkness Form for a few seconds. Although
            the transformation was incomplete, she sliced the Planet Kild in
            half. Some time after that, Yami came to Mikado suffering from many
            injuries and with no memory of what had happened.
          </p>
          <br />
          <p>
            When she arrived on Earth, Yami had no memories from before she
            became an assassin. However, being close to others, especially Rito,
            has caused those memories to resurface. Yami eventually notes that
            Rito's warmth reminds her of what she felt when she was with Tearju
            as a child.
          </p>
          <br />
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="powers">
            Powers and Abilities
          </h2>
          <p>
            Transformation Ability: Golden Darkness' signature ability is her
            transformation ability otherwise known as the Trans-ability. This
            ability allows her to turn almost any part of her body into almost
            any animate objects (preferably weapons or tools used for combat) or
            reshape the size and figure of her body. The nanomachines that
            circulate through her body allow her to do this. A downside to her
            powers is that if she uses her power excessively, the nanomachines
            in her body overheat, leaving her extremely weak and unable to move
            and causing her to pass out (To Love-Ru Chapter 45).
          </p>
          <br />
          <p>
            Yami considers her power to be a "cursed power" and that it can only
            be used for hurting people (mainly males), however, she is truly
            able to use her powers for harmless and trivial purposes with safe
            precision, such as cutting up Lala's tofu (Chapter 76) or doing maid
            work at Tenjōin Saki's mansion (Darkness Chapter 31).{" "}
          </p>
          <br />
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <ul className="list-disc">
                <li className="ml-8">
                  <strong>Weapon Transformation</strong>: This ability gives her
                  the power to change any and all parts of her body into weapons
                  like her hands turning into blades, claws or huge mechanical
                  gauntlets. Yami mostly uses this ability to create weapons
                  from her hair, she has also been shown to create non-weapon
                  objects such a frying pan or even some medical equipment but
                  is still useful against opponents.
                </li>
                <li className="ml-8 mt-4">
                  <strong>Hair Manipulation</strong>: Yami's most notable
                  ability is her control over her hair. She can control its
                  movements, extend its reach and uses it to create giant fists
                  and dragon heads. She can even solidify her hair to form
                  metallic objects like sword blades, metal teeth, battle axe,
                  spiked maces, drills, hammers, shields, wrecking balls, etc.
                  Even a giant shoe that's similar to the ones she wears. She
                  can also use her hair to create a puppet. However she rarely
                  uses this ability in combat, instead, she uses it to assault
                  Rito if he happens to cause (either unintentionally or not)
                  some mishaps around him.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img
                src="To Love Ru/yamiart2.jpg"
                alt=""
                className="w-60 h-auto rounded"
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <ul className="list-disc">
                <li className="ml-8">
                  <strong>Body Transformation</strong>: Yami is able to change
                  her body sizes and measurements to look more mature and
                  adult-like such as making her breasts larger.
                </li>
                <li className="ml-8">
                  <strong>Partial Animal Transformation</strong>: She is also
                  able to change parts of her body into animal-like features
                  that gives her extra capabilities, growing a pair of white
                  feathered wings (black while in her Darkness Form) from her
                  back similer to an angel, to enable her fight. She can also
                  turn her legs into a fish tail similar to a mermaid with gills
                  that lets her breath and swim better underwater.
                </li>
                <br />
                <p>
                  <strong>Darkness Transformation</strong>: Following Tearju's
                  expulsion from Eden, the scientists
                </p>
                <br />
                <p>
                  affiliated with the group implanted a program called
                  "Darkness" into Yami. Nemesis has stated that this form is a
                  grand weapon of destruction that has the capability to destroy
                  the whole universe. Darkness power was so great that it could
                  be able to overpower Kuro, destroying his seemly
                  indestructible weapon, the Orichalcum handgun in the process.
                  It was also feared by Tearju after Rito and Momo mentioned it
                  to her during the Festival (Darkness Chapter 24). Because the
                  scientists ultimately hated the fact that the universe was
                  heading towards peace, they designed "Darkness" to activate
                  when Yami felt a sense of peace in her heart. The
                  Transformation starts with Yami losing control over her
                  transform ability, in which it started molesting her with her
                  hair. After a while, she is then cocooned by her hair and
                  emerges in a transformed state. In this form, all of Yami's
                  previous abilities are enhanced as well gaining new ones:
                </p>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img
                src="To Love Ru/yamiart3.jpg"
                alt=""
                className="w-60 h-auto  rounded"
              />
            </div>
          </div>
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Konjiki no Yami / Golden Darkness
              </h1>
              <h2 className="text-white bg-[#DB49AC] text-base p-1 ">
                (Real Name: Eve)
              </h2>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="/To Love Ru/yami.jpg"
                alt="Konjiki no Yami"
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
