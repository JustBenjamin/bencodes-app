import React from "react";
import './header.css';
import heroImage from "../ProfilePicture.png";




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
                    <h1 style={{width: "70%"}}>Frontend Developer in 
                        a conditional loop of iterative
                        learning.
                    </h1>
                    <button>LinkedIn</button>
                    <button>Medium</button>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Benjamin"  className="benjamin"/>
                </div>

            </div>


        </div>
    )
}