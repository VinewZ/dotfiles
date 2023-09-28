import { VsCode } from './Components/VsCode'
import { Router } from './Pages/Router'

export function App() {
  return (
    <div className="grid h-screen w-screen place-content-center bg-gradient-to-r from-slate-900 to-slate-700">
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
