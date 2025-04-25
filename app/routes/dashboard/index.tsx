import React from "react";
import { FeatherCoins } from "@subframe/core";
import { Button } from "app/components/dashboard/Button";
import { LinkButton } from "app/components/dashboard/Link-button";
import { IconWithBackground } from "app/components/dashboard/Icon-backgrond";
import { FeatherSettings } from "@subframe/core";
import { Badge } from "app/components/dashboard/Badge";
import { FeatherBriefcase } from "@subframe/core";
import { IconButton } from "app/components/dashboard/IconButton";
import { FeatherShare2 } from "@subframe/core";
import { FeatherBookmark } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherBuilding } from "@subframe/core";
import { FeatherCompass } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { Avatar } from "app/components/dashboard/Avatar";
import { FeatherArrowRight } from "@subframe/core";
import { TextFieldUnstyled } from "app/components/dashboard/TextFieldUnstyled";
import { FeatherCopy } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherXTwitter } from "@subframe/core";
import { FeatherSendHorizontal } from "@subframe/core";
import { FeatherSmilePlus } from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";

// import { DefaultPageLayout } from "app/components/crypto/DefaultPageLayout";
const DefaultPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="min-h-screen w-full bg-default-background">{children}</div>
);

function HomeDashboardWithCards() {
  return (
    <DefaultPageLayout>
      <div className="bg-white text-black flex h-full w-full flex-col items-start gap-12 px-12 py-12 overflow-auto">
        <div className="flex w-full flex-wrap items-center gap-4">
          <span className="grow shrink-0 basis-0 text-heading-1 font-heading-1 text-default-font">
            Hi, Alex!
          </span>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-3 self-stretch">
              <span className="text-body-bold font-body-bold text-default-font">
                Balance
              </span>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <div className="flex items-center gap-1">
                <FeatherCoins className="text-heading-2 font-heading-2 text-default-font" />
                <span className="text-heading-2 font-heading-2 text-default-font">
                  0
                </span>
              </div>
            </div>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Refer &amp; Earn
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start gap-6 rounded-md bg-brand-100 pl-12 pr-8 py-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 pr-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Welcome to
              </span>
              <span className="text-heading-1 font-heading-1 text-default-font">
                Subframe
              </span>
            </div>
            <span className="text-body font-body text-default-font">
              You know have full access to our network of job openings and
              thriving career help community.{" "}
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch rounded-md bg-default-background px-6 py-6">
            <span className="w-full grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              Find your next gig
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Browse jobs
            </Button>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch rounded-md bg-default-background px-6 py-6">
            <span className="w-full grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              Give and get career help
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Browse posts
            </Button>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch rounded-md bg-default-background px-6 py-6">
            <span className="w-full grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              Refer and earn
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Earn today
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-center gap-2">
            <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              Your newest matches
            </span>
            <LinkButton
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View all jobs
            </LinkButton>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-3">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch rounded-md bg-brand-50 px-6 py-6">
              <div className="flex w-full items-start gap-2">
                <IconWithBackground
                  size="large"
                  icon={<FeatherSettings />}
                  square={true}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Badge variant="warning" icon={<FeatherBriefcase />}>
                    Employee
                  </Badge>
                  <div className="flex items-start gap-1">
                    <IconButton
                      size="small"
                      icon={<FeatherShare2 />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                    Freelance Labs, Inc.
                  </span>
                  <span className="line-clamp-1 w-full text-body font-body text-default-font">
                    Enterprise Account Manager
                  </span>
                </div>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  $250k – 300k/yr
                </span>
                <div className="flex w-full flex-wrap items-start gap-6 gap-y-1.5">
                  <div className="flex items-center gap-2">
                    <FeatherCalendar className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      40 hrs/wk
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherMapPin className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      San Francisco, CA, USA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherClock className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      Any time zone
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch rounded-md bg-brand-50 px-6 py-6">
              <div className="flex w-full items-start gap-2">
                <IconWithBackground
                  size="large"
                  icon={<FeatherBuilding />}
                  square={true}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Badge variant="warning" icon={<FeatherBriefcase />}>
                    Employee
                  </Badge>
                  <div className="flex items-start gap-1">
                    <IconButton
                      size="small"
                      icon={<FeatherShare2 />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                    Freelance Labs, Inc.
                  </span>
                  <span className="line-clamp-1 w-full text-body font-body text-default-font">
                    Enterprise Account Manager
                  </span>
                </div>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  $250k – 300k/yr
                </span>
                <div className="flex w-full flex-wrap items-start gap-6 gap-y-1.5">
                  <div className="flex items-center gap-2">
                    <FeatherCalendar className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      40 hrs/wk
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherMapPin className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      San Francisco, CA, USA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherClock className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      Any time zone
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch rounded-md bg-brand-50 px-6 py-6">
              <div className="flex w-full items-start gap-2">
                <IconWithBackground
                  size="large"
                  icon={<FeatherCompass />}
                  square={true}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Badge variant="warning" icon={<FeatherBriefcase />}>
                    Employee
                  </Badge>
                  <div className="flex items-start gap-1">
                    <IconButton
                      size="small"
                      icon={<FeatherShare2 />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                    Freelance Labs, Inc.
                  </span>
                  <span className="line-clamp-1 w-full text-body font-body text-default-font">
                    Enterprise Account Manager
                  </span>
                </div>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  $250k – 300k/yr
                </span>
                <div className="flex w-full flex-wrap items-start gap-6 gap-y-1.5">
                  <div className="flex items-center gap-2">
                    <FeatherCalendar className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      40 hrs/wk
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherMapPin className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      San Francisco, CA, USA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FeatherClock className="text-caption font-caption text-default-font" />
                    <span className="text-caption font-caption text-default-font">
                      Any time zone
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-6 rounded-md bg-default-background px-6 py-6 shadow-md">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  I&#39;ve applied to
                </span>
                <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-3 py-3">
                  <div className="flex w-full items-center gap-1">
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-subtext-color">
                      Applied Oct 8
                    </span>
                    <Badge className="bg-red-600 text-white" variant="error">
                      On hold
                    </Badge>
                    <IconButton
                      size="small"
                      icon={<FeatherInfo />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                  <div className="flex w-full items-center gap-3">
                    <Avatar image="To Love Ru/tearju.jpg" square={true}>
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Subframe
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        Product Designer
                      </span>
                    </div>
                    <FeatherArrowRight className="text-heading-3 font-heading-3 text-subtext-color" />
                  </div>
                </div>
                <Button
                  className="h-8 w-full flex-none"
                  variant="neutral-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View all applications
                </Button>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-md bg-default-background px-6 py-6 shadow-md">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Get inspired by top talent
                </span>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-3 py-3">
                    <div className="flex w-full flex-col items-start gap-8">
                      <div className="flex h-16 w-full flex-none flex-col items-start relative">
                        <img
                          className="h-16 w-full flex-none rounded-md object-cover"
                          src="https://res.cloudinary.com/subframe/image/upload/v1723780878/uploads/302/mdjcme9tm4svgmkjv4zf.png"
                        />
                        <Avatar
                          className="absolute bottom-6 left-3"
                          size="large"
                          image="To Love Ru/rin.jpg"
                        >
                          A
                        </Avatar>
                      </div>
                      <div className="flex w-full flex-col items-start gap-1 px-3 pb-3">
                        <span className="text-body-bold font-body-bold text-default-font">
                          Subframe
                        </span>
                        <div className="flex items-center gap-2">
                          <FeatherMapPin className="text-caption font-caption text-default-font" />
                          <span className="text-caption font-caption text-default-font">
                            San Francisco, CA, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-3 py-3">
                    <div className="flex w-full flex-col items-start gap-8">
                      <div className="flex h-16 w-full flex-none flex-col items-start relative">
                        <img
                          className="h-16 w-full flex-none rounded-md object-cover"
                          src="https://res.cloudinary.com/subframe/image/upload/v1723780941/uploads/302/qgj6kevv14gw6i48bllb.png"
                        />
                        <Avatar
                          className="absolute bottom-6 left-3"
                          size="large"
                          image="To Love Ru/nemisis.jpg"
                        >
                          A
                        </Avatar>
                      </div>
                      <div className="flex w-full flex-col items-start gap-1 px-3 pb-3">
                        <span className="text-body-bold font-body-bold text-default-font">
                          Subframe
                        </span>
                        <div className="flex items-center gap-2">
                          <FeatherMapPin className="text-caption font-caption text-default-font" />
                          <span className="text-caption font-caption text-default-font">
                            Los Angeles, CA, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-md bg-brand-100 px-6 py-6">
                <div className="flex w-full flex-col items-start gap-4">
                  <span className="w-full text-heading-2 font-heading-2 text-brand-900">
                    Refer Clients &amp; Talent
                  </span>
                  <span className="text-body font-body text-brand-900">
                    Invite your network and earn rewards! Share your unique
                    referral link with potential clients and for every
                    successful sign-up, enjoy exclusive benefits as a part of
                    Subframe&#39;s appreciation program.
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-full bg-white px-4 py-3">
                  <TextFieldUnstyled className="h-auto grow shrink-0 basis-0">
                    <TextFieldUnstyled.Input
                      placeholder="https://app.subframe.com/dsgadgasdgsdgasdg"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextFieldUnstyled>
                  <IconButton
                    size="small"
                    icon={<FeatherCopy />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherMail />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Email
                  </Button>
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherLinkedin />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherXTwitter />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    X
                  </Button>
                </div>
                <span className="text-caption font-caption text-default-font">
                  Max $100k in credits per client and $10 in credits per talent.
                  Must sign up using referral link.
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 col-span-2">
              <div className="flex w-full flex-col items-start gap-6 rounded-md bg-default-background px-6 py-6">
                <div className="flex w-full items-center gap-6">
                  <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
                    Get career help from the community
                  </span>
                  <LinkButton
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View all posts
                  </LinkButton>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md bg-white px-4 py-4 shadow-md">
                  <Avatar image="To Love Ru/lala.jpg" size="large">
                    A
                  </Avatar>
                  <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                    Ask the community for help
                  </span>
                  <Button
                    iconRight={<FeatherSendHorizontal />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Post
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-6">
                  <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border">
                    <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-6 bg-gradient-to-b from-brand-100 to-white">
                      <Avatar size="x-large" image="To Love Ru/momo.jpg">
                        A
                      </Avatar>
                      <div className="flex max-w-[320px] flex-col items-center justify-center gap-2">
                        <span className="text-heading-2 font-heading-2 text-default-font text-center">
                          Big news from Momo! They&#39;ve just landed a new
                          role.
                        </span>
                        <span className="text-body font-body text-default-font text-center">
                          Share congratulations with them for starting a new
                          chapter.
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 px-3 pb-3">
                      <div className="flex w-full items-start gap-2">
                        <div className="flex grow shrink-0 basis-0 items-center gap-1">
                          <Button
                            variant="neutral-secondary"
                            size="small"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            ❤️
                          </Button>
                          <Button
                            variant="neutral-secondary"
                            size="small"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            👏
                          </Button>
                        </div>
                        <div className="flex items-start gap-1">
                          <Button
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherBookmark />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            2
                          </Button>
                          <IconButton
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherShare2 />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherSmilePlus />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-3">
                        <Avatar image="To Love Ru/nana.jpg" size="large">
                          A
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 items-center gap-2 rounded-md border border-solid border-neutral-border pl-3 pr-2 py-2">
                          <TextFieldUnstyled className="h-auto grow shrink-0 basis-0">
                            <TextFieldUnstyled.Input
                              placeholder="Post a reply..."
                              value=""
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {}}
                            />
                          </TextFieldUnstyled>
                          <Button
                            variant="neutral-primary"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                      <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full items-start gap-3">
                          <Avatar image="To Love Ru/yami.jpg">A</Avatar>
                          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                            <div className="flex items-start gap-2">
                              <span className="text-caption-bold font-caption-bold text-default-font">
                                Golden Darkenss
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                •
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                Community
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                •
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                1 day ago
                              </span>
                            </div>
                            <span className="w-full text-body font-body text-default-font">
                              Congratulations Momo!
                            </span>
                            <div className="flex items-start gap-2">
                              <Button
                                variant="brand-tertiary"
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              >
                                React
                              </Button>
                              <Button
                                variant="brand-tertiary"
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                          <IconButton
                            icon={<FeatherMoreHorizontal />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                        <div className="flex w-full items-start gap-3">
                          <Avatar image="To Love Ru/yami.jpg">A</Avatar>
                          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                            <div className="flex items-start gap-2">
                              <span className="text-caption-bold font-caption-bold text-default-font">
                                Golden Darkenss
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                •
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                Community
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                •
                              </span>
                              <span className="text-caption font-caption text-subtext-color">
                                1 day ago
                              </span>
                            </div>
                            <span className="w-full text-body font-body text-default-font">
                              Congratulations Nicolas!
                            </span>
                            <div className="flex items-start gap-2">
                              <Button
                                variant="brand-tertiary"
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              >
                                React
                              </Button>
                              <Button
                                variant="brand-tertiary"
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                          <IconButton
                            icon={<FeatherMoreHorizontal />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border">
                    <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-neutral-50 px-3 py-2">
                      <span className="text-caption font-caption text-default-font">
                        🔥
                      </span>
                      <span className="text-caption font-caption text-default-font">
                        Asking for 1:1 help
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <FeatherCoins className="text-caption-bold font-caption-bold text-default-font" />
                        <span className="text-caption-bold font-caption-bold text-default-font">
                          1 BTRST
                        </span>
                      </div>
                      <span className="text-body font-body text-default-font"></span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 px-3 py-3">
                      <div className="flex w-full items-center gap-3">
                        <Avatar size="large" image="To Love Ru/yami.jpg">
                          A
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 items-center gap-2">
                          <span className="text-body-bold font-body-bold text-default-font">
                            Golden Darkenss
                          </span>
                          <span className="text-caption font-caption text-subtext-color">
                            •
                          </span>
                          <span className="text-caption font-caption text-subtext-color">
                            Community
                          </span>
                          <span className="text-caption font-caption text-subtext-color">
                            •
                          </span>
                          <span className="text-caption font-caption text-subtext-color">
                            1 day ago
                          </span>
                        </div>
                        <IconButton
                          icon={<FeatherMoreHorizontal />}
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        />
                      </div>
                      <Badge variant="warning" icon={<FeatherFileText />}>
                        Portfolio + Resume help
                      </Badge>
                      <div className="flex w-full flex-col items-start gap-2 pb-3">
                        <span className="text-heading-2 font-heading-2 text-default-font">
                          Latest AI models
                        </span>
                        <span className="w-full text-body font-body text-default-font">
                          Subframe&#39;s latest AI models revolutionize the SaaS
                          landscape by leveraging cutting-edge machine learning
                          techniques. These models deliver unparalleled
                          efficiency and precision, empowering businesses to
                          optimize processes, predict trends, and enhance
                          decision-making like never before.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 px-3 pb-3">
                      <div className="flex w-full items-start gap-2">
                        <div className="flex grow shrink-0 basis-0 items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="neutral-secondary"
                              size="small"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              ❤️
                            </Button>
                            <span className="text-caption font-caption text-default-font">
                              5
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="neutral-secondary"
                              size="small"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              👏
                            </Button>
                            <span className="text-caption font-caption text-default-font">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Button
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherBookmark />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            2
                          </Button>
                          <IconButton
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherShare2 />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherSmilePlus />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-3">
                        <Avatar image="To Love Ru/nana.jpg">A</Avatar>
                        <div className="flex grow shrink-0 basis-0 items-center gap-2 rounded-md border border-solid border-neutral-border pl-3 pr-2 py-2">
                          <TextFieldUnstyled className="h-auto grow shrink-0 basis-0">
                            <TextFieldUnstyled.Input
                              placeholder="Post a reply..."
                              value=""
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {}}
                            />
                          </TextFieldUnstyled>
                          <Button
                            variant="neutral-primary"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View all posts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default HomeDashboardWithCards;
