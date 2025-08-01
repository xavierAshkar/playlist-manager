import SongItem from "../SongItem"

export default function CurrentSong({ song }) {
  return <SongItem title={song.title} artist={song.artist} isCurrent={true} />
}
