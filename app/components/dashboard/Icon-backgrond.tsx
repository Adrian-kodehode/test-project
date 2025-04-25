import React from "react";
import * as SubframeCore from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { Sub } from "@subframe/core/dist/cjs/components/radix/context-menu";

interface IconWithBackgroundRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "neutral" | "success" | "warning" | "error";
  size?: "x-large" | "large" | "medium" | "small" | "x-small";
  icon: React.ReactNode;
  square?: boolean;
  className?: string;
}

const IconWithBackgroundRoot = React.forwardRef<
  HTMLDivElement,
  IconWithBackgroundRootProps
>(function IconWithBackgroundRoot(
  {
    variant = "brand",
    size = "x-small",
    icon = <FeatherCheck />,
    square = false,
    className,
    ...otherProps
  }: IconWithBackgroundRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/c5d68c0e flex h-5 w-5 items-center justify-center gap-2 rounded-full bg-brand-100",
        {
          "rounded-md": !square,
          "h-6 w-6": size === "small",
          "h-8 w-8": size === "medium",
          "h-12 w-12": size === "large",
          "h-16 w-16": size === "x-large",
          "bg-waring-100": variant === "warning",
          "bg-error-100": variant === "error",
          "bg-success-100": variant === "success",
          "bg-neutral-100": variant === "neutral",
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeCore.twClassNames(
            "font-['Inter'] text-[10px] font-[400] leading-[12px] text-brand-800",
            {
              "text-caption font-caption": size === "small",
              "text-body font-body": size === "medium",
              "text-heading-2 font-heading-2": size === "large",
              "text-heading-1 font-heading-3": size === "x-large",
              "text-warning-800": variant === "warning",
              "text-error-800": variant === "error",
              "text-success-800": variant === "success",
              "text-neutral-700": variant === "neutral",
            }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
    </div>
  );
});

export const IconWithBackground = IconWithBackgroundRoot;
