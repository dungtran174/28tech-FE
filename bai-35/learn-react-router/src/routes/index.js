import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogNews from "../pages/Blog/BlogNews";
import BlogRelated from "../pages/Blog/BlogRelated";
import BlogDetail from "../pages/Blog/BlogDetail";
import PrivateRoutes from "../components/PrivateRoutes";
import InfoUser from "../pages/InfoUser";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />
          },
          {
            path: "news",
            element: <BlogNews />
          },
          {
            path: "related",
            element: <BlogRelated />
          },
          {
            path: ":id",
            element: <BlogDetail />
          }
        ]
      },
      {
        path: "Login",
        element: <Login />
      },
      {
        path: "*",
        element: <Error404 />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "info-user",
            element: <InfoUser />
          }
        ]
      }
    ]
  }
];

