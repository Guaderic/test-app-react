import {NaviBar} from './NaviBar';
import {Outlet} from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <NaviBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};