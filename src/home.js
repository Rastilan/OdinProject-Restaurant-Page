window.Home = function() {

    if(document.getElementById("rest-name")){
        return;
    }
    
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

    // INNER CONTENT
    //rest name
    let restNameDiv = document.createElement("div");
    restNameDiv.setAttribute("id", "rest-name");
    restNameDiv.innerHTML = "Café Leblanc";
    centerDiv.insertBefore(restNameDiv, centerDiv.children[0]);

    //rest quote
    let restQuoteDiv = document.createElement("div");
    restQuoteDiv.setAttribute("id", "rest-quote");
    restQuoteDiv.innerHTML = "Leblanc is a café in Yongen-Jaya owned by Sojiro Sakura, famous for its signature coffee and curry.";
    centerDiv.insertBefore(restQuoteDiv, centerDiv.children[1]);

    //rest hours container
    let restHoursContainerDiv = document.createElement("div");
    restHoursContainerDiv.setAttribute("id", "rest-hours-container");
    centerDiv.insertBefore(restHoursContainerDiv, centerDiv.children[2]);

    //rest hours title
    let restHoursTitleDiv = document.createElement("div");
    restHoursTitleDiv.setAttribute("id", "rest-hours-title");
    restHoursTitleDiv.innerHTML = "Hours";
    restHoursContainerDiv.insertBefore(restHoursTitleDiv, restHoursContainerDiv.children[0]);

    //rest hours
    let restHoursDiv = document.createElement("div");
    restHoursDiv.setAttribute("id", "rest-hours");
    restHoursDiv.innerHTML = "Sunday: 8am - 8pm      <br/> Monday: 6am - 6pm      <br/>Tuesday: 6am - 6pm     <br/>Wednesday: 6am - 6pm   <br/>Thursday: 6am - 10pm   <br/>Friday: 6am - 10pm     <br/> Saturday: 8am - 10pm";
    restHoursContainerDiv.insertBefore(restHoursDiv, restHoursContainerDiv.children[1]);

    let locationDiv = document.createElement("div");
    locationDiv.setAttribute("id", "location");
    locationDiv.innerHTML = "Yongen-Jaya";
    centerDiv.insertBefore(locationDiv, centerDiv.children[3]);


    //right div creation
    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("id", "right");
    innercontainerDiv.insertBefore(rightDiv, innercontainerDiv.children[2]);


    //footer div creation
    let footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");
    footerDiv.innerHTML = "Webpage built using hopes and dreams... but mostly Javascript - This project is just a proof of concept for the code. The design is very basic due to this.";
    rootDiv.insertBefore(footerDiv, rootDiv.children[2]);
  

}

Home();

