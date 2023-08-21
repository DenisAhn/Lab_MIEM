import css from './Header.module.scss'
import { useContext } from 'react'
import { AuthContext } from 'react-oauth2-code-pkce'
// Images
import logoImg from '@/assets/images/logo.png'
// Components
import Button from 'components/UI/Button'

const Header = () => {
  const { login } = useContext(AuthContext)

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
        <Button onClick={login}>Войти</Button>
      </div>
    </div>
  )
}

export default Header
