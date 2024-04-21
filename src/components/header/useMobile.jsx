import React from "react";

const mobileMenuId = 'primary-search-account-menu-mobile';
const menuId = 'primary-search-account-menu';

const useMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    console.log("Event", event);
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const  isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return {
   menuId,
   mobileMenuId,
   anchorEl,
   setAnchorEl,
   mobileMoreAnchorEl,
   setMobileMoreAnchorEl,
   isMenuOpen,
   isMobileMenuOpen,
   handleProfileMenuOpen,
   handleMobileMenuClose,
   handleMenuClose,
   handleMobileMenuOpen

  };
};

export default useMobile;
