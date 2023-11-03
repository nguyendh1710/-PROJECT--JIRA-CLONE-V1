import  {React, children } from 'react'
import { useUserContext } from '../../contexts/UserContext/UserContext';
import { Navigate,Outlet, useLocation } from 'react-router-dom';







export default function ProtectedRoute({children}) {

// dùng hook useLocation
const location=useLocation()

const url=`/signin?redirectTo=${location.pathname}`

// dùng hook useUserContext
const {currentUser}=useUserContext();


if(!currentUser){


//user chưa đăng nhập-->redirect về signgin
// thêm relace để xóa luôn dữ liệu history không đẩy về home lại
return <Navigate to={url} replace/>

}











  return (<div className='sign'><Outlet/></div>) 
    
}
