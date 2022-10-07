import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "store";

export default function ScrollDialog(props) {
  const dispatch = useDispatch();
  const { show, title, text } = useSelector((state) => state.showDialog);

  const handleClose = () => {
    console.log("close");
    dispatch(closeDialog());
  };

  return (
    <div>
      {show}
      <Dialog open={show} onClose={handleClose} scroll="paper" fullWidth={true}>
        {title.length !== 0 && (
          <DialogTitle
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></DialogTitle>
        )}

        <DialogContent
          sx={{ maxHeight: "70vw" }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></DialogContent>
        <DialogActions>
          <Button size="small" onClick={() => handleClose()}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
