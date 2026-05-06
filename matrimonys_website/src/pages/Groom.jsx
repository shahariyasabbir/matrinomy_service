import ProfileCard from '../components/ProfileCard'
import abdullahPhoto from '../assets/Abdullah.png'
import anamulPhoto from '../assets/Anamul.png'
import farazPhoto from '../assets/Faraz.png'
import hossainPhoto from '../assets/Hossain.png'
import jaforPhoto from '../assets/jafor.png'
import mirazPhoto from '../assets/Miraz.png'
import moneemPhoto from '../assets/Moneem.png'
import mustafizPhoto from '../assets/Mustafiz.png'
import refatPhoto from '../assets/Refat.png'
import seyamPhoto from '../assets/Seyam.png'
import tanjilPhoto from '../assets/Tanjil.png'
import yeasinPhoto from '../assets/Yeasin.png'

const grooms = [
  {
    name: 'Anamul',
    role: 'The Groom',
    photo: anamulPhoto,
    fields: [
      { label: 'Full Name', value: 'Anam Bhai' },
      { label: 'Age', value: '28' },
      { label: 'Height', value: '5 ft 7 in' },
      { label: 'Net Worth', value: '1.2 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Live with purpose' },
      { label: 'Profession', value: 'Product Developer' },
      { label: 'Education', value: 'B.Sc. in Computer Science' },
    ],
  },
  {
    name: 'Refat',
    role: 'The Groom',
    photo: refatPhoto,
    fields: [
      { label: 'Full Name', value: 'Refat Hossain' },
      { label: 'Age', value: '27' },
      { label: 'Height', value: '5 ft 6 in' },
      { label: 'Net Worth', value: '2.5 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Kindness first' },
      { label: 'Profession', value: 'Software architect' },
      { label: 'Education', value: 'MBA' },
    ],
  },
  {
    name: 'Yeasin',
    role: 'The Groom',
    photo: yeasinPhoto,
    fields: [
      { label: 'Full Name', value: 'Golam Morshed Easin' },
      { label: 'Age', value: '26' },
      { label: 'Height', value: '5 ft 7 in' },
      { label: 'Net Worth', value: '3.8 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Work hard, stay humble' },
      { label: 'Profession', value: 'Civil Engineer' },
      { label: 'Education', value: 'M.Sc. in Engineering' },
    ],
  },
  {
    name: 'Miraz',
    role: 'The Groom',
    photo: mirazPhoto,
    fields: [
      { label: 'Full Name', value: 'Mohammad Miraz' },
      { label: 'Age', value: '26' },
      { label: 'Height', value: '5 ft 8 in' },
      { label: 'Net Worth', value: '50 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Always learning' },
      { label: 'Profession', value: 'Business Owner' },
      { label: 'Education', value: 'BBA' },
    ],
  },
  {
    name: 'Seyam',
    role: 'The Groom',
    photo: seyamPhoto,
    fields: [
      { label: 'Full Name', value: 'Iktiup Mahmud Seyam' },
      { label: 'Age', value: '28' },
      { label: 'Height', value: '6 ft 0 in' },
      { label: 'Net Worth', value: '4.2 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Create beauty daily' },
      { label: 'Profession', value: 'Graphics Designer' },
      { label: 'Education', value: 'BSC  from BUFT' },
    ],
  },
  {
    name: 'Faraz',
    role: 'The Groom',
    photo: farazPhoto,
    fields: [
      { label: 'Full Name', value: 'Mohammad Fardin Faraz' },
      { label: 'Age', value: '28' },
      { label: 'Height', value: '5 ft 10 in' },
      { label: 'Net Worth', value: '2.1 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Build with heart' },
      { label: 'Profession', value: 'Business Owner with AQUA MATE' },
      { label: 'Education', value: 'CSE' },
    ],
  },
  {
    name: 'Abdullah',
    role: 'The Groom',
    photo: abdullahPhoto,
    fields: [
      { label: 'Full Name', value: 'Abdullah Razaul' },
      { label: 'Age', value: '28' },
      { label: 'Height', value: '5 ft 7 in' },
      { label: 'Net Worth', value: '3.5 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Teach and inspire' },
      { label: 'Profession', value: 'Educator' },
      { label: 'Education', value: 'M.Ed' },
    ],
  },
  {
    name: 'Mustafiz',
    role: 'The Groom',
    photo: mustafizPhoto,
    fields: [
      { label: 'Full Name', value: 'Mustafizur Rahaman' },
      { label: 'Age', value: '27' },
      { label: 'Height', value: '5 ft 7 in' },
      { label: 'Net Worth', value: '1.8 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Serve with sincerity' },
      { label: 'Profession', value: 'Project Manager' },
      { label: 'Education', value: 'CSE' },
    ],
  },
  {
    name: 'Hossain',
    role: 'The Groom',
    photo: hossainPhoto,
    fields: [
      { label: 'Full Name', value: 'Shrabon Hossain' },
      { label: 'Age', value: '29' },
      { label: 'Height', value: '5 ft 9 in' },
      { label: 'Net Worth', value: '4.5 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Lead by example' },
      { label: 'Profession', value: 'Project Manager' },
      { label: 'Education', value: 'MBA' },
    ],
  },
  {
    name: 'Moneem',
    role: 'The Groom',
    photo: moneemPhoto,
    fields: [
      { label: 'Full Name', value: 'Moneem Abdullah' },
      { label: 'Age', value: '30' },
      { label: 'Height', value: '5 ft 11 in' },
      { label: 'Net Worth', value: '2.7 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Dream big, stay humble' },
      { label: 'Profession', value: 'Sales' },
      { label: 'Education', value: 'MBA' },
    ],
  },
  {
    name: 'Jafor',
    role: 'The Groom',
    photo: jaforPhoto,
    fields: [
      { label: 'Full Name', value: 'Abu Jafor' },
      { label: 'Age', value: '30' },
      { label: 'Height', value: '5 ft 7 in' },
      { label: 'Net Worth', value: '3.1 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Dream big, stay humble' },
      { label: 'Profession', value: 'Sales' },
      { label: 'Education', value: 'MBA' },
    ],
  },
  {
    name: 'Tanjil',
    role: 'The Groom',
    photo: tanjilPhoto,
    fields: [
      { label: 'Full Name', value: 'Tanjil Khan' },
      { label: 'Age', value: '30' },
      { label: 'Height', value: '5 ft 6 in' },
      { label: 'Net Worth', value: '1.9 crore' },
      { label: 'Religion', value: 'Islam' },
      { label: 'Life Motto', value: 'Dream big, stay humble' },
      { label: 'Profession', value: 'Sales' },
      { label: 'Education', value: 'MBA' },
    ],
  },
]

export default function Groom() {
  return (
    <div className="page-fade pattern-bg min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        {/* Page heading */}
        <div className="text-center mb-12">
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">Profiles</p>
          <h1 className="font-display text-5xl italic text-rose-800 mb-3">The Grooms</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        <div className="grid gap-10">
          {grooms.map((groom, index) => (
            <ProfileCard key={groom.name + index} {...groom} accentColor="rose" />
          ))}
        </div>

        <p className="text-center font-body text-stone-400 text-xs tracking-widest mt-10 uppercase">
          ✦ &nbsp; Blessed with purpose, guided by faith &nbsp; ✦
        </p>
      </div>
    </div>
  )
}