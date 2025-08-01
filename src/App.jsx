import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import QueuePage from './pages/QueuePage'
import PlaylistsPage from './pages/PlaylistsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to playlists */}
        <Route path="/" element={<Navigate to="/playlists" replace />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
