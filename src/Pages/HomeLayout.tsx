import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header } from "../Component";
import Loading from "../Component/Loading";
import ScrollToTop from "../Component/ScrollTop";
const HomeLayout = () => {

    const navigate = useNavigation()
    const isLoading = navigate.state === 'loading'

    return (
        <>  
            <ScrollToTop/>

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