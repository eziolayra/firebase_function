import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Register from "./Components/auth/register/Register";
import { AuthProvider } from "./Contex/AuthContex";
import Display from "./Components/home/Display";
import NoPage from "./Components/NoPage";
import Home from "./Components/home/Home";
import Login from "./Components/auth/login/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/display" element={<Display />} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
