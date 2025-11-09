import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// global css
import "./index.css";

import App from "./App.jsx";

//  page components
import HomePage from "./pages/HomePage";
import AboutTeamPage from "./pages/AboutTeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicesLayout from "./pages/ServicesLayout";
import FilmProductionPage from "./pages/services/FilmProductionPage";
import BrandingPage from "./pages/services/BrandingPage";
import ArtCurationPage from "./pages/services/ArtCurationPage";

// router
const router = createBrowserRouter([
  {
    // root path
    path: "/",

    element: <App />,

    // Child routes
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-team",
        element: <AboutTeamPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        // all services
        path: "services",
        element: <ServicesLayout />,
        //service routes
        children: [
          {
            path: "film-production",
            element: <FilmProductionPage />,
          },
          {
            path: "branding",
            element: <BrandingPage />,
          },
          {
            path: "art-curation",
            element: <ArtCurationPage />,
          },
        ],
      },
    ],
  },
]);

// Render the app using RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
