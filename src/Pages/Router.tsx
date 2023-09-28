import { Route, Routes } from 'react-router-dom'
import { Browser } from './Browser'
import { EnhancerYt } from './EnhancerYt'
import { SponsorBlock } from './SponsorBlock'
import { Terminal } from './Terminal'
import { OmpConfig } from './OmpConfig'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/browser/enhancer-yt" element={<EnhancerYt />} />
      <Route path="/browser/sponsor-block" element={<SponsorBlock />} />
      <Route path="/terminal" element={<Terminal />} />
      <Route path="/terminal/omp-config" element={<OmpConfig />} />
    </Routes>
  )
}
