import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
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
