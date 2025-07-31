export default function SongItem({ title, artist }) {
    return (
      <div className="flex flex-col">
        <span className="text-body">{title}</span>
        <span className="text-body text-subtle-text">{artist}</span>
      </div>
    )
  }
  