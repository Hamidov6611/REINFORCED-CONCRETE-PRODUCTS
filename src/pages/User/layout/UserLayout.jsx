import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout = ({ children, title, desc }) => {

  return  (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>

      <header>
        <Navbar />
      </header>
      <main className="w-[100%] flex flex-row justify-between">
        <div className="w-[100%]">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  ) 
};

UserLayout.defaultProps = {
  title: "User",
};

export default UserLayout;
