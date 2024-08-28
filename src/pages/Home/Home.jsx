import Slider from "../Shared/Slider/Slider";
import Constructions from "../Shared/Constructions/Constructions";
import Estates from "../Shared/Estates/Estates";
import Gallery from "../Shared/Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Estates></Estates>
            <Constructions></Constructions>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;