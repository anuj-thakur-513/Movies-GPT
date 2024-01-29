import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";
import { TrailerAudioContext } from "./utils/trailerAudioContext";
import { useState } from "react";

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
      </TrailerAudioContext.Provider>
    </>
  );
};

export default App;
