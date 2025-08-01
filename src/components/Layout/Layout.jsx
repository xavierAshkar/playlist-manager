import HeaderLeft from './Header/HeaderLeft'
import HeaderCenter from './Header/HeaderCenter'
import HeaderRight from './Header/HeaderRight'
import FooterLeft from './Footer/FooterLeft'
import FooterCenter from './Footer/FooterCenter'
import FooterRight from './Footer/FooterRight'

export default function Layout({ children, Sidebar }) {
  return (
    <div className="flex flex-col h-screen bg-bg-dark">

      {/* HEADER */}
      <header
        className="h-[64px] w-full flex items-center justify-between px-4 bg-bg-dark text-text"
      >
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </header>

      {/* BODY: main content + sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>

        {/* Queue sidebar */}
        <aside
          className="overflow-auto custom-scrollbar"
          style={{ width: '320px' }}   // 320px sidebar
        >
          {Sidebar}
        </aside>
      </div>

      {/* FOOTER */}
      <footer
        className="flex items-center justify-between px-4 bg-bg-dark text-text"
        style={{ height: '80px' }}   // 80px footer
      >
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </footer>
    </div>
  )
}
