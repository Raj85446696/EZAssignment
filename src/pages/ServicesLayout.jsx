import { Outlet, useLocation } from "react-router-dom";

import ServiceHeading from "../components/ServiceHeading";
// Import assets
import bottomImg from "../assets/services/bottom.svg";
import filmProdCardImg from "../assets/services/filmProd.png";
import brandingCardImg from "../assets/services/branding.png";
import artCurationCardImg from "../assets/services/artCuration.png";

// styles
import {
  ServicesWrapper,
  CardGrid,
  CardLink,
  CardImage,
  BottomImage,
} from "../styles/ServicesLayout";

const ServicesLayout = () => {
  // 1. Get the current location object
  const location = useLocation();
  // showing heading and cards when on /services
  const isServicesHome = location.pathname === "/services";
  return (
    <ServicesWrapper>
      {isServicesHome && (
        <>
          <ServiceHeading title="The storyboard reveals the breadth of our craft." />

          {/* three cards Images with link */}
          <CardGrid>
            <CardLink to="/services/film-production">
              <CardImage src={filmProdCardImg} alt="Film Production" />
            </CardLink>
            <CardLink to="/services/branding">
              <CardImage src={brandingCardImg} alt="Branding" />
            </CardLink>
            <CardLink to="/services/art-curation">
              <CardImage src={artCurationCardImg} alt="Art Curation" />
            </CardLink>
          </CardGrid>
        </>
      )}

      {/* nested child pages */}

      <Outlet />

      {/*  decorative image */}
      <BottomImage src={bottomImg} alt="" />
    </ServicesWrapper>
  );
};

export default ServicesLayout;
