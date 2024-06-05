"use client";
import React from 'react'
import dynamic from "next/dynamic";
const ReportDetail = dynamic(
  () => import("../../../components/ReportDetailComponent/ReportDetail"),
  { ssr: false }
);

const DetailReportPage = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "#141316",
      height: "150vh",
      flex: 1,
    }}>

      <div style={{ width: "90%", padding: "3vw", height: "100%" }}>
        <ReportDetail />
      </div>
    </div>

  )
}

export default DetailReportPage
