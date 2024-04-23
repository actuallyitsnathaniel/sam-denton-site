import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Links from "./pages/links";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";

const App = () => {
  // TODO: potentially put the paper over EVERYTHING, then do a mix blend.
  return (
    <BrowserRouter forceRefresh>
      <div className="font-serif flex flex-col min-h-screen w-auto [&>*]:animate-appear bg-[url('./src/assets/textures/paper-1.png')] bg-repeat-y bg-yellow-100 bg-opacity-20 bg-cover text-black blur-[0.39px]">
        <NavBar />
        <div className="md:pt-10" />
        <Routes>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <SocialLinks />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
