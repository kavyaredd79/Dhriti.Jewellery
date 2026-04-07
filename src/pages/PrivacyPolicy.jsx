import React from "react";
import privacyImg from "../assets/privacyimg2.jpg"
const PrivacyPolicy = () => {
  return (
    <section className="bg-[#e8dcc6] py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">PRIVACY POLICY</h2>

          <h2 className="text-2xl font-semibold mb-4">
            Collecting Personal Information
          </h2>
          <p className="text-gray-600 mb-4">
            We collect personal information such as your name, email address,
            phone number, and shipping details when you place an order or
            interact with our website. This information helps us process your
            orders, improve our services, and provide a better user experience.
            We ensure that your personal data is stored securely and used only
            for legitimate business purposes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Sharing Personal Information
          </h2>
          <p className="text-gray-600 mb-4">
            We may share your personal information with trusted third-party
            service providers who help us operate our website, process payments,
            and deliver orders. These partners only use your information to
            perform their services for us. We do not sell or rent your personal
            information to others. Your data may also be shared when required by
            law or to protect our rights.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={privacyImg}
            alt="Privacy Policy"
            className="w-full max-w-[41rem] mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
