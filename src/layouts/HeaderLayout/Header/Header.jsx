import css from './Header.module.scss'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useCallback, useContext } from 'react'
import { AuthContext } from 'react-oauth2-code-pkce'
// Images
import logoutImg from '@/assets/icons/logout.png'
import logoImg from 'images/logo.png'
// Store
import { changeAuth } from '@/store/auth'
// Constants
import { history } from '@/constants'
// Components
import Menu from '../Menu'
import MenuAdmin from '../../AdminLayout/Menu'

const Header = ({ title, isAdmin }) => {
  const dispatch = useDispatch()
  const { logOut, ...props } = useContext(AuthContext)
  console.log(props);
  const logoutHandle = useCallback(() => {
    logOut()
    history.push('/')
    dispatch(changeAuth({}))
  }, [logOut, dispatch])

  return (
    <div className={css.header}>
      {title ? (
        <div className={css.header_title}>{title}</div>
      ) : (
        <div className={css.header_left}>
          <div className={css.header_logo}>
            <img src={logoImg} alt="logo" />
          </div>
        </div>
      )}
      <div className={css.header_right}>
        <div className={css.header_name}>Иванов Иван Иванович</div>
        <div className={css.header_logout} onClick={logoutHandle}>
          <img src={logoutImg} alt="logout" />
        </div>
      </div>
      {isAdmin ? <MenuAdmin /> : <Menu />}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
