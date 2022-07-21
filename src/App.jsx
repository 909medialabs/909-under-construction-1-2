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
          <p>As a multimedia content/event design company, 909 Media Labs develops and manages NFTs/events, provides marketing solutions, and assists artists and brands. <br /> <br /> That’s why we create dynamic, high impact animation for artists and digital media from concept to final execution, pushing in every project the limits of our own creativity.</p>
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
