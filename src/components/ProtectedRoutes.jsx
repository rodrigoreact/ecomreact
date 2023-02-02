import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom'; 


const ProtectedRoutes = () => { 
    // const token = useSelector(state => state.token)
    const token = localStorage.getItem("token")

    console.log(token);
    if(token){ 
        return <Outlet /> 
    } else { 
        return <Navigate to='/' /> 
    }
};
export default ProtectedRoutes;