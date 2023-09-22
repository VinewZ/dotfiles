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
    <div className="bg-gradient-to-br from-[#614385] to-[#516395] w-screen h-screen grid place-content-center">
      <VsCode.Root>
        <VsCode.Topbar />
        <VsCode.Sidebar routes={routes} />
        <div
          style={{
            gridArea: 'content',
          }}
        >
          <VsCode.Content>lésgo</VsCode.Content>
        </div>
        <VsCode.Footer />
      </VsCode.Root>
      <Router />
    </div>
  )
}
