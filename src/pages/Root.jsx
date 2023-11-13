import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Appbar from "../MuiComponents/Appbar";
import Drawerr from "../MuiComponents/Drawer";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blue, grey } from "@mui/material/colors";

const drawerWidth = 240;
const Root = () => {
  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");
  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };
  const [mode, setmood] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode

            favColor: {
              main: blue[700],
              hover: blue[600],
              grey: grey[300],
            },
          }
        : {
            // palette values for dark mode

            favColor: {
              main: grey[700],
              hover: grey[600],
              grey: grey[600],
            },
          }),
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
        <Drawerr
          drawerWidth={drawerWidth}
          setmood={setmood}
          noneORblock={noneORblock}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />
        <Box
          sx={{
            ml: { xs: 0, sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
