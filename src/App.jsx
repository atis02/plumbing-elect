import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {
  Container,
  Box,
  Stack,
  CircularProgress,
  Typography,
} from "@mui/material";
import About from "./Pages/About";
import AboutCompany from "./Pages/AboutCompany";
import Advantages from "./Pages/Advantages";
import Missions from "./Pages/Missions";
import Services from "./Pages/Services";
import Licence from "./Pages/Licences";
import Models from "./Pages/OurWorks";
import Footer from "./Pages/Footer";
import OurServices from "./Pages/OurServices";
import OutWorksVideo from "./Pages/OurWorksVideo";
import Ratings from "./Pages/Ratings";
import Navbar from "./Components/Navbar/Navbar";

import { Suspense, useEffect, useState } from "react";
import QuestionAnswer from "./Pages/Accordion/Accordion";
import Call from "./Components/utils/Call";
function App() {
  const [loader, setLoader] = useState(false);
  AOS.init({
    duration: 1800,
    offset: 0,
  });
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loader ? (
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#121212"
          color="#fff"
        >
          <svg
            class="pl"
            width="128px"
            height="128px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="pl__ring1"
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="hsl(245, 89%, 69%)"
              stroke-width="8"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="377 377"
              stroke-dashoffset="-376.4"
            />
            <circle
              class="pl__ring2"
              cx="64"
              cy="64"
              r="52.5"
              fill="none"
              stroke="hsl(255, 89%, 69%)"
              stroke-width="7"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="329.9 329.9"
              stroke-dashoffset="-329.3"
            />
            <circle
              class="pl__ring3"
              cx="64"
              cy="64"
              r="46"
              fill="none"
              stroke="hsl(265, 89%, 69%)"
              stroke-width="6"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="289 289"
              stroke-dashoffset="-288.6"
            />
            <circle
              class="pl__ring4"
              cx="64"
              cy="64"
              r="40.5"
              fill="none"
              stroke="hsl(275, 89%, 69%)"
              stroke-width="5"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="254.5 254.5"
              stroke-dashoffset="-254"
            />
            <circle
              class="pl__ring5"
              cx="64"
              cy="64"
              r="36"
              fill="none"
              stroke="hsl(285, 89%, 69%)"
              stroke-width="4"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="226.2 226.2"
              stroke-dashoffset="-225.8"
            />
            <circle
              class="pl__ring6"
              cx="64"
              cy="64"
              r="32.5"
              fill="none"
              stroke="hsl(295, 89%, 69%)"
              stroke-width="3"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="204.2 204.2"
              stroke-dashoffset="-203.9"
            />
          </svg>

          <Typography fontFamily="Montserrat" mt={2}>
            Loading...
          </Typography>
        </Stack>
      ) : (
        <Suspense fallback={<CircularProgress />}>
          <Box
            sx={{
              background: "#fff",
            }}
          >
            <Box>
              <Call />
              <Navbar />
              <Home />
              <AboutCompany />
              <OurServices />
              <OutWorksVideo />
              <QuestionAnswer />
              <Licence />
              <About />
              <Ratings />
              <Footer />
            </Box>
          </Box>
        </Suspense>
      )}
    </>
  );
}

export default App;
