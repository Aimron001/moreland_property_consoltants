import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <h3>Header</h3>
            <Outlet />
            <h3>Footer</h3>
        </div>
    )
}