import { useState, useEffect } from "react";
import { fetchDataByQuery } from "./constants/api";
import { MusicProps } from "./constants/typings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LeftBar from "./components/leftbar/LeftBar";
import BottomBanner from "./components/banner/BottomBanner";

export default function App() {
  const [spotifyData, setSpotifyData] = useState<MusicProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("eminem");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataByQuery(searchQuery);
        setSpotifyData(data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <div className="text-white  relative h-screen flex flex-1">
      <Router>
        <LeftBar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <BottomBanner />
      </Router>
    </div>
  );
}
