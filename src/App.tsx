import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import DefaultLayout from "./layout/DefaultLayout";
import Contact from "./pages/Contact";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "contact",
          Component: Contact,
        },
      ],
    },
    {
      path: "/projects",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          Component: Projects,
        },
        {
          path: ":id",
          Component: Project,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
