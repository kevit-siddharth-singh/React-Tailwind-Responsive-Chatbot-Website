// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/bot.png";

// Sid: Some Css of this file is Linked with Hero.css

function Footer() {
  return (
    <div className="footer-wrapper bg-[#171923] flex justify-center">
      <div className="footer flex gap-[10em] my-[2em] links">
        <div className="section1 flex-row  ">
          <img className="w-[7em] cursor-pointer" src={logo} alt="" />
          <p className="font-bold text">
            Made with {""}
            <span className="cursor-pointer">❤️</span> By {""}
            <a
              style={{
                transform: "translateX(0px)", // ! For Stopping it from inheriting  Links Css From Hero.css
              }}
              href="https://github.com/siddhu1919"
            >
              @Siddhu1919
            </a>
          </p>
        </div>
        <div className="section2 flex-row justify-center  px-[1em]">
          <h2 className="font-bold text-[1.5em]">Product</h2>
          <p>
            <a>Status</a>
          </p>
          <p>
            <a>Documentation</a>
          </p>
          <p>
            <a>Roadmap</a>
          </p>
          <p>
            <a>Pricing</a>
          </p>
        </div>
        <div className="section3 flex-row   px-[1em] ">
          <h2 className="font-bold text-[1.5em]">Community</h2>
          <p>
            <a>Discord</a>
          </p>
          <p>
            <a href="https://github.com/siddhu1919">Github</a>
          </p>
          <p>
            <a href="https://in.linkedin.com/in/siddharth-g-singh-46b610201">LinkedIn</a>
          </p>
          <p>
            <a href="https://youtube.com/@XeroInstincts?si=To6CufhorVS65JU-">Youtube</a>
          </p>
        </div>
        <div className="section4 flex-row justify-center  px-[1em]">
          <h2 className="font-bold  text-[1.5em] ">Company</h2>
          <p>
            <a>About</a>
          </p>
          <p>
            <a>Contact</a>
          </p>
          <p>
            <a>Terms of service</a>
          </p>
          <p>
            <a>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
