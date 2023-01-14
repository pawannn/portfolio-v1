import React from "react"
import '../style/mediumcard.css'
import views from '../assets/medium/views.svg'
import claps from '../assets/medium/claps.svg'
import time from '../assets/medium/time.svg'
import mediumprofile from '../assets/medium/mediumprofile.png'

const Mediumcard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <a href = { props.link }><img src = { props.image } style = {{
                }}/></a>
            </div>
            <div className="cont">
                <h1 style={ {
                    fontSize : 28,
                    marginBottom : 5,
                    borderBottom : 3, 
                    borderTop : 0,
                    borderLeft : 0,
                    borderRight : 0,
                    borderStyle : "solid", 
                    borderColor : "#E2E8F0",
                }}>{ props.title }</h1>
                <p style={ {
                    fontSize : 14,
                    paddingLeft : 3,
                    paddingRight : 3,
                    paddingTop : 10,
                }}>{ props.content }</p>
            </div>
            <div className="bottomCard" style = {{ padding : 2, 
                borderBottom : 3, 
                borderTop : 0,
                borderLeft : 0,
                borderRight : 0,
                borderStyle : "solid", 
                borderColor : "#E2E8F0", }} >
                <div className="views" >
                    <img src = { views }/>
                    <div>{ props.views }</div>
                </div>
                <div className="views" style = {{ marginRight : 10 }}>
                    <img src = { claps } />
                    <div>{ props.claps }</div>
                </div>
            </div>
            <div className="bottomCard" style={{ padding : 2 ,paddingTop : 10 }}>
                <div className="views">
                    <a href = "https://medium.com/@togethergrow"><img src ={ mediumprofile } style = {{ width : 50, height : 40 }}/></a>
                    <div>Pawan Kalyan</div>
                </div>
                <div className="views">
                    <img src = { time }/>
                    <div style = {{ marginRight : 10 }}>{ props.time }</div>
                </div>
            </div>
        </div>
    )
}

export default Mediumcard