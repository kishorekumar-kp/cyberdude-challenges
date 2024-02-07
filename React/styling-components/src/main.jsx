import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage.jsx";
import AlertPage from "./pages/AlertPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import CardPage from "./pages/CardPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AccordionPage />,
      },
      {
        path: "alert",
        element: <AlertPage />,
      },
      {
        path: "buttons",
        element: <ButtonPage />,
      },
      {
        path: "card",
        element: <CardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);