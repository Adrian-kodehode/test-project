import { Link } from "react-router-dom";

export default function MydressupDarling() {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              <img
                src="public/My Dressup Darling/my-dressup-darling-logo.jpg"
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
          </a>
          <a
            href="/onepiece"
            className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            One Piece
          </a>
          <a
            href="/toloveru"
            className="pt-6 pl-5 text-pink-400 hover:text-pink-600 font-medium text-lg"
          >
            To Love-Ru
          </a>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Character cards for JJK */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="public/My Dressup Darling/marin 1st.jpg"
                alt="Yuji Itadori"
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                Marine
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Marin Kitagawa
              </h2>
              <p className="leading-relaxed text-base">
                Marin Kitagawa is an above-average height girl with a slim
                waistline and light skin tone. Her eyes are naturally a dark
                brown, although she is almost always seen with dark pink color
                contacts when she isn't cosplaying. She has long, glittery-pink
                acrylic nails. She has smooth blonde hair with an ombré
                transition to pinkish-red or citrus orange at the tips and
                reaching down to her waist in the rear; her side swept bangs
                cover a majority of her forehead and eyebrows, reaching to her
                eyelashes; two locks of hair flow over her shoulders and end
                around chest height. Her hairstyles include long straight hair,
                a single ponytail, a double ponytail, a double knot on top, a
                bun and a single top ponytail.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="public/My Dressup Darling/gojo-darling.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                Wacchan
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Wakana Gojo
              </h2>
              <p className="leading-relaxed text-base">
                Wakana is quite tall for his age, standing at least 180
                centimeters. When Marin asked him his height, he was interrupted
                before he could finish saying, meaning that he may be taller
                than 180cm. He has short, black hair and gray eyes, along with a
                tiny mole on the outer lower corner of his right eye.
              </p>
            </div>
          </div>

          {/* Add more character cards as needed */}
        </div>
      </div>
    </section>
  );
}
