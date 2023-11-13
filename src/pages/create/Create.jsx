import React from "react";
import { Box } from "@mui/material";
import "./Create.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlashOnRounded } from "@mui/icons-material";

function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: theme.palette.favColor.main,
    "&:hover": {
      backgroundColor: theme.palette.favColor.hover,
    },
  }));
  return (
    <Box
      sx={{
        mt: "160px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <TextField
        fullWidth
        label="Transaction Title"
        variant="filled"
        autoComplete="off"
        onChange={(eo) => {
          settitle(eo.target.value);
        }}
      />
      <TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        autoComplete="off"
        fullWidth
        label="Amount"
        variant="filled"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <ColorButton
        onClick={(params) => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/");
          });
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit
      </ColorButton>
    </Box>
  );
}

export default Create;
