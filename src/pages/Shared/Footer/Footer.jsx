import footerImage from '../../../assets/images/footer-image.jpg'

const Footer = () => {
    return (
        <div className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${footerImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <footer className="relative text-white">
                <div className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
                        {/* Company Info */}
                        <div className='flex items-center'>
                            <h5 className="text-4xl font-extrabold mb-2 text-[#d4af44]">Regal Escapes</h5>
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
                        <div className='space-y-1'>
                            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
                            <p className="text-sm">Email: contact@regalescapes.com</p>
                            <p className="text-sm">Phone: +123-456-7890</p>
                            <p className="text-sm">Address: 123 Regal Ave, Beverly Hills, CA</p>
                        </div>
                        {/* Social Media */}
                        <div>
                            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                            <div className='flex gap-4'>
                                <a href=""><img className='w-10' src={`https://i.ibb.co/WvFGbJd/facebook.png`} alt="" /></a>
                                <a href=""><img className='w-10' src={`https://i.ibb.co/JnfJp4x/instagram.png`} alt="" /></a>
                                <a href=""><img className='w-10' src={`https://i.ibb.co/TYtG3hW/twitter.png`} alt="" /></a>
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