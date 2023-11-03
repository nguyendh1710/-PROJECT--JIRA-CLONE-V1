import fetcher from'./fetcher'


// hàm post người dùng (đăng nhập) gửi lên API
export async function signin(payload) {
    try {

        const response = await fetcher.post('/Users/signin/',payload);
        // thêm ? optional chaining vào data để kiểm tra có dữ liệu thì trả chứ không báo lỗi
        return (response.data?.content);
      
    } catch  (error){
       
        throw (error.response.data?.content);
      }
    }
  
    //signin(payload);
    
// hàm thêm người dùng (đăng ký) gửi lên API
export async function signup(payload) {
    try {

        const response = await fetcher.post('/Users/signup/',payload);
        // thêm ? optional chaining vào data để kiểm tra có dữ liệu thì trả chứ không báo lỗi
        return (response.data?.content);
      
    } catch  (error){
       
        throw (error.response.data?.content);
      }
    }


// hàm lấy danh sách ghế từ API



export async function getSeat (LichChieuId) {
    try {

        const response = await fetcher.get('/QuanLyDatVe/LayDanhSachPhongVe/',{params:{MaLichChieu:LichChieuId}})
       
        return (response.data.content);
      
    } catch  (error){
       
        throw (error.response.data.content);
      }
    }



