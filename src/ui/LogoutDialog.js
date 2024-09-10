/** @format */

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const LogoutDialog = ({ open, handleOpen, handleConfirm }) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            You are Logging Out
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 h-40 w-40 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <Typography color="red" variant="h4">
            Are you sure ? You really want to leave!!!
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="green" onClick={handleOpen}>
            Nah just kidding
          </Button>
          <Button
            color="red"
            onClick={() => {
              handleConfirm();
              handleOpen();
            }}
          >
            Yes i am leaving
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default LogoutDialog;
