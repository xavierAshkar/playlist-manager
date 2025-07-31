import QueuePrevious from './QueuePrevious'
import QueueCurrent from './QueueCurrent'
import QueueList from './QueueList'

export default function Queue() {
  return (
    <div className="h-full w-full bg-bg-light flex flex-col p-4 gap-4">
      {/* Previous Songs */}
      <QueuePrevious />

      {/* Current Song */}
      <QueueCurrent />

      {/* Upcoming Songs */}
      <QueueList />
    </div>
  )
}
