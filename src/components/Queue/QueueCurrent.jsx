import SongItem from './SongItem'

export default function QueueCurrent() {
  const currentSong = {
    title: 'Current Song',
    artist: 'Artist B',
  }

  return (
    <div className="pt-2 pb-1">
    {/* Header */}
    <div className="h-[32px] flex items-center px-4">
        <h3 className="text-heading text-text-subtle">Current</h3>
    </div>

    {/* Song Content */}
    <div>
        <SongItem title={currentSong.title} artist={currentSong.artist} isCurrent={true} />
    </div>
    </div>
  )
}
