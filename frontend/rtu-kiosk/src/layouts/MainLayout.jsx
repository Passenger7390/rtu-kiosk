import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
