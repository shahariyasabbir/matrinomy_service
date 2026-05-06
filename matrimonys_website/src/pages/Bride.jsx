import ProfileCard from '../components/ProfileCard'
import friendPhoto from '../assets/friend.png'
import dureFishanPhoto from '../assets/Dure Fishan.png'
import haniaPhoto from '../assets/Hania.png'
import mrunalPhoto from '../assets/mrunal.png'
import shubrahPhoto from '../assets/Shubrah.png'
import targaryPhoto from '../assets/targarian.png'

const brides = [
  {
    name: 'Dure Fishan',
    role: 'The Bride',
    photo: dureFishanPhoto,
    fields: [
      { label: 'Full Name',  value: 'Dure Fishan' },
      { label: 'Age',        value: '25' },
      { label: 'Height',     value: '5 ft 4 in' },
      { label: 'Complexion', value: 'Fair' },
      { label: 'Religion',   value: 'Islam' },
      { label: 'Education',  value: 'B.Sc. in English' },
    ],
  },
  {
    name: 'Hania ',
    role: 'The Bride',
    photo: haniaPhoto,
    fields: [
      { label: 'Full Name',  value: 'Hania amir' },
      { label: 'Age',        value: '24' },
      { label: 'Height',     value: '5 ft 5 in' },
      { label: 'Complexion', value: 'Light' },
      { label: 'Religion',   value: 'Islam' },
      { label: 'Education',  value: 'BBA' },
    ],
  },
  {
    name: 'Shubrah',
    role: 'The Bride',
    photo: shubrahPhoto,
    fields: [
      { label: 'Full Name',  value: 'Shubrah Islam' },
      { label: 'Age',        value: '26' },
      { label: 'Height',     value: '5 ft 6 in' },
      { label: 'Complexion', value: 'Medium' },
      { label: 'Religion',   value: 'Islam' },
      { label: 'Education',  value: 'M.Sc. in Mathematics' },
    ],
  },
  {
    name: 'mrunal',
    role: 'The Bride',
    photo: mrunalPhoto,
    fields: [
      { label: 'Full Name',  value: 'mrunal thakur' },
      { label: 'Age',        value: '27' },
      { label: 'Height',     value: '5 ft 3 in' },
      { label: 'Complexion', value: 'Warm' },
      { label: 'Religion',   value: 'Islam' },
      { label: 'Education',  value: 'LLB' },
    ],
  },
  {
    name: 'targarian',
    role: 'The Bride',
    photo: targaryPhoto,
    fields: [
      { label: 'Full Name',  value: 'Mother of Dragons' },
      { label: 'Age',        value: '25' },
      { label: 'Height',     value: '5 ft 7 in' },
      { label: 'Complexion', value: 'Olive' },
      { label: 'Religion',   value: 'Islam' },
      { label: 'Education',  value: 'B.Sc. in Geopolitics' },
    ],
  },
]

export default function Bride() {
  return (
    <div className="page-fade pattern-bg min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        {/* Page heading */}
        <div className="text-center mb-12">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">Profiles</p>
          <h1 className="font-display text-5xl italic text-rose-800 mb-3">The Brides</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        <div className="grid gap-10">
          {brides.map((bride, index) => (
            <ProfileCard key={bride.name + index} {...bride} accentColor="gold" />
          ))}
        </div>

        <p className="text-center font-body text-stone-400 text-xs tracking-widest mt-10 uppercase">
          ✦ &nbsp; Grace, warmth, and an endless smile &nbsp; ✦
        </p>
      </div>
    </div>
  )
}