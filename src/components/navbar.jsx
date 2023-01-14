import React,  { useState } from "react"
import '../style/navbar.css'
import menu from '../assets/menu.svg'

const Navbar = () => {
    const [about, setabout] = useState('< About >');
    const [skills, setSkills] = useState('< Skills >');
    const [blog, setBlog] = useState('< Blogs >');
    const [contact, setContact] = useState('< Contact >');
    const [displayMobileNav, setDisplayMobileNav] = useState(false);

    return (
        <div className="navbar">
            <div className="sectioncontainer">
                <div className="hireme" onClick={() => window.location.href = './hireme'}>Hire Me</div>
                <div className="sections" id = "sections">
                    <span onMouseEnter={ () => setabout('< About />') } onMouseOut = {() => {setabout('< About >')}} onClick = { () => window.location.replace('/#aboutSection') } >{ about }</span>
                    <span onMouseEnter={ () => setSkills('< Skills />') } onMouseOut = {() => {setSkills('< Skills >')}} onClick = { () => window.location.replace('/#skills') }>{ skills }</span>
                    <span onMouseEnter={ () => setBlog('< Blogs />') } onMouseOut = {() => {setBlog('< Blogs >')}} onClick = { () => window.location.replace('/#blogSection') }>{ blog } </span>
                    <span onMouseEnter={ () => setContact('< Contact />') } onMouseOut = {() => {setContact('< Contact >')}} onClick = { () => window.location.replace('/#contactSection') }>{ contact }</span>
                </div>
                {displayMobileNav ? (<div className="sections1" id = "sections">
                    <span onMouseEnter={ () => setabout('< About />') } onMouseOut = {() => {setabout('< About >')}} onClick = { () => window.location.replace('/#aboutSection') }>{ about }</span>
                    <span onMouseEnter={ () => setSkills('< Skills />') } onMouseOut = {() => {setSkills('< Skills >')}} onClick = { () => window.location.replace('/#skills') }>{ skills }</span>
                    <span onMouseEnter={ () => setBlog('< Blogs />') } onMouseOut = {() => {setBlog('< Blogs >')}} onClick = { () => window.location.replace('/#blogSection') }>{ blog }</span>
                    <span onMouseEnter={ () => setContact('< Contact />') } onMouseOut = {() => {setContact('< Contact >')}} onClick = { () => window.location.replace('/#contactSection') }>{ contact }</span>
                </div>) : ('') }
            </div>
            <div className="menu">
                <img width={ 48 } height = { 48 } src = { menu } alt = "menu" onClick = { () =>  setDisplayMobileNav(!displayMobileNav) } />
            </div>
        </div>
    )
}

export default Navbar