
import React from "react";
import NavBar from "./NavBar";

const Layout = ({children }: any) => {
  return (
    <div className=" bg-center bg-auto flex flex-col h-screen" style={{ backgroundImage: "url('/Gemini_Generated_Image_twew78twew78twew.jpg')" }}>
    {children}
    </div>

  );
};

export default Layout;
