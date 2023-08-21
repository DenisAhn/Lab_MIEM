import { XLg } from 'react-bootstrap-icons'
import css from './BoardItem.module.scss'

const BoardItem = ({ name, family, model, deleteHandler }) => (
  <div className={css.item}>
    <div className={css.item_left}>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Название:</div>
        <div className={css.item_name}>{name}</div>
      </div>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Семейство:</div>
        <div className={css.item_name}>{family}</div>
      </div>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Модель:</div>
        <div className={css.item_name}>{model}</div>
      </div>
    </div>
    <div className={css.item_right}>
      <div className={css.item_delete} onClick={deleteHandler}>
        <XLg fill="red" height={20} width={20} />
      </div>
    </div>
  </div>
)

export default BoardItem
