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
  },
  {
    id: 1,

    name: 'Projects',
  },
  {
    id: 2,

    name: 'Teams',
  },
  {
    id: 3,

    name: 'Donors',
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
