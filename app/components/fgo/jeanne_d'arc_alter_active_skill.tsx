import React, { useState } from "react";

export const JeanneDArcAlterActiveSkill = () => {
  const [activeSkillTab, setActiveSkillTab] = useState<
    "first" | "second" | "third"
  >("first");
  const [thirdSkillVariant, setThirdSkillVariant] = useState<
    "Ephemeral Dream EX" | "Ephemeral Dream A"
  >("Ephemeral Dream EX");
  return (
    <>
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px]  font-bold mt-3 mb-3 ml-8">Active Skills</h2>
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveSkillTab("first")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "first"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              First Skill
            </button>
            <button
              onClick={() => setActiveSkillTab("second")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "second"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Second Skill
            </button>
            <button
              onClick={() => setActiveSkillTab("third")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                activeSkillTab === "third"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Third Skill
            </button>
          </div>
        </div>

        {activeSkillTab === "first" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Available from the start
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img src="/Fgo/icons/Critdmg.png" alt="Charisma of Desire" />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <span className="text-lg font-bold text-blue-400 mb-2">
                  Self-Modification <span className="text-white">EX</span>
                </span>
                <p className="text-sm">
                  Increases own critical damage for 3 turns.
                </p>
                <p className="text-sm">
                  Increases own critical star absorption for 3 turns.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r flex text-center mx-auto border-gray-600 w-1/12">
                    Level
                  </th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r  border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Critdmgup.png"
                      alt="Attack"
                      className="w-5 h-5"
                    />
                    Crit Damage +
                  </td>
                  {[
                    "20%",
                    "23%",
                    "26%",
                    "29%",
                    "32%",
                    "35%",
                    "38%",
                    "41%",
                    "44%",
                    "50%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Critabsup.png"
                      alt="NP"
                      className="w-5 h-5"
                    />
                    Absorption +
                  </td>
                  {[
                    "400%",
                    "440%",
                    "480%",
                    "520%",
                    "560%",
                    "600%",
                    "640%",
                    "680%",
                    "720%",
                    "800%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600">
                    Cooldown
                  </td>
                  <td colSpan={5} className="p-2 border-r border-gray-600">
                    7
                  </td>
                  <td colSpan={3} className="p-2 border-r border-gray-600">
                    6
                  </td>
                  <td colSpan={2} className="p-2">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSkillTab === "second" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks after 1st Ascension
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img src="/Fgo/icons/Atk_up.png" alt="Protection of the Lake" />
              </div>
              <div className="md:col-span-3 p-4 text-center">
                <span className="text-lg font-bold text-blue-400 mb-2">
                  Dragon Witch <span className="text-white">EX</span>
                </span>
                <p className="text-sm">Increases party's attack for 3 turns.</p>
                <p className="text-sm">
                  Increases the attack of{" "}
                  <span className="text-blue-400">Dragon</span> for 3 turns.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center border-t border-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600">Level</th>
                  {[...Array(10)].map((_, i) => (
                    <th
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      } w-[8.88%]`}>
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-900 font-bold">
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                    <img
                      src="/Fgo/icons/Attackup.png"
                      alt="NP"
                      className="w-5 h-5"
                    />
                    Attack +
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 w-[160px]">
                    <img
                      src="/Fgo/icons/Attackup.png"
                      alt="NP Rate"
                      className="w-5 h-5"
                    />
                    <span className="text-blue-400">Dragon</span> Attack +
                  </td>
                  {[
                    "10%",
                    "11%",
                    "12%",
                    "13%",
                    "14%",
                    "15%",
                    "16%",
                    "17%",
                    "18%",
                    "20%",
                  ].map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 ${
                        i < 9 ? "border-r border-gray-600" : ""
                      }`}>
                      {val}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600">
                    Cooldown
                  </td>
                  <td colSpan={5} className="p-2 border-r border-gray-600">
                    7
                  </td>
                  <td colSpan={4} className="p-2 border-r border-gray-600">
                    6
                  </td>
                  <td colSpan={1} className="p-2">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeSkillTab === "third" && (
          <div>
            <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
              <div className="flex gap-1">
                <button
                  onClick={() => setThirdSkillVariant("Ephemeral Dream EX")}
                  className={`px-4 py-2 text-sm font-bold rounded ${
                    thirdSkillVariant === "Ephemeral Dream EX"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}>
                  Ephemeral Dream EX
                </button>
                <button
                  onClick={() => setThirdSkillVariant("Ephemeral Dream A")}
                  className={`px-4 py-2 text-sm font-bold rounded ${
                    thirdSkillVariant === "Ephemeral Dream A"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}>
                  Ephemeral Dream A
                </button>
              </div>
            </div>

            {thirdSkillVariant === "Ephemeral Dream EX" && (
              <>
                <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
                  <p className="text-sm font-bold text-gray-300">
                    Unlocks after{" "}
                    <span className="text-blue-400">Strengthen 2</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                    <img
                      src="/Fgo/icons/Guts.png"
                      alt="Witch's Casket"
                     
                    />
                  </div>
                  <div className="md:col-span-3 p-4 text-center">
                    <p className="text-lg font-bold text-blue-400 mb-2">
                      Ephemeral Dream <span className="text-white">EX</span>
                    </p>
                    <p className="text-sm">
                      Increases own Buster performance for 1 turn.
                    </p>
                    <p className="text-sm mt-1">
                      <img
                        src="/Fgo/icons/Invincible.png"
                        alt=""
                        className="inline"
                      />{" "}
                      Grants self Regeneration buff for 3 turns.
                    </p>
                    <p className="text-sm">
                      Charges own NP gauge.{" "}
                      <img
                        src="/Fgo/icons/UpgradeIconText.png"
                        alt=""
                        className="inline"
                      />
                    </p>
                    <p className="text-sm mt-1">
                      <img
                        src="/Fgo/icons/HpDrainEffect.png"
                        alt=""
                        className="inline"
                      />{" "}
                      500% Chance to deal 1000 damage without killing to self.
                      [Demerit]
                    </p>
                  </div>
                </div>
                <table className="w-full text-sm text-center border-t border-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="p-2 border-r border-gray-600">Level</th>
                      {[...Array(10)].map((_, i) => (
                        <th
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          } w-[8.88%]`}>
                          {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 font-bold">
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Gutsstatus.png"
                          alt="Heal"
                          className="w-5 h-5"
                        />
                        Revives with
                      </td>
                      {[
                        "1000 HP",
                        "1200 HP",
                        "1400 HP",
                        "1600 HP",
                        "1800 HP",
                        "2000 HP",
                        "2200 HP",
                        "2400 HP",
                        "2600 HP",
                        "3000 HP",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critabsup.png"
                          alt="Crit Absorption"
                          className="w-5 h-5"
                        />
                        Absorption +
                      </td>
                      {[
                        "3000 %",
                        "3200 %",
                        "3400 %",
                        "3600 %",
                        "3800 %",
                        "4000 %",
                        "4200 %",
                        "4400 %",
                        "4600 %",
                        "5000 %",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critdmgup.png"
                          alt="Crit Damage Up"
                          className="w-5 h-5"
                        />
                        Crit Damage +
                      </td>
                      {[
                        "20%",
                        "21%",
                        "22%",
                        "23%",
                        "24%",
                        "25%",
                        "26%",
                        "27%",
                        "28%",
                        "30%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Attackdown.png"
                          alt="Attack Down"
                          className="w-5 h-5"
                        />
                        Attack -
                      </td>
                      {[
                        "10%",
                        "11%",
                        "12%",
                        "13%",
                        "14%",
                        "15%",
                        "16%",
                        "17%",
                        "18%",
                        "20%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critchndown.png"
                          alt="Crit Chance Down"
                          className="w-5 h-5"
                        />
                        Crit Chance -
                      </td>
                      {[
                        "10%",
                        "11%",
                        "12%",
                        "13%",
                        "14%",
                        "15%",
                        "16%",
                        "17%",
                        "18%",
                        "20%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/GainStars.png"
                          alt="Stars"
                          className="w-5 h-5"
                        />
                        Stars +
                      </td>
                      {[
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "15",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="bg-gray-700 p-2 border-r border-gray-600">
                        Cooldown
                      </td>
                      <td colSpan={5} className="p-2 border-r border-gray-600">
                        9
                      </td>
                      <td colSpan={3} className="p-2 border-r border-gray-600">
                        8
                      </td>
                      <td colSpan={2} className="p-2">
                        7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {thirdSkillVariant === "Ephemeral Dream A" && (
              <>
                <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
                  <p className="text-sm font-bold text-gray-300">
                    Unlocks after{" "}
                    <span className="text-blue-400">Asecension 3</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                    <img
                      src="/Fgo/icons/Busterup.png"
                      alt="Witch's Casket"
                     
                    />
                  </div>
                  <div className="md:col-span-3 p-4 text-center">
                    <p className="text-lg font-bold text-blue-400 mb-2">
                      Ephemeral Dream <span className="text-white">A</span>
                    </p>
                    <p className="text-sm">
                      Increases own Buster performance for 1 turn.
                    </p>
                    <p className="text-sm mt-1">
                      <img
                        src="/Fgo/icons/Invincible.png"
                        alt=""
                        className="inline"
                      />{" "}
                      Grants self Invincibility for 1 turn.
                    </p>
                   
                    <p className="text-sm mt-1">
                      <img
                        src="/Fgo/icons/HpDrainEffect.png"
                        alt=""
                        className="inline"
                      />{" "}
                     Chance to deal 1000 damage without killing to self. [Demerit]
                    </p>
                  </div>
                </div>
                <table className="w-full text-sm text-center border-t border-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="p-2 border-r border-gray-600">Level</th>
                      {[...Array(10)].map((_, i) => (
                        <th
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          } w-[8.88%]`}>
                          {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 font-bold">
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Gutsstatus.png"
                          alt="Heal"
                          className="w-5 h-5"
                        />
                        Revives with
                      </td>
                      {[
                        "1000 HP",
                        "1200 HP",
                        "1400 HP",
                        "1600 HP",
                        "1800 HP",
                        "2000 HP",
                        "2200 HP",
                        "2400 HP",
                        "2600 HP",
                        "3000 HP",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critabsup.png"
                          alt="Crit Absorption"
                          className="w-5 h-5"
                        />
                        Absorption +
                      </td>
                      {[
                        "3000 %",
                        "3200 %",
                        "3400 %",
                        "3600 %",
                        "3800 %",
                        "4000 %",
                        "4200 %",
                        "4400 %",
                        "4600 %",
                        "5000 %",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critdmgup.png"
                          alt="Crit Damage Up"
                          className="w-5 h-5"
                        />
                        Crit Damage +
                      </td>
                      {[
                        "20%",
                        "21%",
                        "22%",
                        "23%",
                        "24%",
                        "25%",
                        "26%",
                        "27%",
                        "28%",
                        "30%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Attackdown.png"
                          alt="Attack Down"
                          className="w-5 h-5"
                        />
                        Attack -
                      </td>
                      {[
                        "10%",
                        "11%",
                        "12%",
                        "13%",
                        "14%",
                        "15%",
                        "16%",
                        "17%",
                        "18%",
                        "20%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/Critchndown.png"
                          alt="Crit Chance Down"
                          className="w-5 h-5"
                        />
                        Crit Chance -
                      </td>
                      {[
                        "10%",
                        "11%",
                        "12%",
                        "13%",
                        "14%",
                        "15%",
                        "16%",
                        "17%",
                        "18%",
                        "20%",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>{" "}
                    <tr className="border-b border-gray-600">
                      <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1 h-full">
                        <img
                          src="/Fgo/icons/GainStars.png"
                          alt="Stars"
                          className="w-5 h-5"
                        />
                        Stars +
                      </td>
                      {[
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "15",
                      ].map((val, i) => (
                        <td
                          key={i}
                          className={`p-2 ${
                            i < 9 ? "border-r border-gray-600" : ""
                          }`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="bg-gray-700 p-2 border-r border-gray-600">
                        Cooldown
                      </td>
                      <td colSpan={5} className="p-2 border-r border-gray-600">
                        9
                      </td>
                      <td colSpan={3} className="p-2 border-r border-gray-600">
                        8
                      </td>
                      <td colSpan={2} className="p-2">
                        7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
