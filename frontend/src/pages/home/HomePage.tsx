import Topbar from "@/components/ui/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    trendingSongs,
    featuredSongs,
  } = useMusicStore();

  useEffect(() => {
    fetchTrendingSongs()
    fetchMadeForYouSongs()
    fetchFeaturedSongs()
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs])

  console.log(featuredSongs, trendingSongs, madeForYouSongs);
  

  return (
    <div className="rounded-md overflow-hidden">
      <Topbar />
      <FeaturedSection/>
    </div>
  );
};

export default HomePage;
