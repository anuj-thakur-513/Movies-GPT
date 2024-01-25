import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import useAuthStateChanged from "./hooks/useAuthStateChanged";

const App = () => {
  useAuthStateChanged();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default App;
