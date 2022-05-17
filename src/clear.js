window.Clear = function() {
    let headerDiv = document.getElementById("header");
    headerDiv.remove();

    let containerDiv = document.getElementById("container");
    containerDiv.remove();

    let footerDiv = document.getElementById("footer");
    footerDiv.remove();

}

