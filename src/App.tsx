import { VsCode } from './Components/VsCode'
import { Router } from './Pages/Router'

export function App() {
  return (
    <div className="grid h-screen w-screen place-content-center bg-gradient-to-br from-[#614385] to-[#516395]">
      <VsCode.Root>
        <VsCode.Topbar />
        <VsCode.Sidebar />
        <VsCode.Content>
          <Router />
        </VsCode.Content>
        <VsCode.Footer />
      </VsCode.Root>
    </div>
  )
}
