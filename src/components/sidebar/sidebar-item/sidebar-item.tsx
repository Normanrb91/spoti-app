import { type PropsWithChildren } from 'react'
import { Link } from './styles'

type SidebarItemProps = PropsWithChildren<{
  icon: JSX.Element
  path?: string
}>

export const SidebarItem = ({ icon, path = 'home', children }: SidebarItemProps) => {
  return (
    <Link to={`/${path}`}>
      {icon}
      {children}
    </Link>
  )
}
