import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'

export default function Header() {
  return (
    <div className="h-full w-full bg-bg flex items-center justify-between px-4">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
}
