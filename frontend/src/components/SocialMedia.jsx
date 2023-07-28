import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/egor-grigorik/">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100008989095117">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/____.ego.____/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
