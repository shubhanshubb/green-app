import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import User from "./User/User";
import Navbar from "./Navbar/Navbar";

const HomePortal = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Navbar />
    </>
  );
};

export default HomePortal;
