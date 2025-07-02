export const Rio = () => {
  return (
    <tr className="bg-[#4f86f7] border-b border-gray-700">
      <td className="py-2 px-2 flex items-center justify-center gap-2">
        <img
          src="/Blue-Archive/characters/Rio_Icon.png"
          alt=""
          className="w-40 h-30"
        />
        <span
          className="text-xl font-extrabold"
          style={{
            textShadow: "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
          }}
        >
          Rio
        </span>
      </td>
      <td className="py-2 px-6 bg-[#9B85E6]">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1">
            <img
              src="Blue-Archive/images/Star_Icon.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="Blue-Archive/images/Star_Icon.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <img
            src="Blue-Archive/images/Star_Icon.png"
            alt=""
            className="w-6 h-6"
          />
        </div>
      </td>
      <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185F6]">
        Special
      </td>
      <td className="py-2 px-2">
        <span className="  flex items-center justify-center mx-auto">
          <img src="Blue-Archive/icons/Supporter.png" alt="" />
        </span>
      </td>
      <td className="py-2 px-2 text-xl font-extrabold text-black italic">
        BACK
      </td>
      <td className="py-2 px-2 text-2xl font-extrabold text-black">
        <img
          src="Blue-Archive/icons/Cross_1.png"
          alt=""
          className="w-14 h-14"
        />
      </td>
      <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#46adff]">
        Mystic
      </td>
      <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#9b57aa]">
        Elastic Armor
      </td>
    </tr>
  );
};
