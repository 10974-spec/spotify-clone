import type { Song } from "@/types";
import { create } from "zustand";

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;

  initializeQueue: (songs: Song[]) => void;
  playAlbum: (songs: Song[], startIndex?: number) => void;
  setCurrentSong: (song: Song | null) => void;
  togglePlay: () => void;
  playPrevious: () => void;
  playNext: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: -1,

  initializeQueue: (songs) => {
    set({
      queue: songs,
      currentSong: get().currentSong || songs[0],
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
    });
  },
  playAlbum: (songs: Song[], startIndex = 0) => {
    if (songs.length === 0) return;

    const song = songs[startIndex];

    set({
      queue: songs,
      currentSong: song,
      currentIndex: startIndex,
      isPlaying: true,
    });
  },
  setCurrentSong: (song: Song | null) => {
    if (!song) return;

    const songIndex = get().queue.findIndex((s) => s.id === song.id);
    set({
      currentSong: song,
       isPlaying: true,
      currentIndex: songIndex  !== -1  ? songIndex :get().currentIndex,
     
    });
  },
  togglePlay: () => {
   const willStartPlaying = !get().isPlaying;
   set({
    isPlaying: willStartPlaying,
   })
  },
  playNext: () => {
    const { currentIndex,queue} = get()
    const nextindex = currentIndex + 1;

    //if there is a next song to play let's play it 
    if(nextindex < queue.length){
    const nextSong = queue[nextindex];
      set({
        currentIndex: nextindex,
        currentSong: nextSong,
        isPlaying: true,
      })
    }else{
      //if there is no next song to play let's stop playing
      set({
        isPlaying: false,
      })
    }
  },
  playPrevious: () => {
    const { currentIndex,queue} = get()
    const previndex = currentIndex - 1;
    if(previndex >= 0){
      const prevSong = queue[previndex];
      set({
        currentIndex: previndex,
        currentSong: prevSong,
        isPlaying: true,
      })
    }
  },
}));
