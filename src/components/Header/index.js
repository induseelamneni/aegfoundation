import './index.css'
import {Component} from 'react'

import {AiFillSetting} from 'react-icons/ai'

class Header extends Component {
  renderButtons = () => {
    const {changeActiveNavBarItem, activeNavBarItem, navBarItems} = this.props
    console.log(activeNavBarItem)

    return navBarItems.map(each => {
      const onClickBtn = () => changeActiveNavBarItem(each.name)

      const btnClass = activeNavBarItem === each.name ? 'activeBtn' : ''
      console.log(btnClass)

      return (
        <li key={each.id}>
          <button
            type="button"
            className={`table-btn ${btnClass}`}
            onClick={onClickBtn}
          >
            {each.name}
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="top-nav">
        <div className="nav-content">
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636350767/HRD_Icon_ptdia7.png"
              alt="logo"
              className="table-logo"
            />
          </div>
          <ul className="buttons-container1">{this.renderButtons()}</ul>

          <div>
            <AiFillSetting className="settings-icon" />
          </div>
        </div>
      </div>
    )
  }
}
export default Header
