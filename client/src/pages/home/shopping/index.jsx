import React from "react";
import ShoppingCard from "../../../components/Cards/shopping-card";
// ,flexWrap:'wrap'
const ShoppingSection = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />
    </section>
  );
};

export default ShoppingSection;
