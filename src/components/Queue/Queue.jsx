import { useRef, useEffect, useState } from "react"
import QueuePrevious from "./QueuePrevious"
import QueueCurrent from "./QueueCurrent"
import QueueList from "./QueueList"

export default function Queue() {
  const scrollRef = useRef(null)
  const [stickCurrentTop, setStickCurrentTop] = useState(false)
  const [stickCurrentBottom, setStickCurrentBottom] = useState(false)
  const [showRecenter, setShowRecenter] = useState(false)
  const [isBelowCenter, setIsBelowCenter] = useState(false);

  // Mock data (same as before)
  const previousSongs = [
    { id: 1, title: "Old Song 10", artist: "Artist A" },
    { id: 2, title: "Old Song 9", artist: "Artist B" },
    { id: 3, title: "Old Song 8", artist: "Artist C" },
    { id: 4, title: "Old Song 7", artist: "Artist D" },
    { id: 5, title: "Old Song 6", artist: "Artist E" },
    { id: 6, title: "Old Song 5", artist: "Artist F" },
    { id: 7, title: "Old Song 4", artist: "Artist G" },
    { id: 8, title: "Old Song 3", artist: "Artist H" },
    { id: 9, title: "Old Song 2", artist: "Artist I" },
    { id: 10, title: "Old Song 1", artist: "Artist J" },
  ]
  const currentSong = { id: 11, title: "Current Song", artist: "Artist K" }
  const upcomingSongs = [
    { id: 12, title: "Next Song 1", artist: "Artist L" },
    { id: 13, title: "Next Song 2", artist: "Artist M" },
    { id: 14, title: "Next Song 3", artist: "Artist N" },
    { id: 15, title: "Next Song 4", artist: "Artist O" },
    { id: 16, title: "Next Song 5", artist: "Artist P" },
    { id: 17, title: "Next Song 6", artist: "Artist Q" },
    { id: 18, title: "Next Song 7", artist: "Artist R" },
    { id: 19, title: "Next Song 8", artist: "Artist S" },
    { id: 20, title: "Next Song 9", artist: "Artist T" },
    { id: 21, title: "Next Song 10", artist: "Artist U" },
  ]

  const songHeight = 64 // h-16
  const defaultOffset = (previousSongs.length - 1) * songHeight
  const thresholdTop = previousSongs.length * songHeight

  // Scroll to default position on mount
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: defaultOffset })
  }, [])

  // Toggle sticky states + recenter visibility
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollTop = el.scrollTop

      setStickCurrentTop(scrollTop >= thresholdTop)
      setStickCurrentBottom(scrollTop < defaultOffset)

      const threshold = 144
      setShowRecenter(Math.abs(scrollTop - defaultOffset) > threshold)

      // Arrow direction: down if user scrolled up (above center)
      setIsBelowCenter(scrollTop > defaultOffset)
    }

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [defaultOffset, thresholdTop])

  const handleRecenter = () => {
    scrollRef.current?.scrollTo({ top: defaultOffset, behavior: "smooth" })
  }

  return (
    <div
      ref={scrollRef}
      className="relative w-full bg-bg flex flex-col rounded-t-xl overflow-y-auto custom-scrollbar"
      style={{ height: "calc(100vh - 64px - 80px)" }}
    >
      {/* Previous section */}
      <QueuePrevious songs={previousSongs} scrollRef={scrollRef} />

      {/* Sticky block for Current (top or bottom) */}
      <div
        className={
          stickCurrentTop
            ? "sticky top-0 bg-bg z-10"
            : stickCurrentBottom
            ? "sticky bottom-0 bg-bg z-10"
            : ""
        }
      >
        <div className="h-[40px] pt-2 flex items-center px-[14px]">
          <h3 className="text-heading text-text-muted">Current</h3>
        </div>
        <QueueCurrent song={currentSong} />
        <div className="h-[40px] pt-2 flex items-center px-[14px]">
          <h3 className="text-heading text-text-muted">Queue</h3>
        </div>
      </div>

      {/* Upcoming songs */}
      <QueueList songs={upcomingSongs} />

      {/* Recenter Button */}
      {showRecenter && (
        <button
          onClick={handleRecenter}
          className="fixed bottom-[80px] right-[144px] bg-bg-dark text-text-subtle opacity-70 border border-border-light p-1 rounded-full shadow-md hover:opacity-100 z-30"
        >
          {isBelowCenter ? (
            // Arrow Up
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z" clipRule="evenodd" />
            </svg>
          ) : (
            // Arrow Down
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 17a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 1.414l-6 6A1 1 0 0110 17z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}
