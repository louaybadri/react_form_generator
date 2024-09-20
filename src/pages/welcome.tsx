import React from "react";

const  WelcomePage: React.FC<{ handleNext: () => void }> = ({ handleNext }) => (
    <>
        <svg className="w-32 xl:w-48" fill="currentColor" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1476.59 219.93">
            <path d="M41.55,129.34v90.6H0V0H226.18V32.49H41.55V96.85H213.69v32.49H41.55Z"></path>
            <path className="cls-1" d="M244.21,219.93V0h41.55V219.93h-41.55Z"></path>
            <path d="M578.7,219.93L465.3,42.8l-115.28,177.13h-46.24L449.99,0h30.3l145.27,219.93h-46.86Z"></path>
            <path d="M650.77,219.93v-32.49h191.19c18.74,0,27.49-7.19,27.49-20.31v-27.8c0-13.12-8.75-20.31-27.49-20.31h-129.34c-49.99,0-69.04-21.56-69.04-53.11v-12.81c0-31.55,19.06-53.11,69.04-53.11h186.19V32.49h-186.19c-18.74,0-27.49,7.19-27.49,20.31v13.43c0,13.12,8.75,20.31,27.49,20.31h129.34c49.99,0,69.04,21.56,69.04,53.11v27.18c0,31.55-19.06,53.11-69.04,53.11h-191.19Z"></path>
            <path d="M998.07,219.93c-49.99,0-69.04-21.56-69.04-53.11V53.11c0-31.55,19.06-53.11,69.04-53.11h177.13V32.49h-177.13c-18.74,0-27.49,7.19-27.49,20.31v114.34c0,13.12,8.75,20.31,27.49,20.31h177.13v32.49h-177.13Z"></path>
            <path d="M1262.27,219.93c-49.99,0-69.04-21.56-69.04-53.11V53.11c0-31.55,19.06-53.11,69.04-53.11h145.27c49.99,0,69.04,21.56,69.04,53.11v113.72c0,31.55-19.06,53.11-69.04,53.11h-145.27Zm172.76-167.14c0-13.12-8.75-20.31-27.49-20.31h-145.27c-18.74,0-27.49,7.19-27.49,20.31v114.34c0,13.12,8.75,20.31,27.49,20.31h145.27c18.74,0,27.49-7.19,27.49-20.31V52.8Z"></path>
        </svg>
        <br/>
        <button onClick={handleNext} className="btn btn-success">Start</button>
    </>
);


export default WelcomePage;