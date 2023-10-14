import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserLayout = ({ children, title, desc }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("x-admin") | null)
  );
  useEffect(() => {
    let admin = localStorage.getItem("x-admin");
    setAdmin(JSON.parse(admin));
  }, []);
  const navigate = useNavigate();
  return admin?.username?.length > 0 ? (
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
    </>
  ) : (
    navigate("/login")
  );
};

UserLayout.defaultProps = {
  title: "User",
};

export default UserLayout;
