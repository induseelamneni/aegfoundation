import './index.css'
import {Component} from 'react'
import {RiDashboardFill} from 'react-icons/ri'
import {BsFillPersonFill, BsGraphUp} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

class LeftNavBar extends Component {
  state = {
    isClickedDash: false,
    isClickedPerson: false,
    isClickedLocation: false,
    isClickedGraph: false,
  }

  onClickBtnD = () => {
    this.setState(prevState => ({isClickedDash: !prevState.isClickedDash}))
  }

  onClickBtnP = () => {
    this.setState(prevState => ({isClickedPerson: !prevState.isClickedPerson}))
  }

  onClickBtnL = () => {
    this.setState(prevState => ({
      isClickedLocation: !prevState.isClickedLocation,
    }))
  }

  onClickBtnG = () => {
    this.setState(prevState => ({isClickedGraph: !prevState.isClickedGraph}))
  }

  render() {
    const {
      isClickedDash,
      isClickedPerson,
      isClickedLocation,
      isClickedGraph,
    } = this.state
    const activeBtnStyleD = isClickedDash ? 'activeBtn' : ''

    const activeBtnStyleP = isClickedPerson ? 'activeBtn' : ''
    const activeBtnStyleL = isClickedLocation ? 'activeBtn' : ''
    const activeBtnStyleG = isClickedGraph ? 'activeBtn' : ''
    return (
      <div className="left-nav">
        <div className="icons">
          <button
            type="button"
            className={`btn ${activeBtnStyleD}`}
            onClick={this.onClickBtnD}
          >
            <RiDashboardFill className={`icon2 ${activeBtnStyleD}`} />{' '}
            {isClickedDash ? 'Dashboard' : ''}
          </button>
          <button
            type="button"
            className={`btn ${activeBtnStyleP}`}
            onClick={this.onClickBtnP}
          >
            <BsFillPersonFill className={`icon2 ${activeBtnStyleP}`} />
            <p>{isClickedPerson ? 'Users' : ''}</p>
          </button>
          <button
            type="button"
            className={`btn ${activeBtnStyleL}`}
            onClick={this.onClickBtnL}
          >
            <MdLocationOn className={`icon2 ${activeBtnStyleL}`} /> {'   '}
            {isClickedLocation ? 'History' : ''}
          </button>
          <button
            type="button"
            className={`btn ${activeBtnStyleG}`}
            onClick={this.onClickBtnG}
          >
            <BsGraphUp className={`icon2 ${activeBtnStyleG}`} /> {'   '}
            {isClickedGraph ? 'Reports' : ''}
          </button>
        </div>
      </div>
    )
  }
}

export default LeftNavBar
