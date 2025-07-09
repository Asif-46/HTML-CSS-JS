const btn =document.getElementById("btn1");
btn.addEventListener("click",()=>{
  alert("Button Clicked");
})
btn.addEventListener("click",()=>{
  document.querySelector("h1").innerText="new Heading";
})


// Toggle light or Dark Mode
let dark =false;
document.querySelector("#btn2").addEventListener("click",()=>{
  if(dark){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  }else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
  }
  dark=!dark; // Toggle the dark variable
})

// form
document.querySelector("#f").addEventListener("submit",(e)=>{
  e.preventDefault();
  document.querySelector("#name").value.trim();
  document.querySelector("#email").value.trim();
  if(!name ||!email){
    alert("Please fill all the fields");
  }else{
    document.querySelector("msg").textContent="Form Submitted Successfully";
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
  }
  

})