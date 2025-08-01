import SongItem from "../SongItem"

export default function PreviousSongs({ songs, showAll = false }) {
  const songsToRender = showAll ? songs : songs.slice(-1) // only most recent if not showAll

  return (
    <div>
      {songsToRender.length > 0 ? (
        songsToRender.map((song) => (
          <SongItem key={song.id} title={song.title} artist={song.artist} />
        ))
      ) : (
        <div className="h-16 px-3 flex items-center">
          <span className="text-body text-text-subtle">No previous songs</span>
        </div>
      )}
    </div>
  )
}
