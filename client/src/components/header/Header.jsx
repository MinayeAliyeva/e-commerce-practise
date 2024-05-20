import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import useMobile from "./useMobile";
import MobileVersion from "./MobileVersion";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useState } from "react";

export default function PrimarySearchAppBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const state = useMobile();
  const {
    menuId,
    mobileMenuId,
    anchorEl,
    mobileMoreAnchorEl,
    isMenuOpen,
    isMobileMenuOpen,
    handleProfileMenuOpen,
    handleMobileMenuClose,
    handleMenuClose,
    handleMobileMenuOpen,
  } = React.useMemo(() => state);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              Flows
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <MenuBar />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingBasketOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
             
            </IconButton>
          </Box>

          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} /> 
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar toggleDrawer={toggleDrawer} open={open} />

      <MobileVersion
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        menuId={menuId}
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </Box>
  );
}
