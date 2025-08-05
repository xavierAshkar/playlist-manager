// src/components/Playlist/PlaylistsGrid.jsx
import { Link } from 'react-router-dom'
import { mockPlaylists } from '../../data/mockSpotify'
import { Heart, Plus } from 'lucide-react'

export default function PlaylistsGrid() {
  // 1) Special cards for liked songs & creating a new playlist
  const specialCards = [
    {
      key: 'liked',
      to: '/playlists/liked',
      label: 'Liked Songs',
      icon: <Heart className="h-12 w-12 text-spotify" />,
    },
    {
      key: 'create',
      to: '/playlists/create',
      label: 'Create Playlist',
      icon: <Plus className="h-12 w-12 text-spotify" />,
    },
  ]

  // 2) Your mock playlists mapped into the same shape
  const playlistCards = mockPlaylists.map(p => ({
    key: p.id,
    to: `/playlists/${p.id}`,
    label: p.name,
    // placeholder square for album art / playlist cover
    icon: <div className="h-24 w-24 bg-bg-light rounded-md" />,
  }))

  const cards = [...specialCards, ...playlistCards]

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {cards.map(({ key, to, label, icon }) => (
        <Link
          key={key}
          to={to}
          className="flex flex-col items-center bg-bg-light hover:bg-hoverBg rounded-2xl p-4 transition"
        >
          {icon}
          <span className="mt-3 text-text-subtle text-center text-sm">
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}
