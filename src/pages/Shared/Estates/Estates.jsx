import { useEffect, useState } from "react";
import Estate from "../../../components/Estate/Estate";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, []);

    const handleEstateDetails = (estate) => {
        navigate('/estate-details', { state: { estate } });
    };

    return (
        <div className="container mx-auto lg:my-10">
            <h2 className="text-3xl text-center font-semibold text-[#d4af37] mb-10 sm:mx-2">Estates</h2>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-2 lg:gap-6">
                {estates.map((estate) => (
                    <Estate
                        key={estate.id}
                        estate={estate}
                        handleEstateDetails={handleEstateDetails}
                    />
                ))}
            </div>
        </div>
    );
};

Estates.propTypes = {
    handleEstateDetails: PropTypes.func
};

export default Estates;