import React, { useState } from "react";

export const JeanneDArcAlterNoblePhantasm: React.FC = () => {
  const [npTab, setNpTab] = useState<"rank" | "videos">("rank");

  return (
    <>
      {/* Noble Phantasm */}
      <div className="mt-4 mx-auto w-[1000px] bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <h2 className="text-[25px] font-bold mt-3 mb-3 ml-8">Noble Phantasm</h2>
        {/* Tabs */}
        <div className="flex justify-center p-2 bg-[#0a273f] border-b border-gray-700">
          <div className="flex gap-1">
            <button
              onClick={() => setNpTab("rank")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                npTab === "rank"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Rank EX
            </button>
            <button
              onClick={() => setNpTab("videos")}
              className={`px-4 py-2 text-sm font-bold rounded ${
                npTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}>
              Videos
            </button>
          </div>
        </div>

        {/* Upgrade Banner */}

        {/* NP Title */}
        <div className="bg-gray-900 text-center py-3">
          <p className="text-lg font-bold text-blue-400">Roadless Camelot</p>
          <p className="text-sm font-bold text-blue-400">
            The Now Unreachable Utopia
          </p>
        </div>

        {/* Main NP Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-700">
          {/* Left Side - Buster Card */}
          <div className="md:col-span-1 bg-[#541225] flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-700">
            <img
              src="/Fgo/icons/Buster.png"
              alt="Buster"
              className="w-24 h-24"
            />
            <p className="mt-2 font-bold text-pink-300 text-sm">
              Base Damage: x1.5
            </p>
          </div>

          {/* Right Side - Details */}
          <div className="md:col-span-2">
            <table className="w-full text-sm font-bold text-center">
              <tbody>
                <tr className="bg-gray-700">
                  <td className="p-2.5 font-bold border-b border-r border-gray-700 w-1/2">
                    Rank
                  </td>
                  <td className="p-2.5 border-b border-gray-700 w-1/2">
                    Noble Phantasm Type
                  </td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-2 border-b border-r border-gray-700">A++</td>
                  <td className="p-2 border-b border-gray-700">
                    Anti-Fortress
                  </td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2.5 font-bold border-b border-r border-gray-700">
                    Hits
                  </td>
                  <td className="p-2.5 border-b border-gray-700">
                    Per Hit Percentage
                  </td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-2 border-r border-gray-700">6</td>
                  <td className="p-2">4%, 9%, 14%, 19%, 23%, 31%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Effect */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-gray-900">
              <td className="bg-gray-700 p-2 font-bold border-r border-gray-700 w-1/3">
                Effect
              </td>
              <td className="p-2">
                {" "}
                <span>
                  {" "}
                  <img
                    src="/Fgo/icons/Powerup.png"
                    alt=""
                    className="inline"
                  />{" "}
                  Increases own damage against Round Table Knight or Fae enemies
                  by 50% for 1 turn. (Activates first)
                </span>
                <br />
                <span>Deals damage to all enemies.</span> <br />
                <span>
                  <img src="/Fgo/icons/Curse.png" alt="" className="inline" />{" "}
                  Inflicts Curse status with 1000 damage for 5 turns to them.
                </span>
                <br />
                <span>
                  <img
                    src="/Fgo/icons/NPOvercharge.png"
                    alt=""
                    className="inline"
                  />{" "}
                  Overcharges party's NP by 1 stage for 1 time, 3 turns.
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* NP Level */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-gray-700">
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                NP Level
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                1
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                2
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                3
              </td>
              <td className="p-2 font-bold border-r border-gray-700 w-[16.66%]">
                4
              </td>
              <td className="p-2 font-bold w-[16.66%]">5</td>
            </tr>
            <tr className="bg-gray-900 font-bold">
              <td className="p-2 border-r border-gray-700 flex items-center justify-center gap-1">
                <img
                  src="/Fgo/icons/Powerup.png"
                  alt="Damage"
                  className="w-5 h-5"
                />{" "}
                Damage +
              </td>
              <td className="p-2 border-r border-gray-700">300%</td>
              <td className="p-2 border-r border-gray-700">400%</td>
              <td className="p-2 border-r border-gray-700">450%</td>
              <td className="p-2 border-r border-gray-700">475%</td>
              <td className="p-2">500%</td>
            </tr>
          </tbody>
        </table>

        {/* Overcharge Effect */}
        <table className="w-full text-sm text-center border-t border-gray-700">
          <tbody>
            <tr>
              <td className="p-2 font-bold bg-[#53103e] border-r border-gray-700 w-1/3">
                Overcharge Effect
              </td>
              <td className="bg-[#290315] p-2">
                Deals extra damage to enemies with{" "}
                <span className="text-blue-400">Man Attribute</span>.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm font-bold text-center border-t border-gray-700">
          <tbody>
            <tr className="bg-[#53103e]">
              <td className="p-2 border-r border-gray-700 w-[16.66%]">
                Charge
              </td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">100%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">200%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">300%</td>
              <td className="p-2 border-r border-gray-700 w-[16.66%]">400%</td>
              <td className="p-2 w-[16.66%]">500%</td>
            </tr>
            <tr className="bg-[#290315]">
              <td className="p-2 bg-[#53103e] border-r border-gray-700 flex items-center justify-center gap-1">
                <img
                  src="/Fgo/icons/NpCharge.png"
                  alt="NP"
                  className="w-5 h-5"
                />{" "}
                NP +
              </td>
              <td className="p-2 border-r border-gray-700">150%</td>
              <td className="p-2 border-r border-gray-700">162.5%</td>
              <td className="p-2 border-r border-gray-700">175%</td>
              <td className="p-2 border-r border-gray-700">187.5%</td>
              <td className="p-2">200%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
