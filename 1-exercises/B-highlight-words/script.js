function highlightWords(paragraph, colours) {
//link to "content" div
  let contentDiv = document.getElementById("content");
//create a <p> element
  let paragraphElement = document.createElement("p");
//create a <select> element
  let selectElement = document.createElement("select");
//create an <option> element
  let optionElement = document.createElement("option");
//create a <span> element
  let spanElement = document.createElement("span");
//turn "paragraph" variable into an array
  paragraph.split(" ");

//iterate over "colours" array
  for (let i = 0; i < colours.length; i++) {
//create an <option> element inside each <select> element for each item in "colours" array
    selectElement.appendChild(optionElement);
  }
//iterate over "paragraph" array
  for (index = 0, index < paragraph.length; index++) {
//set text content of <span> element 
    spanElement.innerText = `${paragraph[i] }`;
//append <span> element to <p> element
    paragraphElement.appendChild(spanElement);
  };
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
