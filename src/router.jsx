import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./main.css";
import MyQR from "../src/pages/MyQR/MyQR.jsx";
import Profile from "../src/pages/Profile/Profile.jsx";
// import Scan from "./pages/Scan/Scan";
// import LineLogin from "./pages/LineLogin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/myqr",
        element: (<MyQR />),
    },
    {
        path: "/profile",
        element: (<Profile />),
    },
    // {
    //     path: "/scan",
    //     element: (<Scan />),
    // },
    // {
    //     path: "/login/:liffId",
    //     element: (<LineLogin/>),
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);