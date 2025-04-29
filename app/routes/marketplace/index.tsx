import React from "react";
import { FeatherStar } from "@subframe/core";
import { Button } from "app/components/Marketplace/Button";
import { LinkButton } from "app/components/Marketplace/LinkButton";
import { ListingSelect } from "app/components/Marketplace/ListingSelect";
import { Avatar } from "app/components/marketplace/Avatar";
import { FeatherShare } from "@subframe/core";
import { FeatherHeart } from "@subframe/core";
import { FeatherAward } from "@subframe/core";
import { FeatherLampDesk } from "@subframe/core";
import { FeatherDoorOpen } from "@subframe/core";
import { FeatherCalendarDays } from "@subframe/core";
import { FeatherBedDouble } from "@subframe/core";
import { FeatherSofa } from "@subframe/core";
import { FeatherTv2 } from "@subframe/core";
import { FeatherCigarette } from "@subframe/core";
import { FeatherAccessibility } from "@subframe/core";
import { FeatherAirVent } from "@subframe/core";
import { FeatherWifi } from "@subframe/core";
import { FeatherGem } from "@subframe/core";
import { FeatherFlag } from "@subframe/core";
import { FeatherVerified } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherExternalLink } from "@subframe/core";
import { FeatherPhone } from "@subframe/core";

