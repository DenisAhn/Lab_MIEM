import css from './Button.module.scss'
import cn from 'classnames'

const Button = ({ className, children, ...props }) => (
  <button className={cn(css.button, className)} {...props}>
    {children}
  </button>
)

export default Button
