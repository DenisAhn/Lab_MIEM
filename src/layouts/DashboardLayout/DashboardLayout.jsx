import css from './DashboardLayout.module.scss'
import PropTypes from 'prop-types'
// Components
import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => (
  <div className={css.container}>
    <Sidebar />
    {children}
  </div>
)

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardLayout
