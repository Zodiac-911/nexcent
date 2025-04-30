import "../styles/topbar.css";
import logo from "../assets/logo.png";
import Content from "./content";

function Topbar() {
  return (
    <>
      <div className=" topbar ">
        <img src={logo} alt="Nextcent" />
        <div className="navbar">
          <div>
            <a href="#one">Home</a>
          </div>
          <div>
            <a href="#three">Features</a>
          </div>
          <div>
            <a href="#two">Community</a>
          </div>
          <div>
            <a href="#six">Blog</a>
          </div>
          <div>
            <a href="#footer">Pricing</a>
          </div>
          <button className="btn tpbr-btn">Register Now →</button>
        </div>
      </div>
    </>
  );
}

export default Topbar;
