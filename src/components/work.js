import React from "react";
import './work.css';
import advice from "../images/advice-generator.png";
import age from "../images/age-calculator.png";
import tip from "../images/tip-calculator.png";
import calculator from "../images/calculator.png";
import news from "../images/news.png"
import intro from "../images/intro.png"



export default function Work() {
    return (
        <div className="work" id="work">
            <h1>Projects</h1>

                  {/* section 1 */}
                <div className="section">
                
                {/* project */}
                    <div className="project">
                        <img src={advice} alt="advice generator"/>
                        <h2>Advice Generator</h2>
                        <h4>HTML, CSS, JS and API</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-advice-generator.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/advice-generator-app-main" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>


                    {/* project */}
                    <div className="project">
                        <img src={tip} alt="tip calculator"/>
                        <h2>Tip Calculator</h2>
                        <h4>HTML, CSS and JS</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-tip-calculator.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/tip-calculator-app-main" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>

                </div>


                  {/* section 2 */}
                  <div className="section">
                
                {/* project */}
                    <div className="project">
                        <img src={age} alt="age calculator"/>
                        <h2>Age Calculator</h2>
                        <h4>HTML, CSS and JS</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-age-calculator.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/age-calculator-app-main" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>


                    {/* project */}
                    <div className="project">
                        <img src={calculator} alt="calculator"/>
                        <h2>Calculator</h2>
                        <h4>HTML, CSS and JS</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-calculator.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/calculator-app-main" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>

                </div>

                  {/* section 3 */}
                  <div className="section">
                
             
                    <div className="project">
                        <img src={intro} alt="intro"/>
                        <h2>Intro Page UI</h2>
                        <h4>React Js</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-intro-section.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/intro-section-app" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>


                    {/* project */}
                    <div className="project">
                        <img src={news} alt="news ui"/>
                        <h2>News Page UI</h2>
                        <h4>React Js</h4>
                    <div className="btns">
                        <a className="preview" href="https://bencodes-news-app.netlify.app/" target="_blank" rel="noreferrer">Preview</a>
                        <a className="code" href="https://github.com/JustBenjamin/news-app" target="_blank" rel="noreferrer">Code</a>
                    </div>
                    </div>

                    </div>

          
          
        </div>
    )
}