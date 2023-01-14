import React from "react";
import '../style/footer.css'
import Contacticons from "./contactIcons";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h1 style = {{
                    marginBottom : 20
                }}>Pawan Kalyan</h1>
                <div className="contacts">
                    <Contacticons gap = {40}  />
                </div>
                <div className="endLine">
                    <p>pawankalyan1614@gmail.com</p>
                    <h3>Made With love ❤️</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer