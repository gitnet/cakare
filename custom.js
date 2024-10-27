// Script to open and close sidebar
function cakare_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function cakare_close() {
  document.getElementById("mySidebar").style.display = "none";
}

fetch('./weddingcake.json').then(response => response.json()).then(data => loadCake(data,"wedding_cake"));
fetch('./cupcake.json').then(response => response.json()).then(data => loadCake(data,"cup_cake"));

function loadCake(arr, render_div) {
  let mainnode;
  for (let i = 0; i < arr.length; i++) {
      // Create main container for each cake item
        mainnode = document.createElement("div");
        mainnode.classList.add("Cakare-quarter");

      // Create and append the image
      let imgNode = document.createElement("img");
      imgNode.src = arr[i].image;
      imgNode.style.width = "100%";
      mainnode.appendChild(imgNode);

      // Create and append the title
      let titleNode = document.createElement("h3");
      let titleText = document.createTextNode(arr[i].title);
      titleNode.appendChild(titleText);
      mainnode.appendChild(titleNode);

      // Create and append the description
      let descNode = document.createElement("p");
      let descText = document.createTextNode(arr[i].desc);
      descNode.appendChild(descText);
      mainnode.appendChild(descNode);

      document.getElementById(render_div).appendChild(mainnode);
  }
      // Append the main node to the wedding cake container
      
}
