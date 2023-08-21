import css from './ReserveItem.module.scss'
import { XLg } from 'react-bootstrap-icons'

const ReserveItem = ({ name, code, date, handleRemove, ...props }) => (
  <div className={css.item} {...props}>
    <div className={css.item_name}>{name}</div>
    <div className={css.item_code}>
      Код доступа: <span>{code}</span>
    </div>
    <div className={css.item_date}>{date}</div>
    <div className={css.item_btn} onClick={handleRemove}>
      <XLg fill="red" height={20} width={20} />
    </div>
  </div>
)

export default ReserveItem
