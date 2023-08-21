import css from './Menu.module.scss'
import cn from 'classnames'
import { Drawer } from 'antd'
// Hooks
import { useToggle } from 'hooks'
// Components
import Sidebar from '../Sidebar'

const Menu = () => {
  const [visible, handleVisible] = useToggle()

  return (
    <>
      <div
        className={cn(css.burger, visible && css.active)}
        onClick={handleVisible}
      >
        <i />
      </div>
      <Drawer
        title="Меню"
        placement="left"
        onClose={handleVisible}
        open={visible}
      >
        <Sidebar active={visible} />
      </Drawer>
    </>
  )
}

export default Menu
