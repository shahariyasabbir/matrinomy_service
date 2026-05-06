import couplePhoto from '../assets/couple.png'

export default function Home() {
  return (
    <div className="page-fade pattern-bg min-h-[calc(100vh-73px)]">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="text-center mb-14" style={{ animation: 'slideUp 0.8s ease forwards' }}>
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
            A Sacred Union
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-rose-800 leading-tight italic mb-4">
            Two Hearts,<br />
            <span className="text-stone-700 not-italic font-light">One Destiny</span>
          </h1>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-16 bg-gold/40" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <p className="font-body text-stone-500 text-base max-w-xl mx-auto leading-relaxed font-light">
            Welcome to our matrimony page — a celebration of love, commitment,
            and the beautiful journey that begins with a single promise. Here you
            will find everything about the groom, the bride, and the blessed Kazi
            who will unite them.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold/20"
          style={{ animation: 'slideUp 0.9s ease 0.2s both' }}>

          {/* Decorative top strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-rose-300 via-gold to-rose-300" />

          <div className="bg-white/70 backdrop-blur-sm p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
            {/* Text content */}
            <div className="flex-1">
              <h2 className="font-display text-3xl text-rose-700 italic mb-4">About This Ceremony</h2>
              <p className="font-body text-stone-500 leading-relaxed mb-4 font-light">
                This website is a digital memoir of a joyful union. You can explore the 
                profile of the groom and bride —theire life, values, and aspirations. And learn about the Kazi who will solemnize 
                this sacred bond under the blessings of the Almighty.
              </p>
              <p className="font-body text-stone-400 text-sm leading-relaxed font-light">
                May this union be blessed with love, laughter, and lifelong happiness with the acceptance of ALLAH.
              </p>

              <div className="mt-8 flex gap-4">
                <a href="/groom"
                  className="px-6 py-2.5 bg-rose-700 text-white text-xs tracking-widest uppercase font-body rounded-full hover:bg-rose-800 transition-colors duration-200">
                  Meet Groom
                </a>
                <a href="/bride"
                  className="px-6 py-2.5 border border-gold text-gold text-xs tracking-widest uppercase font-body rounded-full hover:bg-gold/10 transition-colors duration-200">
                  Meet Bride
                </a>
              </div>
            </div>

            {/* Illustration / Couple Image */}
            <div className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-lg relative">
              <img
                src={couplePhoto}
                alt="Together Forever"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/40 py-3 text-center">
                <p className="font-display italic text-white text-lg">Together Forever</p>
                <p className="font-body text-white text-[10px] tracking-widest mt-1">HAPPILY MARRIED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom ornament */}
      <div className="text-center py-8 text-gold/50 font-display text-2xl tracking-widest">
        ✦ ✦ ✦
      </div>
    </div>
  )
}