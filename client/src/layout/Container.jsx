import React from "react";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div class="  container mx-auto ">
      <Outlet />
    </div>
  );
};

export default Container;
