import React from 'react'
import { Truck, Plane, Package, CreditCard,BadgeCheck } from "lucide-react";
// import img1 from "../assets/img1.jpg"
const About = () => {
  return (
    <section className="bg-[#e8dcc6] py-16 px-6 lg:px-20">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-serif mb-4">Our Story</h2>

          <p className="text-gray-600 mb-4">
            Demesne far hearted supposed venture and excited to see had had.
            Dependent on so extremely delivered by. Yet no jokes worse her why.
          </p>

          <p className="text-gray-600 mb-8">
            Bed one supposing breakfast day fulfilled off depending questions.
            Whatever boy her exertion his extended.
          </p>

          {/* Stats */}
          <div className="flex gap-12">
            <div>
              <h3 className="text-3xl font-semibold">90%</h3>
              <p className="text-gray-500 text-sm">Jewelry Item</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">1.1m</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">7+</h3>
              <p className="text-gray-500 text-sm">Years of experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[60%]">
          <img
            style={{width:"300px"}}
            // src={img1}
            alt="Jewelry"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-16">

        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <Truck className="mx-auto mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">FREE SHIPPING</h3>
          <p className="text-gray-500 text-sm">
            Fast & Free Shipping Worldwide. Limited Time Only!
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <Package className="mx-auto mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">FAST DELIVERY</h3>
          <p className="text-gray-500 text-sm">
            To Over 130 Countries Worldwide Within 20 Days
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <BadgeCheck className="mx-auto mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">
            100% QUALITY GUARANTEE
          </h3>
          <p className="text-gray-500 text-sm">
            We Ensure Top Quality In Every Product We Deliver.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <CreditCard className="mx-auto  mb-4" size={32} />
        <h3 className="text-lg font-semibold mb-2">
          SECURE PAYMENT
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          SSL Encryption For Secure Transaction & Personal Data
        </p>
        </div>

      </div>
    </section>
  );
}

export default About