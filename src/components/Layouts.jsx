import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layouts() {
  const location = useLocation();
  const pathname = location.pathname;

  // Pages where hero should start behind the header
  const overlayPages = [
    "/",
    "/venues",
    "/group-services",
    "/room-blocks",
    "/gallery",
  ];

  const isOverlayPage = overlayPages.includes(pathname);

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Header />

      <main
        className={
          isOverlayPage ? "pt-[40px]" : "pt-[136px] md:pt-[140px]"
        }
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}