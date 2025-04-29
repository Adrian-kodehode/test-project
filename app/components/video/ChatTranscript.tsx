

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "app/components/video/Avatar";

interface ChatTranscriptRootProps extends React.HTMLAttributes<HTMLDivElement> {
  timestamp?: React.ReactNode;
  name?: React.ReactNode;
  text?: React.ReactNode;
  image?: string;
  current?: boolean;
  className?: string;
}

const ChatTranscriptRoot = React.forwardRef<
  HTMLElement,
  ChatTranscriptRootProps
>(function ChatTranscriptRoot(
  {
    timestamp,
    name,
    text,
    image,
    current = false,
    className,
    ...otherProps
  }: ChatTranscriptRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/0417c960 flex w-full items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-16 flex-none items-center gap-2">
        <Avatar size="x-small" image={image}>
          A
        </Avatar>
        {timestamp ? (
          <span
            className={SubframeCore.twClassNames(
              "text-caption-bold font-caption-bold text-subtext-color",
              { "text-default-font": current }
            )}
          >
            {timestamp}
          </span>
        ) : null}
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 pt-0.5">
        {name ? (
          <span
            className={SubframeCore.twClassNames(
              "text-caption-bold font-caption-bold text-subtext-color",
              { "text-default-font": current }
            )}
          >
            {name}
          </span>
        ) : null}
        {text ? (
          <span
            className={SubframeCore.twClassNames(
              "w-full text-body font-body text-subtext-color",
              { "text-default-font": current }
            )}
          >
            {text}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const ChatTranscript = ChatTranscriptRoot;
