import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Shop",
    to: "/shop",
  },
  {
    name: "Gallery",
    to: "/gallery",
  },
];

const MenuBar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }} gap={4}>
      {links?.map((link, index) => (
        <Typography
          key={index}
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <NavLink to={link.to}> {link.name} </NavLink>
        </Typography>
      ))}
    </Box>
  );
};

export default MenuBar;
