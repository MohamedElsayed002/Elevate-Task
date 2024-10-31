import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header } from "../Component";
import Loading from "../Component/Loading";
const HomeLayout = () => {

    const navigate = useNavigation()
    const isLoading = navigate.state === 'loading'

    return (
        <>
            <Header />
            <section>
                {
                    isLoading ?
                        <Loading />
                        :
                        <Outlet />
                }
            </section>
            <Footer/>
        </>
    )
}

export default HomeLayout;