import css from './HeaderStand.module.scss'
import PropTypes from 'prop-types'
// Components
import Header from './Header'

const HeaderStand = ({ children }) => (
  <div className={css.content}>
    <Header />
    <div className={css.wrapper}>{children}</div>
  </div>
)

HeaderStand.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderStand
