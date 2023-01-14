import React, { useState } from 'react'
import '../style/homecard.css'


const Homecard = () => {

    const [tag1, setTag1] = useState('h1');
    const [tag2, setTag2] = useState('h1');

    function bounce(){
        gsap.from();
    }

    return (
        <div className='homecard'>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
            <div className="Card">
                <div className="nameCard">
                        {/* <h1>&lt;<span contentEditable = "true"> h1 </span>&gt; Hello, &lt;/<span contentEditable = "true"> h1 </span>&gt;</h1>
                        <h1>&lt;<span contentEditable = "true"> h1 </span>&gt; I'm Pawan Kalyan &lt;/<span contentEditable = "true">h1 </span>&gt;</h1>
                        <p>A Compi-Sci Engineer, Web Developer, Salesforce Developer and an Enthusiastic programmer.</p> */}
                        <h1>&lt; h1 &gt; Hello, &lt;/ h1 &gt;</h1>
                        <h1>&lt; h1 &gt; I'm Pawan Kalyan &lt;/ h1 &gt;</h1>
                        <p>A Compi-Sci Engineer, Web Developer, Salesforce Developer and an Enthusiastic programmer.</p>
                        
                </div>
                <div className="yellowCard"></div>
            </div>
        </div>
    )
}

export default Homecard