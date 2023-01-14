import React from "react"
import '../style/contactForm.css'

const ContactForm = () => {
    return (
            <div className="container">
                <div>
                    <p>Name</p>
                    <input type = "text" placeholder="Your Lovely Name"/>
                </div>
                <div>
                    <p>Email</p>
                    <input type = "text" placeholder="Your Email ID"/>
                </div>
                <div>
                    <p>Message</p>
                    <textarea style = {{ resize : "none" }}placeholder="Lets Start the Conversation"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
    )
}

export default ContactForm