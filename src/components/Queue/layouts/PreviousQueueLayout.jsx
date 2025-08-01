import { useEffect, useRef } from "react"
import PreviousHeader from "../components/Previous/PreviousHeader"
import PreviousSongs from "../components/Previous/PreviousSongs"
import CurrentHeader from "../components/Current/CurrentHeader"
import CurrentSong from "../components/Current/CurrentSong"

export default function PreviousQueueLayout({
  previousSongs,
  currentSong,
  setMode,
}) {
  const scrollRef = useRef(null)

  // Auto-scroll to bottom (so current song is visible in footer)
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current
      // Scroll so bottom (footer) is aligned
      container.scrollTop = container.scrollHeight
    }
  }, [previousSongs])

  return (
    <div
      className="w-full bg-bg flex flex-col rounded-t-xl"
      style={{ height: "calc(100vh - 64px - 80px)" }}
    >
      {/* HEADER (fixed at top) */}
      <div className="flex-shrink-0">
        <PreviousHeader mode="previous" setMode={setMode} />
      </div>

      {/* MAIN (scrollable previous songs) */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar">
        <PreviousSongs songs={previousSongs} showAll={true} />
      </div>

      {/* FOOTER (fixed at bottom with current song) */}
      <div className="flex-shrink-0">
        <CurrentHeader />
        <CurrentSong song={currentSong} />
      </div>
    </div>
  )
}
