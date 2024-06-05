"use client";
import React from "react";
import { Box, Drawer, List, Typography } from "@mui/material";
import { colorSchema } from "@/utils/color";
import CustomImage from "@/customComponents/ImageComp";
import CutIcon from "../../../public/assets/times-square.png";
import UserIcon from "../../../public/assets/user.png";
import ProjectsIcon from "../../../public/assets/folder.png";
import AccountsIcon from "../../../public/assets/users.png";
import BankAccountIcon from "../../../public/assets/inbox.png";
import ListItems from "./listItem";

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const authUser =
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage?.getItem("inyeUserData"));

  const listArray = [
    {
      id: 1,
      title: "Edit Admin Profile",
      mainImage: UserIcon,
      alt: "user",
      link: "/signup",
    },
    {
      id: 2,
      title: "Edit Projects",
      mainImage: ProjectsIcon,
      alt: "projects",
      link: "/createproject",
    },
    {
      id: 3,
      title: "Switch Accounts",
      mainImage: AccountsIcon,
      alt: "accounts",
    },
    {
      id: 4,
      title: "Connect Bank Account",
      mainImage: BankAccountIcon,
      alt: "bank_account",
    },
  ];

  const personsListArray = [
    {
      id: 1,
      title: "Edit Profile",
      mainImage: UserIcon,
      alt: "user",
      link: "/signup",
    },
    {
      id: 2,
      title: "Connect Bank Account",
      mainImage: BankAccountIcon,
      alt: "bank_account",
    },
    {
      id: 3,
      title: "Switch Accounts",
      mainImage: AccountsIcon,
      alt: "accounts",
    },
  ];

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      sx={{
        backdropFilter: "blur(3px)",
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
        },
      }}
      variant="temporary"
      about="sidebar"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: 170, sm: 220, md: 450, lg: 460, xl: 475, xxl: 485 },
          height: "100%",
          backgroundColor: colorSchema.innerBackground,
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            p: 4,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 22, md: 40 },
              letterSpacing: "-1.2px",
              fontWeight: 800,
              color: "white",
              fontFamily: "SF Pro Display",
            }}
          >
            Menu
          </Typography>
          <CustomImage
            src={CutIcon}
            alt="cut"
            width={26}
            height={2}
            unoptimized={true}
            key={"cut"}
            onClick={toggleDrawer(false)}
            style={{
              cursor: "pointer",
              width: { xs: '4px', sm: '6px', md: '8px' },
              height: { xs: '4px', sm: '6px', md: '8px' },
            }}
          />
        </Box>
        <List sx={{
          fontSize: { xs: 6, sm: 8, md: 20 },
        }}>
          <ListItems
            array={authUser?.type === "admin" ? listArray : personsListArray}
          />
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
