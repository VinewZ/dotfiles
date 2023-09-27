import { Route, Routes } from 'react-router-dom'
import { Terminal } from './Terminal'
import { Browser } from './Browser'
import { EnhancerYt } from './EnhancerYt'
import { SponsorBlock } from './SponsorBlock'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/enhancer-yt" element={<EnhancerYt />} />
      <Route path="/sponsor-block" element={<SponsorBlock />} />
      <Route path="/terminal" element={<Terminal />} />
    </Routes>
  )
}
