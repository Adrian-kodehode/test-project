import React from "react";

const TreeView: React.FC = () => {
  return (
    <div className="treeview bg-spotify-black text-white h-full w-64 p-4">
      <div className="section mb-4">
        <h3 className="text-lg font-bold mb-2">Daily Discover</h3>
      </div>
      <div className="section mb-4">
        <h3 className="text-lg font-bold mb-2">New Releases</h3>
      </div>
      <div className="section mb-4">
        <h3 className="text-lg font-bold mb-2">Liked Songs</h3>
      </div>
      <div className="section mb-4">
        <h3 className="text-lg font-bold mb-2">My Playlists</h3>
        <ul className="list-none pl-4">
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            One Piece
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            Chainsaw Man
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            Jujutsu Kaisen
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            To LOVE-Ru Darkness
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            My Dressup Darling
          </li>
        </ul>
      </div>
      <div className="section">
        <h3 className="text-lg font-bold mb-2">Shared</h3>
        <ul className="list-none pl-4">
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            We Got Cursed Taste™
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">
            Cosplay & Chill
          </li>
          <li className="mb-1 hover:text-green-500 cursor-pointer">2AM & 2D</li>
        </ul>
      </div>
    </div>
  );
};

export default TreeView;
