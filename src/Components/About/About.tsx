import React from 'react'
import two from '../assets/Food-Plate.png'
import '../About/About.css'

function About() {
  return (
    <>
        <div className="about-page">
                <div className="brief">
                    <div className="as">
                        <img src={two} alt="" />
                        <div className="wording">
                            <div className="tag">
                                <h1><span>About</span> Us</h1>
                                <h3>Why choose us?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores odio obcaecati enim vel hic exercitationem minus in voluptatibus eos eaque, odit itaque soluta ex consequuntur blanditiis quia explicabo cum.</p>
                            </div>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About