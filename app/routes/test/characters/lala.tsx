import React from "react";
import { Link } from "@remix-run/react";

export default function LalaCharacterPage() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Wiki Header */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Link to="/test" className="text-3xl font-bold">
                To LOVE-Ru Wiki
              </Link>
            </div>
            <div className="flex space-x-2">
              <button className="bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded">
                Log in
              </button>
              <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded">
                Sign up
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-white">
              <li>
                <Link to="/test" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline font-bold">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Episodes
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Manga
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-6">
          <Link to="/test" className="text-purple-700 hover:text-pink-600">
            Home
          </Link>{" "}
          &raquo;
          <Link to="#" className="text-purple-700 hover:text-pink-600 mx-2">
            Characters
          </Link>{" "}
          &raquo;
          <span className="text-gray-600">Lala Satalin Deviluke</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Character Header */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src="https://via.placeholder.com/300x450?text=Lala+Satalin+Deviluke"
                    alt="Lala Satalin Deviluke"
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <button className="text-purple-700 hover:text-pink-600 text-sm">
                      View full gallery &raquo;
                    </button>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold text-pink-600 mb-2">
                    Lala Satalin Deviluke
                  </h1>
                  <p className="italic text-gray-600 mb-4">
                    First princess of planet Deviluke
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 mb-4">
                    <div>
                      <span className="font-bold">Japanese name:</span>{" "}
                      ララ・サタリン・デビルーク
                    </div>
                    <div>
                      <span className="font-bold">Age:</span> 16
                    </div>
                    <div>
                      <span className="font-bold">Status:</span> Alive
                    </div>
                    <div>
                      <span className="font-bold">Species:</span> Devilukean
                    </div>
                    <div>
                      <span className="font-bold">Height:</span> 165 cm (5'5")
                    </div>
                    <div>
                      <span className="font-bold">Birthday:</span> February 14
                    </div>
                    <div>
                      <span className="font-bold">Hair color:</span> Pink
                    </div>
                    <div>
                      <span className="font-bold">Eye color:</span> Green
                    </div>
                    <div>
                      <span className="font-bold">Family:</span> Gid (Father),
                      Sephie (Mother), Momo & Nana (Sisters)
                    </div>
                    <div>
                      <span className="font-bold">First appearance:</span>{" "}
                      Chapter 1 (Manga)
                    </div>
                  </div>

                  <div className="mt-4">
                    <p>
                      <i>"I've decided! I'm going to marry you, Rito!"</i> —
                      Lala to Rito
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Character Info Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="flex border-b">
                <button className="px-4 py-3 bg-pink-500 text-white font-medium">
                  Overview
                </button>
                <button className="px-4 py-3 hover:bg-pink-100">
                  Appearance
                </button>
                <button className="px-4 py-3 hover:bg-pink-100">
                  Personality
                </button>
                <button className="px-4 py-3 hover:bg-pink-100">
                  Abilities
                </button>
                <button className="px-4 py-3 hover:bg-pink-100">
                  Relationships
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">
                  Character Overview
                </h2>
                <p className="mb-4">
                  Lala Satalin Deviluke is the main female protagonist of the To
                  Love-Ru series. She is the first princess of the planet
                  Deviluke and the first daughter of King Gid Lucione Deviluke,
                  who rules the entire galaxy. She ran away from home to avoid
                  an arranged marriage and ended up meeting Rito Yuuki, after
                  accidentally teleporting into his bathtub while naked.
                </p>
                <p className="mb-4">
                  After meeting Rito and claiming him as her fiancé to avoid her
                  arranged marriage suitors, Lala falls in love with Rito for
                  his kindness and caring personality, even though Rito
                  initially thought of her as a major inconvenience.
                </p>
                <p className="mb-4">
                  Throughout the series, Lala creates various inventions using
                  her device "Peke," which can transform into any kind of
                  clothing. However, her inventions often malfunction and cause
                  trouble for Rito and those around him. Despite this, Lala
                  remains cheerful and devoted to Rito.
                </p>

                <h3 className="text-xl font-bold text-pink-600 mt-6 mb-3">
                  Background
                </h3>
                <p className="mb-4">
                  Lala is the oldest daughter of King Gid and Queen Sephie of
                  Deviluke. As the first princess, she was constantly being
                  courted by suitors seeking to marry her for political gain.
                  Overwhelmed by the pressure to marry, Lala escaped her home
                  with the help of her invention, Peke, and fled to Earth.
                </p>
                <p className="mb-4">
                  Upon arriving on Earth, she materialized in Rito's bathtub
                  while he was taking a bath. This awkward first encounter would
                  be the beginning of their complicated relationship, as Lala
                  immediately declared Rito her future husband to prevent her
                  father from forcing her into a political marriage.
                </p>

                <h3 className="text-xl font-bold text-pink-600 mt-6 mb-3">
                  Role in the Series
                </h3>
                <p className="mb-4">
                  As one of the main characters, Lala plays a central role in
                  most storylines. Her presence on Earth and her connection to
                  the Deviluke royal family often brings trouble and various
                  alien visitors to Rito's otherwise normal life. Despite this,
                  she's shown to genuinely care for Rito and works to improve
                  herself to be a suitable wife for him.
                </p>
                <p className="mb-4">
                  In To LOVE-Ru Darkness, although still in love with Rito, Lala
                  takes a step back from being the main heroine, with her sister
                  Momo and Yami (Golden Darkness) taking more central roles.
                  However, she remains an important character whose actions and
                  feelings continue to influence the plot.
                </p>
              </div>
            </div>

            {/* Inventions */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Lala's Inventions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-pink-100 pb-4">
                  <h3 className="font-bold text-lg">Peke</h3>
                  <p className="mb-2">
                    Lala's costume robot that can transform into any clothing.
                    Peke is Lala's most trusted invention and loyal companion.
                  </p>
                </div>
                <div className="border-b border-pink-100 pb-4">
                  <h3 className="font-bold text-lg">
                    Almighty Tool: Go-Go Vacuum-kun
                  </h3>
                  <p className="mb-2">
                    A vacuum cleaner with incredible suction power, often goes
                    out of control when activated.
                  </p>
                </div>
                <div className="border-b border-pink-100 pb-4">
                  <h3 className="font-bold text-lg">Teleportation Device</h3>
                  <p className="mb-2">
                    Allows instant teleportation but often malfunctions,
                    teleporting only the user's clothes or sending them to the
                    wrong location.
                  </p>
                </div>
                <div className="border-b border-pink-100 pb-4">
                  <h3 className="font-bold text-lg">D-Dial</h3>
                  <p className="mb-2">
                    A multidimensional storage device that can store and
                    retrieve her numerous inventions.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link to="#" className="text-purple-700 hover:text-pink-600">
                  View all of Lala's inventions &raquo;
                </Link>
              </div>
            </section>

            {/* Image Gallery Preview */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Image Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={`https://via.placeholder.com/150x150?text=Lala+${
                        i + 1
                      }`}
                      alt={`Lala Image ${i + 1}`}
                      className="w-full h-auto rounded shadow-sm hover:opacity-80 cursor-pointer"
                    />
                  ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="#"
                  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                  View Full Gallery
                </Link>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* Character Navigation */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Characters
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Rito Yuuki
                  </Link>
                </li>
                <li>
                  <span className="font-bold text-pink-600">
                    Lala Satalin Deviluke
                  </span>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Haruna Sairenji
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Golden Darkness (Yami)
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Momo Velia Deviluke
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Nana Asta Deviluke
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Mea Kurosaki
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Yui Kotegawa
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Run Elsie Jewelria
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Saki Tenjouin
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-purple-700 hover:text-pink-600 mt-2"
                  >
                    View all characters &raquo;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Related Pages */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Related Pages
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Planet Deviluke
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Deviluke Royal Family
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Devilukean Species
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Lala's Inventions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Peke
                  </Link>
                </li>
              </ul>
            </div>

            {/* Featured Quote */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Featured Quote
              </h3>
              <blockquote className="border-l-4 border-pink-300 pl-4 italic">
                "Earth is such an interesting planet! There are so many fun
                things to do here and everyone is so nice, especially Rito!"
                <footer className="text-right mt-2 text-gray-600">
                  — Lala Satalin Deviluke
                </footer>
              </blockquote>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">To LOVE-Ru Wiki</h3>
              <p className="text-purple-200">
                A fan-created encyclopedia about the To LOVE-Ru series.
                <br />
                Content is available under CC BY-SA unless otherwise noted.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Random Page
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Recent Changes
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Community Portal
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Follow</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-pink-300">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} To LOVE-Ru Wiki. This is a
              fan-created site and is not affiliated with the official To
              LOVE-Ru series.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
