import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBar1 from "../components/NavBar1";
const MainLayout = () => {
  return (
    <>
      <NavBar1 />
      <Outlet />
    </>
  );
};

export default MainLayout;