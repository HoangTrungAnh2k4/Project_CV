import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PrimaryLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="px-40 pb-12 pt-6">{children}</div>
            <Footer />
        </div>
    );
}

export default PrimaryLayout;
