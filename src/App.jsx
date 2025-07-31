import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Queue from './components/Queue/Queue'

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-bg-dark text-text">
      {/* Header */}
      <header className="h-[72px] w-full">
        <Header />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Main Section */}
        <main className="flex-1 mx-2">
          {/* Your main content goes here */}
        </main>

        {/* Queue Section */}
        <aside className="w-[304px] mx-2">
          <Queue />
        </aside>
      </div>

      {/* Footer */}
      <footer className="h-[80px] w-full">
        <Footer />
      </footer>
    </div>
  )
}
