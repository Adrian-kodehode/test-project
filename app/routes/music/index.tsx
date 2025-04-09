import React from "react";
// import { FeatherLibrary } from "@subframe/core";
// import { IconButton } from "@/ui/components/IconButton";
// import { TextField } from "@/ui/components/TextField";
// import { FeatherSearch } from "@subframe/core";
// import { TreeView } from "@/ui/components/TreeView";
// import { FeatherGlobe2 } from "@subframe/core";
// import { FeatherStar } from "@subframe/core";
// import { FeatherPin } from "@subframe/core";
// import { FeatherListMusic } from "@subframe/core";
// import { Avatar } from "@/ui/components/Avatar";
// import { FeatherPlay } from "@subframe/core";
// import { FeatherShuffle } from "@subframe/core";
// import { FeatherArrowDownCircle } from "@subframe/core";
// import { DropdownMenu } from "@/ui/components/DropdownMenu";
// import { FeatherShare } from "@subframe/core";
// import { FeatherEdit2 } from "@subframe/core";
// import { FeatherTrash } from "@subframe/core";
// import * as SubframeCore from "@subframe/core";
// import { FeatherMoreHorizontal } from "@subframe/core";
// import { Button } from "@/ui/components/Button";
// import { FeatherChevronDown } from "@subframe/core";
// import { Table } from "@/ui/components/Table";
// import { FeatherPlusCircle } from "@subframe/core";
// import { FeatherMinusCircle } from "@subframe/core";

function ListDetailPageWithTree() {
  return (
    <div className="flex h-full w-full items-start gap-12 bg-default-background px-12 py-12 mobile:flex-col mobile:flex-nowrap mobile:gap-12 mobile:px-6 mobile:py-6">
      <div className="flex w-64 flex-none flex-col items-start gap-2 self-stretch overflow-auto mobile:h-auto mobile:w-full mobile:flex-none">
        <div className="flex w-full items-center gap-2 pl-2 py-2">
          <FeatherLibrary className="text-heading-2 font-heading-2 text-default-font" />
          <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Your library
          </span>
          <IconButton
            variant="brand-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
        </div>
        <TextField
          className="h-auto w-full flex-none"
          variant="filled"
          label=""
          helpText=""
          icon={<FeatherSearch />}
        >
          <TextField.Input
            placeholder="Search"
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <TreeView className="mobile:hidden">
          <TreeView.Item label="Daily Discover" icon={<FeatherGlobe2 />} />
          <TreeView.Item label="New Releases" icon={<FeatherStar />} />
          <TreeView.Item label="Liked Songs" icon={<FeatherPin />} />
          <TreeView.Folder label="My Playlists">
            <TreeView.Item
              selected={true}
              label="Chill Vibes Only"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item label="Morning Boost" icon={<FeatherListMusic />} />
            <TreeView.Item
              label="Late Night Grooves"
              icon={<FeatherListMusic />}
            />
          </TreeView.Folder>
          <TreeView.Folder className="h-40 w-full flex-none" label="Shared">
            <TreeView.Item
              label="Sunday Brunch Tunes"
              icon={<FeatherListMusic />}
            />
            <TreeView.Item label="Road Trip Jams" icon={<FeatherListMusic />} />
            <TreeView.Item
              label="Serotonin Sunrise"
              icon={<FeatherListMusic />}
            />
          </TreeView.Folder>
        </TreeView>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch rounded-md bg-neutral-50 px-12 py-12 overflow-auto mobile:h-auto mobile:w-full mobile:flex-none mobile:rounded-none mobile:border-none mobile:bg-transparent mobile:px-0 mobile:py-0 mobile:shadow-none">
        <div className="flex w-full items-end gap-6 mobile:flex-col mobile:flex-nowrap mobile:items-center mobile:justify-start mobile:gap-6">
          <div className="flex h-40 w-40 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-md shadow-lg">
            <img
              className="w-full grow shrink-0 basis-0 object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1723780559/uploads/302/tkyvdicnwbc5ftuyysc0.png"
            />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 mobile:items-center mobile:justify-start">
            <div className="flex w-full flex-col items-start gap-2 mobile:items-center mobile:justify-start">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Playlist
              </span>
              <span className="w-full text-heading-1 font-heading-1 text-default-font mobile:text-center">
                Chill Vibes Only
              </span>
              <span className="line-clamp-1 w-full text-body font-body text-default-font mobile:text-center">
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
                <span className="text-body-bold font-body-bold text-default-font">
                  Emily
                </span>
              </div>
              <span className="text-body font-body text-subtext-color">•</span>
              <span className="text-caption font-caption text-subtext-color">
                7 songs
              </span>
              <span className="text-body font-body text-subtext-color">•</span>
              <span className="text-caption font-caption text-subtext-color">
                3 days ago
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <IconButton
              variant="brand-primary"
              size="large"
              icon={<FeatherPlay />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              variant="brand-tertiary"
              icon={<FeatherShuffle />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              variant="brand-tertiary"
              icon={<FeatherArrowDownCircle />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  variant="brand-tertiary"
                  icon={<FeatherMoreHorizontal />}
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
        <div className="flex w-full flex-col items-start gap-8 overflow-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Date added</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    1
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780655/uploads/302/vacffcy0kwezmeps1tbv.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      adore u
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      adore u
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Fred Again...
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    2
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780683/uploads/302/miu3qrdcodj27aeo9mu9.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Teenage Birdsong
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Sixteen Oceans
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Four Tet
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    3
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780611/uploads/302/lbaowphtt6gfvgjr10b4.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Curls
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Ribbons
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Bibio
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    4
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780751/uploads/302/cbaa1tfstfnmksus95et.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Say That
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Anything in Return
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Toro y Moi
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    6
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780577/uploads/302/hhmv6ey0yajkadnmcp0a.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      We Don&#39;t Wanna Talk
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Nowhere
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Friday Pilots Club
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    7
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780719/uploads/302/lf4i2zybfw9xxl56w6ce.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Time (You and I)
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Mordechai
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Khruangbin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    8
                  </span>
                  <Avatar
                    image="https://res.cloudinary.com/subframe/image/upload/v1723780859/uploads/302/hh4s5xjmsigiehqkb1uh.png"
                    square={true}
                  >
                    A
                  </Avatar>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Awake
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      Awake
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Tycho
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
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
