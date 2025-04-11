"use client";

import React from "react";
import { FeatherLibrary } from "@subframe/core";
import IconButton from "app/components/music/IconButton";
import TextField from "app/components/music/TextField";
import { FeatherSearch } from "@subframe/core";
import TreeView from "app/components/music/TreeView";
import { FeatherGlobe2 } from "@subframe/core";
import { FeatherStar } from "@subframe/core";
import { FeatherPin } from "@subframe/core";
import { FeatherListMusic } from "@subframe/core";
import Avatar from "app/components/music/Avatar";
import { FeatherPlay } from "@subframe/core";
import { FeatherShuffle } from "@subframe/core";
import { FeatherArrowDownCircle } from "@subframe/core";
import DropdownMenu from "app/components/music/DropdownMenu";
import { FeatherShare } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import Button from "app/components/music/Button";
import { FeatherChevronDown } from "@subframe/core";
import Table from "app/components/music/Table";
import { FeatherPlusCircle } from "@subframe/core";
import { FeatherMinusCircle } from "@subframe/core";

const playlistData = [
  { title: "HYAENA", artist: "Travis Scott", dateAdded: "28.july 2023" },
  { title: "THANK GOD", artist: "Travis Scott", dateAdded: "28.july 2023" },
  {
    title: "MODERN JAM (feat. Teezo Toucdown)",
    artist: "Travis Scott, Teezo Touchdown",
    dateAdded: "28.july 2023",
  },
  { title: "MY EYES", artist: "Travis Scott", dateAdded: "28.july 2023" },
  { title: "GOD'S COUNTRY", artist: "Travis Scott", dateAdded: "28.july 2023" },
  { title: "SIRENS", artist: "Travis Scott", dateAdded: "28.july 2023" },
  {
    title: "MELTDOWN",
    artist: "Travis Scott, Drake",
    dateAdded: "28.july 2023",
  },
  {
    title: "FE!N (feat.Playboy Carti)",
    artist: "Travis Scott, Playboy Carti",
    dateAdded: "28.july 2023",
  },
  {
    title: "DELRESTO (ECHOES)(feat. Beyoncé)",
    artist: "Travis Scott, Beyoncé",
    dateAdded: "28.july 2023",
  },
  { title: "I KNOW ?", artist: "Travis Scott", dateAdded: "28.july 2023" },
  {
    title: "TOPIA TWINS (feat. Rob49 & 21 Savage)",
    artist: "Travis Scott",
    dateAdded: "28.july 2023",
  },
  {
    title: "CIRCUS MAXIMUS (feat. The Weekend & Swae Lee)",
    artist: "Travis Scott, The Weekend, Swae Lee",
    dateAdded: "28.july 2023",
  },
  {
    title: "PARASAIL (feat. Young Lean & Dave Chappelle)",
    artist: "Travis Scott, Young Lean, Dave Chappelle",
    dateAdded: "28.july 2023",
  },
  {
    title: "SKITZO (feat. Young Thug)",
    artist: "Travis Scott, Young Thug",
    dateAdded: "28.july 2023",
  },
  {
    title: "LOST FOREVER (feat. Westside Gunn)",
    artist: "Travis Scott, Westside Gunn",
    dateAdded: "28.july 2023",
  },
  {
    title: "LOOOVE (feat. Kid Cudi)",
    artist: "Travis Scott, Kid Cudi",
    dateAdded: "28.july 2023",
  },
  {
    title: "K-POP (feat. Bad Bunny & The Weekend)",
    artist: "Travis Scott, Bad Bunny, The Weekend",
    dateAdded: "28.july 2023",
  },
  {
    title: "TELEKINISIS (feat. SZA & Future)",
    artist: "Travis Scott, SZA, Future",
    dateAdded: "28.july 2023",
  },
  {
    title: "TIL FURTHER NOTICE (feat. James Blake & 21 Savage)",
    artist: "Travis Scott, James Blake, 21 Savage",
    dateAdded: "28.july 2023",
  },
].map((song, index) => ({
  ...song,
  title: `${index + 1}. ${song.title}`,
}));

