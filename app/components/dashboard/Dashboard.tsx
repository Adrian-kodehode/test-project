import React, { ReactNode } from "react";

type DefaultPageLayoutProps = {
  children: ReactNode;
};

export const DefaultPageLayout = ({ children }: DefaultPageLayoutProps) => (
  <div style={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
    {children}
  </div>
);

import { Button } from "app/components/dashboard/Button";
import { IconWithBackground } from "app/components/dashboard/Icon-backgrond";
import { FeatherCalendarCheck } from "@subframe/core";
import { FeatherReceipt } from "@subframe/core";
import { FeatherUploadCloud } from "@subframe/core";
import { FeatherCreditCard } from "@subframe/core";
import { FeatherCheckCheck } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import { FeatherAlarmClock } from "@subframe/core";
import { FeatherWrench } from "@subframe/core";
import { FeatherPieChart } from "@subframe/core";
import { FeatherBrush } from "@subframe/core";
import { Avatar } from "app/components/dashboard/Avatar";

function DashboardWithTiles() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-12">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Dashboard
          </span>
          <span className="w-full text-body-bold font-body-bold text-subtext-color">
            Monday, January 4
          </span>
        </div>
        <div className="flex w-full flex-wrap items-start gap-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full flex-col items-start gap-2 pl-6 pr-3 py-4">
                <div className="flex w-full items-center gap-2">
                  <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                    To-do
                  </span>
                  <Button
                    variant="brand-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View all
                  </Button>
                </div>
              </div>
              <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex w-full flex-col items-start px-2 py-2">
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    size="medium"
                    icon={<FeatherCalendarCheck />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Review requests
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Approve new requests in your inbox
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Today
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground size="medium" icon={<FeatherReceipt />} />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Process invoices
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      You have 1 to review
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Today
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    size="medium"
                    icon={<FeatherUploadCloud />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Upload additional documents{" "}
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      We need a few more details
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Today
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    size="medium"
                    icon={<FeatherCreditCard />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Set up a payment method
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Avoid delaying invoices and payments
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Yesterday
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    size="medium"
                    icon={<FeatherCheckCheck />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Finish verification
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Verify your account securely
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Yesterday
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full items-center gap-2 pl-6 pr-4 py-4">
                <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  Upcoming events
                </span>
                <Button
                  variant="brand-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View all
                </Button>
              </div>
              <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex w-full flex-col items-start px-2 py-2">
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    variant="error"
                    size="medium"
                    icon={<FeatherCalendar />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Department Offsite
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Monday, Nov 13, 2023
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    All-day
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    variant="error"
                    size="medium"
                    icon={<FeatherCalendar />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Quarterly Review
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Tuesday, Nov 3, 2023
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    9:00 AM
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 px-4 py-4">
                  <IconWithBackground
                    variant="error"
                    size="medium"
                    icon={<FeatherCalendar />}
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      Project kick-off
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Monday, Nov 13, 2023
                    </span>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    3:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full items-center gap-2 pl-6 pr-3 py-4">
                <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  Updates
                </span>
                <Button
                  variant="brand-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View all
                </Button>
              </div>
              <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex w-full flex-col items-start gap-4 px-4 py-4">
                <div className="flex w-full items-center gap-4 rounded-md bg-brand-50 px-4 py-4">
                  <div className="flex h-8 w-8 flex-none items-center justify-center">
                    <FeatherUsers className="text-heading-3 font-heading-3 text-brand-700" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      5 new members
                    </span>
                    <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
                      1 onboarding now
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md bg-error-100 px-4 py-4">
                  <div className="flex h-8 w-8 flex-none items-center justify-center">
                    <FeatherAlarmClock className="text-heading-3 font-heading-3 text-error-700" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                      3 reminders
                    </span>
                    <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
                      2 overdue
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full items-start gap-2 pl-6 pr-3 py-4">
                <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  Departments
                </span>
                <Button
                  variant="brand-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View all
                </Button>
              </div>
              <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex w-full flex-col items-start px-4 py-4">
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <div className="flex h-8 w-8 flex-none items-center justify-center">
                    <FeatherWrench className="text-heading-3 font-heading-3 text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Engineering
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    12
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <div className="flex h-8 w-8 flex-none items-center justify-center">
                    <FeatherPieChart className="text-heading-3 font-heading-3 text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Product
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    5
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <div className="flex h-8 w-8 flex-none items-center justify-center">
                    <FeatherBrush className="text-heading-3 font-heading-3 text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Design
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full items-center gap-2 pl-6 pr-3 py-4">
                <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  Recently joined
                </span>
                <Button
                  variant="brand-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View all
                </Button>
              </div>
              <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                    A
                  </Avatar>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Abigail
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Oct 24
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg">
                    A
                  </Avatar>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Jonah
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Nov 5
                  </span>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md px-2 py-2">
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg">
                    A
                  </Avatar>
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    Michael
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Nov 23
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default DashboardWithTiles;
