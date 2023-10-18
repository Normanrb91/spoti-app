import { type PropsWithChildren, memo } from 'react'
import { Link, LinkOff } from './styles'

type SidebarItemProps = PropsWithChildren<{
  closedSidebar?: () => void
  icon: JSX.Element
  path?: string
}>

const SidebarItem = ({ icon, path, closedSidebar = () => {}, children }: SidebarItemProps) => {
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

const MemoSidebarItem = memo(SidebarItem)

export { MemoSidebarItem as SidebarItem }
