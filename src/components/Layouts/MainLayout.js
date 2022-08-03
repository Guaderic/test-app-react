import {NaviBar} from "../NaviBar/NaviBar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <NaviBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};