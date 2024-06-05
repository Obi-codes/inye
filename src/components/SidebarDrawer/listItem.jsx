import React, { Fragment } from "react";
import CustomImage from "@/customComponents/ImageComp";
import { Box, ListItem, Typography } from "@mui/material";
import RightArrow from "../../../public/assets/rightarrow.png";
import {useRouter} from "next/navigation";

const ListItems = ({ array }) => {
  const router = useRouter();
  return (
    <Fragment>
      {array?.map((item, i) => (
        <ListItem
          key={`${item.id}.${i}`}
          sx={{
            p: { xs: 2, sm: 2.5, md: 4 },
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
          onClick={() => {
            item?.link && router?.push(item?.link);
            console.log(item.link);
          } }
        >
          <Box sx={{display: 'flex', justifyContent: "flex-start", alignItems: 'center'}}>
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgba(255, 206, 33, 0.03)",
              p: { xs: 0.5, sm: 0.75, md: 1 },
              mr: { xs: 2, sm: 2.5, md: 4 },
            }}
          >
            <CustomImage
              src={item.mainImage}
              alt={item.alt}
              width={22}
              height={22}
              unoptimized={true}
            />
          </Box>
          <Typography   
          sx={{
            color: "white",
            fontSize: { xs: 10, sm: 12, md: 18 },
            fontWeight: { xs: 250, sm: 300, md: 400 },
            letterSpacing: "-0.6px",
            fontFamily: "SF Pro Display",
            }}>
              {item.title}
            </Typography>
            </Box>
          {/* <ListItemText
            primary={item.title}
            suppressContentEditableWarning={true}
            suppressHydrationWarning={true}
            style={{
              fontSize: { xs: 4, sm: 6, md: 18 },
              fontWeight: { xs: 250, sm: 300, md: 400 },
            }}
            sx={{
              color: "white",
              fontSize: { xs: 4, sm: 6, md: 18 },
              fontWeight: { xs: 250, sm: 300, md: 400 },
              letterSpacing: "-0.6px",
              fontFamily: "SF Pro Display",
            }}
          /> */}
          <CustomImage
            src={RightArrow}
            alt={"arrow"}
            width={22}
            height={22}
            unoptimized={true}
          />
        </ListItem>
      ))}
    </Fragment>
  );
};

export default ListItems;
