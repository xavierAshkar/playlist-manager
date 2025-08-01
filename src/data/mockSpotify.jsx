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
  
  // ––– Mock Playlists Data –––
  export const mockPlaylists = [
    {
      id: 'rock',
      name: 'Rock Classics',
      tracks: [
        { id: '101', title: 'Man in the Box',    artist: 'Alice In Chains' },
        { id: '102', title: 'Nutshell',          artist: 'Alice In Chains' },
        { id: '103', title: 'Them Bones',        artist: 'Alice In Chains' },
        { id: '104', title: 'Would?',            artist: 'Alice In Chains' },
      ],
    },
    {
      id: 'chill',
      name: 'Chill Vibes',
      tracks: [
        { id: '201', title: 'Covet',             artist: 'Basement' },
        { id: '202', title: 'Song A',            artist: 'Artist X' },
        { id: '203', title: 'Song B',            artist: 'Artist Y' },
      ],
    },
    // More playlists can be added here as necessary
  ];
  