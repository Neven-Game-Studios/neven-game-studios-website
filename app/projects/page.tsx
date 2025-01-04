import Link from 'next/link'
import '../globals.css'

export default function Projects() {
    return (
        <div className='main'>
            <div className="luciusgame">
                <h1>Lucius</h1>
                <h4>A story-driven sidescroller set in steampunk world</h4>
                <Link href={'/projects/lucius'} legacyBehavior><a>Learn More</a></Link>
            </div>

            <div className='morecomingsoon'>
                <p>There are way more games coming, in the meantime, <br></br> why not check out our <a href='https://www.youtube.com/@NevenGameStudios'>Youtube channel</a></p>
            </div>
        </div>
    )
}