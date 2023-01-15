import React from "react"
import '../style/contactForm.css'

const ContactForm = () => {
    return (
            <div className="container">
                <form name = "contactform" class="form" method="POST" data-netlify = "true" onSubmit="submit">
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
                        <textarea style = {{ resize : "none" }} placeholder="Lets Start the Conversation" name = "description"></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>  
    )
}

export default ContactForm