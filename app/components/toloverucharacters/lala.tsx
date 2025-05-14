import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Lala = () => {
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
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
          <h1 className="mb-5 text-3xl">Lala Satalin Deviluke</h1>
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
                Inventions
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
            <strong>Lala Satalin Deviluke</strong> (ララ･サタリン・デビルーク
            Rara Satarin Debirūku?) is the main female protagonist of To-Love Ru
            Series, but takes a more minor role in To-Love-Ru Darkness. The
            story begins with Lala running away from home as she didn't want to
            get married to any of her suitors. Due to an accident, she ends up
            naked in Yuuki Rito's bathtub. Upon arriving on Earth, Lala pretends
            to love Rito to keep herself from getting married, but really fell
            in love with him after she misinterprets a statement that Rito
            shouts in self-defiance.
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
                <a href="#equipment" className="hover:underline">
                  Equipment
                </a>
                <ol className="list-decimal list-inside pl-5 text-gray-600 text-xs mt-1">
                  <li>
                    <a href="#inventions" className="hover:underline">
                      Inventions
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#Quotes" className="hover:underline">
                  Quotes
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
          <div className="flex-1 text-black max-w-2xl">
            <h2
              className="text-2xl font-bold border-b mt-8 mb-4"
              id="appearance"
            >
              Appearance
            </h2>

            <p>
              Lala is a highly attractive and curvaceous teenage girl with long
              bubble gum pink hair, emerald green eyes, and large breasts. She
              is often referred to as a perfect girl. Her most distinguishing
              feature is her tail which extends down from the base of her back.
              Her tail is long, thin, and ends with a heart-shaped tip. Another
              feature is that she is almost always seen wearing a hair clip with
              thick black swirls circling once then pointing downward. This is
              her robot companion Peke who actually forms the clothes she is
              currently wearing. At the beginning of the series she is almost
              always seen in her costume robot Peke's "Dress Form", in what can
              only be called an enlarged version of Peke herself. Wanting to fit
              in more with the people of earth, she now has Peke dress her in
              various earth clothing; she has also bought herself a large number
              of earth clothes to wear when Peke is out of energy.
            </p>
            <br />
            <p>
              According to Risa, Lala's measurements are B89-W57-H87, making her
              one of the bustiest characters in the series.
            </p>
            <br />
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="To Love Ru/lala-yui.jpg"
                  alt=""
                  onClick={() => {
                    window.open("To Love Ru/lala-yui.jpg");
                  }}
                  className="w-80 rounded cursor-pointer"
                />
                <span className="block text-xs text-gray-600 mt-2 leading-snug">
                  Lala and Yui seen as "Perfect Beauties" by envious Haruna.
                </span>
              </div>
              <div className="flex-1">
                <p>
                  Lala together with Yui are often idolized by other girls on
                  school for their beautiful figures and for having two of the
                  biggest busts in school. They are so attractive that they are
                  seen as perfect beauties, which even make relatively normal
                  sized girls, like Haruna, to feel inferior. Ironically, they
                  both are mostly oblivious to their appearance.
                </p>
                <br />
                <p>
                  From chapters 44 to 56 of To Love-Ru Darkness, Lala was
                  temporary turned into a small child-like version of herself
                  due to using too much of her power, similar to her father.
                  Until she completely returned to normal, her body gradually
                  aged up in 2-3 year increments.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold border-b mt-8 mb-4"
              id="personality"
            >
              Personality
            </h2>
            <p>
              She is incredibly enthusiastic about the smallest things and has a
              very bubbly and slightly childish nature, which is most likely the
              result of being raised as the first princess of Deviluke. Although
              she can also be a bit of an air-head and a scatterbrain most of
              the time, she is known for her genius-level intellect as seen in
              her amazing array of inventions; her planet even wanted to use her
              for weapons research and engineering. She is very caring and
              generous and appears to have a need to make everyone she cares
              about happy, even those of which she doesn't have any real
              relationship with, such as her teacher. This trait, along with her
              vast intellect, is obviously one she inherited from her mother.
              She is very naive about earth culture and will often make highly
              dangerous mistakes by either accident or serious miscommunication.
            </p>
            <br />
            <p>
              Despite her naturally cheerful and somewhat childish nature, Lala
              is not as emotionally immature as she would appear. She has, on
              rare occasions, become upset and angry at other characters, even
              Rito, over serious issues. One incident in particular involved her
              spending the night with Haruna because Rito had yelled at her,
              which made her doubt if her affections would ever be reciprocated
              (Chapter 31). A few episodes in the first season of the To Love-Ru
              anime have also shown her get angry at Rito; examples include
              Episode 12 (where Rito kept staring at his card and doing nothing)
              and Episode 18 (where she was angered over Rito and Saruyama
              eating lunch "lazily").
            </p>
            <br />
            <p>
              She also sometimes is known to lust over Rito. One great
              demonstration of her emotional maturity was when, during the
              Trouble Quest incident, her sisters tried to force Rito to admit
              his feelings for her, but upon seeing the stress he was under,
              stopped them after having already found out that he does like her
              in some way. After this, Lala noticed that Rito was under a lot of
              stress due to his confession in front of Haruna. Lala later admits
              to Rito that she could sense that he was upset, Lala felt very
              upset and guilty due to the fact that it was her sisters who
              caused Rito's confession. After a talk with Haruna and another
              talk with Lala, Rito felt better (Chapter 99).{" "}
            </p>
            <br />
            <p>
              As a child, Lala led a very mixed lifestyle, having the company of
              her robots, sisters, and Ren/Run. However, she also underwent
              something of a refusal to have a real childhood. Having a mother
              that was almost never around, constantly having to be taught
              things she had no interest in against her will, and being 'raised'
              by her father, who never spent any time with her, she greatly
              longed for a pent-up need to express herself creatively and
              happily to overcome such underwhelming and even traumatic
              instances, which more than likely resulted in her very cheerful,
              very upbeat personality she never seems to let go of.
            </p>
            <br />
            <p>
              She has also shown an amazing level of compassion for other
              characters, beyond simply being charitable or helpful. One example
              of this is when Haruna admitted to her that she is also in love
              with Rito, Lala not only moved out of his cupboard in favour of a
              joint house in the roof with her sisters but also stopped throwing
              herself at Rito to hug him in order to be fair to Haruna and make
              it easier for her. Another example is when Lala and her sisters
              were younger and fought each other, Lala would often leave her
              inventions around so that they would settle their differences and
              work together, even though it would result in Lala getting
              lectured by Zastin.
            </p>
            <br />
            <p>
              On some occasions, Lala will say something ironic in relation to
              her own decisions. For instance, telling Saki not to run away from
              home, or telling Momo not to sneak into someone's bed when they
              are sleeping, hinting at a small piece of hypocrisy in her.
            </p>
            <br />
            <p>
              Due to never really been alone her entire life, she has no notion
              of modesty and often casually walks around the house completely
              naked, not caring who sees her. In more recent times, however, she
              has gotten better at knowing where and when not to be naked,
              though she still makes a habit of walking out of the bathroom
              naked when she needs something. It can be pointed out that
              although Lala holds no real issue with appearing naked around
              people, more so in recent times, she is in no way perverted or in
              any way interpreting the action as sexual. She actually is, for
              one, very bashful when it comes to being touched or viewed in a
              sexual way or from any overly compromising angle. Rito found out
              about this after she landed on top of him when they were on their
              way to save Celine and was for once incredibly embarrassed about
              this. However, while she has no sexual intentions, Lala seems to
              take some amusement from making Rito blush and panic, a sight
              which she has declared 'cute' more than once. She has a habit of
              sleeping naked, with or without Rito by her side.
            </p>
            <br />
            <p>
              She is also incredibly optimistic. A good example of this is at
              the end of To Love-ru (original), Rito confesses to Lala that he
              loves her and that he loves Haruna too, she just says to marry
              both of them and being completely okay with a concubine. Later in
              the chapter, Rito accidentally says "I love you" to almost the
              entire female cast she is even more ecstatic, saying that he can
              marry everyone.
            </p>
            <br />
            <p>
              In To Love Ru: Darkness, Lala has seemed to mature slightly,
              though she still will walk around the house naked at times and
              continue her other usual tendencies. Lala and Rito seem to have a
              much better friendship, especially due to the fact that Rito
              confessed his love to her. However, she also constantly tries to
              push Rito into confessing to Haruna as well, so the three of them
              may get married, Lala has even put her feelings aside until then,
              she no longer clings to him very often. As the series progresses,
              Rito realized that it is bad of him to treat Lala as if she's an
              insurance to his love with Haruna and even starts to consider
              Lala's offer of marrying both of them, which he constantly shakes
              off.
            </p>
            <br />
            <p>
              With some encouragement from Momo, Lala starts showing her love
              towards Rito like she did before as her old childish clingy self,
              but Momo showed her some love simulation game to teach her how to
              express her love in a more adult way. Afterwards, she warped to
              him while he was taking a bath and asked to try a kiss.
            </p>
            <br />
            <p>
              Despite her childish personality and immaturity, it has been
              stated by Momo and felt by Rito that Lala has an "overwhelming
              impish aura," with Momo wondering just how strong it would be if
              Lala ever found out what happens after a kiss. (To Love-Ru
              Darkness chapter 35) Lala is widely considered to be a deredere
              (one who is loving, hyper, kind, and affectionate).
            </p>
            <br />
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="history">
              History
            </h2>
            <div className="flex items-start gap-4">
              <img
                src="To Love Ru/littlelala.jpg"
                alt="Little Lala"
                className="h-full rounded"
              />

              <p>
                As the first daughter of King Gid and Queen Sephie of Deviluke,
                Lala was born the first princess of the planet Deviluke. She has
                two known siblings, the twins Nana and Momo, whom she is very
                close to. As a child she was friends with the Memorze royal
                Run/Ren, though she seemed to prefer Run, who she used to
                unknowingly torment. She is known to have a rather pleasant
                relationship with her father, as she warmly recalled to Rito of
                a time that she was lost in the forests of Deviluke and how her
                father found her and took her back to the palace on his back. It
                was not long after then that she built Peke, the costume robot
                which allowed her to fly and gave her a permanent friend to
                always be with. As the first princess and presumed eventual
                successor to the throne of Deviluke, it appears that she must
                marry so that both she and her spouse can rule together. As
                such, she was continuously presented with male suitors, all of
                whom she has turned down. When she finally couldn’t take it any
                longer, she escaped from her home, but some men chased her out
                of panic she warped to Earth so that she could have some freedom
                and temporary safety.
              </p>
            </div>
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="powers">
              Powers and Abilities
            </h2>
            <p>
              Devilukean/Charmian Hybrid Physiology: Being a hybrid between
              Devilukean and Charmian, Lala has gained capabilities of the two
              races. As a Devilukean descendant, Lala's physical abilities such
              as strength, power and speed are far greater than any known race,
              although overusing her power would cause her to change into a
              child-like form. She has also inherited some traits from her
              Charmian mother.
            </p>
            <br />
            <div className="flex flex-row items-start ml-8 gap-6">
              <div className="flex-1">
                <p>
                  • <strong>Superhuman Strength</strong>: Her physical strength
                  (without any inventions or powers) is pure brute force to the
                  point where one punch can cause a shockwave and create a small
                  crater on a wall without making physical
                </p>
                <p className="mb-3">
                  • <strong>Superhuman Speed</strong>: Lala has also shown to be
                  able to run incredibly fast, such being able to run 100 meters
                  in 10.9 seconds.
                </p>
                <p className="mb-3">
                  • <strong>Superhuman Durability</strong>: She has also shown
                  to withstand heavy attacks with little to no injury. This also
                  counts internally, as when she
                </p>
                <p className="mb-3">
                  • <strong> Devilukean Tail</strong>: She can fire laser beams
                  from the tip of her tail. However, her tail is both her weapon
                  and her weakness, for it is very sensitive. When someone
                  touches Lala's tail, she becomes weak and seems to lose her
                  strength (and perhaps has an erotic feeling), though she can
                  shake anyone off of her tail by mustering enough strength.
                </p>
                <p className="mb-3">
                  • <strong>Sonic Scream</strong>: Lala has enough power in her
                  breath to clear an entire sky. For example, when Japan was
                  going to be hit with a very large typhoon, Lala went to the
                  typhoon and screamed at it out of frustration for it ruining
                  her plans with Rito. The result was enough force to blow away
                  an entire typhoon away from Japan, which could even be seen
                  from space.
                </p>
                <p className="mb-3">
                  • <strong>Enhanced Metabolism</strong>: A trait Lala inherits
                  from her mother, no matter how much she eats, Lala can never
                  gain weight or get any fatter.
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="To Love Ru/lalayami.jpg"
                  alt=""
                  onClick={() => {
                    window.open("To Love Ru/lalayami.jpg");
                  }}
                  className="max-w-xs rounded"
                />
                <span>Lala firing a laser beam to Yami</span>
                <div className="my-24" />
                <img
                  src="To Love Ru/lalalaser.jpg"
                  alt=""
                  onClick={() => {
                    window.open("To Love Ru/lalalaser.jpg");
                  }}
                  className="max-w-xs rounded"
                />
                <span className="ml-4">Lala vs. typhoon</span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="equipment">
            Equipment
          </h2>
          <h3 className="font-bold text-gray-700">Inventions</h3>
          <p className="mt-3 mb-2">
            Main article:{" "}
            <a href="#" className="text-[purple] underline">
              Lala Satalin Deviluke/Inventions
            </a>
          </p>
          <br />
          <p>
            Perhaps Lala's most distinguishing ability is being an extraordinary
            inventor. She is considered a genius and has made many inventions.
            However, Lala very much has the personality of both a perky child
            and an absent-minded scientist, resulting in all of her inventions
            being very toy-like, troublesome, mischievous, and causing
            unintentional fanservice. Another distinct feature is how incredibly
            fast she creates her inventions.
          </p>
          <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="quotes">
            Quotes
          </h2>
          <div className="ml-8">
            <p>
              "Ah, even though I have a tail, it doesn't mean I'll transform
              when I look at the full moon."
            </p>
            <p>―Lala explaining her tail to Rito.</p>
          </div>
          <h2
            className="text-2xl font-bold border-b mt-8 mb-4"
            id="appellations"
          >
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
            <div className="border p-2">Lala</div>
            <div className="border p-2">Rito</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Momo Belia Deviluke</a>{" "}
            </div>
            <div className="border p-2">Onee-sama</div>
            <div className="border p-2">Momo</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Nana Astar Deviluke</a>{" "}
            </div>
            <div className="border p-2">Ane-ue</div>
            <div className="border p-2">Nana</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yuuki Mikan</a>{" "}
            </div>
            <div className="border p-2">Lala-san</div>
            <div className="border p-2">Mikan</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Gid Lucione Deviluke</a>{" "}
            </div>
            <div className="border p-2">Lala</div>
            <div className="border p-2">Papa</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Sephie Michaela Deviluke</a>{" "}
            </div>
            <div className="border p-2">Lala</div>
            <div className="border p-2">Mama</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Zastin</a>{" "}
            </div>
            <div className="border p-2">Lala-sama</div>
            <div className="border p-2">Zastin</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Peke</a>{" "}
            </div>
            <div className="border p-2">Lala-sama</div>
            <div className="border p-2">Peke</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Sairenji Haruna</a>{" "}
            </div>
            <div className="border p-2">Lala-san</div>
            <div className="border p-2">Haruna</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Kotegawa Yui</a>{" "}
            </div>
            <div className="border p-2">Lala-san</div>
            <div className="border p-2">Yui</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yami</a>{" "}
            </div>
            <div className="border p-2">Princess Lala, Princess</div>
            <div className="border p-2">Yami-chan</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Kurosaki Mea</a>{" "}
            </div>
            <div className="border p-2">Lala-senpai</div>
            <div className="border p-2">Mea, Mea-chan</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Tenjōin Saki</a>{" "}
            </div>
            <div className="border p-2">Lala, Lala-san</div>
            <div className="border p-2">Saki</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Saruyama Kenichi</a>{" "}
            </div>
            <div className="border p-2">Lala-chan</div>
            <div className="border p-2">Saruyama</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Run Elsie Jewelria</a>{" "}
            </div>
            <div className="border p-2">Lala</div>
            <div className="border p-2">Run-chan</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Ren Elsie Jewelria</a>{" "}
            </div>
            <div className="border p-2">Lala</div>
            <div className="border p-2">Ren-chan</div>

            <div className="border p-2 text-[purple]">
              {" "}
              <a href="/">Yuuki Saibai</a>{" "}
            </div>
            <div className="border p-2">Lala-chan</div>
            <div className="border p-2">Rito Papa</div>
          </div>
          <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="etymology">
            Etymology
          </h2>
          <p>The name Lala is Hindi for tulip.</p>
          <br />
          <p>
            Lala's middle name <strong>Satalin</strong>, along with her
            father's, Lucione, may refer to Lucifer (Satan), who was one of the
            three superior spirits (or the Unholy Trinity) of Hell, together
            with Beelzebub and Astaroth.
          </p>

          <h2 className="text-2xl font-bold border-b mt-8 mb-4" id="trivia">
            Trivia
          </h2>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <p>
                • Lala, Peke along with a partial image of Haruna makes a brief
                cameo appearance in the manga Mayoi Neko Overrun! as bystanders
                (chapter 8, page 27).
              </p>
              <p>
                • According to chapter 29 Lala does not wear a bra because she
                finds them uncomfortable.
              </p>
              <p>
                • When Lala showed Rito her tail (along with stripping naked,
                embarrassing him), she told him that she doesn't transform when
                the moon is full. This is a reference to Goku in the Dragon Ball
                series by Akira Toriyama, whose tail gives him the ability to
                transform into a large and destructive ape-like creature known
                as Oozaru (The Great Ape in English) when the moon is full.
              </p>
            </div>
            <img src="To Love Ru/lalaart.jpg" alt="" className="w-80 rounded" />
          </div>
              <p>
                • Lala is the only character in the series to appear in the
                fighting game J-Stars Victory Vs as a support character.
              </p>
              <p>
                {" "}
                • Lala's appearance is similar to Yui from the anime Angel
                Beats, who also has long pink hair, a long black tail and
                devilish wings on her back. However, Lala invented her wings.{" "}
              </p>
          
          <p>
            • Mizuki's design is similar to Lala's as they both have long pink
            hair, big bust, a clip symbol on their left side of their heads, and
            they both are gentle and well-behaved except that they have
            different eye colors and that Peke is a robot.
          </p>
          <p>
            {" "}
            • Lala's appearance and name are similar to Lala "Lala Hojo" Lilia
            from the manga Trans-Boy, written and illustrated by Yabuki Kentarō,
            illustrator of the To Love-Ru series. • Satalin is similar to Satan,
            which is Latin for "adversary" and is also the name of the Devil.
          </p>
          <p>
            {" "}
            • Lala's appearance was used as a model to create "Zero Two" at
            Darling in the Franxx with Nemesis as base personality.{" "}
          </p>
          <p>
            • Lala her sisters make a small cameo in Deadpool Samurai where
            Thanos reveals has destroyed the Deviluke Planet. Because its just a
            comedy manga with no canonicity (there are cameo from other
            characters of different manga), Kentaro Yabuki joked on his twitter
            that he checked and the planet is still here.
          </p>
          <br />
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Lala Satalin Deviluke
              </h1>
            </div>
            <div className="flex justify-ce w-full">
              <img
                src="/To Love Ru/lala.jpg"
                alt="Lala Satalin Deviluke"
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
                      ララ･サタリン・デビルーク
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Lala Satalin Deviluke
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
                      Age
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      15 (First year) <br /> 16 (Second year)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      July 7th
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Cancer
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
                      165 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      50.5kg
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
                      Green
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
                      1-A (chapter 1-48) <br />
                      2-A (chapter 49-present)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Home-schooled on Deviluke <br />
                      Currently attending High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      First Princess of Deviluke
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Gid Lucione Deviluke (father) <br />
                      Sephie Michaela Deviluke (mother) <br />
                      Nana Astar Deviluke (younger sister) <br />
                      Momo Belia Deviluke (younger sister) <br />
                      Peke (creation/companion)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Yuuki Rito (fiacné/future husband)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Devilukean Tail <br />
                      Genuis inventor
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
                      Chapter 1
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Episode 1
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
                      Haruka Tomatsu
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Alexis Tipton
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
