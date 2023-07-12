import React from "react";
import './skills.css';
import html from '../icons/1.png'
import css from '../icons/2.png'
import js from '../icons/3.png'
import reactIcon from '../icons/4.png'

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1 style={{margin: "4rem 0"}}>Tech Stack</h1>
            <ul>
                <li>
                    <img src={html} alt=""/>
                    HTML</li>
                <li>
                <img src={css} alt=""/>
                    CSS</li>
                <li>
                <img src={js} alt=""/>
                    JavaScript</li>
                <li>
                <img src={reactIcon} alt=""/>
                    React</li>
            </ul>

            <div className="pro">
                <div className="proficiencies">
                    <h2>Proficiencies</h2>
                    <p> HTML/CSS/JS | React | Tailwind CSS | Bootstrap | Git | 
                        TypeScript | APIs | Python | UI/UX Design (Figma) | 
                        Graphic Design (Photoshop) | Accessibility | SEO
                    </p>
                </div>

                <div className="education">
                    <h2>Education</h2>
                    <p>Master's degree in Computer Science</p>
                    <p>Bachelor's degree in Business Administration</p>
                    <p>Associate's degree in Web Development</p>

                </div>


            </div>
        </div>
    )

}