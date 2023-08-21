import css from './Input.module.scss'
import cn from 'classnames'

const Input = ({ className, ...props }) => (
  <input className={cn(css.input, className)} {...props} />
)

export default Input
