import React, { useState, useEffect } from "react";

const Header = () => {
  const messages = [
    "Free shipping on orders above 3000/-",
    "20% OFF ON ORDERS ABOVE ₹15k | LIMITED PERIOD OFFER",
    "New arrivals are live now 💎",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="py-2 flex justify-center items-center bg-[#C9841F] text-white">
      <p className="text-sm tracking-wide text-center">
        {messages[index]}
      </p>
    </header>
  );
};

export default Header;