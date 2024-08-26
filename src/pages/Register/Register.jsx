import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);

        // Password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        // reset error
        setRegisterError('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User created successfully');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-[#D6AD60] text-3xl text-center font-bold mt-2 lg:mt-4">Please Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body w-full lg:w-1/3 mx-auto">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? Please <Link className="text-blue-600 font-medium" to="/login">Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;