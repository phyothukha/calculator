import './style.scss'

let radio=document.querySelectorAll('.change-color');
let controller=document.querySelector('.controller')
let button=document.querySelector('.key-button')
let btn=document.querySelectorAll('button');
let value=document.querySelector('#value');
let main=document.querySelector('body');


let first=document.querySelector('#first');
first.addEventListener('click',_=>{
    main.setAttribute('id','first');
})

let third=document.querySelector('#third');
third.addEventListener('click',_=>{
    main.setAttribute('id','third');

})
let second=document.querySelector('#second');
second.addEventListener('click',_=>{
    main.setAttribute('id','second');

})

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click',function (){
        if(this.innerHTML=== "="){
            value.innerHTML = eval(value.innerHTML);
            // console.log(btn);
            // console.log(value.innerHTML)
        }else{

            if(this.innerHTML=== "Reset"){
                value.innerHTML='0';

            }else if(this.textContent==="Del"){

                value.textContent=value.textContent.substr(0,value.innerText.length-1);
            }else{

                value.innerHTML+= this.innerHTML;

            }

        }

    })
}



