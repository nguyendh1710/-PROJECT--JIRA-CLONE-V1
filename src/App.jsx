import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectLayout from "./layouts/ProjectLayout/ProjectLayout";

import NotFound from "./components/NotFound";
import Signup from "./modules/Auth/pages/Signup";
import Signin from "./modules/Auth/pages/Signin";
import LoginFb from "./modules/Auth/pages/FacebookLogin/LoginFb";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import CreateProject from "./modules/CreateProject/CreateProject";
import ProjectManagement from "./modules/ProjectManagement/ProjectManagement";





function App() {







  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<MainLayout />}>
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
              <Route path="loginfb" element={<LoginFb />} />
              <Route element={<ProtectedRoute />}>
                <Route   element={<ProjectLayout />}>
                  <Route index element={<ProjectManagement/>} />
                  <Route path="createproject" element={<CreateProject/>} />





                </Route>
              </Route>
            </Route>
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
