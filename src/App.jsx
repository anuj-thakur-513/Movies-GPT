import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";
import { TrailerAudioContext } from "./utils/GlobalContext";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

const App = () => {
  useAuthStateChanged();
  const showSearch = useSelector((store) => store.search.showSearch);
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
      {!showSearch && <Footer />}
    </>
  );
};

export default App;
