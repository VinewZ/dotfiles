import {
  Blocks,
  Bookmark,
  BugPlay,
  File,
  GitBranch,
  Search,
} from 'lucide-react'
import { PageLinks } from './PageLinks'

export function VsCodeSidebar() {
  return (
    <div
      className="flex h-screen max-h-[70vh] bg-vs-sidebar text-white"
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
      <div className="w-full">
        <p className="border-b border-black p-2">Explorer</p>
        <div className="flex flex-col gap-2">
          <PageLinks />
        </div>
      </div>
    </div>
  )
}
