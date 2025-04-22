import { Link } from "react-router-dom";

export default function JujutsuKaisen() {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              <img
                src="public/Jujutsu Kaisen/Jujutsu-Kaisen-Logo.png"
                alt="Jujutsu Kaisen"
                className="h-56"
              />
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
          <p className="pt-12 lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Jujutsu Kaisen is set in a world where Cursed Spirits feed on
            unsuspecting humans and fragments of the legendary and feared demon
            Ryomen Sukuna have been lost and scattered about. Should any curse
            consume Sukuna's body parts, the power they gain could destroy the
            world as we know it. Fortunately, there exists a mysterious school
            of Jujutsu Sorcerers who exist to protect the precarious existence
            of the living from the supernatural!
          </p>
          <a
            href="/collection"
            className="pt-6 text-red-400 hover:text-red-600 font-medium text-lg"
          >
            Collection
          </a>
          <a
            href="/image"
            className="pt-6 pl-5 text-red-400 hover:text-red-600 font-medium text-lg"
          >
            Chainsaw Man
          </a>
          <a
            href="/onepiece"
            className="pt-6 pl-5 text-red-400 hover:text-red-600 font-medium text-lg"
          >
            One Piece
          </a>
          <a
            href="/toloveru"
            className="pt-6 pl-5 text-red-400 hover:text-red-600 font-medium text-lg"
          >
            To Love-Ru
          </a>
          <a
            href="/mydressupdarling"
            className="pt-6 pl-5 text-red-400 hover:text-red-600 font-medium text-lg"
          >
            My Dress-Up Darling
          </a>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Character cards for JJK */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/yuji.jpg"
                alt="Yuji Itadori"
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                Sukuna's Vessel
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Yuji Itadori
              </h2>
              <p className="leading-relaxed text-base">
                Yuji Itadori (虎いた杖どり悠ゆう仁じ Itadori Yūji?) is the main
                protagonist of the Jujutsu Kaisen series. He is the son of Jin
                Itadori and Kaori Itadori, and the grandson of Wasuke Itadori.
                Yuji was living a normal life in Sendai City until he
                encountered Megumi and ate one of Sukuna's fingers. After
                becoming Sukuna's vessel, Yuji began attending Tokyo Jujutsu
                High alongside Megumi and Nobara as first-year students.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/megumi.jpg"
                alt="Yuji Itadori"
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                Sea Urchin Head
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Megumin Fushiguro
              </h2>
              <p className="leading-relaxed text-base">
                Megumi Fushiguro (伏ふし黒ぐろ恵めぐみ Fushiguro Megumi?) is the
                deuteragonist of the Jujutsu Kaisen series. He is a grade 2
                jujutsu sorcerer and first-year student at Tokyo Jujutsu High
                alongside Yuji Itadori and Nobara Kugisaki. Megumi is the
                step-brother of Tsumiki Fushiguro and as the son of Toji
                Fushiguro, Megumi is also a descendant of the Zenin Clan. Megumi
                was born outside the clan as Toji's trump card and was
                eventually found by Satoru Gojo, who mentored him and enrolled
                him at Jujutsu High as his student.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/Nobara.jpg"
                alt="Yuji Itadori"
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                Grade 3 Jujutsu Sorcerer
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Nobara Kugisaki
              </h2>
              <p className="leading-relaxed text-base">
                Nobara Kugisaki (釘くぎ崎さき野の薔ば薇ら Kugisaki Nobara?) is
                the tritagonist of the Jujutsu Kaisen series. She is a
                first-year student and grade 3 jujutsu sorcerer at Tokyo Jujutsu
                High studying under Satoru Gojo alongside Yuji and Megumi.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/gojo.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                The Strongest
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Satoru Gojo
              </h2>
              <p className="leading-relaxed text-base">
                Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the
                main protagonists of the Jujutsu Kaisen series. He is a special
                grade jujutsu sorcerer and widely recognized as the strongest in
                the world. Satoru is the pride of the Gojo Clan, the first
                person to inherit both the Limitless and the Six Eyes in four
                hundred years. He works as a teacher at the Tokyo Jujutsu High
                and uses his influence to protect and train strong young allies.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/sukuna.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                King of Curses
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Ryomen Sukuna
              </h2>
              <p className="leading-relaxed text-base">
                Ryomen Sukuna (両りょう面めん宿すく儺な Ryōmen Sukuna?), more
                often referred to as simply Sukuna (宿すく儺な Sukuna?), is the
                strongest jujutsu sorcerer from over a thousand years ago.
                Regarded as the undisputed King of Curses (呪のろいの王おう
                Noroi no Ō?), Sukuna is one of the primary antagonists of the
                Jujutsu Kaisen series.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/maki.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                The Heir of the Zenin Clan
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Maki Zenin
              </h2>
              <p className="leading-relaxed text-base">
                Maki Zenin (禪ぜん院いん真ま希き Zen'in Maki?) is a major
                supporting character in Jujutsu Kaisen and one of the main
                protagonists of its prequel, Jujutsu Kaisen 0: Jujutsu High. She
                is currently a second-year at Tokyo Jujutsu High. Daughter of
                Ogi Zenin and the elder twin sister of Mai Zenin, Maki was born
                in the Zenin Clan.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/geto.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                The Worst of All Curse Users
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Suguru Geto
              </h2>
              <p className="leading-relaxed text-base">
                Suguru Geto (夏げ油とう傑すぐる Getō Suguru?) is an antagonist
                in both the Jujutsu Kaisen series and its prequel Jujutsu Kaisen
                0: Jujutsu High. He was originally a student of Masamichi Yaga's
                alongside Satoru Gojo and Shoko Ieiri at Tokyo Jujutsu High. His
                experiences as a jujutsu sorcerer bred a deep hatred for
                non-sorcerers, leading to an incident where Suguru massacred
                over a hundred civilians in a single night. He was expelled from
                Jujutsu High and came to be known as the worst of all curse
                users.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/Jujutsu Kaisen/yuta.jpg"
                alt="Satoru Gojo"
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                Special Grade Sorcerer
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Yuta Okkotsu
              </h2>
              <p className="leading-relaxed text-base">
                Yuta Okkotsu (乙おっ骨こつ憂ゆう太た Okkotsu Yūta?) is a major
                supporting character in the Jujutsu Kaisen series and the main
                protagonist of its prequel series, Jujutsu Kaisen 0: Jujutsu
                High. He was initially a special grade cursed human haunted by
                his late childhood friend, Rika Orimoto. Satoru Gojo mentored
                Yuta and enrolled him at Tokyo Jujutsu High.
              </p>
            </div>
          </div>

          {/* Add more character cards as needed */}
        </div>
      </div>
    </section>
  );
}
