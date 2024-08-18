import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
// import Contact from "./pages/contact";
import About from "./pages/about";
import Links from "./pages/links";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";
import { ImageBackground } from "./components/media-background";

const App = () => {
  return (
    <BrowserRouter forceRefresh>
      <div className={`flex flex-col min-h-screen max-w-screen font-sp-blunt`}>
        <ImageBackground />

        <AnimatePresence mode="sync">
          <NavBar />
          <div className="mt-16 md:mt-auto md:ml-36 md:-translate-x-[4rem]">
            <Routes key={location.pathname}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/links" element={<Links />} />
              <Route path="/digitals" element={<Merch />} />
              <Route path="/music" element={<Music />} />
              <Route path="/live" element={<Shows />} />
              <Route path="/secret" element={<Secret />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
