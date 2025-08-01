import SongItem from "../SongItem"

export default function NextSongs({ songs }) {
  return (
    <div>
      {songs.map((song) => (
        <SongItem key={song.id} title={song.title} artist={song.artist} />
      ))}
    </div>
  )
}
