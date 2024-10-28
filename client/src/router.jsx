import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
