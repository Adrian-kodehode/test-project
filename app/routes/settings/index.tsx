import React, { useState } from "react";
import { SettingsMenu } from "app/components/settings/SettingsMenu";
import { FeatherLock } from "@subframe/core";
import { FeatherBellRing } from "@subframe/core";
import { FeatherCreditCard } from "@subframe/core";
import { FeatherShapes } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { Button } from "app/components/settings/Button";
import { FeatherUpload } from "@subframe/core";
import { TextField } from "app/components/settings/TextField";
import { Alert } from "app/components/settings/Alert";

function AccountSettings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  return (
    <div className=" bg-white text-black flex h-full w-full items-start mobile:flex-col mobile:flex-nowrap mobile:gap-0">
      <SettingsMenu className="mobile:w-full mobile:grow mobile:shrink-0 mobile:basis-0">
        <span className="w-full text-heading-3 font-heading-3 text-default-font">
          Settings
        </span>
        <div className="flex w-full flex-col items-start gap-2 ">
          <span className="w-full text-body-bold font-body-bold text-default-font">
            Personal
          </span>
          <div className="flex w-full flex-col items-start gap-1 ">
            <SettingsMenu.Item selected={true} label="Account" />
            <SettingsMenu.Item icon={<FeatherLock />} label="API Keys" />
            <SettingsMenu.Item
              icon={<FeatherBellRing />}
              label="Notifications"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <span className="w-full text-body-bold font-body-bold text-default-font">
            Workspace
          </span>
          <div className="flex w-full flex-col items-start gap-1">
            <SettingsMenu.Item icon={<FeatherCreditCard />} label="Billing" />
            <SettingsMenu.Item icon={<FeatherShapes />} label="Integrations" />
            <SettingsMenu.Item icon={<FeatherUser />} label="Team Members" />
          </div>
        </div>
      </SettingsMenu>
      <div className="container max-w-none flex grow shrink-0 basis-0 flex-col items-center gap-6 self-stretch bg-white text-black py-12 shadow-sm">
        <div className="flex w-full max-w-[576px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Account
            </span>
            <span className="w-full text-body font-body text-subtext-color">
              Update your profile and personal details here
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Profile
            </span>
            <div className="flex w-full flex-col items-start gap-4">
              <span className="text-body-bold font-body-bold text-default-font">
                Avatar
              </span>
              <div className="flex items-center gap-4">
                <img
                  className="h-32 w-32 flex-none object-cover [clip-path:circle()]"
                  src="Chainsaw Man/asaface.jpg"
                />
                <div className="flex flex-col items-start gap-2">
                  <Button
                    variant="neutral-secondary"
                    icon={<FeatherUpload />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Upload
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    For best results, upload an image 512x512 or larger.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4">
              <TextField
                className="h-auto grow shrink-0 basis-0"
                label="First name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Asa"
                  value={firstName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(event.target.value);
                  }}
                />
              </TextField>
              <TextField
                className="h-auto grow shrink-0 basis-0"
                label="Last name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Mitaka"
                  value={lastName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setLastName(event.target.value);
                  }}
                />
              </TextField>
            </div>
            <div className="flex w-full items-center gap-4">
              <TextField
                className="h-auto grow shrink-0 basis-0"
                label="Email"
                helpText=""
              >
                <TextField.Input
                  placeholder="asa-mitaka@gmail.com"
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                />
              </TextField>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
          <div className="flex w-full flex-col items-start gap-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Password
            </span>
            <TextField
              className="h-auto w-full flex-none"
              label="Current password"
              helpText=""
            >
              <TextField.Input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCurrentPassword(event.target.value);
                }}
              />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              label="New password"
              helpText="Your password must have at least 8 characters, include one uppercase letter, and one number."
            >
              <TextField.Input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNewPassword(event.target.value);
                }}
              />
            </TextField>
            <TextField className="h-auto w-full flex-none" label="" helpText="">
              <TextField.Input
                type="password"
                placeholder="Re-type new password"
                value={retypePassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setRetypePassword(event.target.value);
                }}
              />
            </TextField>
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Change password
              </Button>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
          <div className="flex w-full flex-col items-start gap-6">
            <span className="text-heading-3 font-heading-3 text-red-600">
              Danger Zone
            </span>
            <Alert
              className="border border-red-600 bg-red-50 text-red-700 p-4 rounded-md"
              variant="error"
              icon={null}
              title="Delete account"
              description="Permanently remove your account. This action is not reversible."
              actions={
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white mt-3 px-4 py-2 rounded-md"
                  variant="destructive-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete your account? This action cannot be undone."
                      )
                    ) {
                      console.log("Account deletion confirmed.");
                    }
                  }}
                >
                  Delete account
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
