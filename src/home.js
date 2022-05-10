window.Home = function() {
    
    //Set Root of Div
    const rootDiv = document.getElementById("content");

    //Header Div Creation
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    rootDiv.insertBefore(headerDiv, rootDiv.children[0]);

    //Home Button Creation in Home Button
    let homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "home")
    homeDiv.setAttribute("onclick", "Home()");
    homeDiv.innerHTML = "HOME";
    headerDiv.insertBefore(homeDiv, headerDiv.children[0]);

    //Menu Button Creation in Home Button
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");
    menuDiv.setAttribute("onclick", "Menu()");
    menuDiv.innerHTML = "MENU";
    headerDiv.insertBefore(menuDiv, headerDiv.children[1]);

    //Contact Button Creation in Home Button
    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact");
    contactDiv.setAttribute("onclick", "Contact()");
    contactDiv.innerHTML = "CONTACT";
    headerDiv.insertBefore(contactDiv, headerDiv.children[2]);

    //Container Div creation
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container");
    rootDiv.insertBefore(containerDiv, rootDiv.children[1]);

    //inner container creation
    let innercontainerDiv = document.createElement("div");
    innercontainerDiv.setAttribute("id", "innercontainer");
    containerDiv.insertBefore(innercontainerDiv, containerDiv.children[0]);

    //left div creation
    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("id", "left");
    innercontainerDiv.insertBefore(leftDiv, innercontainerDiv.children[0]);

    //center div creation
    let centerDiv = document.createElement("div");
    centerDiv.setAttribute("id", "center");
    innercontainerDiv.insertBefore(centerDiv, innercontainerDiv.children[1]);

    //right div creation
    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("id", "right");
    innercontainerDiv.insertBefore(rightDiv, innercontainerDiv.children[2]);
  

}

Home();

