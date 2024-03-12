import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "../js/component/counter";


let counter = 0;

setInterval(() => {

    let six = Math.floor((counter / 100000) % 10);
    let five = Math.floor((counter / 10000) % 10);
    let four = Math.floor((counter / 1000) % 10);
    let three = Math.floor((counter / 100) % 10);
    let two = Math.floor((counter / 10) % 10);
    let one = counter % 10;

    counter++

    console.log("Este es el contador de cada digito!!!! ----->", six, five, four, three, two, one)

    ReactDOM.render(
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />,
        document.querySelector("#app")
    );
}, 1000);