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
      className="h-screen max-h-[70vh] bg-vs-sidebar max-w-xs flex text-white"
      style={{
        gridArea: 'sidebar',
      }}
    >
      <div className="border-r border-black px-2 py-3 bg-vs-sidebar-tabs flex flex-col gap-5">
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
