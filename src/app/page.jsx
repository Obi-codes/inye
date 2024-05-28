"use client";
import dynamic from "next/dynamic";
import profile1 from "../../public/assets/profile1.png";
const GalleryView = dynamic(
  () => import("@/components/GalleryViewComponent/GalleryView"),
  { ssr: false }
);
const GalleryDetailed = dynamic(
  () => import("@/components/GalleryDetailedComponent/GalleryDetailed"),
  { ssr: false }
);

const HomePage = () => {
  const authUser =
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage?.getItem("inyeUserData"));

  const item = {
    quantity: 3,
    amount: 14,
  };

  const data = {
    id: 1,
    profilePic: profile1,
    name: "Healthcare Project",
    date: "24/08/2024",
    quantity: "30 Person",
    amount: "$300",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#141316",
        height: "100%",
        flex: 1,
      }}
    >
      <div style={{ width: "90%", padding: "3vw", height: "100%" }}>
        {authUser?.type === "admin" ? (
          <GalleryDetailed authUser={authUser} item={data} />
        ) : (
          <GalleryView />
        )}
      </div>
    </div>
  );
};

export default HomePage;
