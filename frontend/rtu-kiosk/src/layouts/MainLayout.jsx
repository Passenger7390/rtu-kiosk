import { Outlet } from "react-router-dom";
import HomepageNav from "../components/HomePageNav.jsx";
const MainLayout = () => {
  return (
    <>
      <HomepageNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
