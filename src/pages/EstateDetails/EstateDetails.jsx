import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const EstateDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { estate } = location.state || {};

    if (!estate) return <p>Loading...</p>;

    const { image, estate_title, description, segment_name, price, status, area, location: estateLocation, facilities } = estate;

    return (
        <div className="container mx-auto mt-10">
            {/* Full Height Banner Image */}
            <div className="relative w-full h-auto">
                <img
                    src={image}
                    alt={estate_title}
                    className="w-full max-h-screen object-cover"
                />
                <h1 className="absolute top-5 bg-black bg-opacity-10 px-2 py-1 rounded left-1/2 transform -translate-x-1/2 text-5xl text-white font-bold">
                    {estate_title}
                </h1>
            </div>

            {/* Estate Details */}
            <div className="card card-compact bg-base-100 w-full shadow-2xl mt-6">
                <div className="card-body bg-base-200">
                    <p className='text-lg'>{description}</p>
                    <div className="flex gap-4 items-center mb-2">
                        <div className="font-bold space-y-1">
                            <p>ID:</p>
                            <p>Segment:</p>
                            <p>Price:</p>
                            <p>Status:</p>
                            <p>Area:</p>
                            <p>Location:</p>
                            <p>Facilities:</p>
                        </div>
                        <div className="space-y-1 text-stone-700">
                            <p>{id}</p>
                            <p>{segment_name}</p>
                            <p>{price}</p>
                            <p>{status}</p>
                            <p>{area}</p>
                            <p>{estateLocation}</p>
                            <p>{facilities.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

EstateDetails.propTypes = {
    estate: PropTypes.shape({
        image: PropTypes.string.isRequired,
        estate_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};

export default EstateDetails;
