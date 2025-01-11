import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import GPTpage from "./pages/GPTpage";
import MapPage from "./pages/MapPage";
import ServicesPage from "./pages/ServicesPage"
import AppointmentPage from "./pages/AppointmentPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/open-ai" element={<GPTpage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />

    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
