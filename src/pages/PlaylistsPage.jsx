// PlaylistsPage.jsx
import Layout from '../components/Layout/Layout'
import QueueSidebar from '../components/Queue/QueueSidebar'
import PlaylistsGrid from '../components/Playlist/PlaylistsGrid'

export default function PlaylistsPage() {
  return (
    <Layout Sidebar={<QueueSidebar />}>
      <PlaylistsGrid />
    </Layout>
  )
}
