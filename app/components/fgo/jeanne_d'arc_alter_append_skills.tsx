import React, { useState } from "react";

export const JeanneDArcAlterAppendSkills = () => {
  const [appendSkillTab, setAppendSkillTab] = useState<
    "first" | "second" | "third" | "fourth" | "fifth"
  >("first");
  return (
    <>
      {/* Append Skills */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Append Skills</h2>
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setAppendSkillTab("first")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "first"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              First Skill
            </button>
            <button
              onClick={() => setAppendSkillTab("second")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "second"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Second Skill
            </button>
            <button
              onClick={() => setAppendSkillTab("third")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "third"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Third Skill
            </button>{" "}
            <button
              onClick={() => setAppendSkillTab("fourth")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "fourth"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Fourth Skill
            </button>{" "}
            <button
              onClick={() => setAppendSkillTab("fifth")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                appendSkillTab === "fifth"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Fifth Skill
            </button>
          </div>
        </div>
        {appendSkillTab === "first" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Damageup.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Extra Attack Finesse Improvement
                </p>
                <p className="text-sm">
                  Increases own Extra Attack performance.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
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
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img
                      src="/Fgo/icons/Extraattackup.png"
                      alt="Extra Attack"
                    />
                    Extra Attack +
                  </td>
                  {[
                    "30%",
                    "32%",
                    "34%",
                    "36%",
                    "38%",
                    "40%",
                    "42%",
                    "44%",
                    "46%",
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
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "second" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Startnp.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Mana Loading
                </p>
                <p className="text-sm">Starts battle with NP gauge charged.</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 w-1/12">Level</th>
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
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/NpCharge.png" alt="" />
                    NP +
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
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "third" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Criticalchanceresup.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Anti-Saber Critical Attack Chance Resistance
                </p>
                <p className="text-sm">
                  Increases own critical attack chance resistance against{" "}
                  <img
                    src="/Fgo/icons/Class-Saber-Gold (1).png"
                    alt=""
                    className="inline h-8"
                  />{" "}
                  <a href="/saber" className="text-blue-400">
                    Saber
                  </a>{" "}
                  enemies.
                </p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
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
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Critchanceresup.png" alt="" />
                    <p>
                      vs.{" "}
                      <a href="/saber" className="text-blue-400">
                        Saber
                      </a>{" "}
                      Crit Chance Res +
                    </p>
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
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {appendSkillTab === "fourth" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Critdmg.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Special Attack Finesse Improvement
                </p>
                <p className="text-sm">Increases own critical damage.</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
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
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Critdmgup.png" alt="" />
                    <span> Crit Damage +</span>
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
                </tr>
              </tbody>
            </table>
          </div>
        )}{" "}
        {appendSkillTab === "fifth" && (
          <div>
            <div className="bg-gray-700 text-center py-2 border-b border-gray-700">
              <p className="text-sm font-bold text-gray-300">
                Unlocks by consuming{" "}
                <span className="text-blue-400">Servant Coins</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-700">
              <div className="md:col-span-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
                <img
                  src="/Fgo/icons/Skillreloading.png"
                  alt="Extra Attack Finesse Improvement"
                />
              </div>
              <div className="md:col-span-3 p-4 text-center md:text-center">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  Skill Reloading
                </p>
                <p className="text-sm">
                  Reduces activated skill cooldown by 1 for N times. (Only once
                  per skill).
                </p>
                <p>(N: Based on Skill Level.)</p>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border-r border-gray-600 ">Level</th>
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
                <tr>
                  <td className="bg-gray-700 p-2 border-r border-gray-600 flex items-center justify-center gap-1">
                    <img src="/Fgo/icons/Skillcooldown.png" alt="" />
                    <span> Reduction Available Count +</span>
                  </td>
                  {["1", "1", "1", "1", "1", "2", "2", "2", "2", "3"].map(
                    (val, i) => (
                      <td
                        key={i}
                        className={`p-2 ${
                          i < 9 ? "border-r border-gray-600" : ""
                        }`}>
                        {val}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
