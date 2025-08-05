// src/components/Playlist/PlaylistDetail.jsx
import { useParams } from 'react-router-dom'
import { mockPlaylists } from '../../data/mockSpotify'
import SongList from '../common/SongList'

export default function PlaylistDetail() {
  const { id: playlistId } = useParams()
  const playlist = mockPlaylists.find(p => p.id === playlistId)

  if (!playlist) {
    return <div className="p-6 text-text-subtle">Playlist not found.</div>
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header: cover + title */}
      <div className="flex items-center gap-4">
        {playlist.images[0] ? (
          <img
            src={playlist.images[0].url}
            alt={playlist.name}
            className="h-24 w-24 rounded-md object-cover"
          />
        ) : (
          <div className="h-24 w-24 bg-bg-light rounded-md" />
        )}
        <h1 className="text-3xl font-bold text-text">{playlist.name}</h1>
      </div>

      {/* Track list */}
      <SongList
        songs={playlist.tracks.map(t => ({
          id: t.id,
          title: t.title,
          artist: t.artist,
        }))}
      />
    </div>
  )
}
