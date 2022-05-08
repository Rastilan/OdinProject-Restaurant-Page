import exports from 'webpack';
import './style.css';

function Home() {
    console.log("test");
    //const rootDiv = document.getElementById("content");
    //let newDiv = document.createElement("div").setAttribute("id", "header");
    //rootDiv.appendChild('beforeend', newDiv);
    
    let newDiv = document.getElementById("home");
    newDiv.setAttribute("onclick", "Home(0);");

    return newDev;
}
Home();
