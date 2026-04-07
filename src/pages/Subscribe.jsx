import React from "react";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const Subscribe = () => {
  return (
<section id="subscribe">
  <div className="bg-[#ebe8e4] py-16 px-6 lg:px-20">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* Left Column - Subscribe */}
      <div>
        <h2 className="text-3xl md:text-4xl font-serif text-[#7a4b2c] mb-4">
          Subscribe to our emails
        </h2>

        <p className="text-[#9b7a5a] mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>

        <div className="flex items-center border border-[#b08a6a] w-full max-w-md">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 bg-transparent outline-none text-[#7a4b2c] placeholder-[#9b7a5a]"
          />

          <button className="px-4 text-[#7a4b2c] hover:text-black transition">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>


      {/* Right Column - Contact Cards */}
      <div>

         <h2 className="text-3xl md:text-4xl font-serif text-[#7a4b2c] mb-4">
          Contact Our Team
        </h2>

       <p className="text-[#9b7a5a] mb-8">
          Visit our shop to see amazing creations from our designers
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Location */}
          <div>
            <MapPin className="ml-8 mb-4 text-[#9b7a5a]" size={36} />
            <h3 className="text-xl text-[#9b7a5a] font-serif mb-3">Store Location</h3>
            <p className="text-[#9b7a5a] mb-2">
              362 Ridgewood Dr, Soldotna,
            </p>
            <p className="underline font-semibold text-[#9b7a5a]">
              Alaska 99669, USA
            </p>
          </div>

          {/* Email */}
          <div>
            <Mail className="ml-8 mb-4 text-[#9b7a5a]" size={36} />
            <h3 className="text-xl font-serif mb-3 text-[#9b7a5a]">Send Email</h3>
            <p className="text-[#9b7a5a] mb-2">
              Particular way thoroughly unaffected
            </p>
            <p className="underline font-semibold text-[#9b7a5a]">
              info@example.com
            </p>
          </div>

          {/* Phone */}
          <div>
            <Phone className="ml-8 mb-4 text-[#9b7a5a]" size={36} />
            <h3 className="text-xl font-serif mb-3 text-[#9b7a5a]">Call Number</h3>
            <p className="text-[#9b7a5a] mb-2">
              Perceived end knowledge certainly
            </p>
            <p className="underline font-semibold text-[#9b7a5a]">
              +123 456 7892
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
   
  );
};

export default Subscribe;