//referencing elements using the querry selector
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');

const contentArea = document.querySelector(".content");
const contentAreaInput = document.querySelector(".p-content");

//creating Elements using createElement
const ourParagraph = document.createElement("p");// appears below the input and goes away if input is deleted
const ourInputParagraph = document.createElement("p");

//using the oninput event
firstName.oninput = function(){
    ourInputParagraph.innerText= firstName.value; //assigned the inner text of the para to the value of the input with an id of firstname.
    contentAreaInput.appendChild(ourInputParagraph);//gets the para and puts it within the div with class of p-content as declared above.
};
//using the onchange event
firstName.onchange = function(){
    ourParagraph.innerText= firstName.value;
    contentArea.appendChild(ourParagraph);
    ourInputParagraph.innerText= ""; 
    firstName.value="";
}

//console.log(firstName.value)
//console.log(secondName.value)
console.log(ourParagraph)