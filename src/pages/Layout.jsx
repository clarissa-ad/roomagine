import { TempNavBar } from "../components/TempNavBar";
import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
            <TempNavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}