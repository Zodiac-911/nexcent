import "../styles/footer.css";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="upper">
          <div className="f-one fc">
            <img className="f-logo" src={logo} alt="" />
            <p>Copyright © 2025 Nexcent All rights reserved</p>
            <div className="social">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />

              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="f-two fc">
            <h2>company</h2>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
          <div className="f-three fc">
            <h2>Support</h2>
            <p>Denver Tree Solutions</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
            <p>Privacy policy</p>
          </div>
          <div className="f-four fc">
            <h2>Stay up to date</h2>
            <div>
              <input type="email" placeholder="Your Email Adress " />
              <button>Send</button>
            </div>
          </div>
        </div>

        <h3>Developed by Z𐀏DIAC911</h3>
      </div>
    </>
  );
}
export default Footer;
