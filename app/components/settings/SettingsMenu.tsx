import React from "react";
import * as SubframeCore from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { Sub } from "@subframe/core/dist/cjs/components/radix/context-menu";

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  seleccted?: boolean;
  icon?: React.ReactNode;
  lable?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    selected = false,
    icon = <FeatherUser />,
    label,
    className,
    ...otherprops
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/cd4ad3a1 flex h-8 w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1 hover:bg-default-background active:bg-brand-50",
        { "bg-brand-100 hover:bg-brand-100 active:bg-brand-50": selected },
        className
      )}
      ref={ref as any}
      {...otherprops}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeCore.twClassNames(
            "text-body font-body text-default-font",
            { "text-brand-700": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {label ? (
        <span
          className={SubframeCore.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-body font-body text-default-font",
            {
              "text-body-bold font-body-bold text-brand-700 group-hover/cd4ad3a1:text-brand-700 group-active/cd4ad3a1:text-brand-700":
                selected,
            }
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
});

interface SettingsMenuRootProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SettingsMenuRoot = React.forwardRef<
  HTMLDivElement,
  SettingsMenuRootProps
>(function SettingsMenuRoot(
  { children, className, ...otherprops }: SettingsMenuRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeCore.twClassNames(
        "group/786775dd flex h-full w-60 flex-col items-start gap-8 border-r border-solid border-neutral-border bg-default-background px-6 py-6",
        className
      )}
      ref={ref as any}
      {...otherprops}
    >
      {children}
    </div>
  ) : null;
});

export const SettingsMenu = Object.assign(SettingsMenuRoot, {
  Item,
});
