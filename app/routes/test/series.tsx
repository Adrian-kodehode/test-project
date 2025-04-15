import React from "react";
import { Link } from "@remix-run/react";

export default function SeriesInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fandom Header Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="24"
              viewBox="0 0 92 24"
              className="h-6"
            >
              <path
                fill="#501041"
                d="M0 21.4V0h9.844c1.876 0 3.32.486 4.336 1.457 1.016.972 1.523 2.29 1.523 3.953 0 .91-.213 1.723-.637 2.437-.425.715-1.016 1.312-1.772 1.79.96.379 1.707 1.02 2.243 1.924.535.905.803 1.92.803 3.047 0 1.715-.521 3.105-1.562 4.172-1.042 1.068-2.473 1.602-4.293 1.602L0 21.4zM4.303 9.376h4.922c.625 0 1.124-.215 1.499-.645.374-.43.561-.99.561-1.68 0-.69-.187-1.245-.561-1.664-.375-.419-.874-.628-1.5-.628H4.303v4.617zm0 8.414h5.395c.652 0 1.172-.237 1.558-.71.385-.476.578-1.064.578-1.767 0-.677-.193-1.255-.578-1.734-.386-.48-.906-.72-1.558-.72H4.303v4.931zm12.92-5.78c0-1.73.242-3.273.728-4.627.485-1.353 1.172-2.5 2.06-3.437.89-.938 1.96-1.658 3.212-2.16 1.252-.5 2.634-.75 4.147-.75 1.512 0 2.892.25 4.138.75 1.245.502 2.312 1.222 3.203 2.16.89.937 1.578 2.084 2.068 3.438.485 1.353.73 2.895.73 4.626s-.245 3.273-.73 4.627c-.486 1.353-1.172 2.5-2.059 3.437-.89.938-1.958 1.658-3.211 2.16-1.252.5-2.632.75-4.139.75-1.518 0-2.901-.25-4.147-.75-1.251-.502-2.32-1.222-3.211-2.16-.89-.937-1.576-2.084-2.06-3.437-.486-1.354-.729-2.896-.729-4.627zm4.329 0c0 1.042.127 2 .383 2.873.254.873.62 1.624 1.096 2.253.477.628 1.063 1.118 1.757 1.468.693.35 1.48.526 2.36.526.88 0 1.663-.175 2.352-.526.69-.35 1.272-.84 1.75-1.468.476-.628.84-1.38 1.095-2.253.255-.872.382-1.83.382-2.873 0-1.042-.127-2-.382-2.873-.254-.873-.619-1.624-1.095-2.253-.478-.628-1.063-1.118-1.757-1.468-.694-.35-1.476-.526-2.345-.526-.886 0-1.675.175-2.368.526-.694.35-1.28.84-1.757 1.468-.476.629-.838 1.38-1.088 2.253-.25.873-.375 1.83-.375 2.873zm22.61-8.935h4.052v2.41h.084c.19-.379.436-.747.737-1.104.302-.358.66-.673 1.072-.946.41-.271.867-.487 1.371-.645.505-.157 1.05-.237 1.64-.237 1.43 0 2.604.27 3.522.81.917.542 1.636 1.242 2.152 2.102.517.86.873 1.845 1.071 2.957.2 1.111.3 2.245.3 3.404 0 1.055-.101 2.11-.307 3.165-.204 1.055-.533 2.005-.987 2.85-.452.846-1.052 1.534-1.798 2.068-.743.534-1.651.8-2.72.8-.579 0-1.112-.071-1.6-.212-.486-.141-.935-.341-1.345-.594-.41-.253-.771-.546-1.08-.88-.307-.333-.55-.703-.722-1.111h-.084v8.275h-4.359V3.077zM45.55 12.01c0 .73.067 1.455.202 2.177.134.721.342 1.371.628 1.949.285.576.657 1.047 1.113 1.402.457.354.998.532 1.623.532.938 0 1.661-.246 2.169-.737.507-.492.878-1.103 1.113-1.835.234-.732.375-1.516.425-2.355.05-.838.076-1.608.076-2.312 0-.52-.03-1.099-.093-1.733-.062-.633-.184-1.234-.366-1.801-.183-.568-.45-1.042-.806-1.425-.353-.384-.84-.576-1.448-.576-.632 0-1.165.178-1.6.534-.435.356-.782.805-1.046 1.35a7.88 7.88 0 0 0-.603 1.755 11.59 11.59 0 0 0-.288 1.702c-.033.46-.05.846-.05 1.157-.002.31.007.593.027.85.02.26.038.471.054.632.017.163.022.294.022.397zm16.513-5.162h-2.49V3.075h2.49V.35h4.359v2.726h2.975v3.773h-2.975v8.919c0 .353.022.647.068.889.044.241.123.436.237.584a.887.887 0 0 0 .45.305c.19.058.431.89.721.89.195 0 .391-.002.586-.008a4.525 4.525 0 0 0 .586-.067l.083 3.42a14.458 14.458 0 0 1-1.556.178 18.11 18.11 0 0 1-1.556.068c-.775 0-1.43-.073-1.966-.221a3.23 3.23 0 0 1-1.352-.707 2.98 2.98 0 0 1-.779-1.221c-.167-.493-.25-1.085-.25-1.775V6.848zM78.11 21.4h-4.358V3.077h4.358V21.4zm.417-21.044c0 .759-.272 1.414-.813 1.962C77.173 2.87 76.527 3.144 75.782 3.144c-.746 0-1.394-.274-1.95-.822-.552-.548-.83-1.203-.83-1.966 0-.73.278-1.37.83-1.923C74.389-.513 75.036-.79 75.783-.79c.744 0 1.39.278 1.932.83.541.553.813 1.195.813 1.927zm12.975 1.576c-1.732 0-3.067.5-4.002 1.502-.936 1.002-1.427 2.52-1.473 4.557h10.044c0-.847-.075-1.646-.223-2.396-.15-.75-.387-1.406-.713-1.966a3.743 3.743 0 0 0-1.269-1.325c-.51-.324-1.13-.487-1.864-.487z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center">
            <div className="relative mr-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full text-sm py-1 px-4 w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute right-3 top-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium mr-2">
              START A WIKI
            </button>
            <button className="bg-purple-800 text-white px-3 py-1 rounded text-xs font-medium">
              SIGN IN
            </button>
          </div>
        </div>
      </header>

      {/* Content Area with Left Sidebar */}
      <div className="flex">
        {/* Left Sidebar Navigation - Updated to match the image */}
        <div className="w-64 border-r border-gray-200 bg-white fixed h-full left-0 top-0 pt-14">
          {/* Wiki Title */}
          <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
            <h2 className="font-bold text-gray-800">To LOVE-Ru Wiki</h2>
          </div>

          {/* Others Like You Viewed Section */}
          <div className="p-0">
            <h3 className="text-sm font-bold py-2 px-4 text-purple-900 border-b border-gray-200">
              Others Like You Viewed
            </h3>

            {/* Character list with square images */}
            <div className="divide-y divide-gray-200">
              {[
                {
                  name: "Kotegawa Yui",
                  image: "https://via.placeholder.com/70?text=Yui",
                },
                {
                  name: "Yuki Mikan",
                  image: "https://via.placeholder.com/70?text=Mikan",
                },
                {
                  name: "Tearju Lunatique",
                  image: "https://via.placeholder.com/70?text=Tearju",
                },
                {
                  name: "Nana Astar Deviluke",
                  image: "https://via.placeholder.com/70?text=Nana",
                },
                {
                  name: "Sairenji Haruna",
                  image: "https://via.placeholder.com/70?text=Haruna",
                },
              ].map((character, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 px-4 hover:bg-gray-50"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-12 h-12 mr-3"
                  />
                  <span className="font-medium text-sm text-purple-900">
                    {character.name}
                  </span>
                </div>
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
                    image: "https://via.placeholder.com/150?text=Lala",
                    number: 1,
                  },
                  {
                    name: "Yuki Rito",
                    image: "https://via.placeholder.com/150?text=Rito",
                    number: 2,
                  },
                  {
                    name: "Momo Deviluke",
                    image: "https://via.placeholder.com/150?text=Momo",
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

        {/* Main Content */}
        <div className="ml-64 flex-1">
          {/* Wiki Logo Header */}
          <div className="h-44 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://via.placeholder.com/1600x300?text=ToLove-Ru+Background"
                alt="To Love-Ru Background"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <img
                src="https://via.placeholder.com/400x100?text=To+LOVE-Ru+Wiki"
                alt="To LOVE-Ru Wiki"
                className="h-16"
              />
            </div>
          </div>

          {/* Wiki Navigation */}
          <nav className="bg-pink-500 text-white shadow">
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
                <li className="py-3 px-4 bg-pink-600">MEDIA</li>
                <li className="py-3 px-4 hover:bg-pink-600">CHARACTERS</li>
                <li className="py-3 px-4 hover:bg-pink-600">COMMUNITY</li>
                <li className="py-3 px-4 hover:bg-pink-600">TOOLS</li>
              </ul>
            </div>
          </nav>

          {/* Page Content */}
          <div className="container mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <div className="text-sm mb-4 flex items-center">
              <Link to="/test" className="text-pink-800 hover:underline">
                To LOVE-Ru Wiki
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mx-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>Series Information</span>
            </div>

            <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Series Image and Info Box */}
                <div className="md:w-1/3">
                  <img
                    src="https://via.placeholder.com/400x550?text=To+LOVE-Ru"
                    alt="To LOVE-Ru Series"
                    className="w-full rounded border border-gray-200"
                  />

                  <div className="mt-4 border border-pink-300 rounded">
                    <div className="bg-pink-400 text-white py-2 px-4 text-center font-medium">
                      Series Information
                    </div>
                    <div className="p-4 bg-white text-sm">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="font-bold py-1">Japanese:</td>
                            <td>To LOVE-Ru (とらぶる)</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Romaji:</td>
                            <td>To Rabu Ru</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Genre:</td>
                            <td>
                              Romantic Comedy, Ecchi, Science Fiction, Harem
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Author:</td>
                            <td>Saki Hasemi</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Illustrator:</td>
                            <td>Kentaro Yabuki</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Publisher:</td>
                            <td>Shueisha</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Magazine:</td>
                            <td>
                              Weekly Shōnen Jump (Original)
                              <br />
                              Jump Square (Darkness)
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Original Run:</td>
                            <td>April 24, 2006 – August 31, 2009</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Volumes:</td>
                            <td>
                              18 (Original)
                              <br />
                              18 (Darkness)
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Anime Studio:</td>
                            <td>Xebec</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Episodes:</td>
                            <td>
                              26 (Season 1)
                              <br />
                              12 (Motto)
                              <br />
                              12 (Darkness)
                              <br />
                              14 (Darkness 2nd)
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">OVAs:</td>
                            <td>
                              6 (Darkness)
                              <br />2 (Darkness 2nd)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Series Content */}
                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold mb-4">To LOVE-Ru Series</h1>

                  <div className="border-b border-gray-200 mb-4">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium">
                      <li className="mr-2">
                        <button className="inline-block p-3 border-b-2 border-pink-600 text-pink-600 rounded-t-lg">
                          Overview
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Manga
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Anime
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Characters
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm space-y-4">
                    <p>
                      <b>To LOVE-Ru</b> (とらぶる, <i>To Rabu Ru</i>) is a
                      Japanese manga series written by Saki Hasemi and
                      illustrated by Kentaro Yabuki. The title is a word play on
                      the English phrase "love trouble", which is the main theme
                      of the story.
                    </p>

                    <p>
                      The story revolves around Rito Yuuki, a high-school
                      student unable to confess his feelings to the girl of his
                      dreams, Haruna Sairenji. One day when sulking in the
                      bathtub, a mysterious, naked girl suddenly appears before
                      him. Her name is Lala Satalin Deviluke, the crown princess
                      of an alien empire, and she has run away from home to
                      avoid an arranged marriage.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Plot
                    </h2>
                    <p>
                      Rito Yuuki, a shy and clumsy high-school student, has been
                      in love with Haruna Sairenji since junior high school, but
                      has been unable to confess his feelings. One day, while
                      taking a bath, a mysterious, naked girl appears out of
                      nowhere. This girl, Lala Satalin Deviluke, is the crown
                      princess of the planet Deviluke, whose father wants her to
                      marry one of the many suitors that he has arranged for
                      her. In an attempt to escape, Lala runs away to Earth and
                      miraculously ends up in Rito's bathtub.
                    </p>

                    <p>
                      Upon arriving on Earth, Lala pretends to be in love with
                      Rito to keep herself from getting married to one of her
                      father's arranged suitors. But when Lala's father, King
                      Gid Lucione Deviluke, arrives and is about to destroy the
                      Earth, Rito steps in and proclaims that he will marry
                      Lala. As a result, the king designates him as the next
                      successor to the throne of Deviluke, and Lala truly falls
                      in love with Rito.
                    </p>

                    <p>
                      As the series progresses, Rito finds himself surrounded by
                      beautiful women, including Lala's younger twin sisters,
                      Nana and Momo, an assassin named Golden Darkness (Yami),
                      and numerous other female characters as he tries to
                      navigate his complicated love life.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Production
                    </h2>
                    <p>
                      To LOVE-Ru began as a manga series written by Saki Hasemi
                      and illustrated by Kentaro Yabuki, known for his work on
                      Black Cat. The series was serialized in Shueisha's Weekly
                      Shōnen Jump magazine from April 24, 2006, to August 31,
                      2009. The chapters were collected into 18 tankōbon
                      volumes.
                    </p>

                    <p>
                      Following the conclusion of the original manga, a sequel
                      titled <b>To LOVE-Ru Darkness</b> (To LOVEる-とらぶる-
                      ダークネス) began serialization in Jump Square magazine in
                      October 2010 and concluded in March 2017. This sequel also
                      spanned 18 volumes and focused more on Momo Velia Deviluke
                      and her "Harem Plan" for Rito, as well as giving greater
                      development to the character Golden Darkness.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Media
                    </h2>
                    <h3 className="text-lg font-bold mt-4 mb-2">Manga</h3>
                    <p>
                      The original To LOVE-Ru manga consists of 162 chapters
                      compiled into 18 volumes, while To LOVE-Ru Darkness
                      consists of 77 chapters also compiled into 18 volumes.
                      Both series have been published in North America by Seven
                      Seas Entertainment.
                    </p>

                    <h3 className="text-lg font-bold mt-4 mb-2">Anime</h3>
                    <p>
                      The manga was adapted into an anime television series
                      produced by Xebec. The first season aired from April 3,
                      2008, to September 25, 2008, with 26 episodes. A second
                      season, titled <b>Motto To LOVE-Ru</b>, aired from October
                      6, 2010, to December 22, 2010, with 12 episodes.
                    </p>

                    <p>
                      The sequel manga To LOVE-Ru Darkness was also adapted into
                      an anime series. The first season,{" "}
                      <b>To LOVE-Ru Darkness</b>, aired from October 6, 2012, to
                      December 29, 2012, with 12 episodes and 6 OVAs. The second
                      season, <b>To LOVE-Ru Darkness 2nd</b>, aired from July 7,
                      2015, to October 29, 2015, with 14 episodes and 2 OVAs.
                    </p>

                    <h3 className="text-lg font-bold mt-4 mb-2">Other Media</h3>
                    <p>
                      Several light novels and video games based on the series
                      have also been released. The franchise has expanded to
                      include various merchandise such as figureines, art books,
                      and drama CDs.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Reception
                    </h2>
                    <p>
                      To LOVE-Ru has been commercially successful in Japan, with
                      over 18 million copies of the manga in circulation. The
                      series is particularly known for its combination of
                      science fiction elements with romantic comedy and ecchi
                      content.
                    </p>

                    <p>
                      The anime adaptations have also been popular, with the
                      later Darkness series receiving praise for improved
                      animation quality and more cohesive storytelling compared
                      to the original series.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manga Volumes Section */}
            <div className="mt-6">
              <div className="bg-white border border-gray-200 rounded p-6">
                <h2 className="text-2xl font-bold mb-4">Manga Volumes</h2>

                <h3 className="text-lg font-bold mb-3">Original Series</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                  {Array(18)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={`https://via.placeholder.com/120x170?text=Vol.${
                            i + 1
                          }`}
                          alt={`Volume ${i + 1}`}
                          className="w-full border border-gray-200 shadow-sm"
                        />
                        <p className="text-xs mt-1">Volume {i + 1}</p>
                      </div>
                    ))}
                </div>

                <h3 className="text-lg font-bold mb-3">To LOVE-Ru Darkness</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {Array(18)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={`https://via.placeholder.com/120x170?text=Darkness+${
                            i + 1
                          }`}
                          alt={`Darkness Volume ${i + 1}`}
                          className="w-full border border-gray-200 shadow-sm"
                        />
                        <p className="text-xs mt-1">Volume {i + 1}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Anime Seasons Section */}
            <div className="mt-6">
              <div className="bg-white border border-gray-200 rounded p-6">
                <h2 className="text-2xl font-bold mb-4">Anime Seasons</h2>

                <div className="space-y-8">
                  {[
                    {
                      title: "To LOVE-Ru (2008)",
                      image:
                        "https://via.placeholder.com/200x280?text=Season+1",
                      episodes: 26,
                      aired: "Apr 3, 2008 - Sep 25, 2008",
                      director: "Takao Kato",
                      studio: "Xebec",
                    },
                    {
                      title: "Motto To LOVE-Ru (2010)",
                      image: "https://via.placeholder.com/200x280?text=Motto",
                      episodes: 12,
                      aired: "Oct 6, 2010 - Dec 22, 2010",
                      director: "Atsushi Ōtsuki",
                      studio: "Xebec",
                    },
                    {
                      title: "To LOVE-Ru Darkness (2012)",
                      image:
                        "https://via.placeholder.com/200x280?text=Darkness",
                      episodes: "12 + 6 OVAs",
                      aired: "Oct 6, 2012 - Dec 29, 2012",
                      director: "Atsushi Ōtsuki",
                      studio: "Xebec",
                    },
                    {
                      title: "To LOVE-Ru Darkness 2nd (2015)",
                      image:
                        "https://via.placeholder.com/200x280?text=Darkness+2nd",
                      episodes: "14 + 2 OVAs",
                      aired: "Jul 7, 2015 - Oct 29, 2015",
                      director: "Atsushi Ōtsuki",
                      studio: "Xebec",
                    },
                  ].map((season, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="sm:w-1/6">
                        <img
                          src={season.image}
                          alt={season.title}
                          className="w-full rounded shadow-sm"
                        />
                      </div>
                      <div className="sm:w-5/6">
                        <h3 className="text-lg font-bold text-pink-700">
                          {season.title}
                        </h3>
                        <table className="w-full mt-2">
                          <tbody>
                            <tr>
                              <td className="font-bold py-1 pr-4 w-24">
                                Episodes:
                              </td>
                              <td>{season.episodes}</td>
                            </tr>
                            <tr>
                              <td className="font-bold py-1 pr-4">Aired:</td>
                              <td>{season.aired}</td>
                            </tr>
                            <tr>
                              <td className="font-bold py-1 pr-4">Director:</td>
                              <td>{season.director}</td>
                            </tr>
                            <tr>
                              <td className="font-bold py-1 pr-4">Studio:</td>
                              <td>{season.studio}</td>
                            </tr>
                          </tbody>
                        </table>
                        <button className="mt-2 text-sm text-pink-700 hover:text-pink-900">
                          View episode list &raquo;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
