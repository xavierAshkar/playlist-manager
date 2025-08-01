// src/components/common/SongList.jsx
import SongItem from './SongItem';

export default function SongList({ songs, onClickSong, currentId }) {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
            <SongItem
                title={song.title}
                artist={song.artist}
                isCurrent={song.id === currentId}
                onClick={() => onClickSong?.(song)}
            />
        </li>
      ))}
    </ul>
  );
}
