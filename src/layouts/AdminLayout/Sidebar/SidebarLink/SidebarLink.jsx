import css from './SidebarLink.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

const SidebarLink = ({ name, href, icon, active, isHiddenDashboard }) => (
  <Link className={cn(css.link, active && css.active)} to={href}>
    <div className={cn(css.link_name, isHiddenDashboard && css.active)}>
      {name}
    </div>
  </Link>
)

SidebarLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

export default SidebarLink
