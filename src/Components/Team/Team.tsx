import React from 'react'
import '../Team/Team.css'
import chef1 from '../assets/chef1.png'
import chef2 from '../assets/chef2.png'
import chef3 from '../assets/chef3.jpg'
import chef4 from '../assets/chef4.jpg'

function Team() {
  return (
    <div>
        <div className="team">
        <h1>Our<span>Team</span></h1>

        <div className="team_box">
            <div className="profile">
            <img src={chef1} />

                <div className="info">
                    <h2 className="name">Chef</h2>
                    <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="team_icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
            <img src={chef2} />

                <div className="info">
                    <h2 className="name">Chef</h2>
                    <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="team_icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
            <img src={chef3} />

                <div className="info">
                    <h2 className="name">Chef</h2>
                    <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="team_icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
                <img src={chef4} />

                <div className="info">
                    <h2 className="name">Chef</h2>
                    <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="team_icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </div>
  )
}

export default Team