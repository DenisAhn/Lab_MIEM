import css from './Title.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Title = ({ className, children, ...props }) => (
  <div {...props} className={cn(css.title, className)}>
    {children}
  </div>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
