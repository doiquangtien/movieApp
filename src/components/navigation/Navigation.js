import { useState } from 'react'
import clsx from 'clsx'
import Search from './search/Search'
import Navbar from './navbar/Navbar'
import Myaccount from './myaccount/Myaccount'
import Toggledarkmode from './toggledarkmode/Toggledarkmode'
import styles from './navigation.module.scss'
import logo from'../../img/logo192.png'
import { Link } from 'react-router-dom'

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);    
            return () => (window.onscroll = null);
          };
  return (
    <div className={isScrolled ? clsx(styles.naviga,styles.scrolled) : styles.naviga}>
        <div className={clsx('grid', 'wide')} >
            <div className={clsx(styles.navigalist,'row')}>
                <div className={clsx(styles.navigaitem,'col', 'l-5')}>
                    <div className={styles.logo} onClick={()=>{
                        localStorage.setItem("tab", 0)
                        document.documentElement.scrollTop = 0
                        }}>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>      
                    </div>
                        <Navbar/>
                </div>
                <div className={clsx(styles.navigaitem,'col', 'l-3')}>
                        <Search/>
                </div>
                <div className={clsx(styles.right,'col','l-4')}>
                        <Toggledarkmode/> 
                        <Myaccount/>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Navigation