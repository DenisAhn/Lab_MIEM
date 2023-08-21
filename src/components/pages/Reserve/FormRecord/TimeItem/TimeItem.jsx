import css from './TimeItem.module.scss'
import cn from 'classnames'

const TimeItem = ({ label, disabled, active, onClick, ...props }) => (
  <div
    className={cn(css.item, disabled && css.disabled, active && css.active)}
    onClick={disabled ? () => false : onClick}
    {...props}
  >
    <div className={css.item_label}>{label}</div>
  </div>
)

export default TimeItem
