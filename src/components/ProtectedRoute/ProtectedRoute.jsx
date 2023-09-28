import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, redirectTo}) => {

    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }

    return <Outlet />;
}

