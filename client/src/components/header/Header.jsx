import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComponent";
import useMobile from "./useMobile";
import MobileVersion from "./MobileVersion";
import { NavLink } from "react-router-dom";

export default function PrimarySearchAppBar() {
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Flows
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <div
            className="links"
            style={{ display: "flex", columnGap: "20px", width: "30%" }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
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
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ margin: " 0 10px", fontSize: "30px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

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
