import {useState , useEffect} from 'react'
import Navbar  from './scenes/Navbar/Navbar'
import Home from './scenes/Home'
import Benefits from './scenes/Benefits'
import Ourclasses from './scenes/classes'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'
import { SelectedPage } from './Types/Types'

const App = () => {
  const [selectedPage , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const  [isTopOfPage , setIsTopOfPage] = useState<boolean>(true)


  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0 ){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }else{
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll" , handleScroll)
    return () => window.removeEventListener("scroll" , handleScroll)
  }, [])


  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Ourclasses setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App