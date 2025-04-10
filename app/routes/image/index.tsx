export default function Image() {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              <img
                src="Chainsaw Man/Chainsaw-Man-Logo.png"
                alt=""
                className="h-56"
              />
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="pt-12 lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            When his father died, Denji was stuck with a huge debt and no way to
            pay it back. Thanks to the help of a Devil dog he saved named
            Pochita, though, Denji is able to scrape by as a Devil Hunter
            working for the Yakuza. When the mob betrays Denji and he's killed
            by a Devil, Pochita sacrifices himself to revive his former master.
            Now Denji has been reborn as some kind of weird Devil-Human hybrid.
            He is now Chainsaw Man!
          </p>
            <a
            href="/collection"
            className="pt-6 text-indigo-400 hover:text-indigo-600 font-medium text-lg"
            >
            Collection
            </a>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-60 rounded w-full object-cover object-top mb-6"
                src="Chainsaw Man/cmbackground.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Nayuta
              </h2>
              <p className="leading-relaxed text-base">
                Nayuta (ナユタ?) is the reincarnation of the Control Devil
                (支し配はいの悪あく魔ま Shihai no Akuma?) following Makima's
                death.[1] To prevent her from becoming similar to her previous
                incarnation, she was taken by Kishibe to be raised by Denji as
                Denji's younger sister. She is a recurring character in the
                Academy Saga.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-60 rounded w-full object-cover object-center mb-6"
                src="Chainsaw Man/cmfamine.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Fami
              </h2>
              <p className="leading-relaxed text-base">
                Fami (キガ Kiga?) is the Famine Devil (飢き餓がの悪あく魔ま Kiga
                no Akuma?) which embodies the fear of famine and starvation and
                is a member of the Four Horsemen.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-60 rounded w-full object-cover object-center mb-6"
                src="Chainsaw Man/cmyoru.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Yoru
              </h2>
              <p className="leading-relaxed text-base">
                Yoru (ヨル?) is the deuteragonist of the Academy Saga. She is
                the War Devil (戦せん争そうの悪あく魔ま Sensō no Akuma?) who
                embodies the fear of war. She is a member of the Four Horsemen,
                who now occupies Asa Mitaka's body as a Fiend.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-60 rounded w-full object-cover mb-6"
                src="Chainsaw Man/cmasayoru.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Asa Mitaka
              </h2>
              <p className="leading-relaxed text-base">
                Asa Mitaka (三み鷹たか アサ Mitaka Asa?) is the main protagonist
                of the Academy Saga. She is a high school student who became the
                host of the War Devil, Yoru, making her the inhabitance of the
                War Fiend (戦せん争そうの魔ま人じん Sensō no Majin?), though she
                still retains her human personality when Yoru allows her
                control, making her a rare case of a living Fiend host.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
