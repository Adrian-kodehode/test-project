import React from "react";
import { Avatar } from "app/components/discover/Avatar";
import { FeatherVerified } from "@subframe/core";
import { IconButton } from "app/components/discover/IconButton";
import { FeatherLink } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { Tabs } from "app/components/discover/Tabs";
import { Button } from "app/components/discover/Button";
import { FeatherListFilter } from "@subframe/core";
import { FeatherArrowUpDown } from "@subframe/core";
import { TextField } from "app/components/discover/TextField";
import { FeatherSearch } from "@subframe/core";
import { FeatherBookmark } from "@subframe/core";
import { FeatherStar } from "@subframe/core";
import { Badge } from "app/components/dashboard/Badge";

function CollectionListPageWithCards() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-white text-black py-12 overflow-auto">
      <div className="flex w-full flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start gap-4 relative">
          <img
            className="h-60 w-full flex-none rounded-md object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1723780577/uploads/302/hhmv6ey0yajkadnmcp0a.png"
          />
          <div className="flex flex-col items-start gap-4 rounded-full border-2 border-solid border-default-background shadow-lg absolute left-4 -bottom-4">
            <Avatar size="x-large" image="Chainsaw Man/cmfamine.jpg">
              A
            </Avatar>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-heading-1 font-heading-1 text-default-font">
                The Subframe Collection
              </span>
              <FeatherVerified className="text-heading-2 font-heading-2 text-brand-700" />
            </div>
            <div className="flex items-center">
              <IconButton
                icon={<FeatherLink />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon={<FeatherLinkedin />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon={<FeatherInstagram />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-12">
            <div className="flex flex-col items-start">
              <span className="text-caption font-caption text-subtext-color">
                Location
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                San Francisco, CA
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-caption font-caption text-subtext-color">
                Since
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                Oct 22, 2023
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-caption font-caption text-subtext-color">
                Available Items
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                6
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-caption font-caption text-subtext-color">
                Sales
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                32
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6">
        <Tabs>
          <Tabs.Item active={true}>Items</Tabs.Item>
          <Tabs.Item>Activity</Tabs.Item>
        </Tabs>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Button
            variant="neutral-secondary"
            icon={<FeatherListFilter />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Filter
          </Button>
          <Button
            variant="neutral-secondary"
            icon={<FeatherArrowUpDown />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Sort by price (high to low)
          </Button>
          <TextField label="" helpText="" icon={<FeatherSearch />}>
            <TextField.Input
              placeholder="Search"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover"
                src="Chainsaw Man/makima.jpg"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Sony
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#1234</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                PS-F5 Vertical Turntable
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover"
                src="One Piece/onepiecevol104.jpg"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Braun
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#1846</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                Pocket Radio
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover"
                src="Chainsaw Man/Asa_ecstatic_over_Denji_complime.jpg"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Bang &amp; Olufsen
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#0925</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                Beogram 4000 Turntable
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover object-top"
                src="To Love Ru/toloveru.jpg"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Dieter Rams
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#9575</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                606 Universal Shelving System
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover"
                src="To Love Ru/goldendarkness.jpg"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Olivetti
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#8567</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                Valentine Typewriter
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start relative">
              <img
                className="h-60 w-full flex-none border-b border-solid border-neutral-border object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780624/uploads/302/sxocuez05safdpfaztiz.png"
              />
              <IconButton
                className="absolute left-2 top-2"
                variant="inverse"
                icon={<FeatherBookmark />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Polaroid
                  </span>
                  <FeatherStar className="text-body font-body text-default-font" />
                </div>
                <Badge variant="neutral">#0533</Badge>
              </div>
              <span className="line-clamp-3 text-heading-3 font-heading-3 text-default-font">
                SX-70 Land Camera
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionListPageWithCards;
