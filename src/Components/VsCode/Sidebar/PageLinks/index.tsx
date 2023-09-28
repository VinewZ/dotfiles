import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type PageLinksProps = {
  pages: {
    pageTab: string
    subPages: {
      pageTitle: string
      icon?: ReactNode
      pageRoute: string
    }[]
  }[]
}

export function PageLinks({ pages }: PageLinksProps) {
  return (
    <div>
      <Accordion.Root type="multiple" className="items-start">
        {pages.map((page, index) => (
          <Accordion.Item value={`item-${index}`} key={page.pageTab}>
            <Accordion.Trigger className="flex w-full items-center gap-1 border-y border-black/40 bg-vs-sidebar-tabs py-1 text-left text-[10px] font-bold uppercase">
              <ChevronDown size={16} />
              {page.pageTab}
            </Accordion.Trigger>
            <Accordion.Content>
              {page.subPages.map((subPage, i) => (
                <NavLink
                  to={subPage.pageRoute}
                  key={i}
                  className={(isActive) =>
                    `flex w-full items-center gap-1 py-1 pl-4 text-left text-sm
                    ${isActive ? 'text-yellow-500' : 'text-white'}`
                  }
                >
                  {subPage.icon} - {subPage.pageTitle}
                </NavLink>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