function MarketplaceListDetail() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pl-5 py-12">
      <div className="flex w-full flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full items-end gap-1">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
              <span className="w-full text-heading-2 font-heading-2 text-default-font">
                Cozy room in a wooded oasis
              </span>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    4.95
                  </span>
                </div>
                <span className="text-caption font-caption text-default-font">
                  •
                </span>
                <span className="text-caption font-caption text-default-font">
                  506 reviews
                </span>
                <span className="text-caption font-caption text-default-font">
                  •
                </span>
                <span className="text-caption font-caption text-default-font">
                  Mill Valley, California
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-primary"
                icon={<FeatherShare className="text-black" />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                className="bg-white hover:bg-gray-300 text-black"
              >
                Share
              </Button>
              <Button
                variant="neutral-primary"
                icon={<FeatherHeart className="text-black" />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                className="bg-white hover:bg-gray-300 text-black"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="w-full items-start gap-2 overflow-hidden rounded-md relative grid grid-cols-2 mobile:flex-col mobile:flex-nowrap mobile:gap-2">
            <Button
              className="absolute right-4 bottom-4 bg-white/90 hover:bg-white text-black"
              variant="neutral-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Show all photos
            </Button>
            <div className="flex items-center justify-center gap-2 h-full">
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover bg-cover bg-center bg-no-repeat"
                src="Chainsaw Man/asayoru.jpg"
              />
            </div>
            <div className="items-start gap-2 grid grid-cols-2 grid-rows-2">
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover bg-cover bg-center bg-no-repeat"
                src="Jujutsu Kaisen/gojo2.jpg"
              />
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover bg-cover bg-center bg-no-repeat"
                src="To Love Ru/yami2.jpg"
              />
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover bg-cover bg-center bg-no-repeat"
                src="To Love Ru/goldendarkness.jpg"
              />
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover bg-cover bg-center bg-no-repeat"
                src="Chainsaw Man/cmfamine.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex flex-wrap items-start gap-16">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Entire rental unit in Mill Valley, California
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-body font-body text-default-font">
                    2 guests
                  </span>
                  <span className="text-caption font-caption text-default-font">
                    •
                  </span>
                  <span className="text-body font-body text-default-font">
                    1 bedroom
                  </span>
                  <span className="text-caption font-caption text-default-font">
                    •
                  </span>
                  <span className="text-body font-body text-default-font">
                    1 bed
                  </span>
                  <span className="text-caption font-caption text-default-font">
                    •
                  </span>
                  <span className="text-body font-body text-default-font">
                    1 bath
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-12">
                <div className="flex w-full items-center gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
                  <div className="flex grow shrink-0 basis-0 items-center justify-center gap-2">
                    <FeatherAward className="text-heading-2 font-heading-2 text-default-font" />
                    <span className="whitespace-pre-wrap text-body-bold font-body-bold text-default-font text-center">
                      {"Guest favorite"}
                    </span>
                  </div>
                  <div className="flex h-8 w-px flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      4.95
                    </span>
                    <div className="flex items-center">
                      <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                      <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                      <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                      <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                      <FeatherStar className="text-body-bold font-body-bold text-default-font" />
                    </div>
                  </div>
                  <div className="flex h-8 w-px flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      492
                    </span>
                    <span className="text-caption-bold font-caption-bold text-default-font underline">
                      Reviews
                    </span>
                  </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
                  <Avatar size="large" image="To Love Ru/momo.jpg">
                    A
                  </Avatar>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Hosted by Momo Belia Deviluke
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Superhost
                    </span>
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                  <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center gap-4">
                      <FeatherLampDesk className="text-heading-2 font-heading-2 text-default-font" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Dedicated workspace
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        A common area with wifi that’s well-suited for working.
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center gap-4">
                      <FeatherDoorOpen className="text-heading-2 font-heading-2 text-default-font" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Self check-in
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Check yourself in with the lockbox.
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center gap-4">
                      <FeatherCalendarDays className="text-heading-2 font-heading-2 text-default-font" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Free cancellation before March 4
                      </span>
                      <span className="text-caption font-caption text-subtext-color" />
                    </div>
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                <div className="flex flex-col items-start gap-6">
                  <span className="text-body font-body text-default-font">
                    If you enjoyed Sleepless in Seattle or The Last Thing He
                    Told Me come and experience it yourself on this beautiful,
                    tranquil floating home with private deck and dramatic bay
                    views. Perfect space to unwind, relax and enjoy the ever
                    changing views and. beautiful sunrises from the comfort of
                    your bed. Close to Sausalito, San Francisco, Golden Gate
                    recreation area, Pt Reyes Seashore, Mt. Tam, Muir Woods,
                    Angel Island, hiking, biking, kayaking, restaurants,
                    galleries, shops and concerts .
                  </span>
                  <LinkButton
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show more
                  </LinkButton>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                <div className="flex w-full flex-col items-start gap-6">
                  <span className="w-full text-heading-3 font-heading-3 text-default-font">
                    Where you&#39;ll sleep
                  </span>
                  <div className="flex w-full flex-wrap items-start gap-4 mobile:flex-col mobile:flex-wrap mobile:gap-4">
                    <div className="flex max-w-[192px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
                      <FeatherBedDouble className="text-heading-2 font-heading-2 text-default-font" />
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-body-bold font-body-bold text-default-font">
                          Bedroom
                        </span>
                        <span className="text-caption font-caption text-default-font">
                          1 queen bed
                        </span>
                      </div>
                    </div>
                    <div className="flex max-w-[192px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
                      <FeatherSofa className="text-heading-2 font-heading-2 text-default-font" />
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-body-bold font-body-bold text-default-font">
                          Living Room
                        </span>
                        <span className="text-caption font-caption text-default-font">
                          1 sofa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                <div className="flex w-full flex-col items-start gap-6">
                  <span className="w-full text-heading-3 font-heading-3 text-default-font">
                    What&#39;s included
                  </span>
                  <div className="flex w-full items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                      <div className="flex w-full items-start gap-4">
                        <FeatherBedDouble className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Bedroom
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-4">
                        <FeatherTv2 className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Television
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-4">
                        <FeatherCigarette className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Smoke detector
                        </span>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                      <div className="flex w-full items-start gap-4">
                        <FeatherAccessibility className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Wheelchair accessible
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-4">
                        <FeatherAirVent className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Air conditioning
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-4">
                        <FeatherWifi className="text-heading-2 font-heading-2 text-default-font" />
                        <span className="text-body font-body text-default-font">
                          Wifi
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="neutral-secondary"
                    size="large"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show all amenities
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex min-w-[288px] max-w-[384px] grow shrink-0 basis-0 flex-col items-center gap-6 mobile:h-auto mobile:min-w-[288px] mobile:grow mobile:shrink-0 mobile:basis-0">
              <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg">
                <div className="flex items-end gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    $200
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    night
                  </span>
                </div>
                <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl border border-solid border-neutral-border">
                  <ListingSelect
                    label="Dates"
                    value="Dec 3 – Dec 9"
                    className="hover:bg-gray-900"
                  />
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                  <ListingSelect
                    label="Guests"
                    value="2 people"
                    className="hover:bg-gray-900"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <Button
                    className="h-10 w-full flex-none"
                    size="large"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Reserve
                  </Button>
                  <span className="w-full text-caption font-caption text-default-font text-center">
                    You won&#39;t be charged yet
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font underline">
                      $200 x 5 nights
                    </span>
                    <span className="text-body font-body text-default-font">
                      $1,000
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font underline">
                      Cleaning fee
                    </span>
                    <span className="text-body font-body text-default-font">
                      $50
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font underline">
                      Service fee
                    </span>
                    <span className="text-body font-body text-default-font">
                      $150
                    </span>
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                <div className="flex w-full items-center justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Total before taxes
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    $1,200
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
                <FeatherGem className="text-heading-1 font-heading-1 text-brand-700" />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    This is a rare find
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Felicity&#39;s place is usually fully booked.
                  </span>
                </div>
              </div>
              <Button
                variant="neutral-tertiary"
                icon={<FeatherFlag />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Report this listing
              </Button>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
          <div className="flex flex-col items-start gap-8">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Reviews
            </span>
            <div className="flex flex-col items-start gap-12">
              <div className="flex items-start gap-16 mobile:flex-col mobile:flex-nowrap mobile:gap-16">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
                  <div className="flex w-full items-center gap-2">
                    <Avatar size="medium" image="To Love Ru/nana.jpg">
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Nana Astar Deviluke
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Windsor, California
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div className="flex items-center">
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                    </div>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      2 weeks ago
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Stayed a few nights
                    </span>
                  </div>
                  <span className="line-clamp-3 w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      "Felicity’s place is very unique. It’s minimalistic and streamlined. Check in was clear and easy. The place and especially the bathroom was clean and had nice amenities."
                    }
                  </span>
                  <LinkButton
                    variant="neutral"
                    icon={null}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show more
                  </LinkButton>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
                  <div className="flex w-full items-center gap-2">
                    <Avatar size="medium" image="To Love Ru/lala.jpg">
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Lala Satalin Deviluke
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Los Angeles, California
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div className="flex items-center">
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                    </div>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      3 weeks ago
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Stayed a few nights
                    </span>
                  </div>
                  <span className="line-clamp-3 w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      'I recently had the pleasure of staying at "The Urban Oasis," and it far exceeded my expectations! The apartment was located in the heart of the city, offering easy access to local attractions, dining, and nightlife.'
                    }
                  </span>
                  <LinkButton
                    variant="neutral"
                    icon={null}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show more
                  </LinkButton>
                </div>
              </div>
              <div className="flex items-start gap-16 mobile:flex-col mobile:flex-nowrap mobile:gap-16">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
                  <div className="flex w-full items-center gap-2">
                    <Avatar size="medium" image="To Love Ru/yui.jpg">
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Kotegawa Yui
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        New York, New York
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div className="flex items-center">
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                    </div>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      1 month ago
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Stayed a week
                    </span>
                  </div>
                  <span className="line-clamp-3 w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      "Nestled in the mountains, this cabin was the perfect getaway for our family. The surroundings were simply stunning, offering serene beauty and a plethora of outdoor activities right at our doorstep."
                    }
                  </span>
                  <LinkButton
                    variant="neutral"
                    icon={null}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show more
                  </LinkButton>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
                  <div className="flex w-full items-center gap-2">
                    <Avatar size="medium" image="To Love Ru/mikan.jpg">
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Yūki Mikan
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Chicago, Illinois
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div className="flex items-center">
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                      <FeatherStar className="text-monospace-body font-monospace-body text-default-font" />
                    </div>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      3 months ago
                    </span>
                    <span className="text-caption font-caption text-default-font">
                      •
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Stayed a night
                    </span>
                  </div>
                  <span className="line-clamp-3 w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      "The view of the ocean from the balcony was breathtaking, and the proximity to the beach was unbeatable. The apartment itself was spacious and well-equipped, making our stay very comfortable."
                    }
                  </span>
                  <LinkButton
                    variant="neutral"
                    icon={null}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Show more
                  </LinkButton>
                </div>
              </div>
            </div>
            <Button
              variant="neutral-secondary"
              size="large"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Show all reviews
            </Button>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
          <div className="flex w-full flex-col items-start gap-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Location
            </span>
            <img
              className="w-full flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417576/shared/bsa3eonjzvhxusz9aqgr.png"
            />
            <div className="flex w-full flex-col items-start gap-2">
              <span className="w-full whitespace-pre-wrap text-body-bold font-body-bold text-default-font">
                {"Mill Valley, California, United States"}
              </span>
              <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                {
                  "Floating apartment surrounded by a parade of wildlife including ducks, geese, egrets, blue herons and pelicans floating or flying by. Awaken to a beautiful sunrise from the comfort of your bed or your deck.\n"
                }
              </span>
              <LinkButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Show more
              </LinkButton>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full items-center gap-4">
              <Avatar
                size="large"
                image="To Love Ru/momo.jpg"
              >
                A
              </Avatar>
              <div className="flex flex-col items-start gap-1">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Hosted by Momo Belia Deviluke
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Joined in January 2013
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-start gap-16 mobile:flex-col mobile:flex-wrap mobile:gap-16">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
                <div className="flex items-start gap-6 mobile:flex-row mobile:flex-wrap mobile:gap-6">
                  <div className="flex items-center gap-2">
                    <FeatherStar className="text-body font-body text-default-font" />
                    <span className="text-body-bold font-body-bold text-default-font">
                      120 reviews
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherVerified className="text-body font-body text-default-font" />
                    <span className="text-body-bold font-body-bold text-default-font">
                      Identity verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherAward className="text-body font-body text-default-font" />
                    <span className="text-body-bold font-body-bold text-default-font">
                      Superhost
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="w-full whitespace-pre-wrap text-body-bold font-body-bold text-default-font">
                    {"During your stay\n"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      "You have total privacy and I am available to answer questions you may have about the area and you can always call me. I live on the property in a private separate area.\n"
                    }
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="w-full whitespace-pre-wrap text-body-bold font-body-bold text-default-font">
                    {"Felicity is a Superhost\n"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {
                      "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.\n"
                    }
                  </span>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-6">
                <div className="flex max-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
                  <span className="text-body font-body text-default-font">
                    Response rate: 100%
                  </span>
                  <span className="text-body font-body text-default-font">
                    Response time: within an hour
                  </span>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Contact host
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex grow shrink-0 basis-0 items-start gap-4">
              <FeatherMapPin className="text-heading-2 font-heading-2 text-default-font" />
              <div className="flex flex-col items-start gap-1 pt-0.5">
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  Address
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                    {"490 Pacific Avenue\nSan Francisco, CA 94133"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 items-start gap-4">
              <FeatherExternalLink className="text-heading-2 font-heading-2 text-default-font" />
              <div className="flex flex-col items-start gap-1 pt-0.5">
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  Website
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-body font-body text-default-font">
                    www.cotognasf.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 items-start gap-4">
              <FeatherPhone className="text-heading-2 font-heading-2 text-default-font" />
              <div className="flex flex-col items-start gap-1 pt-0.5">
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  Phone
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-body font-body text-default-font">
                    +1 (415) 775-8508
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceListDetail;
