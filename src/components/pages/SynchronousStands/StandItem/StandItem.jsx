import css from './StandItem.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'react-router-dom'
// Components
import Button from 'components/UI/Button'

const StandItem = ({ title, name, group, model, connectHandler }) => (
  <div className={css.item}>
    <div className={css.item_title}>{title}</div>
    <div>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Название платы:</div>
        <div className={css.item_text}>{name}</div>
      </div>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Семейство:</div>
        <div className={css.item_text}>{group}</div>
      </div>
      <div className={css.item_info}>
        <div className={css.item_subtitle}>Модель:</div>
        <div className={css.item_text}>{model}</div>
      </div>
    </div>
    <div className={css.item_btns}>
      <Button onClick={connectHandler} className={css.item_btn}>
        Подключиться
      </Button>
      <Link className={cn(css.item_btn, css.reserve)} to="/reserve">
        Забронировать
      </Link>
    </div>
  </div>
)

StandItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  group: PropTypes.string,
  model: PropTypes.string,
  connectHandler: PropTypes.func,
}

export default StandItem
