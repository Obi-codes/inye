"use client";
import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import menuIcon from "/public/assets/menuIcon.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotesIcon from "@mui/icons-material/Notes";
import ProfileImage from "../../../public/assets/Profile.png";
import { useRouter } from "next/navigation";
import CustomImage from "@/customComponents/ImageComp";
import { colorSchema } from "@/utils/color";
import searchOptionImage from "../../../public/assets/searchbar-option.png";
import Sidebar from "../SidebarDrawer";

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
      <Box sx={{
        width: "90%", boxShadow: "none",
        border: "none",
        outline: "none",
      }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            border: "none",
            outline: "none",
          }}
        >
          <Toolbar sx={{ backgroundColor: "#141316" }}>
            <Box sx={{ display: "flex", gap: 2, mr: 2, width: {md: 1, lg: 1, xl: 1, xxl: 1} }}>
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
                  display: "block",
                  fontFamily: "Barlow Condensed",
                  fontWeight: 700,
                }}
              >
                INYE
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  xxl: "flex",
                },
              }}
            />
            <TextField
              placeholder='Search'
              type="text"
              variant="outlined"
              fullWidth
              size="small"
              sx={{
                display: 'flex',
                color: 'white',
                opacity: 0.7,
                fontFamily: "SF Pro Display",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "-0.36px",
                textColor: "white",
                outline: 'none',
                border: "1px solid rgba(255, 255, 255, 0.15)",
                width: { xs: "45vw", sm: "65vw", md: "100%" },
                justifyContent: "space-between",
                backgroundColor: colorSchema.innerBackground,
                mr: 2,
                borderRadius: "0.5vw",
                '&:hover': {
                  border: "1px solid #FFCE21",
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFCE21',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFCE21',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputAdornment-root': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                  opacity: 0.7,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{
                    color: "white"
                  }}>
                    <SearchIcon fontSize="64" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        color: 'white',
                      }}
                    >
                      <span
                        style={{
                          width: "1.5px",
                          height: "18px",
                          backgroundColor: "white",
                          opacity: 0.24,
                          color: 'white',
                        }}
                      />
                      <CustomImage
                        src={searchOptionImage}
                        alt={"option"}
                        height={10}
                        width={16}
                        unoptimized={true}
                        key={"option"}
                      />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
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
