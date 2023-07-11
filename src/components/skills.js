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
        </div>
    )

}