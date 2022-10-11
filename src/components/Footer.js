import React from "react";
// importing icons from material UI website
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceIcon from "@mui/icons-material/Place";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      {/* creating the DIV with our socials and their icons */}
      <div className="socialMedia">
        <a href="https://www.instagram.com/chopz_mens_salon/">
          <InstagramIcon />
        </a>{" "}
        <a href="https://www.facebook.com/chopzmensalon">
          <FacebookIcon />
        </a>{" "}
        <a href="https://www.google.com/maps/place/Chopz+Mens+Salon/@39.7261546,-104.9861898,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7ed85f88638b:0x3a22b806e3f35edb!8m2!3d39.7261505!4d-104.984035">
          {" "}
          <PlaceIcon />
        </a>
      </div>
      <p className="address">611 Grant Street</p>
      <p className="address">Denver, CO 80203</p>
      <p> Copyright &copy; 2022 http://chopzsalon.com</p>
    </div>
  );
}

export default Footer;
