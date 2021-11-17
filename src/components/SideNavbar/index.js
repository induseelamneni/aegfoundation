import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineHome} from 'react-icons/md'

class SideNavbar extends Component {
  renderButtonIcons = () => {
    const {
      sideNavBarItems,
      changeActiveNavBarItem,
      activeNavBarItem,
    } = this.props

    return sideNavBarItems.map(item => {
      const onClickNavItem = () => changeActiveNavBarItem(item.name)
      const btnClassName = activeNavBarItem === item.name ? 'active-btn' : ''
      const btnColor = activeNavBarItem === item.name ? 'active-color-btn' : ''

      return (
        <li
          onClick={onClickNavItem}
          key={item.id}
          className={`list-style ${btnClassName}`}
        >
          <button type="button" className={`dashboard-btn ${btnColor}`}>
            {activeNavBarItem === item.name ? (
              <img
                src={item.white}
                alt="changing icons"
                className={`dashboard-icon ${btnColor}`}
              />
            ) : (
              <img
                src={item.green}
                alt="changing icons"
                className={`dashboard-icon ${btnColor}`}
              />
            )}

            {item.name}
          </button>
        </li>
      )
    })
  }

  render() {
    const onClickLogout = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }
    return (
      <div className="sidebar">
        <ul className="buttons-container">{this.renderButtonIcons()}</ul>

        <button type="button" className="dashboard-btn dashboard-btn1">
          <MdOutlineHome className="dashboard-icon" />
          Reports
        </button>

        <div>
          <button
            type="button"
            className="dashboard-btn dashboard-btn1"
            onClick={onClickLogout}
          >
            <AiOutlineLogout className="dashboard-icon" />
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default SideNavbar
