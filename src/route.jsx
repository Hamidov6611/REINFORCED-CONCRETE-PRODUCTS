import { Basket, Catalog, CatalogDetail, Category, Contact, EditProductImg, Main, NewsAndUseful, NewsComp, Onas, Product, SubCategory, WeNews } from "./pages/User";
import { Login } from "./pages/login/Login";

export const routes = [
  { id: 1, path: "/", element: <Main /> },
  { id: 2, path: "/onas", element: <Onas /> },
  { id: 3, path: "/new/:id", element: <NewsAndUseful /> },
  { id: 4, path: "/new", element: <WeNews /> },
  { id: 5, path: "/basket", element: <Basket /> },
  { id: 6, path: "/catalog", element: <Catalog /> },
  { id: 7, path: "/catalog/:id", element: <CatalogDetail /> },
  { id: 8, path: "/contact", element: <Contact /> },
  { id: 9, path: "/category", element: <Category /> },
  { id: 10, path: "/login", element: <Login /> },
  { id: 11, path: "/product", element: <Product /> },
  { id: 12, path: "/sub-category", element: <SubCategory /> },
  { id: 13, path: "/news", element: <NewsComp /> },
  { id: 14, path: "/edit-image/:id", element: <EditProductImg /> },
];
