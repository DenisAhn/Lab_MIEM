import css from './HeaderLayout.module.scss'
import PropTypes from 'prop-types'
// Components
import Header from './Header'

const HeaderLayout = ({ children, title }) => (
  <div className={css.content}>
    <Header title={title} />
    <div className={css.wrapper}>{children}</div>
  </div>
)

HeaderLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default HeaderLayout