function ListDetailPageWithTree() {
  return (
    <div className="flex h-full w-full bg-spotify-black">
      <div className="spotify-sidebar w-64 flex-none flex-col items-start gap-2 self-stretch overflow-auto mobile:h-auto mobile:w-full">
        <div className="flex w-full items-center gap-2 pl-2 py-4 mb-6">
          <FeatherLibrary className="text-spotify-green" />
          <span className="grow text-lg font-bold text-spotify-white">
            Your Library
          </span>
          <IconButton
            className="hover:bg-spotify-darkgray"
            variant="brand-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
        </div>
        <TextField
          className="h-auto w-full flex-none mb-4"
          variant="filled"
          label=""
          helpText=""
          icon={<FeatherSearch className="text-spotify-lightgray" />}
        >
          <TextField.Input
            placeholder="Search"
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <TreeView className="mobile:hidden space-y-2">
          <TreeView.Item
            className="text-spotify-lightgray hover:text-spotify-white"
            label="Daily Discover"
            icon={<FeatherGlobe2 />}
          />
          <TreeView.Item
            className="text-spotify-lightgray hover:text-spotify-white"
            label="New Releases"
            icon={<FeatherStar />}
          />
          <TreeView.Item
            className="text-spotify-lightgray hover:text-spotify-white"
            label="Liked Songs"
            icon={<FeatherPin />}
          />
          <TreeView.Folder label="My Playlists">
            <TreeView.Item
              selected={true}
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Chill Vibes Only"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Morning Boost"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Late Night Grooves"
              icon={<FeatherListMusic />}
            />
          </TreeView.Folder>
          <TreeView.Folder className="h-40 w-full flex-none" label="Shared">
            <TreeView.Item
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Sunday Brunch Tunes"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Road Trip Jams"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item
              className="text-spotify-lightgray hover:text-spotify-white"
              label="Serotonin Sunrise"
              icon={<FeatherListMusic />}
            />
          </TreeView.Folder>
        </TreeView>
      </div>
      <div className="spotify-main flex-1 flex flex-col items-start gap-8 p-8">
        <div className="flex w-full items-end gap-6 mobile:flex-col mobile:items-center">
          <div className="spotify-card h-80 w-80 flex-none">
            <img className="w-full h-full object-cover" src="utopia.jpg" />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 mobile:items-center mobile:justify-start">
            <div className="flex w-full flex-col items-start gap-2 mobile:items-center mobile:justify-start">
              <span className="text-caption-bold font-caption-bold text-spotify-lightgray">
                Playlist
              </span>
              <span className="w-full text-[6rem] font-extrabold text-spotify-white mobile:text-center">
                UTOPIA
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <Avatar size={32} src="trav.jpg" />
                <span className="text-body-bold font-body-bold text-spotify-white">
                  Travis Scott
                </span>
              </div>
              <span className="text-body font-body text-spotify-lightgray">
                •
              </span>
              <span className="text-caption font-caption text-spotify-lightgray">
                19 songs
              </span>
              <span className="text-body font-body text-spotify-lightgray">
                •
              </span>
              <span className="text-caption font-caption text-spotify-lightgray">
                28.july 2023
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <IconButton
              className="spotify-button w-14 h-14 flex items-center justify-center"
              variant="brand-primary"
              size="large"
              icon={<FeatherPlay className="w-26 h-4" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              className="spotify-button w-14 h-14 flex items-center justify-center"
              variant="brand-tertiary"
              icon={<FeatherShuffle className="w-26 h-4" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              className="spotify-button w-14 h-14 flex items-center justify-center"
              variant="brand-tertiary"
              icon={<FeatherArrowDownCircle className="w-26 h-4" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  className="spotify-button w-14 h-14 flex items-center justify-center"
                  variant="brand-tertiary"
                  icon={<FeatherMoreHorizontal className="w-26 h-4" />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                      Share
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                      Rename
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                      Delete
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              size="small"
              icon={<FeatherSearch />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Sort
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={null}>
                      Title
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Artist
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Album
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Date added
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
        </div>
        <div className="w-full">
          <Table data={playlistData}>
            {playlistData.map((song, index) => (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.dateAdded}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ListDetailPageWithTree;
