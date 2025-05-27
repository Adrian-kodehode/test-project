import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Plot = () => {
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
          <h1 className=" text-3xl">Yūki Rito/Plot</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/rito">Yūki Rito</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/rito" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/rito_plot"
                className=" hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/rito_relationships"
                className="text-[purple] hover:underline hover:text-black"
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
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">
              To LOVE-Ru
            </h2>
            <p>
              In the beginning, he lives alone with his sister due to their
              parents always being away to work. Rito is quite shy when it comes
              to girls. He has a crush on a girl named Haruna Sairenji, whom he
              constantly tries to confess to but always backfires on him (a
              running gag in the series). One day, after another failed attempt
              to do so, he encounters an (naked) alien princess named Lala while
              in his bathtub, who is on the run from home because of her father
              forcing her into an arranged marriage. It's stated in the anime
              that due to accidentally groping her breasts he is now engaged to
              her. At first, she only pretends to show affectionate feelings for
              Rito at the beginning of the story so that she can stay on Earth,
              but came to truly love him and desire to marry him for real and
              came to live at his home.
            </p>
            <br />
            <p>
              Since Lala's arrival, Rito goes through a lot of trouble that
              comes from space, such as her other fiancé candidates and many
              others. Although thanks to Lala, he has also befriended many
              characters, including Haruna, who, unaware to him, also has
              feelings for him.{" "}
            </p>
            <br />
            <p>
              In addition to the girls he already has to choose from, Rito's
              love life would soon become even more complicated with the arrival
              of more girls, some of whom either love him, hate him, or actually
              both. Yui Kotegawa is a tsundere who becomes a very reluctant
              additional love interest after slowly warming up to Rito. Oshizu
              Murasame is a ghost girl brought back to life via an artificial
              body constructed by school doctor Ryoko Mikado. Run Elise Jewelria
              is another alien girl who is Lala's rival for Rito's love but
              occasionally transforms into her male body and personality, Ren,
              who is also Rito's rival for Lala's love. And Golden Darkness is
              an alien living weapon and assassin hired by one of Lala's suitors
              to kill Rito, but after her job is annulled, she stays on Earth
              under the pretense of killing him later.{" "}
            </p>
            <br />
            <p>
              Soon, Lala's younger twin sisters, Nana and Momo, arrive to live
              with Lala in Rito's house. Nana is a tomboyish tsundere and has
              taken to calling Rito a "beast" for his ever growing company of
              girls and his perverted antics. But the sweeter and more
              mischievous Momo quickly grew smitten and affectionate with Rito's
              innocent nature and greatly enjoys his accidental perverted
              tendencies.{" "}
            </p>
            <br />
            <p>
              Despite his enduring feelings for Haruna, Rito shows signs of
              developing deeper affection towards Lala. As the story progresses,
              he starts to show affections for Lala, but is unsure if what he
              feels is actually love. This is shown again when he couldn't help
              but think about Lala, even though he was naked with Haruna. By the
              end of To Love-Ru, as pointed out by Saruyama, Rito has changed a
              lot around women since Lala came into his life. It was at this
              point that he realized he is in love with Lala, but he is also in
              love with Haruna.
            </p>
            <br />
            <p>
              In the end of the original series, he confesses to Lala, but tells
              her he also loves Haruna, yet she is happy on both parts (knowing
              that Haruna also loves him). He is confused as polygamy is illegal
              in Japan, but Lala replied that onced he and her are married, he
              will be the next king of Deviluke, meaning the laws of Earth would
              no longer apply, making polygamy legal for him. Lala then forces
              him to go tell Haruna (strapping a jet pack to his back). Right
              before Rito was about to tell her, she moves out of the way (due
              to her swimsuit being undone by Oshizu's ability) and just like
              whenever he confesses to her, it backfires on him, leading him to
              state "I love you" to Yui, Run, Nana and Mikado.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4 mt-4">
              To LOVE-Ru Darkness
            </h2>
            <p>
              In To Love-Ru Darkness, although Rito is happy he told Lala about
              his feelings, he is depressed about his recent failure in
              confessing to Haruna, instead accidentally doing so to four other
              girls, whom he tried to convince that he said "I love the pool",
              although he's not sure if they believed it. Rito might be
              reconsidering about Lala's idea of being with both her and Haruna,
              thinking it is treating her as insurance but shrugs it off.
              However, Momo, who has already fallen in love with him, approaches
              him saying otherwise and that there are lots of girls who are
              secretly in love with him and initiates to build a harem for Rito,
              which she continually organizes in secret with the hope that she
              may also be included into Rito's love life someday.
            </p>
            <br />
            <p>
              Currently, Rito has yet to confess his love to Haruna, but instead
              decides to take his time to sort out the feelings he has for both
              Haruna and Lala.{" "}
            </p>
            <br />
            <p>
              Meanwhile, Yami has yet to kill Rito, but instead spends her time
              living a peaceful life on Earth and forming a close friendship
              with Rito's mature younger sister, Mikan, and an abusive love-hate
              relationship with Rito. Yami gradually learns to re-adapt herself
              with the peaceful life she hasn't enjoyed in a very long time,
              until she meets Mea Kurosaki, another transformation weapon of the
              same program that created Yami, hence, her little sister. Mea
              wishes for Yami to finish her mission to kill Rito and return to
              space with her, but Yami and Rito urge her to adopt a life of
              peace on Earth and embrace friendship.
            </p>
            <br />
            <p>
              In the meantime, Run spends most of her time working as a popular
              idol, but eventually makes the time to spend a day with Rito. At
              the end of their date, Run expresses her grief that because she
              shares a body with her male counterpart, she will never be a
              complete girl and can never truly be with Rito. But surprisingly,
              immediately afterwards, Run's body reaches the point of adulthood,
              where her body and Ren's separate from each other, now with each
              gender in his and her own body. The two former counterparts are
              overjoyed with the separation, and Run rejoices that she now truly
              has as much a chance for Rito's love as a real girl.
            </p>
            <br />
            <p>
              As Mea contemplates heeding Rito's and Yami's urges to embrace her
              emotions and friendships and rejecting her master's teachings that
              she is a heartless weapon, her friendship with Nana become
              strained when she appears to callously pass off their friendship
              as fake. Rito comforts Nana when she is heartbroken and gave her
              the courage to reconcile with Mea. After Mea re-embraces Nana as a
              true friend, both Mea and Nana open up more to Rito, though Nana
              is unlikely going to stop calling him a beast anytime soon.
            </p>
            <br />
            <p>
              Rito's relationship with Yami remains highly confrontational,
              especially as Rito's clumsiness and perverted antics become more
              frequent and more violating than ever before, which Yami responds
              with violent fury. However, Rito's kindness does slowly warm up to
              Yami, and she gradually sees in him and his sister the peaceful
              family life that she once had and still desires deep down. Yami
              eventually confides in Rito about her childhood. She explains to
              him that she is a living weapon created by Dr. Tearju Lunatique, a
              kindly scientist who named her Eve and raised her like a younger
              sister, until the organization where they lived chased Tearju away
              and raised Eve to be a heartless weapon. Rito is appalled with
              Yami's unfair life at the hands of the organization and expressed
              his sympathy for Yami, further developing her feelings for him.
            </p>
            <br />
            <p>
              When Tearju arrives to their school and becomes Rito's substitute
              homeroom teacher, Rito rejoices to Yami's chance to reunite with
              Tearju and enthusiastically encourages Yami. Unfortunately both
              Yami and Tearju are still too reluctant and shy to see each other
              after such a long time. Mea is also hesitant and reluctant to
              accept Tearju, since she is a hindrance to Mea's hope that Yami
              returns to being an assassin. Rito continues to encourage them
              both to accept the value of family and expresses his hope that
              Yami would be happy. After grudgingly listening to Rito, Mea
              reluctantly encourages Yami as well.
            </p>
            <br />
            <p>
              After Mea begins to open up to her friends, Mea's master, Nemesis,
              decides that she would also like to meet with the others, starting
              with Rito, Momo, and Yami, but her introduction was less than a
              comforting one due to her suspicious and eerie personality as well
              as her mischievous and erotic tendencies. She reveals to them that
              her goal is to make Yami activate her Darkness ability, a
              forbidden transformation. Believing that Darkness will activate
              inevitably, Nemesis decides to bide her time and acquaint herself
              with the others, and has been making random appearances since,
              mostly to Rito, whom she claims as her servant and uses as her
              endless source for erotic entertainment.
            </p>
            <br />
            <p>
              Lala suddenly decides to re-approach Rito romantically instead of
              waiting for him to finally confess to Haruna. She tries asking him
              for a kiss, but Rito remains too indecisive between Lala and
              Haruna, and needs more time to certify his own feelings. Lala
              happily agrees, and settles for kissing him on the cheek and
              continues to wait.
            </p>
            <br />
            <p>
              Overtime, just as Yami and Mea learned to accept the life of peace
              that they found on Earth, Yami's Darkness transformation activates
              against her will, which transforms Yami into a psychotic and much
              more erotic version of herself, with a new outfit to match her
              perverted new self. She immediately uses her new powers to
              teleport Rito to her side and causes all sorts of perverted mayhem
              to all girls nearby. She explains that she's in love with him, and
              as he is her target, she wishes to give him a very ecchi way to
              die by her hands. Lala manages to protect Rito from Yami as long
              as she could, but was barely a match against Yami's potentially
              apocalyptic power.
            </p>
            <br />
            <p>
              Mea deduces that Yami's obsession with Rito and newly perverted
              tendencies are caused by a bug inside her as a result of Rito's
              influence on her and her feelings for Rito. She comes up with a
              plan to have Rito stimulate the bug inside Yami to make her return
              to normal. In order to save the world, Rito must molest Yami!
              However, Rito must do shameless things to her at his own will,
              which may prove to be a challenge for Rito, who is impossibly
              clumsy and innocent to a fault despite his near superhuman
              perverted powers. Even Yami firmly believes that Rito is far too
              innocent and clumsy to molest her successfully, and Yami is
              currently unharmable by his usual perverted falls. Rito (and Nana)
              reluctantly agree with the plan if it could bring Yami back to
              normal before she destroys the Earth.
            </p>
            <br />
            <p>
              Mea, Nana and Momo together fight Yami to give Rito an opening. As
              Rito charges at Yami, he easily trips again over a very small
              bump, which could spell complete failure for the plan. However,
              Rito successfully manages to break his fall and land on his feet,
              much to the shock of his allies. Using the Principal's example as
              a model, Rito strips to his boxers and tackles Yami. Desperately
              suppressing his own wimpy true self, Rito relentlessly attacks
              Yami with his perverted talents at full power, surprising and
              overwhelming the superweapon girl. After a while of relentless
              groping, eventually Yami slaps Rito and reminds him that she hates
              ecchi, signifying that she has returned to normal and Rito's
              shamelessness has saved the world, just in time for Mikan to catch
              them together dressed in nothing but boxers on Rito and a
              perverted-looking outfit on Yami.
            </p>
            <br />
            <p>
              After peace returns and everything is back to normal, Rito is
              worried that Yami is angry at him for groping her earlier. Yami
              soon approaches him with the hopes of thanking him for returning
              her to normal, but before she could, Rito quickly apologizes and
              stupidly exclaims all of the perverted things he did to her while
              they were in public with people around. Yami angrily attempts to
              shut him up, and when he trips over her again, with the usual
              perverted results, the conversation ends on a bad note.
            </p>
            <br />
            <p>
              Afterwards, Lala's mother, Sephie Michaela Deviluke, arrives to
              check up on Lala. She has a happy conversation with her daughters
              at Rito's house. Rito learns that Sephie must always wear a veil
              over her face because as a Charmian, her beauty has enough
              seductive power to drive all males crazy and make them lust for
              her. But as she is about to join her daughters in a hot spring in
              Nana's cyber safari park, Rito unintentionally walks in on her,
              and as expected of his clumsiness, catches her both nude and with
              her face exposed. At first, she was terrified that her beautiful
              face would turn Rito into a perverted beast like all other men
              before, but Rito has shown that he is surprisingly immune to her
              seductive beauty. She realizes that Rito has a strong conviction
              that could resist her beauty and compared him to her husband. She
              takes a liking to him and jokingly offers all three of her
              daughters to him, and when he flusters at her joke and offhandedly
              mentions a harem, Sephie knew almost immediately that Momo is
              plotting a harem plan. Despite Rito's usual perverted antics,
              Sephie had a happy time during her stay and leaves satisfied.
            </p>
            <br />
            <p>
              Rito and Lala come visit Haruna at her sister's apartment. Lala
              hopes that Haruna advances her relationship with Rito, suggesting
              with a sudden kiss. But after an accident with Lala's invention,
              Rito and Haruna are both shrunken to a tiny size. When Haruna's
              lovey-dovey parents arrive to visit, Lala uses Peke to disguise
              herself as Haruna while Rito and Haruna hide until their shrink
              wears off. In order to protect themselves from Haruna's perverted
              pet dog, Maron, Rito and Haruna seek refuge by hiding in Haruna's
              panties. And as they struggle to hide, Haruna accidentally kisses
              Rito on his lips.
            </p>
            <br />
            <p>
              The next day, neither Rito nor Haruna know what to make of their
              accidental kiss. Rito is worried that Haruna would be angry at
              him. But after both are pressured by Oshizu and Momo to finally
              confess to each other, Haruna, at the very last second, instead
              apologizes to him for the accidental kiss, which he forgives.
              Despite the kiss, their relationship has pretty much gone nowhere.
            </p>
            <br />
            <p>
              Soon, Nemesis reappears in front of Rito while being pursued by
              the Devilukean royal guard, led by Zastin, who has been
              investigating her since the Darkness incident. Zastin arrives and
              reveals to Rito that Nemesis' plan is to destroy the political
              system established by Planet Deviluke and plunge the universe into
              another war. But instead of fighting Nemesis himself, Zastin uses
              a device to teleport Nemesis, Rito, and himself, to a location in
              cyber space, where they are confronted by none other than Gid
              Lucione Deviluke, the king of Deviluke.
            </p>
            <br />
            <p>
              Gid fights Nemesis to stop her crimes against Deviluke and easily
              overwhelmed her in battle. When Gid brutally defeats Nemesis to
              the point her body would disappear into nothing, Rito, out of
              compassion, offered to let her live inside his body until she can
              recover. Believing that he has no obligation to help her, Nemesis
              finds Rito willingness to save her and trust her with his own body
              very strange, but nevertheless accepts his offer and fuses into
              his body. Rito bravely convinced Gid that he can change her and
              even offering to die with her if she doesn't change, expressing
              his willingness to go that far to save her as his responsibility
              as a man. Gid relents, now intrigued to see how Rito proves
              himself a true man. Nemesis is now recovering inside Rito, where
              she is able to control his movements for brief moments, which she
              quickly uses for perverted mischief, and will likely continue to
              in the days to come.
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
