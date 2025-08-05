// src/components/Queue/QueueSidebar.jsx
import { mockQueue } from '../../data/mockSpotify';
import SongList from '../common/SongList';

export default function QueueSidebar() {
  const { previous, current, upcoming } = mockQueue;

  return (
    <div className="bg-bg flex flex-col h-full mx-2 rounded-t-2xl">
      {/* ─── Top (fixed) ─────────────────────────────────────────── */}
      <div className="flex-shrink-0 px-1">
        <h3 className="py-2 px-4 text-heading text-text-muted">Previous</h3>
        <SongList songs={previous.slice(0, 1)} />

        <h3 className="py-2 px-4 text-heading text-text-muted">Current</h3>
        <SongList 
            songs={[current]} 
            onClickSong={(song) => {
            console.log('clicked current song', song);
        }}
            currentId={current.id}
        />

        <h3 className="py-2 px-4 text-heading text-text-muted">Queue</h3>
      </div>

      {/* ─── Bottom (scrollable) ────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-1">
        <SongList songs={upcoming} />
      </div>
    </div>
  );
}
