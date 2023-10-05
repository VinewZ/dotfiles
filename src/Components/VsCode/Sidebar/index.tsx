import {
  Blocks,
  Bookmark,
  BugPlay,
  File,
  FileJson,
  FileTerminal,
  GitBranch,
  Search,
  Terminal,
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
        pageRoute: '/browser/enhancer-yt',
      },
      {
        pageTitle: 'sponsor-block.json',
        icon: <FileJson size={16} />,
        pageRoute: '/browser/sponsor-block',
      },
    ],
  },
  {
    pageTab: 'Terminal',
    subPages: [
      {
        pageTitle: 'terminal.md',
        icon: <Terminal size={16} />,
        pageRoute: '/terminal',
      },
      {
        pageTitle: 'omp.md',
        icon: <FileTerminal size={16} />,
        pageRoute: '/terminal/omp-config',
      },
    ],
  },
  {
    pageTab: 'Curriculum',
    subPages: [
      {
        pageTitle: 'curriculum.pdf - BR',
        icon: <File size={16} />,
        pageRoute: '/curriculum/br',
      },
      {
        pageTitle: 'curriculum.pdf - EN',
        icon: <File size={16} />,
        pageRoute: '/curriculum/en',
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
