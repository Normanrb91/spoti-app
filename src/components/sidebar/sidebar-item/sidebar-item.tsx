import { type PropsWithChildren } from 'react'
import { Link, LinkOff } from './styles'

type SidebarItemProps = PropsWithChildren<{
  closedSidebar?: () => void
  icon: JSX.Element
  path?: string
}>

export const SidebarItem = ({ icon, path, closedSidebar = () => {}, children }: SidebarItemProps) => {
  return (
    <>
      {path ? (
        <Link to={`/${path}`} onClick={() => closedSidebar()}>
          {icon}
          {children}
        </Link>
      ) : (
        <LinkOff>
          {icon}
          {children}
        </LinkOff>
      )}
    </>
  )
}
