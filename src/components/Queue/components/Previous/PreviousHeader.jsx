export default function PreviousHeader({ mode, setMode }) {
    return (
      <div className="h-[40px] pt-2 flex items-center px-[14px] justify-between group">
        <h3 className="text-heading text-text-muted">Previous</h3>
  
        {/* Arrow button (only visible on hover) */}
        <button
          onClick={() => setMode(mode === "default" ? "previous" : "default")}
          className="opacity-0 group-hover:opacity-100 text-text-subtle hover:text-spotify transition"
        >
          {mode === "default" ? (
            // Arrow Down (enter previous mode)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10 17a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 1.414l-6 6A1 1 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Arrow Up (return to default mode)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    )
  }
  