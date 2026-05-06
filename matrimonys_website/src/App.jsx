import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Groom from './pages/Groom'
import Bride from './pages/Bride'
import Kazi from './pages/kazi'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/groom" element={<Groom />} />
          <Route path="/bride" element={<Bride />} />
          <Route path="/kazi"  element={<Kazi />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 mt-10 py-6 text-center">
        <p className="font-display italic text-rose-700 text-lg mb-1">kagles:Matrimony</p>
        <p className="font-body text-stone-400 text-xs tracking-widest uppercase">
          Made with love ✦ All rights reserved
        </p>
      </footer>
    </div>
  )
}