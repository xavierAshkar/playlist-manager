import QueuePrevious from './QueuePrevious'
import QueueCurrent from './QueueCurrent'
import QueueList from './QueueList'

export default function Queue() {
  return (
    <div className="h-full w-full bg-bg flex flex-col px-1 rounded-t-2xl">
      {/* Previous Songs */}
      <QueuePrevious />

      {/* Current Song */}
      <QueueCurrent />

      {/* Upcoming Songs */}
      <QueueList />
    </div>
  )
}
