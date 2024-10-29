import logo from "../assets/images/rtulogo.png";
import cealogo from "../assets/images/cea-logo.png";

const NavBar = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 h-60 flex flex-row">
        <div className="flex items-center justify-center w-80">
          <img
            className="w-64 p-10 object-cover inline-block"
            src={logo}
            alt="rtu logo"
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center justify-center w-80">
          <img
            className="w-64 p-10 object-cover inline-block"
            src={cealogo}
            alt="rtu logo"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
