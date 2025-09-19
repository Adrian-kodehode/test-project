import React from "react";

export const JeanneDArcAlterPassiveSkills = () => {
  return (
    <>
      {/* Passive Skills */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Passive Skills</h2>
        <div className="divide-y divide-gray-700">
          {/* Skill 1 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">1</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Madness.png"
                alt="Mad Enhancement"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Mad Enhancement</span> B
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Busterupstatus.png"
                  alt="Buster Up"
                  className="w-5 h-5"
                />
                Increases own Buster performance by 8%.
              </p>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">2</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Anti_magic.png"
                alt="Magic Resistance"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Magic Resistance</span>{" "}
              A
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Resistanceup.png"
                  alt="Debuff Resistance"
                  className="w-5 h-5"
                />
                Increases own debuff resistance by 20%.
              </p>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">3</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Item_construction.png"
                alt="Item Construction"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Item Construction</span>{" "}
              EX
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Statusup.png"
                  alt="Debuff Success Rate"
                  className="w-5 h-5"
                />
                Increases own debuff success rate by 12%.
              </p>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">4</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Territory_creation.png"
                alt="Territory Creation"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">
                Territory Creation{" "}
              </span>{" "}
              B
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Artsupstatus.png"
                  alt="Arts Up"
                  className="w-5 h-5"
                />
                Increases own Arts performance by 8%.
              </p>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">5</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Criticalchanceresup.png"
                alt="Fae Eyes"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <span className="font-bold text-blue-400">Fae Eyes </span> A
              <p className="text-sm flex items-center gap-1">
                <img
                  src="/Fgo/icons/Critchanceresup.png"
                  alt="Crit Attack Resistance"
                  className="w-5 h-5"
                />
                Increases own critical attack chance resistance by 20%.
              </p>
            </div>
          </div>

          {/* Bond 15 Skill */}
          <div className="bg-gray-700 text-center py-2">
            <p className="text-sm font-bold text-gray-300">
              Reach <span className="text-blue-400">Bond Level </span>
              15
            </p>
          </div>
          <div className="grid grid-cols-12 items-center p-4">
            <div className="col-span-1 text-center font-bold">-</div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/Fgo/icons/Bondskill.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-9 pl-4">
              <p className="font-bold text-blue-400">
                Guidance of the Visionary Flames
              </p>
              <p className="text-sm flex items-start gap-1">
                <img
                  src="/Fgo/icons/BondExp.png"
                  alt="Bond Points Up"
                  className="w-5 h-5 mt-0.5"
                />
                <span>
                  Increases party's Bond Points gained by 25%. (Including sub
                  members)
                  <br />
                  (Stackable, This passive will not trigger if the owner is a
                  Support Servant.)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
