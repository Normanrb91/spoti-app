import { type PropsWithChildren } from 'react'
import { Link } from './styles'

type SidebarItemProps = PropsWithChildren<{
  icon: JSX.Element
  path?: string
}>

export const SidebarItem = ({ icon, path, children }: SidebarItemProps) => {
  return (
    <Link href={path}>
      {icon}
      {children}
    </Link>
  )
}
