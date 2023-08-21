import css from './Switch.module.scss'
import cn from 'classnames'
// Images
import switch1Img from 'images/switch1.png'
import switch2Img from 'images/switch2.png'

const Switch = ({ className, active, label, ...props }) => (
  <div className={cn(css.switch, className, active && css.active)} {...props}>
    {active ? (
      <img src={switch1Img} alt="switch1" />
    ) : (
      <img src={switch2Img} alt="switch2" />
    )}
    <div className={css.switch_label}>{label}</div>
  </div>
)

export default Switch
