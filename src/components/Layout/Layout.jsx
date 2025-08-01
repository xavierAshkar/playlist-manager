import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'
import FooterLeft from './FooterLeft'
import FooterCenter from './FooterCenter'
import FooterRight from './FooterRight'

export default function Layout({ children, Sidebar }) {
  return (
    <div className="flex flex-col h-screen">

      {/* HEADER */}
      <header
        className="flex items-center justify-between px-4"
        style={{ height: '60px' }}   // 60px header
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
          className="overflow-auto border-l"
          style={{ width: '320px' }}   // 320px sidebar
        >
          {Sidebar}
        </aside>
      </div>

      {/* FOOTER */}
      <footer
        className="flex items-center justify-between px-4"
        style={{ height: '80px' }}   // 80px footer
      >
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </footer>
    </div>
  )
}
