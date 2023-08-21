import css from './HeaderAuth.module.scss'
import PropTypes from 'prop-types'
// Components
import Header from './Header'

const HeaderAuth = ({ children }) => (
  <div className={css.content}>
    <Header />
    <div className={css.wrapper}>{children}</div>
  </div>
)

HeaderAuth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderAuth
