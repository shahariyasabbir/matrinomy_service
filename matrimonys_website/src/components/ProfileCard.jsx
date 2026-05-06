export default function ProfileCard({ name, role, photo, fields, accentColor = 'rose' }) {
  const accent = accentColor === 'gold'
    ? { border: 'border-gold/30', badge: 'bg-gold/10 text-gold border border-gold/30', label: 'text-gold', heading: 'text-amber-800' }
    : { border: 'border-rose-200', badge: 'bg-rose-50 text-rose-600 border border-rose-200', label: 'text-rose-500', heading: 'text-rose-800' }

  return (
    <div className="profile-card max-w-4xl mx-auto">
      <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border ${accent.border} overflow-hidden`}>
        {/* Top strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-300 via-gold to-rose-300" />

        <div className="p-10 md:p-16">
          {/* Role badge */}
          <div className="mb-8">
            <span className={`text-xs font-body tracking-[0.25em] uppercase px-4 py-1.5 rounded-full ${accent.badge}`}>
              ✦ {role} ✦
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className={`w-56 h-64 rounded-xl overflow-hidden border-4 ${accent.border} shadow-md`}>
                {photo
                  ? <img src={photo} alt={name} className="w-full h-full object-cover" />
                  : (
                    <div className="w-full h-full bg-gradient-to-br from-rose-100 to-amber-50 flex items-center justify-center">
                      <span className="text-6xl">{accentColor === 'gold' ? '👰' : '🤵'}</span>
                    </div>
                  )
                }
              </div>
              <p className={`font-display text-2xl italic ${accent.heading} mt-4 text-center`}>{name}</p>
            </div>

            {/* Info fields */}
            <div className="flex-1 grid grid-cols-1 gap-4">
              {fields.map(({ label, value }) => (
                <div key={label} className="flex items-baseline gap-3 border-b border-stone-100 pb-3">
                  <span className={`font-body text-xs tracking-widest uppercase font-medium ${accent.label} w-32 flex-shrink-0`}>
                    {label}
                  </span>
                  <span className="font-body text-stone-600 text-base font-light">
                    {value || <span className="text-stone-300 italic">—</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}