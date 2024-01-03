import { useState, useEffect } from "react";
import { fetchDataByQuery } from "./constants/api";
import { MusicProps } from "./constants/typings";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [spotifyData, setSpotifyData] = useState<MusicProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataByQuery("eminem");
        setSpotifyData(data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LandingPage />}/>
      </Routes>
    </Router>
  )
}
