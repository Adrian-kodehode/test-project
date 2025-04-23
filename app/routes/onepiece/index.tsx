import { Link } from "react-router-dom";

export default function OnePiece() {
  return (
    <section className="text-gray-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              <img
                src="public/One Piece/One-Piece-Logo-PNG-Photo.png"
                alt="Jujutsu Kaisen"
                className="h-56"
              />
            </h1>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p className="pt-12 lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            24 years ago, the Pirate King, Gol D. Roger, was executed. However,
            before his death he revealed to everyone that his treasure, the One
            Piece, was hidden at the end of the Grand Line. This inspired people
            to become pirates and sail toward the treasure, beginning the Great
            Age of Pirates. Twelve years later, a young boy from the East Blue
            named Monkey D. Luffy dreamed of finding the One Piece, but lost the
            ability to swim after eating a Devil Fruit giving him the ability to
            stretch his body like rubber. He was given a straw hat by the pirate
            Shanks, who would later go on to become an Emperor, one of the four
            most powerful pirates in the world, on the agreement that he would
            return the hat once he became a pirate and surpassed Shanks.
          </p>
          <a
            href="/collection"
            className="pt-6 text-blue-400 hover:text-blue-600 font-medium text-lg"
          >
            Collection
          </a>
          <a
            href="/image"
            className="pt-6 pl-5 text-blue-400 hover:text-blue-600 font-medium text-lg"
          >
            Chainsaw Man
          </a>
          <a
            href="/jjk"
            className="pt-6 pl-5 text-blue-400 hover:text-blue-600 font-medium text-lg"
          >
            Jujutsu Kaisen
          </a>
          <a
            href="/toloveru"
            className="pt-6 pl-5 text-blue-400 hover:text-blue-600 font-medium text-lg"
          >
            To Love-Ru
          </a>
          <a
            href="/mydressupdarling"
            className="pt-6 pl-5 text-blue-400 hover:text-blue-600 font-medium text-lg"
          >
            My Dress-Up Darling
          </a>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Character cards for JJK */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/luffy.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-top mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Joy Boy
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Monkey D. Luffy
              </h2>
              <p className="leading-relaxed text-base">
                Monkey D. Luffy, commonly known as "Straw Hat Luffy" or simply
                "Straw Hat", is the founder and captain of the increasingly
                infamous and powerful Straw Hat Pirates. He pursues the
                legendary treasure of the late Gol D. Roger in order to become
                the new Pirate King and reach a further, untold dream (currently
                known to only his crew, family and closest friends). He believes
                that being the Pirate King means having the most freedom in the
                world.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/zoro.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                King of Hell
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Roronoa Zoro
              </h2>
              <p className="leading-relaxed text-base">
                Zoro has devoted his life to becoming the world's strongest
                swordsman. Even before joining the crew, he was well-renowned
                for his outstanding abilities and accomplishments in battle. His
                skills drastically improved after becoming the combatant of the
                Straw Hat Pirates and entering a two-year training period under
                the "Strongest Swordsman in the World", Dracule Mihawk.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/nami.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Cat Burglar
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Nami
              </h2>
              <p className="leading-relaxed text-base">
                "Cat Burglar" Nami is the navigator of the Straw Hat Pirates and
                one of the Senior Officers of the Straw Hat Grand Fleet. She is
                the third member of the crew and the second to join, doing so
                during the Orange Town Arc. She is the adoptive sister of Nojiko
                after the two were orphaned and taken in by Bell-mère.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/usopp.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                God Usopp
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Usopp
              </h2>
              <p className="leading-relaxed text-base">
                "God" Usopp is the sniper of the Straw Hat Pirates and one of
                the Senior Officers of the Straw Hat Grand Fleet. He is the
                fourth member of the crew and the third to join, doing so at the
                end of the Syrup Village Arc. Although he left the crew during
                the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby
                Arc.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/sanji.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Black Leg
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Vinsmoke Sanji
              </h2>
              <p className="leading-relaxed text-base">
                Born as Vinsmoke Sanji, the third son and fourth child of the
                Vinsmoke Family (thus, making him a former prince of the Germa
                Kingdom), he disowned his family twice, once in his youth and
                again after reuniting with them as an adult. After fleeing the
                Vinsmokes as a child, he eventually entered the care of Zeff as
                the sous chef of the Baratie, where he would remain until he met
                Luffy, who convinced him to join his crew.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/chopper.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Cotton Candy Lover
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Tony Tony Chopper
              </h2>
              <p className="leading-relaxed text-base">
                Tony Tony Chopper, also known as "Cotton Candy Lover"
                Chopper,[6] is the doctor of the Straw Hat Pirates and one of
                the Senior Officers of the Straw Hat Grand Fleet.[2] He is the
                sixth member of the crew and the fifth to join, doing so at the
                end of the Drum Island Arc. He was temporarily forced to join
                the Foxy Pirates during the Long Ring Long Land Arc but was
                quickly returned to Luffy's crew.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/robin.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Devil Child
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Niko Robin
              </h2>
              <p className="leading-relaxed text-base">
                Nico Robin, also known by her epithet "Devil Child" and the
                "Light of the Revolution", is the archaeologist of the Straw Hat
                Pirates and one of the Senior Officers of the Straw Hat Grand
                Fleet. She is the seventh member of the crew and the sixth to
                join, doing so at the end of the Arabasta Arc. She temporarily
                left the crew during the Water 7 Arc but rejoined during the
                Enies Lobby Arc.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/franky.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Iron Man
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Cutty Flam/Franky
              </h2>
              <p className="leading-relaxed text-base">
                "Iron Man" Franky is the shipwright of the Straw Hat Pirates and
                one of the Senior Officers of the Straw Hat Grand Fleet. He is
                the crew's eighth member and the seventh to join, doing so at
                the end of the Post-Enies Lobby Arc.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/brook.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Soul King
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Brook
              </h2>
              <p className="leading-relaxed text-base">
                "Soul King" Brook[10] is the musician of the Straw Hat Pirates,
                one of their two swordsmen, and one of the Senior Officers of
                the Straw Hat Grand Fleet.[3] He is the ninth member of the crew
                and the eighth to join,[16] doing so at the end of the Thriller
                Bark Arc.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/jinbe.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                First Son of the Sea
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Jinbe
              </h2>
              <p className="leading-relaxed text-base">
                "Knight of the Sea" Jinbe is the helmsman of the Straw Hat
                Pirates and one of the Senior Officers of the Straw Hat Grand
                Fleet. He is the tenth member of the crew and the ninth to join,
                doing so during the Wano Country Arc.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/shanks.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Red-Haired Shanks
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Shanks
              </h2>
              <p className="leading-relaxed text-base">
                Born to the Figarland Family of the World Nobles, Shanks is the
                son of Figarland Garling and the younger twin brother of
                Shamrock. However, as an infant, Shanks was discovered by the
                Roger Pirates at God Valley, sometime after the God Valley
                Incident. Shanks was then adopted and raised onboard the Oro
                Jackson, beginning his pirate career within Roger's crew as an
                apprentice alongside Buggy, before forming his own crew
                following Roger's death 24 years ago and renouncing his
                birthright as a Celestial Dragon.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                src="/One Piece/blackbeard.jpg"
                alt=""
                className="h-full rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">
                Blackbeard
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Marshall D. Teach
              </h2>
              <p className="leading-relaxed text-base">
                Marshall D. Teach, most commonly referred to by his epithet
                "Blackbeard", is the admiral of the Blackbeard Pirates, and one
                of the Four Emperors that rule over the New World. He is also
                the only known person in history to wield the powers of two
                Devil Fruits, as well as being part of a special bloodline,
                which is only known to a small number of individuals, including
                his own crew, Marco, and the Five Elders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
