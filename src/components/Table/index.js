import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Teams from '../Teams'
import Donors from '../Donors'

const navBarItems = [
  {
    id: 0,

    name: 'Table1',
  },
  {
    id: 1,

    name: 'Table2',
  },
  {
    id: 2,

    name: 'Table3',
  },
]

class Table extends Component {
  state = {
    activeNavBarItem: navBarItems[0].name,
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({activeNavBarItem})
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case navBarItems[0].name:
        return <Teams />
      case navBarItems[1].name:
        return <Donors />
      case navBarItems[2].name:
        return <Donors />

      default:
        return <Donors />
    }
  }

  render() {
    const {activeNavBarItem} = this.state

    return (
      <div className="app-bg">
        <Header
          navBarItems={navBarItems}
          changeActiveNavBarItem={this.changeActiveNavBarItem}
          activeNavBarItem={activeNavBarItem}
        />
        <div className="card">{this.renderComponent()}</div>
      </div>
    )
  }
}

export default Table
