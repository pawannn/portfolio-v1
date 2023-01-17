import React, { useHistory } from "react"
import '../style/contactForm.css'

const ContactForm = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/success');
    }

    return (
            <div className="container">
                <form name="contactform" data-netlify="true" >
                    <input type = "text" hidden name = "form-name" value = "contactform" method = "post" action = "/success"/>
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
                        <button type="submit" onSubmit = { handleSubmit }>Say Hello!</button>
                    </div>
                </form>
            </div>  
    )
}

export default ContactForm