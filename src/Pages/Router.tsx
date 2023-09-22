import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Terminal } from './Terminal';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terminal" element={<Terminal />} />
    </Routes>
  );
}