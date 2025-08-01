// src/components/Playlist/PlaylistDetail.jsx
import { mockPlaylists } from '../../data/mockSpotify';
import SongList from '../common/SongList';

export default function PlaylistDetail({ playlistId }) {
  const playlist = mockPlaylists.find((p) => p.id === playlistId);

  return (
    <>
      <h2 className="px-4 py-2">{playlist.name}</h2>
      <SongList songs={playlist.tracks} />
    </>
  );
}
