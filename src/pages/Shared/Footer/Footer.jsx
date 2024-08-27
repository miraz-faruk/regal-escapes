import footerImage from '../../../assets/images/footer-image.jpg'

const Footer = () => {
    return (
        <div className="bg-cover bg-center"
            style={{ backgroundImage: `url(${footerImage})` }}>
            <footer className="text-white">
                <div className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Company Info */}
                        <div>
                            <h5 className="text-3xl font-extrabold mb-2">Regal Escapes</h5>
                        </div>
                        {/* Links */}
                        <div>
                            <h5 className="text-lg font-bold mb-2">Links</h5>
                            <ul className="list-none space-y-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                                <li><a href="#" className="hover:underline">Properties</a></li>
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div>
                            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
                            <p className="text-sm">Email: contact@regalescapes.com</p>
                            <p className="text-sm">Phone: +123-456-7890</p>
                            <p className="text-sm">Address: 123 Regal Ave, Beverly Hills, CA</p>
                        </div>
                        {/* Social Media */}
                        <div>
                            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i> Facebook</a>
                                <a href="#" className="hover:underline"><i className="fab fa-instagram"></i> Instagram</a>
                                <a href="#" className="hover:underline"><i className="fab fa-twitter"></i> Twitter</a>
                                <a href="#" className="hover:underline"><i className="fab fa-linkedin"></i> LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-sm">&copy; 2024 Regal Escapes. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;