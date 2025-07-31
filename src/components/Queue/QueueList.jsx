import SongItem from './SongItem'

export default function QueueList({ songs }) {
  return (
    <div>
      {/* All upcoming songs */}
      <div>
        {songs.map(song => (
          <SongItem key={song.id} title={song.title} artist={song.artist} />
        ))}
      </div>
    </div>
  )
}
