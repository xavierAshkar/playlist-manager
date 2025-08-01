import FooterLeft from './FooterLeft'
import FooterCenter from './FooterCenter'
import FooterRight from './FooterRight'

export default function Footer() {
  return (
    <div className="h-full w-full bg-bg flex items-center justify-between px-4">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  )
}
