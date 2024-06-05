import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CustomCard from "./customCard";
import Image from "next/image";
import CalenderImage from "../../../public/assets/calendar.png";
import ProfileImage from "../../../public/assets/Profile.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "../ImageUploader";
import CustomImage from "../ImageComp";
import { colorSchema } from "@/utils/color";

const Profile = ({ userType, setIsClick, selectUserType, type }) => {
  const handleBack = () => {
    setIsClick(false);
    selectUserType(null);
  };

  const router = useRouter();
  const [uploadImage, setUploadedImage] = useState({
    url: null,
    file: null,
  });

  const [formData, setFormData] = useState({
    profilePic: uploadImage?.file ? uploadImage?.file : "",
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    type: userType,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const dummyToken = "inye_token12345678";
    localStorage.setItem("inyeUserData", JSON.stringify(formData));
    localStorage.setItem("token", dummyToken);
    router.push(userType == "admin" ? "/createproject" : "/");
  };

  return (
    <CustomCard
      sxStyle={{
        width: "100%",
        height: "100%",
        minWidth: { xs: 360, sm: 450, md: 600 },
        fontFamily: "SF Pro Display",
        p: "2vw",
      }}
      title={
        <Button
          onClick={handleBack}
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
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "4vw", sm: "3vw", md: "2vw" },
            fontWeight: 800,
            letterSpacing: "0.01vw",
            fontFamily: '"SF Pro Display", sans-serif',
            mt: "-3.5vw",
          }}
        >
          Create {type} Profile
        </Typography>
        <Typography
          sx={{
            fontFamily: '"SF Pro Display", sans-serif',
            fontSize: { xs: "2.5vw", sm: "2.2vw", sm: "1.2vw" },
            fontWeight: 400,
            letterSpacing: "-0.22px",
            opacity: 0.7,
            color: "white",
            mb: "3vw",
          }}
        >
          Please enter the details to register an account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "4vw", sm: "3vw", md: "1vw" },
            mt: "1vw",
            minWidth: { xs: 320, sm: 360, md: 550 },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ width: 1, display: "flex", gap: { xs: 2, sm: 2, md: 2.5 } }}
          >
            <CustomImage
              src={uploadImage?.url ? uploadImage?.url : ProfileImage}
              alt={"profile"}
              width={60}
              height={10}
              unoptimized={true}
              style={{
                borderRadius: "50%",
                height: { xs: 8, sm: 9, md: 10 },
                width: { xs: 8, sm: 9, md: 10 },
              }}
            />
            <ImageUpload
              profile={formData.profilePic}
              handleInputChange={handleInputChange}
              setUploadedImage={setUploadedImage}
              uploadImage={uploadImage}
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            placeholder={"Full Name"}
            name="fullName"
            onChange={handleInputChange}
            value={formData.fullName}
            sx={{
              borderRadius: "12px",
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
          />
          <TextField
            variant="outlined"
            fullWidth
            placeholder={"Date of Birth"}
            name="dateOfBirth"
            onChange={handleInputChange}
            value={formData.dateOfBirth}
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
                <InputAdornment position="end">
                  <Image
                    src={CalenderImage}
                    alt="calender"
                    width={20}
                    height={10}
                    unoptimized={false}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            placeholder={"Email Address"}
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            sx={{
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
            placeholder={"Phone Number"}
            name="phoneNumber"
            onChange={handleInputChange}
            value={formData.phoneNumber}
            type="number"
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
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    color: "white",
                    opacity: 0.7,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <span>+12</span>
                    <span
                      style={{
                        width: "1px",
                        height: "6px",
                        backgroundColor: "rgba(255, 255, 255, 0.10)",
                      }}
                    />
                  </Box>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            placeholder={"Address"}
            name="address"
            multiline={true}
            onChange={handleInputChange}
            value={formData.address}
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
  );
};

export default Profile;
