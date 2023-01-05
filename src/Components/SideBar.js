import {
  AdminPanelSettingsOutlined,
  CalendarViewMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItem = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customer",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: <PublicOutlined />,
  },
  {
    text: "OverView",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarViewMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: <TodayOutlined />,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];
const SideBar = ({
  drawerWidth,
  isSideBarOpen,
  setIsSideBarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box>
      <Drawer
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box width="100%">
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display={"flex"} alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight={"bold"}>
                  React DashBoard
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
          <List>
                      {navItem.map(({ text, icon }, i) => {
                const routeText = text.toLowerCase();
              if (icon) {
                return (
                  <Typography key={i} sx={{ m: "2.25rem 0 1rem 3 rem" }}>
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${routeText}`);
                        }}
                        setActive={routeText}
                        sx={{
                          backgroundColor:
                            active === routeText
                              ? theme.palette.secondary[300]
                              : "transparent",
                          color:
                            active === routeText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === routeText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[200],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === routeText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  </Typography>
                );
                //   const routeText = text.toLowerCase();
                //   return (
                //     <ListItem key={text} disablePadding>
                //       <ListItemButton
                //         onClick={() => {
                //           navigate(`/${routeText}`);
                //         }}
                //         setActive={routeText}
                //         sx={{
                //           backgroundColor:
                //             active === routeText
                //               ? theme.palette.secondary[300]
                //               : "transparent",
                //           color:
                //             active === routeText
                //               ? theme.palette.primary[600]
                //               : theme.palette.secondary[200],
                //         }}
                //       >
                //         <ListItemIcon
                //           sx={{
                //             ml: "2rem",
                //             color:
                //               active === routeText
                //                 ? theme.palette.primary[600]
                //                 : theme.palette.secondary[200],
                //           }}
                //               >
                //                   {icon}
                //               </ListItemIcon>
                //               <ListItemText primary={text} />
                //               {active === routeText && (
                //                   <ChevronRightOutlined sx={{ml:"auto"}}/>
                //               )}
                //       </ListItemButton>
                //     </ListItem>
                //   );
              }
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
