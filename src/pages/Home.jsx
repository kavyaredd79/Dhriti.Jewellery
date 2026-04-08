import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Header from '../components/Header'
import { Search, User, ShoppingBag ,Heart} from "lucide-react";
import logo from "../assets/DhritiLogo.png"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return <>
  <Header />
   <nav className="bg-[#592A26] text-yellow-400 px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center">
  <img 
    src={logo} 
    alt="Logo" 
      className="w-16 h-16 object-contain"
  />
</div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/about")}>About Us</li>
         <li className="hover:text-white cursor-pointer" onClick={() => navigate("/shop")}>Shop</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/customerreview")}>Customer Reviews</li>
        <li className="hover:text-white cursor-pointer"  onClick={() =>
    document.getElementById("subscribe").scrollIntoView({
      behavior: "smooth",
    })
  }
>Contact Us</li>
         <li className="hover:text-white cursor-pointer" onClick={() => navigate("/faq")}>FAQs</li>
         <li className="hover:text-white cursor-pointer" onClick={() => navigate("/privacypolicy")}>Privacy Policy</li>
        {/* <li className="hover:text-white cursor-pointer" onClick={() => navigate("/necklace")}>Necklace ▾</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/earrings")}>Earrings ▾</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/bangles")}>Bangles</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/bracelets")}>Bracelets</li>
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/hipbelts")}>Hip Belts</li> */}
         
      </ul>


      <div className="flex items-center gap-5">
        <Search className="w-5 h-5 cursor-pointer hover:text-white" />
        <Heart className="w-5 h-5 cursor-pointer hover:text-white" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-white" />
      </div>
    </nav>
  <section className="align-element py-0">
        <Outlet />
        
      </section>
      <Subscribe />
      <Footer />
     
  </>
}

export default Home