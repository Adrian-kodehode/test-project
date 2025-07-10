export const Renge = () => {
  return (
    <tr className="bg-[#e05289] border-b border-gray-700">
      <td className="py-2 px-2 flex items-center justify-center gap-2">
        <img
          src="/Blue-Archive/characters/Renge_Icon.png"
          alt=""
          className="w-40 h-30"
        />
        <span
          className="text-xl font-extrabold"
          style={{
            textShadow: "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
          }}
        >
          Renge
        </span>
      </td>
      <td className="py-2 px-6 bg-blueArchive-threestar">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1">
            <img
              src="Blue-Archive/images/Star_Icon.png"
              alt=""
              className="w-6 h-6"
            />{" "}
            <img
              src="Blue-Archive/images/Star_Icon.png"
              alt=""
              className="w-6 h-6"
            />
          </div>{" "}
          <img
            src="Blue-Archive/images/Star_Icon.png"
            alt=""
            className="w-6 h-6"
          />
        </div>
      </td>
      <td className="py-2 px-3 text-xl font-extrabold text-black bg-blueArchive-striker">
        Striker
      </td>
      <td className="py-2 px-2">
        <span className="  flex items-center justify-center mx-auto">
          <img src="Blue-Archive/icons/Attacker (1).png" alt="" />
        </span>
      </td>
      <td className="py-2 px-2 text-xl font-extrabold text-black italic">
        BACK
      </td>
      <td className="py-2 px-2 text-2xl font-extrabold text-black">
        <img
          src="Blue-Archive/icons/Cover.png"
          alt=""
          className="w-14 h-14"
        />
      </td>
      <td className="py-2 px-2 text-black text-xl  font-extrabold bg-blueArchive-sonic">
        Sonic
      </td>
      <td className="py-2 px-2 text-black text-xl font-extrabold bg-[orange]">
        Heavy Armor
      </td>
    </tr>
  );
};
