import { BrowserRouter,Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Auth/>} />
          <Route path="dashboard" element={<Home/>} />
          
        </Routes>
      
    </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />

    </div>
  );
}

export default App;

