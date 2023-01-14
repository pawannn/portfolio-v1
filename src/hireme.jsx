import React from "react"
import './style/hireme.css'
import profilepicture from './assets/profilepicture.jpeg'
import Footer from "./components/footer"
import working from './assets/hireme/work.png'
import ContactForm from './components/contactForm'
import letsconnect from './assets/hireme/letsconnect2.png'
import workspace from './assets/hireme/banner1.jpg'

const Hireme = () => {
    return (
        <div className="hiremeContainer">
            <header style={{marginBottom : 20}}>
                <div className="banner">
                    <img src = { workspace }/>
                </div>
            </header>
            <section >
            <div className="head">
                <img src = { profilepicture } className = "profilePicture"/>
                <h1>Pawan Kalyan</h1>
                <p>Visakhapatnam, Andhra Pradesh</p>
                <div className = "line">
                    <hr/>
                </div>
            </div>
            </section>
            <section>
                <div className="contentContainer">
                    <div className="contactIntro">
                        <div className="intro">
                        <h1 style = {{ marginBottom : 7 }}>Are there any projects worth me ? </h1><p>Hi there, first thanks for showing your interest in me and clicking on the “hire me” button. Currently, I’m seeking part time remote jobs or small projects related to FrontEnd designing and development. Whether it’s just a landing page or an entire buisness website, the product deliverd to you will be quality assured.</p>
                        </div>
                        <div className="introImg">
                            <img src = { working }/>
                        </div>
                    </div>
                    <div className="contactMe">
                        <div className="contactimage">
                            <img src = { letsconnect }/>
                        </div>
                        <div className="form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Hireme