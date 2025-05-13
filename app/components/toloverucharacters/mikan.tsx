import React from "react";
import { Link } from "react-router-dom";

export const Mikan = () => {
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
            <li className="py-3 px-4 hover:bg-pink-600">MEDIA</li>
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
      <div className="bg-[#FFF4FB] flex flex-row items-start justify-center min-h-screen">
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
                  },
                  {
                    name: "Yuki Rito",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                    number: 2,
                  },
                  {
                    name: "Momo Deviluke",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                    number: 3,
                  },
                ].map((page, index) => (
                  <div key={index} className="relative">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Left: Main text content */}
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl ">
          <p>
            <strong>Yūki Mikan</strong> is Rito's independent and reliable
            12-year-old sister. Mikan takes care of most of the household work
            while their parents are away working and also watches over Celine.
            In contrast to her brother, she is very mature and does not hesitate
            to tease him, going as far as lying that they aren't blood-related,
            but quickly retracting the statement and telling the truth. Mikan
            also seems to have a certain lack of respect for Rito because of
            this (hardly ever addresses him by honorific as an older brother),
            but does answer him "Onii-Chan" as thanks for trying so hard to take
            care of her when she develops a fever and when he gives her a
            Christmas present.
          </p>
          <br />
          <p>
            Mikan has grown quite attached to Yami, perhaps due to Yami
            seemingly being the same age as her. Mikan is very perceptive and
            seems to be able to read people's emotions, even their reactions,
            most of which is Rito's obvious anxiety around Sairenji Haruna and
            Kotegawa Yui's subtle feelings for him. Mikan even calls him a
            "playboy" (so does Nana) for attracting so many girls all of a
            sudden (even though she attracts so many boys at her school). Mikan,
            however, does respect Rito's relationship with Lala, even going so
            far as to tell Momo not to get too close to Rito for Lala's sake.
            Although it's possible that she could have done this out of jealousy
            of how close Momo was getting to Rito.
          </p>
          <br />
          <p>
            Mikan is the only main character that doesn't attend Sainan High.
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
          <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
            Appearance
          </h2>
          <p>
            Mikan has gold brown eyes and brown hair, she is described to be
            really cute by some characters. According to a "Full size Dakimakura
            Cover-Mikan Version", her measurements are B70-W52-H73.
          </p>
          <br />
          <p>
            Mikan is usually seen in an apron, as she is in the kitchen most of
            the time. Other than cooking attire, she is seen in a school
            uniform, casual clothing, etc.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="personality">
            Personality
          </h2>
          <p>
            As a younger sister, Mikan is widely known for her maturity and
            reliability for her age. Her maturity is also quite unique, as while
            she is Rito's younger sister and the youngest character in the cast,
            she is arguably more adult than most of the other characters, and
            basically acts as a big sister, wife, or mother to Rito and all who
            live in her house. Because she is very good at cooking and
            housework, she essentially takes care of her big brother. Rather
            than looking up to him, she instead treats him like he is her little
            brother, and rarely calls him "Onii-chan", as she used to. Mikan
            generally treats Lala the same way, enjoying her company like a
            little sister and pleased to see her brother's life becoming more
            entertaining upon her arrival.
          </p>
          <br />
          <p>
            Like most girls in the cast, she is also aware of her breast size[1]
            and often feels inferior when comparing other girls' to hers, mostly
            Lala, although her physique is quite normal for her age. Despite
            this, she still feels insecure about this, and has developed a
            positive connection with Nana due to their similar chest-related
            angst.
          </p>
          <br />
          <p>
            In the fifth OVA, when Mikan was effected by the pollen of one of
            Momo plants that makes anyone who inhales it to act freely, she
            acted childish and clingy towards Rito, even calling him
            "Onii-chan", showing how shy she is at expressing how she feels
            towards Rito and that she just acts mature around others. She even
            feared that her place in Rito's might slip away when Momo was being
            too close to him.
          </p>
          <br />
          <p>
            Mikan is very perceptive, as she is good at understanding other
            people and noticing their feelings. She knew very quickly her
            brother's crush on Haruna, and Haruna's similar feelings for Rito as
            well. And she knows that Rito is too scared to enjoy perverted
            things, and that Lala is innocent and quite childish, so she doesn't
            mind catching Lala naked in her brother's bed in the morning and
            even treats it like something normal, though it should be noted that
            she overreacted once when she mistook them having sex in his room,
            when Lala was just moaning because Rito's hand was stuck to her
            tail. But she particularly doesn't like Momo sneaking into his room
            at night and sleeping with him, because of how sexual she can be
            towards him.
          </p>
          <br />
          <p>
            Like a big sister or mother, she would try to protect Rito from
            sexual temptations and doesn't like it when girls with more
            perverted tendencies like Momo and Mea would do perverted things to
            him. She tries as often as she can to watch out whenever Momo gets
            the opportunity to be alone with Rito and even guards his room at
            night to stop her from sneaking in and sleeping next to him. She
            also doesn't particularly like Mea when first meeting her, and
            though she tried to get to know Mea better after learning that she
            is Yami's sister, she finds that she cannot deal with her type and
            likely can't become close friends with her as she is with Yami.
          </p>
          <br />
          <p>
            Mikan seems to get along quite well with characters who are more
            level-headed, composed, and mature, such as Yami and Kujō Rin. In To
            LOVE-Ru Darkness, despite being older than even Mikan's big brother,
            Rin seems to have become friends with her, and is astonished that
            someone like Mikan is the younger sister of the clumsy and quirky
            Rito. And Mikan is the only person whom Yami truly considers to be
            her friend. Rito explains that because she is so mature and reliable
            for her age, deep down, Mikan can get lonely without people she can
            relate with, and so she can use older friends who are like big
            sister figures to her, whom she can lean on[2].
          </p>
          <br />
          <p>Mikan has a case of Astraphobia, the fear of thunderstorms.</p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="history">
            History
          </h2>
          <p>
            Prior to the series, Mikan had always looked up to her brother and
            often called him "Onii-Chan" because of how kind and dependable he
            always seemed, such as climbing a tall tree to save a cat. Because
            of their parents hardly being at home, it was always just the two of
            them together, even during Christmas, and playing on snowy days.
            Over time, her respect for Rito seems to lighten. However, she still
            likes how he is always caring for her. For example, when she was 9
            years old, Rito took her to a swimming pool where it was very
            crowded at the time and she got separated from Rito before she knew
            it, when he found her she noticed how desperately he searched for
            her from seeing his shirt full of sweat. Although she thought it was
            stupid of him, she was also happy knowing how much he really cares
            for her.
          </p>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Yūki Mikan
              </h1>
            </div>
            <div className="flex justify-center  w-full">
              <img
                src="/To Love Ru/mikan.jpg"
                alt="Yūki Mikan"
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      結城 美柑
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Yūki Mikan
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Earth
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      11 (Elementary School Fitfh year) <br />
                      12 (Elementary School Sixth year)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      November 3rd
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Scorpio
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Female
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      149cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      41 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      O
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Dark Brown <br />
                      Black (To LOVE-Ru full color manga)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Gold Brown
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Sainan First Elementary School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Class
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      5-A (To LOVE-Ru Chapter 1-48) <br />
                      6-A (To LOVE-Ru Chapter 49-)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Currently in School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Elementary School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Yūki Rito (Brother) <br />
                      Yūki Ringo (Mother) <br />
                      Yūki Saibai (Father) <br />
                      Lala Satalin Deviluke (Sister-In-Law)(Pending)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Single
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      - Very mature for her age <br />
                      - Brocon <br />
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Chapter 1
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
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
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Hanazawa Kana
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Brittney Karbowski
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
    </div>
  );
};
