import 'ui-react/src/Sidebar/sidebar.css'
import { type HTMLAttributes, useContext, useRef, useState } from 'react'
import { IconNotebook } from 'ui-react/src/icons/icon-notebook'
import { IconLetter } from 'ui-react/src/icons/icon-letter'
import { IconProfile } from 'ui-react/src/icons/icon-profile'
import { IconLabel } from 'ui-react/src/icons/icon-label'
import { IconLogout } from 'ui-react/src/icons/icon-logout'
import { IconMonitor } from 'ui-react/src/icons/icon-monitor'
import { IconTasks } from 'ui-react/src/icons/icon-tasks'
import { AuthContext } from '@/providers/auth-provider'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
type SidebarItemProps = {
  path: string
  name: string
  Icon: () => JSX.Element
  isActive?: boolean
}

type SidebarItemNativeProps = HTMLAttributes<HTMLLIElement>

const items: SidebarItemProps[] = [
  {
    path: '',
    name: 'Dashboard',
    Icon: IconMonitor
  },
  {
    path: 'profile',
    name: 'Profile',
    Icon: IconProfile
  },
  {
    path: 'projects',
    name: 'Projects',
    Icon: IconNotebook
  },
  {
    path: 'contact',
    name: 'Contact',
    Icon: IconLetter
  },
  {
    path: 'labels',
    name: 'Labels',
    Icon: IconLabel
  },
  {
    path: 'tasks',
    name: 'Task',
    Icon: IconTasks
  }
]

export const LogoutButton = (): JSX.Element => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = (): void => {
    try {
      logout()
      navigate('/login')
      // mostrar un pequeno mensaje
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <li onClick={handleLogout}>
      <button className={['sidebar-item'].join(' ')}>
        <div className="sidebar-item__icon">
          <IconLogout />
        </div>
        <span className="sidebar-item__name">Logout</span>
      </button>
    </li>
  )
}

export const Sidebar = (): JSX.Element => {
  const [itemActive, setItemActive] = useState('Dashboard')
  const handleButtonClick = (item: string): void => {
    setItemActive(itemActive !== item ? item : itemActive)
  }
  const sidebarRef = useRef<HTMLElement>(null)
  // const handleToggleMenu = () => {
  //   sidebarRef.current?.classList.toggle('sidebar--open')
  // }
  return (
    <>
      {/* <button className="sidebar-button" onClick={handleToggleMenu}>
        Abrir
      </button> */}
      <aside ref={sidebarRef} className="sidebar sidebar--open">
        <div className="sidebar__header hidden"></div>
        <ul className="sidebar__body scrollbar--vertical">
          {items.map((item) => (
            <SidebarItem
              key={item.path}
              isActive={itemActive === item.name}
              onClick={() => {
                handleButtonClick(item.name)
              }}
              {...item}
            />
          ))}
        </ul>

        <ul className="sidebar__bottom">
          <LogoutButton />
        </ul>
      </aside>
    </>
  )
}

const SidebarItem = ({
  Icon,
  name,
  path,
  isActive,
  ...props
}: SidebarItemProps & SidebarItemNativeProps): JSX.Element => {
  return (
    <li {...props}>
      <Link
        to={path}
        className={[
          'sidebar-item',
          isActive ? 'sidebar-item--active' : ''
        ].join(' ')}
      >
        <div className="sidebar-item__icon">
          <Icon />
        </div>
        <span className="sidebar-item__name">{name}</span>
      </Link>
    </li>
  )
}
