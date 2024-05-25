import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import PublicRouter from "./PublicRouter";
import PrivatRouter from "./PrivatRouter";

const router = createBrowserRouter([...PublicRouter, ...PrivatRouter]);

export default router;
