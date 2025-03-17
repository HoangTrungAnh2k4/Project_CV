import Header from '../Header/Header';

function PrimaryLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="">{children}</div>
        </div>
    );
}

export default PrimaryLayout;
