import React from "react"
import '../style/contactForm.css'

const ContactForm = () => {
    return (
        <form name="contactform" method="POST" netlify netlify-honeypot="bot-field">
            <div className="container">
                    <div>
                        <p>Name</p>
                        <input type = "text" name = "name" placeholder="Your Lovely Name" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type = "email" name = "email" placeholder="Your Email ID" />
                    </div>
                    <div>
                        <p>Message</p>
                        <textarea style = {{ resize : "none" }} name = "message" placeholder="Lets Start the Conversation"></textarea>
                    </div>
                    <div>
                        <button type="submit">Say Hello!</button>
                    </div>
            </div>  
        </form>
    )
}

export default ContactForm