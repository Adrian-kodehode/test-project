import React from "react";
import { Link } from "@remix-run/react";

export default function ToLoveRuWiki() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Wiki Header */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">To LOVE-Ru Wiki</h1>
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
                <Link to="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Welcome Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">
                Welcome to To LOVE-Ru Wiki!
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="mb-4 text-black">
                    Welcome to the To LOVE-Ru Wiki, the fan-created encyclopedia
                    for everything related to the To LOVE-Ru series. This wiki
                    covers the manga series written by Saki Hasemi and
                    illustrated by Kentaro Yabuki, as well as its anime
                    adaptations.
                  </p>
                  <p className="mb-4">
                    To LOVE-Ru (トラブル) is a Japanese manga series that
                    follows Rito Yuuki, a high-school student who is unable to
                    confess his feelings to the girl of his dreams, Haruna
                    Sairenji. One day, a naked alien princess named Lala Satalin
                    Deviluke appears in his bathtub on the run from an
                    intergalactic marriage arrangement.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img
                    src="https://static.wikia.nocookie.net/to-loveru/images/4/45/2ch01.jpg"
                    alt="To LOVE-Ru"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>

            {/* Featured Characters */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Featured Characters
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Rito Yuuki",
                    role: "Main Protagonist",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                  },
                  {
                    name: "Lala Satalin Deviluke",
                    role: "Female Protagonist",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/2/2c/Lala_Satalin_Deviluke_TLRD_Manga.png",
                  },
                  {
                    name: "Haruna Sairenji",
                    role: "Female Protagonist",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                  },
                  {
                    name: "Golden Darkness (Yami)",
                    role: "Supporting Character",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/3/30/Yami_TLRD_Manga.png",
                  },
                  {
                    name: "Momo Velia Deviluke",
                    role: "Supporting Character",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                  },
                  {
                    name: "Nana Asta Deviluke",
                    role: "Supporting Character",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/1/1a/Nana_Astar_Deviluke_TLRD_Manga.png",
                  },
                ].map((character, index) => (
                  <div
                    key={index}
                    className="bg-pink-50 rounded-lg p-4 flex flex-col items-center"
                  >
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-24 h-24 rounded-full mb-2"
                    />
                    <h3 className="font-bold text-lg">{character.name}</h3>
                    <p className="text-sm text-gray-600">{character.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest Updates */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Latest Updates
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Darkness Sequel Manga Announced",
                    date: "April 10, 2025",
                  },
                  {
                    title: "Character Profile: Mea Kurosaki Updated",
                    date: "April 5, 2025",
                  },
                  {
                    title: "To LOVE-Ru Darkness Episode Guide Complete",
                    date: "March 28, 2025",
                  },
                  {
                    title: "New Merchandise Collection Released",
                    date: "March 15, 2025",
                  },
                ].map((update, index) => (
                  <div key={index} className="border-b border-pink-100 pb-3">
                    <h3 className="font-medium hover:text-pink-600 cursor-pointer">
                      {update.title}
                    </h3>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    To LOVE-Ru (Manga)
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    To LOVE-Ru (Anime)
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    To LOVE-Ru Darkness
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Characters
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Deviluke Family
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Rito's Harem
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Episode List
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Chapter List
                  </Link>
                </li>
              </ul>
            </div>

            {/* Featured Media */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Featured Media
              </h3>
              <div className="space-y-4">
                <img
                  src="https://via.placeholder.com/300x200?text=Featured+Image"
                  alt="Featured"
                  className="w-full rounded-lg"
                />
                <div className="text-sm text-gray-700">
                  Scene from season 2, episode 12: "Trouble with Darkness"
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Community
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Total Pages</p>
                  <p>428 articles</p>
                </div>
                <div>
                  <p className="font-medium">Active Contributors</p>
                  <p>53 users</p>
                </div>
                <div className="pt-3">
                  <Link
                    to="#"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 inline-block"
                  >
                    Join the Community
                  </Link>
                </div>
              </div>
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
