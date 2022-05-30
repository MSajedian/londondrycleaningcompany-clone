import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';

const Layout = ({ children }) => {
    return (
        <div>
            <MainNavbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;