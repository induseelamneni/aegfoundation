import './index.css'

const TabItem = props => {
  const {eachTabItem, clickTabId, isActive} = props
  const {displayText, tabId} = eachTabItem

  const onChangeButton = () => {
    clickTabId(tabId)
  }

  const btnStyle = isActive ? 'active-btn-s' : ''

  return (
    <li className={btnStyle} onClick={onChangeButton}>
      <button type="button" className="project-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
