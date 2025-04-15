import React from "react";
import { Link } from "@remix-run/react";

export default function LalaCharacterPage() {
  // Make sure the component renders without any route hierarchy confusion
  console.log("Rendering Lala Character Page");

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

      {/* Left Sidebar Navigation - Updated to match the image */}
      <div className="flex">
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
                <li className="py-3 px-4 hover:bg-pink-600">MEDIA</li>
                <li className="py-3 px-4 bg-pink-600">CHARACTERS</li>
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
              <span>Lala Satalin Deviluke</span>
            </div>

            <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Character Image and Info Box */}
                <div className="md:w-1/3">
                  <img
                    src="https://via.placeholder.com/400x600?text=Lala"
                    alt="Lala Satalin Deviluke"
                    className="w-full rounded border border-gray-200"
                  />

                  <div className="mt-4 border border-pink-300 rounded">
                    <div className="bg-pink-400 text-white py-2 px-4 text-center font-medium">
                      Character Information
                    </div>
                    <div className="p-4 bg-white text-sm">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="font-bold py-1">Japanese:</td>
                            <td>ララ・サタリン・デビルーク</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Romaji:</td>
                            <td>Rara Satarin Debirūku</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Nicknames:</td>
                            <td>Princess of Deviluke</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Race:</td>
                            <td>Devilukean</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Gender:</td>
                            <td>Female</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Age:</td>
                            <td>
                              16 (first appearance)
                              <br />
                              17 (current)
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Height:</td>
                            <td>165 cm (5'5")</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Weight:</td>
                            <td>45 kg (99 lbs)</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Birthday:</td>
                            <td>February 14</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Hair Color:</td>
                            <td>Pink</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Eye Color:</td>
                            <td>Green</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Relatives:</td>
                            <td>
                              Gid Lucione Deviluke (father)
                              <br />
                              Sephie Michaela Deviluke (mother)
                              <br />
                              Nana Astar Deviluke (sister)
                              <br />
                              Momo Velia Deviluke (sister)
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Status:</td>
                            <td>Alive</td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">
                              First Appearance:
                            </td>
                            <td>
                              Manga: Chapter 1<br />
                              Anime: Episode 1
                            </td>
                          </tr>
                          <tr>
                            <td className="font-bold py-1">Voiced by:</td>
                            <td>
                              Haruka Tomatsu (Japanese)
                              <br />
                              Tia Ballard (English)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Character Content */}
                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold mb-4">
                    Lala Satalin Deviluke
                  </h1>

                  <div className="border-b border-gray-200 mb-4">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium">
                      <li className="mr-2">
                        <button className="inline-block p-3 border-b-2 border-pink-600 text-pink-600 rounded-t-lg">
                          Overview
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Gallery
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Relationships
                        </button>
                      </li>
                      <li className="mr-2">
                        <button className="inline-block p-3 text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg">
                          Inventions
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm space-y-4">
                    <div className="border-l-4 border-pink-400 pl-4 italic mb-6">
                      "I've decided! I'm going to marry you, Rito!"
                      <div className="mt-1 text-right not-italic text-gray-600">
                        — Lala to Rito
                      </div>
                    </div>

                    <p>
                      <b>Lala Satalin Deviluke</b> (ララ・サタリン・デビルーク,{" "}
                      <i>Rara Satarin Debirūku</i>) is the main female
                      protagonist of the To LOVE-Ru series. She is the first
                      princess of the planet Deviluke and the first daughter of
                      King Gid Lucione Deviluke, who rules the entire galaxy.
                    </p>

                    <p>
                      Lala is known for her outgoing personality and
                      genius-level intellect, often creating various inventions
                      that frequently malfunction with humorous consequences.
                      She arrived on Earth while escaping arranged marriage
                      candidates chosen by her father, accidentally teleporting
                      naked into Rito Yuuki's bathtub.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Appearance
                    </h2>
                    <p>
                      Lala is considered extremely attractive even among the
                      various alien species. She is a beautiful young woman with
                      light green eyes and long pink hair that extends down her
                      back, with an ahoge on top. Her hair also has two strands
                      extending from the sides to slightly below her shoulders.
                    </p>

                    <p>
                      Like all Devilukeans, Lala has a distinctive tail ending
                      in a heart-shaped tip that is an erogenous zone. Her
                      typical casual outfit is a white dress with a black
                      pattern, although she is often seen wearing Sainan High
                      School's uniform. She is also frequently dressed by her
                      costume robot Peke, who can transform into any outfit Lala
                      requires.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Personality
                    </h2>
                    <p>
                      Lala is highly cheerful, optimistic, and naive about Earth
                      customs. She is very affectionate, especially towards
                      Rito, and isn't afraid of showing her emotions. Despite
                      her royalty status, she doesn't like formality and prefers
                      to be treated as an equal. She is also known to be
                      incredibly intelligent, capable of creating complex
                      inventions, though they often malfunction in comical ways.
                    </p>

                    <p>
                      Her kind-hearted nature allows her to befriend almost
                      anyone, including former enemies. She's shown to be very
                      accepting of others and tries her best to help those in
                      need. Lala is also quite fearless, facing dangers and
                      threats with a positive attitude.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Abilities
                    </h2>
                    <p>
                      As a Devilukean princess, Lala possesses superhuman
                      strength and durability far exceeding that of humans. She
                      is able to:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Survive falls from great heights without injury</li>
                      <li>Lift heavy objects with ease</li>
                      <li>Possess extreme agility and reflexes</li>
                      <li>Enhanced intelligence and scientific knowledge</li>
                      <li>Create various advanced technological devices</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 mb-3 border-b border-gray-200 pb-2">
                      Plot
                    </h2>
                    <p>
                      Lala first appeared in Chapter 1 of the manga when she
                      accidentally teleported into Rito's bathroom while
                      escaping from her potential marriage candidates. After
                      learning about Rito's feelings for Haruna Sairenji, Lala
                      initially pretended to be engaged to Rito to escape her
                      arranged marriage. However, she quickly developed genuine
                      feelings for him due to his kindness and determination.
                    </p>

                    <p>
                      Throughout the series, Lala attempts to win Rito's love
                      while helping him confess to Haruna. She creates numerous
                      inventions in her attempts to help, though they often
                      create further complications. In the sequel series To
                      Love-Ru Darkness, Lala steps back from being the main
                      heroine but continues to support Rito while understanding
                      her sister Momo's "Harem Plan."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <div className="bg-white border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold mb-4">Comments</h2>
                <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                  <img
                    src="https://via.placeholder.com/40?text=User"
                    alt="User"
                    className="rounded-full w-10 h-10"
                  />
                  <div className="ml-3">
                    <textarea
                      className="w-full border border-gray-300 rounded p-2"
                      rows={3}
                      placeholder="Add a comment..."
                    ></textarea>
                    <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 text-sm">
                      Post Comment
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      user: "AnimeGuy42",
                      comment:
                        "Lala is definitely the best character in the series! Her inventions always make me laugh.",
                    },
                    {
                      user: "MangaReader2000",
                      comment:
                        "I wish we saw more of her in the Darkness sequel. She kind of took a back seat to Momo.",
                    },
                    {
                      user: "ToLoveRuFan",
                      comment:
                        "The episode where she first meets Rito is still one of my favorites from the anime!",
                    },
                  ].map((comment, index) => (
                    <div key={index} className="flex">
                      <img
                        src={`https://via.placeholder.com/40?text=${comment.user.substring(
                          0,
                          2
                        )}`}
                        alt={comment.user}
                        className="rounded-full w-10 h-10"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{comment.user}</div>
                        <p className="text-sm text-gray-700">
                          {comment.comment}
                        </p>
                        <div className="mt-1 text-xs text-gray-500">
                          2 days ago • Reply
                        </div>
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
