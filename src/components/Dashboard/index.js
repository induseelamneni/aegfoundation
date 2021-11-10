import './index.css'

import {AiOutlineBarChart} from 'react-icons/ai'

const cardData = [
  {id: 0, name: 'projects', points: '5', class: 'color-r'},
  {id: 1, name: 'Facilitators', points: '10', class: 'color-p'},
  {id: 2, name: 'Teams', points: '5', class: 'color-t'},
]
const ProjectData = [
  {id: 0, name: 'projects 1', percentage: '65', class: 'color-r'},
  {id: 1, name: 'projects 2', percentage: '36', class: 'color-p'},
  {id: 2, name: 'projects 3', percentage: '24', class: 'color-t'},
  {id: 3, name: 'projects 4', percentage: '95', class: 'color-r'},
  {id: 4, name: 'projects 5', percentage: '19', class: 'color-p'},
]

const Dashboard = () => (
  <div className="dashboard-bg">
    <ul className="type-card">
      {cardData.map(eachCardData => (
        <li key={eachCardData.id} className="points-card">
          <div className="points-card-1">
            <p className="points1">
              <span className="points">{eachCardData.points}</span> /10
            </p>
            <p className="team-name">{eachCardData.name}</p>
          </div>

          <AiOutlineBarChart className={`graph ${eachCardData.class}`} />
        </li>
      ))}
    </ul>
    <div className="overall-status-card">
      <h1 className="overall">Overall Status</h1>
      <div className="graph-tasks-container">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636545409/round_graph_q0yp32.png"
          alt="round graph"
          className="round-graph"
        />
        <div>
          <p className="task">Task Completed : 25/50</p>
          <p className="task">Issues: 1</p>
          <p className="task">Reviews: 2</p>
        </div>
      </div>
      <div>
        <div className="total-value-container">
          <p className="overall1">Total Project Value</p>
          <p className="task1">35,00,000/-</p>
        </div>
        <div className="total-value-container">
          <p className="overall1">Utilised Value</p>
          <p className="task1">15,00,000/-</p>
        </div>
      </div>
    </div>
    <div className="overall-status-card">
      <h1 className="overall">Project Status</h1>
      <ul>
        {ProjectData.map(each => (
          <li className="project-card">
            <div className="each-section">
              <p className="task">{each.name}</p>
              <p className="task">{each.percentage}%</p>
            </div>
            <div>
              <p className={`bar-para ${each.class}`}>1</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Dashboard
