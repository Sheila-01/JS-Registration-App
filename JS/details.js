//referencing elements using the querry selector
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');

const ourContent = document.querySelector(".content");       //referencing the div class content in the html
const ourList = [];                                         //creating an aray for the list items


firstName.onchange = function(){
    if ( firstName.value.length<3 || firstName.value ==="" )
{
    alert('Please enter atleast three characters');
} else 
{
    //using the on-change method
   ourList.push(firstName.value);
   console.log(ourList);

   const ourPara = document.createElement('span');              //creating a span
   ourPara.className = 'ourPara';                              //giving the span a class name  
   
   ourList.forEach( function (item, index) {
       console.log(index, item);                               //prints in the console
       ourPara.innerHTML = item;

    let num =index+1;                                           //created variable to help in the numbering

       ourPara.innerHTML = num + "." + item;                   //prints numbering of the items in the body
    //    ourPara.innerHTML = `${index+1} + ${item}`             // does the same as line 22
       ourContent.appendChild(ourPara);
   })
}};

console.log("App")
