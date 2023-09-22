import { VsCode } from './Components/VsCode'
import { Router } from './Pages/Router'
export function App() {
  const routes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/terminal',
      name: 'Terminal',
    },
  ]

  return (
    <div className="grid h-screen w-screen place-content-center bg-gradient-to-br from-[#614385] to-[#516395]">
      <VsCode.Root>
        <VsCode.Topbar />
        <VsCode.Sidebar routes={routes} />
        <Router />
        <VsCode.Footer />
      </VsCode.Root>
    </div>
  )
}
