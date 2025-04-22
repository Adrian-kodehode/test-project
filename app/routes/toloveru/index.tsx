import { Link } from "react-router-dom";

export default function ToloveRu() {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              <img
                src="public/To Love Ru/toloveruDarkness.png"
                alt="Jujutsu Kaisen"
                className="h-56"
              />
            </h1>
            <div className="h-1 w-20 bg-pink-500 rounded"></div>
          </div>
          <p className="pt-12 lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"></p>
          <a
            href="/collection"
            className="pt-6 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            Collection
          </a>
          <a
            href="/image"
            className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            Chainsaw Man
          </a>
          <a
            href="/jjk"
            className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            Jujutsu Kaisen
            <a
              href="/onepiece"
              className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
            >
              One Piece
            </a>
          </a>
          <a
            href="/mydressupdarling"
            className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            My Dress-Up Darling
          </a>
        </div>
        
        <div className="flex flex-wrap -m-4">
          {/* Character cards for JJK */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/momo.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                MAIN CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/lala.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/nana.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/yami.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/haruna.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/mikan.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/yui.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/tearju.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/nemisis.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/rin.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                TEACHER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          {/* Add more character cards as needed */}
        </div>
      </div>
    </section>
  );
}
