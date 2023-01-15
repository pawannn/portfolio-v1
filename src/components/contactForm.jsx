import React from "react"
import '../style/contactForm.css'

const ContactForm = () => {
    return (
            <div className="container">
                <form name="contactform" method="POST" data-netlify="true" netlify >
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
                </form>
            </div>  
    )
}

export default ContactForm