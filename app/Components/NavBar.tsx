import Link from "next/link"
import '../globals.css'
export default function Navbar() {
    return (
        <nav>
            <Link href={'/'} legacyBehavior><a>Home</a></Link>
            <Link href={'/projects'} legacyBehavior><a>Projects</a></Link>
            <Link href={'/projects/lucius'} legacyBehavior><a>Lucius</a></Link>
            <Link href={'/news'} legacyBehavior><a>News</a></Link>
        </nav>
    )
}