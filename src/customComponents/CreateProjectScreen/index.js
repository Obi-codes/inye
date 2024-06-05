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
            minWidth: { xs: 360, sm: 450, md: 900 },
            fontFamily: "SF Pro Display",
          }}
          title={
            <Button
              onClick={() => handleBack()}
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: { xs: 8, sm: 10, md: 32 },
                height: { xs: 18, sm: 20, md: 30 },
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
                fontSize: { xs: 18, sm: 20, md: 40 },
                fontWeight: 800,
                letterSpacing: "-1.2px",
              }}
            >
              Create Project Profile
            </Typography>
            <Typography
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: { xs: 12, sm: 16, md: 24 },
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
                gap: { xs: 2.5, sm: 2.25, md: 2 },
                width: { xs: 260, sm: 360, md: 600 },
                mt: { xs: "2.5vw", sm: "2vw", md: "1vw" },
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"Project Name"}
                name="name"
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
                  "& .MuiInputAdornment-root": {
                    color: colorSchema.main,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span
                        style={{
                          color: colorSchema.main,
                        }}
                      >
                        Upload
                      </span>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder={"Project Description"}
                name="desc"
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
                    fontSize: { xs: 10, sm: 12, md: 18 },
                    borderRadius: "25px",
                    minWidth: { xs: 100, sm: 120, md: 200 },
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
