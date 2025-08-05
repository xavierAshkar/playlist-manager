// src/data/mockSpotify.js

// ––– Mock Queue Data –––
export const mockQueue = {
    previous: [
      { id: '1',  title: 'Old Song 10', artist: 'Artist A' },
      { id: '2',  title: 'Old Song 9',  artist: 'Artist B' },
      { id: '3',  title: 'Old Song 8',  artist: 'Artist C' },
      { id: '4',  title: 'Old Song 7',  artist: 'Artist D' },
      { id: '5',  title: 'Old Song 6',  artist: 'Artist E' },
      { id: '6',  title: 'Old Song 5',  artist: 'Artist F' },
      { id: '7',  title: 'Old Song 4',  artist: 'Artist G' },
      { id: '8',  title: 'Old Song 3',  artist: 'Artist H' },
      { id: '9',  title: 'Old Song 2',  artist: 'Artist I' },
      { id: '10', title: 'Old Song 1',  artist: 'Artist J' },
    ],
    current: { id: '11', title: 'Current Song', artist: 'Artist K' },
    upcoming: [
      { id: '12', title: 'Next Song 1', artist: 'Artist L' },
      { id: '13', title: 'Next Song 2', artist: 'Artist M' },
      { id: '14', title: 'Next Song 3', artist: 'Artist N' },
      { id: '15', title: 'Next Song 4', artist: 'Artist O' },
      { id: '16', title: 'Next Song 5', artist: 'Artist P' },
      { id: '17', title: 'Next Song 6', artist: 'Artist Q' },
      { id: '18', title: 'Next Song 7', artist: 'Artist R' },
      { id: '19', title: 'Next Song 8', artist: 'Artist S' },
      { id: '20', title: 'Next Song 9', artist: 'Artist T' },
    ],
  };
  
// src/data/mockSpotify.js

// ––– Mock Playlists Data –––
// Each playlist has an `images` array just like Spotify:
//   [ {url, width:640,height:640}, {url,300,300}, {url,60,60} ]
export const mockPlaylists = Array.from({ length: 10 }, (_, i) => {
  const pid = `playlist${i+1}`
  return {
    id: pid,
    name: `Playlist ${i+1}`,
    images: [
      { url: `/mock-images/playlists/${pid}-640.jpg`, width: 640, height: 640 },
      { url: `/mock-images/playlists/${pid}-300.jpg`, width: 300, height: 300 },
      { url: `/mock-images/playlists/${pid}-60.jpg`,  width:  60, height:  60 },
    ],
    tracks: Array.from({ length: 5 }, (_, j) => {
      const tid = `${pid}-t${j+1}`
      return {
        id: tid,
        title: `Track ${j+1}`,
        artist: `Artist ${j+1}`,
        // track-level album images (same 640/300/60 sizes)
        album: {
          images: [
            { url: `/mock-images/albums/track${j+1}-640.jpg`, width: 640, height: 640 },
            { url: `/mock-images/albums/track${j+1}-300.jpg`, width: 300, height: 300 },
            { url: `/mock-images/albums/track${j+1}-60.jpg`,  width:  60, height:  60 },
          ],
        },
      }
    }),
  }
})

// ––– Mock “Liked Songs” Data –––
export const mockLikedSongs = [
  {
    id: 'l1',
    title: 'Favorite Track 1',
    artist: 'Hot Artist',
    albumCoverUrl: 'https://picsum.photos/seed/like1/56/56',
  },
  {
    id: 'l2',
    title: 'Favorite Track 2',
    artist: 'Cool Artist',
    albumCoverUrl: 'https://picsum.photos/seed/like2/56/56',
  },
  // …etc
]