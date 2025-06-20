import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton"
import { useMusicStore } from "@/stores/useMusicStore"


const FeaturedSection = () => {

    const {featuredSongs,isLoading, error} = useMusicStore()

    if (true) {
        return <FeaturedGridSkeleton/>
    }
  return 
  
}

export default FeaturedSection