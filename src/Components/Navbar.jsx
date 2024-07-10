import logo from "../assets/bot.png";

function Navbar() {
  return (
    <nav className="navbar w-100 flex justify-around px-20 py-5">
      <div className="logo w-12">
        <img src={logo} alt="logo of the company" />
      </div>
      <div className="links  w-1/3 flex justify-between items-center px-10 text-white font-[700]">
        <a href="">Resources</a>
        <a href="">Pricing</a>
        <button className="text-[16px] text-[#7EA6FF] px-5 py-2 border-[#7EA6FF] border-2 rounded-[0.375rem] cursor-pointer">
          Sign in
        </button>
        <button className="text-[16px] bg-[#1A5FFF] px-5 py-2 rounded-[0.375rem]">
          Create a skybot
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
