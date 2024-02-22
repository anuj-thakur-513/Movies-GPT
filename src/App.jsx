import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import useAuthStateChanged from "./hooks/useAuthStateChanged";
import Header from "./components/Header";
import TrailerAudioContext from "./context/TrailerAudioContext";
import MovieDetails from "./pages/MovieDetails";
import Favourites from "./pages/Favourites";

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
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <ToastContainer />
      </TrailerAudioContext.Provider>
    </>
  );
};

export default App;
