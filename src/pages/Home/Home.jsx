import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);

  let totalPrice = 0;
  return (
    <Box sx={{ mt: "60px" }}>
      {mydata.map((item) => {
        totalPrice += item.price;

        return (
          <Paper
            elevation={3}
            sx={{
              width: { xs: "300px", sm: "370px", md: "550px" },
              mt: "20px",
              padding: " 10px 50px 20px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                mt: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6"> {item.title}</Typography>
              <Typography variant="h6"> ${item.price}</Typography>
            </Box>
            <IconButton
              aria-label=""
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
              sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                color: "#e63946",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>
    </Box>
  );
}
