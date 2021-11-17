import './index.css'

const NavbarTop = props => {
  const {activeNavBarItem} = props

  return (
    <nav className="nav-header">
      <div className="nav-top">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636518052/aeglogo_cai5x7.png"
          alt="logo"
          className="main-logo"
        />
        <hr className="standing-line" />
        <h1 className="selected-btn-name">{activeNavBarItem}</h1>
      </div>

      <div className="manager-container">
        <p className="initial-container">S</p>
        <div>
          <h1 className="manager-heading">Sri Ram</h1>
          <p className="role-para">Project Manager</p>
        </div>
      </div>
    </nav>
  )
}
export default NavbarTop
