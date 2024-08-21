import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Enrollment from "./pages/Enrollment/Enrollment.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/enrollment",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Enrollment />
        <Footer />
      </div>
    ),
  },
  {
    path: "/terms-and-condition",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/products",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/privacy",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/faq",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <ContactUs />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
