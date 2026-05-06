import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/groom', label: 'Groom' },
  { to: '/bride', label: 'Bride' },
  { to: '/kazi', label: 'Kazi' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-gold/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-display text-2xl text-rose-700 italic tracking-wide select-none">
          Saha's<span className="text-gold font-normal">✦</span> Matrimony
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link px-5 py-2 font-body text-sm font-medium tracking-widest uppercase transition-all duration-200 rounded-sm
                 ${to === '/kazi'
                   ? `border rounded-full px-6 ${isActive ? 'border-rose-700 text-rose-700 bg-rose-50' : 'border-gold text-gold hover:border-rose-400 hover:text-rose-600'}`
                   : `${isActive ? 'text-rose-700 active' : 'text-stone-500 hover:text-rose-600'}`
                 }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}