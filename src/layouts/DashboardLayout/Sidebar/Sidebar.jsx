import css from './Sidebar.module.scss'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import cn from 'classnames'
// Components
import SidebarLink from './SidebarLink'
// Images
import logoImg from 'images/logo.png'
import chipImg from '@/assets/icons/chip.png'
import codingImg from '@/assets/icons/coding.png'
import bookingImg from '@/assets/icons/booking.png'
import informationPamphletImg from '@/assets/icons/information-pamphlet.png'
import helpImg from '@/assets/icons/help.png'
import infoImg from '@/assets/icons/info.png'

const list = [
  { name: 'Синхронные стенды', href: '/synchronousStand', icon: chipImg },
  { name: 'Асинхронные стенды', href: '/async-stands', icon: codingImg },
  { name: 'Бронирование', href: '/reserve', icon: bookingImg },
  { name: 'Общая информация', href: '/info', icon: infoImg },
  { name: 'Инструкция', href: '/instruction', icon: informationPamphletImg },
  { name: 'Техподдержка', href: '/support', icon: helpImg },
]

const Sidebar = ({ active }) => {
  const { pathname } = useLocation()

  const menu = useMemo(
    () =>
      list.map(({ name, href, icon }, index) => (
        <SidebarLink
          name={name}
          href={href}
          icon={icon}
          active={pathname === href}
          key={index}
        />
      )),
    [pathname]
  )

  return (
    <div className={cn(css.sidebar, active && css.active)}>
      <div className={css.sidebar_logo}>
        <img src={logoImg} alt="logo" />
        <div className={css.sidebar_text}>
          Московский институт электроники и математики им. А.Н. Тихонова
        </div>
      </div>
      {menu}
    </div>
  )
}

export default Sidebar
