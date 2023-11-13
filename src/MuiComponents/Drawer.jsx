import { Divider, Drawer } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const Drawerr = ({
  drawerWidth,
  setmood,
  noneORblock,
  drawerType,
  hideDrawer,
}) => {
  const theme = useTheme();
  const currentLocation = useLocation();

  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },

        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer();
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );

              setmood(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              currentLocation.pathname === "/"
                ? // @ts-ignore
                  theme.palette.favColor.grey
                : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              currentLocation.pathname === "/create"
                ? // @ts-ignore
                  theme.palette.favColor.grey
                : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
