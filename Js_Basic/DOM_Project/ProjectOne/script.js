
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button');

buttons.forEach( (button) => {
     button.addEventListener('click', (e)=>{
         e.preventDefault()
               console.log(e.target.id);
               
           if(e.target.id == 'blue'){
               body.style.backgroundColor = e.target.id 
           }
           else if (e.target.id == 'yellow'){
               body.style.backgroundColor = e.target.id 
           }
           else if (e.target.id == 'green'){
               body.style.backgroundColor = e.target.id 
           }
           else if (e.target.id == 'red'){
               body.style.backgroundColor = e.target.id 
           }
           else if (e.target.id == 'orange'){
               body.style.backgroundColor = e.target.id 
           }else body.style.backgroundColor = 'white'
           
     })
})