import React, { useState } from "react";
import { Button } from "@mui/material";
import Necklaces from "./Necklaces";
import Bracelets from "./Bracelets";
import Rings from "./Rings";
import Pendants from "./Pendants";
import EarRings from "./EarRings";


const categories = [
  "Necklaces",
  "Earrings",
  "Bracelets",
  "Rings",
  "Pendants",
];

const Shop = () => {
  const [active, setActive] = useState("Necklaces");

  const renderComponent = () => {
    switch (active) {
      case "Necklaces":
        return <Necklaces />;
      case "Earrings":
        return <EarRings />;
      case "Bracelets":
        return <Bracelets />;
      case "Rings":
        return <Rings />;
      case "Pendants":
        return <Pendants />;
      default:
        return <Necklaces />;
    }
  };

  return (
    <section className="bg-[#e9e9e9] py-20 text-center">

      <h2 className="text-6xl font-serif mb-10 text-[#7a4b2c]">
        Shop
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((item, index) => (
          <Button
            key={index}
            onClick={() => setActive(item)}
            variant="outlined"
            sx={{
              borderRadius: "12px",
              padding: "8px 22px",
              textTransform: "none",
              borderColor: "#000",
              color: active === item ? "#fff" : "#000",
              backgroundColor: active === item ? "#000" : "transparent",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            {item}
          </Button>
        ))}
      </div>

{/* component render */}
      <div className="max-w-7xl mx-auto">
        {renderComponent()}
      </div>

    </section>
  );
};

export default Shop;