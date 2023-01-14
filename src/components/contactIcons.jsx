import React from 'react'
import Github from '../assets/contactLogos/github-logo.svg'
import Linkedin from '../assets/contactLogos/linkedin.svg'
import Medium from '../assets/contactLogos/medium.svg'
import Twitter from '../assets/contactLogos/twitter.svg'
import Discord from '../assets/contactLogos/discord.svg'

const Contacticons = ({ gap }) => {
    return(
        <div className='icons' style = {{
            display : 'flex',
            gap : `${ gap }px`,
        }}>
            { console.log({gap}) }
            <a href = "https://github.com/pawannn"><img style = {{width : 32, height : 32}} src = { Github } alt = "Github" /></a>
            <a href = "https://www.linkedin.com/in/pawan-kalyan-a8a9b4172/"><img style = {{width : 32, height : 32}} src = { Linkedin } alt = "LinkedIn" /></a>
            <a href = "https://medium.com/@togethergrow"><img style = {{width : 32, height : 32}} src = { Medium } alt = "Medium" /></a>
            <a href = "https://twitter.com/hekerboi"><img style = {{width : 32, height : 32}} src = { Twitter } alt = "Twitter" /></a>
            <a href = "https://discord.com/users/490904589026197515"><img style = {{width : 40, height : 40}} src = { Discord } alt = "Twitter" /></a>
        </div>
    )
}

export default Contacticons