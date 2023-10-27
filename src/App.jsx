import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./route";

const App = () => {
  return (
    <div>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
