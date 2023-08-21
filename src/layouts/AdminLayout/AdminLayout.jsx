import css from './AdminLayout.module.scss'
import PropTypes from 'prop-types'
// Components
import Sidebar from './Sidebar'
import Header from '../HeaderLayout/Header'

const AdminLayout = ({ children }) => (
  <div className={css.container}>
    <Sidebar />
    <div className={css.header}>
      <Header isAdmin />
    </div>
    <div className={css.wrapper}>{children}</div>
  </div>
)

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
