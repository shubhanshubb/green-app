import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import HomeRoute from "./components/HomeRoute";

const App = () => {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homeportal/*" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
