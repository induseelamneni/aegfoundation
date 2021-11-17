import './index.css'

import {Component} from 'react'
import {AiOutlineBars, AiFillAppstore, AiFillPlusCircle} from 'react-icons/ai'
import TabItem from '../TabItem'

const cardsList = [
  {
    id: 0,
    projectName: 'INDIA AE - HP & GAIN',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '15,00,000',
    utilizedVal: '8,00,000',
    status: 'ONGOING',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
  {
    id: 1,
    projectName: 'Project1',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '20,00,000',
    utilizedVal: '10,00,000',
    status: 'ONGOING',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
  {
    id: 2,
    projectName: 'Project2',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '35,00,000',
    utilizedVal: '12,00,000',
    status: 'ONGOING',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
  {
    id: 3,
    projectName: 'Project3',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '11,00,000',
    utilizedVal: '5,00,000',
    status: 'COMPLETED',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
  {
    id: 4,
    projectName: 'Project4',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '9,00,000',
    utilizedVal: '7,00,000',
    status: 'COMPLETED',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
  {
    id: 5,
    projectName: 'INDIA AE - HP & GAIN',
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png',
    totalProVal: '22,00,000',
    utilizedVal: '11,00,000',
    status: 'PAUSED',
    logo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696755/Screenshot_from_2021-11-12_11-27-43_z4nj0u.png',
    plogo:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
  },
]

const projectInformationData = [
  {
    id: 1,
    S: '01',
    ProjectName: 'India AE - HP & Gain',
    Donar: 'G',
    TotalProjectValue: '15,00,000/-',
    UtilisedValue: '8,00,000/-',
    StartDate: '15/05/2021',
    CompletionDate: '31/12/2021',
    Execution: '65%',
    Status: 'Active',
    teamUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636696937/persons_dwgjgn.png',
    className: 'project-detail-1',
  },
]

const tabsList = [
  {tabId: 'ONGOING', displayText: 'Ongoing'},
  {tabId: 'COMPLETED', displayText: 'Completed'},
  {tabId: 'PAUSED', displayText: 'Paused'},
]

class Projects extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  filterApp = () => {
    const {activeTabId} = this.state
    const searchResults = cardsList.filter(each => each.status === activeTabId)

    return searchResults
  }

  render() {
    const {activeTabId} = this.state
    const filteredApps = this.filterApp()
    return (
      <div className="projects-bg">
        <div className="status-container">
          <ul className="buttons-container-p">
            {tabsList.map(each => (
              <TabItem
                key={each.tabId}
                eachTabItem={each}
                clickTabId={this.clickTabId}
                isActive={activeTabId === each.tabId}
              />
            ))}
          </ul>
          <div className="status-container-r">
            <AiOutlineBars className="bars-icon" />
            <AiFillAppstore className="app-store" />
          </div>
        </div>

        <div className="add-project-container">
          <button type="button" className="plus-btn project-btn">
            <AiFillPlusCircle className="plus-icon" />
            Add Projectss
          </button>
        </div>
        <ul className="ongoing-projects-cards-container">
          {filteredApps.map(eachCard => (
            <li className="card">
              <div className="li-inside-card">
                <p className="pr">project Name</p>

                <div className="pr-row">
                  <h1 className="project-name project-name2">
                    {eachCard.projectName}
                  </h1>
                  <img src={eachCard.url} alt="round" className="img" />
                </div>
                <div>
                  <h1 className="total-p-v">
                    Total Project Value
                    <span className="total-value-in-rs">
                      {eachCard.totalProVal}
                    </span>
                  </h1>
                  <h1 className="total-p-v">
                    Utilised Project Value
                    <span className="total-value-in-rs">
                      {eachCard.utilizedVal}
                    </span>
                  </h1>
                </div>
                <div className="pr-row">
                  <p className="pr">
                    <img src={eachCard.plogo} alt="plogo" /> +5 More
                  </p>
                  <img src={eachCard.logo} alt="glogo" className="logo" />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="ongoing-projects-list-container">
          <td>
            <ul className="ul">
              <tr className="table-row-main">
                <p className="first-el">S.No</p>
                <p className="first-el">ProjectName</p>
                <p className="first-el">Donar</p>
                <p className="first-el">TotalProjectValue</p>
                <p className="first-el">UtilisedValue</p>
                <p className="first-el">StartDate</p>
                <p className="first-el">CompletionDate</p>
                <p className="first-el">UtilisedValue</p>
                <p className="first-el">StartDate</p>
                <p className="first-el">CompletionDate</p>
                <p className="first-el">Execution</p>
                <p className="first-el">Status</p>
                <p className="first-el">Team</p>
              </tr>
              <hr className="line-p" />
              {projectInformationData.map(each => (
                <li key={each.id} className="list-style1">
                  <tr className="table-row">
                    <p className={each.className}>{each.S}</p>
                    <p className={`project-name ${each.className}`}>
                      {each.ProjectName}
                    </p>
                    <p className={each.className}>{each.Donar}</p>
                    <p className={each.className}>{each.TotalProjectValue}</p>
                    <p className={each.className}>{each.UtilisedValue}</p>
                    <p className={each.className}>{each.StartDate}</p>
                    <p className={each.className}>{each.CompletionDate}</p>
                    <p className={each.className}>{each.UtilisedValue}</p>
                    <p className={each.className}>{each.StartDate}</p>
                    <p className={each.className}>{each.CompletionDate}</p>
                    <p className={each.className}>{each.Execution}</p>
                    <p className="status-btn">{each.Status}</p>
                    <p className="logo-t pr">
                      <img
                        src={each.teamUrl}
                        alt="team-logo"
                        className="p-logo"
                      />
                      +5 Members
                    </p>
                  </tr>
                </li>
              ))}
            </ul>
          </td>
        </div>

        <div className="status-container">
          <div className="project-detail-container-1">
            <div className="project1">
              <p className="pr">Project Name</p>
              <p className="pr">Project Name</p>
              <p className="pr">Project Name</p>
            </div>
            <div>
              <p className="pr">Project Name</p>
              <p className="pr">Project Name</p>
              <p className="pr">Project Name</p>
            </div>
          </div>
          <div>
            <p className="pr">Team</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects
