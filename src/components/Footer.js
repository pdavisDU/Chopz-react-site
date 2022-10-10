import React from "react";
// importing icons from material UI website
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      {/* creating the DIV with our socials and their icons */}
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> Copyright &copy; 2022 http://chopzsalon.com</p>
    </div>
  );
}

export default Footer;
