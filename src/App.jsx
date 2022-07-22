import logo909 from './assets/909-LOGO.png'
import iconBehance from './assets/socials/behance.png'
import iconEmail from './assets/socials/email.png'
import iconInstagram from './assets/socials/instagram.png'
import iconLinkedin from './assets/socials/linkedin.png'
import constBG from './assets/Falling_Field_169.mp4'
import underConstruction from './assets/site-under-construction.png'
import './App.css'

function myFunction() {
  alert("Woohoooooo!");
}

function App() {

  return (
    <div className="App">
      
      <div className='content-block'>
        <img src={logo909} className='big-logo'/>
        <div className='text-block'>
          <h2>WHO WE ARE</h2>
          <p>We are a full-service creative agency that brings together world-class 3D modeling and animation, NFT design, marketing, and event management. We apply our creativity in various fields, including music, sports, and entertainment.</p>
          <div className='social-icons'>
            <a href="https://www.behance.net/909medialabs" target="_blank"><img src={iconBehance} className='social-icon'/></a>
            <a href="https://www.linkedin.com/company/909medialabs/" target="_blank"><img src={iconLinkedin} className='social-icon'/></a>
            <a href="https://www.instagram.com/909medialabs/" target="_blank"><img src={iconInstagram} className='social-icon'/></a>
            <a href="mailto: 909medialabs@gmail.com"><img src={iconEmail} className='social-icon'/></a>
          </div>
        </div>
      <div>
          
        </div>
      </div>

      <video id='background-video' autoPlay loop muted>
        <source src={constBG} type='video/mp4'/>
      </video>
      <div id='video-gradient'></div>

      <img src={underConstruction} className='lower-left' onClick={myFunction}/>
      
    </div>
  )
}

export default App
