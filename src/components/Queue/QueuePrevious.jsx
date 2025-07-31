import SongItem from './SongItem'

export default function QueuePrevious() {
  const previousSong = {
    title: 'Old Song',
    artist: 'Artist A',
  }

  return (
    <div className="pt-2 pb-1">
    {/* Header */}
    <div className="h-[32px] flex items-center px-4">
        <h3 className="text-heading text-text-subtle">Previous</h3>
    </div>

    {/* Song Content */}
    <div>
        <SongItem title={previousSong.title} artist={previousSong.artist} />
    </div>
    </div>
  )
}
