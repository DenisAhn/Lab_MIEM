import css from './Header.module.scss'
import { useSelector } from 'react-redux'
// Images
import logoImg from 'images/logo.png'
// Store
import { selectConnectedBoardData } from '@/store/boards'

const Header = () => {
  const connectedBoard = useSelector(selectConnectedBoardData)

  return (
    <div className={css.header}>
      <div className={css.header_left}>
        <div className={css.header_logo}>
          <img src={logoImg} alt="logo" />
        </div>
        <div className={css.header_title}>
          Московский институт
          <br />
          электроники и математики им. А.Н. Тихонова
        </div>
      </div>
      <div className={css.header_right}>
        <div className={css.header_name}>{connectedBoard?.boardInfo?.name}</div>
        <div className={css.header_session}>
          Сессия {connectedBoard?.date}
          <br />
          {connectedBoard?.interval}
        </div>
      </div>
    </div>
  )
}

export default Header
