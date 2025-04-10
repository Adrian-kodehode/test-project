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
          <div className="spotify-card h-48 w-48 flex-none shadow-xl">
            <img className="w-full h-full object-cover" src="utopia.jpg" />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 mobile:items-center mobile:justify-start">
            <div className="flex w-full flex-col items-start gap-2 mobile:items-center mobile:justify-start">
              <span className="text-caption-bold font-caption-bold text-spotify-lightgray">
                Playlist
              </span>
              <span className="w-full text-heading-1 font-heading-1 text-spotify-white mobile:text-center">
                UTOPIA
              </span>
              <span className="line-clamp-1 w-full text-body font-body text-spotify-lightgray mobile:text-center">
                Laid-back tracks, expertly curated
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <Avatar
                  size="small"
                  image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                >
                  A
                </Avatar>
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
              icon={<FeatherPlay className="w-6 h-6" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              className="spotify-button w-14 h-14 flex items-center justify-center"
              variant="brand-tertiary"
              icon={<FeatherShuffle className="w-6 h-6" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              className="spotify-button w-14 h-14 flex items-center justify-center"
              variant="brand-tertiary"
              icon={<FeatherArrowDownCircle className="w-6 h-6" />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  className="spotify-button w-14 h-14 flex items-center justify-center"
                  variant="brand-tertiary"
                  icon={<FeatherMoreHorizontal className="w-6 h-6" />}
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
          <Table className="w-full">
            <Table.HeaderRow className="border-b border-spotify-darkgray text-spotify-lightgray">
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Artist</Table.HeaderCell>
              <Table.HeaderCell>Date added</Table.HeaderCell>
            </Table.HeaderRow>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    1
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780655/uploads/302/vacffcy0kwezmeps1tbv.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      adore u
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      adore u
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Fred Again...
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  1 hour ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    2
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780683/uploads/302/miu3qrdcodj27aeo9mu9.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      Teenage Birdsong
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Sixteen Oceans
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Four Tet
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  1 day ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    3
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780611/uploads/302/lbaowphtt6gfvgjr10b4.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      Curls
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Ribbons
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Bibio
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  1 day ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    4
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780751/uploads/302/cbaa1tfstfnmksus95et.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      Say That
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Anything in Return
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Toro y Moi
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  3 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    6
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780577/uploads/302/hhmv6ey0yajkadnmcp0a.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      We Don&#39;t Wanna Talk
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Nowhere
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Friday Pilots Club
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  5 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    7
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780719/uploads/302/lf4i2zybfw9xxl56w6ce.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      Time (You and I)
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Mordechai
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Khruangbin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  1 week ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-spotify-lightgray text-center">
                    8
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780859/uploads/302/hh4s5xjmsigiehqkb1uh.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-spotify-white">
                      Awake
                    </span>
                    <span className="text-caption font-caption text-spotify-lightgray">
                      Awake
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  Tycho
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-spotify-lightgray">
                  2 weeks ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <IconButton
                        icon={<FeatherMoreHorizontal />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="end"
                        sideOffset={8}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <DropdownMenu.DropdownItem icon={<FeatherShare />}>
                            Share
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem>
                            Favorite
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherPlusCircle />}
                          >
                            Add to playlist
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem
                            icon={<FeatherMinusCircle />}
                          >
                            Remove
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ListDetailPageWithTree;
