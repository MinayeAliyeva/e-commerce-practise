import React from "react";
/*   const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };  */
const useMobile = () => {
  //state,setState,()=> update
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    console.log("handleMobileMenuOpen",event);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('handleProfileMenuOpen');
  };
  return {
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
    handleMobileMenuOpen,
    anchorEl,
    setAnchorEl,
    handleProfileMenuOpen,
    isMenuOpen,
    isMobileMenuOpen
  };
};

export default useMobile;
