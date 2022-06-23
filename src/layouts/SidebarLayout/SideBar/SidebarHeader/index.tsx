import './style.css'
import { Link } from 'react-router-dom'

const SidebarHeader = () => {
    return(
        <Link to="/" className="sidebar__header">
            <div>
                <img src='/static/images/logo/brand.png' alt="brand-logo" />
            </div>
        </Link>
    )
}

export default SidebarHeader