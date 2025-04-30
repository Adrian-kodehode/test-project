import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ToloveRu() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="text-gray-400"
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.div variants={fadeInUp} className="flex flex-wrap w-full mb-20">
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
        </motion.div>

        <div className="flex flex-wrap -m-4">
          {/* Character cards for JJK */}
          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/momo.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Momo Belia Deviluke
              </h2>
              <p className="leading-relaxed text-base">
                Momo Belia Deviluke is Nana's twin, as well as Lala's younger
                sister. As Gid's daughter, she holds the title of "Third
                Princess of Deviluke" as she is the youngest out of his three
                daughters. In To Love-Ru, she used to be seen with Nana all the
                time, but in To Love-Ru Darkness, they are not together as often
                as before. This is because while Nana became friends with
                Kurosaki Mea, whom she hangs out with more often, Momo becomes
                more attached to Rito and focuses on expanding "The Harem Plan"
                she has for him.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/lala.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Lala Satalin Deviluke
              </h2>
              <p className="leading-relaxed text-base">
                Lala Satalin Deviluke (ララ･サタリン・デビルーク Rara Satarin
                Debirūku?) is the main female protagonist of To-Love Ru Series,
                but takes a more minor role in To-Love-Ru Darkness. The story
                begins with Lala running away from home as she didn't want to
                get married to any of her suitors.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/nana.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Nana Astar Deviluke
              </h2>
              <p className="leading-relaxed text-base">
                Nana Astar Deviluke (ナナ・アスタ・デビルーク Nana Asuta
                Debirūku?) is the twin of Momo and the younger sister of Lala.
                She is the second princess of Deviluke. She has the ability to
                talk to and understand animals. Of all the main female
                characters, she has shown the least attraction to Rito,
                considering him to be a "beast".
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/yami.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                Golden Darkness
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Konjiki no Yami
              </h2>
              <p className="leading-relaxed text-base">
                Konjiki no Yami (金色の闇, Golden Darkness), mostly referred to
                by other characters as Yami, is a major character in To Love-Ru
                and To Love-Ru Darkness. She is a lonely assassin who is
                initially hired by Lacospo, one of Lala's arranged suitors, to
                kill Yuuki Rito.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/haruna.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Haruna Sairenji
              </h2>
              <p className="leading-relaxed text-base">
                Haruna Sairenji (西連寺 春菜 Sairenji Haruna?) is the second
                female protagonist of To Love Ru. She is in Rito's class and is
                the girl of his affections. Haruna has similar feelings for him,
                having been attracted to him because of his kind, gentle nature
                since junior high, but believes them to be unrequited and has
                not built up the nerve to confess to him.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/mikan.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Yūki Mikan
              </h2>
              <p className="leading-relaxed text-base">
                Yūki Mikan is Rito's independent and reliable 12-year-old
                sister. Mikan takes care of most of the household work while
                their parents are away working and also watches over Celine. In
                contrast to her brother, she is very mature and does not
                hesitate to tease him, going as far as lying that they aren't
                blood-related, but quickly retracting the statement and telling
                the truth.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/yui.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHAACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Yui Kotegawa
              </h2>
              <p className="leading-relaxed text-base">
                Yui Kotegawa is a secondary female protagonist, who belongs in
                Rito's class throughout the second year. She is also the head of
                the school disciplinary committee.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/tearju.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Tearju Lunatique
              </h2>
              <p className="leading-relaxed text-base">
                Tearju Lunatique (ティアーユ＝ルナティーク Tiāyu Runatīku?) is
                Yami (Golden Darkness) and Kurosaki Mea creator, as she used her
                own cells in order to create Yami but didn't do the same for
                Mea. She is a genius in Universe Biotechnology and has been
                since she was a teenager.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/nemisis.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                Master Nemesis
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Nemesis
              </h2>
              <p className="leading-relaxed text-base">
                Nemesis (ネメシス, Nemeshisu), also known as Master Nemesis, is
                a character introduced in To LOVE-Ru Darkness. She is a
                transformation weapon similar to Golden Darkness (Yami) and
                Kurosaki Mea, but does not share their genetic origins. She is
                Mea's master, whom she gives orders to and uses to observe
                Yami's changes and recent life.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/To Love Ru/rin.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
                CHARACTER
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Kujō Rin
              </h2>
              <p className="leading-relaxed text-base">
                Kujō Rin is Tenjōin Saki's loyal and longest known friend. Rin
                is skilled in kendo and has been a loyal bodyguard to Saki for
                years, as her family has always served the Tenjouin family in
                this position. The bespectacled Fujisaki Aya is weak-willed and
                became associated with Saki after she and Rin protected her from
                bullies when they were children.
              </p>
            </div>
          </motion.div>

          {/* Add more character cards as needed */}
        </div>
      </div>
    </motion.section>
  );
}
