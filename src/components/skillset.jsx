import React from "react"
import '../style/skillset.css'
import cprogramming from '../assets/skillLogos/cprogramming.svg'
import python from '../assets/skillLogos/python.svg'
import html from '../assets/skillLogos/html.svg'
import css from '../assets/skillLogos/css.svg'
import javascript from '../assets/skillLogos/js.svg'
import react from '../assets/skillLogos/react.svg'
import salesforce from '../assets/skillLogos/salesforce.svg'
import golang from '../assets/skillLogos/golang.svg'
import git from '../assets/skillLogos/git.svg'
import nodejs from '../assets/skillLogos/nodejs.svg'

const Skillset = () => {
    return (

            <div className="skillSet">
                <div className="skillCard">
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { cprogramming } />
                        <div>C</div>
                    </div>
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { python } />
                        <div>Python</div>
                    </div>
                </div>
                <div className="skillCard">
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { html } />
                        <div>HTML</div>
                    </div>
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { css } />
                        <div>CSS</div>
                    </div>
                </div>
                <div className="skillCard">
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { javascript } />
                        <div>JavaScript</div>
                    </div>
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { react } />
                        <div>React</div>
                    </div>
                </div>
                <div className="skillCard">
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { salesforce } />
                        <div>Salesforce</div>
                    </div>
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { golang } />
                        <div>Go</div>
                    </div>
                </div>
                <div className="skillCard">
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { git } />
                        <div>Git</div>
                    </div>
                    <div className="skill">
                        <img style = {{ width : 80, height : 80 }} src = { nodejs } />
                        <div>NodeJs</div>
                    </div>
                </div>
            </div>
    )
}

export default Skillset