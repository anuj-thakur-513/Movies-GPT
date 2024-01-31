import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";
import { TrailerAudioContext } from "./utils/TrailerAudioContext";
import { useState } from "react";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </TrailerAudioContext.Provider>
    </>
  );
};

export default App;
