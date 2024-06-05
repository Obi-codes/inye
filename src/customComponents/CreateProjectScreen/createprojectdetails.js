import React, { useState } from "react";
import style from "./createproject.module.css";
import CustomCard from "../ProfileScreen/customCard";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { colorSchema } from "@/utils/color";
import DiscountImage from "../../../public/assets/discount.png";
import Image from "next/image";

const CreateProjectDetails = ({
  setActiveStep,
  formData,
  setFormData,
  activeStep,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (activeStep === 0) {
      router.push("/signup");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const detailsArray = [
    {
      id: 1,
      heading: "Project Deadline",
      sub: " When should the project end",
      options: [
        {
          id: 1,
          slug: "In 3 Months",
          value: 3,
        },
        {
          id: 2,
          slug: "In 6 Months",
          value: 6,
        },
      ],
    },
    {
      id: 2,
      heading: "Project Outline",
      sub: "How it should be funded",
      options: [
        {
          id: 1,
          slug: "Monthly",
          value: "monthly",
        },
        {
          id: 2,
          slug: "Yearly",
          value: "yearly",
        },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (detailId, optionId) => {
    setSelectedOptions((prev) => ({ ...prev, [detailId]: optionId }));
  };

  const handleSave = () => {
    router.push("/");
  };

  return (
    <div className={style.main}>
      <div className={style.subMain}>
        <span className={style.inye}>INYE</span>
        <span className={style.tagLine}>(Invest, Nurture, Yield Equity)</span>
        <CustomCard
          sxStyle={{
            minWidth: { xs: 300, sm: 450, md: 900 },
            fontFamily: "SF Pro Display",
          }}
          title={
            <Button
              onClick={handleBack}
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: { xs: 10, sm: 14, md: 32 },
                height: { xs: 20, sm: 24, md: 30 },
                fontWeight: 500,
                color: "white",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              {"< Back"}
            </Button>
          }
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 16, sm: 20, md: 40 },
                fontWeight: 800,
                letterSpacing: "-1.2px",
              }}
            >
              Project Details
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: { xs: 260, sm: 350, md: 600 },
                mt: { xs: "2vw", sm: "1.5vw", md: "1vw" },
              }}
            >
              {detailsArray.map((item, i) => (
                <Box key={`${item.id}.${i}`}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: 12, sm: 14, md: 30 },
                        fontWeight: 800,
                        letterSpacing: "-0.9px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        color: "white",
                        fontSize: { xs: 10, sm: 12, md: 16 },
                        fontWeight: 400,
                        letterSpacing: "-0.48px",
                        opacity: 0.7,
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      {item.sub}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "column", md: "row" },
                      width: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    {item.options.map((data, i) => (
                      <Box
                        key={`${data.id}.${i}`}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.75,
                          fontFamily: "SF Pro Display",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            visibility: i === 1 ? "visible" : "hidden",
                            justifyContent: "right",
                            alignItems: "flex-end",
                            textAlign: "right",
                            fontSize: { xs: 8, sm: 10, md: 16 },
                            fontWeight: 400,
                            letterSpacing: "-0.48px",
                            color: colorSchema.main,
                          }}
                        >
                          *Select One
                        </Box>
                        <Button
                          variant="contained"
                          onClick={() => handleOptionSelect(item.id, data.id)}
                          sx={{
                            backgroundColor:
                              selectedOptions[item.id] === data.id
                                ? colorSchema.main
                                : "grey",
                            p: { xs: 1, sm: 1, md: 2 },
                            borderRadius: "10px",
                            color:
                              selectedOptions[item.id] === data.id
                                ? colorSchema.blackShade
                                : colorSchema.whiteShade,
                            minWidth: { xs: 100, sm: 120, md: 285 },
                            fontSize: { xs: 10, sm: 12, md: 24 },
                            letterSpacing: "-0.72px",
                            fontWeight: 400,
                            fontFamily: "SF Pro Display",
                            "&:hover": {
                              backgroundColor: colorSchema.main,
                            },
                          }}
                        >
                          {data.slug}
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: 12, sm: 14, md: 30 },
                    fontWeight: 800,
                    letterSpacing: "-0.9px",
                  }}
                >
                  Fund Goals
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "white",
                    fontSize: { xs: 10, sm: 12, md: 16 },
                    fontWeight: 400,
                    letterSpacing: "-0.48px",
                    opacity: 0.7,
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Enter [Monthly/Yearly] Goal
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"$00.00"}
                sx={{
                  width: 1,
                  color: "white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 0.7,
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    opacity: 0.7,
                    borderRadius: "12px",
                    border: "1px solid white",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image
                        src={DiscountImage}
                        alt="discount"
                        unoptimized={false}
                        style={{
                          height: 25,
                          width: 25,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ width: 1, display: "flex" }}>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    backgroundColor: colorSchema.main,
                    color: "black",
                    fontWeight: 700,
                    fontSize: { xs: 10, sm: 12, md: 18 },
                    borderRadius: "25px",
                    minWidth: { xs: "100%", sm: "100%", md: 200 },
                    p: 1,
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </CustomCard>
      </div>
    </div>
  );
};

export default CreateProjectDetails;
