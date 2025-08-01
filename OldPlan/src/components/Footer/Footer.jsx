import FooterLeft from '../../../../src/components/Layout/Footer/FooterLeft'
import FooterCenter from '../../../../src/components/Layout/Footer/FooterCenter'
import FooterRight from '../../../../src/components/Layout/Footer/FooterRight'

export default function Footer() {
  return (
    <div className="h-full w-full bg-bg flex items-center justify-between px-4">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  )
}
