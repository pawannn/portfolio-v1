import React from "react"
import { useNavigate } from "react-router-dom";
import '../style/contactForm.css'

const ContactForm = () => {

    return (
            <div className="container">
                <form name="contactform" data-netlify="true" id = "contact-form" method="post" onSubmit="submit" action="/success">
                    <input type = "text" hidden name = "form-name" value = "contactform" />
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