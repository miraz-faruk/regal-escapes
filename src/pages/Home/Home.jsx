import Banner from "../Shared/Banner/Banner";
import Estates from "../Shared/Estates/Estates";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Estates></Estates>
            <Footer></Footer>
            <h2 className="text-2xl font-playfair">This is home</h2>
        </div>
    );
};

export default Home;