import friendPhoto from '../assets/friend.png'

export default function Kazi() {
  return (
    <div className="page-fade pattern-bg min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        {/* Page heading */}
        <div className="text-center mb-12">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">Officiant</p>
          <h1 className="font-display text-5xl italic text-rose-800 mb-3">The Kazi</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        {/* Kazi Card */}
        <div className="profile-card max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gold/30 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-rose-300 via-gold to-rose-300" />

            <div className="p-10 flex flex-col items-center text-center">
              {/* Badge */}
              <span className="text-xs font-body tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-amber-50 text-gold border border-gold/30 mb-8">
                ✦ Licensed Kazi ✦
              </span>

              {/* Photo */}
              <div className="w-48 h-56 rounded-xl overflow-hidden border-4 border-gold/30 shadow-lg mb-6">
                <img src={friendPhoto} alt="Kazi" className="w-full h-full object-cover" />
              </div>

              <h2 className="font-display text-3xl italic text-amber-800 mb-2">Kazi Saheb</h2>
              <p className="font-body text-stone-400 text-sm mb-8 font-light">
                The honored officiant who will solemnize this sacred marriage
              </p>

              {/* Info grid */}
              <div className="w-full grid grid-cols-1 gap-3 text-left">
                {[
                  { label: 'Full Name', value: 'SHAHARIYA SABBIR' },
                  { label: 'License No.', value: '0822310105101004' },
                  { label: 'Jurisdiction', value: 'Dhaka, Bangladesh' },
                  { label: 'Contact', value: '+880 1854679981' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-3 border-b border-stone-100 pb-2">
                    <span className="font-body text-xs tracking-widest uppercase font-medium text-gold w-32 flex-shrink-0">
                      {label}
                    </span>
                    <span className="font-body text-stone-600 text-sm font-light">
                      {value || <span className="text-stone-300 italic">—</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-body text-stone-400 text-xs tracking-widest mt-10 uppercase">
          ✦ &nbsp; May Allah bless this union &nbsp; ✦
        </p>
      </div>
    </div>
  )
}