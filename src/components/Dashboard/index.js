import './index.css'

import {AiOutlineBarChart} from 'react-icons/ai'

const cardData = [
  {id: 0, name: 'projects', points: '5', class: 'color-r'},
  {id: 1, name: 'Facilitators', points: '10', class: 'color-p'},
  {id: 2, name: 'Teams', points: '5', class: 'color-t'},
]
const ProjectData = [
  {
    id: 0,
    name: 'projects 1',
    percentage: '70',
    class: 'color-r',
    barUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636601117/bar3_ogfauk.png',
  },
  {
    id: 1,
    name: 'projects 2',
    percentage: '90',
    class: 'color-p',
    barUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636601026/bar1_ncf3ss.png',
  },
  {
    id: 2,
    name: 'projects 3',
    percentage: '80',
    class: 'color-t',
    barUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636601107/bar2_yoqn7j.png',
  },
  {
    id: 3,
    name: 'projects 4',
    percentage: '70',
    class: 'color-r',
    barUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636601117/bar3_ogfauk.png',
  },
  {
    id: 4,
    name: 'projects 5',
    percentage: '80',
    class: 'color-p',
    barUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1636601107/bar2_yoqn7j.png',
  },
]

const todayActivityCard = [
  {
    id: 0,
    url:
      'https://tse3.mm.bing.net/th?id=OIP.4KYmB7Rx1a82fXuv-j9aVwHaH0&pid=Api&P=0&w=300&h=300',
    projectName: 'Project1',
    task: 'Task 5 Completed',
  },
  {
    id: 1,
    url:
      'https://tse3.mm.bing.net/th?id=OIP.xacTOvkTZ1mZy-ZinJjJLAHaHk&pid=Api&P=0&w=300&h=300',
    projectName: 'Project1',
    task: 'Task 5 Completed',
  },
  {
    id: 2,
    url:
      'https://tse3.mm.bing.net/th?id=OIP.L-X8_uYc8J5Hkyq2H5lBkQHaHa&pid=Api&P=0&w=300&h=300',
    projectName: 'Project1',
    task: 'Task 5 Completed',
  },
  {
    id: 3,
    url:
      'https://tse3.mm.bing.net/th?id=OIP.L-X8_uYc8J5Hkyq2H5lBkQHaHa&pid=Api&P=0&w=300&h=300',
    projectName: 'Project1',
    task: 'Task 5 Completed',
  },
  {
    id: 4,
    url:
      'https://tse3.mm.bing.net/th?id=OIP.4KYmB7Rx1a82fXuv-j9aVwHaH0&pid=Api&P=0&w=300&h=300',
    projectName: 'Project1',
    task: 'Task 5 Completed',
  },
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
    <div className="overall-status-card-p">
      <h1 className="overall">Project Status</h1>
      <ul>
        {ProjectData.map(each => (
          <li className="project-card">
            <div className="each-section">
              <p className="task2">{each.name}</p>
              <p className="task2">{each.percentage}%</p>
            </div>
            <img src={each.barUrl} alt="bar filler" className="bar-size" />
          </li>
        ))}
      </ul>
    </div>
    <div className="overall-status-card1">
      <div className="financial-graph-description-container">
        <h1 className="overall">Financial Status</h1>
        <div className="points-description">
          <p className="color-container">
            <p className="color-fill color-fill-b">t</p> task 1
          </p>
          <p className="color-container">
            <p className="color-fill color-fill-r">t</p> task 2
          </p>
          <p className="color-container">
            <p className="color-fill color-fill-y">t</p> task 3
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636604232/bargraph1_bpfuda.png"
          alt="bar graph"
          className="bar-graph"
        />
      </div>
    </div>
    <div className="overall-status-card3">
      <h1 className="overall">Today Activity</h1>
      <ul>
        {todayActivityCard.map(each => (
          <li key={each.id} className="activity-list">
            <img
              src={each.url}
              alt="activity symbol"
              className="activity-icon"
            />
            <div className="project-description-card">
              <p className="project-name">{each.projectName}</p>
              <p className="task-description">{each.task}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Dashboard
