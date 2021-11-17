import './index.css'
import {AiOutlineDelete, AiOutlineEye, AiOutlinePlus} from 'react-icons/ai'
import {BsPen} from 'react-icons/bs'
import {IoIosPaper} from 'react-icons/io'

const projectInformationData = [
  {
    id: 1,
    Title: 'Venkateswara Swami',
    Description: 'Venkateswara Swami',
    TotalSlokas: 1,
    s: 's1',
  },
  {
    id: 2,
    Title: 'Subramanya Swami',

    Description: 'Subramanya Swami',
    TotalSlokas: 2,
    s: 's2',
  },
  {
    id: 3,
    Title: 'Shyamala Devi',
    Description: 'Shyamala Devi',
    TotalSlokas: 5,
    s: 's3',
  },
  {
    id: 4,
    Title: 'Sri Lakshmi Narasimha',
    Description: 'Sri Lakshmi Narasimha',
    TotalSlokas: 2,
    s: 's4',
  },
  {
    id: 5,
    Title: 'KalaBairava',
    Description: 'KalaBairava',
    TotalSlokas: 1,
    s: 's1',
  },
  {
    id: 6,
    Title: 'Jai Hanuman',
    Description: 'Jai Hanuman',
    TotalSlokas: 9,
    s: 's2',
  },
  {
    id: 7,
    Title: 'Surya Bhagwan',
    Description: 'Surya Bhagwan',
    TotalSlokas: 2,
    s: 's3',
  },
  {
    id: 8,
    Title: 'Sri Maha Lakshmi',
    Description: 'Sri Maha Lakshmi',
    TotalSlokas: 2,
    s: 's4',
  },
  {
    id: 9,
    Title: 'Sri Gurubhyonamaha',
    Description: 'Sri Gurubhyonamaha',
    TotalSlokas: 3,
    s: 's1',
  },
  {
    id: 10,
    Title: 'Sri Krushna',
    Description: 'Venkateswara Swami',
    TotalSlokas: 5,
    s: 's2',
  },
]

const Teams = () => (
  <div className="table-card-bg">
    <div className="add-sloka-button">
      <button type="button" className="add-sloka-btn">
        <AiOutlinePlus />
        Add Sloka Type
      </button>
    </div>
    <table className="ul1">
      <tbody>
        <ul className="main-table-row-body">
          <thead className="main-table-row th-main">
            <tr className="main-table-row1">
              <th className="th1 s-no-main">S.No</th>
              <th className="th1 title-main">Title</th>
              <th className="th1 Description">Description</th>
              <th className="th1 total">Total Slokas</th>
              <th className="th1 empty-space">
                Icons Empty container fsfdfdsfdsfdfdf
              </th>
            </tr>
          </thead>
          {projectInformationData.map(each => (
            <>
              <li key={each.id} className="main-table-row">
                <tr className="table-row1">
                  <th className="th2">{each.id}</th>
                  <th className="th2 title">
                    <p className={`name-initial ${each.s}`}>{each.Title[0]}</p>
                    {each.Title}
                  </th>
                  <th className="th2">{each.Description}</th>
                  <th className="th2 align-center">{each.TotalSlokas}</th>
                  <th className="th2 align-center">
                    <div>
                      <AiOutlineEye className="eye-icon" />
                      <IoIosPaper className="paper" />
                      <AiOutlineDelete className="delete" />
                      <BsPen className="edit" />
                    </div>
                  </th>
                </tr>
              </li>
              <hr className="line" />
            </>
          ))}
        </ul>
      </tbody>
    </table>
  </div>
)

export default Teams
