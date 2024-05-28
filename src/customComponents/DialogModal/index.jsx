import React from "react";
import { Dialog, Slide, DialogContent } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogModal = ({
  sxStyle,
  maxWidth = "sm",
  open,
  onClose,
  children,
  dividers = false,
}) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          borderRadius: "0.5vw",
          p: 0,
          m: 0,
          overflow: "hidden",
          outline: "none",
          border: "none",
          backgroundColor: "#1F2027",
        },
        "& .MuiDialogContent-root": {
          overflow: "hidden",
          outline: "none",
          border: "none",
          height: "100%",
          p: 0,
          m: 0,
          borderRadius: "0.5vw",
          backgroundColor: "#1F2027",
        },
        ...sxStyle,
      }}
      maxWidth={maxWidth}
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <DialogContent dividers={dividers}>{children}</DialogContent>
    </Dialog>
  );
};
export default DialogModal;
