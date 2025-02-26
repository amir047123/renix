import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { CiWarning } from "react-icons/ci";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export default function WarningModal({ open, setOpen, onConfirm }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-center gap-4 mb-10 text-red-500">
            <CiWarning size={80} />
          </div>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Are you sure you want to delete this?
          </Typography>
          <div className="flex items-center justify-center gap-8 mt-10">
            <Button variant="contained" color="error" onClick={onConfirm}>
              Confirm
            </Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
