import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {HiUserCircle} from 'react-icons/hi'
import { TfiMenuAlt } from "react-icons/tfi";
import './App.css'

class App extends Component {
  state = {isClicked: false}

  renderHomePage = () => {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    } 
    return(
    <div className="home-container">
      <nav className="navbar-container">
        <HiUserCircle className="icon" color="#ffffff" size={34} />
        <TfiMenuAlt className="icon" color="#ffffff" size={34}/>
      </nav>
      <h1 className="home-heading">Hi! Tushar</h1>
      <div className="slide">
      <Slider {...settings}>
        <div className="slick-container">
         <p class="text">Learning 1</p>
        </div>
        <div className="slick-container">
        <p class="text">Learning 2</p>
        </div>
        <div className="slick-container">
        <p class="text">Learning 3</p>
        </div>
        <div className="slick-container">
        <p class="text">Learning 4</p>
        </div>
      </Slider>
      </div> 

      <div className="content-container">
      <div class="overlay-image-container">
        <img src="https://res.cloudinary.com/dgcyjet4c/image/upload/v1708845493/new-removebg-preview_bcdh53.png" alt="Overlay" class="overlay-image" />
      </div>
      </div>
      <p className="learning-para">What do you want to learn today Tushar?</p>
    </div>
  )
} 

  render() {
    const {isClicked} = this.state
    const onClickButton = () => {
      this.setState({isClicked: true})
    }

    return isClicked ? (
      this.renderHomePage()
    ) : (
      <div className="login-container">
        <h1 className="login-heading">Create Account</h1>
        <img
          src="https://res.cloudinary.com/dgcyjet4c/image/upload/v1708831375/ecom__1_-removebg-preview_uafgfo.png"
          alt="login"
          className="login-img"
        />
        <form className="login-form-container">
          <input type="text" className="input-field" placeholder="Full Name" />
          <input type="text" className="input-field" placeholder="Phone" />
          <input type="text" className="input-field" placeholder="Email" />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <button
            className="sign-up-button"
            type="button"
            label="aria-label"
            onClick={onClickButton}
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}
export default App
