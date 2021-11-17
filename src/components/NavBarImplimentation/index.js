import NavBarTop from '../NavbarTop'
import LeftNavBar from '../LeftNavBar'
import './index.css'

const NavBarImplimentation = () => (
  <>
    <NavBarTop />
    <div className="page-body-1">
      <LeftNavBar />
      <div>Body</div>
    </div>
  </>
)

export default NavBarImplimentation
