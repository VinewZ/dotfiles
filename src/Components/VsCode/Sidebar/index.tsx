import {
  Blocks,
  Bookmark,
  BugPlay,
  File,
  GitBranch,
  Search,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

type VsCodeSidebarProps = {
  routes: {
    path: string
    name: string
  }[]
}

export function VsCodeSidebar({ routes }: VsCodeSidebarProps) {
  return (
    <div
      className="flex h-screen max-h-[70vh] max-w-xs bg-vs-sidebar text-white"
      style={{
        gridArea: 'sidebar',
      }}
    >
      <div className="flex flex-col gap-5 border-r border-black bg-vs-sidebar-tabs px-2 py-3">
        <File />
        <Search />
        <GitBranch />
        <BugPlay />
        <Blocks />
        <Bookmark />
      </div>
      <div className="flex flex-col gap-2">
        {routes.map((route) => (
          <NavLink to={`${route.path}`} key={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
