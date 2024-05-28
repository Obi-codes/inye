"use client";
import GalleryDetailed from "@/components/GalleryDetailedComponent/GalleryDetailed";
import { galleryItems } from "../../../utils/data";

const HomePageGalleryViewDetail = ({ params }) => {
  const foundProject = galleryItems?.find((proj) => proj.slug === params.slug);

  const authUser =
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage?.getItem("inyeUserData"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#141316",
      }}
    >
      <div style={{ width: "90%", padding: "3vw", height: "100%" }}>
        <GalleryDetailed item={foundProject} authUser={authUser} />
      </div>
    </div>
  );
};

export default HomePageGalleryViewDetail;
