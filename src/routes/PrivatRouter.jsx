import Layouts from "../components/layouts/Layouts";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";

const PrivatRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path:"/admin",
                element: <Dashboard />
            }
        ]
    }
];

export default PrivatRouter;