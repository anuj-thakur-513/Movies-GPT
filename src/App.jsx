import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";
import TrailerAudioContext from "./context/TrailerAudioContext";

const App = () => {
  useAuthStateChanged();
  const [muteAudio, setMuteAudio] = useState(1);

  return (
    <>
      <TrailerAudioContext.Provider
        value={{ muteAudio: muteAudio, setMuteAudio }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <ToastContainer />
      </TrailerAudioContext.Provider>
    </>
  );
};

export default App;
