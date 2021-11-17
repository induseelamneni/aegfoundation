import './index.css'
import {Component} from 'react'
import NavbarTop from '../NavbarTop'
import SideNavbar from '../SideNavbar'
import Dashboard from '../Dashboard'
import Teams from '../Teams'
import Projects from '../Projects'
import Donors from '../Donors'

const sideNavBarItems = [
  {
    id: 0,

    name: 'Dashboard',
    green:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611582/dashgreen_xyhb5w.png',
    white:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611597/dashwhite_fdvzur.png',
  },
  {
    id: 1,

    name: 'Projects',
    green:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611612/projectgreen_zobef7.png',
    white:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611622/projectwhite_hrj60u.png',
  },
  {
    id: 2,

    name: 'Teams',
    green:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611661/groupgreen_j4iutc.png',
    white:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611671/groupwhite_uwxqlw.png',
  },
  {
    id: 3,

    name: 'Donors',
    green:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611691/housegreen_mum4mk.png',
    white:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636611705/housewhite_jgdwxq.png',
  },
]

class Home extends Component {
  state = {
    activeNavBarItem: sideNavBarItems[0].name,
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({activeNavBarItem})
    console.log(activeNavBarItem)
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case sideNavBarItems[1].name:
        return <Projects />
      case sideNavBarItems[2].name:
        return <Teams />
      case sideNavBarItems[3].name:
        return <Donors />

      default:
        return <Dashboard />
    }
  }

  render() {
    const {activeNavBarItem} = this.state
    return (
      <>
        <NavbarTop activeNavBarItem={activeNavBarItem} />
        <div className="page-body">
          <SideNavbar
            sideNavBarItems={sideNavBarItems}
            changeActiveNavBarItem={this.changeActiveNavBarItem}
            activeNavBarItem={activeNavBarItem}
          />
          <div className="body-container">{this.renderComponent()}</div>
        </div>
      </>
    )
  }
}

export default Home
