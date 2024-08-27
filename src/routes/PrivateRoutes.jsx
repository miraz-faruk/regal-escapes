import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center my-5">
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-xs"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;