// src/pages/PlaylistDetailPage.jsx
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import QueueSidebar from '../components/Queue/QueueSidebar'
import PlaylistDetail from '../components/Playlist/PlaylistDetail'

export default function PlaylistDetailPage() {
  const { id } = useParams()
  return (
    <Layout Sidebar={<QueueSidebar />}>
      <PlaylistDetail playlistId={id} />
    </Layout>
  )
}
