import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Enrollment from "./pages/Enrollment/Enrollment.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Company from "./components/Company.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import NoWarrantiesYet from "./pages/NoWarrantiesYet/NoWarrantiesYet.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import RemoveMyData from "./pages/RemoveMyData/RemoveMyData.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition.jsx";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
    errorElement: (
      <div className="w-full h-full">
        <NavBar />
        <ErrorPage />
        <Footer />
      </div>
    ),
    children: [
      {
        path: ":id",
        element: <Company />,
      },
    ],
  },
  {
    path: "/enrollment",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <Enrollment />
        <Footer />
      </div>
    ),
    children: [
      {
        path: ":id",
        element: "",
      },
    ],
    errorElement: (
      <div className="w-full h-full">
        <NavBar />
        <ErrorPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/terms-and-condition",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <TermsAndCondition />
        <Footer />
      </div>
    ),
  },
  {
    path: "/faq",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <FAQ />
        <Footer />
      </div>
    ),
  },
  {
    path: "/privacy",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <PrivacyPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/faq",
    element: (
      <div className="w-full h-full">
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
    errorElement: (
      <div className="w-full h-full">
        <NavBar />
        <ErrorPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/nowarrantiesyet",
    element: (
      <div className="w-full h-full">
        <NavBar />
        <NoWarrantiesYet />
        <Footer />
      </div>
    ),
  },
  {
    path: "/remove-my-data",
    element: (
      <div className="w-full h-screen">
        <NavBar />
        <RemoveMyData />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
