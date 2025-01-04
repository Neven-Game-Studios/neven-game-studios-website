import Link from 'next/link'
import './globals.css'

export default function App() {
  return (
    <div className='main'>
      <h1>Neven Game Studios</h1>
      <div className='infotext'>
        <h4>A enthousiastic game studio from the Netherlands</h4>
      </div>
      <div className='seeourprojects'>
        <Link href={'./projects'} legacyBehavior><a>See our projects</a></Link>
      </div>
    </div>
  )
}