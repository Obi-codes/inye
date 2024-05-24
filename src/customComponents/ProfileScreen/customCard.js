import React from "react";
import { colorSchema } from "@/utils/color";
import { Box, Card, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const CustomCard = ({
  sxStyle,
  title = "",
  titleStyle,
  headerStyle,
  contentStyle,
  children,
  ...rest
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sxStyle,
        backgroundColor: colorSchema.innerBackground,
        mt: "2vw",
        borderRadius: "20px",
      }}
      {...rest}
    >
      {title ? (
        <CardHeader
          sx={{
            px: 6,
            pb: 0,
            "& .MuiCardHeader-action": {
              marginTop: 0,
              marginRight: 0,
            },
            "& .MuiCardHeader-content": {
              overflow: "hidden",
            },
            ...headerStyle,
          }}
          title={
            typeof title === "object" ? (
              title
            ) : (
              <Box
                component="h3"
                sx={{
                  color: "text.primary",
                  fontWeight: "bold",
                  fontSize: 16,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                  ...titleStyle,
                }}
              >
                {title}
              </Box>
            )
          }
        />
      ) : null}
      <CardContent
        sx={{
          height: "100%",
          px: 6,
          "&:last-of-type": {
            pb: 4,
          },
          ...contentStyle,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
