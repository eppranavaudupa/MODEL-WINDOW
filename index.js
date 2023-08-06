const model = document.querySelector('.modelhidden');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.closemodel');
const classMo=document.querySelector('.classmodel');
const btnsopenmodel = document.querySelectorAll('.showmodel'); // Use querySelectorAll instead of querySelector

// This will log the NodeList containing all matching elements

for (let i = 0; i < btnsopenmodel.length; i++)
btnsopenmodel[i].addEventListener('click',function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden')
    // model.style.display='block';
})

classMo.addEventListener('click',function(){
    model.classList.add('hidden')
    overlay.classList.add('hidden')
})
overlay.addEventListener('click',function(){
    model.classList.add('hidden')
    // overlay.classList.add('hidden')//this or below one both are possible to remove
    overlay.remove('overlay')
}
);

//using keypress write anything in web page 
const type=document.querySelector("#type");
document.addEventListener("keypress",(e)=>{
type.textContent+=e.key;
})
//remove the the model window by clicking the esc button
document.addEventListener("keydown",(e)=>{
    if(e.key=="Escape"){
        model.classList.add("hidden");
        overlay.classList.add("hidden");
    }
    //using backspace remove the last element one by one
    if(e.key=="Backspace"){
        const arr=type.textContent.split("");
        arr.pop();
        type.textContent=arr.join("");
    }
})
