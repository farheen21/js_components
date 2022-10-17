
const labelInputFeild = document.querySelector('#labelValue');

const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');


labelInputFeild.addEventListener('keyup' , (event) => {
   
    const keyPressed = event.key;
   

    if(keyPressed === "Enter" ) {
        // Create Input Field 
       const type = inputType.value;
       const label = labelInputFeild.value;
       console.log(type , label);

       const labelInput = document.createElement("label");
       const div = document.createElement("div");

       let input = null ;
       if( type === 'textarea') {
          input = document.createElement("textarea");
       }
       else {
         input = document.createElement("input");
       }
        
       input.classList.add('form-control' , 'p-3');
       labelInput.classList.add('form-label');
       div.classList.add('mb-3');


       labelInput.innerHTML = label;
       input.type =  type;
        if (type === 'submit') {
            input.classList.add('btn' , 'btn-success');
            input.value = label;

        }
       if ( type != 'submit') {
        div.appendChild(labelInput);
       }
      
       div.appendChild(input);

       form.appendChild(div);

    }
});