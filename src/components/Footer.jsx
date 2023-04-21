import React from "react";

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center pt-10">
      {/* social icons */}
      <div className="text-white flex w-1/2 mx-auto items-center justify-around">
        <a href="https://www.linkedin.com/in/ramin-mikayilov/" target="_blank">
          <FaFacebook size={30} className="hover:text-cYellow duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ramin-mikayilov/" target="_blank">
          <FaInstagram size={30} className="hover:text-cYellow duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ramin-mikayilov/" target="_blank">
          <FaTwitter size={30} className="hover:text-cYellow duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ramin-mikayilov/" target="_blank">
          <FaYoutube size={30} className="hover:text-cYellow duration-300" />
        </a>
      </div>
      <p className="py-8 text-lg text-white">
        Coded by{" "}
        <a
          className="font-bold text-cYellow hover:text-red-600 duration-300"
          href="https://github.com/RaminMikayilov"
          target="_blank"
        >
          {" "}
          Ramin Mikayilov{" "}
        </a>
        with <FaHeart className="inline-block text-cYellow cursor-pointer hover:text-red-600 duration-300" />
      </p>
    </footer>
  );
};

export default Footer;
