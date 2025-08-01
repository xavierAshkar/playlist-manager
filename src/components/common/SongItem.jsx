// src/components/common/SongItem.jsx
export default function SongItem({ title, artist, isCurrent = false, onClick }) {
    return (
      <div
        onClick={onClick}
        className="flex items-center h-16 px-2 hover:bg-bg-light rounded-md group transition"
      >
        {/* LEFT: Placeholder Cover */}
        <div className="w-12 h-12 rounded-md bg-spotify mr-3"></div>
  
        {/* MIDDLE: Title + Artist */}
        <div className="flex flex-col gap-[2px] flex-1 h-12">
          <span className={`text-subheading ${isCurrent ? 'text-spotify' : 'text-text'}`}>
            {title}
          </span>
          <span className="text-body text-text-subtle">{artist}</span>
        </div>
  
        {/* RIGHT: Heart (visible on hover) */}
        <button className="opacity-0 group-hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-text-muted hover:text-spotify"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.736C11.597 4.876 9.935 3.75 8 3.75 5.411 3.75 3.312 5.765 3.312 8.25c0 5.25 8.688 10.5 8.688 10.5s8.688-5.25 8.688-10.5z"
            />
          </svg>
        </button>
      </div>
    );
  }
  