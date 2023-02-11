import { Link } from 'react-router-dom'
import './AboutMe.css'
import Me from './me.png'

const AboutMe = props => {
    return (
      <>
        <h1>About Me</h1>

        <img src= {Me} width={250} height={250} alt="me" />
        
        
          <p class = "text"> Hello! My name is Kate, and I'm currently a junior studying 
          computer science here at NYU! The image above is a picture my roommate drew of 
          me last Halloween.

          In my free time, I enjoy reading, writing, watching anime,
          and going to fun places with my friends. Music and writing are really 
          important to me. I'm minoring in creative writing, and I primarily write
          poetry.

          As for music, some of my favorite artists are Alex G, The Smiths, and 
          Bladee. Some of my favorite songs are “Where is My Mind” by the Pixies, 
          “Runner” by Alex G, and “Trip” by Young Lean. I recently picked up the 
          guitar so I could learn how to play songs I like, but I’m not so great at 
          it yet.

          That's all from me! Thanks for reading </p>
          
      </>
    )
  }


export default AboutMe