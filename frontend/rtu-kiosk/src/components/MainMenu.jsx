import NavBar from "./NavBar.jsx";
const MainMenu = () => {
  return (
    <>
      <div className="font-lex">
        {/* Welcome message */}
        <p className="text-8xl align-middle text-center">
          WELCOME <span className="text-customBlue">RTU</span>
          <span className="text-customGold">ISTA</span>
        </p>
        <NavBar />
      </div>
    </>
  );
};

export default MainMenu;
