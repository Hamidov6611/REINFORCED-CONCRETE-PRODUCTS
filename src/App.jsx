import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
