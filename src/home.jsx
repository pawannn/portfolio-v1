import React from "react"
import ContactForm from './components/contactForm.jsx'
import Footer from './components/footer'
import Mediumcard from "./components/mediumCard.jsx"
import Skillset from './components/skillset'
import "./style/home.css"
import letsconnect from './assets/letsconnect.png'
import kerberos from './assets/medium/kerb.png'
import rabbitholes from './assets/medium/rabbitholes.png'
import identityrevealed from './assets/medium/identityrevealed.png'
import Homecard from "./components/homecard.jsx"
import Navbar from "./components/navbar.jsx"
import Contacticons from "./components/contactIcons.jsx"

const Home = () => {
   
    return (
        <div style={{marginTop : 70}}>
            <Navbar />
            <section className="aboutSection" id = "aboutSection">
                <h1 className = "title">About Me</h1>
                <div className="homepage" id = "home">
                    <Homecard />
                    <div className="contIcons">
                        <Contacticons gap = { 20 }/>
                    </div>
                </div>
            </section>
            <section className="skillSection">
                <h1 className = "title">Skills</h1>
                <div className="skills" id = "skills">
                    <div className="skillAnimation">
                        <div className="row-span-1 sm:col-span-2 place-self-center flex flex-col-reverse md:flex-row sm:justify-around items-center h-auto">
                        <div className="flex items-end relative w-full">
                            <svg id="boy" className="w-full" width="469" height="479" viewBox="0 0 496 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vector">
                                <g id="Rectangle 11" filter="url(#filter0_d)">
                                <rect x="15" y="14" width="476" height="299" fill="#F7FBF4"></rect>
                                </g>
                                <g id="coder">
                                <g id="l-body">
                                    <path id="Vector" d="M227.283 424.611L226.076 405.513L305.211 392.116L306.994 420.305L227.283 424.611Z" fill="#C69191"></path>
                                    <path id="Vector_2" d="M231.117 391.552L233.446 428.385L208.352 429.741L204.555 369.716C207.851 369.538 211.152 369.961 214.27 370.962C217.389 371.963 220.263 373.522 222.729 375.55C225.196 377.577 227.206 380.034 228.645 382.78C230.084 385.525 230.924 388.506 231.117 391.552Z" fill="#2F2E41"></path>
                                    <path id="Vector_3" d="M261.702 424.436L248.557 439.216L180.617 399.393L200.016 377.58L261.702 424.436Z" fill="#C69191"></path>
                                    <path id="foot" d="M234.599 446.302L259.949 417.798L279.368 432.549L238.057 479C235.506 477.063 233.394 474.68 231.84 471.989C230.286 469.297 229.321 466.349 229 463.313C228.679 460.277 229.008 457.212 229.969 454.293C230.929 451.374 232.502 448.659 234.599 446.302Z" fill="#2F2E41"></path>
                                    <path id="Vector_4" d="M223.875 355.705L214.892 394.841C214.685 395.742 214.697 396.674 214.926 397.571C215.155 398.467 215.596 399.306 216.217 400.026C216.838 400.746 217.624 401.331 218.519 401.737C219.413 402.144 220.394 402.362 221.391 402.377L309.698 403.694C310.693 403.708 311.68 403.52 312.587 403.141C313.495 402.762 314.3 402.203 314.946 401.503C315.592 400.803 316.063 399.979 316.324 399.092C316.585 398.204 316.631 397.274 316.458 396.368L308.734 355.915C308.458 354.47 307.64 353.161 306.424 352.218C305.207 351.275 303.67 350.758 302.083 350.758H230.482C228.934 350.758 227.433 351.25 226.23 352.15C225.028 353.051 224.196 354.305 223.875 355.705Z" fill="#2F2E41"></path>
                                    <path id="Vector_5" d="M238.519 369.484C238.519 369.484 152.403 319.548 135.517 346.077C127.074 359.341 131.296 372.215 137.628 381.773C143.504 390.476 151.939 397.454 161.947 401.89L231.764 433.465L257.093 408.497L240.207 394.452L238.519 369.484Z" fill="#2F2E41"></path>
                                    <path id="Vector_6" d="M282.421 361.681C282.421 361.681 393.865 332.032 371.914 388.21C349.963 444.389 267.224 422.541 267.224 422.541L258.781 399.134L287.487 380.408L282.421 361.681Z" fill="#2F2E41"></path>
                                </g>
                                <g id="u-body">
                                    <path id="body" d="M273.346 367.875C256.113 367.634 238.968 365.546 222.255 361.654L221.761 361.529L198.619 263.147C196.537 254.502 197.952 245.451 202.598 237.705C207.244 229.958 214.798 224.052 223.834 221.102C251.745 211.846 282.167 211.285 310.456 219.503H310.456C319.948 222.33 327.938 228.36 332.832 236.391C337.725 244.422 339.162 253.863 336.856 262.83L311.008 361.447L310.644 361.607C299.901 366.31 286.468 367.875 273.346 367.875Z" fill="#CCCCCC"></path>
                                    <g id="hands">
                                    <path id="Vector_7" d="M242.259 375.518C243.1 373.359 244.442 371.397 246.192 369.77C247.942 368.143 250.056 366.89 252.386 366.099C254.717 365.309 257.206 365 259.68 365.195C262.153 365.39 264.55 366.084 266.702 367.228L312.27 330.674L316.393 359.4L272.488 389.709C270.17 392.922 266.656 395.238 262.613 396.217C258.571 397.197 254.28 396.771 250.553 395.022C246.827 393.273 243.925 390.321 242.396 386.726C240.868 383.132 240.819 379.144 242.259 375.518Z" fill="#C69191"></path>
                                    <path id="righthand" d="M285.719 383.49C284.978 383.49 284.24 383.39 283.53 383.193C282.377 382.883 281.321 382.322 280.451 381.557C279.581 380.793 278.921 379.847 278.528 378.798L273.028 364.397C272.513 363.066 272.447 361.622 272.84 360.256C273.233 358.89 274.065 357.666 275.226 356.747L337.312 322.3L312.838 221.395L313.461 221.257C313.714 221.199 338.789 215.924 349.065 241.248C356.261 258.983 382.889 297.546 381.011 323.606C380.654 328.818 378.406 333.768 374.631 337.655C370.856 341.541 365.773 344.139 360.204 345.028L290.318 382.032C289.002 382.975 287.384 383.488 285.719 383.49Z" fill="#CCCCCC"></path>
                                    <path id="Vector_8" d="M292.682 372.095C291.842 369.936 290.499 367.974 288.75 366.347C287 364.719 284.886 363.466 282.555 362.676C280.225 361.886 277.735 361.577 275.262 361.772C272.789 361.967 270.392 362.661 268.24 363.805L222.672 327.25L218.549 355.977L262.453 386.286C264.772 389.499 268.286 391.815 272.328 392.794C276.371 393.773 280.662 393.348 284.388 391.599C288.114 389.849 291.017 386.898 292.545 383.303C294.074 379.708 294.123 375.72 292.682 372.095Z" fill="#C69191"></path>
                                    <path id="lefthand" d="M253.795 383.491C252.129 383.488 250.512 382.975 249.195 382.032L174.244 348.149C168.675 347.26 163.592 344.663 159.817 340.776C156.042 336.889 153.794 331.94 153.437 326.727C151.559 300.668 183.253 258.984 190.449 241.248C200.723 215.925 225.799 221.198 226.053 221.257L226.675 221.396L197.136 325.421L264.287 356.747C265.449 357.666 266.281 358.89 266.674 360.256C267.066 361.622 267.001 363.066 266.486 364.397L260.986 378.798C260.592 379.847 259.933 380.793 259.063 381.558C258.192 382.322 257.137 382.883 255.984 383.194C255.273 383.39 254.536 383.49 253.795 383.491Z" fill="#CCCCCC"></path>
                                    </g>
                                </g>
                                <g id="laptop">
                                    <path id="Vector_9" d="M343.209 399.134H192.928C189.794 399.131 186.79 397.979 184.574 395.931C182.358 393.883 181.112 391.106 181.108 388.21V311.745C181.112 308.849 182.358 306.073 184.574 304.025C186.79 301.977 189.794 300.825 192.928 300.822H343.209C346.342 300.825 349.347 301.977 351.563 304.025C353.778 306.073 355.025 308.849 355.029 311.745V388.21C355.025 391.106 353.778 393.883 351.563 395.931C349.347 397.979 346.342 399.131 343.209 399.134Z" fill="#6C63FF"></path>
                                    <path id="logo" d="M268.123 359.726C273.719 359.726 278.255 355.534 278.255 350.363C278.255 345.192 273.719 341 268.123 341C262.528 341 257.992 345.192 257.992 350.363C257.992 355.534 262.528 359.726 268.123 359.726Z" fill="white"></path>
                                </g>
                                <g id="head">
                                    <path id="Vector_10" d="M270.601 196.268C295.78 196.268 316.192 177.404 316.192 154.134C316.192 130.864 295.78 112 270.601 112C245.422 112 225.01 130.864 225.01 154.134C225.01 177.404 245.422 196.268 270.601 196.268Z" fill="#2F2E41"></path>
                                    <path id="Vector_11" d="M271.173 202.083C294.077 202.083 312.645 184.923 312.645 163.755C312.645 142.587 294.077 125.427 271.173 125.427C248.268 125.427 229.7 142.587 229.7 163.755C229.7 184.923 248.268 202.083 271.173 202.083Z" fill="#E0A9A9"></path>
                                    <path id="Vector_12" d="M229.285 162.195C226.827 156.433 230.86 149.566 236.842 146.775C242.825 143.984 250.044 144.515 256.443 146.355C261.821 147.901 266.861 150.296 272.108 152.188C277.28 154.307 282.93 155.237 288.576 154.899C294.172 154.315 299.742 151.415 302.032 146.659C304.406 141.73 302.791 135.715 299.136 131.509C295.247 127.442 290.213 124.452 284.595 122.872C272.256 118.854 258.003 118.737 246.548 124.577C235.093 130.416 227.308 142.85 229.676 154.741" fill="#2F2E41"></path>
                                </g>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d" x="0" y="0" width="496" height="319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                <feOffset dx="-5" dy="-4"></feOffset>
                                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                </filter>
                            </defs>
                            </svg>
                        </div>
                    </div>
                    </div>
                        <Skillset />
                </div>
            </section>
            <section style = {{marginTop : 50}} className="blogSection" id = "blogSection">
                <h1 className="title">My Blogs</h1>
                <div className="mediumCards" style = {{marginTop : 10}}>
                        <Mediumcard 
                        image = { kerberos } 
                        title = "Kerberos"
                        content = "Kerberos is a network authentication protocol, the standard way of confirming the identity of a user, that helps to verify the user identities over a non-secure network. "
                        views = "200+"
                        claps = "50+"
                        time = "9 Mins"
                        link = "https://medium.com/@togethergrow/kerberos-e7955ac82957"/>
                        <Mediumcard 
                        image = { rabbitholes }
                        title = "Rabbit Holes - Writeup"
                        content = "The is a Writeup of CTF competiton held by my College, in which I grabbed the 1st position. This CTF was based on Linux Vulnerability, Systems, Cryptography, Stegnography, etc."
                        views = "60+"
                        claps = "100+"
                        time = "24 Mins"
                        link = "https://medium.com/@togethergrow/rabbit-holes-try-hack-me-77358bd0dd6"/>
                        <Mediumcard 
                        image = { identityrevealed }
                        title = "Indetity Revealed - Writeup"
                        content = "This is a writeup of a CTF challenge, which is Based on Ohsint. It gives a knowledge on how to gather info of any victim or target from public sources."
                        views = "70+"
                        claps = "50+"
                        time = "6 Mins"
                        link = "https://medium.com/@togethergrow/identity-revealed-write-up-7823e0a427a3"/>
                </div>
            </section>
            <section className="contactSection" id = "contactSection">
                <div className="contact">
                    <img src={ letsconnect } alt="" />
                    <div className="contactForm">
                        <ContactForm />
                    </div>
                </div>
            </section>
            <section>
                <div className="footer">
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Home