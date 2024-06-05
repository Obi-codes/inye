import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import DownloadImage from "../../../public/assets/download.png";
const ImageUpload = ({
  profile,
  handleInputChange,
  setUploadedImage,
  uploadImage,
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    autoFocus: false,
    maxFiles: 1,
    minSize: 1,
    noDrag: true,
    noDragEventsBubbling: true,
    preventDropOnDocument: true,
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      setUploadedImage({
        url: URL.createObjectURL(acceptedFiles[0]),
        file: acceptedFiles[0],
      });
    },
  });

  const placeHolderText = `Upload Profile Pic ${uploadImage?.file ? '-' : ""} ${uploadImage?.file ? uploadImage?.file?.name : ""}`;

  return (
    <div {...getRootProps()} style={{ outline: "none", width: "100%" }}>
      <input {...getInputProps()} />
      <TextField
        variant="outlined"
        aria-readonly="true"
        fullWidth
        placeholder={placeHolderText}
        value={profile}
        onChange={handleInputChange}
        sx={{
          width: 1,
          borderRadius: "12px",
          color: "white",
          border: "1px solid #FFF",
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
                src={DownloadImage}
                alt="download"
                width={20}
                height={10}
                unoptimized={true}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ImageUpload;
