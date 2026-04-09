import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
   const navigate = useNavigate();

  return (
   <>
   <section className="bg-[#ebe8e4] min-h-screen flex items-center justify-center px-6">

      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl">

        {/* Image */}
        <div className="flex justify-center">
          <img
             src="https://d502jbuhuh9wk.cloudfront.net/t/static/images/error-404_e9f249d492b6cd89faf0.png"
            alt="404"
            className="w-72 md:w-96"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">

          <h1 className="text-7xl font-serif text-gray-700 mb-4">
            404
          </h1>

          <h2 className="text-2xl font-semibold mb-3 text-gray-700">
            Something's missing.
          </h2>

          <p className="text-gray-500 mb-6 max-w-md">
            We can’t find the page you’re looking for. Please check the URL
            or return to the homepage.
          </p>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              textTransform: "none",
              padding: "8px 20px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            Return Home
          </Button>

        </div>

      </div>

    </section>
   </>
  )
}

export default Error