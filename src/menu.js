window.Menu = function() {


    
    
    //Set Root of Div
    const rootDiv = document.getElementById("content");

    
    //Header Div Creation
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    rootDiv.insertBefore(headerDiv, rootDiv.children[0]);
    

    //Home Button Creation in Home Button
    let homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "home")
    homeDiv.setAttribute("onclick", "Clear();Home()");
    homeDiv.innerHTML = "HOME";
    headerDiv.insertBefore(homeDiv, headerDiv.children[0]);

    //Menu Button Creation in Home Button
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");
    menuDiv.setAttribute("onclick", "Clear();Menu()");
    menuDiv.innerHTML = "MENU";
    headerDiv.insertBefore(menuDiv, headerDiv.children[1]);

    //Contact Button Creation in Home Button
    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact");
    contactDiv.setAttribute("onclick", "Clear();Contact()");
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

    //menu title div
    let menuTitleDiv = document.createElement("div");
    menuTitleDiv.setAttribute("id", "menu-title");
    menuTitleDiv.innerHTML = "Menu";
    centerDiv.insertBefore(menuTitleDiv, centerDiv.children[0]);

    //beverage container
    let beverageContainerDiv = document.createElement("div");
    beverageContainerDiv.setAttribute("id", "beverage-container");
    centerDiv.insertBefore(beverageContainerDiv, centerDiv.children[1]);

    //beverage title div
    let beverageTitleDiv = document.createElement("div");
    beverageTitleDiv.setAttribute("id", "beverage-title");
    beverageTitleDiv.innerHTML = "Beverages";
    beverageContainerDiv.insertBefore(beverageTitleDiv, beverageContainerDiv.children[0]);

    //beverage list div
    let beverageListDiv = document.createElement("div");
    beverageListDiv.setAttribute("id", "beverage-list");
    beverageListDiv.innerHTML = "Coke $1.50 <br/> Sprite $1.50 <br/> Matcha $2.00 <br/> Boba Tea $3.00<br/>";
    beverageContainerDiv.insertBefore(beverageListDiv, beverageContainerDiv.children[1]);

    //Food container
    let foodContainerDiv = document.createElement("div");
    foodContainerDiv.setAttribute("id", "food-container");
    centerDiv.insertBefore(foodContainerDiv, centerDiv.children[2]);

    //food title
    let foodTitleDiv = document.createElement("div");
    foodTitleDiv.setAttribute("id", "food-title");
    foodTitleDiv.innerHTML = "Food";
    foodContainerDiv.insertBefore(foodTitleDiv, foodContainerDiv.children[0]);

    //food list
    let foodListDiv = document.createElement('div');
    foodListDiv.setAttribute("id", "food-list");
    foodListDiv.innerHTML = "Burger $1.50 <br/>Pizza $2.50<br/>";
    foodContainerDiv.insertBefore(foodListDiv, foodContainerDiv.children[1]);

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

