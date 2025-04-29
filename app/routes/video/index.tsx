import React, { useState } from "react";
import { Dialog } from "app/components/video/DialogLayout";
import { IconButton } from "app/components/video/IconButton";
import { Progress } from "app/components/video/Progress";
import { Button } from "app/components/video/Button";
import { DropdownMenu } from "app/components/video/DropdownMenu";
import { TextField } from "app/components/video/TextField";
import { ChatTranscript } from "app/components/video/ChatTranscript";
import { Badge } from "app/components/video/Badge";
import { FeatherText } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { FeatherMaximize } from "@subframe/core";
import { FeatherPause } from "@subframe/core";
import { FeatherVolume2 } from "@subframe/core";
import { FeatherSubtitles } from "@subframe/core";
import { FeatherAirplay } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import { FeatherArrowDownCircle } from "@subframe/core";

function VideoPlayerWithChatTranscript() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex h-full w-full flex-col items-start gap-8 bg-default-background px-8 py-8">
        <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-12">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full flex-col items-start gap-6">
              <img
                className="h-full w-full flex-none rounded-md object-cover"
                src="One Piece/one-piece-gear-5.gif"
              />
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
              <div className="flex items-center gap-1">
                <IconButton
                  size="small"
                  icon={<FeatherPause />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  size="small"
                  icon={<FeatherVolume2 />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  0:32
                </span>
                <Progress />
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  -4:09
                </span>
              </div>
              <div className="flex items-center justify-end gap-1">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  1x
                </Button>
                <IconButton
                  size="small"
                  icon={<FeatherSubtitles />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  size="small"
                  icon={<FeatherAirplay />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      size="small"
                      icon={<FeatherMaximize />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
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
                        <DropdownMenu.DropdownItem icon={<FeatherText />}>
                          More options
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-none flex-col items-start gap-6 self-stretch">
            <div className="flex w-full items-center justify-between">
              <TextField
                variant="filled"
                label=""
                helpText=""
                icon={<FeatherSearch />}
              >
                <TextField.Input
                  placeholder="Search in meeting..."
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <IconButton
                icon={<FeatherX />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex min-h-[384px] w-full grow shrink-0 basis-0 flex-col items-start gap-4 pr-4 overflow-auto">
              <ChatTranscript
                timestamp="0:01"
                name="Momo Belia Deviluke"
                text="Hey there."
                image="To Love Ru/momo.jpg"
              />
              <ChatTranscript
                timestamp="0:10"
                name="Lala Satalin Deviluke"
                text="Are you ready to kick this off straight away?"
                image="To Love Ru/lala.jpg"
              />
              <ChatTranscript
                timestamp="0:54"
                name="Momo Belia Deviluke"
                text="Yes, let's do it"
                image="To Love Ru/momo.jpg"
                current={true}
              />
              <ChatTranscript
                timestamp="1:01"
                name="Lala Satalin Deviluke"
                text="Nice."
                image="To Love Ru/lala.jpg"
              />
              <ChatTranscript
                timestamp="2:52"
                name="Lala Satalin Deviluke"
                text="As I mentioned, the purpose of today's session is to give you an understanding of how Sana AI can support you in your sales role."
                image="To Love Ru/lala.jpg"
              />
              <ChatTranscript
                timestamp="3:21"
                name="Lala Satalin Deviluke"
                text="As I mentioned, the purpose of today's session is to give you an understanding of how Sana AI can support you in your sales role."
                image="To Love Ru/lala.jpg"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <Badge variant="neutral" icon={<FeatherArrowDownCircle />}>
                Scroll for more
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default VideoPlayerWithChatTranscript;
