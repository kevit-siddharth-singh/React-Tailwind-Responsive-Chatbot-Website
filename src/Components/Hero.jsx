// eslint-disable-next-line no-unused-vars
import abs_circle from "../assets/Abstract-1.png";
import abs_donut from "../assets/Abstract-2.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-wrapper relative">
      <div className=" w-100 h-100 title-section">
        <div className="svg-1 flex  justify-between mt-[3rem] mx-[3rem">
            
          <img className=" floating w-[25rem]" src={abs_donut} alt="" />
          <img className=" floating w-[25rem]" src={abs_circle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
