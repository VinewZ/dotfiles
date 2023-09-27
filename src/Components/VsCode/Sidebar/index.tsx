import {
  Blocks,
  Bookmark,
  BugPlay,
  File,
  FileJson,
  GitBranch,
  Search,
} from 'lucide-react'
import { PageLinks } from './PageLinks'

const pages = [
  {
    pageTab: 'Browser',
    subPages: [
      {
        pageTitle: 'browser.md',
        icon: <File size={16} />,
        pageRoute: '/browser',
      },
      {
        pageTitle: 'enhancer-yt.json',
        icon: <FileJson size={16} />,
        pageRoute: '/enhancer-yt',
      },
      {
        pageTitle: 'sponsor-block.json',
        icon: <FileJson size={16} />,
        pageRoute: '/sponsor-block',
      },
    ],
  },
  {
    pageTab: 'Terminal',
    subPages: [
      {
        pageTitle: 'browser.md',
        icon: <File size={16} />,
        pageRoute: '/browser',
      },
      {
        pageTitle: 'enhancer-yt.json',
        icon: <File size={16} />,
        pageRoute: '/enhancer-yt',
      },
      {
        pageTitle: 'sponsor-block.json',
        icon: <File size={16} />,
        pageRoute: '/sponsor-block',
      },
    ],
  },
]

export function VsCodeSidebar() {
  return (
    <div
      className="flex h-screen max-h-[70vh] bg-vs-sidebar text-white"
      style={{
        gridArea: 'sidebar',
      }}
    >
      <div className="flex flex-col gap-5 border-r border-black/40 bg-vs-sidebar-tabs px-2 py-3">
        <File />
        <Search />
        <GitBranch />
        <BugPlay />
        <Blocks />
        <Bookmark />
      </div>
      <div className="w-full border-r border-black/40">
        <p className="border-b border-black/40 px-2 py-1 text-[10px] uppercase">
          Explorer
        </p>
        <div className="flex flex-col gap-2">
          <PageLinks pages={pages} />
        </div>
      </div>
    </div>
  )
}
