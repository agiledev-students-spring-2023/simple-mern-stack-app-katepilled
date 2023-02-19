import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './AboutMe.css'
import loadingIcon from './loading.gif'
import axios from 'axios';


const AboutMe = props => {
  const [aboutText, setText] = useState('')
  const [aboutImage, setImage] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  /**
   * A nested function that fetches about text and image from the back-end server.
   */
  const fetchInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const aboutText = response.data.aboutText
        const aboutImage = response.data.aboutImage
        setText(aboutText)
        setImage(aboutImage)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    // fetch messages this once
    fetchInfo()
  }) 

  return (
    <>
      <h1>About Me</h1>
      
      <img src={aboutImage} width="30%"/>
      <div class = 'text'>
        <p>{aboutText}</p>

      </div>

      
      {error && <p className="Messages-error">{error}</p>}
      {!loaded && <img src={loadingIcon} alt="loading" />}
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
