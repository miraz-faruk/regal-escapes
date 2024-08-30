import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations in ms
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="my-5">
            <h2 className="text-4xl font-bold text-center text-[#00308E] mb-5" data-aos="fade-up">Services of Regal Escapes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
                <div className="card bg-base-200 shadow-xl" data-aos="fade-right">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center text-[#d4af37]">Property Sales</h2>
                        <p><span className="font-bold">Exclusive Listings:</span> We offer a curated collection of high-end properties, including penthouses, villas, private islands, and more. Our portfolio features some of the most sought-after luxury homes worldwide.</p>
                        <p><span className="font-bold">Market Analysis:</span> Our experts provide detailed market analysis and pricing strategies to help you sell your property at the best possible price.</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl" data-aos="fade-left">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center text-[#d4af37]">Property Acquisition</h2>
                        <p><span className="font-bold">Personalized Property Search:</span> We work closely with clients to understand their preferences and find properties that match their specific needs. From beachfront homes to urban penthouses, we cover it all.</p>
                        <p><span className="font-bold">Investment Advisory:</span> Our team provides insights into market trends and investment opportunities, helping you make informed decisions when purchasing luxury real estate.</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl" data-aos="fade-up">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center text-[#d4af37]">Property Management</h2>
                        <p><span className="font-bold">Comprehensive Management:</span> We handle all aspects of property management, ensuring that your property is well-maintained and generates optimal returns.</p>
                        <p><span className="font-bold">Tenant Relations:</span> Our team manages tenant relations, handling everything from lease agreements to maintenance requests.</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl" data-aos="fade-up">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center text-[#d4af37]">Consulting Services</h2>
                        <p><span className="font-bold">Expert Guidance:</span> Our consultants provide expert advice on buying, selling, and investing in luxury real estate, tailored to your unique needs.</p>
                        <p><span className="font-bold">Market Insights:</span> Gain valuable insights into the luxury real estate market to make informed decisions and maximize your investments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
