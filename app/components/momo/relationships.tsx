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
          <h1 className=" text-3xl">Momo Belia Deviluke/Relationships</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/momo">Momo Belia Deviluke</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/momo" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/plants"
                className="text-[purple] hover:underline hover:text-black"
              >
                Plants
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/relationships"
                className=" hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/quotes"
                className="text-[purple] hover:underline hover:text-black"
              >
                Quotes
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">
              Relationships
            </h2>
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
                  <a href="#nana" className="hover:underline">
                    Nana Astar Deviluke
                  </a>
                </li>
                <li>
                  <a href="#sephie" className="hover:underline">
                    Sephie Michaela Deviluke
                  </a>
                </li>
                <li>
                  <a href="#mikan" className="hover:underline">
                    Mikan Yuuki
                  </a>
                </li>

                <li>
                  <a href="#mea" className="hover:underline">
                    Mea Kurosaki
                  </a>
                </li>
                <li>
                  <a href="#nemesis" className="hover:underline">
                    Nemesis
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
              She has a strong attraction towards Rito (which is similar to
              Lala's but more lustful). She has stated how his facial
              expressions are lovely, letting him touch her tail, and even
              becomes more aroused when Nana refers to him as a "beast". At one
              point, she felt jealous of Lala when Rito's hand was stuck to her
              tail.
            </p>
            <br />
            <p>
              Momo explains that she first noticed Rito when the latter
              desperately tried to save Celine, whom he had considered as family
              despite the inability to communicate with plants. Her affections
              developed further when Rito pretended to be Peke for her sake, so
              that she would not get into trouble for the mistake she caused.
              She also really loves his lustful nature, which he unknowingly
              shows when he's asleep (To Love-Ru Darkness Ch.14.5). She, like
              most girls, eventually falls in love with him though unlike the
              other girls she sexually desires him as well.
            </p>
            <br />
            <p>
              In To Love-Ru Darkness, Momo still seeks Rito's love, but
              unwilling to cause conflict between her sister or Haruna, Momo
              realizes that if Rito becomes the next king of Deviluke, Earth
              laws will not apply to him, allowing him to create a harem where
              she can display her affections openly, and make Lala and the rest
              of their female friends happy at the same time. After figuring
              this, Momo starts to develop the Harem Plan.
            </p>
            <br />
            <p>
              Rito shows a great deal of care for Momo and her siblings, like
              when he asked her what kind of person their mother is and if she
              and her sisters feel lonely not being able to see their mother,
              she answers no, saying that she has her sisters and Rito and if
              possible she wants to be with him from now on.
            </p>
            <br />
            <p>
              Despite her clear lust and love for Rito when she had the chance
              to take things further with him in the Gym Cupboard (To Love-Ru
              Darkness Ch. 17) she grew too scared to continue and recoiled from
              him. This has become a point of regret and shame in Momo's mind,
              believing that she lacks the resolve to complete the Harem Plan.
              However, she has stated she's "beyond that", and currently makes
              regular attempts to canoodle and nuzzle with him for fun so as to
              help him get used to the female form; despite overwhelming and
              annoying him the majority of the time in doing so.
            </p>
            <br />
            <p>
              She has shown a devoted caring for his well-being and happiness,
              constantly standing up for him, and even getting angry
              towards/threatening those who intend to harm or mistreat him
              (including her own twin sister), and normally partakes in her
              sexual advances towards him when she feels it can/will be
              'enjoyable' for the both of them, even when it winds up only being
              fully enjoyable for her. And while her perverted nature does cause
              him some problems, it's clear that a large portion of this is due
              to her wanting to love him to the fullest of her abilities, as
              well as bringing out the pleasing "carnivore" within him for
              everyone in the harem plan's sexual benefit.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="lala"
            >
              <a href="/lala">Lala Satalin Deviluke</a>
            </h2>
            <p>
              Momo has shown very high respects for her sister, calling her
              "onee-sama". Momo's respect was also shown when she did not try to
              steal Rito from her, and instead decided to be content with being
              a lover. However, Momo has since found a compromise so that her
              sister would not be heartbroken, and Momo can still be happy. She
              hopes that when Rito marries Lala, he will be able to marry other
              girls, which Lala perfectly approves of.
            </p>
            <br />
            <p>
              Momo encourages Lala to be more appealing to Rito, especially
              since she will need to be his legal wife in order to make the
              Harem Plan possible. She tries to teach Lala some of the more
              mature aspects of romantic relationships by using her dating sim
              games as examples (Though she is unable to show her anything
              beyond kissing, not willing to taint her sister's innocence just
              yet).
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="nana"
            >
              <a href="/nana">Nana Astar Deviluke</a>
            </h2>
            <p>
              Like any siblings, Nana and Momo often squabble over trivial
              things, such as Nana's chest, which Momo doesn't hesitate to tease
              her about. Despite constantly fighting with her twin sister, they
              both care for each other. She has even included Nana in her "Harem
              Plan".{" "}
            </p>
            <br />
            <p>
              In To Love-Ru, they are often seen together, and are often doing
              things together, such as planning the virtual reality games, and
              running away from their studies. In To Love-Ru Darkness, they both
              enroll in the same school as Rito and Lala, and still do things
              together, but their lives become less attached and parallel to
              each other, and they are not as often seen together as they were
              before. While Nana develops her own friendship with Mea, Momo
              concentrates on her Harem Plan that was originally proposed by
              Lala.
            </p>
            <br />
            <p>
              She is what people would refer to as a 'tsundere,' while also
              having a small chest. This makes her have a breast complex, which
              Momo loves to tease her about.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="sephie"
            >
              <a href="/sephie">Sephie Michaela Deviluke</a>
            </h2>
            <p>
              Sephie is the mother of Lala, Nana and Momo. It's said that she
              might be the most beautiful woman ever, something Lala and Momo
              have inherited from her, but not Nana as much (who is very
              sensitive about it). Momo states that she's a wonderful person. As
              the current queen of Deviluke (in their father's place, who isn't
              good at politics), she demonstrates active leadership and
              endeavors to maintain relations with every planet. To Momo and her
              sisters, she is the person they admire the most.
            </p>
            <br />
            <p>
              Momo has stated that despite being busy most of the time, their
              mother still makes time to call them (To-Love-Ru Darkness Chapter
              23). She finally makes time to visit her daughters after hearing
              that Lala became small after overusing her powers.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="mikan"
            >
              <a href="/mikan">Mikan Yuuki</a>
            </h2>
            <p>
              Although she at first welcomed Lala's little sisters into her
              home, Mikan and Momo's relationship has grown humorously
              adversarial when Rito is involved. Strangely, while she doesn't
              mind the childish Lala clinging onto Rito and sleeping naked next
              to him, Mikan has a particular dislike of Momo's more mature
              doting and more sexual advances with Rito. Mikan has become
              something of an obstacle to Momo, barring Momo's access to Rito
              and guarding Rito's room at night to prevent Momo from sneaking
              in. She even becomes uneasy when she is forced to leave them alone
              together at home, and she would rush straight home to prevent Momo
              from doing anything to Rito.
            </p>
            <br />
            <p>
              Interestingly, Momo's existence in Mikan's life has become similar
              to what Lala's existence was like to Rito. Lala adds new dynamic
              to Rito's relationship with Haruna, and while none of them hate
              each other, Rito does put up with much abuse from Lala's
              inventions and eccentricities. And while Momo plays a role in
              Mikan's relationship with Rito, her eccentricities have also
              become the bane of Mikan's normal life. She "helped" Mikan gets
              together with Rito while Mikan was under the influence of Celine's
              pollen. And she used Lala's invention to turn Rito into panties
              for Mikan to unknowingly wear so that Rito can find out what's
              bothering her at school. Mikan states that she can't invite any of
              her friends over because of all the crazy events happening at her
              house, especially because of her clumsy brother and the ever
              scheming Momo.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="mea"
            >
              <a href="/mea">Mea Kurosaki</a>
            </h2>
            <p>
              For the most part, they do get along fine and would hang out
              together with Nana. They also share some perverted interests such
              as when Momo tries to bring Rito and Run closer together, they
              both get excited about what ecchi moment is going to happen with
              them, and they both enjoy licking on Rito's (as Riko) female body.
            </p>
            <br />
            <p>
              Mea can get on Momo's nerves when she mischievously interferes
              with her relationship with Rito and the Harem Plan, especially
              talking about it around other people. Ever since she learned about
              Momo's real self and her Harem Plan, Mea would occasionally
              entertain herself by annoying Momo and provoking her anger just to
              check out her bloodlust, which Mea finds surprising and very
              impressive.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="nemesis"
            >
              <a href="/nemesis">Nemesis</a>
            </h2>
            <p>
              Momo and Nemesis are shown to have a rivalry towards each other,
              especially involving Rito, like when Nemesis had him feed her and
              massage her in front of Momo, who was insatiably jealous. Out of
              all the girls around Rito, she wants Nemesis to keep away from
              him.
            </p>
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
