/*
=> The DOM is the structured representation of your HTML document.
=> JavaScript can access, modify, or remove elements using DOM.  */


const ele =document.getElementsByTagName("p");          // TO modify the text of an element
ele.InnerText="DOM is Awesome";
console.dir(ele);

const ele2 =document.querySelector("body");           // TO get Inner HTML elements
console.dir(ele2.innerHTML);


const para =document.getElementById("parah");       // to add styling to an element
para.style.color="red";
para.style.backgroundColor="yellow";
para.style.fontsize="25px";

function addclass(){                                  // to add a class to an element
  para.classList.add("class1");
}
function removeclass(){
  para.classList.remove("class1");
}
function toggleclass(){
  para.classList.toggle("class2");
}