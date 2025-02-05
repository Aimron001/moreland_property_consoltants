import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <div>
            <Header/>
            <Outlet />
            <h3>Footer</h3>
        </div>
    )
}