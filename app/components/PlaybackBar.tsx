import React from "react";
import {
  FeatherPlay,
  FeatherSkipBack,
  FeatherSkipForward,
  FeatherVolume2,
  FeatherRepeat,
  FeatherShuffle,
} from "@subframe/core";
import IconButton from "./music/IconButton";

const PlaybackBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-black border-t border-spotify-darkgray p-4">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Currently playing */}
        <div className="flex items-center gap-4 w-1/3">
          <img
            src="utopia.jpg"
            alt="Current track"
            className="h-14 w-14 rounded"
          />
          <div className="flex flex-col">
            <span className="text-spotify-white text-sm font-medium">
              HYAENA
            </span>
            <span className="text-spotify-lightgray text-xs">
              UTOPIA
            </span>
          </div>
        </div>

        {/* Playback controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <IconButton
              icon={
                <FeatherShuffle className="text-spotify-lightgray hover:text-spotify-white" />
              }
              size="small"
              onClick={() => {}}
            />
            <IconButton
              icon={<FeatherSkipBack className="text-spotify-white" />}
              size="small"
              onClick={() => {}}
            />
            <IconButton
              className="spotify-button w-10 h-10 flex items-center justify-center"
              icon={<FeatherPlay className="text-spotify-black" />}
              size="small"
              onClick={() => {}}
            />
          </div>
          <div className="flex items-center gap-2 w-full max-w-md mt-2">
            <span className="text-xs text-spotify-lightgray">0:00</span>
            <div className="flex-1 h-1 bg-spotify-darkgray rounded-full">
              <div className="w-0 h-full bg-spotify-white rounded-full hover:bg-spotify-green"></div>
            </div>
            <span className="text-xs text-spotify-lightgray">3:45</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center justify-end gap-2 w-1/3">
          <FeatherVolume2 className="text-spotify-lightgray" />
          <div className="w-24 h-1 bg-spotify-darkgray rounded-full">
            <div className="w-3/4 h-full bg-spotify-white rounded-full hover:bg-spotify-green"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybackBar;
