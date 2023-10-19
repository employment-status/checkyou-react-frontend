import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/Member/Login";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
