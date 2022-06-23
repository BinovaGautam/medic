import './style.css'
import { ISidebarLayoutBodyHeader } from './type'

const SidebarLayoutBodyHeader = ({title}: ISidebarLayoutBodyHeader) => {
  return (
    <div className="slb__header">
      <div className="slb__header-content">
        <div className="slb__header-left">
          <div className="slb__header-image">
            <img src='/static/images/icons/page-icon.png' alt="page-icon" />
          </div>
          <h4 className="slb__header-title">{title.toUpperCase()}</h4>
        </div>
        <div className="slb__header-right">

        </div>
      </div>
    </div>
  )
}

export default SidebarLayoutBodyHeader