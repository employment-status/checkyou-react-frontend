import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/Member/Login";
import MainPage from "./pages/MainPage";
import UserManagement from "./pages/Admin/UserManagement,";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 어드민 페이지 */}
          <Route path="/admin" element={<UserManagement />} />

          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
