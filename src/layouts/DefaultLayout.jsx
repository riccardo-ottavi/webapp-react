import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import  { useGlobal } from "../contexts/GlobalContext"
import Loader from "../components/Loader";

export default function DefaultLayout() {

    //estrapola var di stato
    const { isLoading } = useGlobal();
    return (
        <>
            <MyHeader />
            <main>
                <Outlet />
            </main>
            {/*randerizza solo se isLoading è true*/ }
            {isLoading && <Loader />}
        </>
    )
}