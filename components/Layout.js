import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <MainNavbar />
            { children }
        <Footer />
        </div>
    );
}

export default Layout;