import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import DashboardPage from "./Components/DashboardPage";
import PageNotFound from "./Components/PageNotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Contact" element={<Contact />} />
     <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="About" element={<About />} />

      {/* Parent route for dashboard */}
      <Route path="dash" element={<DashboardPage />}>
        {/* Nested routes rendered inside <Outlet /> in DashboardPage */}
        <Route path="messages" element={<div>Messages</div>} />
        <Route path="tasks" element={<div>Tasks</div>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;