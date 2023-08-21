import css from './Sidebar.module.scss'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import cn from 'classnames'
// Components
import SidebarLink from './SidebarLink'

const list = [
  { name: 'Синхронные стенды', href: '/admin/sync-stands' },
  { name: 'Асинхронные стенды', href: '/admin/async-stands' },
  { name: 'Статистика', href: '/admin/statistics' },
  {
    name: 'Общая информация',
    href: '/admin/info',
  },
  { name: 'Инструкция', href: '/admin/instruction' },
  { name: 'Техподдержка', href: '/admin/support' },
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
      <div className={css.sidebar_text}>Админ панель</div>
      {menu}
    </div>
  )
}

export default Sidebar
