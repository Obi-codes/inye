import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import ModalRendering from "./ModalRendering";

const ModalRenderer = () => {
  const [open, setOpen] = useState(false);
  const [componentType, setComponentType] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (type) => {
    setComponentType(type);
    setOpen(true);
  };

  const renderComponent = () => {
    switch (componentType) {
      case "component1":
        return <ModalRendering />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Button onClick={() => handleOpen("component1")}>Open Modal 1</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>{renderComponent()}</DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalRenderer;
