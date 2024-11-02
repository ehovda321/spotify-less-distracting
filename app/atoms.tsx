import { atomWithStorage, createJSONStorage } from "jotai/utils";

export const playlistsAtom = atomWithStorage('playlists', [
    {id: '0000-0000-0000-0000', type: 'hearted', name:'Liked Songs', creator: 'Muer'},
    {id: '0000-0000-0000-0001', type: 'normal', name: 'Playlist #1', creator: 'Muer'},
    {id: '0000-0000-0000-0002', type: 'normal', name: 'Playlist #2', creator: 'Muer'}
  ])

export const playerStateAtom = atomWithStorage('playerState', {
    playing: false,
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
    buffering: false,
    duration: undefined as (number | undefined),
    progressValues: [0],
    error: false,
    volume: 1,
    justLoadedFromStorage: true
}, {                
    ...createJSONStorage(() => localStorage),                                    
    getItem: (key, initialValue) => {
        const storedValue = localStorage.getItem(key)
        if (!storedValue) return initialValue;
        try {
          const x = JSON.parse(storedValue)
          x.playing = false;
          x.justLoadedFromStorage = true;
          return x
        } catch {
          return initialValue
        }
  }
}
)