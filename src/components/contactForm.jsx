import React from "react"
import '../style/contactForm.css'

const ContactForm = () => {
    return (
            <div className="container">
                <form name = "contact" method = "POST" data-netlify = "true" >
                    <div>
                        <p>Name</p>
                        <input type = "text" placeholder="Your Lovely Name" name = "name"/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type = "email" placeholder="Your Email ID" name = "email"/>
                    </div>
                    <div>
                        <p>Message</p>
                        <textarea style = {{ resize : "none" }} placeholder="Lets Start the Conversation" name = "message"></textarea>
                    </div>
                    <div>
                        <button type="submit">Say Hello!</button>
                    </div>
                </form>
            </div>  
    )
}

export default ContactForm