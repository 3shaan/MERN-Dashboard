import { Box, useMediaQuery } from "@mui/material";
import Navbar from "Components/Navbar";
import SideBar from "Components/SideBar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  const isNonMobile = useMediaQuery("(min-width : 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} height="100%" width="100%">
          <SideBar isNonMobile={isNonMobile}        drawerWidth="250px"
            isSideBarOpen={isSideBarOpen}
           setIsSideBarOpen = {setIsSideBarOpen}
          ></SideBar>
      <Box>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default LayOut;
