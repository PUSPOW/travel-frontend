/** @format */

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const CostumDialog = ({ open, handleOpen, handleConfirm }) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure ?</DialogHeader>
        <DialogBody>You want to order ?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleConfirm();
              handleOpen();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CostumDialog;
