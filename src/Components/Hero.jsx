// eslint-disable-next-line no-unused-vars
import abs_circle from "../assets/Abstract-1.png";
import abs_donut from "../assets/Abstract-2.png";
import mainBg from "../assets/hero-img.webp";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-wrapper ">
      <div className="title-section mt-[6.2rem]">
        <div className="hero-container  flex  justify-between">
          <img className="floating img-1" src={abs_donut} alt="" />
          <div className="hero-data  flex-col items-center text-center ">
            <div className="bg-gradient-to-r from-[#ffb300] via-green-500 to-[#c402ff] text-transparent bg-clip-text  hero-title text-[4.5rem] font-[700] leading-[5.2rem]">
              Build advanced chatbots visually
            </div>
            <div className="hero-subtitle text-[1.4rem]">
              SkyBot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </div>
            <button className="hero-btn rounded-[0.375rem] px-[1.1rem] bg-[#1A5FFF] ">
              Create a Skybot for free
            </button>
          </div>
          <img className="floating img-2" src={abs_circle} alt="" />
        </div>
      </div>

      <div className="main-wrapper mt-20 flex justify-center relative z-10">
        <div className="main-bg">
          <img className="rounded-[0.375rem]" src={mainBg} alt="" />
        </div>

        <div className="blobs bottom-0 absolute flex z-[-1] w-full justify-around">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
