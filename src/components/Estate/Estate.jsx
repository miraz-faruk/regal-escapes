import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Estate = ({ estate }) => {
    const navigate = useNavigate();

    const { id, image, estate_title, description, price, status, area, location, facilities } = estate;

    const handleViewProperty = () => {
        navigate(`/estate-details/${id}`, { state: { estate } });
    };

    return (
        <div>
            <div className="card card-compact bg-base-100 w-auto lg:w-96 shadow-2xl mx-3">
                <figure>
                    <img src={image} alt={estate_title} />
                </figure>
                <div className="card-body bg-base-200">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="flex gap-4 mb-2">
                        <div className="font-bold space-y-1">
                            <p>Price:</p>
                            <p>Status:</p>
                            <p>Area:</p>
                            <p>Location:</p>
                            <p>Facilities:</p>
                        </div>
                        <div className="space-y-1 text-stone-700">
                            <p>{price}</p>
                            <p>{status}</p>
                            <p>{area}</p>
                            <p>{location}</p>
                            <p>{facilities.join(', ')}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            onClick={handleViewProperty}
                            className="btn btn-outline bg-[#00308E] text-white"
                        >
                            View Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        estate_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default Estate;
