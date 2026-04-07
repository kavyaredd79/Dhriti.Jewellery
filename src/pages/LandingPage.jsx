import React, { useEffect, useState } from 'react'

const LandingPage = () => {
const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000); // change image every 3 seconds

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {current === 0 && (
        <img
          src="/images/jewel1.jpg"
          alt="slide1"
          className="w-full h-full object-cover"
        />
      )}

      {current === 1 && (
        <img
          src="/images/jewel2.jpg"
          alt="slide2"
          className="w-full h-full object-cover"
        />
      )}

      {current === 2 && (
        <img
          src="/images/jewel3.jpg"
          alt="slide3"
          className="w-full h-full object-cover"
        />
      )}

    </div>
  );
}

export default LandingPage