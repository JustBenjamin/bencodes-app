import React from "react";
import './header.css';
import heroImage from "../ProfilePicture.png";
import medium from "../icons/medium-png.png";
import github from "../icons/github-96.png";
import linkedin from "../icons/linkedin.png";




export default function Header() {



    return (
        <div className="header" id="home">
            <nav>
                <div>
                    <h2>BH</h2>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="theme">
                <span>🌙</span>
                <span></span>
                </div>
            </nav>

            <div className="hero">
                <div className="hero-text">
                    <h1>Frontend Developer in 
                        a conditional loop of iterative
                        learning.
                    </h1>
                    
                    <div className="cta">
                    <a href="https://www.linkedin.com/in/benjamin-hove-web-developer-new-jersey/" target="_blank" rel="noreferrer"  >
                        <img src={linkedin} alt="linkedin" className="linkedin"/>
                        </a>
                        
                        <a href="https://github.com/JustBenjamin" target="_blank" rel="noreferrer"  >
                        <img src={github} alt="github" className="github"/>
                        </a>

                        <a href="https://benjaminhove.medium.com/" target="_blank" rel="noreferrer" >
                        <img src={medium} alt="medium" className="medium"/>
                        </a>
                      
                    
                        
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Benjamin"  className="benjamin"/>
                </div>

            </div>


        </div>
    )
}