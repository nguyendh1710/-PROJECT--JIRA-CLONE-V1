import axios from "axios";

// Setup axios instance
  const fetcher = axios.create({
  baseURL: "https://jiranew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdHJpbmciLCJuYmYiOjE2MjcyOTAzODYsImV4cCI6MTYyNzI5Mzk4Nn0.75DGRowsyI7Sl6bmYgKuZ8oaG36fOr0TUWbUwAjtDs'

  },
});

export default fetcher;

//kỹ thuật request interceptor để đính kèm Authorization xong gửi request xác thực là user nào SAU KHI ĐÃ đăng nhập

fetcher.interceptors.request.use((request)=>{


   const user=JSON.parse(localStorage.getItem("currentUser"))

if(user)
{
  // chú ý làm Authorization phải có chữ Bearer
  request.headers.Authorization= `Bearer ${user.accessToken} `


}
return request;
})
//kỹ thuật response interceptor -->nhận dữ liệu về


fetcher.interceptors.response.use(((response)=>{



return response;
}), 
(

(error)=>{


  if(error.response.status===401)
  {
    // chú ý làm Authorization phải có chữ Bearer
    localStorage.removeItem("currentUser")
  // sau đó đẩy user qua lại trang signin mà do fetcher nằm ngoài phạm vi react nên ko dùng hook của react-router-dom dc nên phải làm như vầy
     window.location.replace('/signin')
  }

return Promise.reject(error);


}






)






)
