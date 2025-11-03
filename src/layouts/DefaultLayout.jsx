import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";

export default function DefaultLayout() {
    return (
        <>
            <MyHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}