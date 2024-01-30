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
  const [currentSongPlaying, setCurrentSongPlaying] =
    useState<MusicProps | null>(null);
  const [likedMusic, setLikedMusic] = useState<MusicProps[]>([]);
  const [libraryMusic, setLibraryMusic] = useState<MusicProps[]>([]);

  const findCurrentSong = (id: number) => {
    const findCurrentSong = spotifyData.find((data) => {
      return data.id === id;
    });
    return findCurrentSong;
  };

  const handleCurrentId = (id: number) => {
    const currentSong = findCurrentSong(id);
    if (currentSong) setCurrentSongPlaying(currentSong);
  };

  const handleAddCurrentSongToLiked = (id: number) => {
    const currentSong = findCurrentSong(id);
    if (currentSong) {
      setLikedMusic((prevData) => {
        if (prevData.includes(currentSong)) {
          return prevData.filter((data) => {
            return data.id !== id;
          });
        }
        return prevData.concat(currentSong);
      });
    }
  };

  const handleAddCurrentSongToLibrary = (id: number) => {
    const currentSong = findCurrentSong(id);
    if (currentSong) {
      setLibraryMusic((prevData) => {
        if (prevData.includes(currentSong)) {
          return prevData.filter((data) => {
            return data.id !== id;
          });
        }

        return prevData.concat(currentSong);
      });
    }
  };

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
    <div className="text-white  relative min-h-screen flex flex-1">
      <Router>
        <LeftBar  libraryMusic={libraryMusic} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                handleAddCurrentSongToLibrary={handleAddCurrentSongToLibrary}
                handleCurrentId={handleCurrentId}
                spotifyData={spotifyData}
              />
            }
          />
        </Routes>
        {currentSongPlaying && (
          <BottomBanner
            handleAddCurrentSongToLiked={handleAddCurrentSongToLiked}
            currentSongPlaying={currentSongPlaying}
          />
        )}
      </Router>
    </div>
  );
}
