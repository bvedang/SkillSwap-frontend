import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Testcomp from "./Testcomp";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Testcomp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}
