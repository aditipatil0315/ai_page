
import Ai_page from './Ai_page/Ai_page'
import './App.css'
import Case_study from './components/Case_study/Case_study'
import Footer from './components/Footer/Footer'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'

function App() {

  return (
    <div className='app'>
      {/* <Ai_page/> */}

      <Section1/>
        <Section2/>
        <Section3/>
        <Section7/>
        <Section4/>
        <Section5/>
        <Case_study/>
        <Section6/>
        <Footer/>
      
    </div>
  )
}

export default App
