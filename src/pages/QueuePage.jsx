// QueuePage.jsx
import Layout from '../components/Layout/Layout'
import QueueSidebar from '../components/Queue/QueueSidebar'
import QueueMain from '../components/Queue/QueueMain'

export default function QueuePage() {
  return (
    <Layout Sidebar={<QueueSidebar />}>
      <QueueMain />
    </Layout>
  )
}
