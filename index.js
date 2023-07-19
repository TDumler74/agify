const formElement=document.getElementById("form");
const answerElement = document.getElementById("answer");

formElement.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    event.target.name.value="";
    console.log(name);
    loadAge(name);
});

async function loadAge(name){
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    const obj = await res.json();
    console.log(obj);
    const{name : firstName,age}= obj;
    console.log(firstName);
    console.log(age);
    answerElement.textContent = ` name:${name} age: ${age}` 
}
