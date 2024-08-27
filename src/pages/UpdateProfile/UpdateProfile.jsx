import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleProfileUpdate = e => {
        e.preventDefault();

        // Update user profile
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                toast.error("Failed to update profile. Please try again.");
            });
    };

    return (
        <div className="mx-auto w-1/2 my-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Update Profile</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={user?.email || ""} className="input input-bordered w-full" disabled />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered w-full" required />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;