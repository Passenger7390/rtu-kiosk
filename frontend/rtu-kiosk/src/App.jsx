import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import GPTpage from "./pages/GPTpage";
import QueuePage from "./pages/QueuePage";
import MapPage from "./pages/MapPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/open-ai" element={<GPTpage />} />
      <Route path="/queue" element={<QueuePage />} />
      <Route path="/map" element={<MapPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
