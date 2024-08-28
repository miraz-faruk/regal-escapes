import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EstateDetails = () => {
    const { id } = useParams(); // Get the estate id from the URL
    const [estate, setEstate] = useState(null);

    useEffect(() => {
        // Fetch the estate data based on the id from the URL
        fetch('/public/estates.json')
            .then(res => res.json())
            .then(data => {
                const selectedEstate = data.find(e => e.id === id);
                setEstate(selectedEstate);
            });
    }, [id]);

    if (!estate) return <p>Loading...</p>;

    const { image, estate_title, description, price, status, area, location, facilities } = estate;

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl text-center font-semibold text-[#d4af37] mb-10">Estate Details</h2>
            <div className="card card-compact bg-base-100 w-full shadow-2xl">
                <figure>
                    <img
                        src={image}
                        alt={estate_title}
                        className="w-full"
                    />
                </figure>
                <div className="card-body bg-base-200">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="flex gap-4 items-center mb-2">
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