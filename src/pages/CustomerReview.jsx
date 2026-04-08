import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import img1 from "../assets/rwimg1.jpg"
import img2 from "../assets/rwimg2.jpg"
import img3 from "../assets/rwimg3.jpg"
const CustomerReview = () => {
  const reviews = [
    {
      name: "Sophia Williams",
      image: img1,
      review:
        "Absolutely beautiful jewelry! The quality exceeded my expectations and the craftsmanship is amazing.",
    },
    {
      name: "Emily Johnson",
      image: img2,
      review:
        "I love my necklace. It looks elegant and the delivery was quick. Highly recommend this store!",
    },
    {
      name: "Olivia Brown",
      image: img3,
      review:
        "The designs are stunning and unique. I get compliments every time I wear them.",
    },
    {
      name: "Sophia Williams",
      image: img2,
      review:
        "Absolutely beautiful jewelry! The quality exceeded my expectations and the craftsmanship is amazing.",
    },
    {
      name: "Emily Johnson",
      image: img3,
      review:
        "I love my necklace. It looks elegant and the delivery was quick. Highly recommend this store!",
    },
    {
      name: "Olivia Brown",
      image: img2,
      review:
        "The designs are stunning and unique. I get compliments every time I wear them.",
    },
    {
      name: "Sophia Williams",
      image: img1,
      review:
        "Absolutely beautiful jewelry! The quality exceeded my expectations and the craftsmanship is amazing.",
    },
    {
      name: "Emily Johnson",
      image: img3,
      review:
        "I love my necklace. It looks elegant and the delivery was quick. Highly recommend this store!",
    },
    {
      name: "Olivia Brown",
      image: img2,
      review:
        "The designs are stunning and unique. I get compliments every time I wear them.",
    },
  ];
const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {
    const slider = setInterval(() => {
      setStartIndex((prev) =>
        prev + 1 >= reviews.length ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
   <section className="bg-[#e8dcc6] py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif text-center text-[#976720] mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleReviews.map((item, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: "20px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />

              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {item.review}
                </Typography>

                <Typography sx={{ fontWeight: "bold", color: "#976720" }}>
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReview;
