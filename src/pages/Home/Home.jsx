import Banner from "../Shared/Banner/Banner";
import Constructions from "../Shared/Constructions/Constructions";
import Estates from "../Shared/Estates/Estates";
import Gallery from "../Shared/Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Estates></Estates>
            <Constructions></Constructions>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;