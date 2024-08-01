import Link from 'next/link';
import VideoBG from '../../components/VideoBG';
import Menu from '../../components/Menu';
import TailorDetails from '../../components/TailorDetails';
import FacebookMsg from '../../components/FacebookMsg'

const Page = () => {
  return (
  <div>
    <Menu/>
    <main className="main-wrapper" style={{ backgroundColor: "#080021"}}>
      <VideoBG />
      <br /><br /><br />
      <TailorDetails />
      <FacebookMsg />
    </main>
  </div>
  )
}

export default Page