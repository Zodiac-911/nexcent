import "../styles/topbar.css";
import logo from "../assets/logo.png";

function Topbar() {
  return (
    <>
      <div className=" topbar ">
        <img src={logo} alt="Nextcent" />
        <div className="navbar">
          <div>Home</div>
          <div>Features</div>
          <div>Community</div>
          <div>Blog</div>
          <div>Pricing</div>
          <button className="btn tpbr-btn">Register Now →</button>
        </div>
      </div>
    </>
  );
}

export default Topbar;
