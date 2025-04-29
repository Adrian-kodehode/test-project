"use client";

import React from "react";
import * as SubframeCore from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";

interface ListingSelectRootProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

const ListingSelectRoot = React.forwardRef<HTMLElement, ListingSelectRootProps>(
  function ListingSelectRoot(
    { label, value, className, ...otherProps }: ListingSelectRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/480d03ec flex w-full cursor-pointer items-start gap-2 px-5 py-4 hover:bg-neutral-100 active:bg-neutral-200",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
          {label ? (
            <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
              {label}
            </span>
          ) : null}
          <div className="flex w-full items-start gap-2">
            {value ? (
              <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                {value}
              </span>
            ) : null}
            <FeatherChevronDown className="text-heading-3 font-heading-3 text-default-font" />
          </div>
        </div>
      </div>
    );
  }
);

export const ListingSelect = ListingSelectRoot;
