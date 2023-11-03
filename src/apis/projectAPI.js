import fetcher from "./fetcher";

export async function getAllProject() {
  try {
    const response = await fetcher.get("/Project/getAllProject");

    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
// get project category

export async function getProjectCategory() {
  try {
    const response = await fetcher.get("/ProjectCategory");

    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}






// hàm create project  gửi lên API
export async function createProject(payload) {
  try {

      const response = await fetcher.post('/createProjectAuthorize',payload);
      // thêm ? optional chaining vào data để kiểm tra có dữ liệu thì trả chứ không báo lỗi
      return (response.data?.content);
    
  } catch  (error){
     
      throw (error.response.data?.content);
    }
  }

  