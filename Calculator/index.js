
// TODO 
// ADD different operater's functionality 
let string = '';
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener('click' , (e)=> {

   if (e.target.innerHTML == '=') {
     string = eval(string);
     document.querySelector('#view').value = string;
   }
   else if (e.target.innerHTML == 'C') {
    string = "";
    document.querySelector('#view').value = string;
  }
  
   else {
    console.log(e.target);
    string = string + e.target.innerHTML;
    console.log(string);
    document.querySelector('#view').value = string;
   }
  })
})