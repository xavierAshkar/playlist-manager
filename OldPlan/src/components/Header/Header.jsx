import HeaderLeft from '../../../../src/components/Layout/Header/HeaderLeft'
import HeaderCenter from '../../../../src/components/Layout/Header/HeaderCenter'
import HeaderRight from '../../../../src/components/Layout/Header/HeaderRight'

export default function Header() {
  return (
    <div className="h-full w-full bg-bg flex items-center justify-between px-4">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
}
