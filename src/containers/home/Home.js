
import  styles from './home.module.scss'
import Navigation from '../../components/navigation/Navigation'
import Slideshow from '../../components/slideshow/Slideshow'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
   <div className={styles.home}>
     <Navigation/>
     <Slideshow />
     <Body/>
     <Footer/>
   </div>
  )
}

export default Home