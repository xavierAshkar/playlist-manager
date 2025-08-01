import PreviousHeader from "../components/Previous/PreviousHeader"
import PreviousSongs from "../components/Previous/PreviousSongs"
import CurrentHeader from "../components/Current/CurrentHeader"
import CurrentSong from "../components/Current/CurrentSong"
import NextHeader from "../components/Next/NextHeader"
import NextSongs from "../components/Next/NextSongs"

export default function DefaultQueueLayout({
  previousSongs,
  currentSong,
  upcomingSongs,
  setMode,
}) {
  return (
    <div
      className="w-full bg-bg flex flex-col rounded-t-xl"
      style={{ height: "calc(100vh - 64px - 80px)" }}
    >
      {/* HEADER (Fixed) */}
      <div className="flex-shrink-0">
        <PreviousHeader mode="default" setMode={setMode} />
        <PreviousSongs songs={previousSongs} showAll={false} />
        <CurrentHeader />
        <CurrentSong song={currentSong} />
        <NextHeader />
      </div>

      {/* MAIN (Scrollable queue) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <NextSongs songs={upcomingSongs} />
      </div>

      {/* FOOTER (Empty for default) */}
      <div className="flex-shrink-0 h-0"></div>
    </div>
  )
}
