import Layouts from "../components/layouts/Layouts";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";

const PublicRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/blog",
                element: <Blog />
            },
            {
                path:"/team",
                element: <Team />
            },
            {
                path:"/contact",
                element: <Contact />
            }
        ],
    }
];

export default PublicRouter;