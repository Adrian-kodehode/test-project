import React from "react";
import { Link } from "@remix-run/react";

export default function SeriesInfoPage() {
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
              <li>
                <Link to="#" className="hover:underline">
                  Placeholder Link
                </Link>
              </li>
              </li>
              <li>
                <Link to="/test/characters/lala" className="hover:underline">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Episodes
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline font-bold">
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
          <span className="text-gray-600 ml-2">Series Information</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Series Header */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src="https://via.placeholder.com/300x450?text=To+LOVE-Ru+Cover"
                    alt="To LOVE-Ru Series Cover"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold text-pink-600 mb-2">
                    To LOVE-Ru Series
                  </h1>
                  <p className="italic text-gray-600 mb-4">とらぶる</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 mb-4">
                    <div>
                      <span className="font-bold">Type:</span> Manga & Anime
                    </div>
                    <div>
                      <span className="font-bold">Genres:</span> Romantic
                      Comedy, Ecchi, Sci-Fi, Harem
                    </div>
                    <div>
                      <span className="font-bold">Author:</span> Saki Hasemi
                    </div>
                    <div>
                      <span className="font-bold">Artist:</span> Kentaro Yabuki
                    </div>
                    <div>
                      <span className="font-bold">Published:</span> April 2006 -
                      August 2009
                    </div>
                    <div>
                      <span className="font-bold">Volumes:</span> 18
                    </div>
                    <div>
                      <span className="font-bold">Anime Studio:</span> Xebec
                    </div>
                    <div>
                      <span className="font-bold">TV Series:</span> 4 seasons
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700">
                      To LOVE-Ru is a Japanese manga series written by Saki
                      Hasemi and illustrated by Kentaro Yabuki. The title is a
                      word play on the English phrase "love trouble", which is
                      the main theme of the series.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Series Overview */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Series Overview
              </h2>
              <p className="mb-4">
                To LOVE-Ru revolves around Rito Yuuki, a high-school student who
                cannot confess to the girl of his dreams, Haruna Sairenji. One
                day when sulking in the bathtub, a mysterious, naked girl
                appears out of nowhere. Her name is Lala Satalin Deviluke, the
                crown princess of an alien empire, and she has run away from
                home to avoid an arranged marriage.
              </p>
              <p className="mb-4">
                The series chronicles the daily adventures of Rito as he deals
                with his love for Haruna, his accidental engagement to Lala, and
                the chaos that ensues when more alien girls arrive and develop
                feelings for him.
              </p>
              <p className="mb-4">
                To LOVE-Ru is known for its combination of science fiction,
                romantic comedy, and ecchi elements. The manga has been adapted
                into multiple anime series and OVAs, as well as several video
                games.
              </p>

              <h3 className="text-xl font-bold text-pink-600 mt-6 mb-3">
                Spin-offs and Sequels
              </h3>
              <p className="mb-4">
                Following the conclusion of the original manga in 2009, a sequel
                titled "To LOVE-Ru Darkness" was launched in October 2010. This
                sequel, also written by Saki Hasemi and illustrated by Kentaro
                Yabuki, shifts the focus more towards Momo Velia Deviluke
                (Lala's younger sister) and her "Harem Plan" for Rito, as well
                as exploring more of Golden Darkness's (Yami's) backstory.
              </p>
              <p className="mb-4">
                To LOVE-Ru Darkness ran until March 2017, concluding with 18
                volumes, the same as its predecessor. The sequel series
                generally features a more serious tone than the original, with
                more complex character developments and story arcs.
              </p>
            </section>

            {/* Manga Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Manga</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  Original Series
                </h3>
                <p className="mb-4">
                  The original To LOVE-Ru manga was serialized in Shueisha's
                  Weekly Shōnen Jump magazine from April 24, 2006, to August 31,
                  2009. The chapters were collected into 18 tankōbon volumes,
                  published from November 2, 2006, to April 2, 2010.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Original Series Volumes</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array(18)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="text-center">
                          <div className="bg-white rounded-lg shadow p-2">
                            <div className="font-medium">Volume {i + 1}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  To LOVE-Ru Darkness
                </h3>
                <p className="mb-4">
                  To LOVE-Ru Darkness began serialization in Shueisha's Jump
                  Square magazine in October 2010 and finished in March 2017.
                  Like the original series, it was collected into 18 tankōbon
                  volumes, published from May 2, 2011, to April 4, 2017.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Darkness Series Volumes</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array(18)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="text-center">
                          <div className="bg-white rounded-lg shadow p-2">
                            <div className="font-medium">Volume {i + 1}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Anime Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Anime</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    To LOVE-Ru (2008)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <img
                        src="https://via.placeholder.com/200x300?text=Season+1"
                        alt="To LOVE-Ru Season 1"
                        className="w-full rounded shadow-md"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="mb-2">
                        The first anime adaptation was produced by Xebec and
                        aired from April 4 to September 26, 2008, spanning 26
                        episodes.
                      </p>
                      <ul className="list-disc ml-5 mb-4">
                        <li>Director: Takao Kato</li>
                        <li>Episodes: 26</li>
                        <li>Aired: Apr 3, 2008 to Sep 25, 2008</li>
                        <li>Studio: Xebec</li>
                      </ul>
                      <Link
                        to="#"
                        className="text-purple-700 hover:text-pink-600"
                      >
                        View episode list &raquo;
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Motto To LOVE-Ru (2010)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <img
                        src="https://via.placeholder.com/200x300?text=Season+2"
                        alt="Motto To LOVE-Ru Season"
                        className="w-full rounded shadow-md"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="mb-2">
                        The second season, titled "Motto To LOVE-Ru," aired from
                        October 6 to December 22, 2010, with 12 episodes.
                      </p>
                      <ul className="list-disc ml-5 mb-4">
                        <li>Director: Atsushi Ōtsuki</li>
                        <li>Episodes: 12</li>
                        <li>Aired: Oct 6, 2010 to Dec 22, 2010</li>
                        <li>Studio: Xebec</li>
                      </ul>
                      <Link
                        to="#"
                        className="text-purple-700 hover:text-pink-600"
                      >
                        View episode list &raquo;
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    To LOVE-Ru Darkness (2012)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <img
                        src="https://via.placeholder.com/200x300?text=Darkness+S1"
                        alt="To LOVE-Ru Darkness Season 1"
                        className="w-full rounded shadow-md"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="mb-2">
                        Based on the sequel manga, "To LOVE-Ru Darkness" aired
                        from October 6 to December 29, 2012, with 12 episodes,
                        plus 6 OVAs.
                      </p>
                      <ul className="list-disc ml-5 mb-4">
                        <li>Director: Atsushi Ōtsuki</li>
                        <li>Episodes: 12 + 6 OVAs</li>
                        <li>Aired: Oct 6, 2012 to Dec 29, 2012</li>
                        <li>Studio: Xebec</li>
                      </ul>
                      <Link
                        to="#"
                        className="text-purple-700 hover:text-pink-600"
                      >
                        View episode list &raquo;
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    To LOVE-Ru Darkness 2nd (2015)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <img
                        src="https://via.placeholder.com/200x300?text=Darkness+S2"
                        alt="To LOVE-Ru Darkness Season 2"
                        className="w-full rounded shadow-md"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="mb-2">
                        The fourth and final season, "To LOVE-Ru Darkness 2nd,"
                        aired from July 7 to October 29, 2015, with 14 episodes,
                        followed by 2 OVAs.
                      </p>
                      <ul className="list-disc ml-5 mb-4">
                        <li>Director: Atsushi Ōtsuki</li>
                        <li>Episodes: 14 + 2 OVAs</li>
                        <li>Aired: Jul 7, 2015 to Oct 29, 2015</li>
                        <li>Studio: Xebec</li>
                      </ul>
                      <Link
                        to="#"
                        className="text-purple-700 hover:text-pink-600"
                      >
                        View episode list &raquo;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* Quick Navigation */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    Series Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    Original Manga
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    To LOVE-Ru Darkness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    First Anime Series
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    Motto To LOVE-Ru
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    Darkness Anime
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    Darkness 2nd
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-pink-600">
                    OVAs
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Related Content
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Creator: Kentaro Yabuki
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Creator: Saki Hasemi
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Light Novels
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Video Games
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-purple-700 hover:text-pink-600">
                    Other Works by Creators
                  </Link>
                </li>
              </ul>
            </div>

            {/* Interesting Facts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Did You Know?
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-300 pl-4">
                  <p className="text-gray-700">
                    The title "To LOVE-Ru" is a pun on the English phrase "love
                    trouble"
                  </p>
                </div>
                <div className="border-l-4 border-pink-300 pl-4">
                  <p className="text-gray-700">
                    Kentaro Yabuki also illustrated the manga Black Cat, and
                    some characters from that series make cameo appearances
                  </p>
                </div>
                <div className="border-l-4 border-pink-300 pl-4">
                  <p className="text-gray-700">
                    To LOVE-Ru has sold over 18 million copies worldwide
                  </p>
                </div>
                <div className="border-l-4 border-pink-300 pl-4">
                  <p className="text-gray-700">
                    The "Darkness" sequel has a more serious tone than the
                    original series
                  </p>
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
