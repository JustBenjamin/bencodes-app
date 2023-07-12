import React from "react";
import email from "../icons/email.png";

export default function Contact()  {

    const footerStyle = {
        paddingTop: "5rem",
        paddingBottom: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

        

    }

    const emailStyle = {
        width: "50px"
    }





    return (
        <div style={{marginTop:"4rem"}} id="contact">
            <h4>Contact Me</h4>
            <a href="@mailto:benhove86@gmail.com" target="_blank" rel="noreferrer">
                <img src={email} alt="email"  style={emailStyle} />
            </a>

            <footer style={footerStyle}>

            <p style={{marginRight:"2rem"}}>© Benjamin Hove 2023</p>
            <a  target="_blank" rel="noreferrer" href="https://icons8.com" style={{color: "white", textDecoration: "none"}}> Icons by Icons8</a>
            </footer>

        </div>
    )
}