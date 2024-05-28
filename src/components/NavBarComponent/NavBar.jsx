"use client";
import React, { useState } from "react";
import {
  InputAdornment,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import menuIcon from "/public/assets/menuIcon.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotesIcon from "@mui/icons-material/Notes";
import ProfileImage from "../../../public/assets/Profil.png";
import { useRouter } from "next/navigation";
import CustomImage from "@/customComponents/ImageComp";
import { colorSchema } from "@/utils/color";
import searchOptionImage from "../../../public/assets/searchbar-option.png";
import Sidebar from "../SidebarDrawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0.7vw",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(40),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    display: "flex",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      width: "45ch",
    },
  },
}));

export default function NavBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setDrawerOpen(true);
  };

  const handleMobileMenuOpen = (e) => {
    setDrawerOpen(true);
  };

  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        backgroundColor: colorSchema.back,
      }}
    >
      <Box sx={{ width: "90%" }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ backgroundColor: "#141316" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomImage
                src={menuIcon}
                width={35}
                height={35}
                alt="menu"
                unoptimized={false}
                key={"menu"}
                onClick={() => router.push("/")}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: {
                    sm: "block",
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                  },
                }}
              >
                INYE
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize="64" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label ": "search" }}
                endAdornment={
                  <InputAdornment position="end">
                    <Box sx={{ display: "flex", gap: 2.5 }}>
                      <span
                        style={{
                          width: "1.5px",
                          height: "18px",
                          backgroundColor: "white",
                          opacity: 0.24,
                        }}
                      />
                      <CustomImage
                        src={searchOptionImage}
                        alt={"option"}
                        height={12}
                        width={18}
                        unoptimized={false}
                        key={"option"}
                      />
                    </Box>
                  </InputAdornment>
                }
              />
            </Search>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  gap: 16,
                },
              }}
            >
              <IconButton
                size="medium"
                aria-label="notifications"
                color="inherit"
                sx={{
                  backgroundColor: colorSchema.innerBackground,
                  borderRadius: "10px",
                }}
              >
                <NotificationsNoneIcon />
              </IconButton>
              <IconButton
                size="medium"
                aria-label="notes"
                color="inherit"
                sx={{
                  backgroundColor: colorSchema.innerBackground,
                  borderRadius: "10px",
                }}
              >
                <NotesIcon />
              </IconButton>
              <CustomImage
                src={ProfileImage}
                width={40}
                height={4}
                alt="user"
                unoptimized={true}
                key={"user"}
                onClick={handleProfileMenuOpen}
                style={{
                  borderRadius: "50%",
                  borderColor: colorSchema.main,
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
