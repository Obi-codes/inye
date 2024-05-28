import React from "react";
import CustomCard from "../ProfileScreen/customCard";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import style from "./createproject.module.css";
import { colorSchema } from "@/utils/color";
import { useRouter } from "next/navigation";

const CreateProject = ({
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

  const handleSave = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <div className={style.main}>
      <div className={style.subMain}>
        <span className={style.inye}>INYE</span>
        <span className={style.tagLine}>(Invest, Nurture, Yield Equity)</span>
        <CustomCard
          sxStyle={{
            minWidth: "900px",
            fontFamily: "SF Pro Display",
          }}
          title={
            <Button
              onClick={() => handleBack()}
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: "18px",
                height: "32px",
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
                fontSize: "40px",
                fontWeight: 800,
                letterSpacing: "-1.2px",
              }}
            >
              Create Project Profile
            </Typography>
            <Typography
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: 24,
                fontWeight: 400,
                letterSpacing: "-0.72px",
                opacity: 0.7,
                color: "white",
              }}
            >
              Please enter the details to register an account
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "600px",
                mt: "1vw",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"Project Name"}
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
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
                    border: "1px solid",
                    borderColor: "white",
                  },
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"organization Title"}
                name="orgTitle"
                // value={formData.orgTitle}
                // onChange={handleInputChange}
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
                    border: "1px solid",
                    borderColor: "white",
                  },
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"Display Picture"}
                name="picture"
                // value={formData.picture}
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
                    border: "1px solid",
                    borderColor: "white",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        color: colorSchema.main,
                      }}
                    >
                      Upload
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"Project Description"}
                name="desc"
                // value={formData.desc}
                multiline={true}
                rows={4}
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
                    border: "1px solid",
                    borderColor: "white",
                  },
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
                    fontSize: "18px",
                    borderRadius: "25px",
                    minWidth: 200,
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

export default CreateProject;
