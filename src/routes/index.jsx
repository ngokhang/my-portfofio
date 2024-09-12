import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: (
          <MainLayout>
            <App />
          </MainLayout>
        ),
      },
    ],
  },
]);
