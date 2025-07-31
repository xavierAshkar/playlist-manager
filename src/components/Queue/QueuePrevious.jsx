import { useState, useEffect } from "react"
import SongItem from "./SongItem"

export default function QueuePrevious({ songs, scrollRef }) {
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollTop = el.scrollTop
      const songHeight = 64
      const defaultOffset = (songs.length - 1) * songHeight
      const currentSectionHeight = 64 + 32 // current song + header height

      // Disable sticky when scrolled below current section
      if (scrollTop > defaultOffset + currentSectionHeight) {
        setIsSticky(false)
      } else {
        setIsSticky(true)
      }
    }

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [scrollRef, songs.length])

  return (
    <div>
      {/* Header */}
      <div
        className={`h-[40px] pt-2 flex items-center px-[14px] bg-bg z-20 ${
          isSticky ? "sticky top-0" : ""
        }`}
      >
        <h3 className="text-heading text-text-muted">Previous</h3>
      </div>

      {/* All previous songs */}
      <div>
        {songs.length > 0 ? (
          songs.map(song => (
            <SongItem key={song.id} title={song.title} artist={song.artist} />
          ))
        ) : (
          <div className="h-16 px-3 flex items-center">
            <span className="text-body text-text-subtle">No previous songs</span>
          </div>
        )}
      </div>
    </div>
  )
}
