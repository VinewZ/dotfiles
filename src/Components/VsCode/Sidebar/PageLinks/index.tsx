import * as Accordion from '@radix-ui/react-accordion'
import { NavLink } from 'react-router-dom'

export function PageLinks() {
  return (
    <div>
      <Accordion.Root type="multiple" className="items-start">
        <Accordion.Item className="" value="item-1">
          <Accordion.Trigger className="w-full bg-vs-sidebar-tabs text-left">
            Browser
          </Accordion.Trigger>
          <Accordion.Content>
            <NavLink
              to="/"
              className={(isActive) =>
                isActive ? 'text-yellow-300' : 'text-white'
              }
            >
              - Extensions
            </NavLink>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="" value="item-2">
          <Accordion.Trigger className="w-full bg-red-500">
            Browser
          </Accordion.Trigger>
          <Accordion.Content>
            <NavLink
              to="/"
              className={(isActive) =>
                isActive ? 'text-yellow-300' : 'text-white'
              }
            >
              - Extensions
            </NavLink>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
