import SongItem from './SongItem'

export default function QueueCurrent({ song }) {
  return (
    <div>
      {/* Current Song */}
      <SongItem title={song.title} artist={song.artist} isCurrent={true} />
    </div>
  )
}
