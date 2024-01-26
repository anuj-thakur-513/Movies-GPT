import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";

const App = () => {
  useAuthStateChanged();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default App;
