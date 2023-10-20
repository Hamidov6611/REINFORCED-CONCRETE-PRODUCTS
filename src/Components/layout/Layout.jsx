import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../Aside";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children, title, desc }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("x-admin") | null)
  );
  useEffect(() => {
    let admin = localStorage.getItem("x-admin");
    setAdmin(JSON.parse(admin));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>
      {/* <Navbar /> */}

      <main className="w-[100%] flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="w-[100%] md:w-[85%]  bg-[#1a222c]">{children}</div>
      </main>
    </>
  )
};

AdminLayout.defaultProps = {
  title: "User",
};

export default AdminLayout;
