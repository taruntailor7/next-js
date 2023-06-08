import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './components/HeroSection'

export default function Home() {
  return (
    <div>
      <Herosection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={'/home.svg'}/>
    </div>
  )
}
